---
id: wu_handle_user_meta_fields
title: Hereket - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

Plugin döredijilerine zerur bolsa, ulanyjy meta maglumatlaryny dürli usullar bilen saklamaga rugsat berýär.

## Parametrler {#parameters}

| Ady | Görnüşi | Düşündiriş |
|------|------|-------------|
| $meta_repository | `array` | Meta meýdanlarynyň sanawy, key =&gt; value görnüşinde düzülen. |
| $user | `\WP_User` | WordPress ulanyjy obýekti. |
| $customer | `\Customer` | Ultimate Multisite müşderi obýekti. |
| $checkout | `\Checkout` | checkout klasy. |

### Şondan bäri {#since}

- 2.0.4
### Çeşme {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) içinde, 1244-nji setirde kesgitlenen.
