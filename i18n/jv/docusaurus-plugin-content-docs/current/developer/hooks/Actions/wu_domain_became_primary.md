---
id: wu_domain_became_primary
title: Aksi - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

Mlaku nalika domain dadi domain utama kanggo situs.

Action iki dipicu nalika flag primary_domain sawijining domain disetel dadi true, nalika nggawe domain utama anyar utawa nalika nganyari domain sing wis ana supaya dadi utama.

## Paramèter

| Jeneng | Tipe | Katrangan |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Domain sing dadi utama. |
| $blog_id | `int` | ID blog saka situs sing kena pengaruh. |
| $was_new | `bool` | Apa iki domain sing mentas digawe. |

### Wiwit

- 2.0.0
### Sumber

Ditetepake ing [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) ing baris 560
