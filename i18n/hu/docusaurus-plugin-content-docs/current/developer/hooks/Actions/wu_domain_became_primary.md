---
id: wu_domain_became_primary
title: Action - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

Kivitelező, amikor egy domain lesz a weboldal fő domainja.

Ez az action akkor fog kiindulni, amikor egy domain `primary_domain` jelzőjét (flag) igazra állítják, legyen szó egy új fő domain létrehozásáról, vagy egy meglévő domain frissítéséről, hogy az legyen a fő domain.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Az a domain, amely a fő domain lett. |
| $blog_id | `int` | A sikeresen érintett weboldal (blog) ID-je. |
| $was_new | `bool` | Megmutatja, hogy ez egy újonnan létrehozott domain-e. |

### Since {#since}

- 2.0.0
### Source {#source}

Definíciója található [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) fájlban, 560-sorban.
