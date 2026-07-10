---
id: wu_magic_link_enforce_user_agent
title: Szűrő - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Szűrő: wu_magic_link_enforce_user_agent {#filter-wumagiclinkenforceuseragent}

Döntheti el, hogy kötelező legyen-e a felhasználói üzenet (user agent) ellenőrzése.

Ha `false`-ra állítja, akkor a tokenek különböző böngészőkre/alkalmazásokra is érvényesek maradnak. Ez csökkenti a biztonságot, de növeli a felhasználói élményt.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $enforce | `bool` | Meghatározza, hogy kötelező legyen-e a felhasználói üzenet eşleştirése. |

### Since {#since}

- 2.0.0
### Source {#source}

Definíciója található [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) fájlban, 410-sorban.
