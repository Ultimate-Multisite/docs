---
title: Ustvari meni
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Ustvari meni

Zmožnost **Ustvari meni** ustvari navigacijske menije WordPress s podporo za ločene navigacijske oznake, ki se razlikujejo od naslovov strani.

## Pregled

Ta zmožnost razširi standardno funkcionalnost ustvarjanja menijev z možnostjo določitve parametra `navigation_label`. To vam omogoča ustvarjanje menijev, pri katerih se oznaka, prikazana v navigaciji, razlikuje od naslova strani, kar zagotavlja več prilagodljivosti pri strukturi spletnega mesta in uporabniški izkušnji.

## Parametri

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Ime menija, npr. `Primary Navigation` |
| `location` | string | No | Lokacija theme, ki ji želite dodeliti ta meni, npr. `primary` |
| `navigation_label` | string | No | Oznaka za prikaz v navigaciji (ločena od naslova strani) |

## Vrnjena vrednost

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Navigacijska oznaka v primerjavi z naslovom strani

Parameter `navigation_label` vam omogoča ločiti interno ime menija od oznake, prikazane uporabnikom:

- **`name`** — Interni identifikator menija, ki ga uporablja WordPress (npr. »Primary Navigation«)
- **`navigation_label`** — Oznaka, prikazana obiskovalcem spletnega mesta v navigaciji (npr. »Glavni meni«)

To je uporabno, kadar:
- Se vaša interna konvencija poimenovanja razlikuje od oznak, prikazanih uporabnikom
- Želite krajše oznake v navigaciji kot v skrbniški plošči
- Morate podpirati več jezikov z različnimi dolžinami oznak
- Gradite menije za določene regije ali skupine uporabnikov

## Primeri uporabe

### Primer 1: Preprost meni z navigacijsko oznako

**Poziv:**
```
Ustvari primarni navigacijski meni z imenom »Glavna navigacija« z navigacijsko oznako »Meni«.
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

### Primer 2: Meni za določeno lokacijo Theme

**Poziv:**
```
Ustvari meni noge z imenom »Povezave v nogi« z navigacijsko oznako »Hitre povezave« in ga dodeli lokaciji noge.
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

## Integracija s Theme Builder

Pri uporabi Theme Builder zmožnost Ustvari meni:

1. Samodejno zazna razpoložljive lokacije menijev theme
2. Ustvari menije z ustreznimi navigacijskimi oznakami za vašo zasnovo
3. Dodeli menije pravilnim lokacijam theme
4. Podpira dodajanje elementov menija po ustvarjanju

## Sorodne zmožnosti

- **`add_menu_item`** — Dodajte elemente v obstoječi meni
- **`update_menu`** — Preimenujte meni ali ga znova dodelite lokaciji theme
- **`delete_menu`** — Odstranite meni s svojega spletnega mesta

## Najboljše prakse

- **Uporabljajte jasne navigacijske oznake** — oznake naj bodo jedrnate in opisne za uporabnike
- **Uskladite lokacije theme** — dodelite menije pravilni lokaciji theme za pravilen prikaz
- **Načrtujte strukturo menija** — določite hierarhijo menija, preden ustvarite elemente
- **Preizkusite odzivnost** — preverite, ali se meniji pravilno prikazujejo na mobilnih napravah
- **Lokalizirajte oznake** — uporabite različne navigacijske oznake za različne jezikovne različice

## Omejitve

- Navigacijske oznake so namenjene samo prikazu; interno `name` se še vedno uporablja za identifikacijo WordPress
- Podpora theme se razlikuje; vse theme ne podpirajo vseh lokacij menijev
- Elemente menija je treba po ustvarjanju menija dodati ločeno
- Sprememba navigacijske oznake zahteva posodobitev menija

## Sorodne zmožnosti

- [Ustvari logotip SVG](./generate-logo-svg.md) — ustvarite logotipe za glavo svojega spletnega mesta
- [Preveri kontrast palete](./validate-palette-contrast.md) — zagotovite dostopne barvne sheme
