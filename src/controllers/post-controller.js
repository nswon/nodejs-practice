import express from "express";
import * as postService from "../services/post-service.js";

const posts = express.Router();

posts.post("/", postService.createPost);
posts.get("/", postService.getPosts);
posts.get("/:id", postService.getPost);
posts.put("/:id", postService.updatePost);
posts.delete("/:id", postService.deletePost);

export default posts;
