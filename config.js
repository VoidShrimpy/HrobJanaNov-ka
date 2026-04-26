// ============================================================
//  KONFIGURACE PIETNÍ STRÁNKY
//  Upravujte pouze tento soubor – HTML se aktualizuje samo.
// ============================================================

var CONFIG = {

  // --- Základní údaje ---
  jmeno:    "Jan Novák",
  narozeni: "1. března 1942",       // nebo "" pokud nechcete zobrazit
  umrti:    "14. listopadu 2023",   // nebo "" pokud nechcete zobrazit

  // --- Věnování / text ---
  // Pro nový řádek použijte \n
  text: "Navždy v našich srdcích a vzpomínkách.\nByl jsi oporou celé rodiny.\nChybíš nám každý den.",

  // --- Symbol nahoře ---
  // Možnosti: "✝"  "✞"  "☩"  ""  (prázdné = žádný symbol)
  symbol: "✝",

  // --- Fotky ---
  // Přidejte libovolný počet fotek – stránka je zobrazí za sebou.
  // Jak získat cestu k fotce na GitHubu:
  //   1. Nahrajte fotku do repozitáře
  //   2. Klikněte na ni, pak "Raw" – zkopírujte URL
  // Nebo použijte base64: "data:image/jpeg;base64,ZDE..."
  fotky: [
    "fotka1.jpg",   // název souboru nahraného do stejné složky na GitHubu
    // "fotka2.jpg",   // další fotka – odkomentujte přidáním // na začátek
  ],

  // --- Vzhled ---

  // Barva pozadí
  // Světlé možnosti: "#fff"  "#f5f0e8"  "#e8ede8"  "#e8e8f0"
  // Tmavé možnosti:  "#1a1a2e"  "#2c2c2c"
  barvaPozadi: "#f5f0e8",

  // Barva textu
  // Pro světlé pozadí: "#3a3020"  "#222"  "#3a3a5a"
  // Pro tmavé pozadí:  "#eee"  "#d4c5a9"
  barvaTextu: "#3a3020",

  // Písmo
  // Možnosti:
  //   "'Palatino Linotype', Palatino, Georgia, serif"  (elegantní, výchozí)
  //   "Georgia, serif"                                  (klasické)
  //   "'Times New Roman', serif"                        (tradiční)
  //   "Arial, sans-serif"                               (moderní)
  pismo: "'Palatino Linotype', Palatino, Georgia, serif",

};
