---
id: wu_make_primary_domain_redirect_url
title: Filter - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Filtruje URL pro přesměrování po nastavení domény jako primární.

Umožňuje vývojářům přizpůsobit, kam jsou uživatelé přesměrováni po úspěšném nastavení domény jako primární. Výchozí chování je, že se přesměrování provede na aktuální URL na hlavní stránce, nebo na administrátorská URL stránky, která je modifikována.

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $redirect_url | `string` | Výchozí URL pro přesměrování. Buď aktuální URL (pokud jde o hlavní stránku), nebo administrátorská URL aktuální stránky. |
| $current_site | `int` | ID stránky, jejíž doména je nastavována jako primární. |
| $domain | `\Domain` | Objekt domény, který byl stanoven jako primární. |
| $old_primary_domains | `array` | Pole ID domén, které byly dříve primární. |

### Od

- 2.0.0
### Zdroj

Definováno v [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) na řádku 639

## Vrací
Filtrovaná URL pro přesměrování.
