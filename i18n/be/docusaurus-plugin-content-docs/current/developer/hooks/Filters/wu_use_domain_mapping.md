---
id: wu_use_domain_mapping
title: Фільтр - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

Вызначае, ці трэба выкарыстоўваць мапінг

Заагульнасць вы правяраеце, што трэба дазваляць выкарыстоўваць толькі актыўныя мапінгі. Аднак, калі вам патрэбна больш прасудаестка логіка, або вы хочаце дазволіць мапінг для неактыўных домен выкарыстоўваць, проста адфільтруйце гэта тут.

## Параметры {#parameters}

| Назва | Тып | Апісан |
|------|------|-------------|
| $is_active | `bool` | Ці трэба тратаваць мапінг як актыўны? |
| $mapping | `\Domain` | Мапінг, які мы праверяем |
| $domain | `string` | |

### Выказчык (Source) {#source}

Вызначаны ў [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) на 391-й кропцы
