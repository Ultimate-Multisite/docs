---
id: wu_magic_link_enforce_ip
title: Filter - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

Filter, kas jõustada IP-aadressi kinnitamist.

Määra väärtuseks false, et lubada tokenitel töötada erinevatest võrkudest. See vähendab turvalisust, kuid suurendab kasutusmugavust (nt mobiilikasutajatele, kes vahetavad võrke).

## Parameetrid

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $enforce | `bool` | Kas jõustada IP-aadressi vastavuse kontrollimist. |

### Alates

- 2.0.0
### Allikas

Määratletud failis [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) real 422
