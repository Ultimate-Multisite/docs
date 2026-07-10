---
id: signup_get_available_languages
title: Filtar - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filtar: signup_get_available_languages {#filter-signupgetavailablelanguages}

Filtrira popis dostupnih jezika za registracije siteova na front-endu.

Prosljeđivanje praznog polja ovom hooku onemogućit će prikaz te postavke na obrascu za registraciju, a zadani jezik koristit će se pri izradi sitea. Jezici koji već nisu instalirani bit će uklonjeni.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $available_languages | `array` | Dostupni jezici. |

### Od verzije {#since}

- 4.4.0
### Izvor {#source}

Definirano u [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) u retku 117
