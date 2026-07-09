---
id: wu_make_primary_domain_redirect_url
title: Filtrilo - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filtrilo: wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

Filtras la alidirektan URL post igi domajnon ĉefa.

Permesas al programistoj agordi kien uzantoj estas alidirektataj post sukcese agordi domajnon kiel ĉefan. Defaŭlte, alidirektas al la nuna URL ĉe la ĉefa retejo, aŭ al la administra URL de la retejo modifata.

## Parametroj {#parameters}

| Nomo | Tipo | Priskribo |
|------|------|-------------|
| $redirect_url | `string` | La defaŭlta alidirekta URL. Aŭ la nuna URL (se ĉefa retejo) aŭ la administra URL de la nuna retejo. |
| $current_site | `int` | La ID de la retejo kies domajno estas igata ĉefa. |
| $domain | `\Domain` | La domajna objekto kiu estis igita ĉefa. |
| $old_primary_domains | `array` | Tabelo de ID-oj de domajnoj kiuj antaŭe estis ĉefaj. |

### Ekde {#since}

- 2.0.0
### Fonto {#source}

Difinita en [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) ĉe linio 639


## Revenoj {#returns}
La filtrita alidirekta URL.
