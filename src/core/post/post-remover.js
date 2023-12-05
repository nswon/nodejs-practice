import * as postRepository from "./post-repository.js";

export function remove(id) {
  postRepository.remove(id);
}
