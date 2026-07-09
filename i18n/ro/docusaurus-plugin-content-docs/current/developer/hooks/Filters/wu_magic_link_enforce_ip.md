---
id: wu_magic_link_enforce_ip
title: Filtru - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip {#filter-wumagiclinkenforceip}

Filtrează dacă trebuie aplicată verificarea adresei IP.

Setează pe `false` pentru a permite ca token-urile să funcționeze de pe rețele diferite. Acest lucru reduce securitatea, dar crește uzabilitatea (de exemplu, pentru utilizatorii de mobil care își schimbă rețeaua).

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $enforce | `bool` | Dacă trebuie aplicată potrivirea adresei IP. |

### De la {#since}

- 2.0.0
### Sursă {#source}

Definit în [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) la linia 422
