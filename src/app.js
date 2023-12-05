import express from "express";
import router from "./core/router.js";

class App {
  #app;

  constructor() {
    this.#app = express();
    this.#app.use(express.json());
    this.#app.use(router);
  }

  start() {
    this.#app.listen(process.env.PORT, () => {
      console.log("start server");
    });
  }
}

export default App;
