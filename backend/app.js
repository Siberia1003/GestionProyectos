import express  from "express";
import mongoose from "mongoose";
import proyectos from "./api/models/proyectos";

const app = express()
const port = 5500
const mongoURL = "mongodb+srv://siberia1003:r5Fyr8gaiqCALcEP@cluster0.vvn8e.mongodb.net/GestionProyectos?retryWrites=true&w=majority"

mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology:true})

app.use(express.json({limit: "50mb"}))

app.post("/api/proyectos", (req, res) =>{
    let proyectoData = req.body;
    proyectos.create(proyectoData, (error, response) => {
        if (error){
            res.status(500).send(err)
        }else {
            res.status(200).send(response)
        }
    })
})

app.get("/", (req, res) => {
    res.send("hello")
 })

app.listen(port, ()=> {
    console.log(`Server is listening at http://localhost:${port}`)
})