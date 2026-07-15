---
id: wu_magic_link_enforce_ip
title: Фільтр - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

Вызначае, ці трэба вымагаць праверку IP-адрэса.

Калі ўставаць гэта ў `false`, то токены будуць працаваць з розных сеткавых асноў. Гэта зніжае ўзровень бяспекі, але павышае зручнасць выкарыстання (напрыклад, для карыстальнікаў на мабільных тэлефонах, якія пераключаюць сеткі).

## Параметры {#parameters}

| Назва | Тып | Апісан |
|------|------|-------------|
| $enforce | `bool` | Ці трэба вымагаць адпаведнасць IP-адрэса. |

### З {#since}

- 2.0.0
### Паходжанне {#source}

Вызначана ў [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) на 422-й паўніне.
