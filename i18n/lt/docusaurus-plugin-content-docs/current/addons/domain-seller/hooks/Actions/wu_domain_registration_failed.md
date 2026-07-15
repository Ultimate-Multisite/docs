---
id: wu_domain_registration_failed
title: Veiksmas - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Veiksmas: wu_domain_registration_failed

Suveikia po nepavykusio domeno registracijos bandymo.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Mokėjimas, kuris inicijavo registraciją. |
| $registration_data | `array&lt;string,mixed&gt;` | Registracijos metaduomenys, įskaitant status=failed ir error_message. |
| $error_message | `string` | Žmogui suprantamas klaidos pranešimas iš registratoriaus. |

### Nuo {#since}

- 2.0.0
### Šaltinis {#source}

Apibrėžta [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) 1250 eilutėje
