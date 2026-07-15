---
id: wu_magic_link_enforce_user_agent
title: Фільтр - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent

Вызначае, ці трэба вымагаць праверку user agent.

Калі ўсталяваць гэта ў `false`, то токены працуюць у розных браўзеры/прыладах. Гэта зніжае бяспечнасць, але павышае зручнасць выкарыстання.

## Параметры {#parameters}

| Назва | Тып | Апісан |
|------|------|-------------|
| $enforce | `bool` | Ці трэба вымагаць адпаведнасць user agent. |

### З {#since}

- 2.0.0
### Патварэнне {#source}

Вызначана ў [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) у 410-й пакульцы
