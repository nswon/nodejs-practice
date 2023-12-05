import * as postRepository from "./post-repository.js";

export async function read() {
  return await postRepository.findAll();
}

export function readBy(id) {
  return postRepository.findById(id);
}
