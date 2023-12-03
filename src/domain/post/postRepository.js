import connection from "../../db.js";

export function save(title, content) {
  const query = `INSERT INTO Post (title, content) VALUES ('${title}', '${content}')`;
  connection.query(query, (error, rows) => {
    if (error) throw error;
  });
}

export function findAll() {
  const query =
    "SELECT title, count(c.id) as commentCount FROM Post as p left join Comment as c on p.id = c.post_id GROUP BY p.id";
  connection.query(query, (error, rows) => {
    if (error) throw error;
    return rows;
  });
}

export function findById(id) {
  const query = `SELECT * FROM Post as p WHERE p.id = ${id}`;
  connection.query(query, (error, rows) => {
    if (error) throw error;
    return rows;
  });
}

export function update(id, title, content) {
  const query = `UPDATE Post SET title='${title}', content='${content}' WHERE id=${id}`;
  connection.query(query, (error, rows) => {
    if (error) throw error;
  });
}

export function remove(id) {
  const query = `DELETE FROM Post as p WHERE p.id=${id}`;
  connection.query(query, (error, rows) => {
    if (error) throw error;
  });
}
