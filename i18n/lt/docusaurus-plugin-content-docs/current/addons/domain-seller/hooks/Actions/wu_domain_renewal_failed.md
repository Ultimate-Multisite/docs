---
id: wu_domain_renewal_failed
title: Veiksmas - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Veiksmas: wu_domain_renewal_failed

Suveikia po to, kai domeno pratęsimo bandymas nepavyksta.

## Parametrai

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Mokėjimas, kuris inicijavo pratęsimą. |
| $renewal_data | `array&lt;string,mixed&gt;` | Pratęsimo metaduomenys (domain_name, years ir t. t.). |
| $error_message | `string` | Žmogui suprantamas klaidos pranešimas iš registratoriaus. |

### Nuo

- 2.0.0
### Šaltinis

Apibrėžta faile [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630), 630 eilutėje
