import express from "express";

const app = express();
app.use(express.json());

const logger = function (req, res, next) {
  console.log("logging");
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  console.log("get");
});

app.listen(8080, () => {
  console.log("start");
});
