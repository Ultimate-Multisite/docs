---
id: wu_domain_seller_search_delay
title: Filter - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay

മില്ലിസെക്കൻഡിൽ (milliseconds) ഉള്ള ഡൊമെയ്ൻ സെർച്ച് ഡീബൗൺസ് ഡിലേ (debounce delay) ഇത് ഫിൽട്ടർ ചെയ്യുന്നു.

느രമായ കണക്ഷനുകളിൽ (slow connections) API കോളുകൾ കുറയ്ക്കുന്നതിനായി ഈ മൂല്യം വർദ്ധിപ്പിക്കുക.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $delay | `int` | മില്ലിസെക്കൻഡിലുള്ള ഡീബൗൺസ് ഡിലേ. ഡിഫോൾട്ട് 500. |

### Since

- 2.1.0
### Source

[`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) എന്ന ഫയലിലെ 854-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.
