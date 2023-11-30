import express from "express";
import posts from "./controllers/post-controller.js";
import members from "./controllers/member-controller.js";

class App {
  #app;

  constructor() {
    this.#app = express();
    this.#useParseBody();
    this.#configRoutes();
  }

  #useParseBody() {
    this.#app.use(express.json());
  }

  #configRoutes() {
    this.#app.use("/posts", posts);
    this.#app.use("/members", members);
  }

  start(port) {
    this.#app.listen(port, () => {
      console.log("starting server with", port);
    });
  }
}

export default App;
