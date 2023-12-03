import * as postRepository from "./postRepository.js";

export function remove(id) {
  postRepository.remove(id);
}
