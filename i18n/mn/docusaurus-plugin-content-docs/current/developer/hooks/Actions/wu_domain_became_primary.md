---
id: wu_domain_became_primary
title: Үйлдэл - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Үйлдэл: wu_domain_became_primary {#action-wudomainbecameprimary}

Домэйн нь сайтын үндсэн домэйн болох үед ажиллана.

Энэ үйлдэл нь шинэ үндсэн домэйн үүсгэх эсвэл одоо байгаа домэйныг үндсэн болгохоор шинэчлэх үед домэйны primary_domain туг true болгож тохируулахад өдөөгдөнө.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Үндсэн болсон домэйн. |
| $blog_id | `int` | Нөлөөлөлд өртсөн сайтын блогийн ID. |
| $was_new | `bool` | Энэ нь шинээр үүсгэсэн домэйн эсэх. |

### Хувилбараас {#since}

- 2.0.0
### Эх сурвалж {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560)-д 560-р мөрөнд тодорхойлсон
