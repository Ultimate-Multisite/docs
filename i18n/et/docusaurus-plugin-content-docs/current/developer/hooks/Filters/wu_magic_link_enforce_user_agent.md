---
id: wu_magic_link_enforce_user_agent
title: Filter - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent {#filter-wumagiclinkenforceuseragent}

Filtreerib, kas jõustada user agenti kontroll.

Määra väärtuseks false, et lubada tokenitel töötada eri brauserites/seadmetes. See vähendab turvalisust, kuid suurendab kasutusmugavust.

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $enforce | `bool` | Kas jõustada user agenti vastavuse kontroll. |

### Alates {#since}

- 2.0.0
### Allikas {#source}

Määratletud failis [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) real 410
