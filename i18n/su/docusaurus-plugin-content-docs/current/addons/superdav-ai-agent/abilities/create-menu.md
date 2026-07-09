---
title: Jieun Menu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Jieun Menu

Kamampuhan **Jieun Menu** nyieun menu navigasi WordPress kalayan dukungan pikeun label navigasi anu béda misah ti judul kaca.

## Ringkesan

Kamampuhan ieu ngalegaan fungsionalitas nyieun menu standar ku kamampuhan pikeun nangtukeun parameter `navigation_label`. Ieu ngamungkinkeun anjeun nyieun menu dimana label anu dipintonkeun dina navigasi béda ti judul kaca, nyadiakeun kalenturan leuwih dina struktur situs jeung pangalaman pamaké.

## Parameter

| Parameter | Tipe | Diperlukeun | Pedaran |
|-----------|------|----------|-------------|
| `name` | string | Enya | Ngaran menu, contona `Primary Navigation` |
| `location` | string | Henteu | Lokasi theme pikeun napelkeun menu ieu, contona `primary` |
| `navigation_label` | string | Henteu | Label pikeun dipintonkeun dina navigasi (béda ti judul kaca) |

## Nilai Balik

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Label Navigasi vs Judul Kaca

Parameter `navigation_label` ngamungkinkeun anjeun misahkeun ngaran menu internal ti label anu dipintonkeun ka pamaké:

- **`name`** — Pananda menu internal anu dipaké ku WordPress (contona, "Navigasi Utama")
- **`navigation_label`** — Label anu dipintonkeun ka pangunjung situs dina navigasi (contona, "Menu Utama")

Ieu mangpaat lamun:
- Konvénsi ngaran internal anjeun béda ti label anu katingali ku pamaké
- Anjeun hoyong label anu leuwih pondok dina navigasi tibatan dina panel admin
- Anjeun kudu ngadukung sababaraha basa kalayan panjang label anu béda
- Anjeun keur ngawangun menu pikeun wewengkon atawa kelompok pamaké husus

## Conto Pamakéan

### Conto 1: Menu Basajan kalayan Label Navigasi

**Prompt:**
```
Jieun menu navigasi utama anu dingaranan "Navigasi Utama" kalayan label navigasi "Menu".
```

**Hasil:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Conto 2: Menu pikeun Lokasi Theme Husus

**Prompt:**
```
Jieun menu footer anu dingaranan "Tumbu Footer" kalayan label navigasi "Tumbu Gancang" sarta terapkeun kana lokasi footer.
```

**Hasil:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Integrasi jeung Theme Builder

Nalika maké Theme Builder, kamampuhan Jieun Menu:

1. Sacara otomatis ngadeteksi lokasi menu theme anu sayogi
2. Nyieun menu kalayan label navigasi anu luyu pikeun desain anjeun
3. Napelkeun menu kana lokasi theme anu bener
4. Ngadukung nambihan item menu sanggeus dijieun

## Kamampuhan Patali

- **`add_menu_item`** — Tambahkeun item kana menu anu geus aya
- **`update_menu`** — Ganti ngaran menu atawa pasang deui kana lokasi theme
- **`delete_menu`** — Pupus menu tina situs anjeun

## Prakték Panghadéna

- **Paké label navigasi anu écés** — jaga label singket jeung déskriptif pikeun pamaké
- **Cocogkeun lokasi theme** — pasang menu kana lokasi theme anu bener supaya tampilan luyu
- **Rencanakeun struktur menu** — tangtukeun hierarki menu anjeun saméméh nyieun item
- **Uji responsivitas** — pastikeun menu dipintonkeun kalayan bener dina alat mobile
- **Lokalisasi label** — paké label navigasi anu béda pikeun vérsi basa anu béda

## Watesan

- Label navigasi ngan ukur pikeun tampilan; `name` internal tetep dipaké pikeun idéntifikasi WordPress
- Dukungan theme rupa-rupa; henteu kabéh theme ngadukung sadaya lokasi menu
- Item menu kudu ditambahkeun sacara misah sanggeus nyieun menu
- Ngarobah label navigasi merlukeun ngapdet menu

## Kamampuhan Patali

- [Jieun Logo SVG](./generate-logo-svg.md) — jieun logo pikeun header situs anjeun
- [Validasi Kontras Palét](./validate-palette-contrast.md) — pastikeun skéma warna anu gampang diaksés
