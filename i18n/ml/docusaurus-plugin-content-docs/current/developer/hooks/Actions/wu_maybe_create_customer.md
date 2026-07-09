---
id: wu_maybe_create_customer
title: Action - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer {#action-wumaybecreatecustomer}

കസ്റ്റമർ കൂട്ടിച്ചേർക്കുമ്പോൾ പ്ലഗിൻ ഡെവലപ്പർമാർക്ക് കൂടുതൽ കാര്യങ്ങൾ ചെയ്യാൻ ഇത് അനുവദിക്കുന്നു.

ഉദാഹരണത്തിന്, കസ്റ്റമറിനെ പ്രധാന സൈറ്റിലെ യൂസറാക്കി മാറ്റുന്നതിനുള്ള hooks ഇവിടെയാണ് കൂട്ടിച്ചേർക്കുന്നത്.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $customer | `\Customer` | കൂട്ടിച്ചേർക്കപ്പെട്ട കസ്റ്റമർ. |
| $checkout | `\Checkout` | നിലവിലെ ചെക്ക്ഔട്ട് ക്ലാസ്. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) at line 1156
