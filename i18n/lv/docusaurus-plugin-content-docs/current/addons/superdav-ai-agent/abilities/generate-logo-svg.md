---
title: Ģenerēt logotipa SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Ģenerēt Logo SVG {#generate-logo-svg}

**Generate Logo SVG** spēja ļauj Theme Builder izveidot un iegult pielāgotus logo SVG tieši jūsu WordPress vietnē ar automātisku, nosaukumvietām drošu sanitizāciju.

## Pārskats {#overview}

Šī spēja ģenerē mērogojamus vektorgrafikas (SVG) logo, balstoties uz jūsu vietnes zīmolvedības virzienu un dizaina preferencēm. Ģenerētie SVG tiek automātiski sanitizēti, lai nodrošinātu, ka tie ir droši lietošanai WordPress, vienlaikus saglabājot vizuālo integritāti.

## Parametri {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `site_name` | string | Yes | Vietnes nosaukums, kurai ģenerēt logo |
| `style` | string | Yes | Dizaina stils (piem., "modern", "classic", "minimalist", "playful") |
| `colors` | array | No | Hex krāsu kodu masīvs, ko izmantot logo (piem., `["#678233", "#ffffff"]`) |
| `width` | number | No | SVG platums pikseļos (noklusējums: 200) |
| `height` | number | No | SVG augstums pikseļos (noklusējums: 200) |
| `include_text` | boolean | No | Vai iekļaut vietnes nosaukumu kā tekstu logo (noklusējums: true) |

## Izvades formāts {#output-format}

Šī spēja atgriež SVG virkni ar šādu struktūru:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## SVG sanitizācijas uzvedība {#svg-sanitisation-behaviour}

Ģenerētajiem SVG tiek veikta automātiska, nosaukumvietām droša sanitizācija, lai:

- **Noņemtu nedrošus atribūtus** — izņem notikumu apstrādātājus, skriptus un potenciāli bīstamus atribūtus
- **Saglabātu nosaukumvietas** — uztur SVG nosaukumvietas (xmlns, xlink) pareizai attēlošanai
- **Validētu struktūru** — nodrošina, ka SVG atbilst W3C standartiem
- **Kodētu entītijas** — pareizi ekrānē īpašās rakstzīmes teksta saturā
- **Noņemtu ārējās atsauces** — izņem ārējās stilu lapas un attēlu atsauces

Tas nodrošina, ka SVG ir droši iegult tieši WordPress bez papildu sanitizācijas.

## Lietošanas piemērs {#usage-example}

**Uzvedne:**
```
Ģenerē modernu logo manam tehnoloģiju jaunuzņēmumam ar nosaukumu "CloudSync", izmantojot zilas un baltas krāsas.
```

**Rezultāts:**
Šī spēja izveido SVG logo, kas:
- Ietver vietnes nosaukumu "CloudSync"
- Izmanto norādīto zilo un balto krāsu shēmu
- Ievēro mūsdienīga dizaina principus
- Ir automātiski sanitizēts un gatavs lietošanai

## Integrācija ar Theme Builder {#integration-with-theme-builder}

Izmantojot Theme Builder dizaina virziena atlasi, Generate Logo SVG spēja:

1. Analizē jūsu dizaina virzienu un krāsu paleti
2. Ģenerē pielāgotu SVG logo, kas atbilst jūsu preferencēm
3. Automātiski iegulst logo jūsu vietnes galvenes/zīmolvedības zonā
4. Saglabā SVG kā pielāgotu logo WordPress multividē

## Labākā prakse {#best-practices}

- **Sniedziet skaidras stila preferences** — aprakstiet vēlamo dizaina stilu (modernu, klasisku, rotaļīgu utt.)
- **Norādiet krāsas** — iekļaujiet sava zīmola krāsas konsekvencei
- **Pārbaudiet attēlošanu** — pārliecinieties, ka logo tiek pareizi attēlots dažādos ekrāna izmēros
- **Pielāgojiet tālāk** — izmantojiet WordPress logo pielāgošanas rīkus, lai koriģētu izmēru un izvietojumu

## Ierobežojumi {#limitations}

- SVG logo tiek ģenerēti kā statiska grafika (ne animēti)
- Sarežģītiem logo ar daudziem elementiem var būt nepieciešama manuāla pilnveide
- Pielāgoti fonti netiek atbalstīti; teksts izmanto sistēmas fontus
- Ļoti lieli vai ļoti mazi izmēri var ietekmēt kvalitāti

## Saistītās spējas {#related-abilities}

- [Validēt paletes kontrastu](./validate-palette-contrast.md) — pārbaudīt krāsu kontrastu piekļūstamībai
- [Izveidot izvēlni](./create-menu.md) — izveidot navigācijas izvēlnes jūsu vietnei
