import * as postRepository from "./postRepository.js";

export function write(title, content) {
  postRepository.save(title, content);
}
