---
id: wu_domain_became_primary
title: Radnja - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Akcija: wu_domain_became_primary {#action-wudomainbecameprimary}

Pokreće se kada domena postane primarna domena za web-mjesto.

Ova akcija se aktivira kada se oznaka primary_domain domene postavi na true, bilo pri stvaranju nove primarne domene ili pri ažuriranju postojeće domene kako bi postala primarna.

## Parametri {#parameters}

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Domena koja je postala primarna. |
| $blog_id | `int` | ID bloga zahvaćenog web-mjesta. |
| $was_new | `bool` | Je li ovo novostvorena domena. |

### Od verzije {#since}

- 2.0.0
### Izvor {#source}

Definirano u [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) u retku 560
