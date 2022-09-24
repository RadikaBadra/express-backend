import "dotenv/config"
import express from "express"
import todoController from "./controllers/todoController.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : false}))

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/todo", todoController.getTodo);

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
})