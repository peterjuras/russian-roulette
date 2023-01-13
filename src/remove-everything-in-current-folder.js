import { readdir, rm } from "node:fs/promises";

export async function removeEverythingInCurrentFolder() {
  const folderEntries = await readdir(".");
  const rmOptions = { force: true, recursive: true };
  await Promise.all(folderEntries.map((entry) => rm(entry, rmOptions)));
}
