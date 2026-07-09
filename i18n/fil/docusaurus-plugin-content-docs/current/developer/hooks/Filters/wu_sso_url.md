---
id: wu_sso_url
title: Salain - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url

Sinasala ang mga nabuong SSO URL bago ibalik ang mga ito para sa mga aksyon ng customer sa pagitan ng mga domain.

Gamitin ang filter na ito kapag kailangang magdagdag ng integration ng pinagkakatiwalaang konteksto sa isang sovereign-tenant SSO link o palitan ang broker URL habang pinapanatili ang token validation ng Ultimate Multisite.

## Mga Parameter

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $sso_url | `string` | Nabuong SSO URL. |
| $user | `WP_User` | User na ia-authenticate ng SSO visit. |
| $site_id | `int` | Target na site ID para sa visit. |
| $redirect_to | `string` | Destination URL pagkatapos ng matagumpay na SSO validation. |

### Mula Noong

- 2.13.0

### Pinagmulan

Tinukoy sa `inc/sso/class-sso.php`.


## Mga Ibinabalik

Na-filter na SSO URL.
