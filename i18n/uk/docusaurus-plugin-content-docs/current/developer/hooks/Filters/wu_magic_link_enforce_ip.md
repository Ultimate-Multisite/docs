---
id: wu_magic_link_enforce_ip
title: Фільтр - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Фільтр: wu_magic_link_enforce_ip {#filter-wumagiclinkenforceip}

Визначає, чи потрібно примусово перевіряти IP-адресу.

Встановіть значення `false`, щоб токени працювали з різних мереж. Це знижує рівень безпеки, але підвищує зручність використання (наприклад, для мобільних користувачів, які перемикають мережі).

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Чи потрібно примусово порівнювати IP-адреси. |

### Since {#since}

- 2.0.0
### Source {#source}

Визначено в [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) на рядку 422
