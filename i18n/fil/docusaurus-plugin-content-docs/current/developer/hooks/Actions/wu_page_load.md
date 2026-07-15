---
id: wu_page_load
title: Aksyon - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load

Nagpapahintulot ito sa mga plugin developer na magdagdag ng karagdagang hooks sa ating mga page.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | Ang ID ng page na ito. |
| $page_hook | `string` | Ang page hook ng page na ito. |
| $admin_page | `self` | Ang instance ng page. |

### Since {#since}

- 1.8.2
- 2.0.4: Nagdagdag ng pangatlong parameter: ang page instance.
### Source {#source}

Tinukoy sa [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) sa linya 318
