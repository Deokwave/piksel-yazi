// 5x7 piksel yazı tipi: Türkçe büyük harfler, rakamlar ve birkaç işaret.
// Her harf 12 satırlık bir hücrede durur: üstte aksanlar, ortada gövde, altta çengel.

export const HARFLER: Record<string, readonly string[]> = {
  "0": [".###.", "#...#", "#..##", "#.#.#", "##..#", "#...#", ".###."],
  "1": [".#.", "##.", ".#.", ".#.", ".#.", ".#.", "###"],
  "2": [".###.", "#...#", "....#", "...#.", "..#..", ".#...", "#####"],
  "3": ["####.", "....#", "....#", ".###.", "....#", "....#", "####."],
  "4": ["...#.", "..##.", ".#.#.", "#..#.", "#####", "...#.", "...#."],
  "5": ["#####", "#....", "####.", "....#", "....#", "#...#", ".###."],
  "6": [".###.", "#....", "#....", "####.", "#...#", "#...#", ".###."],
  "7": ["#####", "....#", "...#.", "..#..", ".#...", ".#...", ".#..."],
  "8": [".###.", "#...#", "#...#", ".###.", "#...#", "#...#", ".###."],
  "9": [".###.", "#...#", "#...#", ".####", "....#", "....#", ".###."],
  "A": [".###.", "#...#", "#...#", "#####", "#...#", "#...#", "#...#"],
  "B": ["####.", "#...#", "#...#", "####.", "#...#", "#...#", "####."],
  "C": [".###.", "#...#", "#....", "#....", "#....", "#...#", ".###."],
  "D": ["####.", "#...#", "#...#", "#...#", "#...#", "#...#", "####."],
  "E": ["#####", "#....", "#....", "####.", "#....", "#....", "#####"],
  "F": ["#####", "#....", "#....", "####.", "#....", "#....", "#...."],
  "G": [".###.", "#...#", "#....", "#.###", "#...#", "#...#", ".###."],
  "H": ["#...#", "#...#", "#...#", "#####", "#...#", "#...#", "#...#"],
  "I": ["###", ".#.", ".#.", ".#.", ".#.", ".#.", "###"],
  "J": ["..###", "...#.", "...#.", "...#.", "#..#.", "#..#.", ".##.."],
  "K": ["#...#", "#..#.", "#.#..", "##...", "#.#..", "#..#.", "#...#"],
  "L": ["#....", "#....", "#....", "#....", "#....", "#....", "#####"],
  "M": ["#...#", "##.##", "#.#.#", "#.#.#", "#...#", "#...#", "#...#"],
  "N": ["#...#", "#...#", "##..#", "#.#.#", "#..##", "#...#", "#...#"],
  "O": [".###.", "#...#", "#...#", "#...#", "#...#", "#...#", ".###."],
  "P": ["####.", "#...#", "#...#", "####.", "#....", "#....", "#...."],
  "Q": [".###.", "#...#", "#...#", "#...#", "#.#.#", "#..#.", ".##.#"],
  "R": ["####.", "#...#", "#...#", "####.", "#.#..", "#..#.", "#...#"],
  "S": [".####", "#....", "#....", ".###.", "....#", "....#", "####."],
  "T": ["#####", "..#..", "..#..", "..#..", "..#..", "..#..", "..#.."],
  "U": ["#...#", "#...#", "#...#", "#...#", "#...#", "#...#", ".###."],
  "V": ["#...#", "#...#", "#...#", "#...#", ".#.#.", ".#.#.", "..#.."],
  "W": ["#...#", "#...#", "#...#", "#.#.#", "#.#.#", "#.#.#", ".#.#."],
  "X": ["#...#", "#...#", ".#.#.", "..#..", ".#.#.", "#...#", "#...#"],
  "Y": ["#...#", "#...#", ".#.#.", "..#..", "..#..", "..#..", "..#.."],
  "Z": ["#####", "....#", "...#.", "..#..", ".#...", "#....", "#####"],
  ".": [".", ".", ".", ".", ".", ".", "#"],
  ",": [".", ".", ".", ".", ".", "#", "#"],
  ":": [".", "#", ".", ".", ".", "#", "."],
  "-": ["...", "...", "...", "###", "...", "...", "..."],
  "·": [".", ".", ".", "#", ".", ".", "."],
  "/": ["....#", "...#.", "...#.", "..#..", ".#...", ".#...", "#...."],
  "'": ["#", "#", ".", ".", ".", ".", "."],
  "!": ["#", "#", "#", "#", "#", ".", "#"],
  "+": [".....", "..#..", "..#..", "#####", "..#..", "..#..", "....."],
  "&": [".##..", "#..#.", "#.#..", ".#...", "#.#.#", "#..#.", ".##.#"],
  ">": ["#...", ".#..", "..#.", "...#", "..#.", ".#..", "#..."],
  "@": [".###.", "#...#", "#.###", "#.#.#", "#.###", "#....", ".###."],
  "©": [".#####.", "#.....#", "#..##.#", "#.#...#", "#..##.#", "#.....#", ".#####."]
};

type Aksan = "nokta" | "iki_nokta" | "kisa" | "cengel";

const AKSANLI: Record<string, [string, Aksan]> = {
  "Ç": ["C", "cengel"],
  "Ş": ["S", "cengel"],
  "Ğ": ["G", "kisa"],
  "İ": ["I", "nokta"],
  "Ö": ["O", "iki_nokta"],
  "Ü": ["U", "iki_nokta"]
};

const AKSAN_SATIRLARI: Record<Aksan, [number, string][]> = {
  nokta: [[1, ".#."]],
  iki_nokta: [[1, ".#.#."]],
  kisa: [[0, "#...#"], [1, ".###."]],
  cengel: [[10, "..#.."], [11, ".##.."]],
};

export const HUCRE_YUKSEKLIGI = 12;

export interface Glif {
  genislik: number;
  satirlar: string[];
}

export function buyut(metin: string): string {
  return metin.toLocaleUpperCase("tr-TR");
}

// Harfin yazı tipinde karşılığı var mı? (Küçük harfler önce büyütülür.)
export function desteklenir(harf: string): boolean {
  const buyuk = buyut(harf);
  return buyuk === " " || buyuk in HARFLER || buyuk in AKSANLI;
}

// Metinde yazı tipinde olmayan harfleri döndürür; boşsa metin sorunsuz yazılabilir.
export function eksikHarfler(metin: string): string[] {
  return [...new Set([...buyut(metin)].filter((h) => !desteklenir(h)))];
}

export function glif(harf: string): Glif {
  if (harf === " ") return { genislik: 3, satirlar: Array(HUCRE_YUKSEKLIGI).fill("...") };
  const aksan = AKSANLI[harf];
  const govde = HARFLER[aksan ? aksan[0] : harf];
  if (!govde) throw new Error(`Bu harf yazı tipinde yok: ${harf}`);
  const genislik = govde[0].length;
  const satirlar: string[] = Array(HUCRE_YUKSEKLIGI).fill(".".repeat(genislik));
  govde.forEach((satir, i) => (satirlar[3 + i] = satir));
  if (aksan) for (const [i, s] of AKSAN_SATIRLARI[aksan[1]]) satirlar[i] = s.padEnd(genislik, ".").slice(0, genislik);
  return { genislik, satirlar };
}

export function genislik(metin: string, aralik = 1): number {
  let toplam = 0;
  for (const harf of buyut(metin)) toplam += glif(harf).genislik + aralik;
  return Math.max(0, toplam - aralik);
}

export interface SvgAyari {
  olcek?: number;
  renk?: string;
  zemin?: string;
  kenar?: number;
}

// Metni, yan yana yanan pikselleri tek dikdörtgende birleştirerek SVG'ye çevirir.
export function svg(metin: string, ayar: SvgAyari = {}): string {
  const olcek = ayar.olcek ?? 4;
  const kenar = ayar.kenar ?? 2;
  const renk = ayar.renk ?? "#ffffff";
  const w = genislik(metin) + kenar * 2;
  const h = HUCRE_YUKSEKLIGI + kenar * 2;
  const parcalar: string[] = [];
  let x0 = kenar;
  for (const harf of buyut(metin)) {
    const g = glif(harf);
    g.satirlar.forEach((satir, y) => {
      let x = 0;
      while (x < satir.length) {
        if (satir[x] !== "#") { x++; continue; }
        let son = x;
        while (son < satir.length && satir[son] === "#") son++;
        parcalar.push(`<rect x="${x0 + x}" y="${kenar + y}" width="${son - x}" height="1"/>`);
        x = son;
      }
    });
    x0 += g.genislik + 1;
  }
  const zemin = ayar.zemin ? `<rect width="${w}" height="${h}" fill="${ayar.zemin}"/>` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w * olcek}" height="${h * olcek}" shape-rendering="crispEdges">${zemin}<g fill="${renk}">${parcalar.join("")}</g></svg>`;
}
