---
id: wu_make_primary_domain_redirect_url
title: Filtre - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filtre: wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

Filtra l’URL de redirecció després de fer que un domini sigui primari.

Permet als desenvolupadors personalitzar on es redirigeixen els usuaris després d’establir correctament un domini com a primari. Per defecte, redirigeix a l’URL actual del lloc principal, o a l’URL d’administració del lloc que s’està modificant.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $redirect_url | `string` | L’URL de redirecció per defecte. Ja sigui l’URL actual (si és el lloc principal) o l’URL d’administració del lloc actual. |
| $current_site | `int` | L’ID del lloc el domini del qual s’està fent primari. |
| $domain | `\Domain` | L’objecte de domini que s’ha fet primari. |
| $old_primary_domains | `array` | Matriu d’ID de dominis que anteriorment eren primaris. |

### Des de {#since}

- 2.0.0
### Font {#source}

Definit a [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) a la línia 639


## Retorna {#returns}
L’URL de redirecció filtrada.
