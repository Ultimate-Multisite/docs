---
id: wu_domain_seller_complete_registration
title: Actie - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Actie: wu_domain_seller_complete_registration

Wordt uitgevoerd wanneer een betaling overgaat naar een status die de registratie van een domein moet activeren.

## Parameters

| Naam | Type | Beschrijving |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Het betalingsobject. |
| $old_status | `string` | De vorige betalingsstatus vóór de overgang. |

### Sinds

- 2.0.0
### Bron

Geïndefinieerd in [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) op regel 266
