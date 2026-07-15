---
id: wu_bypass_unset_current_user
title: Шүүлтүүр - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Шүүлтүүр: wu_bypass_unset_current_user

Хөгжүүлэгчдэд одоогийн хэрэглэгчийг unset хийх кодыг тойрч гарах боломж олгоно.

null-аас өөр ямар нэг зүйл буцаавал нэвтэрсэн одоогийн хэрэглэгчийг unset хийх үйлдлийг тойрч гарна. Энэ нь зарим нөхцөлд хэрэгтэй байж болно, жишээлбэл, админ самбар болгон ашиглаж буй дэд сайтуудтай ажиллах үед.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $null_or_bypass | `mixed` | Үргэлжлүүлэх бол Null, харин өөр ямар ч зүйл байвал үүнийг тойрч гарна. |
| $current_user | `false\|\WP_User` | Одоогийн хэрэглэгчийн объект. |

### Хойш {#since}

- 2.0.11
### Эх сурвалж {#source}

[`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221)-д 221-р мөрөнд тодорхойлсон


## Буцаана {#returns}
