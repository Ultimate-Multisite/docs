---
title: Logo-SVG generéieren
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Logo SVG generéieren {#generate-logo-svg}

D'Fäegkeet **Generate Logo SVG** erlaabt dem Theme Builder, personaliséiert Logo-SVGs direkt an deng WordPress-Säit ze erstellen an anzebetten, mat automatescher namespace-sécherer Sanitiséierung.

## Iwwersiicht {#overview}

Dës Fäegkeet generéiert skaléierbar Vektorgrafiken (SVG) Logoen op Basis vun der Branding-Richtung an den Design-Virléiften vun denger Säit. Déi generéiert SVGs ginn automatesch sanitiséiert, fir sécherzestellen, datt se sécher fir d'Benotzung a WordPress sinn, wärend déi visuell Integritéit erhale bleift.

## Parameteren {#parameters}

| Parameter | Typ | Erfuerderlech | Beschreiwung |
|-----------|------|----------|-------------|
| `site_name` | string | Jo | Den Numm vun der Säit, fir déi de Logo generéiert soll ginn |
| `style` | string | Jo | Den Design-Stil (z. B. "modern", "classic", "minimalist", "playful") |
| `colors` | array | Nee | Array vun Hex-Faarfcoden, déi am Logo benotzt solle ginn (z. B. `["#678233", "#ffffff"]`) |
| `width` | number | Nee | SVG-Breet a Pixel (Standard: 200) |
| `height` | number | Nee | SVG-Héicht a Pixel (Standard: 200) |
| `include_text` | boolean | Nee | Ob den Numm vun der Säit als Text am Logo enthale soll sinn (Standard: true) |

## Ausgabformat {#output-format}

D'Fäegkeet gëtt eng SVG-Zeecheketten mat folgender Struktur zeréck:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## SVG-Sanitiséierungsverhalen {#svg-sanitisation-behaviour}

Déi generéiert SVGs ginn enger automatescher namespace-sécherer Sanitiséierung ënnerzunn, fir:

- **Onsécher Attributer ze läschen** — läscht Event-Handler, Skripter a potenziell geféierlech Attributer
- **Namespaces z'erhalen** — behält SVG-Namespaces (xmlns, xlink) fir korrekt Rendering
- **Struktur ze validéieren** — stellt sécher, datt den SVG de W3C-Standarden entsprécht
- **Entitéiten ze codéieren** — escapéiert speziell Zeechen am Textinhalt korrekt
- **Extern Referenzen ze läschen** — läscht extern Stylesheets a Bildreferenzen

Dëst stellt sécher, datt den SVG sécher direkt a WordPress agebett ka ginn, ouni zousätzlech Sanitiséierung ze erfuerderen.

## Benotzungsbeispill {#usage-example}

**Prompt:**
```
Generéier e moderne Logo fir mäin Tech-Startup mam Numm "CloudSync" mat bloen a wäisse Faarwen.
```

**Resultat:**
D'Fäegkeet erstellt en SVG-Logo, deen:
- Den Numm vun der Säit "CloudSync" integréiert
- Dat uginnent blo-wäisst Faarfschema benotzt
- Moderne Design-Prinzipie follegt
- Automatesch sanitiséiert a prett fir d'Benotzung ass

## Integratioun mam Theme Builder {#integration-with-theme-builder}

Wann s du d'Design-Richtungs-Auswiel vum Theme Builder benotz, mécht d'Generate Logo SVG-Fäegkeet Folgendes:

1. Analyséiert deng Design-Richtung an deng Faarfpalett
2. Generéiert e personaliséierten SVG-Logo, deen zu dengen Virléifte passt
3. Bett de Logo automatesch an den Header-/Branding-Beräich vun denger Säit an
4. Späichert den SVG als personaliséierte Logo an de WordPress-Medien

## Bescht Praktiken {#best-practices}

- **Gëff kloer Stil-Virléiften un** — beschreif den Design-Stil, deen s du wëlls (modern, classic, playful, asw.)
- **Gëff Faarwen un** — enthale deng Markefaarwe fir Konsistenz
- **Test d'Duerstellung** — iwwerpréif, ob de Logo iwwer verschidden Écransgréissten korrekt ugewise gëtt
- **Personaliséier weider** — benotz d'Logo-Personaliséierungsinstrumenter vu WordPress, fir Gréisst a Placéierung unzepassen

## Aschränkungen {#limitations}

- SVG-Logoe ginn als statesch Grafike generéiert (net animéiert)
- Komplex Logoen mat ville Elementer kënnen eng manuell Verfeinerung erfuerderen
- Personaliséiert Schrëften ginn net ënnerstëtzt; Text benotzt Systemschrëften
- Ganz grouss oder ganz kleng Dimensioune kënnen d'Qualitéit beaflossen

## Verbonnen Fäegkeeten {#related-abilities}

- [Palette-Kontrast validéieren](./validate-palette-contrast.md) — Faarfkontrast fir Accessibilitéit iwwerpréiwen
- [Menü erstellen](./create-menu.md) — Navigatiounsmenüe fir deng Säit erstellen
