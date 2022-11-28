import mongoose from "mongoose";

const Curso = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    createdA: {
        type: Date,
        default: Date.now
    }
})