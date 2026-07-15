---
id: wu_sso_url
title: Shaandho - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Shaandheeye: wu_sso_url

Wuxuu shaandheeyaa SSO URLs la soo saaray ka hor inta aan loo celin falalka macmiilka ee domain-no kala duwan.

Adeegso shaandheeyahan marka isdhexgal u baahan yahay inuu ku daro macluumaad la aamini karo xiriir SSO ee sovereign-tenant ama inuu beddelo broker URL isagoo ilaalinaya xaqiijinta token-ka ee Ultimate Multisite.

## Xuduudaha {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sso_url | `string` | SSO URL la soo saaray. |
| $user | `WP_User` | Isticmaalaha lagu xaqiijin doono booqashada SSO. |
| $site_id | `int` | Aqoonsiga goobta bartilmaameedka ah ee booqashada. |
| $redirect_to | `string` | URL-ka halka loo socdo kadib xaqiijinta SSO ee guulaysata. |

### Tan iyo {#since}

- 2.13.0

### Isha {#source}

Waxaa lagu qeexay `inc/sso/class-sso.php`.


## Soo-celinta {#returns}

SSO URL la shaandheeyay.
