---
id: wu_domain_mapping_register_filters
title: Action - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Acțiune: wu_domain_mapping_register_filters

Unele plugin-uri pot salva URL-uri înainte ca mapping-ul să fie activ sau pot construi URL-uri într-un mod diferit, care nu este inclus în filtrele de mai sus.

În astfel de cazuri, dorim să adăugăm filtre suplimentare. Al doilea parametru transmis este callback-ul `mangle_url`. Vă recomandăm să nu folosiți acest filtru direct. În schimb, folosiți metoda `Domain_Mapping::apply_mapping_to_url`.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $mangle_url | `callable` | Callback-ul de "mangling". |
| $domain_mapper | `self` | Această instanță. |

### De la {#since}

- 2.0.0
### Sursă {#source}

Definit în [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) la linia 530
