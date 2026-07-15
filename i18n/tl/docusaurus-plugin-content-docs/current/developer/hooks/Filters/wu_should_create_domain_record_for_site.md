---
id: wu_should_create_domain_record_for_site
title: Filter - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site

Sinasala kung dapat gumawa ang Ultimate Multisite ng rekord ng domain para sa bagong gawang sityo.

Gamitin ang filter na ito upang pigilin o ipagpaliban ang awtomatikong paggawa ng rekord ng domain para sa mga sityong gumagamit ng nakabahaging batayang domain ng form ng pag-checkout, panloob na host, o domain na hiwalay na pamamahalaan ng ibang integrasyon.

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $create | `bool` | Kung dapat gawin ang rekord ng domain. |
| $site | `WP_Site` | Ang bagong gawang object ng sityo. |

### Mula Noong {#since}

- 2.13.0

### Pinagmulan {#source}

Tinukoy sa `inc/functions/domain.php`.


## Mga Ibinabalik {#returns}

Boolean na nagsasaad kung gagawin ang rekord ng domain.
