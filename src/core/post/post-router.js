import express from "express";
import * as postService from "./post-service.js";

const posts = express.Router();

posts.post("/", postService.write);
posts.get("/", postService.findAll);
posts.get("/:id", postService.find);
posts.put("/:id", postService.update);
posts.delete("/:id", postService.remove);

export default posts;
