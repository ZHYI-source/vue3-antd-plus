import service from '../server'
export const users_opt_logsList = (data) => {
    return service.post('/v1/sys/users_opt_logs/list', data)
}
export const users_opt_logsCreate = (data) => {
    return service.post('/v1/sys/users_opt_logs/create', data)
}
export const users_opt_logsUpdate = (data) => {
    return service.post('/v1/sys/users_opt_logs/update', data)
}
export const users_opt_logsDelete = (data) => {
    return service.post('/v1/sys/users_opt_logs/delete', data)
}




