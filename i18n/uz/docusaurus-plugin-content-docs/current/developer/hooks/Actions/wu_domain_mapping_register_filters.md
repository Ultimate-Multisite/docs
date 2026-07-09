---
id: wu_domain_mapping_register_filters
title: Amal - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Harakat: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

Ba'zi plaginlar mapping faol bo‘lishidan oldin URLni saqlaydi yoki URLlarni yuqoridagi filtrlarga kiritilmagan boshqa usulda yaratadi.

Bunday hollarda qo‘shimcha filtrlar qo‘shmoqchimiz. Uzatiladigan ikkinchi parametr mangle_url callback funksiyasidir. Bu filtrdan bevosita foydalanmaslikni tavsiya qilamiz. Buning o‘rniga Domain_Mapping::apply_mapping_to_url metodidan foydalaning.

## Parametrlar {#parameters}

| Nomi | Turi | Tavsif |
|------|------|-------------|
| $mangle_url | `callable` | mangle callable. |
| $domain_mapper | `self` | Ushbu obyekt. |

### Versiyadan boshlab {#since}

- 2.0.0
### Manba {#source}

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) faylida 530-qatorda aniqlangan
