#! /usr/bin/env node
const { promisify } = require("util");
const rimraf = require("rimraf");

const rimrafAsync = promisify(rimraf);

async function main() {
  const random = Math.floor(Math.random() * 7);

  if (random === 0) {
    await rimrafAsync("*");
    console.log("*BANG*");
  } else {
    console.log("*Click*");
  }
}

if (require.main === module) {
  main().catch(error => {
    console.error(error);
    process.exit(1);
  });
}
