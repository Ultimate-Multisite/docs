---
id: wu_return_url
title: ഫിൽട്ടർ - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

പേയ്‌മെന്റ് പ്രോസസ്സിംഗിന് ശേഷം ഉപയോഗിക്കുന്ന ഗേറ്റ്‌വേ റിട്ടേൺ URL മാറ്റാൻ ഡെവലപ്പർമാർക്ക് ഇത് അനുവദിക്കുന്നു.

## പാരാമീറ്ററുകൾ

| Name | Type | വിവരണം |
|------|------|-------------|
| $return_url | `string` | പ്രോസസ്സിംഗിന് ശേഷം റീഡയറക്ട് ചെയ്യേണ്ട URL. |
| $gateway | `self` | ഗേറ്റ്‌വേ ഇൻസ്റ്റൻസ്. |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite പേയ്‌മെന്റ് ഇൻസ്റ്റൻസ്. |
| $cart | `\WP_Ultimo\Checkout\Cart` | നിലവിലെ Ultimate Multisite കാർട്ട് ഓർഡർ. |

### മുതൽ

- 2.0.20
### സ്രോതസ്സ്

വരി 683-ൽ [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) ൽ നിർവചിച്ചിരിക്കുന്നു.


## റിട്ടേൺസ്
