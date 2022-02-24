import mongoose from "mongoose";

const proyectosSchema = mongoose.Schema({
    titulo: string,
    tipo: string,
    estado: string,
    lider: string
})

export default mongoose.model("proyectos", proyectosSchema)