---
title: Menýu döret
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Menýu döretmek {#create-menu}

**Menýu döretmek** ukyby, sahypa atlaryndan aýry aýratyn nawigasiýa belliklerini goldamak bilen WordPress nawigasiýa menýularyny döredýär.

## Umumy syn {#overview}

Bu ukyp adaty menýu döretmek funksiýasyny `navigation_label` parametrini görkezmek mümkinçiligi bilen giňeldýär. Bu, nawigasiýada görkezilýän bellik sahypa adyndan tapawutlanýan menýulary döretmäge mümkinçilik berýär we sahypa gurluşynda hem-de ulanyjy tejribesinde has köp çeýelik berýär.

## Parametrler {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Menýu ady, mysal üçin `Primary Navigation` |
| `location` | string | No | Bu menýuny bellemek üçin tema ýerleşişi, mysal üçin `primary` |
| `navigation_label` | string | No | Nawigasiýada görkeziljek bellik (sahypa adyndan tapawutly) |

## Gaýtarylýan baha {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Nawigasiýa belligi bilen sahypa adynyň tapawudy {#navigation-label-vs-page-title}

`navigation_label` parametri içerki menýu adyny ulanyjylara görkezilýän bellikden aýyrmaga mümkinçilik berýär:

- **`name`** — WordPress tarapyndan ulanylýan içerki menýu kesgitleýjisi (mysal üçin, "Primary Navigation")
- **`navigation_label`** — Sahypa girýänlere nawigasiýada görkezilýän bellik (mysal üçin, "Main Menu")

Bu aşakdaky ýagdaýlarda peýdalydyr:
- Içerki atlandyryş düzgünleriňiz ulanyja görünýän belliklerden tapawutlanýan bolsa
- Nawigasiýada admin panelindäkiden has gysga bellikler isleýän bolsaňyz
- Dürli bellik uzynlyklary bolan birnäçe dili goldamaly bolsaňyz
- Belli sebitler ýa-da ulanyjy toparlary üçin menýular gurýan bolsaňyz

## Ulanyş mysallary {#usage-examples}

### Mysal 1: Nawigasiýa belligi bolan ýönekeý menýu {#example-1-simple-menu-with-navigation-label}

**Sorag:**
```
"Main Navigation" atly esasy nawigasiýa menýusyny "Menu" nawigasiýa belligi bilen dörediň.
```

**Netije:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Mysal 2: Belli tema ýerleşişi üçin menýu {#example-2-menu-for-specific-theme-location}

**Sorag:**
```
"Footer Links" atly aşaky bölüm menýusyny "Quick Links" nawigasiýa belligi bilen dörediň we ony aşaky bölüm ýerleşişine belläň.
```

**Netije:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Theme Builder bilen integrasiýa {#integration-with-theme-builder}

Theme Builder ulanylanda, Menýu döretmek ukyby:

1. Elýeterli tema menýu ýerleşişlerini awtomatik kesgitleýär
2. Dizaýnyňyz üçin degişli nawigasiýa bellikleri bilen menýular döredýär
3. Menýulary dogry tema ýerleşişlerine belleýär
4. Döredilenden soň menýu elementlerini goşmagy goldaýar

## Baglanyşykly ukyplar {#related-abilities}

- **`add_menu_item`** — Bar bolan menýua elementler goşuň
- **`update_menu`** — Menýunyň adyny üýtgediň ýa-da ony tema ýerleşişine täzeden belläň
- **`delete_menu`** — Sahypaňyzdan menýuny aýyryň

## Iň gowy tejribeler {#best-practices}

- **Düşnükli nawigasiýa belliklerini ulanyň** — bellikleri ulanyjylar üçin gysga we düşündiriji saklaň
- **Tema ýerleşişlerine laýyk getiriň** — dogry görkezilmegi üçin menýulary degişli tema ýerleşişine belläň
- **Menýu gurluşyny meýilleşdiriň** — elementleri döretmezden öň menýu iýerarhiýaňyzy kesgitläň
- **Uýgunlaşyjylygy synagdan geçiriň** — menýularyň mobil enjamlarda dogry görkezilýändigini barlaň
- **Bellikleri lokallaşdyryň** — dürli dil wersiýalary üçin dürli nawigasiýa belliklerini ulanyň

## Çäklendirmeler {#limitations}

- Nawigasiýa bellikleri diňe görkezmek üçindir; içerki `name` henizem WordPress kesgitlemesi üçin ulanylýar
- Tema goldawy üýtgäp biler; ähli temalar ähli menýu ýerleşişlerini goldamaýar
- Menýu elementleri menýu döredilenden soň aýratyn goşulmalydyr
- Nawigasiýa belligini üýtgetmek menýuny täzelemegi talap edýär

## Baglanyşykly ukyplar {#related-abilities-1}

- [Logo SVG döretmek](./generate-logo-svg.md) — sahypaňyzyň header-i üçin logotipler dörediň
- [Palitra kontrastyny barlamak](./validate-palette-contrast.md) — elýeterli reňk shemalaryny üpjün ediň
