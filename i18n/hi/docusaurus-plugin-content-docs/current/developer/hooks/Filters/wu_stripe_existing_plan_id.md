---
id: wu_stripe_existing_plan_id
title: फ़िल्टर - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id

जाँच करने के लिए प्लान की ID को फ़िल्टर करता है। यदि यह मौजूद है, तो नया सब्सक्रिप्शन इसी प्लान का उपयोग करेगा।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $plan_id | `string` | उस Stripe प्लान की ID जिसे जाँच करना है। |
| $membership_level | `object` | सदस्यता स्तर (Membership level) का ऑब्जेक्ट। |

### Source {#source}

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) में लाइन 2653 पर परिभाषित।
