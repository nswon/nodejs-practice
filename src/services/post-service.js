import connection from "../db.js";

export function createPost(req, res) {
  const { title, content } = req.body;

  connection.query(
    `INSERT INTO Post (id, title, content) VALUES (3, '${title}', '${content}')`,
    (error, rows) => {
      if (error) throw error;
      res.end();
    }
  );
}

export function getPosts(req, res) {
  connection.query("SELECT * FROM Post", (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
}

export function getPost(req, res) {
  const { id } = req.params;

  connection.query(
    `SELECT * FROM Post as p WHERE p.id = ${id}`,
    (error, rows) => {
      if (error) throw error;
      res.send(rows);
    }
  );
}

export function updatePost(req, res) {
  const { id } = req.params;
  const { title, content } = req.body;

  connection.query(
    `UPDATE Post SET title='${title}', content='${content}' WHERE id=${id}`,
    (error, rows) => {
      if (error) throw error;
      res.end();
    }
  );
}

export function deletePost(req, res) {
  const { id } = req.params;

  connection.query(`DELETE FROM Post as p WHERE p.id=${id}`, (error, rows) => {
    if (error) throw error;
    res.end();
  });
}
