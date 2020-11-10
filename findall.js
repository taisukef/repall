const src = "Eihime";
const path = "./";
const ext = ".js";

const list = await Deno.readDir(path);
for await (const f of list) {
  const fn = path + f.name;
  if (!fn.endsWith(ext)) {
    continue;
  }
  const s = await Deno.readTextFile(fn);
  if (s.indexOf(src) >= 0) {
    console.log(fn);
  }
}
