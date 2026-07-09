---
id: wu_make_primary_domain_redirect_url
title: Pansala - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

Sinasala ang redirect URL pagkatapos gawing primary ang domain.

Pinapayagan ang mga developer na i-customize kung saan ire-redirect ang mga user pagkatapos matagumpay na maitakda ang domain bilang primary. Bilang default, nagre-redirect sa kasalukuyang URL sa pangunahing site, o sa admin URL ng site na binabago.

## Mga Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | Ang default na redirect URL. Alinman sa kasalukuyang URL (kung pangunahing site) o ang admin URL ng kasalukuyang site. |
| $current_site | `int` | Ang ID ng site na ang domain ay ginagawang primary. |
| $domain | `\Domain` | Ang object ng domain na ginawang primary. |
| $old_primary_domains | `array` | Array ng mga ID ng mga domain na dating primary. |

### Mula Noong {#since}

- 2.0.0
### Pinagmulan {#source}

Tinukoy sa [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) sa linya 639


## Mga Ibinabalik {#returns}
Ang na-filter na redirect URL.
