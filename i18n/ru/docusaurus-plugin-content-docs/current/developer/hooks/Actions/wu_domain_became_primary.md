---
id: wu_domain_became_primary
title: Действие - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

Вызывается, когда домен становится основным доменом для сайта.

Это действие срабатывает, когда флаг `primary_domain` домена устанавливается в `true`, либо при создании нового основного домена, либо при обновлении существующего домена до основного.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Домен, который стал основным. |
| $blog_id | `int` | ID блога затронутого сайта. |
| $was_new | `bool` | Определяет, был ли это новый созданный домен. |

### С версии

- 2.0.0

### Источник

Определено в [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) на строке 560
