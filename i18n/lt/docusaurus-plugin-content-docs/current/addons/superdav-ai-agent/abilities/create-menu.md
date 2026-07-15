---
title: Sukurti meniu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Sukurti meniu

**Sukurti meniu** galimybė kuria WordPress navigacijos meniu su atskirų navigacijos etikečių, skirtingų nuo puslapių pavadinimų, palaikymu.

## Apžvalga {#overview}

Ši galimybė išplečia standartinę meniu kūrimo funkciją, suteikdama galimybę nurodyti `navigation_label` parametrą. Tai leidžia kurti meniu, kuriuose navigacijoje rodoma etiketė skiriasi nuo puslapio pavadinimo, suteikiant daugiau lankstumo svetainės struktūrai ir naudotojo patirčiai.

## Parametrai {#parameters}

| Parametras | Tipas | Privaloma | Aprašymas |
|-----------|------|----------|-------------|
| `name` | string | Taip | Meniu pavadinimas, pvz., `Primary Navigation` |
| `location` | string | Ne | Temos vieta, kuriai priskirti šį meniu, pvz., `primary` |
| `navigation_label` | string | Ne | Etiketė, rodoma navigacijoje (skirtinga nuo puslapio pavadinimo) |

## Grąžinama reikšmė {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Navigacijos etiketė ir puslapio pavadinimas {#navigation-label-vs-page-title}

`navigation_label` parametras leidžia atskirti vidinį meniu pavadinimą nuo naudotojams rodomos etiketės:

- **`name`** — vidinis meniu identifikatorius, naudojamas WordPress (pvz., „Primary Navigation“)
- **`navigation_label`** — etiketė, rodoma svetainės lankytojams navigacijoje (pvz., „Main Menu“)

Tai naudinga, kai:
- Jūsų vidinė pavadinimų suteikimo tvarka skiriasi nuo naudotojams matomų etikečių
- Norite trumpesnių etikečių navigacijoje nei administravimo skydelyje
- Reikia palaikyti kelias kalbas su skirtingais etikečių ilgiais
- Kuriate meniu konkretiems regionams ar naudotojų grupėms

## Naudojimo pavyzdžiai {#usage-examples}

### 1 pavyzdys: paprastas meniu su navigacijos etikete {#example-1-simple-menu-with-navigation-label}

**Užklausa:**
```
Sukurkite pagrindinės navigacijos meniu pavadinimu „Main Navigation“ su navigacijos etikete „Menu“.
```

**Rezultatas:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### 2 pavyzdys: meniu konkrečiai temos vietai {#example-2-menu-for-specific-theme-location}

**Užklausa:**
```
Sukurkite poraštės meniu pavadinimu „Footer Links“ su navigacijos etikete „Quick Links“ ir priskirkite jį poraštės vietai.
```

**Rezultatas:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Integracija su Theme Builder {#integration-with-theme-builder}

Naudojant Theme Builder, Sukurti meniu galimybė:

1. Automatiškai aptinka prieinamas temos meniu vietas
2. Sukuria meniu su jūsų dizainui tinkamomis navigacijos etiketėmis
3. Priskiria meniu tinkamoms temos vietoms
4. Palaiko meniu elementų pridėjimą po sukūrimo

## Susijusios galimybės {#related-abilities}

- **`add_menu_item`** — pridėti elementų prie esamo meniu
- **`update_menu`** — pervadinti meniu arba iš naujo priskirti jį temos vietai
- **`delete_menu`** — pašalinti meniu iš jūsų svetainės

## Geriausios praktikos {#best-practices}

- **Naudokite aiškias navigacijos etiketes** — etiketės naudotojams turi būti glaustos ir aprašomosios
- **Derinkite su temos vietomis** — priskirkite meniu tinkamai temos vietai, kad jis būtų rodomas teisingai
- **Planuokite meniu struktūrą** — prieš kurdami elementus nuspręskite dėl meniu hierarchijos
- **Patikrinkite prisitaikymą** — įsitikinkite, kad meniu teisingai rodomi mobiliuosiuose įrenginiuose
- **Lokalizuokite etiketes** — skirtingoms kalbų versijoms naudokite skirtingas navigacijos etiketes

## Apribojimai {#limitations}

- Navigacijos etiketės skirtos tik rodymui; vidinis `name` vis tiek naudojamas WordPress identifikavimui
- Temos palaikymas skiriasi; ne visos temos palaiko visas meniu vietas
- Meniu elementai turi būti pridėti atskirai po meniu sukūrimo
- Norint pakeisti navigacijos etiketę, reikia atnaujinti meniu

## Susijusios galimybės {#related-abilities-1}

- [Generuoti logotipo SVG](./generate-logo-svg.md) — kurti logotipus jūsų svetainės antraštei
- [Patikrinti paletės kontrastą](./validate-palette-contrast.md) — užtikrinti prieinamas spalvų schemas
