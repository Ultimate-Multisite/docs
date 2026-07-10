---
id: wu_magic_link_invalid_token
title: Action - wu_magic_link_invalid_token
sidebar_label: wu_magic_link_invalid_token
_i18n_hash: 122806eb779ac296404a6984019a9e98
---
# Action: wu_magic_link_invalid_token {#action-wumagiclinkinvalidtoken}

Akkor fut, ha érvénytelen magic link tokenet találunk.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $reason | `string` | Az érvénytelen token oka. |

### Desde {#since}

- 2.0.0
### Forrás {#source}

Meghatározva a [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L326) fájlban a 326. soron.
