---
id: wu_membership_post_renew
title: Дзея - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew {#action-wumembershippostrenew}

Выконваецца пасля пановлення канчатковага тэрміну дзеяння (membership renewal).

## Параметры {#parameters}

| Назва | Тып | Апісан |
|------|------|-------------|
| $expiration | `string` | Новая дата канчатковага тэрміну, якую трэба ўставіць. |
| $membership_id | `int` | ID канчатковага тэрміну дзеяння. |
| $membership | `\Membership` | Объект канчатковага тэрміну дзеяння. |

### З {#since}

- 2.0
### Патварэнне {#source}

Вызначаны ў [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) у 2235-й пакульцы.
