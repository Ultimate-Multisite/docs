---
id: wu_use_domain_mapping
title: Филтер - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Филтер: wu_use_domain_mapping {#filter-wuusedomainmapping}

Одредува дали треба да се користи мапирање

Вообичаено, ќе сакате да дозволите да се користат само активни мапирања. Меѓутоа, ако сакате да користите понапредна логика или да дозволите и неактивни домени да се мапираат, едноставно филтрирајте тука.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $is_active | `bool` | Дали мапирањето треба да се третира како активно? |
| $mapping | `\Domain` | Мапирање што го проверуваме |
| $domain | `string` |  |

### Извор {#source}

Дефинирано во [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) на линија 391
