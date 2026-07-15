---
id: wu_domain_mapping_register_filters
title: wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

Bazı eklentiler, eşleme aktif olmadan önce URL'leri kaydedebilir veya yukarıdaki filtrelerde yer almayan farklı bir yöntemle URL oluşturabilir.

Bu gibi durumlarda, ek filtreler eklemek isteriz. Geçirilen ikinci parametre `mangle_url` callback'idir. Bu filtreyi doğrudan kullanmamanızı tavsiye ederiz. Bunun yerine, `Domain_Mapping::apply_mapping_to_url` metodunu kullanın.

## Parametreler {#parameters}

| Ad | Tip | Açıklama |
|------|------|-------------|
| $mangle_url | `callable` | Eşlemeyi değiştiren (mangle) callback. |
| $domain_mapper | `self` | Bu nesne. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) dosyasının 530. satırında tanımlanmıştır.
