---
id: wu_domain_became_primary
title: Dejanje - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Dejanje: wu_domain_became_primary {#action-wudomainbecameprimary}

Sproži se, ko domena postane primarna domena za spletno mesto.

To dejanje se sproži, ko je zastavica primary_domain domene nastavljena na true, bodisi ob ustvarjanju nove primarne domene bodisi ob posodobitvi obstoječe domene, da postane primarna.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Domena, ki je postala primarna. |
| $blog_id | `int` | ID bloga prizadetega spletnega mesta. |
| $was_new | `bool` | Ali je to na novo ustvarjena domena. |

### Od različice {#since}

- 2.0.0
### Vir {#source}

Določeno v [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) v vrstici 560
