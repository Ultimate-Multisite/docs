---
id: wu_domain_mapping_register_filters
title: Ekintza - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Ekintza: wu_domain_mapping_register_filters

Plugin batzuek URLa gordeko dute mapping-a aktibo egon aurretik, edo URLak goiko iragazkietan sartzen ez den beste modu batean eraikiko dituzte.

Horrelako kasuetan, iragazki gehigarriak gehitu nahi ditugu. Pasatutako bigarren parametroa mangle_url callback-a da. Iragazki hau zuzenean erabiltzea ez dugu gomendatzen. Horren ordez, erabili Domain_Mapping::apply_mapping_to_url metodoa.

## Parametroak

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $mangle_url | `callable` | mangle callable-a. |
| $domain_mapper | `self` | Objektu hau. |

### Noiztik

- 2.0.0
### Iturburua

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) fitxategian definitua, 530. lerroan
