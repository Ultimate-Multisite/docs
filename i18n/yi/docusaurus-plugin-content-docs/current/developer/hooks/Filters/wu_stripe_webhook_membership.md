---
id: wu_stripe_webhook_membership
title: פֿילטער - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# פֿילטער: wu_stripe_webhook_membership

פֿילטערט דעם מיטגלידערשאַפֿט־רעקאָרד וואָס איז פֿאַרבונדן מיט דעם webhook.

דער פֿילטער איז אַרײַנגעפֿירט געוואָרן צוליב קאָנפֿליקטן וואָס קענען אויפֿקומען ווען דער זעלבער Stripe קונה קען ווערן גענוצט אויף פֿאַרשידענע וועבזײַטן.

## פּאַראַמעטערס

| נאָמען | טיפּ | באַשרײַבונג |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | דער מיטגלידערשאַפֿט־אָביעקט. |
| $event | `\Stripe\Event` | די געשעעניש וואָס איז באַקומען געוואָרן. |

### מקור

דעפֿינירט אין [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) אויף שורה 2035
