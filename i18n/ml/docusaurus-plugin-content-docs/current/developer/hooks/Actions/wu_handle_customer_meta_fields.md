---
id: wu_handle_customer_meta_fields
title: Action - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

പ്ലഗിൻ ഡെവലപ്പർമാർക്ക് ആവശ്യമെങ്കിൽ മെറ്റാ ഡാറ്റ പല രീതിയിൽ സേവ് ചെയ്യാൻ ഇത് അനുവദിക്കുന്നു.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | മെറ്റാ ഫീൽഡുകളുടെ ലിസ്റ്റ്, key => value രൂപത്തിൽ ക്രമീകരിച്ചത്. |
| $customer | `\Customer` | Ultimate Multisite ഉപഭോക്തൃ ഒബ്ജക്റ്റ്. |
| $checkout | `\Checkout` | ചെക്ക്ഔട്ട് ക്ലാസ്. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) at line 1211
