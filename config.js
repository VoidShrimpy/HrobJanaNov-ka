// ============================================================
//  UPRAVUJTE POUZE TENTO SOUBOR
// ============================================================

var CONFIG = {

  // --- Základní údaje ---
  jmeno:    "Marie Nováková",
  narozeni: "1. března 1942",
  umrti:    "14. listopadu 2023",
  text:     "Elegantní dáma s laskavým srdcem.\nNavždy v našich vzpomínkách.",

  // --- Fotky ---
  fotky: [
    "fotka1.jpg",
    // "fotka2.jpg",
  ],

  // Ořez fotky: "center" / "top" / "20%" atd.
  fotkaOrez: "center",

  // Zaoblení rohů fotky (px): 0 = ostré, 4 = mírné, 10 = více
  fotkaZaobleni: 4,

  // ============================================================
  //  STYL STRÁNKY
  // ============================================================
  // "granit"   = tmavý, leštěná žula, zlaté detaily (výchozí)
  // "mramor"   = světlý, mramorový, zlaté detaily
  // "noc"      = velmi tmavý, stříbrno-zlatý
  stil: "granit",

  // ============================================================
  //  TVAR KARTY
  // ============================================================
  // "oblouk"   = oblá horní hrana jako náhrobek (výchozí)
  // "rovny"    = rovné hrany, parte styl
  // "goticky"  = špičatý oblouk nahoře
  tvarKarty: "oblouk",

  // ============================================================
  //  SYMBOL NAD FOTKOU
  // ============================================================
  // "kriz" / "kriz2" / "hvezda" / "lilium" / "bez"
  symbol: "kriz",

  // ============================================================
  //  ODDĚLOVAČ (mezi fotkou a jménem, mezi jménem a textem)
  // ============================================================
  // "ornament"  = zlatá linka s diamantem uprostřed (výchozí)
  // "dvojlinka" = dvě tenké linky
  // "tecky"     = tři malé zlaté diamanty ◆ ◆ ◆
  // "bez"       = jen mezera
  oddelovac: "ornament",

  // ============================================================
  //  ROHY KARTY
  // ============================================================
  // "tecka" / "kvetina" / "kriz" / "bez"
  rohTvar: "kvetina",

  // "vsechny" / "jen_nahore" / "jen_dole" / "bez"
  rohPoloha: "vsechny",

  // ============================================================
  //  JMÉNO A DATUMY
  // ============================================================
  // Styl jména: "velka_pismena" / "normalni" / "kurziva"
  jmenoStyl: "velka_pismena",

  // Podtržení pod jménem: "ano" / "ne"
  jmenoPodtrzeni: "ne",

  // Rámeček kolem jména a datumů: "bez" / "jednoduchy" / "dvojity" / "zlaty"
  hlavickaRamecek: "bez",

};
