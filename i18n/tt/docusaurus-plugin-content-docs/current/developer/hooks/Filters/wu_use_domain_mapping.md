---
id: wu_use_domain_mapping
title: Сөзгеч - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Фильтр: wu_use_domain_mapping

Туры китерү кулланылырга тиешме икәнен билгеләгез

Гадәттә, сез куллануга бары тик актив туры китерүләрне генә рөхсәт итәргә теләрсез. Әмма әгәр сез катлаулырак логика кулланырга яки актив булмаган доменнарны да туры китерергә рөхсәт итәргә телисез икән, монда гына фильтрлагыз.

## Параметрлар {#parameters}

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $is_active | `bool` | Туры китерү актив дип каралырга тиешме? |
| $mapping | `\Domain` | Без тикшерә торган туры китерү |
| $domain | `string` |  |

### Чыганак {#source}

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) эчендә 391 нче юлда билгеләнгән
