import connector from "../db/connection.js";
import { v4 as uuidv4 } from "uuid";

const db = await connector();
const table = "todos";

export default class TodoModel{
    static async create(tag_id, title, description){
        const sql = `INSERT INTO ${table}(id, tag_id, title, description)
        VALUES("${uuidv4}", "${tag_id}, "${title}", "${description}")`;

        const [rows] = await db.execute(sql);
        return rows;
    }

    static async find_all(){
        const sql = `SELECT * FROM ${table}`;

        const [rows] = await db.execute(sql);
        return rows;
    }

}