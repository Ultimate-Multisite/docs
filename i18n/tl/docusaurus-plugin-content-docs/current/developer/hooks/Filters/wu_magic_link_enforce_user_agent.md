---
id: wu_magic_link_enforce_user_agent
title: Pansala - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent

I-filter kung ipatutupad ang pag-verify ng user agent.

Itakda sa false upang payagan ang mga token na gumana sa iba't ibang browser/device. Binabawasan nito ang seguridad ngunit pinapataas ang kadalian ng paggamit.

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $enforce | `bool` | Kung ipatutupad ang pagtutugma ng user agent. |

### Mula Noong {#since}

- 2.0.0
### Pinagmulan {#source}

Tinukoy sa [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) sa linya 410
