---
id: wu_make_primary_domain_redirect_url
title: Filtras - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filtras: wu_make_primary_domain_redirect_url

Filtruoja peradresavimo URL po to, kai domenas padaromas pagrindiniu.

Leidžia kūrėjams pritaikyti, kur naudotojai peradresuojami sėkmingai nustačius domeną kaip pagrindinį. Pagal numatytuosius nustatymus peradresuojama į dabartinį pagrindinės svetainės URL arba į keičiamos svetainės administravimo URL.

## Parametrai

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $redirect_url | `string` | Numatytasis peradresavimo URL. Arba dabartinis URL (jei pagrindinė svetainė), arba dabartinės svetainės administravimo URL. |
| $current_site | `int` | Svetainės, kurios domenas padaromas pagrindiniu, ID. |
| $domain | `\Domain` | Domeno objektas, kuris buvo padarytas pagrindiniu. |
| $old_primary_domains | `array` | Domenų, kurie anksčiau buvo pagrindiniai, ID masyvas. |

### Nuo

- 2.0.0
### Šaltinis

Apibrėžta [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) 639 eilutėje


## Grąžina
Filtruotą peradresavimo URL.
