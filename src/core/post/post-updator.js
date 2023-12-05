import * as postRepository from "./post-repository.js";

export function update(id, title, content) {
  postRepository.update(id, title, content);
}
