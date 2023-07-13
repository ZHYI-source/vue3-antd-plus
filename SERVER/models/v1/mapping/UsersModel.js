const mongoose = require('mongoose')
let UserSchema = new mongoose.Schema({
        avatar: {
            type: String,
            comment: '用户头像'
        },
        username: {
            type: String,
            required: true,
            comment: '用户名'
        },
        nickname: {
            type: String,
            required: true,
            comment: '昵称'
        },
        password: {
            type: String,
            required: true,
            comment: '密码'
        },
        email: {
            type: String,
            comment: '邮箱'
        },
        roleId: {
            type: mongoose.Schema.Types.ObjectId, // 使用 ObjectId 类型来引用角色表
            ref: 'roles', // 关联的角色表名称
            comment: '角色ID'
        },
        remark: {
            type: String,
            comment: '备注',
        },
        status: {
            type: Boolean,
            required: true,
            default: 1,
            comment: '状态: 0禁用 1正常'
        },
    },
    {
        timestamps: true,
        versionKey: false, // 设置不需要version  _V:0
    });
module.exports = mongoose.model('users', UserSchema);
