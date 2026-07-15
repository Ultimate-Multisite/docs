---
id: wu_stripe_existing_plan_id
title: गाळणी - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id

तपासावे लागणाऱ्या प्लॅनचा ID फिल्टर करतो. जर हा ID अस्तित्वात असेल, तर नवीन सबस्क्रिप्शन याच प्लॅनचा वापर करेल.

## पॅरामीटर्स {#parameters}

| नाव | प्रकार | वर्णन |
|------|------|-------------|
| $plan_id | `string` | तपासावा लागणारा Stripe प्लॅनचा ID. |
| $membership_level | `object` | मेंबरशिप लेव्हल ऑब्जेक्ट. |

### स्रोत {#source}

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) या फाईलमध्ये लाइन २६५३ वर परिभाषित केले आहे.
