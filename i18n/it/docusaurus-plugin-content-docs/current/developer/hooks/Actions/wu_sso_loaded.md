---
id: wu_sso_loaded
title: Azione - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Action: wu_sso_loaded {#action-wussoloaded}

Consenti agli sviluppatori di plugin di aggiungere hook aggiuntivi, se necessario.

Questo deve essere ritardato fino all'inizializzazione poiché SSO è qualcosa che viene eseguito al sorgere del sole.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sso | `self` | La classe SSO. |

### Since {#since}

- 2.0.0
### Source {#source}

Definito in [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) alla riga 285
