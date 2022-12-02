import { Request, Response } from "express";
declare class AuthServices {
    private static encode;
    static createNewUser(req: Request, res: Response, data: any): Promise<"User exist" | {
        message: string;
        newUser: import("mongoose").Document<unknown, any, {
            email?: string;
            passworld?: string;
            name?: string;
            age?: string;
            address?: string;
        }> & {
            email?: string;
            passworld?: string;
            name?: string;
            age?: string;
            address?: string;
        } & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    static signIn(req: Request, res: Response, data: any): Promise<"Incorrect password" | {
        message: string;
        location?: undefined;
    } | {
        message: string;
        location: string;
    }>;
    static changePassWorld(data: any): Promise<{
        message: string;
        newPassWorld: any;
    } | {
        message: string;
        newPassWorld?: undefined;
    }>;
    static removeCustomer(email: string): Promise<{
        message: string;
    }>;
}
export default AuthServices;
