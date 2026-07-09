---
id: wu_magic_link_enforce_user_agent
title: Saringan - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Saringan: wu_magic_link_enforce_user_agent {#filter-wumagiclinkenforceuseragent}

Saring apa kudu ngetrapake verifikasi user agent.

Setel dadi false supaya token bisa lumaku ing browser/piranti sing beda-beda. Iki nyuda keamanan nanging nambah kagampangan panggunaan.

## Paramèter {#parameters}

| Jeneng | Jinis | Katrangan |
|------|------|-------------|
| $enforce | `bool` | Apa kudu ngetrapake pencocokan user agent. |

### Wiwit {#since}

- 2.0.0
### Sumber {#source}

Ditetepake ing [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) ing baris 410
