"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const authRouter = (0, express_1.Router)();
const showHomePage = async (req, res) => {
    res.status(200).json({
        message: 'Connected'
    });
};
const signUpHandler = async (req, res) => {
    let data = req.body;
    const reponse = await auth_controller_1.default.createNewUser(req, res, data);
    res.json({
        reponse
    });
};
const signInHandler = async (req, res) => {
    let data = req.body;
    const reponse = await auth_controller_1.default.signIn(req, res, data);
    res.json({
        reponse
    });
};
const changePassWorld = async (req, res) => {
    let data = req.body;
    const reponse = await auth_controller_1.default.changePassWorld(data);
    res.json({
        reponse
    });
};
const removeCustomerHandler = async (req, res) => {
    let email = req.query.email;
    const response = await auth_controller_1.default.removeCustomer(email);
    res.json({
        response
    });
};
const voteHandler = async (req, res) => {
    let data = req.body;
};
authRouter.get('/', showHomePage);
authRouter.post('/sign-up', signUpHandler);
authRouter.post('/sign-in', signInHandler);
authRouter.put('/change-passworld', changePassWorld);
authRouter.delete('/remove-customer', removeCustomerHandler);
authRouter.post('/vote', voteHandler);
exports.default = authRouter;
//# sourceMappingURL=auth.router.js.map