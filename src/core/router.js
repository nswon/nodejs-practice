import express from "express";
import posts from "./post/post-router.js";
import comments from "./comment/comment-router.js";

const router = express.Router();

router.use("/posts", posts);
router.use("/comments", comments);

export default router;
