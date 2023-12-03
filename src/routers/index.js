import express from "express";
import postsRouter from "./postRouter.js";
import commentsRouter from "./commentRouter.js";

const rootRouter = express.Router();

rootRouter.use("/posts", postsRouter);
rootRouter.use("/comments", commentsRouter);

export default rootRouter;
