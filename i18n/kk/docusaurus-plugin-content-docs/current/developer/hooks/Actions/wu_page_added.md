---
id: wu_page_added
title: Әрекет - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Әрекет: wu_page_added

Плагин әзірлеушілеріне беттер тіркелген кезде қосымша әрекеттерді орындауға мүмкіндік береді.

Тек белгілі бір бет қаралып жатқанда ғана орындалатын wu_page_load-тен айырмашылығы, бұл hook Ultimate Multisite кодын пайдаланып қосылатын әрбір әкімші беті үшін тіркеу кезінде орындалады.

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $page_id | `string` | Осы беттің ID-і. |
| $page_hook | `string` | Осы беттің hook атауы. |

### Бастап {#since}

- 2.0.0
### Дереккөз {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) файлында 228-жолда анықталған.
