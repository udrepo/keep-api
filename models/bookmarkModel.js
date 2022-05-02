import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema({
        link: {
            type: String,
            trim: true,
            required: true,
        },
        title: {
            type: String,
            trim: true,
            required: true,
        },
        desc: {
            type: String,
            trim: true,
            default: ''
        },
        image: {
            type: String,
            trim: true,
            default: ''
        },
        isArchive: {
            type: Boolean,
            default: false,
        },
        isFav: {
            type: Boolean,
            default: false,
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: [true, "Review should belong to user"],
        },
        collections: [{
            type: mongoose.Schema.ObjectId,
            ref: 'Collection'
        }]

    },
    {timestamps: true}
);

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);

export default Bookmark;
