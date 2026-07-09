---
id: wu_domain_registration_completed
title: Action - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

ഒരു domain വിജയകരമായി രജിസ്റ്റർ ചെയ്തതിന് ശേഷം ഇത് പ്രവർത്തിപ്പിക്കുന്നു (Fires).

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | രജിസ്ട്രേഷന് കാരണമായ പേയ്‌മെന്റ്. |
| $registration_data | `array&lt;string,mixed&gt;` | രജിസ്ട്രേഷൻ മെറ്റാഡാറ്റ (domain_name, provider_id, years, expiry_date, തുടങ്ങിയവ). |
| $result | `array&lt;string,mixed&gt;` | രജിസ്ട്രാർ നൽകുന്ന അസംസ്കൃത (raw) റിസൾട്ട് അറേ. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) എന്ന ഫയലിലെ 1204 വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.
