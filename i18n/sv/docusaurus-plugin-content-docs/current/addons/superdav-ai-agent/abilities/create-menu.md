---
title: Skapa meny
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Skapa meny

Funktionen **Skapa meny** skapar WordPress-navigeringsmenyer och stöder distinkta navigeringsetiketter som skiljer sig från sidtitlarna.

## Översikt

Denna funktion utökar standardfunktionaliteten för menyhantering genom att möjliggöra specificering av en `navigation_label`-parameter. Detta gör det möjligt för dig att skapa menyer där etiketten som visas i navigeringen skiljer sig från sidtiteln, vilket ger större flexibilitet i webbplatsstrukturen och användarupplevelsen.

## Parametrar

| Parameter | Typ | Obligatorisk | Beskrivning |
|-----------|------|--------------|-------------|
| `name` | string | Ja | Menyets namn, t.ex. `Huvudnavigering` |
| `location` | string | Nej | Temalokation som ska tilldelas menyn, t.ex. `primary` |
| `navigation_label` | string | Nej | Etiketten som ska visas i navigeringen (skiljer sig från sidtiteln) |

## Returvärde

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Navigeringsetikett vs. Sidtitel

Parametern `navigation_label` låter dig separera det interna menynamnet från etiketten som visas för användarna:

- **`name`** — Internt menyidentifierare som används av WordPress (t.ex. "Primary Navigation")
- **`navigation_label`** — Etiketten som visas för webbplatsbesökare i navigeringen (t.ex. "Main Menu")

Detta är användbart när:
- Din interna namngivningskonvention skiljer sig från etiketter som syns för användaren
- Du vill ha kortare etiketter i navigeringen än i administrationspanelen
- Du behöver stödja flera språk med olika längder på etiketter
- Du bygger menyer för specifika regioner eller användargrupper

## Användningsexempel

### Exempel 1: Enkel meny med navigeringsetikett

**Prompt:**
```
Skapa en huvudnavigering med namnet "Main Navigation" och navigeringsetiketten "Menu".
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

### Exempel 2: Meny för specifik temalokation

**Prompt:**
```
Skapa en sidfotmeny med namnet "Footer Links" och navigeringsetiketten "Quick Links", och tilldela den till sidfotslokationen.
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

## Integration med Theme Builder

När du använder Theme Builder:

1. Detekterar automatiskt tillgängliga temamenylokationer
2. Skapar menyer med lämpliga navigeringsetiketter för din design
3. Tilldelar menyer till de korrekta temalokationerna
4. Stöder tillägg av menyobjekt efter skapandet

## Relaterade funktioner

- **`add_menu_item`** — Lägg till objekt i en befintlig meny
- **`update_menu`** — Byta namn på en meny eller tilldela den till en annan temalokation
- **`delete_menu`** — Ta bort en meny från din webbplats

## Bästa praxis

- **Använd tydliga navigeringsetiketter** — håll etiketterna koncisa och beskrivande för användarna
- **Matcha temalokationer** — tilldela menyer till rätt temalokation för korrekt visning
- **Planera menystrukturen** — bestäm dig för menyns hierarki innan du skapar objekten
- **Testa responsivitet** — verifiera att menyer visas korrekt på mobila enheter
- **Lokalisera etiketter** — använd olika navigeringsetiketter för olika språkversioner

## Begränsningar

- Navigeringsetiketter är endast för visning; det interna `name` används fortfarande för WordPress-identifiering
- Temastödet varierar; inte alla teman stöder alla menylokationer
- Menyobjekt måste läggas till separat efter att menyn har skapats
- Att ändra en navigeringsetikett kräver att du uppdaterar menyn

## Relaterade funktioner

- [Generate Logo SVG](./generate-logo-svg.md) — skapa logotyper för webbplatsens rubrik
- [Validate Palette Contrast](./validate-palette-contrast.md) — säkerställ tillgängliga färgscheman
