---
id: wu_get_site_domain_and_path
title: Сүзгі - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Сүзгі: wu_get_site_domain_and_path

Әзірлеушілерге домен/жол жұптарын өзгертуге мүмкіндік береді.

Бұл әртүрлі нәрселер үшін пайдалы болуы мүмкін, мысалы, қандай да бір staging шешімін, әртүрлі серверлерді және т.б. іске асыру.

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $d | `object` | Домен және жол кілттері бар ағымдағы объект. |
| $path_or_subdomain | `string` | Функцияға берілген бастапқы жол/субдомен. |

### Бастап {#since}

- 2.0.0
### Дереккөз {#source}

[`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) ішінде 235-жолда анықталған


## Қайтарады {#returns}
Домен және жол кілттері бар объект.
