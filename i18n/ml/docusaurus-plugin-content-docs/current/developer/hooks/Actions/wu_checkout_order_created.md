---
id: wu_checkout_order_created
title: പ്രവർത്തനം - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

ചെക്ക്ഔട്ട് ഓർഡർ പൂർണ്ണമായി തയ്യാറാക്കിയ ശേഷം ഇത് പ്രവർത്തിപ്പിക്കുന്നു (Fires).

സ്വതന്ത്രമായ ബില്ലിംഗ് സൈക്കിളുകളുള്ള ഉൽപ്പന്നങ്ങൾക്കായി രണ്ടാമതൊരു മെമ്പർഷിപ്പ് (secondary memberships) സൃഷ്ടിക്കാൻ ആഡ്ഓണുകൾ ഇതിനെ ഉപയോഗിക്കാവുന്നതാണ്.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | കാർട്ട്/ഓർഡർ ഒബ്ജക്റ്റ്. |
| $customer | `\WP_Ultimo\Models\Customer` | കസ്റ്റമർ. |
| $membership | `\WP_Ultimo\Models\Membership` | പ്രധാന മെമ്പർഷിപ്പ്. |
| $payment | `\WP_Ultimo\Models\Payment` | പേയ്‌മെന്റ്. |

### Since {#since}

- 2.5.0
### Source {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) എന്ന ഫയലിലെ 891-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.
