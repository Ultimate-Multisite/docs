---
title: Opret menu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Opret menu

**Opret menu**-evnen opretter WordPress-navigationsmenuer med understøttelse af separate navigationsetiketter, der adskiller sig fra sidetitler.

## Oversigt {#overview}

Denne evne udvider standardfunktionaliteten til menuoprettelse med muligheden for at angive en `navigation_label`-parameter. Dette gør det muligt at oprette menuer, hvor etiketten, der vises i navigationen, adskiller sig fra sidetitlen, hvilket giver mere fleksibilitet i webstedets struktur og brugeroplevelse.

## Parametre {#parameters}

| Parameter | Type | Påkrævet | Beskrivelse |
|-----------|------|----------|-------------|
| `name` | string | Ja | Menunavn, f.eks. `Primary Navigation` |
| `location` | string | Nej | Temaplacering, som denne menu skal tildeles, f.eks. `primary` |
| `navigation_label` | string | Nej | Etiket, der skal vises i navigationen (adskilt fra sidetitlen) |

## Returværdi {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Navigationsetiket vs. sidetitel {#navigation-label-vs-page-title}

Parameteren `navigation_label` gør det muligt at adskille det interne menunavn fra etiketten, der vises for brugerne:

- **`name`** — Intern menuidentifikator, der bruges af WordPress (f.eks. "Primary Navigation")
- **`navigation_label`** — Etiketten, der vises for webstedets besøgende i navigationen (f.eks. "Main Menu")

Dette er nyttigt, når:
- Din interne navngivningskonvention adskiller sig fra brugerrettede etiketter
- Du ønsker kortere etiketter i navigationen end i adminpanelet
- Du skal understøtte flere sprog med forskellige etiketlængder
- Du bygger menuer til specifikke regioner eller brugergrupper

## Brugseksempler {#usage-examples}

### Eksempel 1: Enkel menu med navigationsetiket {#example-1-simple-menu-with-navigation-label}

**Prompt:**
```
Opret en primær navigationsmenu kaldet "Main Navigation" med navigationsetiketten "Menu".
```

**Resultat:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Eksempel 2: Menu til specifik temaplacering {#example-2-menu-for-specific-theme-location}

**Prompt:**
```
Opret en sidefodsmenu kaldet "Footer Links" med navigationsetiketten "Quick Links", og tildel den til sidefodsplaceringen.
```

**Resultat:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Integration med Theme Builder {#integration-with-theme-builder}

Når du bruger Theme Builder, vil Opret menu-evnen:

1. Automatisk registrere tilgængelige temamenuplaceringer
2. Oprette menuer med passende navigationsetiketter til dit design
3. Tildele menuer til de korrekte temaplaceringer
4. Understøtte tilføjelse af menupunkter efter oprettelse

## Relaterede evner {#related-abilities}

- **`add_menu_item`** — Føj punkter til en eksisterende menu
- **`update_menu`** — Omdøb en menu, eller tildel den til en anden temaplacering
- **`delete_menu`** — Fjern en menu fra dit websted

## Bedste praksis {#best-practices}

- **Brug tydelige navigationsetiketter** — hold etiketter korte og beskrivende for brugerne
- **Match temaplaceringer** — tildel menuer til den korrekte temaplacering for korrekt visning
- **Planlæg menustruktur** — beslut dit menuhierarki, før du opretter punkter
- **Test responsivitet** — kontrollér, at menuer vises korrekt på mobile enheder
- **Lokaliser etiketter** — brug forskellige navigationsetiketter til forskellige sprogversioner

## Begrænsninger {#limitations}

- Navigationsetiketter er kun til visning; det interne `name` bruges stadig til WordPress-identifikation
- Temaunderstøttelse varierer; ikke alle temaer understøtter alle menuplaceringer
- Menupunkter skal tilføjes separat efter menuoprettelse
- Ændring af en navigationsetiket kræver opdatering af menuen

## Relaterede evner {#related-abilities-1}

- [Generér Logo SVG](./generate-logo-svg.md) — opret logoer til dit websteds header
- [Validér paletkontrast](./validate-palette-contrast.md) — sikr tilgængelige farveskemaer
