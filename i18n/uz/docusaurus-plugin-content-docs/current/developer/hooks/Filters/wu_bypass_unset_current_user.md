---
id: wu_bypass_unset_current_user
title: Filtr - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filtr: wu_bypass_unset_current_user {#filter-wubypassunsetcurrentuser}

Dasturchilarga joriy foydalanuvchini bekor qilish kodini chetlab o‘tishga ruxsat beradi.

Null’dan boshqa har qanday narsa qaytarilsa, tizimga kirgan joriy foydalanuvchini bekor qilish chetlab o‘tiladi. Bu ayrim holatlarda foydali bo‘lishi mumkin, masalan, admin panellari sifatida ishlatilayotgan quyi saytlar bilan ishlaganda.

## Parametrlar {#parameters}

| Nomi | Turi | Tavsif |
|------|------|-------------|
| $null_or_bypass | `mixed` | Davom etish uchun null, uni chetlab o‘tish uchun esa boshqa har qanday qiymat. |
| $current_user | `false\|\WP_User` | Joriy foydalanuvchi obyekti. |

### Dan boshlab {#since}

- 2.0.11
### Manba {#source}

[`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) faylida, 221-qatorda aniqlangan


## Qaytaradi {#returns}
