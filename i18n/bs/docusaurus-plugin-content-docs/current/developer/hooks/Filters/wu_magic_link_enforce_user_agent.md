---
id: wu_magic_link_enforce_user_agent
title: Filter - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent {#filter-wumagiclinkenforceuseragent}

Filtrira da li se obavezuje provjera korisničkog agenta.

Postavite na `false` kako biste omogućili tokenima da rade na različitim preglednicima/uređajima. Ovo smanjuje sigurnost, ali povećava upotrebljivost.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Da li se obavezuje poklapanje korisničkog agenta. |

### Since {#since}

- 2.0.0
### Source {#source}

Definisano u [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) na liniji 410
