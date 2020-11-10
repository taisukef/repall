const src = "Eihime";
const dst = "Ehime";
const path = "data/";
const ext = ".csv";

const list = await Deno.readDir(path);
for await (const f of list) {
  const fn = path + f.name;
  if (!fn.endsWith(ext)) {
    continue;
  }
  const s = await Deno.readTextFile(fn);
  const s2 = s.replace(new RegExp(src, "g"), dst);
  if (s != s2) {
    await Deno.writeTextFile(fn, s2);
    console.log(fn);
  }
}
