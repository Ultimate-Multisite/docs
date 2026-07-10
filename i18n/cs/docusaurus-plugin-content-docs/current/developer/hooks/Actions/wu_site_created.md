---
id: wu_site_created
title: Akce - wu_site_created
sidebar_label: wu_site_created
_i18n_hash: 0f7bc337be7a1f9c47c1e442fe04b9ae
---
# Akce: wu_site_created {#action-wusitecreated}

Spouští se, když je vytvořeno nové místo (site) poprvé.

Nejsou spouštěny, pokud je místo duplikováno z šablonky.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $data | `array` | Objektová data, která budou uložena. |
| $site | `\Site` | Instancí objektu. |

### Od {#since}

- 2.0.0
### Zdroj {#source}

Definováno v [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1652) na řádku 1652
