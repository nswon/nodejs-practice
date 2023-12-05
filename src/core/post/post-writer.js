import * as postRepository from "./post-repository.js";

export function write(title, content) {
  postRepository.save(title, content);
}
