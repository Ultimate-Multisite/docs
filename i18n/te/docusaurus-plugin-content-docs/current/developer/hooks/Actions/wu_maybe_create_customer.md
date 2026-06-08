---
id: wu_maybe_create_customer
title: Action - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer

కస్టమర్‌ను జోడించినప్పుడు ప్లగిన్ డెవలపర్‌లు అదనపు పనులు చేయగలిగేలా చేస్తుంది.

ఉదాహరణకు, కస్టమర్‌ను-యూజర్‌ను ప్రధాన సైట్‌కు జోడించడానికి ఇక్కడ మనం హుక్స్ (hooks) యాడ్ చేస్తాము.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $customer | `\Customer` | క్రియేట్ చేయబడిన కస్టమర్. |
| $checkout | `\Checkout` | ప్రస్తుత చెక్అవుట్ క్లాస్. |

### Since

- 2.0.0
### Source

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) లోని 1156వ లైన్‌లో నిర్వచించబడింది.
