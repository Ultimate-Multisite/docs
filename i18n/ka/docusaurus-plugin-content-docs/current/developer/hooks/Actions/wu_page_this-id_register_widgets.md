---
id: wu_page_this-id_register_widgets
title: 'მოქმედება - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_\{$this->id\}_register_widgets

სრულდება მას შემდეგ, რაც ამ გვერდისთვის widgets დარეგისტრირდება.

The dynamic portion of the hook name, `$this-&gt;id`, refers to the page id.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $id | `string` | გვერდის id. |
| $page_hook | `string` | გვერდის hook. |
| $page | `object` | გვერდის ობიექტი. |

### ვერსიიდან {#since}

- 2.4.10
### წყარო {#source}

განსაზღვრულია [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) ფაილში, 755-ე ხაზზე
