import * as commentRepository from "./comment-repository.js";

export function write(postId, content) {
  commentRepository.save(postId, content);
}
