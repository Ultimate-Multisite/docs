---
id: wu_gocardless_cleanup_pending_site
title: Чыпка - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Чыпка: wu_gocardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

Жокко чыгарылган GoCardless мүчөлүгү үчүн жетим калган күтүүдөгү сайтты өчүрүүдөн мурун иштейт.

Өчүрүүнү болтурбоо үчүн бул чыпкадан false кайтарыңыз.

## Параметрлер {#parameters}

| Аталышы | Түрү | Сүрөттөмө |
|------|------|-------------|
| $blog_id | `int` | Күтүүдөгү сайттын WordPress блог ID'си. |
| $membership | `\WP_Ultimo\Models\Membership` | Жокко чыгарылган мүчөлүк. |
| $old_status | `string` | Жокко чыгарууга чейинки абал. |

### Чыккан версиясы {#since}

- 2.0.0
### Булак {#source}

1086-сапта [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) ичинде аныкталган
