---
id: wu_domain_registration_failed
title: Aktioun - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

Gëtt ausgeléist nodeems e Versuch fir eng Domain-Registréierung feelgeschloen ass.

## Parameteren {#parameters}

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | D'Bezuelung, déi d'Registréierung ausgeléist huet. |
| $registration_data | `array&lt;string,mixed&gt;` | Registréierungs-Metadaten inklusiv status=failed an error_message. |
| $error_message | `string` | Mënschlech liesbar Feelermeldung vum Registrar. |

### Zanter {#since}

- 2.0.0
### Quell {#source}

Definéiert an [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) op der Linn 1250
