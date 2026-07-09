---
title: VAT o‘zgarishlar jurnali
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# VAT o‘zgarishlar jurnali

Versiya 1.0.7 - 2026-02-03 da chiqarildi

* Tuzatish: Germaniya (DE) VAT raqamlari VIES SOAP xizmati MS_MAX_CONCURRENT_REQ xatolari sababli tekshiruvdan o‘tmayotgan edi. Ishonchliroq tekshiruv uchun eski SOAP API dan rasmiy EU VIES REST API ga o‘tildi.
* Tuzatish: VIES xizmati vaqtincha mavjud bo‘lmaganda VAT raqamlari endi noto‘g‘ri rad etilish o‘rniga qabul qilinadi. Keyinroq ko‘rib chiqish uchun jurnal yozuvi yaratiladi.
* Tuzatish: VAT/Soliq ID maydoni endi faqat EU a’zolari uchun emas, barcha mamlakatlar uchun ko‘rinadi. EU bo‘lmagan soliq IDlari (masalan, Shveytsariya CHE raqamlari) VIES tekshiruvisiz invoice ko‘rsatish uchun saqlanadi.
* Tuzatish: Gretsiya (GR), Monako (MC) va Men oroli (IM) uchun VAT prefiksini qidirish noto‘g‘ri massiv qidirish mantiqi sababli ishlamay qolgan edi.
* Yaxshilash: Site Exporter addon bilan birga ishlatilganda fatal errorlarga sabab bo‘lishi mumkin bo‘lgan keraksiz wp-cli-bundle dev bog‘liqligi olib tashlandi.
* Yaxshilash: Keng qamrovli unit test to‘plami qo‘shildi (53 ta test).

Versiya 1.0.6 - 2026-01-25 da chiqarildi

* Tuzatish: Ichki B2B tranzaksiyalar endi VATni to‘g‘ri hisoblaydi. EU VAT qoidalariga ko‘ra, reverse charge faqat transchegaraviy B2B tranzaksiyalarga qo‘llanadi, mijozning mamlakati kompaniya mamlakati bilan bir xil bo‘lganda emas.

Versiya 1.0.5 - 2026-01-22 da chiqarildi

* Tuzatish: Addon yuklanmayotgan yoki to‘g‘ri ishlamayotgan edi.
* O‘zgarish: VAT stavkalari ma’lumot manbasi yanada ishonchli va faol qo‘llab-quvvatlanadigan ma’lumotlar uchun euvatrates.com dan ibericode/vat-rates repositoryga o‘tkazildi.
* Tuzatish: super_reduced_rates option qiymatidagi imlo xatosi tuzatildi.
* Yaxshilash: Xatolarning oldini olish uchun mamlakat kodi bilan ishlashga null tekshiruvlari qo‘shildi.
* O‘zgarish: Traduttore orqali avtomatik yangilanishlar foydasiga paketga kiritilgan tarjima fayllari olib tashlandi.

Versiya: 1.0.3 - 2025-09-28 da chiqarildi

* Prefiks ultimate-multisite ga qayta nomlandi; text domain yangilandi; versiya oshirildi.

Versiya 1.0.0-beta.4 - 2021-09-24

* Qo‘shildi: mu-plugins asosidagi sozlamalar uchun wp_ultimo_skip_network_active_check filter;

Versiya 1.0.0 - 05/08/2021 - Dastlabki reliz
