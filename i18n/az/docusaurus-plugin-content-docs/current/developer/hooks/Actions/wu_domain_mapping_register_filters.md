---
id: wu_domain_mapping_register_filters
title: Aksiya - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

Bəzi pluginlər mapping aktiv olmadan əvvəl URL-ləri yadda saxlayır və ya URL-ləri yuxarıdakı filterlərdə nəzərdə tutulmayan fərqli bir üsulla qururlar.

Belə hallarda, əlavə filterlər əlavə etmək istəyirik. Verilən ikinci parametr `mangle_url` callback-idir. Bu filterdən birbaşa istifadə etməməyimizi tövsiyə edirik. Əvəzində, `Domain_Mapping::apply_mapping_to_url` metodundan istifadə edin.

## Parametrlər {#parameters}

| Ad | Tip | Təsvir |
|------|------|-------------|
| $mangle_url | `callable` | `callable` olan mangle funksiyası. |
| $domain_mapper | `self` | Bu obyekt. |

### Nə vaxtdan {#since}

- 2.0.0
### Mənbə {#source}

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) faylında 530-ci sətirdə təyin olunub
