---
id: wu_domain_registration_failed
title: Gnìomh - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Gnìomh: wu_domain_registration_failed

Thèid a chur an gnìomh às dèidh do dh’oidhirp clàradh domain fàiligeadh.

## Paramadairean

| Ainm | Seòrsa | Tuairisgeul |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Am pàigheadh a bhrosnaich an clàradh. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata clàraidh a’ gabhail a-steach status=failed agus error_message. |
| $error_message | `string` | Teachdaireachd-mearachd a ghabhas leughadh le duine bhon neach-clàraidh. |

### Bho

- 2.0.0
### Tùs

Air a mhìneachadh ann an [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) aig loidhne 1250
