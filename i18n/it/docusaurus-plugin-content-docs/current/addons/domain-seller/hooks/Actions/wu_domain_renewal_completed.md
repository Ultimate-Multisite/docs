---
id: wu_domain_renewal_completed
title: Azione - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

Viene eseguito dopo che un dominio è stato rinnovato con successo.

## Parametri {#parameters}

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Il pagamento che ha innescato il rinnovo. |
| $renewal_data | `array<string,mixed>` | Metadati di rinnovo (nome del dominio, anni, id cliente, ecc.). |
| $result | `array<string,mixed>` | Array di risultati grezzi restituito dal registrar, che include la nuova `expiry_date`. |

### Da {#since}

- 2.0.0
### Sorgente {#source}

Definito in [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) alla riga 594
