---
id: wu_domain_registration_completed
title: Gweithred - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Gweithred: wu_domain_registration_completed

Yn tanio ar ôl i barth gael ei gofrestru’n llwyddiannus.

## Paramedrau {#parameters}

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Y taliad a sbardunodd y cofrestru. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata cofrestru (domain_name, provider_id, years, expiry_date, ac ati). |
| $result | `array&lt;string,mixed&gt;` | Arae canlyniad amrwd a ddychwelwyd gan y cofrestrydd. |

### Ers {#since}

- 2.0.0
### Ffynhonnell {#source}

Diffinnir yn [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) ar linell 1204
