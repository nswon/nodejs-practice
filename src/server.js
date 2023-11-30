import App from "./app.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

const app = new App();
app.start(PORT);
