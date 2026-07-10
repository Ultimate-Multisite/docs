---
id: wu_domain_became_primary
title: Ekintza - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Ekintza: wu_domain_became_primary {#action-wudomainbecameprimary}

Domeinu bat gune baten domeinu nagusi bihurtzen denean abiarazten da.

Ekintza hau abiarazten da domeinu baten primary_domain bandera true gisa ezartzen denean, bai domeinu nagusi berri bat sortzean, bai lehendik dagoen domeinu bat nagusi bihurtzeko eguneratzean.

## Parametroak {#parameters}

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Nagusi bihurtu den domeinua. |
| $blog_id | `int` | Eragindako gunearen blog IDa. |
| $was_new | `bool` | Domeinu sortu berria den ala ez. |

### Noiztik {#since}

- 2.0.0
### Iturburua {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) fitxategian definitua, 560. lerroan.
