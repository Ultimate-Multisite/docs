---
id: wu_magic_link_enforce_ip
title: Filtr - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filtr: wu_magic_link_enforce_ip

Filtr, który decyduje, czy należy wymuszać weryfikację adresu IP.

Ustawienie wartości na `false` pozwoli, aby tokeny działały z różnych sieci. Zmniejsza to poziom bezpieczeństwa, ale zwiększa użyteczność (np. dla użytkowników mobilnych, którzy zmieniają sieci).

## Parametry

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Czy należy wymuszać dopasowanie adresu IP. |

### Od

- 2.0.0
### Źródło

Zdefiniowane w [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) w linii 422
