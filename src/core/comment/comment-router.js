import express from "express";
import * as commentService from "./comment-service.js";

const commentsRouter = express.Router();

commentsRouter.post("/", commentService.write);

export default commentsRouter;
