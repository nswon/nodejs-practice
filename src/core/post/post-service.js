import * as postWriter from "./post-writer.js";
import * as postReader from "./post-reader.js";
import * as postUpdater from "./post-updator.js";
import * as postRemover from "./post-remover.js";

export function write(req, res) {
  const { title, content } = req.body;

  postWriter.write(title, content);
  res.end();
}

export async function findAll(req, res) {
  const posts = await postReader.read();
  res.send(posts);
}

export async function find(req, res) {
  const { id } = req.params;

  const post = await postReader.readBy(id);
  res.send(post);
}

export function update(req, res) {
  const { id } = req.params;
  const { title, content } = req.body;

  postUpdater.update(id, title, content);
  res.end();
}

export function remove(req, res) {
  const { id } = req.params;

  postRemover.remove(id);
  res.end();
}
