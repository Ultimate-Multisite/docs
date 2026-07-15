---
id: wu_dashboard_this-tab_widgets
title: 'Действие - wu_dashboard_{$this->tab}_widgets'
sidebar_label: 'wu_dashboard_{$this->tab}_widgets'
_i18n_hash: 375d02727169a29da6237374f0ad979a
---
# Action: wu_dashboard_\{$this->tab\}_widgets

Позволява на разработчиците на плагини да добавят виджета към Панела на мрежовия дашборд.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $tab | `string` | Текущата заявка (таб). |
| $screen | `\WP_Screen` | Обект на екрана. |
| $page | `\WP_Ultimo\Admin_Pages\Dashboard_Admin_Page` | Инстанция на административната страница на Ultimate Multisite. |

### От {#since}

- 2.0.0
### Източник {#source}

Дефиниран в [`inc/admin-pages/class-dashboard-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-dashboard-admin-page.php#L214) на линия 214
