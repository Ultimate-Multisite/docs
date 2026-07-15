---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_\{$this->id\}_register_widgets

Ito ay tumatakbo pagkatapos ma-register ang mga widget para sa pahinang ito.

Ang bahaging dynamic ng pangalan ng hook, `$this->id`, ay tumutukoy sa ID ng pahina.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | Ang ID ng pahina. |
| $page_hook | `string` | Ang page hook. |
| $page | `object` | Ang object ng pahina. |

### Since {#since}

- 2.4.10
### Source {#source}

Tinukoy sa [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) sa linya 755
