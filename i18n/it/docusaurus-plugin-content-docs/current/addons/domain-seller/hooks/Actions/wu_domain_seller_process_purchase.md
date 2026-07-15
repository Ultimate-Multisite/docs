---
id: wu_domain_seller_process_purchase
title: Azione - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Azione: wu_domain_seller_process_purchase

Si attiva quando viene elaborato l'acquisto di un dominio dopo il completamento del checkout.

## Parametri {#parameters}

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | L'oggetto pagamento. |
| $checkout_data | `array&lt;string,mixed&gt;` | Tutti i dati del checkout provenienti dal modulo di registrazione. |

### Da {#since}

- 2.0.0
### Fonte {#source}

Definito in [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) alla riga 246
