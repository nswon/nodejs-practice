import * as commentWriter from "./comment-writer.js";

export function write(req, res) {
  const { postId, content } = req.body;

  commentWriter.write(postId, content);
}
