---
id: wu_domain_became_primary
title: Akcija - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

Pokreće se kada domen postane primarni domen za lokaciju (site).

Ova akcija se pokreće kada se flag `primary_domain` domena postavi na `true`, bilo prilikom kreiranja novog primarnog domena ili prilikom ažuriranja postojećeg domena da postane primarni.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Domen koji je postao primarni. |
| $blog_id | `int` | ID bloga lokacije koja je pogođena. |
| $was_new | `bool` | Da li je ovo domen koji je tek kreiran. |

### Since {#since}

- 2.0.0
### Source {#source}

Definisano u [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) na liniji 560
