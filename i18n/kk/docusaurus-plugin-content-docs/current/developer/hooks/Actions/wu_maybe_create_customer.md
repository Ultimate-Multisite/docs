---
id: wu_maybe_create_customer
title: Әрекет - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Әрекет: wu_maybe_create_customer

Плагин әзірлеушілеріне тұтынушы қосылған кезде қосымша әрекеттер жасауға мүмкіндік береді.

Мысалы, дәл осы жерде тұтынушының customer-&gt;user мәнін негізгі сайтқа да қосуға арналған хуктарды қосамыз.

## Параметрлер

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $customer | `\Customer` | Жасалған болуы мүмкін тұтынушы. |
| $checkout | `\Checkout` | Ағымдағы төлем рәсімдеу класы. |

### Бастап

- 2.0.0
### Дереккөз

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) ішінде 1156-жолда анықталған
