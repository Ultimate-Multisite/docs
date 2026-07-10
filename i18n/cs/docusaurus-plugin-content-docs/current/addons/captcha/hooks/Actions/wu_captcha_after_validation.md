---
id: wu_captcha_after_validation
title: Akce - wu_captcha_after_validation
sidebar_label: wu_captcha_after_validation
_i18n_hash: d257de780581abe25b44e1ec519f48d8
---
# Akce: wu_captcha_after_validation {#action-wucaptchaaftervalidation}

Spouští se po validaci captcha.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $result | `array` | Výsledek validace. |
| $token | `string` | Token, který byl ověřen. |

### Od verze {#since}

- 1.2.0
### Zdroj {#source}

Definováno v [`inc/class-captcha-core.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-captcha/blob/main/inc/class-captcha-core.php#L224) na řádku 224
