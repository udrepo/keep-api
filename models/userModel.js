import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
        name: {
            type: String,
            trim: true,
            required: true,
        }, email: {
            type: String,
            trim: true,
            unique: true,
            required: true,
        }, picture: {
            type: String,
        }, username: {
            type: String,
            trim: true
        },
    },
    {timestamps: true}
);

const User = mongoose.model("User", userSchema);

export default User;
