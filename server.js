import express from "express";
import connection from "./db.js";

const app = express();
app.use(express.json());

//게시글 생성
app.post("/posts", (req, res) => {
  const { title, content } = req.body;

  connection.query(
    `INSERT INTO Post (id, title, content) VALUES (2, '${title}', '${content}')`,
    (error, rows) => {
      if (error) throw error;
      res.end();
    }
  );
});

//게시글 전체조회
app.get("/posts", (req, res) => {
  connection.query("SELECT * FROM Post", (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
});

//게시글 상세조회
app.get("/posts/:id", (req, res) => {
  const { id } = req.params;

  connection.query(
    `SELECT * FROM Post as p WHERE p.id = ${id}`,
    (error, rows) => {
      if (error) throw error;
      res.send(rows);
    }
  );
});

//게시글 수정
app.put("/posts/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  connection.query(
    `UPDATE Post SET title='${title}', content='${content}' WHERE id=${id}`,
    (error, rows) => {
      if (error) throw error;
      res.end();
    }
  );
});

//게시글 삭제
app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;

  connection.query(`DELETE FROM Post as p WHERE p.id=${id}`, (error, rows) => {
    if (error) throw error;
    res.end();
  });
});

app.listen(8080, () => {
  console.log("start");
});
