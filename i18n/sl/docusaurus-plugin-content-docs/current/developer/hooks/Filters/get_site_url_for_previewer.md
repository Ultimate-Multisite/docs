---
id: get_site_url_for_previewer
title: Filter - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer

Omogoča razvijalcem pluginov filtriranje URL-ja, uporabljenega v predogledovalniku

## Parametri

| Ime | Vrsta | Opis |
|------|------|-------------|
| $domain | `string` | Privzeta domena, ki se trenutno uporablja, uporabno za prilagoditve |
| $domain_options | `array` | Seznam vseh možnosti domen, vnesenih v Ultimate Multisite Settings -&gt; Network Settings -&gt; Domain Options |

### Od različice

- 1.7.2
### Vir

Definirano v [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) v vrstici 812


## Vrne
Nova domena za uporabo
