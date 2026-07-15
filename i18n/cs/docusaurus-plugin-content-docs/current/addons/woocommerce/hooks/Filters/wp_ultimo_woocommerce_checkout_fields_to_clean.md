---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filter - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Umožňuje vývojářům filtrovat výchozí pole pro fakturační adresu v WooCommerce.

Protože Ultimate Multisite má vlastní pole pro fakturační adresu, může být logické odstranit výchozí pole, která WooCommerce zobrazuje na formuláři pro pokladnu. Výchozí hodnota pro tento seznam není žádná, takže jsou zachována všechna pole, která jsou v WooCommerce nakonfigurována k zobrazení.

### Od {#since}

- 2.0.0
### Zdroj {#source}

Definováno v [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) na řádku 277

## Vrátí {#returns}
Seznam polí, která má být odstraněna. Dostupné hodnoty zahrnují `billing_first_name`, `billing_last_name`, `billing_company`, `billing_country`, `billing_address_1`, `billing_address_2`, `billing_city`, `billing_state`, `billing_postcode`, `billing_email` a `billing_phone`.
