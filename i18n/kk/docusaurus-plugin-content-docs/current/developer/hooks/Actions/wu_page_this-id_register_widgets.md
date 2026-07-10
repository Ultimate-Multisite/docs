---
id: wu_page_this-id_register_widgets
title: 'Әрекет - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_\{$this->id\}_register_widgets {#action-wupagethis-idregisterwidgets}

Осы бет үшін виджеттер тіркелгеннен кейін іске қосылады.

The dynamic portion of the hook name, `$this-&gt;id`, refers to the page id.

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $id | `string` | Беттің id-і. |
| $page_hook | `string` | Беттің hook-ы. |
| $page | `object` | Бет нысаны. |

### Бастап {#since}

- 2.4.10
### Дереккөз {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) ішінде 755-жолда анықталған
