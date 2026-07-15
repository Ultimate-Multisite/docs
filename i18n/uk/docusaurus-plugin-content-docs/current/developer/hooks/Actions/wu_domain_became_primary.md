---
id: wu_domain_became_primary
title: Action - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

Викликається, коли домен стає основним для сайту.

Ця дія спрацьовує, коли прапорець `primary_domain` домену встановлюється у `true` — як при створенні нового основного домену, так і при оновленні існуючого домену, щоб зробити його основним.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Домен, який став основним. |
| $blog_id | `int` | ID блогу, на якому відбулася зміна. |
| $was_new | `bool` | Чи є це новоствореним доменом. |

### Since {#since}

- 2.0.0
### Source {#source}

Визначено в [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) на рядку 560
