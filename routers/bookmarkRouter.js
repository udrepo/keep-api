import express from "express";
import {isAuth} from "../middlewares/index.js";
import {addBookmark, deleteBookmark, getUserBookmarks, updateBookmark} from "../controllers/bookmarkController.js";

const router = express.Router();

router
    .get('/bm', isAuth, getUserBookmarks)
    .post('/bm', isAuth, addBookmark)
    .patch('/bm/:id', isAuth, updateBookmark)
    .delete('/bm/:id', isAuth, deleteBookmark)


export default router;