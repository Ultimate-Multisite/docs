---
id: wu_domain_seller_process_purchase
title: Ìṣe - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

Ó máa ń ṣiṣẹ́ nígbà tí ìrà domain bá ń ṣe lẹ́yìn ìparí checkout.

## Àwọn Parameter {#parameters}

| Orúkọ | Iru | Àpèjúwe |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Object ìsanwó náà. |
| $checkout_data | `array&lt;string,mixed&gt;` | Gbogbo data checkout láti fọ́ọ̀mù ìforúkọsílẹ̀. |

### Láti ìgbà {#since}

- 2.0.0
### Orísun {#source}

A ṣàlàyé rẹ̀ nínú [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) ní ila 246
