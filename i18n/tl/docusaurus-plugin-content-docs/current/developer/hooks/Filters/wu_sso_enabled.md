---
id: wu_sso_enabled
title: Pansala - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled

I-enable/i-disable ang kakayahan sa cross-domain single-sign-on.

I-filter ang halagang ito upang ganap na i-off ang single-sign-on, o sa halip ay kondisyonal na i-enable ito.

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $enabled | `bool` | Dapat bang i-enable ang SSO? True para naka-on, false-ish para naka-off. |

### Mula Noong {#since}

- 2.0.11
### Pinagmulan {#source}

Tinukoy sa [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) sa linya 110


## Mga Ibinabalik {#returns}
Kung naka-enable ang SSO o hindi.
