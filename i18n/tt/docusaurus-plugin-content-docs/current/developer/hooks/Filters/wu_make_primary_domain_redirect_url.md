---
id: wu_make_primary_domain_redirect_url
title: Фильтр - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Фильтр: wu_make_primary_domain_redirect_url

Домен төп итеп билгеләнгәннән соң юнәлтү URL-адресын фильтрлый.

Эшләүчеләргә доменны төп итеп уңышлы куйганнан соң кулланучыларның кая юнәлтеләчәген көйләү мөмкинлеге бирә. Килешү буенча, төп сайттагы агымдагы URL-адреска яки үзгәртелә торган сайтның админ URL-адресына юнәлтә.

## Параметрлар {#parameters}

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $redirect_url | `string` | Килешенгән юнәлтү URL-адресы. Агымдагы URL-адрес (төп сайт булса) яки агымдагы сайтның админ URL-адресы. |
| $current_site | `int` | Домены төп итеп билгеләнә торган сайтның ID-сы. |
| $domain | `\Domain` | Төп итеп билгеләнгән домен объекты. |
| $old_primary_domains | `array` | Элек төп булган доменнарның ID-лары массивы. |

### Версиядән башлап {#since}

- 2.0.0
### Чыганак {#source}

[`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) эчендә 639 нчы юлда билгеләнгән


## Кайтара {#returns}
Фильтрланган юнәлтү URL-адресы.
