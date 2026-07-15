---
id: wu_domain_renewal_failed
title: Action - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

ഡൊമെയ്ൻ പുതുക്കാനുള്ള ശ്രമം പരാജയപ്പെടുമ്പോൾ ഇത് പ്രവർത്തിപ്പിക്കുന്നു.

## പാരാമീറ്ററുകൾ {#parameters}

| Name | Type | വിവരണം |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | പുതുക്കലിന് കാരണമായ പേയ്‌മെന്റ്. |
| $renewal_data | `array&lt;string,mixed&gt;` | പുതുക്കൽ മെറ്റാഡാറ്റ (domain_name, years, തുടങ്ങിയവ). |
| $error_message | `string` | രജിസ്ട്രാറിൽ നിന്ന് ലഭിച്ച, മനുഷ്യർക്ക് വായിക്കാൻ കഴിയുന്ന പിശക് സന്ദേശം. |

### ആരംഭിച്ചത് {#since}

- 2.0.0
### ഉറവിടം {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) എന്ന ഫയലിലെ 630-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.
