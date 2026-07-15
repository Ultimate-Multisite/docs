---
id: wu_handle_user_meta_fields
title: Action - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

പ്ലഗിൻ ഡെവലപ്പർമാർക്ക് ആവശ്യമെങ്കിൽ യൂസർ മെറ്റാ ഡാറ്റ വ്യത്യസ്ത രീതിയിൽ സേവ് ചെയ്യാൻ ഇത് അനുവദിക്കുന്നു.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | മെറ്റാ ഫീൽഡുകളുടെ ലിസ്റ്റ്, key => value രൂപത്തിൽ ഘടിപ്പിച്ചത്. |
| $user | `\WP_User` | വേർഡ്പ്രസ്സ് യൂസർ ഒബ്ജക്റ്റ്. |
| $customer | `\Customer` | ദി അൾട്ടിമേറ്റ് മൾട്ടിസൈറ്റ് കസ്റ്റമർ ഒബ്ജക്റ്റ്. |
| $checkout | `\Checkout` | ചെക്ക്ഔട്ട് ക്ലാസ്. |

### Since {#since}

- 2.0.4
### Source {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) at line 1244
