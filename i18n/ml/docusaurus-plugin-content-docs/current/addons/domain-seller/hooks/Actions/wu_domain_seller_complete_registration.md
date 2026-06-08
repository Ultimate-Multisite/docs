---
id: wu_domain_seller_complete_registration
title: Action - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

ഒരു പേയ്‌മെന്റ് ഡൊമെയ്ൻ രജിസ്ട്രേഷൻ ആരംഭിക്കാൻ ആവശ്യമായ ഒരു സ്റ്റാറ്റസിലേക്ക് മാറുമ്പോൾ ഇത് പ്രവർത്തിപ്പിക്കുന്നു.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | പേയ്‌മെന്റ് ഒബ്ജക്റ്റ്. |
| $old_status | `string` | മാറ്റത്തിന് മുമ്പുള്ള പേയ്‌മെന്റ് സ്റ്റാറ്റസ്. |

### Since

- 2.0.0
### Source

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) എന്ന ഫയലിലെ 266-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.
