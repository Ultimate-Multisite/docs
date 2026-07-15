---
id: wu_page_added
title: Amal - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added

Plugin dasturchilariga sahifalar ro‘yxatdan o‘tkazilganda qo‘shimcha ishlarni bajarishga ruxsat beradi.

Faqat muayyan sahifa ko‘rilayotganda ishlaydigan wu_page_load’dan farqli ravishda, bu hook Ultimate Multisite kodi yordamida qo‘shilayotgan har bir admin sahifa uchun ro‘yxatdan o‘tkazish vaqtida ishlaydi.

## Parametrlar {#parameters}

| Nomi | Turi | Tavsif |
|------|------|-------------|
| $page_id | `string` | Ushbu sahifaning IDsi. |
| $page_hook | `string` | Ushbu sahifaning hook nomi. |

### Beri {#since}

- 2.0.0
### Manba {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) faylida 228-qatorda aniqlangan
