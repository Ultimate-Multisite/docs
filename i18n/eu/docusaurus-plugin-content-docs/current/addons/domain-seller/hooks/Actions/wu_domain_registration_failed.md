---
id: wu_domain_registration_failed
title: Ekintza - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Ekintza: wu_domain_registration_failed

Domeinu-erregistro saiakera batek huts egin ondoren abiarazten da.

## Parametroak

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Erregistroa abiarazi zuen ordainketa. |
| $registration_data | `array&lt;string,mixed&gt;` | Erregistroaren metadatuak, status=failed eta error_message barne. |
| $error_message | `string` | Erregistratzailearen gizakiek irakurtzeko moduko errore-mezua. |

### Noiztik

- 2.0.0
### Iturburua

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) fitxategian definitua, 1250. lerroan
