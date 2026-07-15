---
id: wu_domain_registration_failed
title: Actie - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

Wordt getriggerd nadat een poging tot domeinregistratie mislukt.

## Parameters {#parameters}

| Naam | Type | Beschrijving |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | De betaling die de registratie heeft getriggerd. |
| $registration_data | `array<string,mixed>` | Registratiegegevens, inclusief status=failed en error_message. |
| $error_message | `string` | Een leesbare foutmelding van de registrar. |

### Sinds {#since}

- 2.0.0
### Bron {#source}

Geëerd in [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) op regel 1250
