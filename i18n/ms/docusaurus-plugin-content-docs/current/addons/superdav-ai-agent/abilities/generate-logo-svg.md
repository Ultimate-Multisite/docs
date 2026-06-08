---
title: Jana Logo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Jana Logo SVG

Keupayaan **Generate Logo SVG** membolehkan Theme Builder mencipta dan menyematkan logo SVG tersuai terus ke laman WordPress anda dengan sanitasi automatik yang selamat ruang nama.

## Gambaran Keseluruhan

Keupayaan ini menjana logo grafik vektor skalabel (SVG) berdasarkan hala tuju jenama dan pilihan reka bentuk tapak anda. SVG yang dijana akan disanitasi secara automatik untuk memastikan ia selamat digunakan dalam WordPress sambil mengekalkan integriti visual.

## Parameter

| Parameter | Jenis | Wajib | Penerangan |
|-----------|------|----------|-------------|
| `site_name` | string | Ya | Nama tapak untuk menjana logo |
| `style` | string | Ya | Gaya reka bentuk (cth., "moden", "klasik", "minimalis", "ceria") |
| `colors` | array | Tidak | Array kod warna heks untuk digunakan dalam logo (cth., `["#678233", "#ffffff"]`) |
| `width` | number | Tidak | Lebar SVG dalam piksel (lalai: 200) |
| `height` | number | Tidak | Tinggi SVG dalam piksel (lalai: 200) |
| `include_text` | boolean | Tidak | Sama ada untuk memasukkan nama tapak sebagai teks dalam logo (lalai: true) |

## Format Output

Keupayaan ini mengembalikan rentetan SVG dengan struktur berikut:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Tingkah Laku Sanitasi SVG

SVG yang dijana akan menjalani sanitasi automatik yang selamat ruang nama untuk:

- **Membuang atribut yang tidak selamat** — membuang pengendali acara, skrip, dan atribut yang berpotensi berbahaya
- **Mengekalkan ruang nama** — mengekalkan ruang nama SVG (xmlns, xlink) untuk paparan yang betul
- **Mengesahkan struktur** — memastikan SVG mematuhi piawaian W3C
- **Mengkodkan entiti** — melarikan aksara khas dengan betul dalam kandungan teks
- **Membuang rujukan luaran** — membuang helaian gaya dan rujukan imej luaran

Ini memastikan SVG selamat untuk disematkan terus dalam WordPress tanpa memerlukan sanitasi tambahan.

## Contoh Penggunaan

**Prompt:**
```
Jana logo moden untuk syarikat permulaan teknologi saya yang dipanggil "CloudSync" menggunakan warna biru dan putih.
```

**Hasil:**
Keupayaan ini mencipta logo SVG yang:
- Memasukkan nama tapak "CloudSync"
- Menggunakan skema warna biru dan putih yang ditetapkan
- Mengikut prinsip reka bentuk moden
- Disanitasi secara automatik dan sedia untuk digunakan

## Integrasi dengan Theme Builder

Apabila menggunakan pemilihan arah reka bentuk Theme Builder, keupayaan Generate Logo SVG:

1. Menganalisis arah reka bentuk dan palet warna anda
2. Menjana logo SVG tersuai yang sepadan dengan pilihan anda
3. Menyematkan logo secara automatik ke kawasan header/jenama tapak anda
4. Menyimpan SVG sebagai logo tersuai dalam media WordPress

## Amalan Terbaik

- **Berikan pilihan gaya yang jelas** — terangkan gaya reka bentuk yang anda mahukan (moden, klasik, ceria, dsb.)
- **Nyatakan warna** — sertakan warna jenama anda untuk konsistensi
- **Uji paparan** — sahkan logo dipaparkan dengan betul merentasi pelbagai saiz skrin
- **Sesuaikan lagi** — gunakan alat penyesuaian logo WordPress untuk melaraskan saiz dan penempatan

## Batasan

- Logo SVG dijana sebagai grafik statik (bukan animasi)
- Logo kompleks dengan banyak elemen mungkin memerlukan penambahbaikan manual
- Fon tersuai tidak disokong; teks menggunakan fon sistem
- Dimensi yang terlalu besar atau terlalu kecil mungkin menjejaskan kualiti

## Keupayaan Berkaitan

- [Validate Palette Contrast](./validate-palette-contrast.md) — semak kontras warna untuk kebolehaksesan
- [Create Menu](./create-menu.md) — cipta menu navigasi untuk tapak anda
