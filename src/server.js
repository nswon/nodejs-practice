import App from "./app.js";
import dotenv from "dotenv";
dotenv.config();

function main() {
  const app = new App();
  app.start();
}

main();
