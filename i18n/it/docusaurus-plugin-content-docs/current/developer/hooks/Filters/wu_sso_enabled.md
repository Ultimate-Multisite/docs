---
id: wu_sso_enabled
title: Filtro - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled

Abilita/disabilita la funzionalità di single-sign-on cross-domain.

Filtra questo valore per disattivare completamente il single-sign-on, o abilitarlo condizionatamente al suo posto.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enabled | `bool` | Il SSO dovrebbe essere abilitato? Vero per attivo, falso-ish per disattivo. |

### Da {#since}

- 2.0.11

### Fonte {#source}

Definito in [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) alla riga 110


## Restituisce {#returns}
Se il SSO è abilitato o meno.
