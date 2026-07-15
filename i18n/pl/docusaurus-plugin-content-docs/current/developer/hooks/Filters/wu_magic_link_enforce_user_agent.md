---
id: wu_magic_link_enforce_user_agent
title: Filter - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent

Określa, czy ma być wymuszana weryfikacja agenta użytkownika (user agent).

Ustawienie wartości na `false` pozwoli tokenom działać na różnych przeglądarkach i urządzeniach. Zmniejsza to poziom bezpieczeństwa, ale zwiększa użyteczność.

## Parametry {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Czy ma być wymuszane dopasowanie agenta użytkownika. |

### Since {#since}

- 2.0.0
### Source {#source}

Zdefiniowane w [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) w linii 410
