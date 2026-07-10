---
title: Kreiraj Izbornik
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Kreiranje Menija {#create-menu}

Moćnost **Kreiranje Menija** omogućava kreiranje WordPress navigacijskih menija sa podrškom za različite navigacijske naslove koji su odvojeni od naslova stranica.

## Pregled {#overview}

Ova moćnost proširuje standardnu funkcionalnost kreiranja menija dodavanjem mogućnosti specifikovanja parametra `navigation_label`. To vam omogućava da kreirate menije gdje naslov prikazan u navigaciji drugačije izgleda od naslova stranice, pružajući veću fleksibilnost u strukturi sajta i korisničkom iskustvu.

## Parametri {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Ime menija, npr. `Glavna Navigacija` |
| `location` | string | No | Lokacija teme kojoj se ovaj meni dodjeljuje, npr. `primary` |
| `navigation_label` | string | No | Naslov za prikaz u navigaciji (različit od naslova stranice) |

## Vrijednost povrata {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Navigacijski naslov vs Naslov stranice {#navigation-label-vs-page-title}

Parametar `navigation_label` omogućava da odvojite interno ime menija od naslova koji je prikazan korisnicima:

- **`name`** — Interni identifikator menija koji koristi WordPress (npr. "Primary Navigation")
- **`navigation_label`** — Naslov koji se prikazuje posjetiteljima sajta u navigaciji (npr. "Main Menu")

Ovo je korisno kada:
- Vaša interna konvencija imenovanja drugačije odgovara naslovima koje vide korisnici
- Želite kraće naslove u navigaciji nego u admin panelu
- Trebate podržati više jezika sa različitim dužinama naslova
- Kreirate menije za određene regije ili grupe korisnika

## Primjeri korištenja {#usage-examples}

### Primjer 1: Jednostavan meni sa navigacijskim naslovom {#example-1-simple-menu-with-navigation-label}

**Prompt:**
```
Create a primary navigation menu called "Main Navigation" with the navigation label "Menu".
```

**Rezultat:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Primjer 2: Meni za određenu lokaciju teme {#example-2-menu-for-specific-theme-location}

**Prompt:**
```
Create a footer menu called "Footer Links" with navigation label "Quick Links" and assign it to the footer location.
```

**Rezultat:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Integracija sa Theme Builderom {#integration-with-theme-builder}

Kada koristite Theme Builder, moćnost Kreiranje Menija:

1. Automatski detektuje dostupne lokacije menija teme
2. Kreira menije sa odgovarajućim navigacijskim naslovima za vaš dizajn
3. Dodjeljuje menije ispravnim lokacijama teme
4. Podržava dodavanje stavki menija nakon kreiranja

## Povezane moćnosti {#related-abilities}

- **`add_menu_item`** — Dodaje stavke postojećem meniju
- **`update_menu`** — Promijena imena menija ili ponovno dodjeljivanje na lokaciju teme
- **`delete_menu`** — Uklanja meni sa vašeg sajta

## Najbolje prakse {#best-practices}

- **Koristite jasne navigacijske naslove** — držite naslove kratkim i opisnim za korisnike
- **Poklapajte se sa lokacijama teme** — dodjeljujte menije ispravnim lokacijama teme radi pravilnog prikaza
- **Planirajte strukturu menija** — odlučite o hijerarhiji menija prije kreiranja stavki
- **Testirajte prilagodljivost** — provjerite da li se meniji ispravno prikazuju na mobilnim uređajima
- **Lokalizujte naslove** — koristite različite navigacijske naslove za različite jezične verzije

## Ograničenja {#limitations}

- Navigacijski naslovi su samo za prikaz; interni `name` se i dalje koristi za identifikaciju u WordPressu
- Podrška teme varira; ne sve teme podržavaju sve lokacije menija
- Stavke menija moraju biti dodane zasebno nakon kreiranja menija
- Promjena navigacijskog naslova zahtijeva ažuriranje menija

## Povezane moćnosti {#related-abilities-1}

- [Generate Logo SVG](./generate-logo-svg.md) — kreiranje logotipa za zaglavlje sajta
- [Validate Palette Contrast](./validate-palette-contrast.md) — osiguravanje pristupačnih boja šema
