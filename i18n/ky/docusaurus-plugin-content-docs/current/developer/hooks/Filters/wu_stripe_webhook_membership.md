---
id: wu_stripe_webhook_membership
title: Фильтр - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Чыпка: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

Бул вебхук менен байланышкан мүчөлүк жазуусун чыпкалайт.

Бул чыпка бир эле Stripe кардары ар башка сайттарда колдонулганда пайда болушу мүмкүн болгон карама-каршылыктардан улам киргизилген.

## Параметрлер {#parameters}

| Аты | Түрү | Сүрөттөмө |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Мүчөлүк объекти. |
| $event | `\Stripe\Event` | Кабыл алынган окуя. |

### Булак {#source}

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) ичинде 2035-сапта аныкталган
