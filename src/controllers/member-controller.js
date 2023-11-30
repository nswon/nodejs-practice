import express from "express";
import * as memberService from "../services/member-service.js";

const members = express.Router();

members.post("/join", memberService.join);

export default members;
