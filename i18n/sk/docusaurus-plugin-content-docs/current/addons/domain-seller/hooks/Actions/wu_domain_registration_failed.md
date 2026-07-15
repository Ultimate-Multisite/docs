---
id: wu_domain_registration_failed
title: Akcia - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Akcia: wu_domain_registration_failed

Spustí sa po zlyhaní pokusu o registráciu domény.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Platba, ktorá spustila registráciu. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadáta registrácie vrátane status=failed a error_message. |
| $error_message | `string` | Čitateľná chybová správa od registrátora. |

### Od verzie {#since}

- 2.0.0
### Zdroj {#source}

Definované v [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) na riadku 1250
