---
id: wu_checkout_form_base_domains
title: Filter - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filter: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

Filter gedeelde afrekenvorm-basisdomeine wat nie gekarteerde-domeinrekords behoort te word nie.

Gebruik hierdie filter wanneer ’n integrasie bykomende basisdomeine vir afrekenvorm-**Werf-URL**-velde verskaf. Domeine wat deur hierdie filter teruggestuur word, word as gedeelde registrasiegashere behandel in plaas van pasgemaakte domeine per werf.

## Parameters {#parameters}

| Naam | Tipe | Beskrywing |
|------|------|-------------|
| $domains | `array` | Gedeelde basisdomeine wat uit afrekenvorm-konfigurasie versamel is. |

### Sedert {#since}

- 2.13.0

### Bron {#source}

Gedefinieer in `inc/functions/domain.php`.


## Gee terug {#returns}

Skikking van genormaliseerde afrekenvorm-basisdomeine.
