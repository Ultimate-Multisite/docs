---
id: wu_stripe_webhook_membership
title: Àlẹmọ - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Àlẹmọ: wu_stripe_webhook_membership

Ó ń ṣe àlẹmọ igbasilẹ ọmọ ẹgbẹ tó ní ìbáṣepọ̀ pẹ̀lú webhook yìí.

A ṣe àgbékalẹ̀ àlẹmọ yìí nítorí àwọn ìforígbárí tó lè ṣẹlẹ̀ nígbà tí oníbàárà Stripe kan náà bá lè jẹ́ lílò lórí àwọn ojúlé ọ̀tọ̀ọ̀tọ̀.

## Àwọn Paramita

| Orúkọ | Iru | Apejuwe |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Ohun ọmọ ẹgbẹ náà. |
| $event | `\Stripe\Event` | Ìṣẹ̀lẹ̀ tí a gbà. |

### Orísun

Ti ṣàpèjúwe nínú [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) ní ìlà 2035
