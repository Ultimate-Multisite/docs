---
id: wu_make_primary_domain_redirect_url
title: Фільтр - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Фільтрує URL-адресу перенаправлення після встановлення домену як основного.

Дозволяє розробникам налаштувати, куди користувачі будуть перенаправлені після успішного встановлення домену як основного. За замовчуванням перенаправлення відбувається на поточну URL-адресу на головному сайті або на URL-адресу адміністратора сайту, який зараз змінюється.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | URL-адреса перенаправлення за замовчуванням. Це може бути поточна URL-адреса (якщо це головний сайт) або URL-адреса адміністратора поточного сайту. |
| $current_site | `int` | ID сайту, домен якого робиться основним. |
| $domain | `\Domain` | Об'єкт домену, який було встановлено як основний. |
| $old_primary_domains | `array` | Масив ID доменів, які були основними раніше. |

### Since

- 2.0.0
### Source

Визначено в [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) на рядку 639


## Returns
Відфільтрована URL-адреса перенаправлення.
