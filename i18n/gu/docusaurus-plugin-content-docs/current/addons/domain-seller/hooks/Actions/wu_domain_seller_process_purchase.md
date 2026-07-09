---
id: wu_domain_seller_process_purchase
title: ક્રિયા - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase {#action-wudomainsellerprocesspurchase}

જ્યારે ચેકઆઉટ પૂર્ણ થયા પછી ડોમેન ખરીદીની પ્રક્રિયા થઈ રહી હોય ત્યારે આ એક્શન ટ્રિગર થાય છે.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | પેમેન્ટ ઓબ્જેક્ટ. |
| $checkout_data | `array<string,mixed>` | સાઇનઅપ ફોર્મમાંથી સંપૂર્ણ ચેકઆઉટ ડેટા. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) at line 246
