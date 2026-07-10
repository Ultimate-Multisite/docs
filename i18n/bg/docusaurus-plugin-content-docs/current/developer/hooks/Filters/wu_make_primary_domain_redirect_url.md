---
id: wu_make_primary_domain_redirect_url
title: Филтър - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

Филтрира URL-адресата за пренасочване след задаване на домейн като основен.

Позволява на разработчиците да персонализират къде потребителите са пренасочвани след успешно задаване на домейн като основен. По подразбиране, пренасочването е към текущата URL-адреса на основния сайт или към административната URL-адреса на сайт, който се модифицира.

## Параметри {#parameters}

| Name | Type | Описание |
|------|------|-------------|
| $redirect_url | `string` | По подразбиране URL-адресата за пренасочване. Това може да бъде текущата URL-адреса (ако е основен сайт) или административната URL-адреса на текущия сайт. |
| $current_site | `int` | ID на сайта, чийто домейн се прави основен. |
| $domain | `\Domain` | Обектът на домейна, който беше зададен като основен. |
| $old_primary_domains | `array` | Масив от ID-та на домейни, които преди това са били основни. |

### Since {#since}

- 2.0.0
### Source {#source}

Дефиниран в [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) на линия 639


## Връща {#returns}
Филтрираната URL-адреса за пренасочване.
