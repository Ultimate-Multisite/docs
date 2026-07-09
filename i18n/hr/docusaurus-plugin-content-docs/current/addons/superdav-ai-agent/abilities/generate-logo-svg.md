---
title: Generiraj SVG logotipa
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Generiranje SVG logotipa {#generate-logo-svg}

Mogućnost **Generiranje SVG logotipa** omogućuje Theme Builderu stvaranje i ugradnju prilagođenih SVG logotipa izravno u vašu WordPress stranicu uz automatsko pročišćavanje sigurno za imenske prostore.

## Pregled {#overview}

Ova mogućnost generira skalabilne vektorske grafike (SVG) logotipa na temelju smjera brendiranja vaše stranice i dizajnerskih preferencija. Generirani SVG-ovi automatski se pročišćavaju kako bi bili sigurni za upotrebu u WordPressu, uz očuvanje vizualne cjelovitosti.

## Parametri {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `site_name` | string | Da | Naziv stranice za koju treba generirati logotip |
| `style` | string | Da | Stil dizajna (npr. "moderan", "klasičan", "minimalistički", "razigran") |
| `colors` | array | Ne | Niz heksadecimalnih kodova boja za upotrebu u logotipu (npr. `["#678233", "#ffffff"]`) |
| `width` | number | Ne | Širina SVG-a u pikselima (zadano: 200) |
| `height` | number | Ne | Visina SVG-a u pikselima (zadano: 200) |
| `include_text` | boolean | Ne | Treba li uključiti naziv stranice kao tekst u logotipu (zadano: true) |

## Format izlaza {#output-format}

Mogućnost vraća SVG niz sa sljedećom strukturom:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Ponašanje pročišćavanja SVG-a {#svg-sanitisation-behaviour}

Generirani SVG-ovi prolaze automatsko pročišćavanje sigurno za imenske prostore kako bi se:

- **Uklonili nesigurni atributi** — uklanjaju se rukovatelji događajima, skripte i potencijalno opasni atributi
- **Očuvali imenski prostori** — zadržavaju se SVG imenski prostori (xmlns, xlink) radi ispravnog prikazivanja
- **Provjerila struktura** — osigurava se da je SVG u skladu sa W3C standardima
- **Kodirali entiteti** — posebni znakovi u tekstualnom sadržaju pravilno se escapaju
- **Uklonile vanjske reference** — uklanjaju se vanjski stylesheetevi i reference na slike

Time se osigurava da je SVG siguran za izravnu ugradnju u WordPress bez potrebe za dodatnim pročišćavanjem.

## Primjer upotrebe {#usage-example}

**Upit:**
```
Generiraj moderan logotip za moj tehnološki startup pod nazivom "CloudSync" koristeći plavu i bijelu boju.
```

**Rezultat:**
Mogućnost stvara SVG logotip koji:
- Uključuje naziv stranice "CloudSync"
- Koristi navedenu plavu i bijelu shemu boja
- Slijedi moderna načela dizajna
- Automatski je pročišćen i spreman za upotrebu

## Integracija s Theme Builderom {#integration-with-theme-builder}

Pri upotrebi Theme Builderovog odabira smjera dizajna, mogućnost Generiranje SVG logotipa:

1. Analizira vaš smjer dizajna i paletu boja
2. Generira prilagođeni SVG logotip koji odgovara vašim preferencijama
3. Automatski ugrađuje logotip u zaglavlje/područje brendiranja vaše stranice
4. Sprema SVG kao prilagođeni logotip u WordPress medijima

## Najbolje prakse {#best-practices}

- **Navedite jasne stilske preferencije** — opišite stil dizajna koji želite (moderan, klasičan, razigran itd.)
- **Navedite boje** — uključite boje svojeg brenda radi dosljednosti
- **Testirajte prikazivanje** — provjerite prikazuje li se logotip ispravno na različitim veličinama zaslona
- **Dodatno prilagodite** — upotrijebite WordPressove alate za prilagodbu logotipa kako biste podesili veličinu i položaj

## Ograničenja {#limitations}

- SVG logotipi generiraju se kao statičke grafike (nisu animirani)
- Složeni logotipi s mnogo elemenata mogu zahtijevati ručno dotjerivanje
- Prilagođeni fontovi nisu podržani; tekst koristi sistemske fontove
- Vrlo velike ili vrlo male dimenzije mogu utjecati na kvalitetu

## Povezane mogućnosti {#related-abilities}

- [Provjeri kontrast palete](./validate-palette-contrast.md) — provjeri kontrast boja radi pristupačnosti
- [Izradi izbornik](./create-menu.md) — izradi navigacijske izbornike za svoju stranicu
