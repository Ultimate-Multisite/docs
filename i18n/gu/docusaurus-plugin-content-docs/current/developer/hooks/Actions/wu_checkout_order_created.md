---
id: wu_checkout_order_created
title: ક્રિયા - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

જ્યારે ચેકઆઉટ ઓર્ડર સંપૂર્ણ રીતે તૈયાર થઈ જાય, ત્યારે આ એક્શન ફાયર થાય છે.

એડઓન્સ (Addons) તેનો ઉપયોગ સ્વતંત્ર બિલિંગ સાયકલ (independent billing cycles) ધરાવતા પ્રોડક્ટ્સ માટે સેકન્ડરી મેમ્બરશિપ બનાવવા માટે કરી શકે છે.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | કાર્ટ/ઓર્ડર ઓબ્જેક્ટ. |
| $customer | `\WP_Ultimo\Models\Customer` | ગ્રાહક (Customer). |
| $membership | `\WP_Ultimo\Models\Membership` | મુખ્ય મેમ્બરશિપ (Primary membership). |
| $payment | `\WP_Ultimo\Models\Payment` | પેમેન્ટ (Payment). |

### Since {#since}

- 2.5.0
### Source {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) at line 891
