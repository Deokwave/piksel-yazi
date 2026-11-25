import { svg } from "./yazi.js";

const metin = process.argv[2] ?? "DEOKWAVE";
console.log(svg(metin, { olcek: 4, renk: "#b9a6ff", zemin: "#070b22" }));

declare const process: { argv: string[] };
