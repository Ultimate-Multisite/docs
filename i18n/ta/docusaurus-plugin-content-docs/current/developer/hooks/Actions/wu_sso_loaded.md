---
id: wu_sso_loaded
title: Action - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Action: wu_sso_loaded {#action-wussoloaded}

தேவைப்பட்டால், கூடுதல் ஹூக்குகளைச் சேர்க்க 플러ഗിன் உருவாக்குநர்கள் இதைப் பயன்படுத்தலாம்.

SSO என்பது sunrise-ல் இயங்கும் ஒன்று என்பதால், இது init வரை தாமதப்படுத்தப்பட வேண்டும்.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sso | `self` | SSO வகுப்பகம் (The SSO class). |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) at line 285
