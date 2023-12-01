import express from "express";
import * as memberService from "../services/member-service.js";

const membersRouter = express.Router();

membersRouter.post("/join", memberService.join);

export default membersRouter;
