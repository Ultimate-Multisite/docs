---
id: wu_domain_seller_process_purchase
title: Akcja - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Akcja: wu_domain_seller_process_purchase {#action-wudomainsellerprocesspurchase}

Wyzwala się, gdy przetwarzany jest zakup domeny po zakończeniu procesu płatności.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Obiekt płatności. |
| $checkout_data | `array<string,mixed>` | Pełne dane z formularza rejestracyjnego/koszyka. |

### Od wersji {#since}

- 2.0.0
### Źródło {#source}

Zdefiniowane w [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) na linii 246
