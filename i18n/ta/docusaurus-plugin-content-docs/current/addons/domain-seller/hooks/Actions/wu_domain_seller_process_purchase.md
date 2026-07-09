---
id: wu_domain_seller_process_purchase
title: Action - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase {#action-wudomainsellerprocesspurchase}

செக்அவுட் செயல்முறை முடிந்த பிறகு, ஒரு டொமைன் வாங்குதல் செயலாக்கப்படும்போது இது தூண்டப்படுகிறது.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | பணம் செலுத்தும் பொருள் (The payment object). |
| $checkout_data | `array&lt;string,mixed&gt;` | பதிவு படிவத்தில் இருந்து முழுமையான செக்அவுட் தரவு (Full checkout data from the signup form). |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) என்ற இடத்தில், 246 வரியில் வரையறுக்கப்பட்டுள்ளது.
