---
id: wu_make_primary_domain_redirect_url
title: Filtru - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Filtrează URL-ul de redirecționare după ce un domeniu este setat ca principal.

Permite dezvoltatorilor să personalizeze unde sunt redirecționați utilizatorii după ce au setat cu succes un domeniu ca principal. În mod implicit, redirecționează către URL-ul curent de pe site-ul principal sau către URL-ul de administrare al site-ului care este modificat.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | URL-ul de redirecționare implicit. Este fie URL-ul curent (dacă este site-ul principal), fie URL-ul de administrare al site-ului curent. |
| $current_site | `int` | ID-ul site-ului a cărui domeniu este setat ca principal. |
| $domain | `\Domain` | Obiectul de domeniu care a fost setat ca principal. |
| $old_primary_domains | `array` | Matricea de ID-uri ale domeniilor care erau anterior principale. |

### Since

- 2.0.0
### Source

Definit în [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) la linia 639


## Returns
URL-ul de redirecționare filtrat.
