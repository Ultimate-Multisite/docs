---
id: wu_checkout_form_base_domains
title: Süzgüç - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filter: wu_checkout_form_base_domains

Paýlaşylan checkout-form esasy domenlerini, mapped-domain ýazgylaryna öwrülmeli däl görnüşde filterleýär.

Bu filteri bir integrasiýa checkout form **Site URL** meýdanlary üçin goşmaça esasy domenleri berende ulanyň. Bu filter tarapyndan yzyna gaýtarylýan domenler her-site ýörite domenleriň ýerine paýlaşylan registrasiýa hostlary hökmünde kabul edilýär.

## Parametrler {#parameters}

| Ady | Görnüşi | Düşündiriş |
|------|------|-------------|
| $domains | `array` | Checkout form konfigurasiýasyndan ýygnalan paýlaşylan esasy domenler. |

### Şondan bäri {#since}

- 2.13.0

### Çeşme {#source}

`inc/functions/domain.php` içinde kesgitlenen.


## Yzyna gaýtarýar {#returns}

Kadalaşdyrylan checkout-form esasy domenleriniň massiwi.
