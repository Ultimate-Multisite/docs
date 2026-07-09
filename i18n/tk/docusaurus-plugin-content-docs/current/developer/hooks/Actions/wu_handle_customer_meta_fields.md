---
id: wu_handle_customer_meta_fields
title: Hereket - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Hereket: wu_handle_customer_meta_fields {#action-wuhandlecustomermetafields}

Plugin döredijilerine zerur bolsa meta maglumatlaryny dürli usullar bilen saklamaga mümkinçilik beriň.

## Parametrler {#parameters}

| Ady | Görnüşi | Düşündiriş |
|------|------|-------------|
| $meta_repository | `array` | Meta meýdanlarynyň sanawy, key =&gt; value gurluşynda. |
| $customer | `\Customer` | Ultimate Multisite müşderi obýekti. |
| $checkout | `\Checkout` | Töleg tamamlaýyş klasy. |

### Şondan bäri {#since}

- 2.0.0
### Çeşme {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) içinde 1211-nji setirde kesgitlenen.
