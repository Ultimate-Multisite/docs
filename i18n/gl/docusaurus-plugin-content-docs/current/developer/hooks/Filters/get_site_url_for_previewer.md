---
id: get_site_url_for_previewer
title: Filtro - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filtro: get_site_url_for_previewer {#filter-getsiteurlforpreviewer}

Permite aos desenvolvedores de plugin filtrar o URL usado no previsualizador

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $domain | `string` | Dominio predeterminado que se está usando agora mesmo, útil para manipulacións |
| $domain_options | `array` | Lista de todas as opcións de dominio introducidas en Ultimate Multisite Settings -&gt; Network Settings -&gt; Domain Options |

### Desde {#since}

- 1.7.2
### Fonte {#source}

Definido en [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) na liña 812


## Devolve {#returns}
Novo dominio que se usará
