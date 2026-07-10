---
id: wu_captcha_after_validation
title: Action - wu_captcha_after_validation
sidebar_label: wu_captcha_after_validation
_i18n_hash: d257de780581abe25b44e1ec519f48d8
---
# Action: wu_captcha_after_validation {#action-wucaptchaaftervalidation}

Kjøres etter at captcha-valideringen er fullført.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $result | `array` | Valideringsresultatet. |
| $token | `string` | Tokenet som ble validert. |

### Siden {#since}

- 1.2.0
### Kilde {#source}

Definert i [`inc/class-captcha-core.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-captcha/blob/main/inc/class-captcha-core.php#L224) på linje 224
