---
id: wu_handle_user_meta_fields
title: Darbība - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Darbība: wu_handle_user_meta_fields

Ļauj plugin izstrādātājiem saglabāt lietotāju metadatus dažādos veidos, ja tas nepieciešams.

## Parametri

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $meta_repository | `array` | Meta lauku saraksts, strukturēts kā key =&gt; value. |
| $user | `\WP_User` | WordPress lietotāja objekts. |
| $customer | `\Customer` | Ultimate Multisite klienta objekts. |
| $checkout | `\Checkout` | Checkout klase. |

### Kopš

- 2.0.4
### Avots

Definēts [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) 1244. rindā
