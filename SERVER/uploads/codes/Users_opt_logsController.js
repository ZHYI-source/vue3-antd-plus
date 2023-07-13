const mongoose = require('mongoose')
const {body, validationResult} = require('express-validator');
const {Users_opt_logsModel} = require('@models/v1')
const tokenAuthentication = require('@middlewares/tokenAuthentication')
const apiResponse = require('@utils/utils.apiResponse')
const {checkApiPermission} = require("@middlewares/authMiddleware");
/**
 * 权限：
 * 'sys:users_opt_logs:list'
 * 'sys:users_opt_logs:create'
 * 'sys:users_opt_logs:update'
 * 'sys:users_opt_logs:delete'
 */

/**
 * 获取操作日志列表
 * @param {Object} req - 请求对象，包含查询参数
 *  -query: {
 *   params: {}, 查询参数 (object)
 *       pagination: {
 *           current: 1, 当前页码 (number)
 *           pageSize: 10,页面大小 (number)
 *       },
 *       sort: {
 *           columnKey: "createdAt",
 *           order: "ascend"
 *        }
 *   },
 * @param {Object} res - 响应对象
 * @returns {Object} - 包含操作日志列表及分页信息的响应对象
 */
exports.users_opt_logslist = [
    tokenAuthentication,
    checkApiPermission('sys:users_opt_logs:list'),
    async (req, res, next) => {
        try {
            let query = req.body;
            // 如果 query.params 为空，则设置一个空对象作为默认值
            let params = query.params || {};
            let current = Number(query.pagination?.current || 1) || 1;
            let pageSize = Number(query.pagination?.pageSize || 15) || 15;
            // 修改排序参数
            let sortColumn = query.sort?.columnKey || 'createdAt'; // 默认排序字段为 'id'
            let sortOrder = query.sort?.order === 'ascend' ? 1 : -1; // 根据排序顺序确定排序方式 1 升序 -1降序（descend：大-小）
            // 对 params 的每个属性值进行模糊匹配
            let fuzzyParams = {};
            for (let key in params) {
                if (params.hasOwnProperty(key)) {
                    fuzzyParams[key] = {$regex: new RegExp(params[key], 'i')};
                }
            }

            let aggregationPipeline = [
                // 使用提供的查询参数进行文档筛选
                {$match: fuzzyParams},
                {$sort: {[sortColumn]: sortOrder}},
                {$skip: (current - 1) * pageSize},
                {$limit: pageSize}
            ];

            let [result, total] = await Promise.all([
                // 执行聚合查询获取结果数据
                Users_opt_logsModel.aggregate(aggregationPipeline),
                // 计算满足查询条件的文档总数
                Users_opt_logsModel.countDocuments(query.params)
            ]);

            return apiResponse.successResponseWithData(res, "Success.", result.length > 0 ? {
                result,
                current,
                pageSize,
                total
            } : {result: [], total});
        } catch (err) {
            next(err); // 将错误传递给下一个中间件（全局错误处理中间件）
        }
    }
]

/**
 * 创建操作日志
 * @param {Object} req - 请求对象，包含查询参数
 *    - params: 包含当前页码、页面大小和查询参数
 * @returns {object} 200 - 成功响应
 * @returns {object} 400 - 参数验证错误
 * @returns {Error} default - 未知错误
 * @security JWT - 需要提供有效的访问令牌
 */
exports.users_opt_logsCreate = [
    tokenAuthentication,
    checkApiPermission('sys:users_opt_logs:create'),
    [


        body("operator").notEmpty().withMessage('操作人不能为空.'),


        body("operatorId").notEmpty().withMessage('操作人ID不能为空.'),


        body("module").notEmpty().withMessage('操作模块不能为空.'),


        body("platform").notEmpty().withMessage('操作平台不能为空.'),


        body("operatorIP").notEmpty().withMessage('设备IP不能为空.'),


        body("address").notEmpty().withMessage('设备位置不能为空.'),


        body("content").notEmpty().withMessage('操作内容不能为空.'),


    ],
    async (req, res, next) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return apiResponse.validationErrorWithData(res, "参数错误.", errors.array()[0].msg);
            }
            const newUsers_opt_logs = {
                ...req.body
            };
            await Users_opt_logsModel.create(newUsers_opt_logs);
            return apiResponse.successResponseWithData(res, "添加操作日志成功.", newUsers_opt_logs);
        } catch (err) {
            next(err); // 将错误传递给下一个中间件（全局错误处理中间件）
        }
    }
];

/**
 * 删除操作日志
 * @group 操作日志管理 - 操作日志相关
 * @param {Object} req - 请求对象，包含查询参数
 *    - params: 包含当前页码、页面大小和查询参数
 *      - _id: 操作日志ID (string)
 * @returns {object} 200 - 成功响应
 * @returns {object} 400 - 参数验证错误
 * @returns {Error} default - 未知错误
 * @security JWT - 需要提供有效的访问令牌
 */
exports.users_opt_logsDelete = [
    tokenAuthentication,
    checkApiPermission('sys:users_opt_logs:delete'),
    async (req, res, next) => {
        const {_id} = req.body;
        // 验证给定的id是否符合有效的 ObjectId 格式
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return apiResponse.validationErrorWithData(res, "参数错误.", "参数id格式错误");
        }
        try {
            const users_opt_logs = await Users_opt_logsModel.findByIdAndDelete(_id);
            if (!users_opt_logs) {
                return apiResponse.notFoundResponse(res, '该操作日志不存在或已被删除');
            }
            return apiResponse.successResponse(res, '删除操作日志成功');
        } catch (err) {
            next(err); // 将错误传递给下一个中间件（全局错误处理中间件）
        }
    }
];

/**
 * 更新操作日志信息
 * @param {string} _id.body.required - 操作日志ID
 */
exports.users_opt_logsUpdate = [
    tokenAuthentication,
    checkApiPermission('sys:users_opt_logs:update'),
    async (req, res, next) => {
        const {_id} = req.body;
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return apiResponse.validationErrorWithData(res, "参数错误.", "无效的操作日志 ID");
        }
        try {
            const users_opt_logsInfo = await Users_opt_logsModel.findById(_id);
            if (!users_opt_logsInfo) {
                return apiResponse.notFoundResponse(res, "该操作日志不存在");
            }
            // 更新操作日志数据.
            const updateData = {...req.body};

            // 使用 { new: true } 选项使 findByIdAndUpdate 返回更新后的操作日志对象。
            const updatedUsers_opt_logs = await Users_opt_logsModel.findByIdAndUpdate(_id, updateData, {new: true});
            if (!updatedUsers_opt_logs) {
                return apiResponse.ErrorResponse(res, "操作日志更新失败");
            }

            return apiResponse.successResponse(res, "操作日志更新成功.");
        } catch (err) {
            next(err); // 将错误传递给下一个中间件（全局错误处理中间件）
        }
    }
];
