import connection from "../db.js";

export function join(req, res) {
  const { email, password } = req.body;

  connection.query(
    `INSERT INTO Member (email, password) VALUES ('${email}', '${password}')`,
    (error, rows) => {
      if (error) throw error;
      res.end();
    }
  );
}
