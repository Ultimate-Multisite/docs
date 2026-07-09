---
id: wu_domain_became_primary
title: Aksi - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Aksi: wu_domain_became_primary {#action-wudomainbecameprimary}

Lumangsung nalika hiji domain jadi domain utama pikeun hiji situs.

Aksi ieu dipicu nalika flag primary_domain hiji domain disetel jadi true, boh nalika nyieun domain utama anyar atawa nalika ngapdet domain anu geus aya supaya jadi utama.

## Paraméter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Domain anu jadi utama. |
| $blog_id | `int` | ID blog tina situs anu kapangaruhan. |
| $was_new | `bool` | Naha ieu domain anu kakara dijieun. |

### Ti mimiti {#since}

- 2.0.0
### Sumber {#source}

Ditetepkeun dina [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) dina garis 560
