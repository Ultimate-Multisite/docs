---
id: wu_bypass_unset_current_user
title: Сүзгі - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Сүзгі: wu_bypass_unset_current_user {#filter-wubypassunsetcurrentuser}

Әзірлеушілерге ағымдағы пайдаланушыны unset ету кодын айналып өтуге мүмкіндік береді.

Null-дан басқа кез келген нәрсені қайтару жүйеге кірген ағымдағы пайдаланушыны unset етуді айналып өтеді. Бұл кейбір сценарийлерде пайдалы болуы мүмкін, мысалы, әкімші панельдері ретінде пайдаланылатын ішкі сайттармен жұмыс істегенде.

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $null_or_bypass | `mixed` | Жалғастыру үшін Null, ал оны айналып өту үшін кез келген басқа мән. |
| $current_user | `false\|\WP_User` | Ағымдағы пайдаланушы нысаны. |

### Бастап {#since}

- 2.0.11
### Дереккөз {#source}

[`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) ішінде 221-жолда анықталған


## Қайтарады {#returns}
