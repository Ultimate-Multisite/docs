---
id: wu_domain_mapping_register_filters
title: Үйлдэл - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

Зарим plugin-ууд mapping идэвхтэй болохоос өмнө URL-г хадгалах эсвэл дээрх filters-д ороогүй өөр аргаар URLs үүсгэх болно.

Ийм тохиолдолд бид нэмэлт filters нэмэхийг хүсдэг. Дамжуулагдсан хоёр дахь параметр нь mangle_url callback юм. Энэ filter-ийг шууд ашиглахгүй байхыг бид зөвлөж байна. Харин оронд нь Domain_Mapping::apply_mapping_to_url method-ийг ашиглаарай.

## Параметрүүд

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $mangle_url | `callable` | mangle callable. |
| $domain_mapper | `self` | Энэ object. |

### Хувилбараас

- 2.0.0
### Эх сурвалж

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530)-д 530-р мөрөнд тодорхойлсон.
