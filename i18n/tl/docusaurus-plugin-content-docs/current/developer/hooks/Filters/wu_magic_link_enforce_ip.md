---
id: wu_magic_link_enforce_ip
title: Salain - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

I-filter kung ipatutupad ang pag-verify ng IP address.

Itakda sa false upang payagan ang tokens na gumana mula sa iba't ibang network. Binabawasan nito ang seguridad ngunit pinapataas ang pagiging madaling gamitin (hal., para sa mga mobile user na nagpapalit ng network).

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $enforce | `bool` | Kung ipatutupad ang pagtutugma ng IP address. |

### Mula noong {#since}

- 2.0.0
### Pinagmulan {#source}

Tinukoy sa [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) sa linya 422
