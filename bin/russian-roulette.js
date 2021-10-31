#! /usr/bin/env node
import { promisify } from "node:util";
import rimraf from "rimraf";

const rimrafAsync = promisify(rimraf);

const random = Math.floor(Math.random() * 7);

if (random === 0) {
  await rimrafAsync("*");
  console.log("*BANG*");
} else {
  console.log("*Click*");
}
