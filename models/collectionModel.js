import mongoose from "mongoose";

const collectionSchema = new mongoose.Schema({
        name: {
            type: String,
            trim: true,
            required: true,
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: [true, "Review should belong to user"],
        },
        bookmarks: [{
            type: mongoose.Schema.ObjectId,
            ref: 'Bookmark'
        }
        ]
    },
    {timestamps: true}
);

const collection = mongoose.model("Collection", collectionSchema);

export default collection;
