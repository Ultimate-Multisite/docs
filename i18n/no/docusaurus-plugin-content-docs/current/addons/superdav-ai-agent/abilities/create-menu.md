---
title: Opprett meny
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Opprett meny {#create-menu}

Funksjonaliteten **Opprett meny** lar deg lage WordPress-navigasjonsmenyer med støtte for separate navigeringsetiketter som skiller seg fra sidetitlene.

## Oversikt {#overview}

Denne funksjonaliteten utvider standard menyoppretting ved å legge til muligheten til å spesifisere en `navigation_label`-parameter. Dette lar deg lage menyer der etiketten som vises i navigasjonen er forskjellig fra sidetittelen, noe som gir større fleksibilitet i nettstedstrukturen og brukeropplevelsen.

## Parametere {#parameters}

| Parameter | Type | Påkrevd | Beskrivelse |
|-----------|------|----------|-------------|
| `name` | string | Ja | Menyens navn, f.eks. `Hovednavigasjon` |
| `location` | string | Nei | Tema-lokasjon for å tildele denne menyen til, f.eks. `primary` |
| `navigation_label` | string | Nei | Etiketten som skal vises i navigasjonen (skiller seg fra sidetittelen) |

## Returverdi {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Navigasjonsetikett vs. Sidetittel {#navigation-label-vs-page-title}

`navigation_label`-parameteren lar deg skille det interne menynavnet fra etiketten som vises for brukerne:

- **`name`** — Internt menyidentifikator brukt av WordPress (f.eks. "Primary Navigation")
- **`navigation_label`** — Etiketten som vises til nettstedets besøkende i navigasjonen (f.eks. "Main Menu")

Dette er nyttig når:
- Din interne navnekonvensjon skiller seg fra etiketter som vises for brukerne
- Du ønsker kortere etiketter i navigasjonen enn i administrasjonspanelet
- Du må støtte flere språk med forskjellige lengder på etiketter
- Du bygger menyer for spesifikke regioner eller brukergrupper

## Brukseksempler {#usage-examples}

### Eksempel 1: Enkel meny med navigasjonsetikett {#example-1-simple-menu-with-navigation-label}

**Prompt:**
```
Opprett en hovednavigasjonsmeny kalt "Main Navigation" med navigasjonsetiketten "Menu".
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

### Eksempel 2: Meny for spesifikk tema-lokasjon {#example-2-menu-for-specific-theme-location}

**Prompt:**
```
Opprett en bunntekstmeny kalt "Footer Links" med navigasjonsetiketten "Quick Links" og tildel den til bunntekstlokasjonen.
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

## Integrasjon med Theme Builder {#integration-with-theme-builder}

Når du bruker Theme Builder, vil funksjonaliteten Opprett meny:

1. Automatisk oppdage tilgjengelige tema-menylokasjoner
2. Opprette menyer med passende navigasjonsetiketter for designet ditt
3. Tildele menyene til de korrekte tema-lokasjonene
4. Støtte tillegg av menyelementer etter oppretting

## Relaterte funksjonaliteter {#related-abilities}

- **`add_menu_item`** — Legg til elementer i en eksisterende meny
- **`update_menu`** — Endre navn på en meny eller tildele den til en annen tema-lokasjon
- **`delete_menu`** — Fjerne en meny fra nettstedet ditt

## Beste praksis {#best-practices}

- **Bruk klare navigasjonsetiketter** — hold etikettene konsise og beskrivende for brukerne
- **Match tema-lokasjoner** — tildel menyene til riktig tema-lokasjon for korrekt visning
- **Planlegg menystrukturen** — bestem deg for menyhierarkiet før du oppretter elementene
- **Test responsivitet** — bekreft at menyene vises riktig på mobile enheter
- **Lokaliser etiketter** — bruk forskjellige navigasjonsetiketter for forskjellige språkversjoner

## Begrensninger {#limitations}

- Navigasjonsetiketter er kun for visning; det interne `name` brukes fortsatt for WordPress-identifikasjon
- Tema-støtten varierer; ikke alle temaer støtter alle menylokasjoner
- Menyelementer må legges til separat etter at menyen er opprettet
- Å endre en navigasjonsetikett krever at menyen oppdateres

## Relaterte funksjonaliteter {#related-abilities-1}

- [Generate Logo SVG](./generate-logo-svg.md) — opprett logoer for nettstedets topptekst
- [Validate Palette Contrast](./validate-palette-contrast.md) — sørg for tilgjengelige fargeskjemaer
