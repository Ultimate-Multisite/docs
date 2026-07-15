---
title: Sayt eksportchisi o‘zgarishlar jurnali
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Site Exporter o‘zgarishlar jurnali

Versiya: 1.0.6 - 2026-05-11 da chiqarilgan
* Yangi: Site eksportlari endi o‘zi ishga tushadigan index.php faylini ham paketlaydi, shuning uchun ZIP alohida plugin o‘rnatmasdan yangi hostga o‘rnatilishi mumkin
* Yangi: Tarmoq eksporti administratorlarga Site Export admin sahifasidan barcha quyi site’larni bitta arxivga eksport qilish imkonini beradi

Versiya: 1.0.5 - 2026-05-05 da chiqarilgan
* Tuzatish: get_config kabi mock qilinmagan metodlarni boshqarish va test bootstrap xatolarining oldini olish uchun WP_CLI polyfill stub’iga __callStatic qo‘shildi

Versiya: 1.0.4 - 2025-11-25 da chiqarilgan

* Ultimate Multisite 2.4 bilan moslik tuzatildi.

Versiya: 1.0.2 - 2025-09-28 da chiqarilgan

* Prefiks ultimate-multisite ga o‘zgartirildi; matn domeni yangilandi; versiya oshirildi.

### Versiya 1.0.1 - 2023-08-09 da chiqarilgan {#version-101---released-on-2023-08-09}

* Yaxshilandi: Endi importer faylining to‘g‘ri fayl yo‘li olinishi ta’minlanadi.
* Tuzatildi: Import paytida xatolarning oldini olish uchun obyekt keshi o‘chirib qo‘yildi.
* Tuzatildi: Importer plugin yuklab olish havolasi ishlamasligi muammosi tuzatildi.

### Versiya 1.0.0 - 2022-12-23 da chiqarilgan {#version-100---released-on-2022-12-23}

* Tuzatildi: Eksport formasi popup’i yuklanmayotgani;
* Tuzatildi: Eksport sahifasida Javascript fayllari yuklanmayotgani;
* Ichki: Yangi build jarayoni;

### Versiya 1.0.0-beta.4 - 2022-01-13 da chiqarilgan {#version-100-beta4---released-on-2022-01-13}

* Ichki: Hooks va filterlar generatori qo‘shildi;
* Ichki: Dasturchi qulayligi uchun WP Ultimo stub’lari qo‘shildi;
