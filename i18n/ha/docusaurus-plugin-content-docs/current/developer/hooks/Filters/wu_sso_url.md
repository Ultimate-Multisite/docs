---
id: wu_sso_url
title: Tace - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Tacewa: wu_sso_url

Yana tace SSO URLs da aka samar kafin a mayar da su don ayyukan abokin ciniki na ketaren-domain.

Yi amfani da wannan tacewa lokacin da haɗin kai ke buƙatar ƙara amintaccen mahallin zuwa mahaɗin SSO na sovereign-tenant ko maye gurbin broker URL tare da kiyaye tabbatar da token na Ultimate Multisite.

## Sigogi

| Suna | Nau'i | Bayani |
|------|------|-------------|
| $sso_url | `string` | SSO URL da aka samar. |
| $user | `WP_User` | Mai amfani wanda za a tabbatar da shi ta ziyarar SSO. |
| $site_id | `int` | ID na shafin manufa don ziyarar. |
| $redirect_to | `string` | URL na inda za a je bayan nasarar tabbatar da SSO. |

### Tun daga

- 2.13.0

### Tushe

An ayyana a cikin `inc/sso/class-sso.php`.


## Abin da ake mayarwa

SSO URL da aka tace.
