import express from "express"
import indexRouter from "./routes/aprendices.routes.js"

import cors from 'cors';

const app = express ()
//permite procesar los datos del cliente,
//si es objeto json lo podra resivir 
app.use(express.json())
// perimite comunicarnos entre aplicaciones wed

app.use(cors('*'))

app.use(indexRouter)

app.listen(3000);
console.log(`Aplicacion corriendo en el puesto ${3000}`)
