import mongoose from "mongoose";//interacts with database using mongoose models
import { userSchema } from "./user.schema.js";

const UserModel = mongoose.model("User", userSchema);

export default class UserRepository{
    async signUp(user){
        try{
            const newUser = new UserModel(user);
            const resp = newUser.save();//methods encapulates the logic for crud operation and other data access tasks.
            return resp;
        }catch(err){
            throw err;
        }
    }

    async findByEmail(email){
        try{
            const user = await UserModel.findOne({email});
            return user;
        }catch(err){
            throw err;
        }
    }

    async resetPassword(email, password){
        try{
            let user = await UserModel.findOne({email});
            user.password = password;
            await user.save();
            return user;
        }catch(err){
            throw err;
        }
    }
}

