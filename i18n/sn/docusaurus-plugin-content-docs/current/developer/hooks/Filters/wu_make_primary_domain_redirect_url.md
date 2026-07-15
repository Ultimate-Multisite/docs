---
id: wu_make_primary_domain_redirect_url
title: Sefa - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Sefa: wu_make_primary_domain_redirect_url

Inosefa redirect URL mushure mekuita domain primary.

Inobvumira vagadziri kugadzirisa uko vashandisi vanoendeswa mushure mekubudirira kuseta domain se primary. Nekusarudzika, inoendesa kuURL yazvino pa site huru, kana ku admin URL ye site iri kugadziridzwa.

## Maparameter {#parameters}

| Zita | Rudzi | Tsananguro |
|------|------|-------------|
| $redirect_url | `string` | Redirect URL yekusarudzika. Ingava URL yazvino (kana iri site huru) kana admin URL ye site yazvino. |
| $current_site | `int` | ID ye site ine domain iri kuitwa primary. |
| $domain | `\Domain` | Chinhu che domain chakaitwa primary. |
| $old_primary_domains | `array` | Array yemaID ema domain aimbova primary. |

### Kubva {#since}

- 2.0.0
### Kwakabva {#source}

Yakatsanangurwa mu [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) pamutsara 639


## Zvinodzoka {#returns}
Redirect URL yakasefwa.
