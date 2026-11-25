import { svg } from "./yazi.js";

// Kullanım: node dist/ornek.js [METİN] [ÖLÇEK] [RENK]
const [metin = "DEOKWAVE", olcekYazi = "4", renk = "#b9a6ff"] = process.argv.slice(2);
const olcek = Math.max(1, Math.min(16, Number.parseInt(olcekYazi, 10) || 4));
console.log(svg(metin, { olcek, renk, zemin: "#070b22" }));

declare const process: { argv: string[] };
