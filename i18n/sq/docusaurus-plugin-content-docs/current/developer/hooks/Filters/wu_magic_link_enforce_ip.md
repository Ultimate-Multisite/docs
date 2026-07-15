---
id: wu_magic_link_enforce_ip
title: Filtër - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

Filtro nëse duhet të zbatohet verifikimi i adresës IP.

Vendoseni në false për të lejuar që token-at të funksionojnë nga rrjete të ndryshme. Kjo ul sigurinë, por rrit përdorshmërinë (p.sh., për përdoruesit mobilë që ndërrojnë rrjete).

## Parametrat {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Nëse duhet të zbatohet përputhja e adresës IP. |

### Që nga {#since}

- 2.0.0
### Burimi {#source}

Përcaktuar në [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) në rreshtin 422
