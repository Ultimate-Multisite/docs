---
id: wu_stripe_webhook_membership
title: តម្រង - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# តម្រង៖ wu_stripe_webhook_membership

តម្រងកំណត់ត្រាសមាជិកភាពដែលភ្ជាប់ជាមួយ webhook នេះ។

តម្រងនេះត្រូវបានណែនាំ ដោយសារជម្លោះដែលអាចកើតឡើង នៅពេលអតិថិជន Stripe ដូចគ្នាអាចត្រូវបានប្រើលើគេហទំព័រផ្សេងៗ។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | សេចក្ដីពិពណ៌នា |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | វត្ថុសមាជិកភាព។ |
| $event | `\Stripe\Event` | ព្រឹត្តិការណ៍ដែលបានទទួល។ |

### ប្រភព {#source}

បានកំណត់ក្នុង [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) នៅបន្ទាត់ 2035
