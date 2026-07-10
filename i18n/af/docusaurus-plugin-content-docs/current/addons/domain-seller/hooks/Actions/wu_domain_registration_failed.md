---
id: wu_domain_registration_failed
title: Aksie - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Aksie: wu_domain_registration_failed {#action-wudomainregistrationfailed}

Word geaktiveer nadat 'n poging tot domeinregistrasie misluk.

## Parameters {#parameters}

| Naam | Tipe | Beskrywing |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Die betaling wat die registrasie geplaiseer het. |
| $registration_data | `array&lt;string,mixed&gt;` | Registrasie-metadata wat status=misluk en 'n foutboodskap insluit. |
| $error_message | `string` | 'n Menslik-leesbare foutboodskap van die registeraar. |

### Sedert {#since}

- 2.0.0
### Bron {#source}

Word gedefinieer in [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) by lyn 1250
