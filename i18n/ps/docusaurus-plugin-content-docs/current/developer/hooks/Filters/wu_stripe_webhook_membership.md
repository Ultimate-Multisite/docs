---
id: wu_stripe_webhook_membership
title: فلټر - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# فلټر: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

له دې webhook سره تړلی د غړیتوب ریکارډ فلټر کوي.

دا فلټر د هغو ټکرونو له امله معرفي شو چې ښايي هغه مهال رامنځته شي کله چې هماغه Stripe پیرودونکی په بېلابېلو سایټونو کې وکارول شي.

## پارامیټرونه {#parameters}

| نوم | ډول | تشریح |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | د غړیتوب څیز. |
| $event | `\Stripe\Event` | ترلاسه شوې پېښه. |

### سرچینه {#source}

په [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) کې په 2035 کرښه کې تعریف شوی.
