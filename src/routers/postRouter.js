import express from "express";
import * as postService from "../domain/post/postService.js";

const postsRouter = express.Router();

postsRouter.post("/", postService.write);
postsRouter.get("/", postService.findAll);
postsRouter.get("/:id", postService.find);
postsRouter.put("/:id", postService.update);
postsRouter.delete("/:id", postService.remove);

export default postsRouter;
