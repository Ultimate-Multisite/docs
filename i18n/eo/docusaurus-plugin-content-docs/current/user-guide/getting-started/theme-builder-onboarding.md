---
title: Onborgo de la Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Onboarding Flow

Superdav AI Agent v1.12.0 introducitas una **Theme Builder onboarding flow** gvidita kiu helpas vi krei temon bloko personala dum via va nia inicial konfiguracio. Ĝi estas substituo de la malnova Site Builder modo per alpa pli fleksabla, agenta-asistita alproach.

## Kion estas la Theme Builder Onboarding Flow?

La Theme Builder onboarding flow estas interaktiva setup wizard kiu:

- Gvidas vin per decidoj de dezajno (koloroj, tipografia, layout)
- Capturas la vizual identeco preferencojn de via sitio
- Geniras temon blokon personalan adaptitan al via bezonoj
- Aktivigas la temon aŭtomatikaj ĝis kompleta

La flow estas provita de la **Setup Assistant agent**, kiu petas klarigajn demandojn kaj konstruas via temon inkrementalajman.

## Komenci la Theme Builder Onboarding

### Unua Lancado Setup

Kiam vi komencas Superdav AI Agent en novaj WordPress instalacioj, vi vidus:

```
Bienvenue en Superdav AI Agent!

Kion vi ŝatus fari?
1. Krei temon personalan (Theme Builder)
2. Uzi ekzistantan temon
3. Poveri setup por nun
```

Selekta **"Build a custom theme"** por entri en la Theme Builder onboarding flow.

### Manua Aktivado

Vi ankaŭ povas komenci la Theme Builder onboarding en kiam kiel vi petas:

```
"Start the Theme Builder onboarding"
```

aŭ

```
"Help me create a custom theme"
```

## La Onboarding Step'oj

### Step 1: Modo Selektado

La Setup Assistant agent petas pri via preferenco:

```
Kion vi ŝatus fari kun via temo?
- Gvidita (Mi petos demandojn kaj konstruos ĝin por vi)
- Manua (Mi montros vi opciojn kaj vi decidas)
```

**Gvidita modo** estas rekomendas por la plej multaj uzantoj; la agent faras dezajno rekomendojn bazitajn sur via industrio kaj celoj.

### Step 2: Sitacio Specifika

Vi wird petita pri via sitio:

- **Site celo**: E-commerce, blog, portfolio, SaaS, etc.
- **Targeta publiko**: Kuj indas vos vizitatori?
- **Brand koloroj**: Primarna kaj sekundara koloroj ( aŭ "Mi ne estas certa")
- **Tonoj**: Profesona, kreativa, ludika, minimala, etc.

Ĉi tiu informeco estas konservita en via memoro **site_brief**, kiun agenoj referas en estontecoj.

### Paŝo 3: Decidoj pri Sistemo de Dezajno (Design System)

La agente gvidas vin per selekto de design tokens:

- **Tipografia**: Fontfamilio (serif, sans-serif, monospace) kaj skalado de magnitudoj
- **Koloraj paleta**: Primara, sekundara, akcento kaj neutralaj koloroj
- **Espaco**: Kompakta, normala aŭ spacosa layout'oj
- **Movado**: Animoj kaj transitoj (se tio estas desiro)

### Paŝo 4: Temo Genaro

La Setup Assistant agente konstruas vian personalan blok temon kun:

- `theme.json`, kiun kontenas ĉiuj vian design tokens
- Blokaj mallongoj por komuna layout'oj (homepage, blog, kontakto)
- Customaj bloko stiloj, kiuj korespondon al viaj design systemo
- Metadatak pri temo kaj deklaroj pri WordPress suporto

### Paŝo 5: Aktivado kaj Verifikado

La temo estas aŭtomate aktivita, kaj vi vidos:

```
✓ Via personala temo estas nun viva!
  Tema nom: [Via Vesta Nomo] Tema
  Koloroj: [Primara] / [Sekundara]
  Tipografia: [Fontfamilio]

  Vizitas vian site'on por vidi la novan dezajnin.
```

Tiam vi povas viziti vian site'on por verifi, ke la temo prezentasĝas bone.

## Site Specifika kaj Memoro site_brief

Durante la enontigo (onboarding), la agente kaptas specifikon de via sito en la kategorio memoro **site_brief**. Tio inkluzivas:

- Celon kaj celojn de la sito
- Targetan publikon
- Brand koloroj kaj tono
- Dezajnin preferojn
- Kontenaj strukturo

### Kial site_brief estas grava

En estontecoj, agenoj referas vian site_brief por:

### Konsistente Design während Änderige

*   Biete Merkmalen, dem Zweck vo din Site zuegspassend sind.
*   Gib kontextabhängigi Empfehlige.
*   Vermeid d'Wiederholig vo Setup-Frage.

### Dini site_brief aaluege

Du chasch de Agent froge:

```
"Zeig mir mini site brief"
```

oder

```
"Was weisch du über mini site?"
```

De Agent wird dini gspeicherte sitespezifikation azeige.

## Nach Onboarding personalisiere

Nachdem s'Theme Builder Onboarding fertig isch, chasch du:

### D'Design System Aesthetics Fähigkeit bruche

Froge nach Designverbesserige:

```
"Verbesser d'Typografie, dass sie moderner wird"
```

oder

```
"Pass d'Farbpalette a, dass sie wärmer wird"
```

D'**Design System Aesthetics skill** führt dich dur gezielti Design-Updates.

### theme.json direkt bearbeite

Für fortgschritteni Benutzer chasch du `/wp-content/themes/[theme-name]/theme.json` bearbeite, um z'passe:

*   Farbtoken
*   Typografie-Skalen
*   Abstandswerte
*   Rand- und Schatte-Definitione

### Custom Block Templates erstelle

Bruche de WordPress block editor, um benutzerdefinierti Vorlage für:

*   Homepage-Layouts
*   Blog-Post-Seiten
*   Produktseiten
*   Kontaktformular

## Verglich: Alt vs. Neu Onboarding

| Merkmal | Site Builder (Alt) | Theme Builder (Neu) |
|---------|----------------------|-------------------|
| Setup-Methode | Wizard-basierte Form | Agent-gfüehrti Konversation |
| Theme-Generierig | Begränzti Vorlage | Benutzerdefinierti Gerüststruktur |
| Design-Token | Manuelle Iifüehrig | Gfüehrti Entscheidigä |
| Flexibilität | Feschti Optionä | Benutzerdefinierbar |
| Zuekunftsinfos | Nicht referenziert | In site_brief gspeichert |

## Fehlerbehebig

**S'Onboarding-Fluss isch nöd fertig worde**
*   Starte de Fluss neu: "Start the Theme Builder onboarding"
*   Überprüef, ob dini WordPress-Installation uf em neuste Stand isch
*   Verifiziere, dass de Setup Assistant Agent aktiviert isch

**Mi `site_brief` ne wird nützt**
- Bestätige, dass de Agent Zuegang zu em Gedächtnis het (memory)
- Frag de Agent, "recall my site brief" (erinnere mich an mini Site-Zusammenfassung)
- Prüef, ob das Gedächtnis in dine Einstellungen aktiviert isch

**De generierti Theme passt nöd zu mine Vorzügen**
- Bruuch d'Fähigkeit Design System Aesthetics, um es z'verbessere
- Frag de Agent, "regenerate the theme with [specific changes]" (generiere s'Theme mit [spezifische Änderige])
- Bearbeite `theme.json` direkt für präzisi Kontrolle

## Nächsti Schritt

Nachdem du d'Onboarding vom Theme Builder abgeschlossen hesch:

1. **Überprüef dini Site**: Besuech dini Site, um s'neue Theme z'gseh
2. **Verfeiner d'Design**: Bruuch d'Fähigkeit Design System Aesthetics für Anpassige
3. **Füeg Inhalt dezue**: Fang a, de Inhalt vo dinere Site ufzbaue
4. **Entdeck Fähigkeite**: Lerne meh über anderi Agent-Fähigkeite wie `scaffold-block-theme` und `activate-theme`
