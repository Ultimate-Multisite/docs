---
id: wu_pending_payment_message
title: Filter - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

തീർപ്പാക്കാത്ത പേയ്‌മെന്റുകളെക്കുറിച്ചുള്ള സന്ദേശം മാറ്റാൻ ഇത് ഉപയോക്താവിനെ അനുവദിക്കുന്നു.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | പ്രിൻ്റ് ചെയ്യേണ്ട സന്ദേശം. |
| $customer | `\WP_Ultimo\Models\Customer` | നിലവിലെ ഉപഭോക്താവ്. |
| $pending_payments | `array` | തീർപ്പാക്കാത്ത പേയ്‌മെന്റുകളുടെ ഒരു ലിസ്റ്റ്. |

### Since {#since}

- 2.0.19
### Source {#source}

[`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) എന്നതിൽ 244-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.
