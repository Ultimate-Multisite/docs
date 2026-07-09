---
id: wu_stripe_webhook_membership
title: Сүзгі - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Сүзгі: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

Осы вебхукпен байланысты мүшелік жазбасын сүзеді.

Бұл сүзгі бір Stripe клиенті әртүрлі сайттарда пайдаланылған кезде туындауы мүмкін қайшылықтарға байланысты енгізілді.

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Мүшелік нысаны. |
| $event | `\Stripe\Event` | Қабылданған оқиға. |

### Дереккөз {#source}

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) ішінде 2035-жолда анықталған
