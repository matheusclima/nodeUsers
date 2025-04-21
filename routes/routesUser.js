const express = require('express');
const userControl = require('../controller/userController');

const router = express.Router();

router.get("/", userControl.funcHello);
router.get("/users", userControl.funcGetUsers);
router.get("/users/:id", userControl.funcGetUsersById);

module.exports = router;