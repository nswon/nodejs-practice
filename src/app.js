import express from "express";
import postsRouter from "./routers/post-router.js";
import membersRouter from "./routers/member-router.js";

class App {
  #app;

  constructor() {
    this.#app = express();
    this.#useParsingBody();
    this.#mountRouters();
  }

  #useParsingBody() {
    this.#app.use(express.json());
  }

  #mountRouters() {
    this.#app.use("/posts", postsRouter);
    this.#app.use("/members", membersRouter);
  }

  start() {
    this.#app.listen(process.env.PORT, () => {
      console.log("start server");
    });
  }
}

export default App;
