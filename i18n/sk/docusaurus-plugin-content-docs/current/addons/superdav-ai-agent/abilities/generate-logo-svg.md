---
title: Vygenerovať logo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Generovanie Logo SVG

Funkcia **Generovanie Logo SVG** umožňuje Theme Builderu vytvárať a vkladať vlastné logo SVG priamo do vašej WordPress stránky s automatickou sanitizáciou bezpečnou pre namespace.

## Prehľad {#overview}

Táto funkcia generuje škálovateľnú vektorovú grafiku (SVG) loga na základe smerovania brandingu vašej stránky a dizajnových preferencií. Vygenerované SVG sú automaticky sanitizované, aby boli bezpečné na použitie vo WordPress, pričom si zachovávajú vizuálnu integritu.

## Parametre {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `site_name` | string | Yes | Názov stránky, pre ktorú sa má vygenerovať logo |
| `style` | string | Yes | Dizajnový štýl (napr. „moderný“, „klasický“, „minimalistický“, „hravý“) |
| `colors` | array | No | Pole hex kódov farieb, ktoré sa majú použiť v logu (napr. `["#678233", "#ffffff"]`) |
| `width` | number | No | Šírka SVG v pixeloch (predvolené: 200) |
| `height` | number | No | Výška SVG v pixeloch (predvolené: 200) |
| `include_text` | boolean | No | Či zahrnúť názov stránky ako text v logu (predvolené: true) |

## Formát výstupu {#output-format}

Funkcia vracia reťazec SVG s nasledujúcou štruktúrou:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Správanie sanitizácie SVG {#svg-sanitisation-behaviour}

Vygenerované SVG prechádzajú automatickou sanitizáciou bezpečnou pre namespace, aby:

- **Odstránili nebezpečné atribúty** — odstraňujú obslužné rutiny udalostí, skripty a potenciálne nebezpečné atribúty
- **Zachovali namespace** — zachovávajú SVG namespace (xmlns, xlink) pre správne vykresľovanie
- **Overili štruktúru** — zabezpečujú, že SVG spĺňa štandardy W3C
- **Kódovali entity** — správne escapujú špeciálne znaky v textovom obsahu
- **Odstránili externé odkazy** — odstraňujú externé štýly a odkazy na obrázky

Tým sa zabezpečí, že SVG je bezpečné na priame vloženie do WordPress bez potreby dodatočnej sanitizácie.

## Príklad použitia {#usage-example}

**Výzva:**
```
Vygeneruj moderné logo pre môj technologický startup s názvom „CloudSync“ s použitím modrej a bielej farby.
```

**Výsledok:**
Funkcia vytvorí SVG logo, ktoré:
- Zahŕňa názov stránky „CloudSync“
- Používa zadanú modro-bielu farebnú schému
- Dodržiava moderné princípy dizajnu
- Je automaticky sanitizované a pripravené na použitie

## Integrácia s Theme Builder {#integration-with-theme-builder}

Pri používaní výberu dizajnového smerovania v Theme Builderi funkcia Generovanie Logo SVG:

1. Analyzuje vaše dizajnové smerovanie a farebnú paletu
2. Vygeneruje vlastné SVG logo zodpovedajúce vašim preferenciám
3. Automaticky vloží logo do oblasti hlavičky/brandingu vašej stránky
4. Uloží SVG ako vlastné logo v médiách WordPress

## Osvedčené postupy {#best-practices}

- **Poskytnite jasné preferencie štýlu** — opíšte dizajnový štýl, ktorý chcete (moderný, klasický, hravý atď.)
- **Zadajte farby** — zahrňte farby svojej značky pre konzistentnosť
- **Otestujte vykresľovanie** — overte, že sa logo správne zobrazuje na rôznych veľkostiach obrazovky
- **Ďalej prispôsobte** — použite nástroje WordPress na prispôsobenie loga na úpravu veľkosti a umiestnenia

## Obmedzenia {#limitations}

- SVG logá sa generujú ako statická grafika (nie animované)
- Zložité logá s mnohými prvkami môžu vyžadovať manuálne doladenie
- Vlastné fonty nie sú podporované; text používa systémové fonty
- Veľmi veľké alebo veľmi malé rozmery môžu ovplyvniť kvalitu

## Súvisiace funkcie {#related-abilities}

- [Overiť kontrast palety](./validate-palette-contrast.md) — skontrolujte farebný kontrast z hľadiska prístupnosti
- [Vytvoriť menu](./create-menu.md) — vytvorte navigačné menu pre svoju stránku
