import connection from "../../db.js";

export function write(req, res) {
  const { postId, content } = req.body;

  connection.query(
    `INSERT INTO Comment (post_id, content) VALUES (${postId}, '${content}')`,
    (error, rows) => {
      if (error) throw error;
      res.end();
    }
  );
}
