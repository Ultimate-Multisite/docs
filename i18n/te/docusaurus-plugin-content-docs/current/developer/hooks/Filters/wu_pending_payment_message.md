---
id: wu_pending_payment_message
title: Filter - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message {#filter-wupendingpaymentmessage}

పెండింగ్‌లో ఉన్న చెల్లింపుల గురించి సందేశాన్ని వినియోగదారు మార్చడానికి ఇది అనుమతిస్తుంది.

## పారామీటర్లు {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | ప్రింట్ చేయవలసిన సందేశం. |
| $customer | `\WP_Ultimo\Models\Customer` | ప్రస్తుత కస్టమర్. |
| $pending_payments | `array` | పెండింగ్‌లో ఉన్న చెల్లింపుల జాబితా. |

### ఎప్పటి నుండి {#since}

- 2.0.19
### మూలం {#source}

[`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) లోని 244వ లైన్‌లో నిర్వచించబడింది.
