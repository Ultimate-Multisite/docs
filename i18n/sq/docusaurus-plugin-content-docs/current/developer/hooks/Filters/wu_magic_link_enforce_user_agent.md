---
id: wu_magic_link_enforce_user_agent
title: Filtër - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filtri: wu_magic_link_enforce_user_agent {#filter-wumagiclinkenforceuseragent}

Filtro nëse duhet të zbatohet verifikimi i user agent.

Vendoseni në false për të lejuar që token-at të funksionojnë në shfletues/pajisje të ndryshme. Kjo ul sigurinë, por rrit përdorshmërinë.

## Parametrat {#parameters}

| Emri | Tipi | Përshkrimi |
|------|------|-------------|
| $enforce | `bool` | Nëse duhet të zbatohet përputhja e user agent. |

### Që nga {#since}

- 2.0.0
### Burimi {#source}

Përcaktuar në [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) në rreshtin 410
