import * as postWriter from "./postWriter.js";
import * as postReader from "./postReader.js";
import * as postUpdater from "./postUpdater.js";
import * as postRemover from "./postRemover.js";

export function write(req, res) {
  const { title, content } = req.body;

  postWriter.write(title, content);
  res.end();
}

export function findAll(req, res) {
  const rows = postReader.read();
  res.send(rows);
}

export function find(req, res) {
  const { id } = req.params;
  const row = postReader.readBy(id);
  res.send(row);
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
