---
id: wu_handle_user_meta_fields
title: Hohenga - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Hohenga: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

Tukua ngā kaiwhakawhanake mono tāpiri kia tiaki i ngā raraunga meta kaiwhakamahi mā ngā ara rerekē mēnā e hiahia ana rātou.

## Tawhā {#parameters}

| Ingoa | Momo | Whakaahuatanga |
|------|------|-------------|
| $meta_repository | `array` | Te rārangi o ngā āpure meta, kua hangā hei key =&gt; value. |
| $user | `\WP_User` | Te ahanoa kaiwhakamahi WordPress. |
| $customer | `\Customer` | Te ahanoa kiritaki Ultimate Multisite. |
| $checkout | `\Checkout` | Te akomanga utu-whakamutunga. |

### Mai i {#since}

- 2.0.4
### Pūtake {#source}

Kua tautuhia ki [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) i te rārangi 1244
