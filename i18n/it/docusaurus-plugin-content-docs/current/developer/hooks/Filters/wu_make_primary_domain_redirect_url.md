---
id: wu_make_primary_domain_redirect_url
title: Filtro - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filtro: wu_make_primary_domain_redirect_url

Filtra l'URL di reindirizzamento dopo aver impostato un dominio come primario.

Consente agli sviluppatori di personalizzare dove gli utenti vengono reindirizzati dopo aver impostato con successo un dominio come primario. Per impostazione predefinita, il reindirizzamento avviene all'URL corrente del sito principale o all'URL di amministrazione del sito in modifica.

## Parameters {#parameters}

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $redirect_url | `string` | L'URL di reindirizzamento predefinito. L'URL corrente (se sito principale) o l'URL di amministrazione del sito corrente. |
| $current_site | `int` | L'ID del sito il cui dominio viene impostato come primario. |
| $domain | `\Domain` | L'oggetto dominio che è stato impostato come primario. |
| $old_primary_domains | `array` | Array di ID dei domini che erano precedentemente primari. |

### Da {#since}

- 2.0.0

### Fonte {#source}

Definito in [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) alla riga 639

## Restituisce {#returns}

L'URL di reindirizzamento filtrato.
