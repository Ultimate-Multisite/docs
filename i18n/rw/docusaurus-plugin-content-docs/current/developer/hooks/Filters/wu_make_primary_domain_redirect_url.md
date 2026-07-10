---
id: wu_make_primary_domain_redirect_url
title: Akayunguruzo - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Muyunguruzi: wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

Iyungurura URL yo koherezaho nyuma yo kugira domaine iya mbere.

Yemerera abatunganya porogaramu guhindura aho abakoresha boherezwa nyuma yo gushyiraho domaine nk’iya mbere neza. Ku buryo busanzwe, yohereza kuri URL iriho ku rubuga nyamukuru, cyangwa kuri admin URL y’urubuga ruri guhindurwa.

## Ibipimo {#parameters}

| Izina | Ubwoko | Ibisobanuro |
|------|------|-------------|
| $redirect_url | `string` | URL isanzwe yo koherezaho. Yaba URL iriho (niba ari urubuga nyamukuru) cyangwa admin URL y’urubuga ruriho. |
| $current_site | `int` | ID y’urubuga domaine yarwo iri kugirwa iya mbere. |
| $domain | `\Domain` | Ikintu cya domaine cyagizwe icya mbere. |
| $old_primary_domains | `array` | Urutonde rwa IDs za domaines zari zisanzwe ari iza mbere. |

### Kuva {#since}

- 2.0.0
### Inkomoko {#source}

Byasobanuwe muri [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) ku murongo 639


## Ibyo isubiza {#returns}
URL yo koherezaho yayunguruwe.
