import * as postRepository from "./postRepository";

export function read() {
  return postRepository.findAll();
}

export function readBy(id) {
  return postRepository.findById(id);
}
