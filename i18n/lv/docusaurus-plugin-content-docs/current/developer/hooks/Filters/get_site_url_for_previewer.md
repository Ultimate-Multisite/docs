---
id: get_site_url_for_previewer
title: Filtrs - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filtrs: get_site_url_for_previewer

Ļauj plugin izstrādātājiem filtrēt URL, kas tiek izmantots priekšskatītājā

## Parametri

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $domain | `string` | Noklusējuma domēns, kas pašlaik tiek izmantots; noderīgs manipulācijām |
| $domain_options | `array` | Saraksts ar visām domēna opcijām, kas ievadītas Ultimate Multisite iestatījumos -&gt; tīkla iestatījumos -&gt; domēna opcijās |

### Kopš

- 1.7.2
### Avots

Definēts [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) 812. rindā


## Atgriež
Jaunu domēnu, kas tiks izmantots
