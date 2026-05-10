import { useState, useRef, useEffect } from "react";

// ─── ALFER LOGO ───────────────────────────────────────────────────────────────
const AlferLogo = ({ height = 24 }) => (
  <svg height={height} viewBox="0 0 116.03 35.43" xmlns="http://www.w3.org/2000/svg" style={{ display:"block" }}>
    <path fill="#00C3FF" d="M80.06,22.73c0-7.54-5.35-12.8-12.9-12.8-8.03,0-13.63,5.35-13.63,12.9s5.6,12.61,13.63,12.61c5.84,0,9.59-2.92,11.05-4.87l-4.04-3.65c-1.46,1.7-3.6,2.58-6.03,2.58-3.65,0-6.33-1.51-6.91-4.82h18.83v-1.95ZM60.98,20.3c.49-2.87,3.26-4.43,6.18-4.43,3.07,0,5.6,1.46,5.79,4.43h-11.97ZM91.74,9.93c-4.87,0-8.76,3.31-8.76,9.15v13.82c0,1.22.73,1.95,1.95,1.95h5.35v-15.28c0-2.43,1.22-3.41,3.16-3.41,1.22,0,2.19.54,2.92.97l1.95-5.6c-1.46-.73-3.65-1.61-6.57-1.61ZM28.47,1.36v31.54c0,1.22.73,1.95,1.95,1.95h5.35V1.36h-7.3ZM50.13,6.52c1.22,0,2.19.54,2.92.97l1.95-5.11c-1.46-.73-3.65-1.61-6.57-1.61-4.87,0-8.76,3.31-8.76,9.15v22.97c0,1.22.73,1.95,1.95,1.95h5.35v-18.74h6.08v-5.6h-6.08v-.58c0-2.43,1.22-3.41,3.16-3.41ZM11.78,9.93c-3.65,0-7.3,1.17-10.22,3.11l2.92,4.87c1.7-1.22,4.04-2.48,6.96-2.48,3.65,0,5.89,1.7,5.89,4.87h-6.13c-7.79,0-11.19,2.92-11.19,7.25,0,3.89,3.5,7.88,9.34,7.88,3.65,0,6.77-1.56,7.98-3.75v1.22c0,1.22.73,1.95,1.95,1.95h5.3v-14.02c0-7.3-5.26-10.9-12.8-10.9ZM17.33,25.46c0,2.43-2.48,4.62-5.4,4.62-2.43,0-4.14-1.22-4.14-2.92,0-1.95,1.95-2.68,4.87-2.68h4.67v.97Z"/>
    <path fill="#00C3FF" d="M110.44,8.13c.76-.45,1.28-1.29,1.28-2.21,0-1.52-1.19-2.56-2.73-2.56h-3.38v7.14h1.85v-2.03h1.07l1.53,2.03h2.21l-1.83-2.38ZM108.74,6.9h-1.27v-1.94h1.27c.64,0,1.07.38,1.07.96,0,.54-.41.97-1.07.97ZM113.52,1.73c-1.31-1.09-3.01-1.73-4.84-1.73s-3.56.64-4.85,1.73c-1.47,1.25-2.4,3.1-2.41,5.25,0,4.15,3.33,7.01,7.25,7.01,4.13,0,7.35-2.9,7.35-7.01,0-2.13-.98-3.99-2.51-5.25ZM108.68,12.21c-3.06,0-5.44-2.08-5.44-5.22s2.41-5.25,5.44-5.25,5.56,2.18,5.56,5.25-2.49,5.22-5.56,5.22Z"/>
  </svg>
);

// ─── BRANDS ───────────────────────────────────────────────────────────────────
const BRANDS = {
  combitech: { label:"combitech®", tagline:"Projekt mit Profil", color:"#FF6E00", bg:"rgba(255,110,0,0.12)", border:"rgba(255,110,0,0.3)" },
  orditech:  { label:"orditech®", tagline:"Stark im Detail – sicher im Ergebnis", color:"#FFC300", bg:"rgba(255,195,0,0.12)", border:"rgba(255,195,0,0.3)" },
  clipstech: { label:"clipstech®", tagline:"Das Finish für deinen Boden", color:"#E62D41", bg:"rgba(226,45,65,0.12)", border:"rgba(226,45,65,0.3)" },
  element:   { label:"element system®", tagline:"Macht Platz für dein Leben", color:"#B473FF", bg:"rgba(180,115,255,0.12)", border:"rgba(180,115,255,0.3)" },
  coaxis:    { label:"coaxis®", tagline:"Macht Platz für dein Leben", color:"#17E5E5", bg:"rgba(23,229,229,0.12)", border:"rgba(23,229,229,0.3)" },
};

// ─── SORTIMENT-STRUKTUR ───────────────────────────────────────────────────────
const STRUKTUR = {
  "Bauen & Renovieren": {
    color:"#FF6E00", image:"/sortimente/bauen.jpg", untertitel:"B2B & B2C",
    brands:{
      combitech:{ label:"combitech®", tagline:"Projekt mit Profil", color:"#FF6E00", image:"/sortimente/combitech.jpg",
        sortimente:["combitech® Profile","Connect-Verbinder","LED Profile","Zubehör gesamt","Logika"] },
      orditech:{ label:"orditech®", tagline:"Stark im Detail – sicher im Ergebnis", color:"#FFC300", image:"/sortimente/orditech.jpg",
        sortimente:["Bleche","Heimwerkerprofile","Eisenwaren (Stahl)","Fliesen","Dekor","Aluwork","Design- & Kunststoffplatten"] },
      clipstech:{ label:"clipstech®", tagline:"Das Finish für deinen Boden", color:"#E62D41", image:"/sortimente/clipstech.jpg",
        sortimente:["clipstech® Basis","clipstech® Plus","clipstech® Vario","clipstech® Mini","Optifloor","Standard Parket Profile"] },
    }
  },
  "Ordnungssysteme": {
    color:"#B473FF", image:"/sortimente/ordnen.jpg", untertitel:"B2C & B2B",
    brands:{
      element:{ label:"element system®", tagline:"Macht Platz für dein Leben", color:"#B473FF", image:"/sortimente/element.jpg",
        sortimente:["Schienen & Träger","Office-Set","Pegboard","Konsolen","Möbelfüße"] },
      coaxis:{ label:"coaxis®", tagline:"Macht Platz für dein Leben", color:"#17E5E5", image:"/sortimente/coaxis.jpg",
        sortimente:["coaxis® System Profile","Zubehör","Haken","Haken-Sortiment X-Star"] },
    }
  }
};

const BRANCHEN = [
  { id:"baumarkt", label:"Baumarkt", icon:"🔨" },
  { id:"fachhandel", label:"Fachhandel", icon:"🏪" },
  { id:"industrie", label:"Industrie", icon:"🏭" },
  { id:"moebelmarkt", label:"Möbelmarkt", icon:"🛋️" },
  { id:"ladenbau", label:"Ladenbau", icon:"🏗️" },
  { id:"handelsketten", label:"Handelsketten", icon:"🛒" },
];

// ─── PRODUKTE (50 echte Artikel aus alfer-Liste 06.05.2026) ───────────────────
const PRODUCTS_RAW = [
  {art:"85210",name:"LED Rundrohr 23,5 Alu blank 1mGs",brand:"combitech",sortiment:"LED Profile",farbe:"blank",beschreibung:"",vorteile:"Länge 1m, Breite 24mm, Höhe 24mm, Farbe: blank"},
  {art:"85211",name:"LED Rundrohr 23,5 Alu silber 1mGs",brand:"combitech",sortiment:"LED Profile",farbe:"silber",beschreibung:"",vorteile:"Länge 1m, Breite 24mm, Höhe 24mm, Farbe: silber"},
  {art:"85212",name:"LED Rundrohr 23,5 Alu weiss 1mGs",brand:"combitech",sortiment:"LED Profile",farbe:"weiss",beschreibung:"",vorteile:"Länge 1m, Breite 24mm, Höhe 24mm, Farbe: weiss"},
  {art:"85213",name:"LED Rundrohr 23,5 Alu Schw.1mGs",brand:"combitech",sortiment:"LED Profile",farbe:"schwarz",beschreibung:"",vorteile:"Länge 1m, Breite 24mm, Höhe 24mm, Farbe: schwarz"},
  {art:"85220",name:"LED Rundrohr 23,5 Alu blank 2,5mGs",brand:"combitech",sortiment:"LED Profile",farbe:"blank",beschreibung:"",vorteile:"Länge 2.5m, Breite 24mm, Höhe 24mm, Farbe: blank"},
  {art:"85221",name:"LED Rundrohr 23,5 Alu silb.2,5mGs",brand:"combitech",sortiment:"LED Profile",farbe:"silber",beschreibung:"",vorteile:"Länge 2.5m, Breite 24mm, Höhe 24mm, Farbe: silber"},
  {art:"85222",name:"LED Rundrohr 23,5 Alu weiss 2,5mGs",brand:"combitech",sortiment:"LED Profile",farbe:"weiss",beschreibung:"",vorteile:"Länge 2.5m, Breite 24mm, Höhe 24mm, Farbe: weiss"},
  {art:"85223",name:"LED Rundrohr 23,5 Alu Schw.2,5mGs",brand:"combitech",sortiment:"LED Profile",farbe:"schwarz",beschreibung:"",vorteile:"Länge 2.5m, Breite 24mm, Höhe 24mm, Farbe: schwarz"},
  {art:"28200",name:"Vertikalauflage Clip R-23,5 schwarz",brand:"combitech",sortiment:"Connect-Verbinder",farbe:"schwarz",beschreibung:"Hardwear separat",vorteile:"Länge 56mm, Breite 30mm, Höhe 40mm, Farbe: schwarz"},
  {art:"28201",name:"Horizontalauflage Clip R-23,5 schwarz",brand:"combitech",sortiment:"Connect-Verbinder",farbe:"schwarz",beschreibung:"Hardwear separat",vorteile:"Länge 63mm, Breite 40mm, Höhe 40mm, Farbe: schwarz"},
  {art:"28202",name:"Zapfen Clip R-23,5 schwarz",brand:"combitech",sortiment:"Connect-Verbinder",farbe:"schwarz",beschreibung:"Hardwear separat",vorteile:"Länge 77mm, Breite 30mm, Höhe 40mm, Farbe: schwarz"},
  {art:"28204",name:"Winkel Clip 90º R-23,5 schwarz",brand:"combitech",sortiment:"Connect-Verbinder",farbe:"schwarz",beschreibung:"Hardwear separat",vorteile:"Länge 77mm, Breite 30mm, Höhe 40mm, Farbe: schwarz"},
  {art:"28206",name:"3-Wege Clip R-23,5 schwarz",brand:"combitech",sortiment:"Connect-Verbinder",farbe:"schwarz",beschreibung:"Hardwear separat",vorteile:"Länge 76mm, Breite 96mm, Höhe 40mm, Farbe: schwarz"},
  {art:"28207",name:"Drehverbinder Clip R-23,5 schwarz",brand:"combitech",sortiment:"Connect-Verbinder",farbe:"schwarz",beschreibung:"inkl. M5x10 & M5 Mutter",vorteile:"Länge 83mm, Breite 30mm, Höhe 40mm, Farbe: schwarz"},
  {art:"28208",name:"Ablage S Clip R-23,5 schwarz",brand:"combitech",sortiment:"Connect-Verbinder",farbe:"schwarz",beschreibung:"Hardwear separat",vorteile:"Länge 45mm, Breite 40mm, Höhe 37mm, Farbe: schwarz"},
  {art:"28209",name:"Ablage M Clip R-23,5 schwarz",brand:"combitech",sortiment:"Connect-Verbinder",farbe:"schwarz",beschreibung:"Hardwear separat",vorteile:"Länge 60mm, Breite 60mm, Höhe 37mm, Farbe: schwarz"},
  {art:"28210",name:"Wandhalterung Clip R-23,5 schwarz",brand:"combitech",sortiment:"Connect-Verbinder",farbe:"schwarz",beschreibung:"Hardwear separat",vorteile:"Länge 60mm, Breite 60mm, Höhe 47mm, Farbe: schwarz"},
  {art:"28211",name:"Abdeckungsset für Clip R-23,5 schwarz",brand:"combitech",sortiment:"Connect-Verbinder",farbe:"schwarz",beschreibung:"12xAbdeck.,12 Schrau.,12 Muttern",vorteile:"Länge 39mm, Breite 13mm, Höhe 20mm, Farbe: schwarz"},
  {art:"28240",name:"Vertikalauflage Clip R-23,5 weiss",brand:"combitech",sortiment:"Connect-Verbinder",farbe:"weiss",beschreibung:"Hardwear separat",vorteile:"Länge 56mm, Breite 30mm, Höhe 40mm, Farbe: weiss"},
  {art:"28241",name:"Horizontalauflage Clip R-23,5 weiss",brand:"combitech",sortiment:"Connect-Verbinder",farbe:"weiss",beschreibung:"Hardwear separat",vorteile:"Länge 63mm, Breite 40mm, Höhe 40mm, Farbe: weiss"},
  {art:"28242",name:"Zapfen Clip R-23,5 weiss",brand:"combitech",sortiment:"Connect-Verbinder",farbe:"weiss",beschreibung:"Hardwear separat",vorteile:"Länge 77mm, Breite 30mm, Höhe 40mm, Farbe: weiss"},
  {art:"28244",name:"Winkel Clip 90º R-23,5 weiss",brand:"combitech",sortiment:"Connect-Verbinder",farbe:"weiss",beschreibung:"Hardwear separat",vorteile:"Länge 77mm, Breite 30mm, Höhe 40mm, Farbe: weiss"},
  {art:"28246",name:"3-Wege Clip R-23,5 weiss",brand:"combitech",sortiment:"Connect-Verbinder",farbe:"weiss",beschreibung:"Hardwear separat",vorteile:"Länge 76mm, Breite 96mm, Höhe 40mm, Farbe: weiss"},
  {art:"28247",name:"Drehverbinder Clip R-23,5 weiss",brand:"combitech",sortiment:"Connect-Verbinder",farbe:"weiss",beschreibung:"inkl. M5x10 & M5 Mutter",vorteile:"Länge 83mm, Breite 30mm, Höhe 40mm, Farbe: weiss"},
  {art:"28248",name:"Ablage S Clip R-23,5 weiss",brand:"combitech",sortiment:"Connect-Verbinder",farbe:"weiss",beschreibung:"Hardwear separat",vorteile:"Länge 45mm, Breite 40mm, Höhe 37mm, Farbe: weiss"},
  {art:"28249",name:"Ablage M Clip R-23,5 weiss",brand:"combitech",sortiment:"Connect-Verbinder",farbe:"weiss",beschreibung:"Hardwear separat",vorteile:"Länge 60mm, Breite 60mm, Höhe 37mm, Farbe: weiss"},
  {art:"28250",name:"Wandhalterung Clip R-23,5 weiss",brand:"combitech",sortiment:"Connect-Verbinder",farbe:"weiss",beschreibung:"Hardwear separat",vorteile:"Länge 60mm, Breite 60mm, Höhe 47mm, Farbe: weiss"},
  {art:"28251",name:"Abdeckungsset für Clip R-23,5 weiss",brand:"combitech",sortiment:"Connect-Verbinder",farbe:"weiss",beschreibung:"12xAbdeck.,12 Schrau.,12 Muttern",vorteile:"Länge 39mm, Breite 13mm, Höhe 20mm, Farbe: weiss"},
  {art:"48070",name:"PVC Hartschaumplatte weiß",brand:"orditech",sortiment:"Design- & Kunststoffplatten",farbe:"weiss",beschreibung:"250x500x3 mm",vorteile:"Länge 500mm, Breite 250mm, Höhe 3mm, Farbe: weiss"},
  {art:"48071",name:"PVC Hartschaumplatte weiß",brand:"orditech",sortiment:"Design- & Kunststoffplatten",farbe:"weiss",beschreibung:"120x1000x3 mm",vorteile:"Länge 1m, Breite 120mm, Höhe 3mm, Farbe: weiss"},
  {art:"48072",name:"PVC Hartschaumplatte weiß",brand:"orditech",sortiment:"Design- & Kunststoffplatten",farbe:"weiss",beschreibung:"300x1000x3 mm",vorteile:"Länge 1m, Breite 300mm, Höhe 3mm, Farbe: weiss"},
  {art:"48073",name:"PVC Hartschaumplatte weiß",brand:"orditech",sortiment:"Design- & Kunststoffplatten",farbe:"weiss",beschreibung:"600x1000x3 mm",vorteile:"Länge 1m, Breite 600mm, Höhe 3mm, Farbe: weiss"},
  {art:"48076",name:"PVC Hartschaumplatte schwarz",brand:"orditech",sortiment:"Design- & Kunststoffplatten",farbe:"schwarz",beschreibung:"250x500x3 mm",vorteile:"Länge 500mm, Breite 250mm, Höhe 3mm, Farbe: schwarz"},
  {art:"48077",name:"PVC Hartschaumplatte schwarz",brand:"orditech",sortiment:"Design- & Kunststoffplatten",farbe:"schwarz",beschreibung:"120x1000x3 mm",vorteile:"Länge 1m, Breite 120mm, Höhe 3mm, Farbe: schwarz"},
  {art:"48078",name:"PVC Hartschaumplatte schwarz",brand:"orditech",sortiment:"Design- & Kunststoffplatten",farbe:"schwarz",beschreibung:"300x1000x3 mm",vorteile:"Länge 1m, Breite 300mm, Höhe 3mm, Farbe: schwarz"},
  {art:"48079",name:"PVC Hartschaumplatte schwarz",brand:"orditech",sortiment:"Design- & Kunststoffplatten",farbe:"schwarz",beschreibung:"600x1000x3 mm",vorteile:"Länge 1m, Breite 600mm, Höhe 3mm, Farbe: schwarz"},
  {art:"48088",name:"Transparente Kunststoffplatte glatt",brand:"orditech",sortiment:"Design- & Kunststoffplatten",farbe:"transparent",beschreibung:"250x500x2,5 mm",vorteile:"Länge 500mm, Breite 250mm, Höhe 2mm, Farbe: transparent"},
  {art:"48089",name:"Transparente Kunststoffplatte glatt",brand:"orditech",sortiment:"Design- & Kunststoffplatten",farbe:"transparent",beschreibung:"300x300x2,5 mm",vorteile:"Länge 300mm, Breite 300mm, Höhe 2mm, Farbe: transparent"},
  {art:"48090",name:"Transparente Kunststoffplatte glatt",brand:"orditech",sortiment:"Design- & Kunststoffplatten",farbe:"transparent",beschreibung:"300x1000x2,5 mm",vorteile:"Länge 1m, Breite 300mm, Höhe 2mm, Farbe: transparent"},
  {art:"48091",name:"Transparente Kunststoffplatte glatt",brand:"orditech",sortiment:"Design- & Kunststoffplatten",farbe:"transparent",beschreibung:"600x1000x2,5 mm",vorteile:"Länge 1m, Breite 600mm, Höhe 2mm, Farbe: transparent"},
  {art:"48092",name:"Transparente Kunststoffplatte glatt",brand:"orditech",sortiment:"Design- & Kunststoffplatten",farbe:"transparent",beschreibung:"600x1000x5 mm",vorteile:"Länge 1m, Breite 600mm, Höhe 5mm, Farbe: transparent"},
  {art:"48095",name:"Kunststoffplatte Milchglas",brand:"orditech",sortiment:"Design- & Kunststoffplatten",farbe:"milchglas",beschreibung:"250x500x2,5 mm",vorteile:"Länge 500mm, Breite 250mm, Höhe 2mm, Farbe: milchglas"},
  {art:"48096",name:"Kunststoffplatte Milchglas",brand:"orditech",sortiment:"Design- & Kunststoffplatten",farbe:"milchglas",beschreibung:"300x300x2,5 mm",vorteile:"Länge 300mm, Breite 300mm, Höhe 2mm, Farbe: milchglas"},
  {art:"48097",name:"Kunststoffplatte Milchglas",brand:"orditech",sortiment:"Design- & Kunststoffplatten",farbe:"milchglas",beschreibung:"300x1000x2,5 mm",vorteile:"Länge 1m, Breite 300mm, Höhe 2mm, Farbe: milchglas"},
  {art:"48098",name:"Kunststoffplatte Milchglas",brand:"orditech",sortiment:"Design- & Kunststoffplatten",farbe:"milchglas",beschreibung:"600x1000x2,5 mm",vorteile:"Länge 1m, Breite 600mm, Höhe 2mm, Farbe: milchglas"},
  {art:"48099",name:"Kunststoffplatte Milchglas",brand:"orditech",sortiment:"Design- & Kunststoffplatten",farbe:"milchglas",beschreibung:"600x1000x5 mm",vorteile:"Länge 1m, Breite 600mm, Höhe 5mm, Farbe: milchglas"},
  {art:"48102",name:"Kunststoffspiegelplatte",brand:"orditech",sortiment:"Design- & Kunststoffplatten",farbe:"spiegel",beschreibung:"200x200x3 mm",vorteile:"Länge 200mm, Breite 200mm, Höhe 3mm, Farbe: spiegel"},
  {art:"48103",name:"Kunststoffspiegelplatte",brand:"orditech",sortiment:"Design- & Kunststoffplatten",farbe:"spiegel",beschreibung:"286x286x3 mm",vorteile:"Länge 286mm, Breite 286mm, Höhe 3mm, Farbe: spiegel"},
  {art:"48104",name:"Kunststoffspiegelplatte",brand:"orditech",sortiment:"Design- & Kunststoffplatten",farbe:"spiegel",beschreibung:"250x500x3 mm",vorteile:"Länge 500mm, Breite 250mm, Höhe 3mm, Farbe: spiegel"},
  {art:"48105",name:"Kunststoffspiegelplatte",brand:"orditech",sortiment:"Design- & Kunststoffplatten",farbe:"spiegel",beschreibung:"300x1000x3 mm",vorteile:"Länge 1m, Breite 300mm, Höhe 3mm, Farbe: spiegel"}
];

// Add zielgruppe + neuheit fields by enriching:
const PRODUCTS = PRODUCTS_RAW.map(p => ({
  ...p,
  id: "P" + p.art,
  artNr: p.art,
  bereich: "Bauen & Renovieren",
  zielgruppe: ["baumarkt","fachhandel","industrie"],
  neuheit: (p.art.startsWith("282") || p.brand === "combitech" && p.sortiment === "LED Profile") ? "ja" : "nein",
  designedInGermany: false, // only CC3 hero
  bildUrl: `/products/${p.art}.jpg`,
  tags: [p.brand, p.sortiment.toLowerCase(), p.farbe, ...(p.beschreibung||"").toLowerCase().split(" ").filter(Boolean)].filter(Boolean).join(","),
}));

// ─── HERO PRODUCT (combitech® connect 3.0 - Komplettsystem) ──────────────────
const CC3_HERO = {
  id: "CC3-HERO",
  artNr: "CC3.000.SET",
  name: "combitech® connect 3.0 – Komplettsystem",
  brand: "combitech",
  bereich: "Bauen & Renovieren",
  sortiment: "Connect-Verbinder",
  farbe: "",
  beschreibung: "Das modulare System neu definiert. Innovative Clip-Klemm-Technologie für die nächste Generation modularer Verbindungslösungen – Innen wie Außen. CLIP. CLAMP. DONE.",
  vorteile: "Innovative Clip-Klemm-Technologie|Stufenlose Verstellung in Längs- und Rotationsachse|Montage ohne Bohren – minimaler Sägeaufwand|Hohe Stabilität & maximale Wiederverwendbarkeit|Erweiterbar & kompatibel mit connect 2.0|Nahtlose Integration in 23,5 mm Rundrohr-System",
  zielgruppe: ["baumarkt","fachhandel","industrie","moebelmarkt","ladenbau","handelsketten"],
  neuheit: "ja",
  designedInGermany: true,
  combitechCompatible: true,
  bildUrl: "/products/cc3_hero.jpg",
  tags: "connect,3.0,clip,klemm,modular,messe,koeln,2026,neuheit,system",
};

// ─── VERKAUFSSTÄNDER ──────────────────────────────────────────────────────────
const VERKAUFSSTAENDER = [
  { id:"VS-CC3", name:"combitech® connect 3.0 Display", brand:"combitech", image:"/pos/vs_cc3.jpg",
    beschreibung:"Hochwertiges Display-Modul für combitech® connect 3.0. Ideal für Baumarkt und Fachhandel.",
    artikel:["28202","28204","28207","28242","28244","28247"] },
  { id:"VS-LED", name:"combitech® LED Profile Tower", brand:"combitech", image:"/pos/vs_led.jpg",
    beschreibung:"Premium-Aufsteller für das LED-Profil-Sortiment.",
    artikel:["85210","85211","85212","85213","85220","85221","85222","85223"] },
];

// ─── ANWENDUNGEN ──────────────────────────────────────────────────────────────
const ANWENDUNGEN = [
  { id:"A001", name:"Modulare Garderobe", bereich:"Bauen & Renovieren", image:"/anwendungen/garderobe.jpg",
    beschreibung:"Designstarke Garderobe mit combitech® connect 3.0 – flexibel erweiterbar.",
    artikel:["28202","28207","28244","28247","28208","28210"] },
  { id:"A002", name:"LED Wandinstallation", bereich:"Bauen & Renovieren", image:"/anwendungen/led_wand.jpg",
    beschreibung:"Indirekte Beleuchtung mit combitech® LED-Profilen 23,5.",
    artikel:["85210","85212","85220","85222"] },
];

// ─── CSV HELPER ───────────────────────────────────────────────────────────────
function parseCSV(text) {
  const lines = text.trim().split("\n");
  const headers = lines[0].split(";").map(h => h.trim().replace(/^"|"$/g,""));
  return lines.slice(1).map(line => {
    const vals = line.split(";").map(v => v.trim().replace(/^"|"$/g,""));
    const obj = {};
    headers.forEach((h,i) => obj[h] = vals[i] || "");
    return obj;
  }).filter(p => p.art || p.artNr);
}

// ─── ICONS ────────────────────────────────────────────────────────────────────
const Icon = ({ name, size=20 }) => {
  const d = {
    search:<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>,
    bookmark:<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>,
    bookmarkFill:<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>,
    back:<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>,
    close:<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>,
    check:<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6 9 17l-5-5"/></svg>,
    upload:<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>,
    send:<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m22 2-7 20-4-9-9-4 20-7z"/></svg>,
    user:<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>,
    grid:<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
    export:<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>,
    plus:<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>,
    arrow:<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>,
  };
  return d[name]||null;
};

// ─── ProductImage with Fallback ───────────────────────────────────────────────
const ProductImage = ({ artNr, name, brand, className, style }) => {
  const [error, setError] = useState(false);
  const url = `/products/${artNr}.jpg`;
  const b = BRANDS[brand];
  if (error || !artNr) {
    return (
      <div className={className} style={{...style, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", background:"linear-gradient(135deg, var(--bg3), var(--bg4))", color:"var(--text3)", padding:16, textAlign:"center"}}>
        <div style={{fontSize:11, fontFamily:"var(--mono)", fontWeight:700, color: b ? b.color : "var(--alfer)", letterSpacing:"0.05em", marginBottom:6}}>{b ? b.label : "alfer®"}</div>
        <div style={{fontSize:9, color:"var(--text3)", letterSpacing:"0.1em"}}>ART-NR.</div>
        <div style={{fontSize:14, fontWeight:700, fontFamily:"var(--mono)", color:"var(--text2)", marginTop:2}}>{artNr}</div>
      </div>
    );
  }
  return <img className={className} style={style} src={url} alt={name} loading="lazy" onError={()=>setError(true)}/>;
};

// ─── CSS ──────────────────────────────────────────────────────────────────────
const css = `
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#050B12;--bg2:#0A1520;--bg3:#0F1E2E;--bg4:#162638;
  --border:rgba(0,195,255,0.08);--border2:rgba(0,195,255,0.2);
  --text:#EEF6FF;--text2:#7BA8C8;--text3:#3A6078;
  --alfer:#00C3FF;--r:14px;--r2:20px;
  --font:'Lexend',sans-serif;--mono:'Space Mono',monospace;
  --t:0.18s cubic-bezier(0.4,0,0.2,1);
}
html,body{height:100%;overflow:hidden;background:var(--bg)}
body{font-family:var(--font);color:var(--text);-webkit-font-smoothing:antialiased;touch-action:manipulation}
#root{height:100vh;display:flex;flex-direction:column;overflow:hidden;max-width:540px;margin:0 auto;border-left:1px solid var(--border);border-right:1px solid var(--border)}
@media(min-width:1100px){#root{max-width:480px;box-shadow:0 0 80px rgba(0,0,0,0.7)}}
.app{display:flex;flex-direction:column;height:100vh;overflow:hidden}
.scroll{overflow-y:auto;flex:1;-webkit-overflow-scrolling:touch}
.scroll::-webkit-scrollbar{width:3px}
.scroll::-webkit-scrollbar-thumb{background:var(--bg4);border-radius:2px}

.hdr{display:flex;align-items:center;justify-content:space-between;padding:12px 18px;background:rgba(5,11,18,0.97);backdrop-filter:blur(24px);border-bottom:1px solid var(--border);flex-shrink:0;z-index:100}
.hdr-sub{font-size:10px;color:var(--text3);font-family:var(--mono);letter-spacing:0.1em;text-transform:uppercase;margin-top:2px}
.hdr-r{display:flex;gap:8px}
.bti{width:36px;height:36px;background:var(--bg3);border:1px solid var(--border);border-radius:10px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--text2);transition:all var(--t);position:relative;flex-shrink:0}
.bti:active{transform:scale(0.91)}
.bti:hover{background:var(--bg4);border-color:var(--border2);color:var(--text)}
.badge{position:absolute;top:-5px;right:-5px;background:var(--alfer);color:var(--bg);font-size:9px;font-weight:700;width:16px;height:16px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:var(--mono)}

.hero{position:relative;overflow:hidden;padding:22px 18px 18px;background:linear-gradient(135deg,var(--bg2) 0%,var(--bg) 100%);border-bottom:1px solid var(--border)}
.hero::after{content:'';position:absolute;top:-60px;right:-60px;width:220px;height:220px;border-radius:50%;background:radial-gradient(circle,rgba(0,195,255,0.07) 0%,transparent 70%);pointer-events:none}
.eyebrow{font-size:10px;color:var(--text3);font-family:var(--mono);letter-spacing:0.12em;text-transform:uppercase;margin-bottom:5px}
.h1{font-size:26px;font-weight:800;line-height:1.15}
.h1 span{color:var(--alfer)}
.tagline{font-size:12px;color:var(--text3);margin-top:5px;font-style:italic}

/* Bereich Cards (3:4 portrait) */
.bereiche{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:16px 16px 0}
.bc{position:relative;border-radius:var(--r2);overflow:hidden;cursor:pointer;aspect-ratio:1/1.3;transition:transform var(--t)}
.bc:active{transform:scale(0.96)}
.bc img{width:100%;height:100%;object-fit:cover;display:block}
.bc-ov{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.92) 0%,rgba(0,0,0,0.3) 50%,transparent 100%);padding:14px;display:flex;flex-direction:column;justify-content:flex-end}
.bc-acc{width:22px;height:3px;border-radius:2px;margin-bottom:7px}
.bc-lbl{font-size:15px;font-weight:800}
.bc-cnt{font-size:10px;color:rgba(255,255,255,0.55);margin-top:2px}

.sec-hdr{display:flex;align-items:center;justify-content:space-between;padding:18px 16px 10px;flex-shrink:0}
.sec-t{font-size:17px;font-weight:800}
.sec-s{font-size:11px;color:var(--text3);margin-top:2px}

/* Nav Tiles */
.nav-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;padding:10px 16px 100px}
@media(min-width:700px){.nav-grid{grid-template-columns:repeat(3,1fr)}}
.nt{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r2);padding:18px 15px 20px;cursor:pointer;transition:all var(--t);position:relative;overflow:hidden;min-height:105px;display:flex;flex-direction:column;justify-content:space-between}
.nt:active{transform:scale(0.96)}
.nt:hover{border-color:var(--border2)}
.nt-dot{width:7px;height:7px;border-radius:50%;margin-bottom:10px}
.nt-lbl{font-size:13px;font-weight:700;line-height:1.3}
.nt-s{font-size:10px;color:var(--text3);margin-top:3px}

.search-bar{padding:14px 16px 0;flex-shrink:0}
.sw{background:var(--bg3);border:1px solid var(--border);border-radius:var(--r);display:flex;align-items:center;transition:border-color var(--t)}
.sw:focus-within{border-color:var(--alfer)}
.s-ico{padding:0 12px;color:var(--text3);flex-shrink:0}
.s-inp{flex:1;background:none;border:none;outline:none;color:var(--text);font-family:var(--font);font-size:15px;padding:12px 12px 12px 0}
.s-inp::placeholder{color:var(--text3)}

.chips{display:flex;gap:8px;padding:0 16px 12px;overflow-x:auto;flex-shrink:0}
.chips::-webkit-scrollbar{display:none}
.chip{padding:6px 13px;border-radius:99px;font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap;border:1px solid var(--border);background:var(--bg3);color:var(--text2);transition:all var(--t);flex-shrink:0;font-family:var(--font)}
.chip.on{background:var(--alfer);color:var(--bg);border-color:var(--alfer);font-weight:800}
.chip:active{transform:scale(0.93)}

/* Product cards (1:1) */
.pg{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;padding:0 16px 100px}
@media(min-width:700px){.pg{grid-template-columns:repeat(3,1fr)}}
.pc{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r2);overflow:hidden;cursor:pointer;transition:all var(--t);position:relative}
.pc:active{transform:scale(0.96)}
.pc:hover{border-color:var(--border2)}
.pc-img{width:100%;aspect-ratio:1/1;object-fit:cover;background:var(--bg4);display:block}
.pc-body{padding:11px 13px 14px}
.pc-artnr-top{font-size:13px;font-family:var(--mono);font-weight:700;color:var(--text);letter-spacing:0.04em}
.pc-brand{font-size:10px;font-weight:800;margin-top:4px}
.pc-name{font-size:12px;font-weight:600;line-height:1.4;color:var(--text2);margin-top:4px}
.pc-tags{display:flex;gap:4px;flex-wrap:wrap;margin-top:8px}
.pt{font-size:10px;font-weight:600;padding:3px 8px;background:var(--bg4);border-radius:99px;color:var(--text2)}
.neu{background:rgba(0,195,255,0.1);color:var(--alfer);border:1px solid rgba(0,195,255,0.25);padding:2px 9px;border-radius:99px;font-size:10px;font-weight:800}
.bmbtn{position:absolute;top:9px;right:9px;background:rgba(0,0,0,0.65);backdrop-filter:blur(8px);border:none;border-radius:8px;width:30px;height:30px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--text2);transition:color var(--t)}
.bmbtn.on{color:var(--alfer)}
.bmbtn:active{transform:scale(0.88)}

/* Sortiment cards */
.sg{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:0 16px 100px}
@media(min-width:700px){.sg{grid-template-columns:repeat(3,1fr)}}
.sc{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r2);overflow:hidden;cursor:pointer;transition:all var(--t)}
.sc:active{transform:scale(0.97)}
.sc img{width:100%;aspect-ratio:1/1;object-fit:cover;display:block}
.sc-body{padding:12px 14px 14px}
.sc-br{font-size:11px;font-weight:800;margin-bottom:4px;letter-spacing:0.02em}
.sc-tag{font-size:11px;color:var(--text2);margin-top:2px;font-weight:500;line-height:1.35}
.sc-ct{font-size:10px;color:var(--text3);margin-top:6px;font-family:var(--mono)}

/* Untersortimente Liste */
.ust-list{display:flex;flex-direction:column;gap:6px;padding:0 16px 100px}
.ust-item{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;background:var(--bg2);border:1px solid var(--border);border-radius:var(--r);cursor:pointer;transition:all var(--t)}
.ust-item:active{transform:scale(0.98)}
.ust-item:hover{border-color:var(--border2)}
.ust-name{font-size:14px;font-weight:600}
.ust-meta{font-size:10px;color:var(--text3);font-family:var(--mono);margin-top:2px}
.ust-cnt{font-size:11px;color:var(--text3);font-family:var(--mono);background:var(--bg4);padding:4px 10px;border-radius:99px}
.ust-arrow{color:var(--text3);transition:transform var(--t)}

/* Detail */
.dh{position:relative;aspect-ratio:1/1;overflow:hidden;flex-shrink:0;max-height:540px}
.dh-cc3{aspect-ratio:16/9}
.dh img{width:100%;height:100%;object-fit:cover}
.dh-ov{position:absolute;bottom:0;left:0;right:0;padding:18px;background:linear-gradient(to top,rgba(0,0,0,0.95) 0%,transparent 100%)}
.db,.dbm{position:absolute;background:rgba(0,0,0,0.65);backdrop-filter:blur(8px);border:none;border-radius:10px;width:36px;height:36px;display:flex;align-items:center;justify-content:center;cursor:pointer;top:13px;transition:color var(--t)}
.db{left:13px;color:var(--text)}
.dbm{right:13px;color:var(--text2)}
.dbm.on{color:var(--alfer)}
.ds{padding:14px 16px;border-bottom:1px solid var(--border)}
.ds:last-child{border-bottom:none}
.ds-lbl{font-size:10px;font-weight:700;color:var(--text3);letter-spacing:0.1em;text-transform:uppercase;margin-bottom:10px}
.desc{font-size:14px;color:var(--text2);line-height:1.65}
.vl{list-style:none;display:flex;flex-direction:column;gap:7px}
.vi{display:flex;align-items:flex-start;gap:10px;font-size:14px}
.vd{width:20px;height:20px;border-radius:50%;background:rgba(0,195,255,0.1);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--alfer);margin-top:1px}

/* Badges Trust */
.trust-badges{display:flex;gap:8px;margin-top:14px;flex-wrap:wrap}
.tb{flex:1;min-width:90px;background:var(--bg3);border:1px solid var(--border2);border-radius:var(--r);padding:8px;display:flex;flex-direction:column;align-items:center;gap:5px;transition:all var(--t)}
.tb img{width:42px;height:42px;object-fit:contain;display:block}
.tb-label{font-size:9px;font-weight:700;color:var(--text2);text-align:center;letter-spacing:0.04em;line-height:1.2}

.vg{display:flex;flex-wrap:wrap;gap:8px}
.vc{padding:8px 14px;border-radius:10px;background:var(--bg4);border:1px solid var(--border);font-size:12px;color:var(--text2);cursor:pointer;transition:all var(--t);font-family:var(--font);font-weight:600}
.vc:hover{border-color:var(--border2);color:var(--text)}
.vc.on{background:rgba(0,195,255,0.1);border-color:var(--alfer);color:var(--alfer)}
.vc:active{transform:scale(0.95)}
.aimg{width:100%;border-radius:12px;aspect-ratio:1/1;object-fit:cover}
.cta{position:sticky;bottom:0;padding:12px 16px;background:rgba(5,11,18,0.97);backdrop-filter:blur(20px);border-top:1px solid var(--border);display:flex;gap:10px;flex-shrink:0;z-index:50}
.bp{flex:1;padding:14px;background:var(--alfer);color:var(--bg);border:none;border-radius:var(--r);cursor:pointer;font-family:var(--font);font-size:14px;font-weight:800;transition:opacity var(--t)}
.bp:active{opacity:0.85}
.bs{padding:14px 16px;background:var(--bg3);color:var(--text);border:1px solid var(--border);border-radius:var(--r);cursor:pointer;font-family:var(--font);font-size:14px;font-weight:600;transition:all var(--t)}
.bs:active{transform:scale(0.96)}

/* Branchen / POS / Anwendungen */
.bg-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;padding:0 16px 100px}
@media(min-width:700px){.bg-grid{grid-template-columns:repeat(3,1fr)}}
.bt{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r2);padding:20px 16px;cursor:pointer;transition:all var(--t);display:flex;flex-direction:column;gap:10px;min-height:100px}
.bt:active{transform:scale(0.97)}

/* POS / Anwendung Cards */
.app-grid{display:grid;grid-template-columns:1fr;gap:12px;padding:0 16px 100px}
@media(min-width:700px){.app-grid{grid-template-columns:repeat(2,1fr)}}
.app-card{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r2);overflow:hidden;cursor:pointer;transition:all var(--t)}
.app-card:active{transform:scale(0.98)}
.app-card img{width:100%;aspect-ratio:1/1;object-fit:cover;display:block;background:var(--bg4)}
.app-card-body{padding:14px 16px}

/* CRM */
.crm-f{padding:0 16px 100px;display:flex;flex-direction:column;gap:12px}
.fl{font-size:10px;font-weight:700;color:var(--text3);letter-spacing:0.1em;text-transform:uppercase;margin-bottom:6px;display:block}
.fi,.fsel,.fta{width:100%;background:var(--bg3);border:1px solid var(--border);border-radius:var(--r);padding:12px 14px;color:var(--text);font-family:var(--font);font-size:14px;outline:none;transition:border-color var(--t);appearance:none;-webkit-appearance:none}
.fi:focus,.fsel:focus,.fta:focus{border-color:var(--alfer)}
.fta{resize:vertical;min-height:80px}
.fr{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.pg2{display:flex;gap:8px}
.pb{flex:1;padding:10px;background:var(--bg3);border:1px solid var(--border);border-radius:10px;cursor:pointer;text-align:center;font-size:12px;font-weight:700;color:var(--text2);transition:all var(--t);font-family:var(--font)}
.pb.h.on{background:rgba(226,45,65,0.13);border-color:#E62D41;color:#E62D41}
.pb.m.on{background:rgba(0,195,255,0.1);border-color:var(--alfer);color:var(--alfer)}
.pb.l.on{background:rgba(23,229,229,0.1);border-color:#17E5E5;color:#17E5E5}

/* Merkliste */
.ml{padding:0 16px 100px;display:flex;flex-direction:column;gap:10px}
.mi{display:flex;align-items:center;gap:12px;background:var(--bg2);border:1px solid var(--border);border-radius:var(--r2);padding:12px 14px;cursor:pointer;transition:all var(--t)}
.mi:active{transform:scale(0.98)}
.mimg{width:56px;height:56px;border-radius:10px;background:var(--bg4);flex-shrink:0;overflow:hidden}
.mimg img{width:100%;height:100%;object-fit:cover}
.min{flex:1;min-width:0}
.mn{font-size:14px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mm{font-size:10px;color:var(--text3);font-family:var(--mono);margin-top:2px}
.mrm{background:none;border:none;color:var(--text3);cursor:pointer;padding:4px}

.imp-z{border:2px dashed var(--border2);border-radius:var(--r2);padding:28px;text-align:center;cursor:pointer;transition:all var(--t);background:var(--bg3);margin:0 16px}
.imp-z:hover{border-color:var(--alfer);background:rgba(0,195,255,0.04)}
.pill{display:inline-flex;align-items:center;gap:5px;padding:3px 10px;border-radius:99px;font-size:11px;font-weight:700;border:1px solid}
.empty{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding:60px 20px;color:var(--text3);text-align:center}
.crm-ok{background:rgba(23,229,229,0.08);border:1px solid rgba(23,229,229,0.22);border-radius:var(--r);padding:12px 16px;margin:0 16px 12px;display:flex;align-items:center;gap:10px;color:#17E5E5;font-size:13px;font-weight:700}
.toast{position:fixed;bottom:76px;left:50%;transform:translateX(-50%) translateY(14px);background:var(--bg4);border:1px solid var(--border2);color:var(--text);padding:10px 20px;border-radius:99px;font-size:13px;font-weight:700;z-index:999;opacity:0;transition:all 0.22s;white-space:nowrap;box-shadow:0 8px 32px rgba(0,0,0,0.7)}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.tabbar{display:flex;align-items:center;background:rgba(5,11,18,0.98);backdrop-filter:blur(24px);border-top:1px solid var(--border);padding:8px 0 16px;flex-shrink:0;z-index:100}
.tab{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;padding:5px 4px;color:var(--text3);font-size:10px;transition:color var(--t);background:none;border:none;font-family:var(--font)}
.tab.on{color:var(--alfer)}
.tab:active{transform:scale(0.91)}

/* Hero CC3 banner */
.hero-banner{padding:16px 16px 0;cursor:pointer}
.hero-banner-inner{position:relative;border-radius:var(--r2);overflow:hidden;border:1px solid rgba(255,110,0,0.3);background:linear-gradient(135deg, rgba(255,110,0,0.08), var(--bg2))}
.hero-banner-tag{position:absolute;top:12px;left:12px;z-index:2;display:flex;align-items:center;gap:6px;background:#FF6E00;color:#fff;padding:5px 10px;border-radius:99px;font-size:10px;font-weight:800;letter-spacing:0.06em}
.hero-banner-img{width:100%;aspect-ratio:16/9;object-fit:cover;display:block;background:var(--bg4)}
`;

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [products, setProducts] = useState([CC3_HERO, ...PRODUCTS]);
  const [view, setView] = useState("home");
  const [selP, setSelP] = useState(null);
  const [saved, setSaved] = useState([]);
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState("all");
  const [tab, setTab] = useState("home");
  const [toast, setToast] = useState({ show:false, msg:"" });
  const [stack, setStack] = useState([]);
  const [bereich, setBereich] = useState(null);
  const [brand, setBrand] = useState(null);
  const [sortimentFilter, setSortimentFilter] = useState(null);
  const [farbeFilter, setFarbeFilter] = useState(null);
  const [crm, setCrm] = useState({ firma:"",name:"",typ:"",land:"",interesse:"",notiz:"",prio:"",step:"" });
  const [crmOk, setCrmOk] = useState(false);
  const [selVS, setSelVS] = useState(null);
  const [selAnw, setSelAnw] = useState(null);
  const fileRef = useRef();

  const toast_ = msg => { setToast({ show:true,msg }); setTimeout(()=>setToast({show:false,msg:""}),2200); };
  const toggleSave = (id,e) => { if(e)e.stopPropagation(); setSaved(p=>p.includes(id)?(toast_("Entfernt"),p.filter(x=>x!==id)):(toast_("✦ Gespeichert"),[...p,id])); };

  const go = (v,opts={}) => {
    setStack(s=>[...s,{view,filter,bereich,brand,sortimentFilter,farbeFilter,selP,selVS,selAnw}]);
    setView(v);
    if(opts.filter!==undefined)setFilter(opts.filter);
    if(opts.bereich!==undefined)setBereich(opts.bereich);
    if(opts.brand!==undefined)setBrand(opts.brand);
    if(opts.sortiment!==undefined)setSortimentFilter(opts.sortiment);
    if(opts.farbe!==undefined)setFarbeFilter(opts.farbe);
    if(opts.product!==undefined)setSelP(opts.product);
    if(opts.vs!==undefined)setSelVS(opts.vs);
    if(opts.anw!==undefined)setSelAnw(opts.anw);
  };
  const back = () => {
    const prev=stack[stack.length-1];
    if(prev){
      setStack(s=>s.slice(0,-1));
      setView(prev.view);setFilter(prev.filter||"all");
      setBereich(prev.bereich||null);setBrand(prev.brand||null);
      setSortimentFilter(prev.sortimentFilter||null);
      setFarbeFilter(prev.farbeFilter||null);
      setSelP(prev.selP||null);
      setSelVS(prev.selVS||null);
      setSelAnw(prev.selAnw||null);
    }
    else{setView("home");setTab("home");}
  };
  const nav = v => { setStack([]);setView(v);setFilter("all");setBereich(null);setBrand(null);setSortimentFilter(null);setFarbeFilter(null);setTab(v==="crm"?"crm":v==="merkliste"?"merkliste":v==="home"?"home":"browse"); };
  const openP = p => { go("detail",{product:p}); };

  const handleCSV = e => {
    const f=e.target.files[0]; if(!f)return;
    const r=new FileReader();
    r.onload=ev=>{ try{ const p=parseCSV(ev.target.result); if(p.length>0){
      const enriched = p.map(x => ({
        ...x, id: "P"+(x.art||x.artNr), artNr: x.art||x.artNr,
        bereich: x.bereich || "Bauen & Renovieren",
        zielgruppe: (x.zielgruppe||"baumarkt").split(","),
        bildUrl: `/products/${x.art||x.artNr}.jpg`,
      }));
      setProducts([CC3_HERO,...enriched]);toast_(`✓ ${p.length} Produkte importiert`);
    }else toast_("CSV-Format prüfen"); }catch{toast_("Import fehlgeschlagen");} };
    r.readAsText(f,"UTF-8");
  };

  const fps = products.filter(p => {
    if (p.id === "CC3-HERO") return false; // never in normal lists
    const sq=q.toLowerCase();
    const name=(p.name||"").toLowerCase();
    const art=(p.artNr||p.art||"").toLowerCase();
    const tags=(p.tags||"").toLowerCase();
    const sort=(p.sortiment||"").toLowerCase();
    const br=(p.brand||"").toLowerCase();
    const mq=!sq || name.includes(sq) || art.includes(sq) || tags.includes(sq) || sort.includes(sq) || br.includes(sq);
    const mf=filter==="all" || p.brand===filter || (filter==="neu" && p.neuheit==="ja") || (p.zielgruppe&&p.zielgruppe.includes&&p.zielgruppe.includes(filter));
    const mb=!bereich || p.bereich===bereich;
    const mbr=!brand || p.brand===brand;
    const ms=!sortimentFilter || p.sortiment===sortimentFilter;
    const mfa=!farbeFilter || p.farbe===farbeFilter;
    return mq&&mf&&mb&&mbr&&ms&&mfa;
  });

  const savedP = products.filter(p=>saved.includes(p.id));

  return (
    <>
      <style>{css}</style>
      <div className="app">
        <header className="hdr">
          <div><AlferLogo height={22}/><div className="hdr-sub">Digitaler Showroom</div></div>
          <div className="hdr-r">
            {view!=="home"&&<button className="bti" onClick={()=>nav("home")}><Icon name="grid" size={16}/></button>}
            <button className="bti" onClick={()=>nav("merkliste")}><Icon name="bookmark" size={16}/>{saved.length>0&&<span className="badge">{saved.length}</span>}</button>
            <button className="bti" onClick={()=>nav("crm")}><Icon name="user" size={16}/></button>
          </div>
        </header>

        <div className="scroll">
          {view==="home" && <HomeV products={products} onGo={go} onNav={nav} onOpenP={openP}/>}
          {view==="sort" && <SortV products={products} bereich={bereich} onGo={go} onBack={back}/>}
          {view==="brand" && <BrandV products={products} brand={brand} bereich={bereich} onGo={go} onBack={back}/>}
          {view==="products" && <ProdV products={fps} saved={saved} onTog={toggleSave} onOpen={openP} q={q} setQ={setQ} filter={filter} setFilter={setFilter} brand={brand} bereich={bereich} sortimentFilter={sortimentFilter} farbeFilter={farbeFilter} onBack={back}/>}
          {view==="branchen" && <BraV products={products} onGo={go} onBack={back}/>}
          {view==="pos" && <POSListV onGo={go} onBack={back}/>}
          {view==="pos-detail" && selVS && <POSDetailV vs={selVS} products={products} onOpen={openP} onBack={back}/>}
          {view==="anwendungen" && <AnwListV onGo={go} onBack={back}/>}
          {view==="anwendungen-detail" && selAnw && <AnwDetailV anw={selAnw} products={products} onOpen={openP} onBack={back}/>}
          {view==="detail" && selP && <DetV product={selP} products={products} saved={saved} onTog={toggleSave} onBack={back} onOpenArt={(art)=>{const p=products.find(x=>x.artNr===art);if(p)openP(p);else toast_("Artikel nicht gefunden");}} onCRM={()=>{toast_("Zum Gespräch hinzugefügt");nav("crm");}}/>}
          {view==="crm" && <CRMV data={crm} setData={setCrm} savedP={savedP} ok={crmOk} onSave={()=>{setCrmOk(true);toast_("✓ Gespräch gespeichert");}}/>}
          {view==="merkliste" && <MlV savedP={savedP} saved={saved} onTog={toggleSave} onOpen={openP} onExport={()=>toast_("Export vorbereitet …")}/>}
          {view==="import" && <ImpV fileRef={fileRef} handleCSV={handleCSV} products={products} onBack={back}/>}
        </div>

        <nav className="tabbar">
          <button className={`tab ${tab==="home"?"on":""}`} onClick={()=>nav("home")}><Icon name="grid" size={20}/>Start</button>
          <button className={`tab ${tab==="browse"?"on":""}`} onClick={()=>{nav("products");setTab("browse");}}><Icon name="search" size={20}/>Produkte</button>
          <button className={`tab ${tab==="merkliste"?"on":""}`} onClick={()=>nav("merkliste")}><Icon name="bookmark" size={20}/>{saved.length>0?`(${saved.length})`:"Merkliste"}</button>
          <button className={`tab ${tab==="crm"?"on":""}`} onClick={()=>nav("crm")}><Icon name="user" size={20}/>Gespräch</button>
        </nav>
        <div className={`toast ${toast.show?"show":""}`}>{toast.msg}</div>
      </div>
    </>
  );
}

// ─── HOME ─────────────────────────────────────────────────────────────────────
function HomeV({products,onGo,onNav,onOpenP}){
  const tiles=[
    {l:"Artikelsuche",s:"Schnell finden",i:"🔍",c:"#00C3FF",a:()=>onNav("products")},
    {l:"Branchenlösungen",s:"Zielgruppen",i:"🏭",c:"#B473FF",a:()=>onGo("branchen")},
    {l:"Verkaufsständer",s:"POS & Shopfitting",i:"🏪",c:"#FFC300",a:()=>onGo("pos")},
    {l:"Anwendungen",s:"Baubeispiele",i:"⚡",c:"#E62D41",a:()=>onGo("anwendungen")},
    {l:"Gespräch / CRM",s:"Lead erfassen",i:"💬",c:"#FF6E00",a:()=>onNav("crm")},
    {l:"CSV Import",s:"Produkte laden",i:"📥",c:"#17E5E5",a:()=>onGo("import")},
  ];
  return(
    <div>
      <div className="hero">
        <div className="eyebrow">Digitaler Showroom </div>
        <div className="h1">Willkommen bei<br/><span>alfer aluminium</span></div>
        <div className="tagline">Dein Projekt verdient Profil.</div>
      </div>

      {/* Hero Banner: combitech connect 3.0 */}
      <div className="hero-banner" onClick={()=>onOpenP(CC3_HERO)}>
        <div className="hero-banner-inner">
          <div className="hero-banner-tag">✦ NEUHEIT · MESSE KÖLN 2026</div>
          <img className="hero-banner-img" src="/products/cc3_hero.jpg" alt="combitech connect 3.0" loading="lazy"/>
          <div style={{padding:"14px 16px 16px"}}>
            <div style={{fontSize:11,color:"#FF6E00",fontWeight:800,marginBottom:4}}>combitech®</div>
            <div style={{fontSize:18,fontWeight:800,lineHeight:1.2}}>combitech® connect 3.0</div>
            <div style={{fontSize:13,color:"var(--text2)",marginTop:4}}>Design, das verbindet. <span style={{fontFamily:"var(--mono)",color:"var(--text3)",fontSize:11}}>· CLIP. CLAMP. DONE.</span></div>
            <div style={{marginTop:10,display:"flex",gap:6,flexWrap:"wrap"}}>
              <span style={{fontSize:10,fontWeight:700,padding:"3px 9px",background:"rgba(255,110,0,0.13)",color:"#FF6E00",borderRadius:99,border:"1px solid rgba(255,110,0,0.3)"}}>Clip-Klemm-Technologie</span>
              <span style={{fontSize:10,fontWeight:700,padding:"3px 9px",background:"rgba(255,110,0,0.13)",color:"#FF6E00",borderRadius:99,border:"1px solid rgba(255,110,0,0.3)"}}>360° verstellbar</span>
              <span style={{fontSize:10,fontWeight:700,padding:"3px 9px",background:"rgba(255,110,0,0.13)",color:"#FF6E00",borderRadius:99,border:"1px solid rgba(255,110,0,0.3)"}}>Ohne Bohren</span>
            </div>
          </div>
        </div>
      </div>

      <div className="sec-hdr"><div><div className="sec-t">Produktbereiche</div><div className="sec-s">2 Bereiche · {Object.keys(BRANDS).length} Marken</div></div></div>
      <div className="bereiche">
        {Object.entries(STRUKTUR).map(([name,b])=>{
          const cnt=products.filter(p=>p.bereich===name && p.id!=="CC3-HERO").length;
          return(
            <div key={name} className="bc" onClick={()=>onGo("sort",{bereich:name})}>
              <img src={b.image} alt={name} loading="lazy"/>
              <div className="bc-ov">
                <div className="bc-acc" style={{background:b.color}}/>
                <div className="bc-lbl">{name}</div>
                <div className="bc-cnt">{cnt} Produkte</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="sec-hdr"><div><div className="sec-t">Schnellzugriff</div></div></div>
      <div className="nav-grid">
        {tiles.map(t=>(
          <div key={t.l} className="nt" onClick={t.a}>
            <div className="nt-dot" style={{background:t.c}}/>
            <div><div style={{fontSize:22,marginBottom:5}}>{t.i}</div><div className="nt-lbl">{t.l}</div><div className="nt-s">{t.s}</div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── SORTIMENT (Marken-Auswahl pro Bereich) ───────────────────────────────────
function SortV({products,bereich,onGo,onBack}){
  const b=STRUKTUR[bereich]; if(!b)return null;
  return(
    <div>
      <div className="sec-hdr"><div><div className="sec-t">{bereich}</div><div className="sec-s">{Object.keys(b.brands).length} Marken · {b.untertitel||""}</div></div><button className="bs" style={{padding:"8px 12px",fontSize:12}} onClick={onBack}>Zurück</button></div>
      <div className="sg">
        {Object.entries(b.brands).map(([bid,br])=>{
          const cnt=products.filter(p=>p.brand===bid && p.id!=="CC3-HERO").length;
          const brd=BRANDS[bid];
          return(
            <div key={bid} className="sc" onClick={()=>onGo("brand",{bereich,brand:bid})}>
              <img src={br.image} alt={br.label} loading="lazy"/>
              <div className="sc-body">
                <div className="sc-br" style={{color:br.color}}>{br.label}</div>
                {br.tagline&&<div className="sc-tag">{br.tagline}</div>}
                <div className="sc-ct">{cnt} Artikel · {br.sortimente.length} Sortimente</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── BRAND (Untersortimente einer Marke) ──────────────────────────────────────
function BrandV({products,brand,bereich,onGo,onBack}){
  const b=STRUKTUR[bereich]; if(!b)return null;
  const br=b.brands[brand]; if(!br)return null;
  const brd=BRANDS[brand];
  return(
    <div>
      <div className="sec-hdr">
        <div>
          <div style={{fontSize:11,color:brd.color,fontWeight:800,marginBottom:2}}>{br.label}</div>
          <div className="sec-t">{br.tagline}</div>
          <div className="sec-s">{br.sortimente.length} Sortimente</div>
        </div>
        <button className="bs" style={{padding:"8px 12px",fontSize:12}} onClick={onBack}>Zurück</button>
      </div>
      <div className="ust-list">
        {br.sortimente.map(s => {
          const cnt = products.filter(p => p.brand===brand && p.sortiment===s && p.id!=="CC3-HERO").length;
          return (
            <div key={s} className="ust-item" onClick={()=>onGo("products",{bereich,brand,sortiment:s})}>
              <div>
                <div className="ust-name">{s}</div>
                <div className="ust-meta">{brd.label}</div>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <span className="ust-cnt">{cnt}</span>
                <span className="ust-arrow"><Icon name="arrow" size={16}/></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── PRODUKTE LISTE ───────────────────────────────────────────────────────────
function ProdV({products,saved,onTog,onOpen,q,setQ,filter,setFilter,brand,bereich,sortimentFilter,farbeFilter,onBack}){
  const brd=brand?BRANDS[brand]:null;
  const filters=[{id:"all",l:"Alle"},{id:"neu",l:"✦ Neu"},...Object.entries(BRANDS).map(([id,b])=>({id,l:b.label}))];
  let title = sortimentFilter || (brand ? BRANDS[brand]?.label : null) || bereich || "Alle Produkte";
  if (farbeFilter) title += " · " + farbeFilter;
  return(
    <div>
      <div className="search-bar"><div className="sw"><span className="s-ico"><Icon name="search" size={16}/></span><input className="s-inp" placeholder="Artikel-Nr., Name, Sortiment …" value={q} onChange={e=>setQ(e.target.value)}/>{q&&<button style={{background:"none",border:"none",color:"var(--text3)",padding:"0 12px",cursor:"pointer"}} onClick={()=>setQ("")}><Icon name="close" size={14}/></button>}</div></div>
      <div className="sec-hdr">
        <div>{brd&&<div style={{color:brd.color,fontSize:11,fontWeight:800,marginBottom:2}}>{brd.label}</div>}<div className="sec-t">{title}</div><div className="sec-s">{products.length} Produkte</div></div>
        <button className="bs" style={{padding:"8px 12px",fontSize:12}} onClick={onBack}>Zurück</button>
      </div>
      {!sortimentFilter && <div className="chips">{filters.map(f=><button key={f.id} className={`chip ${filter===f.id?"on":""}`} onClick={()=>setFilter(f.id)}>{f.l}</button>)}</div>}
      {products.length===0?<div className="empty"><div style={{fontSize:40,opacity:0.3}}>🔍</div><div style={{fontSize:16,fontWeight:700,color:"var(--text2)"}}>Keine Produkte</div><div style={{fontSize:13,color:"var(--text3)"}}>Filter oder Suche anpassen</div></div>:
      <div className="pg">{products.map(p=><PC key={p.id} p={p} sv={saved.includes(p.id)} onT={onTog} onO={onOpen}/>)}</div>}
    </div>
  );
}

function PC({p,sv,onT,onO}){
  const b=BRANDS[p.brand];
  return(
    <div className="pc" onClick={()=>onO(p)}>
      <div style={{position:"relative"}}>
        <ProductImage className="pc-img" artNr={p.artNr} name={p.name} brand={p.brand}/>
        <button className={`bmbtn ${sv?"on":""}`} onClick={e=>onT(p.id,e)}><Icon name={sv?"bookmarkFill":"bookmark"} size={13}/></button>
      </div>
      <div className="pc-body">
        <div className="pc-artnr-top">{p.artNr}</div>
        {b&&<div className="pc-brand" style={{color:b.color}}>{b.label}</div>}
        <div className="pc-name">{p.name}</div>
        <div className="pc-tags">
          {p.neuheit==="ja"&&<span className="neu">NEU</span>}
          {p.farbe && <span className="pt">{p.farbe}</span>}
        </div>
      </div>
    </div>
  );
}

// ─── DETAIL ───────────────────────────────────────────────────────────────────
function DetV({product:p,products,saved,onTog,onBack,onCRM,onOpenArt}){
  const sv=saved.includes(p.id);
  const b=BRANDS[p.brand];
  const isHero = p.id === "CC3-HERO";
  const vort = isHero ? p.vorteile.split("|").filter(Boolean) : (p.vorteile||"").split(",").filter(Boolean);
  const zg=p.zielgruppe||[];
  
  // Find related variants for CC3 Hero
  const cc3Articles = products.filter(x => x.artNr && x.artNr.toString().startsWith("282"));
  const cc3Black = cc3Articles.filter(x => x.farbe === "schwarz");
  const cc3White = cc3Articles.filter(x => x.farbe === "weiss");
  
  return(
    <div>
      <div className={`dh ${isHero?"dh-cc3":""}`}>
        <ProductImage style={{width:"100%",height:"100%",objectFit:"cover"}} artNr={isHero?"cc3_hero":p.artNr} name={p.name} brand={p.brand}/>
        <div className="dh-ov">
          {p.neuheit==="ja"&&<span className="neu" style={{marginBottom:8,display:"inline-block"}}>✦ NEUHEIT</span>}
          {b&&<div style={{fontSize:11,color:b.color,fontWeight:800,marginBottom:4}}>{b.label}</div>}
          <div style={{fontSize:20,fontWeight:800,lineHeight:1.2}}>{p.name}</div>
          <div style={{fontSize:11,fontFamily:"var(--mono)",color:"var(--text3)",marginTop:4}}>Art.-Nr. {p.artNr} · {p.sortiment}</div>
        </div>
        <button className="db" onClick={onBack}><Icon name="back" size={18}/></button>
        <button className={`dbm ${sv?"on":""}`} onClick={e=>onTog(p.id,e)}><Icon name={sv?"bookmarkFill":"bookmark"} size={18}/></button>
      </div>

      {p.beschreibung && (
        <div className="ds"><div className="ds-lbl">Beschreibung</div><div className="desc">{p.beschreibung}</div></div>
      )}

      {vort.length>0&&(
        <div className="ds">
          <div className="ds-lbl">Vorteile</div>
          <ul className="vl">{vort.map((v,i)=><li key={i} className="vi"><span className="vd"><Icon name="check" size={10}/></span>{v.trim()}</li>)}</ul>
          {/* Trust Badges only on CC3-HERO */}
          {isHero && p.designedInGermany && (
            <div className="trust-badges">
              <div className="tb">
                <img src="/logos/designed_by_alfer.png" alt="Designed by alfer"/>
                <div className="tb-label">DESIGNED<br/>by alfer®</div>
              </div>
              <div className="tb">
                <img src="/logos/combitech_235_check.png" alt="combitech 23,5 kompatibel"/>
                <div className="tb-label">23,5<br/>KOMPATIBEL</div>
              </div>
              <div className="tb">
                <img src="/logos/farben_bw.png" alt="Schwarz und Weiß"/>
                <div className="tb-label">SCHWARZ<br/>& WEISS</div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* CC3 Variant Picker: Schwarz / Weiß  */}
      {isHero && (cc3Black.length > 0 || cc3White.length > 0) && (
        <div className="ds">
          <div className="ds-lbl">Farbe wählen – alle 10 Artikel anzeigen</div>
          <div className="vg">
            <button className="vc" style={{minWidth:140}} onClick={()=>onOpenArt(cc3Black[0]?.artNr)}>⚫ Schwarz ({cc3Black.length} Art.)</button>
            <button className="vc" style={{minWidth:140}} onClick={()=>onOpenArt(cc3White[0]?.artNr)}>⚪ Weiß ({cc3White.length} Art.)</button>
          </div>
        </div>
      )}

      {/* Color toggle for individual product */}
      {!isHero && (p.farbe === "schwarz" || p.farbe === "weiss") && (() => {
        // Find sibling in other color
        const baseName = p.name.replace(/\s*(schwarz|weiss|weiß)\s*$/i,"").trim();
        const others = products.filter(x => x.id !== p.id && x.brand === p.brand && x.sortiment === p.sortiment && x.name.replace(/\s*(schwarz|weiss|weiß)\s*$/i,"").trim() === baseName);
        if (others.length === 0) return null;
        return (
          <div className="ds">
            <div className="ds-lbl">Farbvariante</div>
            <div className="vg">
              <button className={`vc ${p.farbe==="schwarz"?"on":""}`} onClick={()=>p.farbe==="weiss" && onOpenArt(others[0].artNr)}>⚫ Schwarz</button>
              <button className={`vc ${p.farbe==="weiss"?"on":""}`} onClick={()=>p.farbe==="schwarz" && onOpenArt(others[0].artNr)}>⚪ Weiß</button>
            </div>
          </div>
        );
      })()}

      {zg.length>0&&(
        <div className="ds" style={{paddingBottom:80}}>
          <div className="ds-lbl">Zielgruppe</div>
          <div className="vg">{zg.map(z=>{const br=BRANCHEN.find(b=>b.id===z.trim());return<span key={z} className="vc" style={{cursor:"default"}}>{br?.icon} {br?.label||z}</span>;})}</div>
        </div>
      )}

      <div className="cta"><button className="bs" onClick={onBack}><Icon name="back" size={16}/></button><button className="bp" onClick={onCRM}>Zum Gespräch hinzufügen</button></div>
    </div>
  );
}

// ─── BRANCHEN ─────────────────────────────────────────────────────────────────
function BraV({products,onGo,onBack}){
  return(
    <div>
      <div className="sec-hdr"><div><div className="sec-t">Branchenlösungen</div><div className="sec-s">Zielgruppen & Sortimente</div></div><button className="bs" style={{padding:"8px 12px",fontSize:12}} onClick={onBack}>Zurück</button></div>
      <div className="bg-grid">{BRANCHEN.map(b=>{const cnt=products.filter(p=>p.zielgruppe&&p.zielgruppe.includes&&p.zielgruppe.includes(b.id)).length;return(<div key={b.id} className="bt" onClick={()=>onGo("products",{filter:b.id})}><div style={{fontSize:26}}>{b.icon}</div><div><div style={{fontSize:14,fontWeight:700}}>{b.label}</div><div style={{fontSize:11,color:"var(--text3)"}}>{cnt} Produkte</div></div></div>);})}</div>
    </div>
  );
}

// ─── POS / VERKAUFSSTÄNDER ────────────────────────────────────────────────────
function POSListV({onGo,onBack}){
  return(
    <div>
      <div className="sec-hdr"><div><div className="sec-t">Verkaufsständer</div><div className="sec-s">POS & Shopfitting</div></div><button className="bs" style={{padding:"8px 12px",fontSize:12}} onClick={onBack}>Zurück</button></div>
      <div className="app-grid">
        {VERKAUFSSTAENDER.map(vs=>{
          const b = BRANDS[vs.brand];
          return (
            <div key={vs.id} className="app-card" onClick={()=>onGo("pos-detail",{vs})}>
              <ProductImage style={{width:"100%",aspectRatio:"1/1",objectFit:"cover",display:"block",background:"var(--bg4)"}} artNr={vs.id} name={vs.name} brand={vs.brand}/>
              <div className="app-card-body">
                {b && <div style={{fontSize:11,fontWeight:800,color:b.color,marginBottom:4}}>{b.label}</div>}
                <div style={{fontSize:14,fontWeight:700}}>{vs.name}</div>
                <div style={{fontSize:11,color:"var(--text2)",marginTop:6,lineHeight:1.5}}>{vs.beschreibung}</div>
                <div style={{fontSize:10,color:"var(--text3)",fontFamily:"var(--mono)",marginTop:8}}>{vs.artikel.length} Artikel enthalten</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function POSDetailV({vs,products,onOpen,onBack}){
  const items = vs.artikel.map(art => products.find(p => p.artNr === art)).filter(Boolean);
  const b = BRANDS[vs.brand];
  return(
    <div>
      <ProductImage style={{width:"100%",aspectRatio:"1/1",maxHeight:400,objectFit:"cover",display:"block"}} artNr={vs.id} name={vs.name} brand={vs.brand}/>
      <div className="ds">
        {b && <div style={{fontSize:11,fontWeight:800,color:b.color,marginBottom:6}}>{b.label}</div>}
        <div style={{fontSize:18,fontWeight:800}}>{vs.name}</div>
        <div className="desc" style={{marginTop:8}}>{vs.beschreibung}</div>
        <button className="bs" style={{marginTop:14,padding:"10px 14px",fontSize:13}} onClick={onBack}>Zurück</button>
      </div>
      <div className="ds">
        <div className="ds-lbl">Enthaltene Artikel ({items.length})</div>
        <div className="pg" style={{padding:0}}>
          {items.map(p=><PC key={p.id} p={p} sv={false} onT={()=>{}} onO={onOpen}/>)}
        </div>
      </div>
      <div style={{padding:"0 16px 100px"}}/>
    </div>
  );
}

// ─── ANWENDUNGEN ──────────────────────────────────────────────────────────────
function AnwListV({onGo,onBack}){
  return(
    <div>
      <div className="sec-hdr"><div><div className="sec-t">Anwendungen</div><div className="sec-s">Baubeispiele & Inspiration</div></div><button className="bs" style={{padding:"8px 12px",fontSize:12}} onClick={onBack}>Zurück</button></div>
      <div className="app-grid">
        {ANWENDUNGEN.map(a=>(
          <div key={a.id} className="app-card" onClick={()=>onGo("anwendungen-detail",{anw:a})}>
            <ProductImage style={{width:"100%",aspectRatio:"1/1",objectFit:"cover",display:"block",background:"var(--bg4)"}} artNr={a.id} name={a.name} brand="combitech"/>
            <div className="app-card-body">
              <div style={{fontSize:11,fontWeight:800,color:"var(--alfer)",marginBottom:4}}>{a.bereich}</div>
              <div style={{fontSize:14,fontWeight:700}}>{a.name}</div>
              <div style={{fontSize:11,color:"var(--text2)",marginTop:6,lineHeight:1.5}}>{a.beschreibung}</div>
              <div style={{fontSize:10,color:"var(--text3)",fontFamily:"var(--mono)",marginTop:8}}>{a.artikel.length} verbaute Artikel</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnwDetailV({anw,products,onOpen,onBack}){
  const items = anw.artikel.map(art => products.find(p => p.artNr === art)).filter(Boolean);
  return(
    <div>
      <ProductImage style={{width:"100%",aspectRatio:"1/1",maxHeight:400,objectFit:"cover",display:"block"}} artNr={anw.id} name={anw.name} brand="combitech"/>
      <div className="ds">
        <div style={{fontSize:11,fontWeight:800,color:"var(--alfer)",marginBottom:6}}>{anw.bereich}</div>
        <div style={{fontSize:18,fontWeight:800}}>{anw.name}</div>
        <div className="desc" style={{marginTop:8}}>{anw.beschreibung}</div>
        <button className="bs" style={{marginTop:14,padding:"10px 14px",fontSize:13}} onClick={onBack}>Zurück</button>
      </div>
      <div className="ds">
        <div className="ds-lbl">Verbaute Artikel ({items.length})</div>
        <div className="pg" style={{padding:0}}>
          {items.map(p=><PC key={p.id} p={p} sv={false} onT={()=>{}} onO={onOpen}/>)}
        </div>
      </div>
      <div style={{padding:"0 16px 100px"}}/>
    </div>
  );
}

// ─── CRM ──────────────────────────────────────────────────────────────────────
function CRMV({data,setData,savedP,ok,onSave}){
  const u=(k,v)=>setData(d=>({...d,[k]:v}));
  return(
    <div>
      <div className="sec-hdr"><div><div className="sec-t">Gespräch erfassen</div><div className="sec-s">Lead & Follow-up</div></div></div>
      {ok&&<div className="crm-ok"><Icon name="check" size={16}/>Gespräch gespeichert</div>}
      {savedP.length>0&&<div style={{padding:"0 16px 14px"}}><div className="fl">Besprochene Produkte</div><div style={{display:"flex",gap:8,flexWrap:"wrap"}}>{savedP.map(p=>{const b=BRANDS[p.brand];return<span key={p.id} className="pill" style={{color:b?.color||"var(--alfer)",background:b?.bg||"rgba(0,195,255,0.1)",borderColor:b?.border||"rgba(0,195,255,0.3)"}}>{p.artNr}</span>;})}</div></div>}
      <div className="crm-f">
        <div className="fr">
          <div><label className="fl">Firma</label><input className="fi" placeholder="Unternehmensname" value={data.firma} onChange={e=>u("firma",e.target.value)}/></div>
          <div><label className="fl">Ansprechpartner</label><input className="fi" placeholder="Name" value={data.name} onChange={e=>u("name",e.target.value)}/></div>
        </div>
        <div className="fr">
          <div><label className="fl">Kundentyp</label><select className="fsel" value={data.typ} onChange={e=>u("typ",e.target.value)}><option value="">Wählen …</option>{BRANCHEN.map(b=><option key={b.id}>{b.label}</option>)}</select></div>
          <div><label className="fl">Land</label><input className="fi" placeholder="z.B. Deutschland" value={data.land} onChange={e=>u("land",e.target.value)}/></div>
        </div>
        <div><label className="fl">Interesse an Marke / Sortiment</label><input className="fi" placeholder="z.B. combitech® connect 3.0" value={data.interesse} onChange={e=>u("interesse",e.target.value)}/></div>
        <div><label className="fl">Gesprächsnotizen</label><textarea className="fta" placeholder="Besonderheiten, Anforderungen, Mengen …" value={data.notiz} onChange={e=>u("notiz",e.target.value)}/></div>
        <div><label className="fl">Priorität</label><div className="pg2">{[["h","🔴 Hoch"],["m","🟡 Mittel"],["l","🟢 Niedrig"]].map(([id,lbl])=><button key={id} className={`pb ${id} ${data.prio===id?"on":""}`} onClick={()=>u("prio",id)}>{lbl}</button>)}</div></div>
        <div><label className="fl">Nächster Schritt</label><select className="fsel" value={data.step} onChange={e=>u("step",e.target.value)}><option value="">Wählen …</option><option>Angebot senden</option><option>Muster schicken</option><option>Telefonat vereinbaren</option><option>Besuch beim Kunden</option><option>Katalog zusenden</option><option>Keine Aktion</option></select></div>
        <button className="bp" style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:8}} onClick={onSave}><Icon name="send" size={16}/>Gespräch speichern</button>
      </div>
    </div>
  );
}

// ─── MERKLISTE ────────────────────────────────────────────────────────────────
function MlV({savedP,saved,onTog,onOpen,onExport}){
  return(
    <div>
      <div className="sec-hdr"><div><div className="sec-t">Merkliste</div><div className="sec-s">{savedP.length} Produkte</div></div>{savedP.length>0&&<button className="bs" style={{padding:"8px 12px",fontSize:12,display:"flex",gap:6,alignItems:"center"}} onClick={onExport}><Icon name="export" size={14}/>Export</button>}</div>
      {savedP.length===0?<div className="empty"><div style={{fontSize:40,opacity:0.3}}>🔖</div><div style={{fontSize:16,fontWeight:700,color:"var(--text2)"}}>Noch nichts gespeichert</div><div style={{fontSize:13,color:"var(--text3)"}}>Lesezeichen-Symbol beim Produkt tippen</div></div>:
      <div className="ml">{savedP.map(p=>{const b=BRANDS[p.brand];return(<div key={p.id} className="mi" onClick={()=>onOpen(p)}><div className="mimg"><ProductImage artNr={p.artNr} name={p.name} brand={p.brand} style={{width:"100%",height:"100%",objectFit:"cover"}}/></div><div className="min">{b&&<div style={{fontSize:10,fontWeight:800,color:b.color,marginBottom:2}}>{b.label}</div>}<div className="mn" style={{fontFamily:"var(--mono)"}}>{p.artNr}</div><div className="mm" style={{fontFamily:"var(--font)",fontSize:11}}>{p.name}</div></div><button className="mrm" onClick={e=>{e.stopPropagation();onTog(p.id,e);}}><Icon name="close" size={16}/></button></div>);})}</div>}
    </div>
  );
}

// ─── CSV IMPORT ───────────────────────────────────────────────────────────────
function ImpV({fileRef,handleCSV,products,onBack}){
  const tpl=`art;name;brand;sortiment;farbe;beschreibung;vorteile;zielgruppe;neuheit\n28202;Zapfen Clip R-23,5 schwarz;combitech;Connect-Verbinder;schwarz;;Hardwear separat,Kompatibel mit 23,5 Rundrohr;baumarkt,fachhandel;ja`;
  const dl=()=>{const b=new Blob([tpl],{type:"text/csv;charset=utf-8;"});const u=URL.createObjectURL(b);const a=document.createElement("a");a.href=u;a.download="alfer_vorlage.csv";a.click();};
  return(
    <div>
      <div className="sec-hdr"><div><div className="sec-t">CSV Import</div><div className="sec-s">Produkte per Excel laden</div></div><button className="bs" style={{padding:"8px 12px",fontSize:12}} onClick={onBack}>Zurück</button></div>
      <div style={{padding:"0 16px 14px"}}>
        <div style={{background:"var(--bg3)",border:"1px solid var(--border)",borderRadius:"var(--r)",padding:"14px 16px"}}>
          <div style={{fontSize:12,fontWeight:800,color:"var(--alfer)",marginBottom:8}}>CSV-Format (Semikolon-getrennt)</div>
          <div style={{fontSize:11,fontFamily:"var(--mono)",color:"var(--text3)",lineHeight:1.9}}>art · name · brand · sortiment · farbe<br/>beschreibung · vorteile · zielgruppe · neuheit</div>
          <div style={{fontSize:11,color:"var(--text3)",marginTop:10}}>
            <b style={{color:"var(--text2)"}}>brand:</b> combitech / orditech / clipstech / element / coaxis<br/>
            <b style={{color:"var(--text2)"}}>Bilder:</b> /products/[art].jpg automatisch<br/>
            <b style={{color:"var(--text2)"}}>neuheit:</b> ja / nein
          </div>
        </div>
      </div>
      <input ref={fileRef} type="file" accept=".csv" style={{display:"none"}} onChange={handleCSV}/>
      <div className="imp-z" onClick={()=>fileRef.current?.click()}>
        <div style={{color:"var(--alfer)"}}><Icon name="upload" size={34}/></div>
        <div style={{fontSize:14,color:"var(--text2)",marginTop:10}}>CSV-Datei auswählen</div>
        <div style={{fontSize:12,color:"var(--text3)",marginTop:6}}>UTF-8 · Semikolon-getrennt</div>
      </div>
      <div style={{padding:"14px 16px"}}><button className="bs" style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:8}} onClick={dl}><Icon name="export" size={16}/>Vorlage herunterladen (.csv)</button></div>
      <div style={{padding:"0 16px 100px"}}>
        <div style={{fontSize:12,fontWeight:700,color:"var(--text3)",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:8}}>Aktuell geladen · {products.length} Produkte</div>
        <div style={{display:"flex",flexWrap:"wrap",gap:8}}>{Object.entries(BRANDS).map(([id,b])=>{const cnt=products.filter(p=>p.brand===id).length;return cnt>0?<span key={id} className="pill" style={{color:b.color,background:b.bg,borderColor:b.border}}>{b.label} · {cnt}</span>:null;})}</div>
      </div>
    </div>
  );
}
