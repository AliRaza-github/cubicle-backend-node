const Permission = require("../../model/permissionModel")
const { validationResult } = require("express-validator");

const addPermission = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                error: errors.array(),
                data: null,
                message: "Error in registration."
            });
        }

        const { permission_name } = req.body;

        const isExist = await Permission.findOne({ permission_name });

        if (isExist) {
            return res.status(400).json({
                error: null,
                data: null,
                message: "Permission name already exist."
            });
        }

        const obj = {
            permission_name
        }

        if (req.body.default) {
            obj.is_default = parseInt(req.body.default);
        }

        const permission = new Permission(obj);
        const newPermission = await permission.save();

        return res.status(200).json({
            error: null,
            data: newPermission,
            message: "Permission added successfully."
        });


    } catch (error) {

        return res.status(500).json({
            error: error.message || error,
            data: null,
            message: "Error in registration."
        });
    }
}

const getPermission = async (req, res) => {

    try {

    } catch (error) {
        return res.status(500).json({ error: error || error.message, data: null, message: "Failed to retrieve permission details. Please try again later." })
    }
}

const deletePermission = () => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                error: errors.array(),
                data: null,
                message: "Error in registration."
            });
        }

    } catch (error) {
        return res.status(500).json({ error: error || error.message, data: null, message: "Failed to delete permission. Please try again later." })
    }
}

module.exports = { addPermission, getPermission, deletePermission };
