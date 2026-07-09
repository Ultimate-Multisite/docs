---
id: wu_make_primary_domain_redirect_url
title: Lim - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Lim: wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

Lim qhov redirect URL tom qab teeb ib domain ua primary.

Tso cai rau cov developer kho kom haum qhov chaw uas cov neeg siv yuav raug redirect mus tom qab teeb ib domain ua primary tiav lawm. Raws li default, yuav redirect mus rau URL tam sim no ntawm lub site tseem ceeb, lossis mus rau admin URL ntawm lub site uas tab tom raug hloov.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | Qhov redirect URL default. Yog URL tam sim no (yog tias yog site tseem ceeb) lossis admin URL ntawm site tam sim no. |
| $current_site | `int` | Tus ID ntawm lub site uas nws domain tab tom raug teeb ua primary. |
| $domain | `\Domain` | Lub domain object uas raug teeb ua primary. |
| $old_primary_domains | `array` | Array ntawm cov ID ntawm cov domain uas yav dhau los yog primary. |

### Since {#since}

- 2.0.0
### Source {#source}

Teev tseg hauv [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) ntawm kab 639


## Returns {#returns}
Qhov redirect URL uas twb raug lim lawm.
