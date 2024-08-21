const express = require("express");
const router = express.Router();
const { permissionAddValidator, permissiondeleteValidator } = require("../validater/adminValidater")
const permissionController = require("../controller/admin/permissionController")


router.post('/add-permission', permissionAddValidator, permissionController.addPermission);
router.post('/add-permission', permissionController.getPermission);
router.post('/add-permission', permissiondeleteValidator, permissionController.deletePermission);

module.exports = router;
