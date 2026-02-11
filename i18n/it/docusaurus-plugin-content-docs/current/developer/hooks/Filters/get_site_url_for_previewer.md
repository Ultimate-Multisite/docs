---
id: get_site_url_for_previewer
title: Filtro - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filtro: get_site_url_for_previewer

Consenti agli sviluppatori di plugin di filtrare l'URL utilizzato nel visualizzatore

## Parameters

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $domain | `string` | Dominio predefinito attualmente in uso, utile per manipolazioni |
| $domain_options | `array` | Elenco di tutte le opzioni di dominio inserite nelle Impostazioni di Ultimate Multisite -> Impostazioni di Rete -> Opzioni di Dominio |

### Since

- 1.7.2

### Source

Definito in [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) alla riga 812

## Returns
Nuovo dominio da utilizzare
