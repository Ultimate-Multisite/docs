---
id: wu_make_primary_domain_redirect_url
title: فلټر - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

د redirect URL فلټر کوي وروسته له دې چې یو domain لومړنی شي.

پرمختیاکوونکو ته اجازه ورکوي چې دا دودیز کړي چې کاروونکي د یو domain په بریالیتوب سره د لومړني په توګه له ټاکلو وروسته چېرته ولېږدول شي. په تلواله، په اصلي site کې اوسني URL ته، یا د بدلېدونکي site admin URL ته redirect کوي.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | د تلوالې redirect URL. یا اوسنی URL (که اصلي site وي) یا د اوسني site admin URL. |
| $current_site | `int` | د هغه site ID چې domain یې لومړنی کېږي. |
| $domain | `\Domain` | هغه domain object چې لومړنی شوی و. |
| $old_primary_domains | `array` | د هغو domains د IDs array چې مخکې لومړني وو. |

### Since {#since}

- 2.0.0
### Source {#source}

په [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) کې په 639 کرښه تعریف شوی


## Returns {#returns}
فلټر شوی redirect URL.
