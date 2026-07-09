---
id: wu_page_this-id_load
title: 'Әрекет - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load

Плагин әзірлеушілеріне біздің беттерімізге қосымша hooks қосуға мүмкіндік береді.

## Параметрлер

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $id | `string` | Осы беттің ID-і. |
| $page_hook | `string` | Осы беттің page hook-ы. |
| $admin_page | `self` | Бет данасы. |

### Бастап

- 1.8.2
- 2.0.4: Үшінші параметр қосылды: бет данасы.
### Дереккөз

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) ішінде 332-жолда анықталған
