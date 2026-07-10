---
id: wu_magic_link_enforce_ip
title: Filter - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip {#filter-wumagiclinkenforceip}

Kinokontrol nito kung ipapatupad ba ang pag-verify ng IP address.

Kapag itinakda sa `false`, papayagan ang mga token na gumana kahit sa iba't ibang network. Nababawasan nito ang seguridad pero napapataas naman ang pagiging madaling gamitin (halimbawa, para sa mga gumagamit ng mobile na nagpapalit ng network).

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Kung ipapatupad ba ang pagtutugma ng IP address. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) at line 422
