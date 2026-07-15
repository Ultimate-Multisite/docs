---
title: Довідник можливостей
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Довідник можливостей

Можливості — це атомарні дії, які Gratis AI Agent може викликати у вашій інсталяції WordPress. Кожна можливість є зареєстрованим PHP-класом, який надає JSON-схему — агент читає цю схему під час виконання, щоб зрозуміти, які параметри потрібні та що повертає можливість.

На цій сторінці задокументовано всі можливості, що постачаються з Gratis AI Agent v1.9.0.

---

## Користувацькі типи записів {#custom-post-types}

Ці можливості керують користувацькими типами записів (CPT), зареєстрованими через агента. Реєстрації зберігаються в таблиці опцій WordPress, тож вони зберігаються після деактивації та повторної активації плагіна.

### `register_post_type` {#registerposttype}

Реєструє новий користувацький тип запису.

**Параметри**

| Параметр | Тип | Обов’язково | Опис |
|---|---|---|---|
| `slug` | string | Так | Ключ типу запису (макс. 20 символів, без великих літер, без пробілів) |
| `singular_label` | string | Так | Зрозуміла для людини назва в однині, напр. `Portfolio Item` |
| `plural_label` | string | Так | Зрозуміла для людини назва в множині, напр. `Portfolio Items` |
| `public` | boolean | Ні | Чи є тип запису загальнодоступним. За замовчуванням `true` |
| `supports` | array | Ні | Функції для підтримки: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. За замовчуванням `["title","editor"]` |
| `has_archive` | boolean | Ні | Чи ввімкнено сторінку архіву типу запису. За замовчуванням `false` |
| `menu_icon` | string | Ні | Клас Dashicons або URL для іконки меню адміністратора. За замовчуванням `"dashicons-admin-post"` |
| `rewrite_slug` | string | Ні | URL-slug для типу запису. За замовчуванням дорівнює `slug` |

**Приклад**

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

**Повертає** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Повертає всі користувацькі типи записів, зареєстровані агентом.

**Параметри** — немає

**Повертає**

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

Скасовує реєстрацію користувацького типу запису, раніше зареєстрованого агентом. Наявні записи цього типу залишаються в базі даних, але більше не доступні через цей тип запису.

**Параметри**

| Параметр | Тип | Обов’язково | Опис |
|---|---|---|---|
| `slug` | string | Так | Ключ типу запису, який потрібно видалити |

**Повертає** `{ "success": true, "slug": "portfolio" }`

---

## Користувацькі таксономії {#custom-taxonomies}

Ці можливості керують користувацькими таксономіями. Як і CPT, реєстрації таксономій зберігаються.

### `register_taxonomy` {#registertaxonomy}

Реєструє нову користувацьку таксономію.

**Параметри**

| Параметр | Тип | Обов’язково | Опис |
|---|---|---|---|
| `slug` | string | Так | Ключ таксономії (макс. 32 символи) |
| `singular_label` | string | Так | Зрозуміла для людини назва в однині, напр. `Project Category` |
| `plural_label` | string | Так | Зрозуміла для людини назва в множині, напр. `Project Categories` |
| `post_types` | array | Так | Slug-и типів записів, до яких має бути прикріплена ця таксономія |
| `hierarchical` | boolean | Ні | `true` для стилю категорій, `false` для стилю тегів. За замовчуванням `true` |
| `public` | boolean | Ні | Чи є терміни загальнодоступними. За замовчуванням `true` |
| `rewrite_slug` | string | Ні | URL-slug для таксономії. За замовчуванням дорівнює `slug` |

**Приклад**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Повертає** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Повертає всі користувацькі таксономії, зареєстровані агентом.

**Параметри** — немає

**Повертає**

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

Скасовує реєстрацію користувацької таксономії, раніше зареєстрованої агентом.

**Параметри**

| Параметр | Тип | Обов’язково | Опис |
|---|---|---|---|
| `slug` | string | Так | Ключ таксономії, який потрібно видалити |

**Повертає** `{ "success": true, "slug": "project-category" }`

---

## Система дизайну {#design-system}

Можливості системи дизайну змінюють візуальне представлення сайту WordPress — від користувацького CSS до шаблонів блоків і логотипа сайту.

### `inject_custom_css` {#injectcustomcss}

Додає CSS до `<head>` сайту через `wp_add_inline_style`. CSS зберігається в опції `gratis_ai_agent_custom_css` і коректно вилучається з черги, коли можливість скидається.

**Параметри**

| Параметр | Тип | Обов’язково | Опис |
|---|---|---|---|
| `css` | string | Так | Дійсний CSS для вставлення |
| `label` | string | Ні | Зрозуміла для людини мітка для цього CSS-блоку, використовується в журналах налагодження. За замовчуванням `"agent-injected"` |
| `replace` | boolean | Ні | Якщо `true`, замінює весь раніше вставлений CSS. За замовчуванням `false` (додає в кінець) |

**Приклад**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Повертає** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Реєструє багаторазовий шаблон блоків у бібліотеці шаблонів WordPress.

**Параметри**

| Параметр | Тип | Обов’язково | Опис |
|---|---|---|---|
| `slug` | string | Так | Ідентифікатор шаблону, напр. `gratis/hero-dark` |
| `title` | string | Так | Зрозуміла для людини назва шаблону, що показується в редакторі |
| `content` | string | Так | Серіалізована розмітка блоків (HTML) для шаблону |
| `categories` | array | Ні | Slug-и категорій шаблонів, напр. `["featured", "hero"]` |
| `description` | string | Ні | Короткий опис, що показується у виборі шаблонів |
| `keywords` | array | Ні | Ключові слова для пошуку |

**Повертає** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Перелічує всі шаблони блоків, зареєстровані агентом.

**Параметри** — немає

**Повертає**

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

Установлює логотип сайту WordPress на вказаний ID вкладення або URL віддаленого зображення. Коли надано URL, зображення завантажується та імпортується до медіатеки.

**Параметри**

| Параметр | Тип | Обов’язково | Опис |
|---|---|---|---|
| `attachment_id` | integer | Ні | ID наявного вкладення медіатеки |
| `url` | string | Ні | URL віддаленого зображення для імпорту та встановлення як логотипу |

Потрібно надати один із `attachment_id` або `url`.

**Повертає** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Застосовує іменований пресет кольорів/типографіки до `theme.json` активної теми (або `global-styles`). Пресети — це добірки, які підтримує команда Gratis AI Agent.

**Параметри**

| Параметр | Тип | Обов’язково | Опис |
|---|---|---|---|
| `preset` | string | Так | Назва пресету, напр. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Ні | Якщо `true`, об’єднати з наявними значеннями замість заміни. За замовчуванням `false` |

**Доступні пресети**

| Пресет | Опис |
|---|---|
| `minimal-dark` | Майже чорний фон, білий текст, один акцентний колір |
| `warm-editorial` | Теплий майже білий фон, заголовки із зарубками, природні акцентні кольори |
| `corporate-blue` | Темно-синя та біла палітра з професійною типографікою |
| `vibrant-startup` | Яскраві градієнти, заокруглені кути, сучасний шрифт без зарубок |
| `classic-blog` | Нейтральні сірі відтінки, комфортна висота рядка, традиційні відступи макета |

**Повертає** `{ "success": true, "preset": "minimal-dark" }`

---

## Глобальні стилі {#global-styles}

Можливості глобальних стилів читають і записують значення theme.json через WordPress Global Styles API, впливаючи на всі блоки та шаблони в межах усього сайту.

### `get_global_styles` {#getglobalstyles}

Повертає поточну конфігурацію глобальних стилів.

**Параметри**

| Параметр | Тип | Обов’язково | Опис |
|---|---|---|---|
| `path` | string | Ні | JSON-вказівник на конкретне значення, напр. `/color/palette` або `/typography/fontSizes`. Якщо пропущено, повертає весь об’єкт. |

**Повертає** повний об’єкт глобальних стилів або значення за `path`.

---

### `set_global_styles` {#setglobalstyles}

Оновлює одне або кілька значень у конфігурації глобальних стилів.

**Параметри**

| Параметр | Тип | Обов’язково | Опис |
|---|---|---|---|
| `path` | string | Так | JSON-вказівник на значення, яке потрібно встановити, напр. `/color/palette` |
| `value` | any | Так | Нове значення |

**Приклад** — додати колір до палітри

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Повертає** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Скидає всі зміни глобальних стилів, застосовані агентом, відновлюючи стандартні значення теми.

**Параметри** — немає

**Повертає** `{ "success": true }`

---

## Навігаційні меню {#navigation-menus}

Можливості навігаційних меню створюють і керують навігаційними меню WordPress та їхніми елементами.

### `create_menu` {#createmenu}

Створює нове навігаційне меню WordPress.

**Параметри**

| Параметр | Тип | Обов’язково | Опис |
|---|---|---|---|
| `name` | string | Так | Назва меню, напр. `Primary Navigation` |
| `location` | string | Ні | Розташування теми, до якого призначити це меню, напр. `primary` |

**Повертає** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Перейменовує меню або перепризначає його до розташування теми.

**Параметри**

| Параметр | Тип | Обов’язково | Опис |
|---|---|---|---|
| `menu_id` | integer | Так | ID меню для оновлення |
| `name` | string | Ні | Нова назва меню |
| `location` | string | Ні | Розташування теми для призначення або перепризначення |

**Повертає** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Додає елемент до наявного навігаційного меню.

**Параметри**

| Параметр | Тип | Обов’язково | Опис |
|---|---|---|---|
| `menu_id` | integer | Так | ID цільового меню |
| `type` | string | Так | Тип елемента: `custom`, `post_type` або `taxonomy` |
| `title` | string | Ні | Мітка для елемента меню (обов’язкова для типу `custom`) |
| `url` | string | Ні | URL для елементів `custom` |
| `object_id` | integer | Ні | ID запису або ID терміна для елементів `post_type`/`taxonomy` |
| `parent_id` | integer | Ні | ID елемента меню, під яким потрібно вкласти цей елемент |
| `position` | integer | Ні | Позиція в меню з відліком від нуля |

**Повертає** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Видаляє елемент із навігаційного меню.

**Параметри**

| Параметр | Тип | Обов’язково | Опис |
|---|---|---|---|
| `item_id` | integer | Так | ID елемента меню для видалення |

**Повертає** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Перелічує всі навігаційні меню WordPress, включно з призначеними їм розташуваннями теми.

**Параметри** — немає

**Повертає**

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

## Керування опціями {#options-management}

Можливості опцій читають і записують опції WordPress через `get_option` / `update_option`. Вбудований безпечний список блокування запобігає випадковій зміні критичних налаштувань.

### `get_option` {#getoption}

Читає опцію WordPress.

**Параметри**

| Параметр | Тип | Обов’язково | Опис |
|---|---|---|---|
| `option_name` | string | Так | Ключ опції, напр. `blogname` |

**Повертає** `{ "option_name": "blogname", "value": "My Site" }`

Повертає помилку, якщо `option_name` є в безпечному списку блокування.

---

### `set_option` {#setoption}

Записує опцію WordPress.

**Параметри**

| Параметр | Тип | Обов’язково | Опис |
|---|---|---|---|
| `option_name` | string | Так | Ключ опції |
| `value` | any | Так | Нове значення (автоматично серіалізується для масивів/об’єктів) |
| `autoload` | string | Ні | `"yes"` або `"no"`. За замовчуванням зберігає наявне налаштування autoload |

Повертає помилку, якщо `option_name` є у безпечному блок-листі.

**Повертає** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Видаляє опцію WordPress.

**Параметри**

| Параметр | Тип | Обов’язковий | Опис |
|---|---|---|---|
| `option_name` | string | Так | Ключ опції для видалення |

Повертає помилку, якщо `option_name` є у безпечному блок-листі.

**Повертає** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Перелічує опції WordPress, що відповідають шаблону.

**Параметри**

| Параметр | Тип | Обов’язковий | Опис |
|---|---|---|---|
| `pattern` | string | Ні | Шаблон SQL LIKE для фільтрації назв опцій, напр. `gratis_%`. Повертає всі опції, якщо пропущено (використовуйте обережно на великих базах даних). |
| `limit` | integer | Ні | Максимальна кількість результатів. За замовчуванням `50`, максимум `500` |

**Повертає**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Керування вмістом {#content-management}

Можливості керування вмістом створюють і редагують дописи та сторінки WordPress. ID дописів повертаються, щоб наступні кроки в планах із кількома можливостями могли посилатися на створений вміст.

### `create_post` {#createpost}

Створює новий допис WordPress, сторінку або запис користувацького типу допису.

**Параметри**

| Параметр | Тип | Обов’язковий | Опис |
|---|---|---|---|
| `title` | string | Так | Заголовок допису |
| `content` | string | Ні | Тіло допису — приймає звичайний текст, HTML або серіалізовану розмітку блоків |
| `status` | string | Ні | `draft`, `publish`, `pending`, `private`. За замовчуванням `draft` |
| `post_type` | string | Ні | Slug типу допису, напр. `post`, `page` або будь-який зареєстрований CPT. За замовчуванням `post` |
| `excerpt` | string | Ні | Короткий підсумок, що показується в архівах і результатах пошуку |
| `categories` | array | Ні | Масив назв або ID категорій для призначення |
| `tags` | array | Ні | Масив назв або ID позначок для призначення |
| `author` | integer | Ні | ID користувача WordPress, якого встановити автором допису. За замовчуванням поточний користувач |
| `date` | string | Ні | Дата публікації у форматі ISO 8601, напр. `2026-05-01T09:00:00` |
| `page_template` | string | Ні | Файл шаблону, який потрібно призначити цьому допису або сторінці, напр. `page-full-width.php`. Має сенс лише коли `post_type` є `page` або CPT, що підтримує шаблони сторінок. |

**Приклад**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Повертає** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Оновлює наявний допис або сторінку WordPress.

**Параметри**

| Параметр | Тип | Обов’язковий | Опис |
|---|---|---|---|
| `post_id` | integer | Так | ID допису для оновлення |
| `title` | string | Ні | Новий заголовок допису |
| `content` | string | Ні | Нове тіло допису |
| `status` | string | Ні | Новий статус: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Ні | Новий уривок |
| `categories` | array | Ні | Замінити повний список категорій цим масивом назв або ID |
| `tags` | array | Ні | Замінити повний список позначок цим масивом назв або ID |
| `page_template` | string | Ні | Новий файл шаблону, який потрібно призначити цьому допису або сторінці, напр. `page-full-width.php`. Передайте порожній рядок, щоб вилучити призначення шаблону та повернутися до типового значення теми. |

**Приклад** — змінити шаблон після створення

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Повертає** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Створює кілька дописів за один виклик можливості, зменшуючи кількість повторних звернень під час створення сайту або масового імпорту вмісту. Дописи створюються послідовно; якщо один завершується помилкою, інші продовжують оброблятися, а збій повідомляється в масиві результатів.

**Параметри**

| Параметр | Тип | Обов’язковий | Опис |
|---|---|---|---|
| `posts` | array | Так | Масив об’єктів дописів, кожен із яких приймає ті самі параметри, що й `create_post` |
| `stop_on_error` | boolean | Ні | Якщо `true`, зупинити обробку після першого збою. За замовчуванням `false` |

**Приклад**

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

**Повертає**

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

Призначає головне зображення (мініатюру допису) наявному допису або сторінці. Приймає ID наявного вкладення Media Library або URL віддаленого зображення; коли надано URL, зображення завантажується та імпортується автоматично.

**Параметри**

| Параметр | Тип | Обов’язковий | Опис |
|---|---|---|---|
| `post_id` | integer | Так | ID допису або сторінки для оновлення |
| `attachment_id` | integer | Ні | ID наявного вкладення Media Library |
| `url` | string | Ні | URL віддаленого зображення для імпорту та встановлення як головного зображення |
| `alt_text` | string | Ні | Альтернативний текст, який потрібно застосувати до вкладення, якщо його імпортовано з URL |

Потрібно надати одне з `attachment_id` або `url`.

**Повертає** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Створює контактну форму за допомогою активного плагіна форм (Contact Form 7, WPForms, Fluent Forms або Gravity Forms, залежно від того, який установлено). Повертає shortcode, який можна вбудувати в будь-який допис або сторінку.

**Параметри**

| Параметр | Тип | Обов’язково | Опис |
|---|---|---|---|
| `title` | string | Так | Назва форми, що відображається в адмінці плагіна форм |
| `fields` | array | Так | Упорядкований список полів форми (див. об’єкт поля нижче) |
| `recipient` | string | Ні | Email-адреса для отримання надсилань. За замовчуванням використовується email адміністратора WordPress |
| `subject` | string | Ні | Рядок теми email. Підтримує заповнювачі `[your-name]` і `[your-subject]` під час використання Contact Form 7 |
| `confirmation_message` | string | Ні | Повідомлення, що відображається після успішного надсилання. За замовчуванням: `"Thank you for your message. We'll be in touch soon."` |

**Об’єкт поля**

| Ключ | Тип | Обов’язково | Опис |
|---|---|---|---|
| `name` | string | Так | Внутрішня назва поля / машинний ключ |
| `label` | string | Так | Зрозуміла для користувача мітка, що відображається у формі |
| `type` | string | Так | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Ні | Чи має поле бути заповнене перед надсиланням. За замовчуванням `false` |
| `options` | array | Ні | Варіанти для полів `select`, `checkbox` і `radio` |
| `placeholder` | string | Ні | Текст заповнювача для введень текстового типу |

**Приклад**

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

**Повертає**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Візуальний огляд {#visual-review}

Можливості візуального огляду дають агенту змогу робити знімки екрана живих сторінок і аналізувати їх, забезпечуючи автономну перевірку дизайну, порівняння до/після та перевірки візуальної регресії без потреби в будь-якому розширенні браузера.

### `capture_screenshot` {#capturescreenshot}

Робить знімок екрана сторінки WordPress за вказаною URL-адресою за допомогою серверного headless-браузера. Зображення зберігається в Media Library, і повертається CDN URL.

**Параметри**

| Параметр | Тип | Обов’язково | Опис |
|---|---|---|---|
| `url` | string | Так | Повна URL-адреса сторінки для знімка екрана, напр. `https://example.com/about/` |
| `width` | integer | Ні | Ширина viewport у пікселях. За замовчуванням `1280` |
| `height` | integer | Ні | Висота viewport у пікселях. За замовчуванням `800` |
| `full_page` | boolean | Ні | Захопити всю прокручувану сторінку замість лише viewport. За замовчуванням `false` |
| `delay_ms` | integer | Ні | Мілісекунди очікування після завантаження сторінки перед захопленням, корисно для анімованого вмісту. За замовчуванням `500` |
| `label` | string | Ні | Зрозуміла для користувача мітка, що зберігається з вкладенням у Media Library |

**Повертає**

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

Бере два знімки екрана й повертає оцінку візуальної різниці, а також зображення різниці, що підсвічує змінені області. Корисно для підтвердження того, що зміна дизайну дала очікуваний результат, або для виявлення ненавмисних регресій.

**Параметри**

| Параметр | Тип | Обов’язково | Опис |
|---|---|---|---|
| `before_url` | string | Так | URL сторінки для захоплення стану "до" |
| `after_url` | string | Так | URL сторінки для захоплення стану "після". Може бути тією самою URL-адресою, якщо порівняння виконується в різні моменти часу |
| `width` | integer | Ні | Ширина viewport для обох захоплень. За замовчуванням `1280` |
| `threshold` | float | Ні | Поріг різниці пікселів (0.0–1.0). Пікселі в межах цього допуску вважаються незміненими. За замовчуванням `0.1` |

**Повертає**

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

`diff_score` зі значенням `0.0` означає відсутність видимих змін; `1.0` означає, що змінився кожен піксель.

---

### `review_page_design` {#reviewpagedesign}

Робить знімок екрана сторінки й надсилає його до мовної моделі для візуального аналізу. Повертає структуровану оцінку, що охоплює макет, типографіку, використання кольорів і питання доступності.

**Параметри**

| Параметр | Тип | Обов’язково | Опис |
|---|---|---|---|
| `url` | string | Так | Повна URL-адреса сторінки для огляду |
| `focus` | string | Ні | Список областей огляду через кому, на яких слід зробити акцент: `layout`, `typography`, `colour`, `accessibility`, `mobile`. За замовчуванням: усі області |
| `width` | integer | Ні | Ширина viewport. За замовчуванням `1280` |

**Повертає**

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

## Установлювані можливості {#installable-abilities}

Реєстр установлюваних можливостей дає змогу розширювати агента додатковими пакетами можливостей, що розповсюджуються як плагіни WordPress. Кожен пакет реєструє одну або кілька можливостей за допомогою стандартного API можливостей.

### `list_available_abilities` {#listavailableabilities}

Повертає каталог пакетів можливостей, доступних для встановлення з реєстру.

**Параметри**

| Параметр | Тип | Обов’язково | Опис |
|---|---|---|---|
| `category` | string | Ні | Фільтрувати за категорією: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Повертає**

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

Завантажує та активує пакет можливостей із реєстру.

**Параметри**

| Параметр | Тип | Обов’язково | Опис |
|---|---|---|---|
| `slug` | string | Так | Slug плагіна пакета можливостей |

**Повертає** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Виконує запит до реєстру можливостей, щоб знайти найкращий плагін для описаного сценарію використання, і, за бажанням, встановлює його.

**Параметри**

| Параметр | Тип | Обов’язково | Опис |
|---|---|---|---|
| `description` | string | Так | Опис бажаної функціональності природною мовою |
| `install` | boolean | Ні | Якщо `true`, негайно встановлює рекомендований плагін. За замовчуванням `false` |

**Приклад**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Повертає**

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
