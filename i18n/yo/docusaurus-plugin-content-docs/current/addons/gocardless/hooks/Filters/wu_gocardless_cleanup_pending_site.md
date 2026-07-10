---
id: wu_gocardless_cleanup_pending_site
title: Àlẹmọ - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Àlẹmọ: wu_gocardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

Ó máa ń ṣiṣẹ́ ṣáájú pípa site tó ń dúró tí kò ní olùní rẹ́ fún membership GoCardless tí a fagilé.

Dá `false` padà láti inú àlẹmọ yìí láti dènà píparẹ́.

## Àwọn parameter {#parameters}

| Orúkọ | Iru | Àpèjúwe |
|------|------|-------------|
| $blog_id | `int` | ID blog WordPress ti site tó ń dúró. |
| $membership | `\WP_Ultimo\Models\Membership` | Membership tí a fagilé. |
| $old_status | `string` | Ipo ṣáájú fífagilé. |

### Láti igba {#since}

- 2.0.0
### Orísun {#source}

A ṣàlàyé rẹ̀ nínú [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) ní laini 1086
