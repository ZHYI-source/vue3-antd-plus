/**
*@author ZY
*@date 2023/7/7 下午4:37:15
*@Description:操作日志相关的接口
*/

const express = require('express');
const router = express.Router();

const Users_opt_logsController = require('@controllers/v1/sys/Users_opt_logsController')


/****************************************************************************/

/**
* 获取操作日志列表

* @route POST /v1/sys/users_opt_logs/list

* @group 操作日志管理 - 操作日志相关
*/

router.post('/list', Users_opt_logsController.users_opt_logslist);

/**
* 创建操作日志

* @route POST /v1/sys/users_opt_logs/create

* @group 操作日志管理 - 操作日志相关
* @returns {object} 200 - 成功响应
*/

router.post('/create', Users_opt_logsController.users_opt_logsCreate);


/**
* 删除操作日志

* @route POST /v1/sys/users_opt_logs/delete

* @group 操作日志管理 - 操作日志相关
* @param {string} _id.required - 操作日志_ID且唯一
* @returns {object} 200 - 成功响应
*/
router.post('/delete', Users_opt_logsController.users_opt_logsDelete);

/**
* 更新操作日志信息

* @route POST /v1/sys/users_opt_logs/update

* @group 操作日志管理 - 操作日志相关
*/
router.post('/update', Users_opt_logsController.users_opt_logsUpdate);

module.exports = router;
