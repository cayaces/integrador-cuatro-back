import mongoose from "mongoose";

const userCollection = "users";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, max: 100 },
    surname: { type: String, required: false, max: 100 },
    email: { type: String, required: true, max: 100 },
    age: { type: Number, required: false, max: 100 },
    password: { type: String, required: false, max: 100 },
    cart: [
        {
            type: [
                {
                    cart: {
                        type: mongoose.Schema.Types.ObjectId, ref: 'carts'
                    }
                }
            ]
        }
    ],
    role: { type: String, required: true, max: 100 },
    documents: [
        {
            name: { type: String, required: true },
            reference: { type: String, required: true }
        }
    ],
    last_connection: { type: Date, default: Date.now }
})

// Método para verificar si el usuario ha cargado todos los documentos requeridos
userSchema.methods.hasUploadedDocuments = function() {
    // Lógica para verificar si el usuario ha cargado todos los documentos
    // Devuelve true si ha cargado todos los documentos, de lo contrario, false
    return this.documents.length === 3; // Suponiendo que documents es un array que contiene los documentos cargados
};

const userModel = mongoose.model(userCollection, userSchema);
export default userModel;