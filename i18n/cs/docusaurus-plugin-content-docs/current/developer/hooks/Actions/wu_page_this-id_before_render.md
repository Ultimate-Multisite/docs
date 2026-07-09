---
id: wu_page_this-id_before_render
title: 'Akce - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c3ef7f96b45f5b4175d13585a6cca368
---
# Akce: wu_page_{$this->id}_before_render {#action-wupagethis-idbeforerender}

Umožňuje vývojářům pluginů přidat další obsah předtím, než stránku vykreslíme.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $page_id | `string` | ID této stránky. |
| $page | `object` | Objekt stránky. |

### Od {#since}

- 1.8.2
### Zdroj {#source}

Definováno v [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L398) na řádku 398
