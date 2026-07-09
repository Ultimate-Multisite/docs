---
id: wu_use_domain_mapping
title: Saringan - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

Temtokna apa mapping kudu digunakake

Biasane, sampeyan bakal pengin mung ngidini mapping sing aktif kanggo digunakake. Nanging, yen sampeyan pengin nggunakake logika sing luwih maju, utawa ngidini domain sing ora aktif uga bisa dimapping, cukup filter ing kene.

## Parameter

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | Apa mapping kudu dianggep aktif? |
| $mapping | `\Domain` | Mapping sing lagi kita priksa |
| $domain | `string` |  |

### Sumber

Ditetepake ing [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) ing baris 391
