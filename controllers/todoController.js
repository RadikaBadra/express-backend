import TodoModel from "../models/todoModel.js";

export default class todoController {
    static async getTodo(_, res){
        const todos = await TodoModel.find_all();

        res.json({status : 200, data : todos})
    }
}