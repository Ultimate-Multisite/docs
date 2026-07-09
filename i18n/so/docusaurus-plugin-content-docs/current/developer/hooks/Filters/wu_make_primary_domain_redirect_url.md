---
id: wu_make_primary_domain_redirect_url
title: Shaandheeye - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Waxay shaandhaysaa URL-ka dib-u-jihaynta ka dib marka domain laga dhigo primary.

Waxay u oggolaanaysaa horumariyeyaasha inay habeeyaan meesha isticmaalayaasha loo dib-u-jihaynayo ka dib marka si guul leh domain loogu dejiyo primary. Sida caadiga ah, waxay u dib-u-jihaysaa URL-ka hadda ee site-ka weyn, ama URL-ka admin ee site-ka la beddelayo.

## Parameters

| Magac | Nooc | Sharaxaad |
|------|------|-------------|
| $redirect_url | `string` | URL-ka dib-u-jihaynta caadiga ah. Ama URL-ka hadda (haddii uu yahay site-ka weyn) ama URL-ka admin ee site-ka hadda. |
| $current_site | `int` | ID-ga site-ka domain-kiisa laga dhigayo primary. |
| $domain | `\Domain` | Shayga domain-ka ee laga dhigay primary. |
| $old_primary_domains | `array` | Array ka kooban ID-yada domains-kii hore u ahaa primary. |

### Tan iyo

- 2.0.0
### Source

Waxaa lagu qeexay [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) khadka 639


## Returns
URL-ka dib-u-jihaynta ee la shaandheeyay.
