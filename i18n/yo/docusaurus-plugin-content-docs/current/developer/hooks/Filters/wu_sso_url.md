---
id: wu_sso_url
title: Àlẹmọ - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Àlẹmọ: wu_sso_url

Ó máa ń ṣàlẹmọ àwọn SSO URL tí a dá sílẹ̀ kí wọ́n tó dá wọn padà fún àwọn ìṣe oníbàárà kọjá-agbegbe.

Lo àlẹmọ yìí nígbà tí ìṣọ̀kan kan bá nílò láti fi àyíká tí a gbẹ́kẹ̀lé kún ìjápọ̀ SSO tenant olómìnira tàbí láti rọ́pò broker URL nígbà tí ó ń pa ìfọwọ́sí token Ultimate Multisite mọ́.

## Àwọn Parameter

| Orúkọ | Type | Àpèjúwe |
|------|------|-------------|
| $sso_url | `string` | SSO URL tí a dá sílẹ̀. |
| $user | `WP_User` | Olùmúlò tí ìbẹ̀wò SSO yóò jẹ́rìí sí. |
| $site_id | `int` | ID ojúlé àfojúsùn fún ìbẹ̀wò náà. |
| $redirect_to | `string` | URL ibi tí a ó lọ lẹ́yìn ìfọwọ́sí SSO tí ó ṣàṣeyọrí. |

### Láti

- 2.13.0

### Orísun

A ṣàlàyé rẹ̀ nínú `inc/sso/class-sso.php`.


## Ìpadà

SSO URL tí a ti ṣàlẹmọ.
