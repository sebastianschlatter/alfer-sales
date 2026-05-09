import { useState, useRef } from "react";

const AlferLogo = ({ height = 24 }) => (
  <svg height={height} viewBox="0 0 116.03 35.43" xmlns="http://www.w3.org/2000/svg" style={{ display:"block" }}>
    <path fill="#00C3FF" d="M80.06,22.73c0-7.54-5.35-12.8-12.9-12.8-8.03,0-13.63,5.35-13.63,12.9s5.6,12.61,13.63,12.61c5.84,0,9.59-2.92,11.05-4.87l-4.04-3.65c-1.46,1.7-3.6,2.58-6.03,2.58-3.65,0-6.33-1.51-6.91-4.82h18.83v-1.95ZM60.98,20.3c.49-2.87,3.26-4.43,6.18-4.43,3.07,0,5.6,1.46,5.79,4.43h-11.97ZM91.74,9.93c-4.87,0-8.76,3.31-8.76,9.15v13.82c0,1.22.73,1.95,1.95,1.95h5.35v-15.28c0-2.43,1.22-3.41,3.16-3.41,1.22,0,2.19.54,2.92.97l1.95-5.6c-1.46-.73-3.65-1.61-6.57-1.61ZM28.47,1.36v31.54c0,1.22.73,1.95,1.95,1.95h5.35V1.36h-7.3ZM50.13,6.52c1.22,0,2.19.54,2.92.97l1.95-5.11c-1.46-.73-3.65-1.61-6.57-1.61-4.87,0-8.76,3.31-8.76,9.15v22.97c0,1.22.73,1.95,1.95,1.95h5.35v-18.74h6.08v-5.6h-6.08v-.58c0-2.43,1.22-3.41,3.16-3.41ZM11.78,9.93c-3.65,0-7.3,1.17-10.22,3.11l2.92,4.87c1.7-1.22,4.04-2.48,6.96-2.48,3.65,0,5.89,1.7,5.89,4.87h-6.13c-7.79,0-11.19,2.92-11.19,7.25,0,3.89,3.5,7.88,9.34,7.88,3.65,0,6.77-1.56,7.98-3.75v1.22c0,1.22.73,1.95,1.95,1.95h5.3v-14.02c0-7.3-5.26-10.9-12.8-10.9ZM17.33,25.46c0,2.43-2.48,4.62-5.4,4.62-2.43,0-4.14-1.22-4.14-2.92,0-1.95,1.95-2.68,4.87-2.68h4.67v.97Z"/>
    <path fill="#00C3FF" d="M110.44,8.13c.76-.45,1.28-1.29,1.28-2.21,0-1.52-1.19-2.56-2.73-2.56h-3.38v7.14h1.85v-2.03h1.07l1.53,2.03h2.21l-1.83-2.38ZM108.74,6.9h-1.27v-1.94h1.27c.64,0,1.07.38,1.07.96,0,.54-.41.97-1.07.97ZM113.52,1.73c-1.31-1.09-3.01-1.73-4.84-1.73s-3.56.64-4.85,1.73c-1.47,1.25-2.4,3.1-2.41,5.25,0,4.15,3.33,7.01,7.25,7.01,4.13,0,7.35-2.9,7.35-7.01,0-2.13-.98-3.99-2.51-5.25ZM108.68,12.21c-3.06,0-5.44-2.08-5.44-5.22s2.41-5.25,5.44-5.25,5.56,2.18,5.56,5.25-2.49,5.22-5.56,5.22Z"/>
  </svg>
);

const BRANDS = {
  combitech: { label:"combitech®", tagline:"Projekt mit Profil", color:"#FF6E00", bg:"rgba(255,110,0,0.12)",   border:"rgba(255,110,0,0.3)"   },
  orditech: { label:"orditech®", tagline:"Stark im Detail – sicher im Ergebnis", color:"#FFC300", bg:"rgba(255,195,0,0.12)",   border:"rgba(255,195,0,0.3)"   },
  clipstech: { label:"clipstech®", tagline:"Das Finish für deinen Boden", color:"#E62D41", bg:"rgba(226,45,65,0.12)",   border:"rgba(226,45,65,0.3)"   },
  element:   { label:"element system®", tagline:"Macht Platz für dein Leben", color:"#B473FF", bg:"rgba(180,115,255,0.12)", border:"rgba(180,115,255,0.3)" },
  coaxis:  { label:"coaxis® system", tagline:"Macht Platz für dein Leben", color:"#17E5E5", bg:"rgba(23,229,229,0.12)",  border:"rgba(23,229,229,0.3)"  },
};

const STRUKTUR = {
  "Bauen & Renovieren": {
    color:"#FF6E00",
    image:"/sortimente/bauen.jpg",
    untertitel:"B2B & B2C",
    brands:{
      combitech:{ label:"combitech®", tagline:"Projekt mit Profil", color:"#FF6E00", sortimente:["combitech® Profile","Connect-Verbinder","Zubehör gesamt","Logika (Logika Zub.)"], image:"/sortimente/combitech.jpg" },
      orditech:{ label:"orditech®", tagline:"Stark im Detail – sicher im Ergebnis", color:"#FFC300", sortimente:["Bleche","Heimwerkerprofile","Eisenwaren (Stahl)","Fliesen","Dekor","Aluwork"], image:"/sortimente/orditech.jpg" },
      clipstech:{ label:"clipstech®", tagline:"Das Finish für deinen Boden", color:"#E62D41", sortimente:["clipstech® Basis","clipstech® Plus","clipstech® Vario","clipstech® Mini","Optifloor","Standard Parket Profile"], image:"/sortimente/clipstech.jpg" },
    }
  },
  "Ordnungssysteme": {
    color:"#B473FF",
    image:"/sortimente/ordnen.jpg",
    untertitel:"B2C & B2B",
    brands:{
      element:{ label:"element system®", tagline:"Macht Platz für dein Leben", color:"#B473FF", sortimente:["Schienen & Träger","Office-Set","Pegboard","Konsolen","Möbelfüße"], image:"/sortimente/element.jpg" },
      coaxis:{ label:"coaxis® system", tagline:"Macht Platz für dein Leben", color:"#17E5E5", sortimente:["coaxis® Profile","Zubehör","Haken-Sortiment X-Star"], image:"/sortimente/coaxis.jpg" },
    }
  }
};

const BRANCHEN = [
  { id:"baumarkt",     label:"Baumarkt",      icon:"🔨" },
  { id:"fachhandel",   label:"Fachhandel",     icon:"🏪" },
  { id:"industrie",    label:"Industrie",      icon:"🏭" },
  { id:"moebelmarkt",  label:"Möbelmarkt",     icon:"🛋️" },
  { id:"ladenbau",     label:"Ladenbau",       icon:"🏗️" },
  { id:"handelsketten",label:"Handelsketten",  icon:"🛒" },
];

const DEFAULT_PRODUCTS = [
  // === NEUHEIT 2026 – combitech® connect 3.0 (Eisenwarenmesse Köln) ===
  { id:"CC3-HERO", name:"combitech® connect 3.0 – Komplettsystem", artNr:"CC3.000.SET", brand:"combitech", bereich:"Bauen & Renovieren", sortiment:"Connect-Verbinder", beschreibung:"Das modulare System neu definiert. Innovative Clip-Klemm-Technologie für die nächste Generation modularer Verbindungslösungen – Innen wie Außen. CLIP. CLAMP. DONE.", vorteile:"Innovative Clip-Klemm-Technologie,Stufenlose Verstellung in Längs- und Rotationsachse,Montage ohne Bohren – minimaler Sägeaufwand,Hohe Stabilität & maximale Wiederverwendbarkeit,Erweiterbar & kompatibel mit connect 2.0,Nahtlose Integration in 23,5 mm Rundrohr-System,Designed in Germany", varianten:"Zapfen-Clip Hybrid,90° Clip,360°-Rotations-Clip,Komplettset Weiß,Komplettset Schwarz", zielgruppe:"baumarkt,fachhandel,industrie,moebelmarkt,ladenbau,handelsketten", neuheit:"ja", bildUrl:"/products/cc3_hero.jpg", anwendungUrl:"/products/cc3_anwendung.jpg", tags:"connect,verbinder,3.0,clip,klemm,modular,messe,koeln,2026,neuheit,system" },
  { id:"CC3-001", name:"combitech® connect 3.0 Zapfen-Clip Hybrid", artNr:"CC3.001.WS", brand:"combitech", bereich:"Bauen & Renovieren", sortiment:"Connect-Verbinder", beschreibung:"Hybrid-Verbinder mit innovativer Zapfen-Clip-Technik. Stufenlos verstellbar, werkzeugarme Montage ohne Bohren.", vorteile:"Zapfen-Clip-System,Werkzeugarme Montage,Hybridtechnik,Kompatibel mit connect 2.0", varianten:"Weiß,Schwarz,Set 4-tlg.,Set 10-tlg.", zielgruppe:"baumarkt,fachhandel,industrie", neuheit:"ja", bildUrl:"/products/cc3_clips.jpg", anwendungUrl:"/products/cc3_parts.jpg", tags:"connect,3.0,zapfen,clip,hybrid,verbinder" },
  { id:"CC3-002", name:"combitech® connect 3.0 90° Clip", artNr:"CC3.090.WS", brand:"combitech", bereich:"Bauen & Renovieren", sortiment:"Connect-Verbinder", beschreibung:"90° Eckverbinder mit Clip-Klemm-Technologie für stabile rechtwinklige Verbindungen. Wiederverwendbar.", vorteile:"90° fester Winkel,Clip-Klemm-Technik,Wiederverwendbar,Hohe Stabilität", varianten:"Weiß,Schwarz,Set 4-tlg.,Set 10-tlg.", zielgruppe:"baumarkt,fachhandel,industrie,moebelmarkt", neuheit:"ja", bildUrl:"/products/cc3_clips.jpg", anwendungUrl:"/products/cc3_anwendung.jpg", tags:"connect,3.0,90grad,winkel,clip,eck" },
  { id:"CC3-003", name:"combitech® connect 3.0 360°-Rotations-Clip", artNr:"CC3.360.WS", brand:"combitech", bereich:"Bauen & Renovieren", sortiment:"Connect-Verbinder", beschreibung:"360° rotierbarer Verbinder – stufenlos verstellbar in Längs- und Rotationsachse. Maximale Designfreiheit.", vorteile:"360° Rotation,Stufenlose Verstellung,Längs- und Rotationsachse,Ideal für Designlösungen", varianten:"Weiß,Schwarz,Set 4-tlg.,Set 10-tlg.", zielgruppe:"baumarkt,fachhandel,industrie,moebelmarkt,ladenbau", neuheit:"ja", bildUrl:"/products/cc3_display.jpg", anwendungUrl:"/products/cc3_anwendung.jpg", tags:"connect,3.0,360,rotation,clip,verstellbar" },
  // === Bestandssortiment ===
  { id:"C001", name:"combitech® Quadrat-Rohr Alu 15×15mm", artNr:"010.015.005", brand:"combitech", bereich:"Bauen & Renovieren", sortiment:"System-Profile | Aluminium", beschreibung:"Vielseitiges Aluminiumrohr für Konstruktionen, Modellbau und technische Anwendungen.", vorteile:"Eloxiert,Zuschneidbar,Korrosionsfest,Verbindbar mit Connect-System", varianten:"L=1000mm,L=2000mm,L=500mm", zielgruppe:"industrie,fachhandel,baumarkt", neuheit:"nein", bildUrl:"https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80", anwendungUrl:"https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=800&q=80", tags:"rohr,alu,profil,quadrat,konstruktion" },
  { id:"C002", name:"combitech® connect-Verbinder 23,5mm", artNr:"350.235.001", brand:"combitech", bereich:"Bauen & Renovieren", sortiment:"Connect-Verbinder", beschreibung:"Verbindet combitech Profile im 90°-Winkel. Aus hochwertigem Polyamid (PA).", vorteile:"Kraftschlüssig,Werkzeuglos montierbar,Für alle Quadratprofile,Wiederverwendbar", varianten:"1er Pack,10er Pack,50er Pack", zielgruppe:"industrie,fachhandel", neuheit:"nein", bildUrl:"https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=800&q=80", anwendungUrl:"https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80", tags:"verbinder,connect,fitting" },
  { id:"CL001", name:"clipstech® Übergangsschiene Silber 90cm", artNr:"CL-910.090.001", brand:"clipstech", bereich:"Bauen & Renovieren", sortiment:"clipstech® Basis", beschreibung:"Nahtloser, sicherer Übergang zwischen zwei Bodenbelägen. Anti-Stolper-Profil.", vorteile:"Höhenausgleich 0–12mm,Anti-Stolper,Silber eloxiert,Selbstklebend möglich", varianten:"90cm Silber,90cm Gold,90cm Schwarz,120cm Silber", zielgruppe:"baumarkt,fachhandel", neuheit:"nein", bildUrl:"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80", anwendungUrl:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", tags:"boden,übergang,laminat,parkett" },
  { id:"CL002", name:"clipstech® Optifloor Abschlussschiene", artNr:"CL-920.090.002", brand:"clipstech", bereich:"Bauen & Renovieren", sortiment:"Optifloor", beschreibung:"Eleganter Wandabschluss für Laminat- und Parkettböden. Unsichtbare Clip-Befestigung.", vorteile:"Unsichtbare Befestigung,Clip-Montage,10 Dekore,Made in Germany", varianten:"Silber 90cm,Buche 90cm,Wenge 90cm,Eiche 90cm", zielgruppe:"baumarkt,fachhandel,moebelmarkt", neuheit:"ja", bildUrl:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", anwendungUrl:"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80", tags:"boden,abschluss,wand,laminat,dekor" },
  { id:"OR001", name:"orditech® Winkel-Profil Alu 20×20mm", artNr:"OR-010.020.200", brand:"orditech", bereich:"Bauen & Renovieren", sortiment:"Heimwerker-Profile", beschreibung:"Universelles Aluminium-Winkelprofil für Heimwerker und Handwerker. Zuschneidbar.", vorteile:"Eloxiert,Zuschneidbar,Universell,Leichtgewicht", varianten:"L=1000mm,L=2000mm,L=2500mm", zielgruppe:"baumarkt,fachhandel,handelsketten", neuheit:"nein", bildUrl:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", anwendungUrl:"https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=800&q=80", tags:"winkel,profil,alu,heimwerker" },
  { id:"OR002", name:"orditech® Glattblech Aluminium 500×250mm", artNr:"OR-GLB.050.025", brand:"orditech", bereich:"Bauen & Renovieren", sortiment:"Bleche | Aluminium", beschreibung:"Glattes Aluminiumblech für Verkleidungen, Reparaturen und kreative Anwendungen.", vorteile:"Rein-Aluminium,Korrosionsfest,Zuschneidbar,Vielseitig", varianten:"500×250mm,1000×500mm,1000×200mm", zielgruppe:"baumarkt,fachhandel,industrie", neuheit:"nein", bildUrl:"https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80", anwendungUrl:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", tags:"blech,alu,platte,verkleidung" },
  { id:"E001", name:"element system® Reling-Schiene 60cm", artNr:"ES-REL.060.SS", brand:"element", bereich:"Ordnungssysteme", sortiment:"Schienen & Träger", beschreibung:"Wandmontierte Reling-Schiene für modulare Küchenorganisation. Edelstahl-Optik.", vorteile:"Edelstahl-Optik,Hohe Tragfähigkeit,Modular erweiterbar,Inkl. Montageset", varianten:"60cm,90cm,120cm,150cm", zielgruppe:"moebelmarkt,fachhandel,baumarkt", neuheit:"ja", bildUrl:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", anwendungUrl:"https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80", tags:"reling,küche,schiene,organisation" },
  { id:"E002", name:"element system® Pegboard 50×50cm Weiß", artNr:"ES-PEG.050.050", brand:"element", bereich:"Ordnungssysteme", sortiment:"Pegboard", beschreibung:"Lochwand-System für Garage, Werkstatt und Büro. Flexibel mit Haken bestückbar.", vorteile:"Flexibel,Stabil,Lackiert weiß,Mit 10 Haken inkl.", varianten:"50×50cm Weiß,50×50cm Schwarz,100×50cm Weiß", zielgruppe:"baumarkt,industrie,fachhandel", neuheit:"nein", bildUrl:"https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?w=800&q=80", anwendungUrl:"https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&q=80", tags:"pegboard,lochplatte,garage,werkzeug" },
  { id:"E003", name:"element system® Eckregal-Set 2-bödig", artNr:"ES-ECK.002.SI", brand:"element", bereich:"Ordnungssysteme", sortiment:"Konsolen", beschreibung:"Platzsparendes Eckregal aus Aluminium. Ideal für Bad, Büro und Wohnraum.", vorteile:"Platzsparend,Alu eloxiert,15 kg Traglast,Einfache Montage", varianten:"2-bödig Silber,3-bödig Silber,2-bödig Weiß", zielgruppe:"moebelmarkt,baumarkt,handelsketten", neuheit:"nein", bildUrl:"https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&q=80", anwendungUrl:"https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80", tags:"regal,ecke,bad,büro" },
  { id:"CO001", name:"coaxis® Haken-Profil 600mm", artNr:"COA-600.001", brand:"coaxis", bereich:"Ordnungssysteme", sortiment:"coaxis® Profile", beschreibung:"Das modulare coaxis® Schienensystem für universelle Wandorganisation – Garage bis Küche.", vorteile:"Modular,Stufenlos verschiebbar,Bis 20 kg,Aluminium eloxiert", varianten:"L=600mm,L=900mm,L=1200mm", zielgruppe:"baumarkt,fachhandel,industrie", neuheit:"ja", bildUrl:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80", anwendungUrl:"https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80", tags:"coaxis,schiene,organisation,garage" },
  { id:"CO002", name:"coaxis® X-Star Haken-Set 10-teilig", artNr:"COA-XST.010", brand:"coaxis", bereich:"Ordnungssysteme", sortiment:"Haken-Sortiment X-Star", beschreibung:"Universelles Haken-Set für das coaxis® System. Für alle Profilgrößen passend.", vorteile:"10-teilig,Universell,Stahl verzinkt,Schnelle Montage", varianten:"10er Set,20er Set,Gemischtes Set", zielgruppe:"baumarkt,fachhandel", neuheit:"nein", bildUrl:"https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80", anwendungUrl:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80", tags:"haken,xstar,coaxis,zubehör" },
];

function parseCSV(text) {
  const lines = text.trim().split("\n");
  const headers = lines[0].split(";").map(h => h.trim().replace(/^"|"$/g,""));
  return lines.slice(1).map(line => {
    const vals = line.split(";").map(v => v.trim().replace(/^"|"$/g,""));
    const obj = {};
    headers.forEach((h,i) => obj[h] = vals[i] || "");
    return obj;
  }).filter(p => p.id);
}

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
  };
  return d[name]||null;
};

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
#root{height:100vh;display:flex;flex-direction:column;overflow:hidden;max-width:540px;margin:0 auto;border-left:1px solid var(--border);border-right:1px solid var(--border);box-shadow:0 0 60px rgba(0,0,0,0.6)}
@media(min-width:1100px){#root{max-width:480px}}
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
.nav-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;padding:10px 16px 100px}
@media(min-width:700px){.nav-grid{grid-template-columns:repeat(4,1fr)}}
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
.chip{padding:6px 13px;border-radius:99px;font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap;border:1px solid var(--border);background:var(--bg3);color:var(--text2);transition:all var(--t);flex-shrink:0}
.chip.on{background:var(--alfer);color:var(--bg);border-color:var(--alfer);font-weight:800}
.chip:active{transform:scale(0.93)}
.pg{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;padding:0 16px 100px}
@media(min-width:700px){.pg{grid-template-columns:repeat(3,1fr)}}
@media(min-width:1100px){.pg{grid-template-columns:repeat(4,1fr)}}
.pc{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r2);overflow:hidden;cursor:pointer;transition:all var(--t);position:relative}
.pc:active{transform:scale(0.96)}
.pc:hover{border-color:var(--border2)}
.pc-img{width:100%;aspect-ratio:4/3;object-fit:cover;background:var(--bg4)}
.pc-body{padding:11px 13px 14px}
.pc-brand{font-size:10px;font-weight:800;margin-bottom:3px}
.pc-name{font-size:13px;font-weight:700;line-height:1.35}
.pc-artnr{font-size:10px;font-family:var(--mono);color:var(--text3);margin-top:3px}
.pc-tags{display:flex;gap:4px;flex-wrap:wrap;margin-top:8px}
.pt{font-size:10px;font-weight:600;padding:3px 8px;background:var(--bg4);border-radius:99px;color:var(--text2)}
.neu{background:rgba(0,195,255,0.1);color:var(--alfer);border:1px solid rgba(0,195,255,0.25);padding:2px 9px;border-radius:99px;font-size:10px;font-weight:800}
.bmbtn{position:absolute;top:9px;right:9px;background:rgba(0,0,0,0.65);backdrop-filter:blur(8px);border:none;border-radius:8px;width:30px;height:30px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--text2);transition:color var(--t)}
.bmbtn.on{color:var(--alfer)}
.bmbtn:active{transform:scale(0.88)}
.sg{display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:0 16px 100px}
@media(min-width:700px){.sg{grid-template-columns:repeat(3,1fr)}}
.sc{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r2);overflow:hidden;cursor:pointer;transition:all var(--t)}
.sc:active{transform:scale(0.97)}
.sc img{width:100%;aspect-ratio:1/1;object-fit:cover;display:block}
.sc-body{padding:12px 14px 14px}
.sc-br{font-size:11px;font-weight:800;margin-bottom:4px;letter-spacing:0.02em}
.sc-tag{font-size:11px;color:var(--text2);margin-top:2px;font-weight:500;line-height:1.35}
.sc-nm{font-size:13px;font-weight:600;line-height:1.3;color:var(--text);margin-top:8px}
.sc-ct{font-size:10px;color:var(--text3);margin-top:6px;font-family:var(--mono)}
.dh{position:relative;aspect-ratio:16/9;overflow:hidden;flex-shrink:0}
.dh img{width:100%;height:100%;object-fit:cover}
.dh-ov{position:absolute;bottom:0;left:0;right:0;padding:18px;background:linear-gradient(to top,rgba(0,0,0,0.92) 0%,transparent 100%)}
.db,.dbm{position:absolute;background:rgba(0,0,0,0.65);backdrop-filter:blur(8px);border:none;border-radius:10px;width:36px;height:36px;display:flex;align-items:center;justify-content:center;cursor:pointer;top:13px;transition:color var(--t)}
.db{left:13px;color:var(--text)}
.dbm{right:13px;color:var(--text2)}
.dbm.on{color:var(--alfer)}
.ds{padding:14px 16px;border-bottom:1px solid var(--border)}
.ds:last-child{border-bottom:none}
.ds-lbl{font-size:10px;font-weight:700;color:var(--text3);letter-spacing:0.1em;text-transform:uppercase;margin-bottom:10px}
.desc{font-size:14px;color:var(--text2);line-height:1.65}
.vl{list-style:none;display:flex;flex-direction:column;gap:7px}
.vi{display:flex;align-items:center;gap:10px;font-size:14px}
.vd{width:20px;height:20px;border-radius:50%;background:rgba(0,195,255,0.1);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--alfer)}
.vg{display:flex;flex-wrap:wrap;gap:8px}
.vc{padding:7px 13px;border-radius:10px;background:var(--bg4);border:1px solid var(--border);font-size:12px;color:var(--text2);cursor:pointer;transition:all var(--t);font-family:var(--font)}
.vc.on{background:rgba(0,195,255,0.1);border-color:var(--alfer);color:var(--alfer)}
.aimg{width:100%;border-radius:12px;aspect-ratio:16/9;object-fit:cover}
.cta{position:sticky;bottom:0;padding:12px 16px;background:rgba(5,11,18,0.97);backdrop-filter:blur(20px);border-top:1px solid var(--border);display:flex;gap:10px;flex-shrink:0}
.bp{flex:1;padding:14px;background:var(--alfer);color:var(--bg);border:none;border-radius:var(--r);cursor:pointer;font-family:var(--font);font-size:14px;font-weight:800;transition:opacity var(--t)}
.bp:active{opacity:0.85}
.bs{padding:14px 16px;background:var(--bg3);color:var(--text);border:1px solid var(--border);border-radius:var(--r);cursor:pointer;font-family:var(--font);font-size:14px;font-weight:600;transition:all var(--t)}
.bs:active{transform:scale(0.96)}
.bg{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;padding:0 16px 100px}
@media(min-width:700px){.bg{grid-template-columns:repeat(3,1fr)}}
.bt{background:var(--bg2);border:1px solid var(--border);border-radius:var(--r2);padding:20px 16px;cursor:pointer;transition:all var(--t);display:flex;flex-direction:column;gap:10px;min-height:100px}
.bt:active{transform:scale(0.97)}
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
.ml{padding:0 16px 100px;display:flex;flex-direction:column;gap:10px}
.mi{display:flex;align-items:center;gap:12px;background:var(--bg2);border:1px solid var(--border);border-radius:var(--r2);padding:12px 14px;cursor:pointer;transition:all var(--t)}
.mi:active{transform:scale(0.98)}
.mimg{width:56px;height:56px;border-radius:10px;object-fit:cover;background:var(--bg4);flex-shrink:0}
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
`;

export default function App() {
  const [products, setProducts] = useState(DEFAULT_PRODUCTS);
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
  const [crm, setCrm] = useState({ firma:"",name:"",typ:"",land:"",interesse:"",notiz:"",prio:"",step:"" });
  const [crmOk, setCrmOk] = useState(false);
  const fileRef = useRef();

  const toast_ = msg => { setToast({ show:true,msg }); setTimeout(()=>setToast({show:false,msg:""}),2200); };
  const toggleSave = (id,e) => { if(e)e.stopPropagation(); setSaved(p=>p.includes(id)?(toast_("Entfernt"),p.filter(x=>x!==id)):(toast_("✦ Gespeichert"),[...p,id])); };

  const go = (v,opts={}) => {
    setStack(s=>[...s,{view,filter,bereich,brand}]);
    setView(v);
    if(opts.filter!==undefined)setFilter(opts.filter);
    if(opts.bereich!==undefined)setBereich(opts.bereich);
    if(opts.brand!==undefined)setBrand(opts.brand);
  };
  const back = () => {
    const prev=stack[stack.length-1];
    if(prev){setStack(s=>s.slice(0,-1));setView(prev.view);setFilter(prev.filter||"all");setBereich(prev.bereich||null);setBrand(prev.brand||null);}
    else{setView("home");setTab("home");}
  };
  const nav = v => { setStack([]);setView(v);setFilter("all");setBereich(null);setBrand(null);setTab(v==="crm"?"crm":v==="merkliste"?"merkliste":v==="home"?"home":"browse"); };
  const openP = p => { setStack(s=>[...s,{view,filter,bereich,brand}]);setSelP(p);setView("detail"); };

  const handleCSV = e => {
    const f=e.target.files[0]; if(!f)return;
    const r=new FileReader();
    r.onload=ev=>{ try{ const p=parseCSV(ev.target.result); if(p.length>0){setProducts(p);toast_(`✓ ${p.length} Produkte importiert`);}else toast_("CSV-Format prüfen"); }catch{toast_("Import fehlgeschlagen");} };
    r.readAsText(f,"UTF-8");
  };

  const fps = products.filter(p => {
    const sq=q.toLowerCase();
    const mq=!sq||p.name?.toLowerCase().includes(sq)||p.artNr?.toLowerCase().includes(sq)||p.tags?.toLowerCase().includes(sq)||p.sortiment?.toLowerCase().includes(sq)||p.brand?.toLowerCase().includes(sq);
    const mf=filter==="all"||p.brand===filter||p.bereich===filter||(filter==="neu"&&p.neuheit==="ja")||p.zielgruppe?.includes(filter);
    const mb=!bereich||p.bereich===bereich;
    const mbr=!brand||p.brand===brand;
    return mq&&mf&&mb&&mbr;
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
          {view==="home"&&<HomeV products={products} onGo={go} onNav={nav} onOpen={openP}/>}
          {view==="sort"&&<SortV products={products} bereich={bereich} onGo={go} onBack={back}/>}
          {view==="products"&&<ProdV products={fps} saved={saved} onTog={toggleSave} onOpen={openP} q={q} setQ={setQ} filter={filter} setFilter={setFilter} brand={brand} bereich={bereich} onBack={back}/>}
          {view==="branchen"&&<BraV products={products} onGo={go} onBack={back}/>}
          {view==="detail"&&selP&&<DetV product={selP} saved={saved} onTog={toggleSave} onBack={back} onCRM={()=>{toast_("Zum Gespräch hinzugefügt");nav("crm");}}/>}
          {view==="crm"&&<CRMV data={crm} setData={setCrm} savedP={savedP} ok={crmOk} onSave={()=>{setCrmOk(true);toast_("✓ Gespräch gespeichert");}}/>}
          {view==="merkliste"&&<MlV savedP={savedP} saved={saved} onTog={toggleSave} onOpen={openP} onExport={()=>toast_("Export vorbereitet …")}/>}
          {view==="import"&&<ImpV fileRef={fileRef} handleCSV={handleCSV} products={products} onBack={back}/>}
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

function HomeV({products,onGo,onNav,onOpen}){
  const tiles=[
    {l:"Artikelsuche",s:"Schnell finden",i:"🔍",c:"#00C3FF",a:()=>onNav("products")},
    {l:"Branchenlösungen",s:"Zielgruppen",i:"🏭",c:"#B473FF",a:()=>onGo("branchen")},
    {l:"Gespräch / CRM",s:"Lead erfassen",i:"💬",c:"#FF6E00",a:()=>onNav("crm")},
    {l:"CSV Import",s:"Produkte laden",i:"📥",c:"#17E5E5",a:()=>onGo("import")},
  ];
  const heroNeuheit = products.find(p=>p.id==="CC3-HERO");
  return(
    <div>
      <div className="hero">
        <div className="eyebrow">Digitaler Showroom · Eisenwarenmesse Köln 2026</div>
        <div className="h1">Willkommen bei<br/><span>alfer aluminium</span></div>
        <div className="tagline">Dein Projekt verdient Profil.</div>
      </div>

      {heroNeuheit && (
        <div style={{padding:"16px 16px 0"}} onClick={()=>onOpen&&onOpen(heroNeuheit)}>
          <div style={{position:"relative",borderRadius:"var(--r2)",overflow:"hidden",cursor:"pointer",border:"1px solid rgba(255,110,0,0.3)",background:"linear-gradient(135deg, rgba(255,110,0,0.08), var(--bg2))"}}>
            <div style={{position:"absolute",top:12,left:12,zIndex:2,display:"flex",alignItems:"center",gap:6,background:"#FF6E00",color:"#fff",padding:"5px 10px",borderRadius:99,fontSize:10,fontWeight:800,letterSpacing:"0.06em"}}>
              ✦ NEUHEIT · MESSE KÖLN 2026
            </div>
            <img src={heroNeuheit.bildUrl} alt={heroNeuheit.name} style={{width:"100%",aspectRatio:"16/9",objectFit:"cover",display:"block"}}/>
            <div style={{padding:"14px 16px 16px"}}>
              <div style={{fontSize:11,color:"#FF6E00",fontWeight:800,letterSpacing:"0.04em",marginBottom:4}}>combitech®</div>
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
      )}

      <div className="sec-hdr"><div><div className="sec-t">Produktbereiche</div><div className="sec-s">2 Bereiche · {Object.keys(BRANDS).length} Marken</div></div></div>
      <div className="bereiche">
        {Object.entries(STRUKTUR).map(([name,b])=>{
          const cnt=products.filter(p=>p.bereich===name).length;
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

function SortV({products,bereich,onGo,onBack}){
  const b=STRUKTUR[bereich]; if(!b)return null;
  return(
    <div>
      <div className="sec-hdr"><div><div className="sec-t">{bereich}</div><div className="sec-s">{Object.keys(b.brands).length} Marken · {b.untertitel||""}</div></div><button className="bs" style={{padding:"8px 12px",fontSize:12}} onClick={onBack}>Zurück</button></div>
      <div className="sg">
        {Object.entries(b.brands).map(([bid,br])=>{
          const cnt=products.filter(p=>p.brand===bid).length;
          const brd=BRANDS[bid];
          return(
            <div key={bid} className="sc" onClick={()=>onGo("products",{bereich,brand:bid})}>
              <img src={br.image} alt={br.label} loading="lazy"/>
              <div className="sc-body">
                <div className="sc-br" style={{color:br.color}}>{br.label}</div>
                {br.tagline&&<div className="sc-tag">{br.tagline}</div>}
                <div className="sc-ct">{cnt} Artikel · {br.sortimente.length} Sortimente</div>
                {brd&&<div style={{marginTop:10,display:"flex",flexWrap:"wrap",gap:4}}>
                  {br.sortimente.slice(0,4).map(s=><span key={s} style={{fontSize:10,color:brd.color,background:brd.bg,border:`1px solid ${brd.border}`,borderRadius:99,padding:"2px 8px",fontWeight:600}}>{s}</span>)}
                  {br.sortimente.length>4&&<span style={{fontSize:10,color:"var(--text3)",padding:"2px 4px"}}>+{br.sortimente.length-4}</span>}
                </div>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProdV({products,saved,onTog,onOpen,q,setQ,filter,setFilter,brand,bereich,onBack}){
  const brd=brand?BRANDS[brand]:null;
  const filters=[{id:"all",l:"Alle"},{id:"neu",l:"✦ Neu"},...Object.entries(BRANDS).map(([id,b])=>({id,l:b.label}))];
  return(
    <div>
      <div className="search-bar"><div className="sw"><span className="s-ico"><Icon name="search" size={16}/></span><input className="s-inp" placeholder="Artikel, Sortiment, Marke …" value={q} onChange={e=>setQ(e.target.value)}/>{q&&<button style={{background:"none",border:"none",color:"var(--text3)",padding:"0 12px",cursor:"pointer"}} onClick={()=>setQ("")}><Icon name="close" size={14}/></button>}</div></div>
      <div className="sec-hdr">
        <div>{brd&&<div style={{color:brd.color,fontSize:11,fontWeight:800,marginBottom:2}}>{brd.label}</div>}<div className="sec-t">{brand?BRANDS[brand]?.label:bereich||"Alle Produkte"}</div><div className="sec-s">{products.length} Produkte</div></div>
        <button className="bs" style={{padding:"8px 12px",fontSize:12}} onClick={onBack}>Zurück</button>
      </div>
      <div className="chips">{filters.map(f=><button key={f.id} className={`chip ${filter===f.id?"on":""}`} onClick={()=>setFilter(f.id)}>{f.l}</button>)}</div>
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
        <img className="pc-img" src={p.bildUrl} alt={p.name} loading="lazy"/>
        <button className={`bmbtn ${sv?"on":""}`} onClick={e=>onT(p.id,e)}><Icon name={sv?"bookmarkFill":"bookmark"} size={13}/></button>
      </div>
      <div className="pc-body">
        {b&&<div className="pc-brand" style={{color:b.color}}>{b.label}</div>}
        <div className="pc-name">{p.name}</div>
        <div className="pc-artnr">{p.artNr}</div>
        <div className="pc-tags">{p.neuheit==="ja"&&<span className="neu">NEU</span>}<span className="pt">{p.sortiment}</span></div>
      </div>
    </div>
  );
}

function DetV({product:p,saved,onTog,onBack,onCRM}){
  const [av,setAv]=useState(0);
  const sv=saved.includes(p.id);
  const b=BRANDS[p.brand];
  const vort=p.vorteile?.split(",")||[];
  const vars=p.varianten?.split(",")||[];
  const zg=p.zielgruppe?.split(",")||[];
  return(
    <div>
      <div className="dh">
        <img src={p.bildUrl} alt={p.name}/>
        <div className="dh-ov">
          {p.neuheit==="ja"&&<span className="neu" style={{marginBottom:8,display:"inline-block"}}>✦ NEUHEIT 2025</span>}
          {b&&<div style={{fontSize:11,color:b.color,fontWeight:800,marginBottom:4}}>{b.label}</div>}
          <div style={{fontSize:20,fontWeight:800,lineHeight:1.2}}>{p.name}</div>
          <div style={{fontSize:10,fontFamily:"var(--mono)",color:"var(--text3)",marginTop:4}}>Art.-Nr. {p.artNr} · {p.sortiment}</div>
        </div>
        <button className="db" onClick={onBack}><Icon name="back" size={18}/></button>
        <button className={`dbm ${sv?"on":""}`} onClick={e=>onTog(p.id,e)}><Icon name={sv?"bookmarkFill":"bookmark"} size={18}/></button>
      </div>
      <div className="ds"><div className="ds-lbl">Beschreibung</div><div className="desc">{p.beschreibung}</div></div>
      {vort.length>0&&<div className="ds"><div className="ds-lbl">Vorteile</div><ul className="vl">{vort.map((v,i)=><li key={i} className="vi"><span className="vd"><Icon name="check" size={10}/></span>{v.trim()}</li>)}</ul></div>}
      {vars.length>0&&<div className="ds"><div className="ds-lbl">Varianten</div><div className="vg">{vars.map((v,i)=><button key={i} className={`vc ${av===i?"on":""}`} onClick={()=>setAv(i)}>{v.trim()}</button>)}</div></div>}
      {p.anwendungUrl&&<div className="ds"><div className="ds-lbl">Anwendung</div><img className="aimg" src={p.anwendungUrl} alt="Anwendung" loading="lazy"/></div>}
      {zg.length>0&&<div className="ds" style={{paddingBottom:80}}><div className="ds-lbl">Zielgruppe</div><div className="vg">{zg.map(z=>{const br=BRANCHEN.find(b=>b.id===z.trim());return<span key={z} className="vc">{br?.icon} {br?.label||z}</span>;})}</div></div>}
      <div className="cta"><button className="bs" onClick={onBack}><Icon name="back" size={16}/></button><button className="bp" onClick={onCRM}>Zum Gespräch hinzufügen</button></div>
    </div>
  );
}

function BraV({products,onGo,onBack}){
  return(
    <div>
      <div className="sec-hdr"><div><div className="sec-t">Branchenlösungen</div><div className="sec-s">Zielgruppen & Sortimente</div></div><button className="bs" style={{padding:"8px 12px",fontSize:12}} onClick={onBack}>Zurück</button></div>
      <div className="bg">{BRANCHEN.map(b=>{const cnt=products.filter(p=>p.zielgruppe?.includes(b.id)).length;return(<div key={b.id} className="bt" onClick={()=>onGo("products",{filter:b.id})}><div style={{fontSize:26}}>{b.icon}</div><div><div style={{fontSize:14,fontWeight:700}}>{b.label}</div><div style={{fontSize:11,color:"var(--text3)"}}>{cnt} Produkte</div></div></div>);})}</div>
    </div>
  );
}

function CRMV({data,setData,savedP,ok,onSave}){
  const u=(k,v)=>setData(d=>({...d,[k]:v}));
  return(
    <div>
      <div className="sec-hdr"><div><div className="sec-t">Gespräch erfassen</div><div className="sec-s">Lead & Follow-up</div></div></div>
      {ok&&<div className="crm-ok"><Icon name="check" size={16}/>Gespräch gespeichert</div>}
      {savedP.length>0&&<div style={{padding:"0 16px 14px"}}><div className="fl">Besprochene Produkte</div><div style={{display:"flex",gap:8,flexWrap:"wrap"}}>{savedP.map(p=>{const b=BRANDS[p.brand];return<span key={p.id} className="pill" style={{color:b?.color||"var(--alfer)",background:b?.bg||"rgba(0,195,255,0.1)",borderColor:b?.border||"rgba(0,195,255,0.3)"}}>{p.name}</span>;})}</div></div>}
      <div className="crm-f">
        <div className="fr">
          <div><label className="fl">Firma</label><input className="fi" placeholder="Unternehmensname" value={data.firma} onChange={e=>u("firma",e.target.value)}/></div>
          <div><label className="fl">Ansprechpartner</label><input className="fi" placeholder="Name" value={data.name} onChange={e=>u("name",e.target.value)}/></div>
        </div>
        <div className="fr">
          <div><label className="fl">Kundentyp</label><select className="fsel" value={data.typ} onChange={e=>u("typ",e.target.value)}><option value="">Wählen …</option>{BRANCHEN.map(b=><option key={b.id}>{b.label}</option>)}</select></div>
          <div><label className="fl">Land</label><input className="fi" placeholder="z.B. Deutschland" value={data.land} onChange={e=>u("land",e.target.value)}/></div>
        </div>
        <div><label className="fl">Interesse an Marke / Sortiment</label><input className="fi" placeholder="z.B. combitech® Profile, element system® …" value={data.interesse} onChange={e=>u("interesse",e.target.value)}/></div>
        <div><label className="fl">Gesprächsnotizen</label><textarea className="fta" placeholder="Besonderheiten, Anforderungen, Mengen …" value={data.notiz} onChange={e=>u("notiz",e.target.value)}/></div>
        <div><label className="fl">Priorität</label><div className="pg2">{[["h","🔴 Hoch"],["m","🟡 Mittel"],["l","🟢 Niedrig"]].map(([id,lbl])=><button key={id} className={`pb ${id} ${data.prio===id?"on":""}`} onClick={()=>u("prio",id)}>{lbl}</button>)}</div></div>
        <div><label className="fl">Nächster Schritt</label><select className="fsel" value={data.step} onChange={e=>u("step",e.target.value)}><option value="">Wählen …</option><option>Angebot senden</option><option>Muster schicken</option><option>Telefonat vereinbaren</option><option>Besuch beim Kunden</option><option>Katalog zusenden</option><option>Keine Aktion</option></select></div>
        <button className="bp" style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:8}} onClick={onSave}><Icon name="send" size={16}/>Gespräch speichern</button>
      </div>
    </div>
  );
}

function MlV({savedP,saved,onTog,onOpen,onExport}){
  return(
    <div>
      <div className="sec-hdr"><div><div className="sec-t">Merkliste</div><div className="sec-s">{savedP.length} Produkte</div></div>{savedP.length>0&&<button className="bs" style={{padding:"8px 12px",fontSize:12,display:"flex",gap:6,alignItems:"center"}} onClick={onExport}><Icon name="export" size={14}/>Export</button>}</div>
      {savedP.length===0?<div className="empty"><div style={{fontSize:40,opacity:0.3}}>🔖</div><div style={{fontSize:16,fontWeight:700,color:"var(--text2)"}}>Noch nichts gespeichert</div><div style={{fontSize:13,color:"var(--text3)"}}>Lesezeichen-Symbol beim Produkt tippen</div></div>:
      <div className="ml">{savedP.map(p=>{const b=BRANDS[p.brand];return(<div key={p.id} className="mi" onClick={()=>onOpen(p)}><img className="mimg" src={p.bildUrl} alt={p.name}/><div className="min">{b&&<div style={{fontSize:10,fontWeight:800,color:b.color,marginBottom:2}}>{b.label}</div>}<div className="mn">{p.name}</div><div className="mm">{p.artNr} · {p.sortiment}</div></div><button className="mrm" onClick={e=>{e.stopPropagation();onTog(p.id,e);}}><Icon name="close" size={16}/></button></div>);})}</div>}
    </div>
  );
}

function ImpV({fileRef,handleCSV,products,onBack}){
  const tpl=`id;name;artNr;brand;bereich;sortiment;beschreibung;vorteile;varianten;zielgruppe;neuheit;bildUrl;anwendungUrl;tags\nC001;combitech® Rohr 15x15mm;010.015.005;combitech;Bauen & Renovieren;System-Profile | Aluminium;Aluminiumrohr.;Eloxiert,Zuschneidbar;L=1000mm,L=2000mm;industrie,fachhandel;nein;https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800;https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=800;rohr,alu`;
  const dl=()=>{const b=new Blob([tpl],{type:"text/csv;charset=utf-8;"});const u=URL.createObjectURL(b);const a=document.createElement("a");a.href=u;a.download="alfer_vorlage.csv";a.click();};
  return(
    <div>
      <div className="sec-hdr"><div><div className="sec-t">CSV Import</div><div className="sec-s">Produkte per Excel laden</div></div><button className="bs" style={{padding:"8px 12px",fontSize:12}} onClick={onBack}>Zurück</button></div>
      <div style={{padding:"0 16px 14px"}}>
        <div style={{background:"var(--bg3)",border:"1px solid var(--border)",borderRadius:"var(--r)",padding:"14px 16px"}}>
          <div style={{fontSize:12,fontWeight:800,color:"var(--alfer)",marginBottom:8}}>CSV-Format (Semikolon-getrennt)</div>
          <div style={{fontSize:11,fontFamily:"var(--mono)",color:"var(--text3)",lineHeight:1.9}}>id · name · artNr · brand · bereich<br/>sortiment · beschreibung · vorteile<br/>varianten · zielgruppe · neuheit<br/>bildUrl · anwendungUrl · tags</div>
          <div style={{fontSize:11,color:"var(--text3)",marginTop:10}}><b style={{color:"var(--text2)"}}>brand:</b> combitech / orditech / clipstech / element / coaxis <br/><b style={{color:"var(--text2)"}}>neuheit:</b> ja / nein · <b style={{color:"var(--text2)"}}>Trennzeichen:</b> Komma bei Listen</div>
        </div>
      </div>
      <input ref={fileRef} type="file" accept=".csv" style={{display:"none"}} onChange={handleCSV}/>
      <div className="imp-z" onClick={()=>fileRef.current?.click()}>
        <div style={{color:"var(--alfer)"}}><Icon name="upload" size={34}/></div>
        <div style={{fontSize:14,color:"var(--text2)",marginTop:10}}>CSV-Datei auswählen</div>
        <div style={{fontSize:12,color:"var(--text3)",marginTop:6}}>Tippen zum Öffnen · UTF-8 · Semikolon-getrennt</div>
      </div>
      <div style={{padding:"14px 16px"}}><button className="bs" style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:8}} onClick={dl}><Icon name="export" size={16}/>Vorlage herunterladen (.csv)</button></div>
      <div style={{padding:"0 16px 100px"}}>
        <div style={{fontSize:12,fontWeight:700,color:"var(--text3)",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:8}}>Aktuell geladen · {products.length} Produkte</div>
        <div style={{display:"flex",flexWrap:"wrap",gap:8}}>{Object.entries(BRANDS).map(([id,b])=>{const cnt=products.filter(p=>p.brand===id).length;return cnt>0?<span key={id} className="pill" style={{color:b.color,background:b.bg,borderColor:b.border}}>{b.label} · {cnt}</span>:null;})}</div>
      </div>
    </div>
  );
}
