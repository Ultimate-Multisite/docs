---
id: wu_domain_registration_failed
title: Çalakî - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Çalakî: wu_domain_registration_failed

Piştî ku hewildana qeydkirina domenê têk diçe, tê xebitandin.

## Parametre {#parameters}

| Nav | Cure | Danasîn |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ew dayîn ku qeydkirin dest pê kir. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata ya qeydkirinê, di nav de status=failed û error_message. |
| $error_message | `string` | Peyama çewtiyê ya ji tomarvanê ku ji bo mirov tê famkirin. |

### Ji {#since}

- 2.0.0
### Çavkanî {#source}

Di [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) de li rêza 1250 hatiye pênasekirin.
