---
id: wu_sso_loaded
title: ქმედება - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# ქმედება: wu_sso_loaded {#action-wussoloaded}

საჭიროების შემთხვევაში, plugin-ის დეველოპერებს დამატებითი hooks-ის დამატების საშუალებას აძლევს.

ეს უნდა გადაიდოს init-მდე, რადგან SSO არის ის, რაც sunrise-ზე მუშაობს.

## პარამეტრები {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sso | `self` | SSO კლასი. |

### ვერსიიდან {#since}

- 2.0.0
### წყარო {#source}

განსაზღვრულია [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285)-ში, ხაზზე 285
