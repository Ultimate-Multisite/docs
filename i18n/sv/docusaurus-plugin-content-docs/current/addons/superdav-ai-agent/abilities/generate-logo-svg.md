---
title: Generera Logo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Generera SVG-logotyp

Funktionen **Generera SVG-logotyp** låter Theme Builder skapa och bädda in anpassade SVG-logotyper direkt i din WordPress-sajt, med automatisk, namnrymsanpassad sanering.

## Översikt {#overview}

Denna funktion genererar skalbara vektorgrafiker (SVG) av logotyper baserat på din sajtprofil och designpreferenser. De genererade SVG:erna saneras automatiskt för att säkerställa att de är säkra att använda i WordPress, samtidigt som det visuella utseendet bibehålls.

## Parametrar {#parameters}

| Parameter | Typ | Obligatoriskt | Beskrivning |
|-----------|------|---------------|-------------|
| `site_name` | string | Ja | Namnet på sajt som logotypen ska genereras för |
| `style` | string | Ja | Designstil (t.ex. "modern", "klassisk", "minimalistisk", "lekfull") |
| `colors` | array | Nej | Array av hex-färgkoder som ska användas i logotypen (t.ex. `["#678233", "#ffffff"]`) |
| `width` | number | Nej | SVG-bredd i pixlar (standard: 200) |
| `height` | number | Nej | SVG-höjd i pixlar (standard: 200) |
| `include_text` | boolean | Nej | Om sajtnamnet ska inkluderas som text i logotypen (standard: true) |

## Utdataformat {#output-format}

Funktionen returnerar en SVG-sträng med följande struktur:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## SVG-saneringsbeteende {#svg-sanitisation-behaviour}

De genererade SVG:erna genomgår automatisk, namnrymsanpassad sanering för att:

- **Ta bort osäkra attribut** — tar bort händelsehanterare, skript och potentiellt farliga attribut
- **Behålla namnrymder** — bibehåller SVG-namnrymder (xmlns, xlink) för korrekt rendering
- **Validera struktur** — säkerställer att SVG:n följer W3C-standarder
- **Kodera enheter** — hanterar specialtecken i textinnehållet korrekt
- **Ta bort externa referenser** — tar bort externa stilblad och bildreferenser

Detta säkerställer att SVG:n är säker att bädda in direkt i WordPress utan att kräva ytterligare sanering.

## Användningsexempel {#usage-example}

**Prompt:**
```
Generate a modern logo for my tech startup called "CloudSync" using blue and white colors.
```

**Resultat:**
Funktionen skapar en SVG-logotyp som:
- Innehåller sajtnamnet "CloudSync"
- Använder den angivna blåa och vita färgpaletten
- Följer moderna designprinciper
- Är automatisk sanerad och redo att användas

## Integration med Theme Builder {#integration-with-theme-builder}

När du använder Theme Builders urval av designriktning:

1. Analyserar din designriktning och färgpalett
2. Genererar en anpassad SVG-logotyp som matchar dina preferenser
3. Bäddar automatiskt in logotypen i sajtens header/varumärkesområde
4. Lagrar SVG:n som en anpassad logotyp i WordPress media

## Bästa praxis {#best-practices}

- **Ge tydliga stilpreferenser** — beskriv den designstil du vill ha (modern, klassisk, lekfull, etc.)
- **Ange färger** — inkludera dina varumärkesfärger för konsekvens
- **Testa renderingen** — verifiera att logotypen visas korrekt på olika skärmstorlekar
- **Anpassa ytterligare** — använd WordPresss verktyg för logotypanpassning för att justera storlek och placering

## Begränsningar {#limitations}

- SVG-logotyper genereras som statiska grafik (inte animerade)
- Komplexa logotyper med många element kan kräva manuell finjustering
- Anpassade typsnitt stöds inte; text använder systemtypsnitt
- Mycket stora eller mycket små dimensioner kan påverka kvaliteten

## Relaterade funktioner {#related-abilities}

- [Validate Palette Contrast](./validate-palette-contrast.md) — kontrollera färgkontrast för tillgänglighet
- [Create Menu](./create-menu.md) — skapa navigeringsmenyer för din sajt
