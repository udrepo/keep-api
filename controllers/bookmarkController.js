import Bookmark from "../models/bookmarkModel.js";
import urlMetadata from "url-metadata";

export const addBookmark = async (req, res) => {
    urlMetadata(req.body.link).then(
        async function (metadata) { // success handler
            let bookmark = {};
            if(metadata.title === null){
                console.log('fuccccck')
                 bookmark = await Bookmark.create({
                    ...req.body,
                    title: req.body.link,
                });
            }else {
                 bookmark = await Bookmark.create({
                    ...req.body,
                    title: metadata.title || req.body.link,
                    desc: metadata.description || '',
                    image: metadata.image || '',
                });
            }

            res.status(201).json({
                status: "success",
                bookmark
            });
        },
        function (error) { // failure handler
            res.status(500).json({"msg": "something goes wrong"})
        })

};

export const getUserBookmarks = async (req, res) => {
    const bookmarks = await Bookmark.find({user: req.body.user});

    res.status(200).json({
        result: bookmarks.length,
        bookmarks
    });
}

export const updateBookmark = async (req, res) => {
    const updated = await Bookmark.findOneAndUpdate(req.params.id, req.body, {
        new: true
    });

    res.status(200).json({
        status: "success",
        updated
    });
}

export const deleteBookmark = async (req, res) => {
    const document = await Bookmark.findByIdAndDelete(req.params.id);
    if (!document) res.status(401).json({'status': 'not found'})
    res.status(200).json({msg: "bookmark was deleted", result: document})
}