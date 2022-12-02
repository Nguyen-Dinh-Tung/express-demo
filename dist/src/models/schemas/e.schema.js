"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const customerSchema = new mongoose_1.default.Schema({
    name: String,
    code: Number,
    email: String,
    phone: String
});
const Customer = mongoose_1.default.model("Customer", customerSchema);
exports.default = Customer;
//# sourceMappingURL=e.schema.js.map