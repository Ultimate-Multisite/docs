---
id: wu_domain_registration_completed
title: Gnìomh - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Gnìomh: wu_domain_registration_completed

Thèid a chur an gnìomh às dèidh do domain a bhith air a chlàradh gu soirbheachail.

## Paramadairean

| Ainm | Seòrsa | Tuairisgeul |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Am pàigheadh a bhrosnaich a’ chlàradh. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata clàraidh (domain_name, provider_id, years, expiry_date, msaa.). |
| $result | `array&lt;string,mixed&gt;` | Array toraidh amh a thill an neach-clàraidh. |

### Bho

- 2.0.0
### Tùs

Air a mhìneachadh ann an [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) aig loidhne 1204
