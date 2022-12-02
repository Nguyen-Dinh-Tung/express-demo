"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_schema_1 = __importDefault(require("../models/schemas/user.schema"));
class AuthServices {
    static async createNewUser(req, res, data) {
        try {
            if (data) {
                const { email, passworld } = data;
                const userExist = await user_schema_1.default.findOne({ email });
                if (userExist) {
                    return "User exist";
                }
                let encodePassworld = await bcrypt_1.default.hash(passworld, 10);
                data.passworld = encodePassworld;
                const newUser = await user_schema_1.default.create(data);
                if (newUser) {
                    return {
                        message: "Create success",
                        newUser,
                    };
                }
            }
        }
        catch (e) {
            if (e) {
                throw new Error(e.message);
            }
        }
    }
    static async signIn(req, res, data) {
        try {
            const { email } = data;
            const user = await user_schema_1.default.findOne({ email });
            if (!user) {
                return {
                    message: "User not exist",
                };
            }
            else {
                let compPassworld = await bcrypt_1.default.compare(data.passworld, user.passworld);
                if (compPassworld) {
                    return {
                        message: "Login success",
                        location: "/home",
                    };
                }
                else {
                    return "Incorrect password";
                }
            }
        }
        catch (e) {
            if (e) {
                throw new Error(e.message);
            }
        }
    }
    static async changePassWorld(data) {
        try {
            let { email, passworld, newPassWorld } = data;
            const user = await user_schema_1.default.findOne({ email });
            if (user) {
                let compPassworld = await bcrypt_1.default.compare(passworld, user.passworld);
                if (compPassworld) {
                    let hashPassWorld = await bcrypt_1.default.hash(newPassWorld, 10);
                    user.passworld = hashPassWorld;
                    await user.save();
                    return {
                        message: 'Update success',
                        newPassWorld: newPassWorld
                    };
                }
                else {
                    return {
                        message: 'Incorrect PassWorld'
                    };
                }
            }
        }
        catch (e) {
            if (e) {
                throw new Error(e.message);
            }
        }
    }
    static async removeCustomer(email) {
        console.log('check');
        try {
            const user = await user_schema_1.default.findOne({ email });
            if (user) {
                await user_schema_1.default.findByIdAndDelete({
                    _id: user._id
                });
                return {
                    message: 'Remove customer success'
                };
            }
            else {
                return {
                    message: 'Remove fail'
                };
            }
        }
        catch (e) {
            if (e) {
                throw new Error(e.message);
            }
        }
    }
}
AuthServices.encode = "nzvfrxcwnpeitvpn";
exports.default = AuthServices;
//# sourceMappingURL=auth.controller.js.map