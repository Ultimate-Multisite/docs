---
id: wu_sso_url
title: Pansala - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url {#filter-wussourl}

Sinasala ang nabuong SSO URLs bago ibalik ang mga ito para sa mga aksyon ng customer sa cross-domain.

Gamitin ang filter na ito kapag kailangang magdagdag ng mapagkakatiwalaang konteksto ang isang integration sa isang sovereign-tenant SSO link o palitan ang broker URL habang pinananatili ang token validation ng Ultimate Multisite.

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $sso_url | `string` | Nabuong SSO URL. |
| $user | `WP_User` | User na maa-authenticate ng SSO visit. |
| $site_id | `int` | Target na site ID para sa visit. |
| $redirect_to | `string` | Destination URL pagkatapos ng matagumpay na SSO validation. |

### Mula Noong {#since}

- 2.13.0

### Pinagmulan {#source}

Tinukoy sa `inc/sso/class-sso.php`.


## Ibinabalik {#returns}

Sinalang SSO URL.
