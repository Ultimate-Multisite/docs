---
id: wu_domain_registration_failed
title: Action - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed {#action-wudomainregistrationfailed}

ഒരു ഡൊമെയ്ൻ രജിസ്ട്രേഷൻ ശ്രമം പരാജയപ്പെടുമ്പോൾ ഇത് പ്രവർത്തിപ്പിക്കുന്നു.

## പാരാമീറ്ററുകൾ {#parameters}

| Name | Type | വിവരണം |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | രജിസ്ട്രേഷൻ ആരംഭിക്കാൻ കാരണമായ പേയ്‌മെന്റ്. |
| $registration_data | `array&lt;string,mixed&gt;` | സ്റ്റാറ്റസ്=failed, error_message എന്നിവ ഉൾപ്പെടെയുള്ള രജിസ്ട്രേഷൻ മെറ്റാഡാറ്റ. |
| $error_message | `string` | രജിസ്ട്രാർ നൽകുന്ന മനുഷ്യർക്ക് വായിക്കാൻ കഴിയുന്ന പിശക് സന്ദേശം. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) എന്ന ഫയലിലെ 1250-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.
