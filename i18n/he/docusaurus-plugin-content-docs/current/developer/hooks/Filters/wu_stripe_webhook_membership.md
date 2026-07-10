---
id: wu_stripe_webhook_membership
title: מסנן - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

מסנן את רשומת המנוי המשויכת לוו-בק זה.

מסנן זה הוכנס עקב קונפליקטים שעלולים להיווצר כאשר אותו לקוח Stripe משמש באתרים שונים.

## פרמטרים {#parameters}

| Name | Type | תיאור |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | אובייקט המנוי. |
| $event | `\Stripe\Event` | האירוע שהתקבל. |

### מקור {#source}

מוגדר ב-[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) בשורה 2035.
