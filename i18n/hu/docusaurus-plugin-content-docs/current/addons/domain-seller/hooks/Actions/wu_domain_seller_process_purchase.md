---
id: wu_domain_seller_process_purchase
title: Akció - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Akció: wu_domain_seller_process_purchase {#action-wudomainsellerprocesspurchase}

Keresztül fog futni, amikor egy tartományvásárlás feldolgozásra kerül a fizetés végrehajtása után.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | A fizetési objektum. |
| $checkout_data | `array<string,mixed>` | Az teljes checkout adatai a regisztrációs űrlapotól. |

### Since {#since}

- 2.0.0
### Source {#source}

Definíciója található [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) fájlban, 246-sorban.
