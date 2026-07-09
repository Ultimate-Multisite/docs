---
title: Gawe Menu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Gawe Menu

Kemampuan **Gawe Menu** nggawe menu navigasi WordPress kanthi dhukungan kanggo label navigasi sing kapisah saka irah-irahan kaca.

## Ringkesan

Kemampuan iki ngluwihi fungsionalitas standar nggawe menu kanthi kemampuan kanggo nemtokake paramèter `navigation_label`. Iki ngidini sampeyan nggawe menu ing ngendi label sing ditampilake ing navigasi béda saka irah-irahan kaca, menehi keluwesan luwih gedhé ing struktur situs lan pengalaman pangguna.

## Paramèter

| Paramèter | Jinis | Wajib | Katrangan |
|-----------|------|----------|-------------|
| `name` | string | Ya | Jeneng menu, umpamané `Primary Navigation` |
| `location` | string | Ora | Lokasi theme kanggo masrahake menu iki, umpamané `primary` |
| `navigation_label` | string | Ora | Label kanggo ditampilake ing navigasi (béda saka irah-irahan kaca) |

## Nilai Balikan

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Label Navigasi vs Irah-irahan Kaca

Paramèter `navigation_label` ngidini sampeyan misahake jeneng menu internal saka label sing ditampilake marang pangguna:

- **`name`** — Pengenal menu internal sing digunakake dening WordPress (umpamané, "Primary Navigation")
- **`navigation_label`** — Label sing ditampilake marang pengunjung situs ing navigasi (umpamané, "Main Menu")

Iki migunani nalika:
- Konvensi panjenengan kanggo jeneng internal béda saka label sing katon kanggo pangguna
- Panjenengan kepengin label sing luwih cekak ing navigasi tinimbang ing panel admin
- Panjenengan kudu ndhukung pirang-pirang basa kanthi dawa label sing béda-béda
- Panjenengan nggawe menu kanggo wilayah tartamtu utawa kelompok pangguna tartamtu

## Tuladha Panggunaan

### Tuladha 1: Menu Prasaja nganggo Label Navigasi

**Prompt:**
```
Gawe menu navigasi utama sing dijenengi "Main Navigation" nganggo label navigasi "Menu".
```

**Asil:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Tuladha 2: Menu kanggo Lokasi Theme Tartamtu

**Prompt:**
```
Gawe menu footer sing dijenengi "Footer Links" nganggo label navigasi "Quick Links" lan pasrahake menyang lokasi footer.
```

**Asil:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Integrasi karo Theme Builder

Nalika nggunakake Theme Builder, kemampuan Gawe Menu:

1. Kanthi otomatis ndeteksi lokasi menu theme sing kasedhiya
2. Nggawe menu nganggo label navigasi sing cocog kanggo desain panjenengan
3. Masrahake menu menyang lokasi theme sing bener
4. Ndhukung nambah item menu sawise digawe

## Kemampuan Gegandhengan

- **`add_menu_item`** — Nambah item menyang menu sing wis ana
- **`update_menu`** — Ngganti jeneng menu utawa masrahake maneh menyang lokasi theme
- **`delete_menu`** — Mbusak menu saka situs panjenengan

## Praktik Paling Apik

- **Gunakake label navigasi sing cetha** — jaga supaya label ringkes lan nerangake kanggo pangguna
- **Cocogake lokasi theme** — pasrahake menu menyang lokasi theme sing bener supaya tampilan trep
- **Rancang struktur menu** — putusake hirarki menu panjenengan sadurunge nggawe item
- **Tes responsivitas** — priksa manawa menu tampil kanthi bener ing piranti seluler
- **Lokalisasi label** — gunakake label navigasi sing béda kanggo versi basa sing béda

## Watesan

- Label navigasi mung kanggo tampilan; `name` internal isih digunakake kanggo identifikasi WordPress
- Dhukungan theme béda-béda; ora kabeh theme ndhukung kabeh lokasi menu
- Item menu kudu ditambahake kapisah sawise menu digawe
- Ngganti label navigasi mbutuhake nganyari menu

## Kemampuan Gegandhengan

- [Gawe Logo SVG](./generate-logo-svg.md) — nggawe logo kanggo header situs panjenengan
- [Validasi Kontras Palet](./validate-palette-contrast.md) — mesthekake skema werna sing bisa diakses
