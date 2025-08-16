import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum:["repair","tow"],
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "in-progress", "completed"],
        default: "pending",
    },
    payment_method: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    payment_status: {
        type: String,
        enum: ["paid", "unpaid"],
        default: "unpaid",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

    
})

export const Request = mongoose.model('Request', requestSchema);