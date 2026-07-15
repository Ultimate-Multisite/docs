---
id: wu_domain_became_primary
title: Действие - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

Изрисква се, когато домейнът става основен за сайта.

Това действие се активира, когато флагът `primary_domain` на домейна бъде зададен на `true`, независимо дали създавате нов основен домейн или актуализирате съществуващ домейн, за да го направите основен.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Домейнът, който стана основен. |
| $blog_id | `int` | ID на блога на засегнатата локация. |
| $was_new | `bool` | Дали това е новосъздаден домейн. |

### Since {#since}

- 2.0.0
### Source {#source}

Дефиниран в [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) на линия 560
