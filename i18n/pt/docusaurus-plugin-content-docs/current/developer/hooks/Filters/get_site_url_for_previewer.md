---
id: get_site_url_for_previewer
title: Filtro - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filtro: get_site_url_for_previewer

Permite que desenvolvedores de plugin filtrem o URL usado no previewer

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $domain | `string` | Domínio padrão a ser usado agora, útil para manipulações |
| $domain_options | `array` | Lista de todas as opções de domínio inseridas em Ultimate Multisite Settings -&gt; Network Settings -&gt; Domain Options |

### Desde {#since}

- 1.7.2
### Fonte {#source}

Definido em [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) na linha 812


## Retorna {#returns}
Novo domínio a ser usado
