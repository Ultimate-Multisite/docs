---
id: wu_domain_renewal_completed
title: Action - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

ഒരു ഡൊമെയ്ൻ വിജയകരമായി പുതുക്കിയതിന് ശേഷം ഇത് പ്രവർത്തിപ്പിക്കുന്നു.

## പാരാമീറ്ററുകൾ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | പുതുക്കലിന് കാരണമായ പേയ്‌മെന്റ്. |
| $renewal_data | `array&lt;string,mixed&gt;` | പുതുക്കൽ മെറ്റാഡാറ്റ (domain_name, years, customer_id, തുടങ്ങിയവ). |
| $result | `array&lt;string,mixed&gt;` | പുതിയ expiry_date ഉൾപ്പെടെ രജിസ്ട്രാർ നൽകുന്ന അസംസ്കൃത ഫല വിവരങ്ങൾ. |

### ആരംഭിച്ച പതിപ്പ് {#since}

- 2.0.0
### ഉറവിടം {#source}

Defined in [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) at line 594
