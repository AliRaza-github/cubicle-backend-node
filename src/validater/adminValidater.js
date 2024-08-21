const { check } = require("express-validator");

exports.permissionAddValidator = [
    check('permission_name', 'Permission name is required.').not().isEmpty(),   
]

exports.permissiondeleteValidator = [
    check('id', 'Id is required.').not().isEmpty(),   
]