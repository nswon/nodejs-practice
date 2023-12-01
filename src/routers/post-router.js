import express from "express";
import * as postService from "../services/post-service.js";

const postsRouter = express.Router();

postsRouter.post("/", postService.createPost);
postsRouter.get("/", postService.getPosts);
postsRouter.get("/:id", postService.getPost);
postsRouter.put("/:id", postService.updatePost);
postsRouter.delete("/:id", postService.deletePost);

export default postsRouter;
