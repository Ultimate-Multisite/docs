---
id: wu_should_create_domain_record_for_site
title: Salain - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site

Sinasala kung dapat gumawa ang Ultimate Multisite ng domain record para sa bagong likhang site.

Gamitin ang filter na ito upang pigilan o ipagpaliban ang awtomatikong paggawa ng domain-record para sa mga site na gumagamit ng pinagsasaluhang base domain ng checkout-form, internal host, o domain na pamamahalaan nang hiwalay ng ibang integration.

## Mga Parameter

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $create | `bool` | Kung dapat gawin ang domain record. |
| $site | `WP_Site` | Ang bagong likhang object ng site. |

### Mula Noong

- 2.13.0

### Pinagmulan

Tinukoy sa `inc/functions/domain.php`.


## Nagbabalik

Boolean na nagsasaad kung gagawin ang domain record.
