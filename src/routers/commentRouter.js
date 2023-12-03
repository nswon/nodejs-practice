import express from "express";
import * as commentService from "../domain/comment/commentService.js";

const commentsRouter = express.Router();

commentsRouter.post("/", commentService.write);

export default commentsRouter;
