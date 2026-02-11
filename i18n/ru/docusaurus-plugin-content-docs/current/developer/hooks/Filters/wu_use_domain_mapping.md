---
id: wu_use_domain_mapping
title: Фильтр - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Фильтр: wu_use_domain_mapping

Определить, следует ли использовать отображение

Обычно вы хотите разрешить использовать только активные отображения. Однако, если вы хотите использовать более продвинутую логику или разрешить отображение неактивных доменов, просто отфильтруйте здесь.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $is_active | `bool` | Должно ли отображение рассматриваться как активное? |
| $mapping | `\Domain` | Отображение, которое мы проверяем |
| $domain | `string` |  |

### Источник

Определено в [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) на строке 391
