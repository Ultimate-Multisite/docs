---
id: wu_use_domain_mapping
title: Филтер - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Филтер: wu_use_domain_mapping

Одређује да ли мапирање треба да се користи

Обично ћете желети да дозволите коришћење само активних мапирања. Међутим, ако желите да користите напреднију логику или да дозволите да се мапирају и неактивни домени, једноставно филтрирајте овде.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | Да ли мапирање треба третирати као активно? |
| $mapping | `\Domain` | Мапирање које прегледамо |
| $domain | `string` |  |

### Извор {#source}

Дефинисано у [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) у реду 391
