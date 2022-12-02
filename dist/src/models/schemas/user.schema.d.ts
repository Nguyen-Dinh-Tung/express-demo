import mongoose from "mongoose";
declare const Users: mongoose.Model<{
    name?: string;
    age?: string;
    address?: string;
    email?: string;
    passworld?: string;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    name?: string;
    age?: string;
    address?: string;
    email?: string;
    passworld?: string;
}>>;
export default Users;
