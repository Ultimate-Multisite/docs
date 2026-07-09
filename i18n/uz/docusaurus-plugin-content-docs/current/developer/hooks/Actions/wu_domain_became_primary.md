---
id: wu_domain_became_primary
title: Amal - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary {#action-wudomainbecameprimary}

Domen sayt uchun asosiy domen bo‘lganda ishga tushadi.

Bu action domenning primary_domain flag qiymati true qilib o‘rnatilganda ishga tushadi: yangi asosiy domen yaratilganda yoki mavjud domen asosiy bo‘lishi uchun yangilanganda.

## Parametrlar {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Asosiy bo‘lgan domen. |
| $blog_id | `int` | Ta’sirlangan saytning blog ID qiymati. |
| $was_new | `bool` | Bu yangi yaratilgan domenmi yoki yo‘qmi. |

### Versiyadan beri {#since}

- 2.0.0
### Manba {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) faylida, 560-qatorda belgilangan.
