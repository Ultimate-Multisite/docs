---
id: wu_make_primary_domain_redirect_url
title: Filter - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Sinusuri (Filters) ang redirect URL pagkatapos gawing primary domain ang isang domain.

Pinapayagan nito ang mga developer na i-customize kung saan ire-redirect ang mga user pagkatapos matagumpay na itakda ang isang domain bilang primary. Sa default, ire-redirect ito sa kasalukuyang URL sa main site, o sa admin URL ng site na binabago.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | Ang default redirect URL. Maaari itong kasalukuyang URL (kung main site) o ang admin URL ng kasalukuyang site. |
| $current_site | `int` | Ang ID ng site na ang domain ay ginagawang primary. |
| $domain | `\Domain` | Ang domain object na ginawang primary. |
| $old_primary_domains | `array` | Array ng mga ID ng mga domain na dati nang primary. |

### Since

- 2.0.0
### Source

Defined in [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) at line 639


## Returns
Ang na-filter na redirect URL.
