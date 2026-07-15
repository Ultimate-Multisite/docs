---
id: wu_magic_link_enforce_ip
title: Фильтр - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Сөзгеч: wu_magic_link_enforce_ip

IP адресын тикшерүне мәҗбүри итү-итмәүне сөзә.

Токеннар төрле челтәрләрдән эшләсен өчен false итеп көйләгез. Бу иминлекне киметә, ләкин куллану уңайлыгын арттыра (мәсәлән, челтәрләр арасында күчеп йөрүче мобиль кулланучылар өчен).

## Параметрлар {#parameters}

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $enforce | `bool` | IP адресы туры килүен мәҗбүри тикшерү-тикшермәү. |

### Кайчаннан {#since}

- 2.0.0
### Чыганак {#source}

[`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) эчендә 422 нче юлда билгеләнгән
