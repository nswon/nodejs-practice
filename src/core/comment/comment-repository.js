import connection from "../../storage/db.js";

export function save(postId, content) {
  const params = [postId, content];

  connection.query(
    "INSERT INTO Comment (post_id, content) VALUES (?, ?)",
    params
  );
}
