---
id: wu_page_this-id_register_widgets
title: 'कार्य - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_\{$this->id\}_register_widgets {#action-wupagethis-idregisterwidgets}

यस पृष्ठका लागि widgets दर्ता भएपछि चल्छ।

The dynamic portion of the hook name, `$this-&gt;id`, refers to the page id.

## Parameters {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $id | `string` | पृष्ठ id। |
| $page_hook | `string` | पृष्ठ hook। |
| $page | `object` | पृष्ठ object। |

### Since {#since}

- 2.4.10
### Source {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) मा लाइन 755 मा परिभाषित गरिएको छ।
