import express from "express";
import rootRouter from "./routers/index.js";

class App {
  #app;

  constructor() {
    this.#app = express();
    this.#useParsingBody();
    this.#mountRouter();
  }

  #useParsingBody() {
    this.#app.use(express.json());
  }

  #mountRouter() {
    this.#app.use(rootRouter);
  }

  start() {
    this.#app.listen(process.env.PORT, () => {
      console.log("start server");
    });
  }
}

export default App;
