---
id: wu_sso_loaded
title: Action - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Action: wu_sso_loaded

Plugin geliştiricilerinin gerekirse ek hook'lar eklemesine izin verir.

SSO, `sunrise` sırasında çalıştığı için, bunun `init` aşamasına kadar ertelenmesi gerekiyor.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $sso | `self` | SSO sınıfı. |

### Since

- 2.0.0
### Source

Tanımlanmıştır: [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) dosyasında 285. satırda.
