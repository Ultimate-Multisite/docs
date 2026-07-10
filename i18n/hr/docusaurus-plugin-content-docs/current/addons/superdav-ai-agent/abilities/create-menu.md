---
title: Stvori izbornik
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Stvori izbornik {#create-menu}

Sposobnost **Stvori izbornik** stvara WordPress navigacijske izbornike s podrškom za zasebne navigacijske oznake odvojene od naslova stranica.

## Pregled {#overview}

Ova sposobnost proširuje standardnu funkcionalnost stvaranja izbornika mogućnošću određivanja parametra `navigation_label`. To vam omogućuje stvaranje izbornika u kojima se oznaka prikazana u navigaciji razlikuje od naslova stranice, pružajući veću fleksibilnost u strukturi web-mjesta i korisničkom iskustvu.

## Parametri {#parameters}

| Parametar | Vrsta | Obavezno | Opis |
|-----------|------|----------|-------------|
| `name` | string | Da | Naziv izbornika, npr. `Primary Navigation` |
| `location` | string | Ne | Lokacija teme kojoj treba dodijeliti ovaj izbornik, npr. `primary` |
| `navigation_label` | string | Ne | Oznaka za prikaz u navigaciji (različita od naslova stranice) |

## Povratna vrijednost {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Navigacijska oznaka naspram naslova stranice {#navigation-label-vs-page-title}

Parametar `navigation_label` omogućuje vam odvajanje internog naziva izbornika od oznake prikazane korisnicima:

- **`name`** — Interni identifikator izbornika koji koristi WordPress (npr. "Primary Navigation")
- **`navigation_label`** — Oznaka prikazana posjetiteljima web-mjesta u navigaciji (npr. "Main Menu")

Ovo je korisno kada:
- Vaša interna konvencija imenovanja razlikuje se od oznaka prikazanih korisnicima
- Želite kraće oznake u navigaciji nego u administratorskoj ploči
- Trebate podržati više jezika s različitim duljinama oznaka
- Gradite izbornike za određene regije ili skupine korisnika

## Primjeri upotrebe {#usage-examples}

### Primjer 1: Jednostavan izbornik s navigacijskom oznakom {#example-1-simple-menu-with-navigation-label}

**Upit:**
```
Stvorite primarni navigacijski izbornik nazvan "Main Navigation" s navigacijskom oznakom "Menu".
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

### Primjer 2: Izbornik za određenu lokaciju teme {#example-2-menu-for-specific-theme-location}

**Upit:**
```
Stvorite izbornik podnožja nazvan "Footer Links" s navigacijskom oznakom "Quick Links" i dodijelite ga lokaciji podnožja.
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

## Integracija s Theme Builder {#integration-with-theme-builder}

Kada koristite Theme Builder, sposobnost Stvori izbornik:

1. Automatski otkriva dostupne lokacije izbornika teme
2. Stvara izbornike s odgovarajućim navigacijskim oznakama za vaš dizajn
3. Dodjeljuje izbornike ispravnim lokacijama teme
4. Podržava dodavanje stavki izbornika nakon stvaranja

## Povezane sposobnosti {#related-abilities}

- **`add_menu_item`** — Dodajte stavke u postojeći izbornik
- **`update_menu`** — Preimenujte izbornik ili ga ponovno dodijelite lokaciji teme
- **`delete_menu`** — Uklonite izbornik sa svog web-mjesta

## Najbolje prakse {#best-practices}

- **Koristite jasne navigacijske oznake** — neka oznake budu sažete i opisne za korisnike
- **Uskladite lokacije teme** — dodijelite izbornike ispravnoj lokaciji teme radi pravilnog prikaza
- **Planirajte strukturu izbornika** — odlučite o hijerarhiji izbornika prije stvaranja stavki
- **Testirajte responzivnost** — provjerite prikazuju li se izbornici ispravno na mobilnim uređajima
- **Lokalizirajte oznake** — koristite različite navigacijske oznake za različite jezične verzije

## Ograničenja {#limitations}

- Navigacijske oznake služe samo za prikaz; interni `name` i dalje se koristi za WordPress identifikaciju
- Podrška teme varira; ne podržavaju sve teme sve lokacije izbornika
- Stavke izbornika moraju se dodati zasebno nakon stvaranja izbornika
- Promjena navigacijske oznake zahtijeva ažuriranje izbornika

## Povezane sposobnosti {#related-abilities-1}

- [Generiraj Logo SVG](./generate-logo-svg.md) — stvorite logotipe za zaglavlje svog web-mjesta
- [Provjeri kontrast palete](./validate-palette-contrast.md) — osigurajte pristupačne sheme boja
