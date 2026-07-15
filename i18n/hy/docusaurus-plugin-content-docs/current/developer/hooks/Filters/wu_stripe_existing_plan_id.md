---
id: wu_stripe_existing_plan_id
title: Զտիչ - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id

Զտում է ստուգման ենթակա պլանի ID-ն։ Եթե սա գոյություն ունի, նոր բաժանորդագրությունը կօգտագործի այս պլանը։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $plan_id | `string` | Ստուգման ենթակա Stripe պլանի ID։ |
| $membership_level | `object` | Անդամակցության մակարդակի օբյեկտ։ |

### Աղբյուր {#source}

Սահմանված է [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653)-ում՝ 2653-րդ տողում։
