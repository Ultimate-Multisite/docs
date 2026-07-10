---
title: Gawe Logo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Ngasilake Logo SVG {#generate-logo-svg}

Kabisan **Ngasilake Logo SVG** ngidini Theme Builder nggawe lan masang SVG logo kustom langsung menyang situs WordPress sampeyan nganggo sanitasi otomatis sing aman kanggo namespace.

## Ringkesan {#overview}

Kabisan iki ngasilake logo scalable vector graphics (SVG) adhedhasar arah branding lan pilihan desain situs sampeyan. SVG sing diasilake otomatis disanitasi kanggo mesthekake aman digunakake ing WordPress nalika tetep njaga integritas visual.

## Parameter {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `site_name` | string | Ya | Jeneng situs sing arep digawekake logo |
| `style` | string | Ya | Gaya desain (umpamane, "modern", "classic", "minimalist", "playful") |
| `colors` | array | Ora | Array kode warna hex sing arep digunakake ing logo (umpamane, `["#678233", "#ffffff"]`) |
| `width` | number | Ora | Ambane SVG ing piksel (gawan: 200) |
| `height` | number | Ora | Dhuwure SVG ing piksel (gawan: 200) |
| `include_text` | boolean | Ora | Apa jeneng situs dilebokake minangka teks ing logo (gawan: true) |

## Format Output {#output-format}

Kabisan iki mbalekake string SVG kanthi struktur ing ngisor iki:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Prilaku Sanitasi SVG {#svg-sanitisation-behaviour}

SVG sing diasilake ngalami sanitasi otomatis sing aman kanggo namespace kanggo:

- **Mbusak atribut sing ora aman** — mbusak event handler, skrip, lan atribut sing bisa mbebayani
- **Njaga namespace** — njaga namespace SVG (xmlns, xlink) supaya rendering bener
- **Validasi struktur** — mesthekake SVG cocog karo standar W3C
- **Encode entitas** — ng-escape karakter khusus ing isi teks kanthi bener
- **Mbusak referensi eksternal** — mbusak stylesheet eksternal lan referensi gambar

Iki mesthekake SVG aman kanggo dipasang langsung ing WordPress tanpa mbutuhake sanitasi tambahan.

## Tuladha Panggunaan {#usage-example}

**Prompt:**
```
Gawekna logo modern kanggo startup teknologi kula sing jenenge "CloudSync" nganggo warna biru lan putih.
```

**Asil:**
Kabisan iki nggawe logo SVG sing:
- Nggabungake jeneng situs "CloudSync"
- Nggunakake skema warna biru lan putih sing wis ditemtokake
- Ngetutake prinsip desain modern
- Otomatis disanitasi lan siap digunakake

## Integrasi karo Theme Builder {#integration-with-theme-builder}

Nalika nggunakake pilihan arah desain saka Theme Builder, kabisan Ngasilake Logo SVG:

1. Nganalisis arah desain lan palet warna sampeyan
2. Ngasilake logo SVG kustom sing cocog karo pilihan sampeyan
3. Otomatis masang logo menyang area header/branding situs sampeyan
4. Nyimpen SVG minangka logo kustom ing media WordPress

## Praktik Paling Apik {#best-practices}

- **Wenehana pilihan gaya sing cetha** — jelasna gaya desain sing sampeyan karepake (modern, klasik, playful, lsp.)
- **Temtokake warna** — lebokna warna brand sampeyan supaya konsisten
- **Tes rendering** — priksa manawa logo katon kanthi bener ing macem-macem ukuran layar
- **Kustomisasi luwih lanjut** — gunakake piranti kustomisasi logo WordPress kanggo nyetel ukuran lan panggonan

## Watesan {#limitations}

- Logo SVG diasilake minangka grafis statis (ora animasi)
- Logo kompleks kanthi akeh unsur bisa mbutuhake panyempurnaan manual
- Font kustom ora didhukung; teks nggunakake font sistem
- Dimensi sing gedhe banget utawa cilik banget bisa mengaruhi kualitas

## Kabisan Gegandhengan {#related-abilities}

- [Validasi Kontras Palet](./validate-palette-contrast.md) — mriksa kontras warna kanggo aksesibilitas
- [Nggawe Menu](./create-menu.md) — nggawe menu navigasi kanggo situs sampeyan
