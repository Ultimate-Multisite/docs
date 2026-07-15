---
id: wu_sso_url
title: Фильтр - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Чыпка: wu_sso_url

Домендер аралык кардар аракеттери үчүн кайтарылардан мурун түзүлгөн SSO URLдарын чыпкалайт.

Бул чыпканы интеграция sovereign-tenant SSO шилтемесине ишенимдүү контекст кошушу же Ultimate Multisite'тын token текшерүүсүн сактоо менен broker URLын алмаштыруусу керек болгондо колдонуңуз.

## Параметрлер {#parameters}

| Аты | Түрү | Сүрөттөмө |
|------|------|-------------|
| $sso_url | `string` | Түзүлгөн SSO URL. |
| $user | `WP_User` | SSO кирүүсү аркылуу аутентификациялана турган колдонуучу. |
| $site_id | `int` | Кирүү үчүн максаттуу сайт IDси. |
| $redirect_to | `string` | SSO текшерүүсү ийгиликтүү болгондон кийинки багыт URLы. |

### Баштап {#since}

- 2.13.0

### Булагы {#source}

`inc/sso/class-sso.php` ичинде аныкталган.


## Кайтарым {#returns}

Чыпкаланган SSO URL.
