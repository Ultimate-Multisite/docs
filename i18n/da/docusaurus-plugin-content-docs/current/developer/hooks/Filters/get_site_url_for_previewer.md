---
id: get_site_url_for_previewer
title: Filter - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer

Tillad plugin-udviklere at filtrere den URL, der bruges i previeweren

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $domain | `string` | Standarddomæne, der bruges lige nu, nyttigt til manipulationer |
| $domain_options | `array` | Liste over alle domæneindstillinger, der er indtastet i Ultimate Multisite Indstillinger -&gt; Netværksindstillinger -&gt; Domæneindstillinger |

### Siden

- 1.7.2
### Kilde

Defineret i [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) på linje 812


## Returnerer
Nyt domæne, der skal bruges
