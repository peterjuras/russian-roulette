#! /usr/bin/env node
import { removeEverythingInCurrentFolder } from "../src/remove-everything-in-current-folder.js";

const random = Math.floor(Math.random() * 7);

if (random === 0) {
  await removeEverythingInCurrentFolder();
  console.log("*BANG*");
} else {
  console.log("*Click*");
}
