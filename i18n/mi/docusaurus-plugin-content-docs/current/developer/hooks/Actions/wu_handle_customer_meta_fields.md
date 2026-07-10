---
id: wu_handle_customer_meta_fields
title: Mahi - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Hohenga: wu_handle_customer_meta_fields {#action-wuhandlecustomermetafields}

Tukua ngā kaiwhakawhanake monomai kia tiaki i ngā raraunga meta mā ngā ara rerekē mēnā e hiahiatia ana.

## Ngā Tawhā {#parameters}

| Ingoa | Momo | Whakaahuatanga |
|------|------|-------------|
| $meta_repository | `array` | Te rārangi o ngā āpure meta, he mea hanga hei key =&gt; value. |
| $customer | `\Customer` | Te ahanoa kiritaki Ultimate Multisite. |
| $checkout | `\Checkout` | Te akomanga utu-whakamutunga. |

### Mai i {#since}

- 2.0.0
### Pūtake {#source}

Kua tautuhia ki [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) i te rārangi 1211
