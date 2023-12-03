import * as postRepository from "./postRepository.js";

export function update(id, title, content) {
  postRepository.update(id, title, content);
}
