---
title: Справочник возможностей
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Справочник возможностей

Возможности — это атомарные действия, которые Gratis AI Agent может вызывать в вашей установке WordPress. Каждая возможность — это зарегистрированный класс PHP, который предоставляет JSON-схему — агент считывает эту схему во время выполнения, чтобы понять, какие параметры требуются и что возвращает возможность.

На этой странице описаны все возможности, поставляемые с Gratis AI Agent v1.9.0.

---

## Пользовательские типы записей {#custom-post-types}

Эти возможности управляют пользовательскими типами записей (CPT), зарегистрированными через агента. Регистрации сохраняются в таблицу опций WordPress, поэтому они сохраняются после деактивации и повторной активации plugin.

### `register_post_type` {#registerposttype}

Регистрирует новый пользовательский тип записи.

**Параметры**

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `slug` | string | Да | Ключ типа записи (макс. 20 символов, без заглавных букв, без пробелов) |
| `singular_label` | string | Да | Человекочитаемое имя в единственном числе, например `Portfolio Item` |
| `plural_label` | string | Да | Человекочитаемое имя во множественном числе, например `Portfolio Items` |
| `public` | boolean | Нет | Будет ли тип записи публично доступен. По умолчанию `true` |
| `supports` | array | Нет | Поддерживаемые функции: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. По умолчанию `["title","editor"]` |
| `has_archive` | boolean | Нет | Включена ли архивная страница типа записи. По умолчанию `false` |
| `menu_icon` | string | Нет | Класс Dashicons или URL для значка меню администратора. По умолчанию `"dashicons-admin-post"` |
| `rewrite_slug` | string | Нет | URL slug для типа записи. По умолчанию используется `slug` |

**Пример**

```json
{
  "slug": "portfolio",
  "singular_label": "Portfolio Item",
  "plural_label": "Portfolio Items",
  "public": true,
  "supports": ["title", "editor", "thumbnail"],
  "has_archive": true,
  "menu_icon": "dashicons-portfolio"
}
```

**Возвращает** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Возвращает все пользовательские типы записей, зарегистрированные агентом.

**Параметры** — нет

**Возвращает**

```json
{
  "post_types": [
    {
      "slug": "portfolio",
      "singular_label": "Portfolio Item",
      "plural_label": "Portfolio Items",
      "public": true
    }
  ]
}
```

---

### `delete_post_type` {#deleteposttype}

Отменяет регистрацию пользовательского типа записи, ранее зарегистрированного агентом. Существующие записи этого типа остаются в базе данных, но больше недоступны через тип записи.

**Параметры**

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `slug` | string | Да | Ключ типа записи для удаления |

**Возвращает** `{ "success": true, "slug": "portfolio" }`

---

## Пользовательские таксономии {#custom-taxonomies}

Эти возможности управляют пользовательскими таксономиями. Как и CPT, регистрации таксономий сохраняются.

### `register_taxonomy` {#registertaxonomy}

Регистрирует новую пользовательскую таксономию.

**Параметры**

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `slug` | string | Да | Ключ таксономии (макс. 32 символа) |
| `singular_label` | string | Да | Человекочитаемое имя в единственном числе, например `Project Category` |
| `plural_label` | string | Да | Человекочитаемое имя во множественном числе, например `Project Categories` |
| `post_types` | array | Да | Slug типов записей, к которым должна быть прикреплена эта таксономия |
| `hierarchical` | boolean | Нет | `true` для стиля категорий, `false` для стиля меток. По умолчанию `true` |
| `public` | boolean | Нет | Будут ли термины публично доступны. По умолчанию `true` |
| `rewrite_slug` | string | Нет | URL slug для таксономии. По умолчанию используется `slug` |

**Пример**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Возвращает** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Возвращает все пользовательские таксономии, зарегистрированные агентом.

**Параметры** — нет

**Возвращает**

```json
{
  "taxonomies": [
    {
      "slug": "project-category",
      "singular_label": "Project Category",
      "post_types": ["portfolio"],
      "hierarchical": true
    }
  ]
}
```

---

### `delete_taxonomy` {#deletetaxonomy}

Отменяет регистрацию пользовательской таксономии, ранее зарегистрированной агентом.

**Параметры**

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `slug` | string | Да | Ключ таксономии для удаления |

**Возвращает** `{ "success": true, "slug": "project-category" }`

---

## Система дизайна {#design-system}

Возможности системы дизайна изменяют визуальное представление сайта WordPress — от пользовательского CSS до паттернов блоков и логотипа сайта.

### `inject_custom_css` {#injectcustomcss}

Добавляет CSS в `<head>` сайта через `wp_add_inline_style`. CSS хранится в опции `gratis_ai_agent_custom_css` и аккуратно снимается с очереди при сбросе возможности.

**Параметры**

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `css` | string | Да | Валидный CSS для внедрения |
| `label` | string | Нет | Человекочитаемая метка для этого блока CSS, используется в журналах отладки. По умолчанию `"agent-injected"` |
| `replace` | boolean | Нет | Если `true`, заменяет весь ранее внедренный CSS. По умолчанию `false` (добавляет) |

**Пример**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Возвращает** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Регистрирует переиспользуемый паттерн блоков в библиотеке паттернов WordPress.

**Параметры**

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `slug` | string | Да | Идентификатор паттерна, например `gratis/hero-dark` |
| `title` | string | Да | Человекочитаемое название паттерна, отображаемое в редакторе |
| `content` | string | Да | Сериализованная разметка блоков (HTML) для паттерна |
| `categories` | array | Нет | Slug категорий паттерна, например `["featured", "hero"]` |
| `description` | string | Нет | Краткое описание, отображаемое в средстве выбора паттернов |
| `keywords` | array | Нет | Ключевые слова для поиска |

**Возвращает** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Перечисляет все паттерны блоков, зарегистрированные агентом.

**Параметры** — нет

**Возвращает**

```json
{
  "patterns": [
    {
      "slug": "gratis/hero-dark",
      "title": "Dark Hero",
      "categories": ["hero"]
    }
  ]
}
```

---

### `set_site_logo` {#setsitelogo}

Устанавливает логотип сайта WordPress на указанный ID вложения или URL удалённого изображения. Если предоставлен URL, изображение загружается и импортируется в Media Library.

**Параметры**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `attachment_id` | integer | No | ID существующего вложения Media Library |
| `url` | string | No | URL удалённого изображения для импорта и установки в качестве логотипа |

Необходимо предоставить одно из `attachment_id` или `url`.

**Возвращает** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Применяет именованный пресет цветов/типографики к `theme.json` активной темы (или `global-styles`). Пресеты — это тщательно подобранные наборы, поддерживаемые командой Gratis AI Agent.

**Параметры**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `preset` | string | Yes | Имя пресета, например `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | No | Если `true`, объединить с существующими значениями вместо замены. По умолчанию `false` |

**Доступные пресеты**

| Preset | Description |
|---|---|
| `minimal-dark` | Почти чёрный фон, белый текст, один акцентный цвет |
| `warm-editorial` | Тёплый не совсем белый фон, заголовки с засечками, землистые акцентные цвета |
| `corporate-blue` | Тёмно-синяя и белая палитра с профессиональной типографикой |
| `vibrant-startup` | Яркие градиенты, скруглённые углы, современный шрифт без засечек |
| `classic-blog` | Нейтральные серые оттенки, комфортная высота строки, традиционные отступы макета |

**Возвращает** `{ "success": true, "preset": "minimal-dark" }`

---

## Global Styles {#global-styles}

Возможности Global Styles читают и записывают значения theme.json через WordPress Global Styles API, влияя на все блоки и шаблоны на всём сайте.

### `get_global_styles` {#getglobalstyles}

Возвращает текущую конфигурацию глобальных стилей.

**Параметры**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | No | JSON-указатель на конкретное значение, например `/color/palette` или `/typography/fontSizes`. Если опущен, возвращает весь объект. |

**Возвращает** полный объект глобальных стилей или значение по `path`.

---

### `set_global_styles` {#setglobalstyles}

Обновляет одно или несколько значений в конфигурации глобальных стилей.

**Параметры**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | Yes | JSON-указатель на устанавливаемое значение, например `/color/palette` |
| `value` | any | Yes | Новое значение |

**Пример** — добавить цвет в палитру

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Возвращает** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Сбрасывает все изменения глобальных стилей, применённые агентом, восстанавливая значения темы по умолчанию.

**Параметры** — нет

**Возвращает** `{ "success": true }`

---

## Навигационные меню {#navigation-menus}

Возможности Navigation Menu создают и управляют навигационными меню WordPress и их элементами.

### `create_menu` {#createmenu}

Создаёт новое навигационное меню WordPress.

**Параметры**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Имя меню, например `Primary Navigation` |
| `location` | string | No | Область темы, к которой нужно назначить это меню, например `primary` |

**Возвращает** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Переименовывает меню или переназначает его на область темы.

**Параметры**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | ID меню для обновления |
| `name` | string | No | Новое имя меню |
| `location` | string | No | Область темы для назначения или переназначения |

**Возвращает** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Добавляет элемент в существующее навигационное меню.

**Параметры**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | ID целевого меню |
| `type` | string | Yes | Тип элемента: `custom`, `post_type` или `taxonomy` |
| `title` | string | No | Метка элемента меню (обязательна для типа `custom`) |
| `url` | string | No | URL для элементов `custom` |
| `object_id` | integer | No | ID записи или ID термина для элементов `post_type`/`taxonomy` |
| `parent_id` | integer | No | ID элемента меню, под которым нужно вложить этот элемент |
| `position` | integer | No | Позиция в меню с отсчётом от нуля |

**Возвращает** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Удаляет элемент из навигационного меню.

**Параметры**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `item_id` | integer | Yes | ID элемента меню для удаления |

**Возвращает** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Перечисляет все навигационные меню WordPress, включая назначенные им области темы.

**Параметры** — нет

**Возвращает**

```json
{
  "menus": [
    {
      "menu_id": 7,
      "name": "Primary Navigation",
      "location": "primary",
      "item_count": 5
    }
  ]
}
```

---

## Управление настройками {#options-management}

Возможности Options читают и записывают настройки WordPress через `get_option` / `update_option`. Встроенный блок-лист безопасности предотвращает случайное изменение критически важных настроек.

### `get_option` {#getoption}

Читает настройку WordPress.

**Параметры**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Ключ настройки, например `blogname` |

**Возвращает** `{ "option_name": "blogname", "value": "My Site" }`

Возвращает ошибку, если `option_name` находится в блок-листе безопасности.

---

### `set_option` {#setoption}

Записывает настройку WordPress.

**Параметры**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Ключ настройки |
| `value` | any | Yes | Новое значение (автоматически сериализуется для массивов/объектов) |
| `autoload` | string | No | `"yes"` или `"no"`. По умолчанию сохраняет существующую настройку autoload |

Возвращает ошибку, если `option_name` находится в безопасном блок-листе.

**Возвращает** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Удаляет опцию WordPress.

**Параметры**

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `option_name` | string | Да | Ключ опции для удаления |

Возвращает ошибку, если `option_name` находится в безопасном блок-листе.

**Возвращает** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Выводит список опций WordPress, соответствующих шаблону.

**Параметры**

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `pattern` | string | Нет | Шаблон SQL LIKE для фильтрации названий опций, например `gratis_%`. Возвращает все опции, если не указан (используйте с осторожностью на больших базах данных). |
| `limit` | integer | Нет | Максимальное количество результатов. По умолчанию `50`, максимум `500` |

**Возвращает**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Управление содержимым {#content-management}

Возможности управления содержимым создают и редактируют записи и страницы WordPress. ID записей возвращаются, чтобы последующие шаги в планах с несколькими возможностями могли ссылаться на созданное содержимое.

### `create_post` {#createpost}

Создает новую запись WordPress, страницу или элемент пользовательского типа записей.

**Параметры**

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `title` | string | Да | Заголовок записи |
| `content` | string | Нет | Тело записи — принимает обычный текст, HTML или сериализованную разметку блоков |
| `status` | string | Нет | `draft`, `publish`, `pending`, `private`. По умолчанию `draft` |
| `post_type` | string | Нет | Слаг типа записи, например `post`, `page` или любой зарегистрированный CPT. По умолчанию `post` |
| `excerpt` | string | Нет | Краткое описание, показываемое в архивах и результатах поиска |
| `categories` | array | Нет | Массив названий или ID рубрик для назначения |
| `tags` | array | Нет | Массив названий или ID меток для назначения |
| `author` | integer | Нет | ID пользователя WordPress, которого нужно установить автором записи. По умолчанию текущий пользователь |
| `date` | string | Нет | Дата публикации в формате ISO 8601, например `2026-05-01T09:00:00` |
| `page_template` | string | Нет | Файл шаблона для назначения этой записи или странице, например `page-full-width.php`. Имеет смысл только когда `post_type` — `page` или CPT, поддерживающий шаблоны страниц. |

**Пример**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Возвращает** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Обновляет существующую запись или страницу WordPress.

**Параметры**

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `post_id` | integer | Да | ID записи для обновления |
| `title` | string | Нет | Новый заголовок записи |
| `content` | string | Нет | Новое тело записи |
| `status` | string | Нет | Новый статус: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Нет | Новая выдержка |
| `categories` | array | Нет | Заменить полный список рубрик этим массивом названий или ID |
| `tags` | array | Нет | Заменить полный список меток этим массивом названий или ID |
| `page_template` | string | Нет | Новый файл шаблона для назначения этой записи или странице, например `page-full-width.php`. Передайте пустую строку, чтобы удалить назначение шаблона и вернуться к значению темы по умолчанию. |

**Пример** — изменить шаблон после создания

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Возвращает** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Создает несколько записей одним вызовом возможности, сокращая количество обращений при сборке сайта или массовом импорте содержимого. Записи создаются последовательно; если одна завершается ошибкой, остальные продолжают выполняться, а сбой сообщается в массиве результатов.

**Параметры**

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `posts` | array | Да | Массив объектов записей, каждый из которых принимает те же параметры, что и `create_post` |
| `stop_on_error` | boolean | Нет | Если `true`, остановить обработку после первого сбоя. По умолчанию `false` |

**Пример**

```json
{
  "posts": [
    {
      "title": "About Us",
      "post_type": "page",
      "status": "publish",
      "page_template": "page-full-width.php"
    },
    {
      "title": "Services",
      "post_type": "page",
      "status": "publish"
    },
    {
      "title": "Contact",
      "post_type": "page",
      "status": "publish"
    }
  ]
}
```

**Возвращает**

```json
{
  "created": 3,
  "failed": 0,
  "results": [
    { "success": true, "post_id": 42, "title": "About Us" },
    { "success": true, "post_id": 43, "title": "Services" },
    { "success": true, "post_id": 44, "title": "Contact" }
  ]
}
```

---

### `set_featured_image` {#setfeaturedimage}

Назначает избранное изображение (миниатюру записи) существующей записи или странице. Принимает ID существующего вложения из медиатеки или URL удаленного изображения; когда указан URL, изображение автоматически скачивается и импортируется.

**Параметры**

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `post_id` | integer | Да | ID записи или страницы для обновления |
| `attachment_id` | integer | Нет | ID существующего вложения в медиатеке |
| `url` | string | Нет | URL удаленного изображения для импорта и установки в качестве избранного изображения |
| `alt_text` | string | Нет | Альтернативный текст, который нужно применить к вложению, если оно импортируется из URL |

Необходимо предоставить одно из `attachment_id` или `url`.

**Возвращает** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Создает контактную форму с помощью активного plugin форм (Contact Form 7, WPForms, Fluent Forms или Gravity Forms, в зависимости от того, что установлено). Возвращает шорткод, который можно встроить в любую запись или страницу.

**Параметры**

| Параметр | Тип | Обязательно | Описание |
|---|---|---|---|
| `title` | string | Да | Название формы, отображаемое в админке plugin форм |
| `fields` | array | Да | Упорядоченный список полей формы (см. объект поля ниже) |
| `recipient` | string | Нет | Адрес электронной почты для получения отправленных данных. По умолчанию используется email администратора WordPress |
| `subject` | string | Нет | Строка темы письма. Поддерживает заполнители `[your-name]` и `[your-subject]` при использовании Contact Form 7 |
| `confirmation_message` | string | Нет | Сообщение, отображаемое после успешной отправки. По умолчанию: `"Thank you for your message. We'll be in touch soon."` |

**Объект поля**

| Ключ | Тип | Обязательно | Описание |
|---|---|---|---|
| `name` | string | Да | Внутреннее имя поля / машинный ключ |
| `label` | string | Да | Понятная человеку метка, отображаемая в форме |
| `type` | string | Да | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Нет | Должно ли поле быть заполнено перед отправкой. По умолчанию `false` |
| `options` | array | Нет | Варианты для полей `select`, `checkbox` и `radio` |
| `placeholder` | string | Нет | Текст заполнителя для полей ввода текстового типа |

**Пример**

```json
{
  "title": "Restaurant Booking Enquiry",
  "fields": [
    { "name": "your-name",    "label": "Name",             "type": "text",     "required": true },
    { "name": "your-email",   "label": "Email",            "type": "email",    "required": true },
    { "name": "party-size",   "label": "Party size",       "type": "select",   "options": ["1–2", "3–5", "6–10", "10+"] },
    { "name": "your-message", "label": "Special requests", "type": "textarea", "required": false }
  ],
  "recipient": "bookings@example.com",
  "subject": "New booking enquiry from [your-name]"
}
```

**Возвращает**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Визуальная проверка {#visual-review}

Возможности Визуальной проверки позволяют агенту делать скриншоты живых страниц и анализировать их, обеспечивая автономную проверку дизайна, сравнения до/после и проверки визуальной регрессии без необходимости в каком-либо расширении браузера.

### `capture_screenshot` {#capturescreenshot}

Делает скриншот страницы WordPress по заданному URL с использованием серверного headless-браузера. Изображение сохраняется в медиатеку, и возвращается CDN URL.

**Параметры**

| Параметр | Тип | Обязательно | Описание |
|---|---|---|---|
| `url` | string | Да | Полный URL страницы для скриншота, например `https://example.com/about/` |
| `width` | integer | Нет | Ширина области просмотра в пикселях. По умолчанию `1280` |
| `height` | integer | Нет | Высота области просмотра в пикселях. По умолчанию `800` |
| `full_page` | boolean | Нет | Захватить всю прокручиваемую страницу вместо только области просмотра. По умолчанию `false` |
| `delay_ms` | integer | Нет | Миллисекунды ожидания после загрузки страницы перед захватом; полезно для анимированного содержимого. По умолчанию `500` |
| `label` | string | Нет | Понятная человеку метка, сохраняемая вместе с вложением в медиатеке |

**Возвращает**

```json
{
  "success": true,
  "attachment_id": 88,
  "url": "https://example.com/wp-content/uploads/2026/04/screenshot-about.png",
  "width": 1280,
  "height": 800
}
```

---

### `compare_screenshots` {#comparescreenshots}

Принимает два скриншота и возвращает оценку визуального различия, а также изображение различий, выделяющее изменённые области. Полезно для подтверждения того, что изменение дизайна дало ожидаемый результат, или для обнаружения непреднамеренных регрессий.

**Параметры**

| Параметр | Тип | Обязательно | Описание |
|---|---|---|---|
| `before_url` | string | Да | URL страницы для захвата состояния «до» |
| `after_url` | string | Да | URL страницы для захвата состояния «после». Может быть тем же URL при сравнении в разные моменты времени |
| `width` | integer | Нет | Ширина области просмотра для обоих захватов. По умолчанию `1280` |
| `threshold` | float | Нет | Порог различия пикселей (0.0–1.0). Пиксели в пределах этого допуска считаются неизменёнными. По умолчанию `0.1` |

**Возвращает**

```json
{
  "success": true,
  "diff_score": 0.04,
  "changed_pixels": 2340,
  "total_pixels": 1024000,
  "diff_attachment_id": 91,
  "diff_url": "https://example.com/wp-content/uploads/2026/04/diff-about.png"
}
```

`diff_score` равный `0.0` означает отсутствие видимых изменений; `1.0` означает, что изменился каждый пиксель.

---

### `review_page_design` {#reviewpagedesign}

Делает скриншот страницы и отправляет его языковой модели для визуального анализа. Возвращает структурированную оценку, охватывающую макет, типографику, использование цвета и проблемы доступности.

**Параметры**

| Параметр | Тип | Обязательно | Описание |
|---|---|---|---|
| `url` | string | Да | Полный URL страницы для проверки |
| `focus` | string | Нет | Разделённый запятыми список областей проверки, на которых нужно сделать акцент: `layout`, `typography`, `colour`, `accessibility`, `mobile`. По умолчанию: все области |
| `width` | integer | Нет | Ширина области просмотра. По умолчанию `1280` |

**Возвращает**

```json
{
  "success": true,
  "screenshot_url": "https://example.com/wp-content/uploads/2026/04/review-about.png",
  "assessment": {
    "overall": "The page structure is clean and readable. Two accessibility issues detected.",
    "layout": "Good visual hierarchy. Hero section is prominent.",
    "typography": "Body text is 15px — consider increasing to 16px for readability.",
    "colour": "Contrast ratio on the CTA button (#fff on #4a90e2) is 3.1:1 — below the WCAG AA threshold of 4.5:1.",
    "accessibility": ["Low contrast on CTA button", "Missing alt text on hero image"],
    "suggestions": ["Darken the CTA button to #1a5cb0 to pass WCAG AA", "Add descriptive alt text to the hero image"]
  }
}
```

---

## Устанавливаемые возможности {#installable-abilities}

Реестр устанавливаемых возможностей позволяет расширить агента дополнительными пакетами возможностей, распространяемыми как plugins WordPress. Каждый пакет регистрирует одну или несколько возможностей с использованием стандартного API возможностей.

### `list_available_abilities` {#listavailableabilities}

Возвращает каталог пакетов возможностей, доступных для установки из реестра.

**Параметры**

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `category` | string | Нет | Фильтровать по категории: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Возвращает**

```json
{
  "packs": [
    {
      "slug": "gratis-ai-agent-woocommerce",
      "name": "WooCommerce Abilities",
      "category": "ecommerce",
      "version": "1.0.0",
      "abilities": ["create_product", "update_pricing", "manage_inventory"],
      "installed": false
    }
  ]
}
```

---

### `install_ability` {#installability}

Загружает и активирует пакет способностей из реестра.

**Параметры**

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `slug` | string | Да | Slug плагина пакета способностей |

**Возвращает** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Запрашивает реестр способностей, чтобы найти лучший плагин для описанного варианта использования, и, при необходимости, устанавливает его.

**Параметры**

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `description` | string | Да | Описание желаемой функциональности на естественном языке |
| `install` | boolean | Нет | Если `true`, немедленно устанавливает рекомендованный плагин. По умолчанию `false` |

**Пример**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Возвращает**

```json
{
  "recommendation": {
    "slug": "contact-form-7",
    "name": "Contact Form 7",
    "reason": "Widely adopted, supports file uploads, and integrates with Akismet for spam filtering.",
    "alternatives": ["wpforms-lite", "fluent-forms"]
  }
}
```
