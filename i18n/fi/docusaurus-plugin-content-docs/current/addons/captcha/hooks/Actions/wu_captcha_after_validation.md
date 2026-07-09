---
id: wu_captcha_after_validation
title: Toiminto - wu_captcha_after_validation
sidebar_label: wu_captcha_after_validation
_i18n_hash: d257de780581abe25b44e1ec519f48d8
---
# Action: wu_captcha_after_validation {#action-wucaptchaaftervalidation}

Suoritetaan captcha-vahvistuksen jälkeen.

## Parametrit {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $result | `array` | Vahvistuksen tulos. |
| $token | `string` | Vahvistettu token. |

### Alkaen {#since}

- 1.2.0
### Lähde {#source}

Määritelty tiedostossa [`inc/class-captcha-core.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-captcha/blob/main/inc/class-captcha-core.php#L224) rivillä 224
