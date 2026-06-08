---
title: Generovat SVG logo
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Generování SVG loga

Funkce **Generování SVG loga** umožňuje Theme Builder vytvořit a vložit vlastní SVG logo přímo na váš WordPress web a zároveň provést automatickou sanitizaci, aby bylo bezpečné použití.

## Přehled

Tato funkce generuje škálovatelné vektorové grafiky (SVG) loga na základě vizuální identity a designových preferencí vašeho webu. Vytvořená SVG loga jsou automaticky sanitizována, aby byla bezpečná pro použití v WordPressu, ale zároveň zachovaly vizuální integritu.

## Parametry

| Parametr | Typ | Požadováno | Popis |
|-----------|------|----------|-------------|
| `site_name` | string | Ano | Název webu, pro který se logo generuje |
| `style` | string | Ano | Designový styl (např. "moderní", "klasický", "minimalistický", "hravý") |
| `colors` | array | Ne | Pole hex kódů barev, které se použijí v logu (např. `["#678233", "#ffffff"]`) |
| `width` | number | Ne | Šířka SVG v pixelech (výchozí: 200) |
| `height` | number | Ne | Výška SVG v pixelech (výchozí: 200) |
| `include_text` | boolean | Ne | Zda má logo obsahovat název webu jako text (výchozí: true) |

## Formát výstupu

Funkce vrátí SVG řetězec se následující strukturou:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Chování sanitizace SVG

Vytvořená SVG loga procházejí automatickou sanitizací, která je bezpečná ohledně namespace. To zajistí:

- **Odstranění nebezpečných atributů** — odstraní se událostní háčky, skripty a potenciálně nebezpečné atributy
- **Zachování namespace** — udržuje se SVG namespace (xmlns, xlink) pro správné vykreslení
- **Validace struktury** — zajišťuje, že SVG odpovídá standardům W3C
- **Kódování entit** — správně escapuje speciální znaky v textovém obsahu
- **Odstranění externích odkazů** — odstraní se externí styly a odkazy na obrázky

Tím se zajistí, že SVG je bezpečné k vložení přímo do WordPressu bez nutnosti dodatečné sanitizace.

## Příklad použití

**Prompt:**
```
Generuj moderní logo pro můj tech startup jménem "CloudSync" pomocí modré a bílé barevy.
```

**Výsledek:**
Funkce vytvoří SVG logo, které:
- Zahrnuje název webu "CloudSync"
- Používá zadanou modro-bílou barevnou škálu
- Dodržuje moderní designové principy
- Je automaticky sanitizováno a připraveno k použití

## Integrace s Theme Builderem

Při použití výběru designové směrnice v Theme Builderu funkce Generování SVG loga:

1. Analyzuje váš designový směr a barevnou paletu
2. Vytvoří vlastní SVG logo odpovídající vašim preferencím
3. Automaticky vloží logo do hlavičky/sekce značky vašeho webu
4. Uloží SVG jako vlastní logo do médiátkové knihovny WordPressu

## Nejlepší praxe

- **Poskytujte jasné preferenční styly** — popište designový styl, který chcete (moderní, klasický, hravý atd.)
- **Specifikujte barvy** — zahrňte barvy vaší značky pro konzistenci
- **Testujte vykreslování** — ověřte, že logo se správně zobrazuje na různých velikostech obrazovky
- **Dále přizpůsobte** — použijte nástroje pro přizpůsobení loga v WordPressu k úpravě velikosti a umístění

## Omezení

- SVG loga jsou generována jako statické grafiky (neanimované)
- Složité loga s mnoha prvky mohou vyžadovat ruční úpravu
- Není podporováno použití vlastních fontů; text používá systémové fonty
- Velmi velké nebo velmi malé rozměry mohou ovlivnit kvalitu

## Související funkce

- [Validate Palette Contrast](./validate-palette-contrast.md) — kontrola kontrastu barev pro přístupnost
- [Create Menu](./create-menu.md) — vytváření navigačních menu pro váš web
