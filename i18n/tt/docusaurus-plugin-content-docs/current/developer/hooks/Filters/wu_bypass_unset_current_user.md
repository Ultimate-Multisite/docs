---
id: wu_bypass_unset_current_user
title: Фильтр - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Сөзгеч: wu_bypass_unset_current_user {#filter-wubypassunsetcurrentuser}

Эшкәртүчеләргә агымдагы кулланучыны unset итү кодын урап узарга рөхсәт итә.

null-дан башка теләсә нәрсә кайтару кергән агымдагы кулланучыны unset итүне урап узачак. Бу кайбер очракларда файдалы булырга мөмкин, мәсәлән, админ панельләр буларак кулланылган суб-сайтлар белән эшләгәндә.

## Параметрлар {#parameters}

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $null_or_bypass | `mixed` | Дәвам итү өчен Null, ә аны урап узу өчен теләсә нәрсә. |
| $current_user | `false\|\WP_User` | Агымдагы кулланучы объекты. |

### Версиядән башлап {#since}

- 2.0.11
### Чыганак {#source}

[`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) эчендә 221 нче юлда билгеләнгән


## Кайтара {#returns}
