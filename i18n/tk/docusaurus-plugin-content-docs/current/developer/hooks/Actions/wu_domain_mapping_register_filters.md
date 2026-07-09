---
id: wu_domain_mapping_register_filters
title: Hereket - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Hereket: wu_domain_mapping_register_filters

Käbir pluginler kartalaşdyrma işjeň bolmazdan öň URL-i saklar ýa-da ýokardaky filtrelerde öz içine alynmadyk başga usulda URL-leri gurar.

Şeýle ýagdaýlarda goşmaça filtreler goşmak isleýäris. Geçirilýän ikinji parametr mangle_url callback-dir. Bu filtri gönüden-göni ulanmagy maslahat bermeýäris. Munuň ýerine Domain_Mapping::apply_mapping_to_url usulyny ulanyň.

## Parametrler

| At | Görnüş | Düşündiriş |
|------|------|-------------|
| $mangle_url | `callable` | Mangle callable. |
| $domain_mapper | `self` | Bu obýekt. |

### Şondan bäri

- 2.0.0
### Çeşme

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) içinde, 530-njy setirde kesgitlenen
