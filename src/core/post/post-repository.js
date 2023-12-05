import connection from "../../storage/db.js";

export function save(title, content) {
  const params = [title, content];
  connection.query("INSERT INTO Post (title, content) VALUES (?, ?)", params);
}

export function findAll() {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT title, count(c.id) as commentCount FROM Post as p left join Comment as c on p.id = c.post_id GROUP BY p.id",
      (error, results) => {
        if (error) {
          reject(error);
        }

        resolve(results);
      }
    );
  });
}

export function findById(id) {
  const params = [id];
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM Post as p WHERE p.id = ?",
      params,
      (error, result) => {
        if (error) {
          reject(error);
        }

        resolve(result);
      }
    );
  });
}

export function update(id, title, content) {
  const params = [title, content, id];
  connection.query("UPDATE Post SET title=?, content=? WHERE id=?", params);
}

export function remove(id) {
  const params = [id];
  connection.query("DELETE FROM Post as p WHERE p.id=?", params);
}
