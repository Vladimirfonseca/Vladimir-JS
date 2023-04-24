// http es u protocolo que nos permite la comunicacion  
//entre varias computadoras.
// En la api usaremos los metodos get,post,put, delete de http 
// http nos devolverra un codigo de respuesta (200 si todo sale bien y 400 si falla)
//La api siempre devuelve al cliente un codigo  de estado json si todo sale bien con los datos 
//request=solicitud,response =Respuesta

import { Router } from "express";
import {createAprendiz, getAprendices,getAprendiz,editAprendiz,deleteAprendiz} from "../controller/aprendices.controller.js";
const router = Router();
router.get("/aprendices",getAprendices)
router.get("/aprendices/:id",getAprendiz);
router.post("/aprendices",createAprendiz)
router.put("/aprendices/:id",editAprendiz);
router.delete("/aprendices/:id",deleteAprendiz)
export default router;