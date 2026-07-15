---
title: Skep Menu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Menu Skep

Die **Menu Skep** vermoë skep WordPress-navigasie-menu's met ondersteuning vir aparte navigasielabels wat verskil van bladsytitels.

## Oorsig {#overview}

Hierdie vermoë brei die standaard menu-skep funksionaliteit uit met die vermoë om 'n `navigation_label` parameter te spesifiseer. Dit laat jou toe om menu's te skep waar die label wat in die navigasie getoon word, verskil van die bladsytitel, wat meer buigsaamheid in die webwerfstruktuur en gebruikerservaring bied.

## Parameters {#parameters}

| Parameter | Tipe | Verpligtend | Beskrywing |
|-----------|------|----------|-------------|
| `name` | string | Ja | Menu naam, bv. `Hoofnavigasie` |
| `location` | string | Nee | Tema-plek om hierdie menu aan toe te wys, bv. `primary` |
| `navigation_label` | string | Nee | Label om in die navigasie te wys (verskil van bladsytitel) |

## Terugwaardeerwaarde {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Navigasielabel teenoor Bladsytitel {#navigation-label-vs-page-title}

Die `navigation_label` parameter laat jou toe om die interne menu-naam te skei van die label wat aan gebruikers getoon word:

- **`name`** — Interne menu-identifikator wat deur WordPress gebruik word (bv. "Primary Navigation")
- **`navigation_label`** — Die label wat aan webwerfbesoekers in die navigasie getoon word (bv. "Main Menu")

Dit is nuttig wanneer:
- Jou interne benoemingskonvensie verskil van die labels wat aan gebruikers getoon word
- Jy korter labels in die navigasie wil hê as in die admin paneel
- Jy ondersteuning vir verskeie tale met verskillende label-lengtes benodig
- Jy menu's vir spesifieke streke of gebruikersgroepe bou

## Gebruiksvoorbeelde {#usage-examples}

### Voorbeeld 1: Eenvoudige Menu met Navigasielabel {#example-1-simple-menu-with-navigation-label}

**Opdrag:**
```
Skep 'n primêre navigasie-menu genaamd "Hoofnavigasie" met die navigasielabel "Menu".
```

**Resultaat:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Voorbeeld 2: Menu vir Spesifieke Tema-plek {#example-2-menu-for-specific-theme-location}

**Opdrag:**
```
Skep 'n voette-menu genaamd "Voette-skakels" met navigasielabel "Vinnige Skakels" en skakel dit toe aan die voette-plek.
```

**Resultaat:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Integrasie met Tema-bouer {#integration-with-theme-builder}

Wanneer jy Tema-bouer gebruik, dan:

1. Speel out beskikbare tema-menu-plekke
2. Skep menu's met toepaslike navigasielabels vir jou ontwerp
3. Skakel menu's toe aan die korrekte tema-plekke
4. Ondersteun die byvoeging van menu-items ná skep

## Verwante Vermoë {#related-abilities}

- **`add_menu_item`** — Voeg items by tot 'n bestaande menu
- **`update_menu`** — Hernoem 'n menu of skakel dit oor na 'n tema-plek
- **`delete_menu`** — Verwyder 'n menu van jou webwerf

## Beste Praktyke {#best-practices}

- **Gebruik duidelike navigasielabels** — Hou labels bondig en beskrywend vir gebruikers
- **Pas tema-plekke aan** — Skakel menu's toe aan die korrekte tema-plek vir behoorlike vertoning
- **Beplan menu-struktuur** — Besluit oor jou menu-hiërargie voordat jy items skep
- **Toets responsiwiteit** — Verifieer dat menu's korrek op mobiele toestelle vertoon word
- **Lokaliseer labels** — Gebruik verskillende navigasielabels vir verskillende taalweergawes

## Beperkings {#limitations}

- Navigasielabels is slegs vir vertoning; die interne `name` word steeds vir WordPress-identifikasie gebruik
- Tema-ondersteuning varieer; nie alle temas ondersteun alle menu-plekke nie
- Menu-items moet afsonderlik bygevoeg word ná menu-skep
- Om 'n navigasielabel te verander, moet die menu opgedateer word

## Verwante Vermoë {#related-abilities-1}

- [Generate Logo SVG](./generate-logo-svg.md) — skep logo's vir jou webwerf-kop
- [Validate Palette Contrast](./validate-palette-contrast.md) — verseker toeganklike kleurskemas
