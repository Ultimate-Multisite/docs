---
id: wu_domain_seller_process_purchase
title: Action - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

ചെക്ക്ഔട്ട് പൂർത്തിയാക്കിയ ശേഷം ഒരു ഡൊമെയ്ൻ വാങ്ങൽ പ്രോസസ്സ് ചെയ്യുമ്പോൾ ഇത് പ്രവർത്തിപ്പിക്കുന്നു.

## പാരാമീറ്ററുകൾ {#parameters}

| പേര് | ടൈപ്പ് | വിവരണം |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | പേയ്‌മെന്റ് ഒബ്ജക്റ്റ്. |
| $checkout_data | `array<string,mixed>` | സൈൻഅപ്പ് ഫോമിലെ മുഴുവൻ ചെക്ക്ഔട്ട് ഡാറ്റയും. |

### മുതൽ {#since}

- 2.0.0
### സ്രോതസ്സ് {#source}

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) എന്ന ഫയലിലെ 246-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.
