---
id: wu_get_checkout_variables
title: ഫിൽട്ടർ - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables {#filter-wugetcheckoutvariables}

ഒരു ചെക്ക്ഔട്ട് പേജിന്റെ മുൻകൂട്ടി സജ്ജീകരിച്ച വേരിയബിളുകൾ (pre-sets) പ്ലഗിൻ ഡെവലപ്പർമാർക്ക് ഫിൽട്ടർ ചെയ്യാൻ ഇത് അനുവദിക്കുന്നു.

ശ്രദ്ധിക്കുക: ഇതിലെ ഏതെങ്കിലും കീകൾ നഷ്ടപ്പെട്ടാൽ, ഫ്രണ്ട്-എൻഡിലെ ചെക്ക്ഔട്ട് പൂർണ്ണമായും തകരാറിലാകാൻ സാധ്യതയുണ്ട്.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | പ്രാദേശികവൽക്കരിച്ച വേരിയബിളുകൾ. |
| $checkout | `\Checkout` | ചെക്ക്ഔട്ട് ക്ലാസ്. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) at line 1970


## Returns {#returns}
പുതിയ വേരിയബിളുകൾ അറേ.
