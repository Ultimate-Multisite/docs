---
title: Validace kontrastu palety
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Validace kontrastu palety

Funkce **Validace kontrastu palety** kontroluje, zda jsou barevné kombinace v vaší designové paletě shodu s WCAG (Web Content Accessibility Guidelines) předtím, než je aplikujete na svou tému.

## Přehled

Tato funkce zajišťuje, že barevná schéma vašeho webu splňuje standardy pro přístupnost, protože ověřuje kontrastní poměry mezi textem a pozadím. Pomáhá tak zabránit barevným kombinacím, které by mohly být pro uživatele s vizuálními potížemi obtížně čitelné.

## Formát vstupu

Funkce přijímá jako vstup barevnou paletu:

```json
{
  "colors": [
    {
      "name": "primary",
      "hex": "#678233"
    },
    {
      "name": "text",
      "hex": "#ffffff"
    },
    {
      "name": "background",
      "hex": "#f5f5f5"
    }
  ],
  "wcag_level": "AA"
}
```

### Parametry

| Parametr | Typ | Požadováno | Popis |
|-----------|------|----------|-------------|
| `colors` | array | Ano | Pole objektů barev s vlastnostmi `name` a `hex` |
| `wcag_level` | string | Ne | Úroveň shody s WCAG: "A", "AA" (výchozí) nebo "AAA" |
| `pairs_to_check` | array | Ne | Specifické barevné kombinace pro validaci (např. `["primary-text", "background-text"]`) |

## Kontrolované úrovně WCAG

Funkce validuje kontrastní poměry podle standardů WCAG:

| Úroveň | Normální text | Velký text | Minimální poměr |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Normální text** — text menší než 18pt (nebo 14pt tučně)
- **Velký text** — text 18pt nebo větší (nebo 14pt tučně nebo větší)

## Schéma výstupu

Funkce vrátí podrohový zprávu o validaci:

```json
{
  "compliant": true,
  "wcag_level": "AA",
  "pairs": [
    {
      "pair": "primary-text",
      "color1": "#678233",
      "color2": "#ffffff",
      "contrast_ratio": 5.2,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": false,
      "status": "pass"
    },
    {
      "pair": "background-text",
      "color1": "#f5f5f5",
      "color2": "#333333",
      "contrast_ratio": 12.1,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": true,
      "status": "pass"
    }
  ],
  "summary": {
    "total_pairs": 2,
    "passing": 2,
    "failing": 0,
    "recommendations": []
  }
}
```

### Pole výstupu

| Pole | Typ | Popis |
|-------|------|-------------|
| `compliant` | boolean | Zda celá paleta splňuje zadanou úroveň WCAG |
| `wcag_level` | string | Úroveň WCAG, která byla zkontrolována |
| `pairs` | array | Podrobné výsledky pro každou barevnou kombinaci |
| `contrast_ratio` | number | Výpočtený kontrastní poměr (od 1:1 do 21:1) |
| `status` | string | "pass" nebo "fail" pro každou kombinaci |
| `recommendations` | array | Návrhy na vylepšení neshodujících kombinací |

## Příklad použití

**Dotaz:**
```
Zkontrolujte, zda moje barevné schéma splňuje standardy WCAG AA. Mám primární barvu #678233, barvu textu #ffffff a pozadí #f5f5f5.
```

**Výsledek:**
Funkce validuje všechny barevné kombinace a vrátí:
- ✅ Primární + Text: poměr 5.2:1 (splňuje WCAG AA)
- ✅ Pozadí + Text: poměr 12.1:1 (splňuje WCAG AAA)
- Celkově: Splňuje WCAG AA

## Integrace s Theme Builderem

Když používáte výběr směřování designu v Theme Builderu, funkce Validace kontrastu palety:

1. Analyzuje vybranou barevnou paletu
2. Kontroluje všechny kombinace textu a pozadí
3. Validuje vůči vybrané úrovni WCAG
4. Poskytuje doporučení pro neshodující kombinace
5. Zabraňuje aplikaci nedostupných barevných schémat

## Nejlepší praxe

- **Začněte úrovní AA** — WCAG AA je standard pro většinu webových stránek
- **Testujte před aplikací** — validujte svou paletu, než se zavete do designu
- **Zkontrolujte všechny kombinace** — ujistěte se, že text, odkazy a prvky UI splňují standardy
- **Zvažte preference uživatelů** — někteří uživatelé mohou mít dodatečnou citlivost na barvy
- **Používejte kontroléry kontrastu** — zkombinujte tuto funkci s nástroji prohlížeče pro ověření

## Neshodující kombinace a doporučení

Pokud barevná kombinace selže validaci, funkce poskytne doporučení:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Zjasněte barvu textu na #ffffff (poměr by byl 5.2:1)",
    "Ztmavněte barvu pozadí na #556b2f (poměr by byl 4.8:1)",
    "Použijte jinou primární barvu, jako je #4a6b1f (poměr by byl 6.1:1)"
  ]
}
```

## Související funkce

- [Generate Logo SVG](./generate-logo-svg.md) — vytvořte loga pomocí vaší ověřené barevné palety
- [Create Menu](./create-menu.md) — sestavte navigaci s přístupnými barvami
