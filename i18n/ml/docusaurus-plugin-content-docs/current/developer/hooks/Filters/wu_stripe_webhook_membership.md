---
id: wu_stripe_webhook_membership
title: ഫിൽട്ടർ - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

ഈ വെബ്ഹൂക്കുമായി ബന്ധപ്പെട്ട അംഗത്വ രേഖ (membership record) ഫിൽട്ടർ ചെയ്യുന്നു.

ഒരേ Stripe ഉപഭോക്താവിനെ വ്യത്യസ്ത സൈറ്റുകളിൽ ഉപയോഗിക്കുമ്പോൾ ഉണ്ടാകാൻ സാധ്യതയുള്ള ගැටലുകൾ കാരണം ഈ ഫിൽട്ടർ അവതരിപ്പിച്ചു.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | അംഗത്വ വസ്തു (membership object). |
| $event | `\Stripe\Event` | ലഭിച്ച ഇവന്റ് (event). |

### Source {#source}

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) എന്ന ഫയലിലെ 2035-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.
