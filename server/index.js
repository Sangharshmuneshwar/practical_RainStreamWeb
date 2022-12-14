import express from "express";
import bodyParser from "body-Parser";
import cors from "cors";
import userRoutes from "./routes/users.js";

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use("/" , userRoutes)
app.get("/", (req,res)=> res.send("hello from express")

);
app.all("*", (req,res)=> res.send("route does not exit"))
app.listen(port,()=>
console.log("server is running")
)