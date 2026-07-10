---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filter - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean {#filter-wpultimowoocommercecheckoutfieldstoclean}

WooCommerce-ലെ ഡിഫോൾട്ട് ബില്ലിംഗ് അഡ്രസ്സ് ഫീൽഡുകൾ ഫിൽട്ടർ ചെയ്യാൻ ഇത് ഡെവലപ്പർമാർക്ക് അനുവദിക്കുന്നു.

Ultimate Multisite-ൽ ബില്ലിംഗ് അഡ്രസ്സ് ഫീൽഡുകൾ ഉള്ളതിനാൽ, ചെക്ക്ഔട്ട് ഫോമിൽ WooCommerce കാണിക്കുന്ന ഡിഫോൾട്ട് ഫീൽഡുകൾ നീക്കം ചെയ്യുന്നത് നല്ലതായിരിക്കാം. ഡിഫോൾട്ടായി, ഈ ലിസ്റ്റിലേക്ക് ഒരു മൂല്യവും (value) കൈമാറുന്നില്ല, അതിനാൽ WooCommerce-ൽ കാണിക്കാൻ സജ്ജമാക്കിയ എല്ലാ ഫീൽഡുകളും നിലനിർത്തപ്പെടും.

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) എന്ന ഫയലിലെ 277-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.

## Returns {#returns}
നീക്കം ചെയ്യേണ്ട ഫീൽഡുകളുടെ ലിസ്റ്റ്. ലഭ്യമായ മൂല്യങ്ങളിൽ billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, billing_phone എന്നിവ ഉൾപ്പെടുന്നു.
