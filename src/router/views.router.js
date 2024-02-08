import express from "express";
import authorizeRole from "../config/auth.mongo.config.js";
import { uploadProfilePhoto, uploadProductImage, uploadDocument } from '../controllers/users.controller.js';

const ViewsRouter = express.Router()

ViewsRouter.get("/inicio", async (req, res) => {
    res.render("inicio", {
        title: "Shopping",
    })
})

ViewsRouter.get("/register", (req, res) => {
    res.render("register", {
        title: "Registro de Usuario"
    })
})

ViewsRouter.get("/login", (req, res) => {
    res.render("login", {
        title: "Login de Usuario"
    })
})

ViewsRouter.get("/addProducts", authorizeRole("admin"), (req, res) => {
    res.render("addProducts", {
        title: "Agregar Productos"
    })
})

ViewsRouter.post('/upload/profile-photo', uploadProfilePhoto);

ViewsRouter.post('/upload/product-image', uploadProductImage);

ViewsRouter.post('/upload/document', uploadDocument);


export default ViewsRouter