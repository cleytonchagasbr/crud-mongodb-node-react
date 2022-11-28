import { Request, Response } from "express";
import User from "../schemas/User";

class UserController {
    async create(request:Request, response: Response) {

        const { name, email } = request.body;

        try {
            const userExists = await User.findOne({ email: email });
            if (userExists) {
                return response.status(400).send({message: "Usuário já existe!"});
            }
            const newUser = await User.create({
                name,
                email,
            });
            return response.send(newUser);
        } catch (error) {
            console.log(error);
        }
    }

    async allUsers(request: Request, response: Response) {
        try {
            const users = await User.find();
            return response.send(users);
        } catch (error) {
            
        }
    }
}

export default new UserController();