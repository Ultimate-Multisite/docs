---
title: Встроенные агенты
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Встроенные агенты

Gratis AI Agent v1.9.0 поставляется с пятью встроенными агентами, каждый из которых предварительно настроен на определенный набор инструментов, индивидуальный системный промпт и стартовые предложения, соответствующие общим задачам в этой области. Переключение между агентами меняет то, что может делать ассистент и как он отвечает — без какой-либо настройки с вашей стороны.

## Что такое агент?

Каждый агент — это именованный профиль конфигурации, который объединяет:

- **Инструменты (Tools)** — способности, которые агент имеет право использовать (например, у Контент-писателя есть доступ к функциям создания постов; в Дизайн-студии есть доступ к CSS и theme.json).
- **Системный промпт (System prompt)** — инструкции, которые задают тон, приоритеты и ограничения агента.
- **Предложения (Suggestions)** — заранее написанные запросы, отображаемые в чат-интерфейсе, чтобы помочь вам быстро начать работу.

## Как получить доступ к выбору агентов (Agent Picker)

1. Откройте панель **Gratis AI Agent** в боковой панели админки WordPress.
2. Нажмите на **иконку агента** в левом верхнем углу заголовка чата (иконка меняется, чтобы отразить активного агента).
3. Появится **Agent Picker** как всплывающая таблица-форма. Каждый агент перечислен со своей иконкой, названием и однострочным описанием.
4. Нажмите на строку с агентом, чтобы активировать его. Заголовок чата обновляется немедленно.

Вы также можете переключаться между агентами во время разговора — системный промпт нового агента вступает в силу со следующего сообщения.

## Пять встроенных агентов

### Контент-писатель (Content Writer)

**Фокус:** Создание и редактирование постов, страниц и контактных форм.

**Доступные инструменты:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Neyin yaxshi işlär:**
- Qısa bir mətn və ya sətir planından blog yazıları hazırlamaq və yayınlamaq
- Yeni bir sayt üçün landing page-lərin partiyalarını yaratmaq
- Əlaqə və sorğu formaları qurmaq
- URL və ya axtarışdan postlara əsasən vurğulma şəkilləri təyin etmək

**Başlanğıc tövsiyələr:**
- *WordPress multisite-ın faydaları haqqında 500 sözlük bir blog yazısı yazın.*
- *Haqqlaşma, Xidmətlər və Əlaqə səhifəsi yaradın və onları yayınlayın.*
- *Əlaqə səhifəsinə rezervasiya sorğusu forması əlavə edin.*

---

### Sayt Qurucu (Site Builder)

**Fokus:** Yalnız bir təlimatla uçtan uca sayt yaratmaq.

**Mövcud alətlər:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Neyin yaxshi işlär:**
- Təsvir edilmiş biznes növü üçün çox mərhələli sayt qurma planı yaratmaq
- Hər bir mərhələni avtonom olaraq yerinə yetirmək — struktur, məzmun, navigasiya, dizayn
- Plan zamanı xətalar baş versə də əl ilə müdaxilə tələb etmədən onlardan çıxmaq
- Qurma prosesinin bir hissəsi kimi tövsiyə olunan pluginləri quraşdırmaq
- Chat interfeysindən birbaşa əlaqə formaları yaratmaq (Superdav AI Agent v1.10.0+)

**Başlanğıc tövsiyələr:**
- *Qalereya post tipi, rezervasiya səhifəsi və əlaqə forması ilə fotoqrafiya portfoliyası saytı yaradın.*
- *Onlayn menyu, iş saatları və masa rezervasiyası sorğusu forması olan restoran saytı yaradın.*
- *Xidmətlər səhifələri, portfoliyo bölməsi və blogla bir freelancer məsləhətçi saytı qurun.*
- *Sayt qurucu vasitəsilə Əlaqə səhifəsinə əlaqə forması əlavə edin.*

---

### Dizayn Studiyası (Design Studio)

**Fokus:** Görsel özünə uyarlama — rənglər, tipografiya, CSS və blok nümunələri.

**Доступные инструменты:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Что они умеют хорошо:**
- Использовать готовые наборы настроек тем (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Настраивать общие стили текста и цветов через theme.json
- Внедрять свой собственный CSS для переопределения стилей под ваш бренд
- Делать скриншоты страницы и проверять их на дизайн

**Начальные предложения:**
- *Применить пресет warm-editorial, а затем установить основной цвет на #2d6a4f.*
- *Сделать скриншот главной страницы и скажите мне, что вы бы улучшили.*
- *Создать многоразовый блок hero с фоновым изображением на всю ширину и центрированным заголовком.*

---

### Plugin Manager (Менеджер плагинов)

**Фокус:** Поиск, установка и управление плагинами WordPress.

**Доступные инструменты:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Что они умеют хорошо:**
- Рекомендовать лучший плагин для описанного сценария использования
- Устанавливать наборы возможностей из репозитория
- Просматривать каталог доступных возможностей по категориям

**Начальные предложения:**
- *Какой лучший плагин для каталога членства?*
- *Установить набор возможностей WooCommerce.*
- *Показать мне все доступные наборы возможностей для электронной коммерции.*

---

### Support Assistant (Помощник поддержки)

**Фокус:** Ответы на вопросы о контенте сайта, настройках и конфигурации WordPress.

**Доступные инструменты:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Что хорошо умеет:**
- Показывает текущие настройки и опции сайта.
- Объясняет, какие типы записей (post types), таксономии (taxonomies) и меню настроены на сайте.
- Отвечает на вопросы типа "что делает эта настройка?" считывая живые значения.
- Служит только для чтения диагностическим слоем перед внесением изменений.

**Начальные предложения:**
- *Какие плагины и настройки сейчас активны на этом сайте?*
- *Перечислите все пользовательские типы записей (custom post types), зарегистрированные на этом сайте.*
- *Какие навигационные меню существуют и куда они назначены?*

---

## Настройка агентов (Customising Agents)

Каждый встроенный агент можно расширить или заменить с помощью фильтра `gratis_ai_agent_agents`.

### Добавление пользовательского системного промпта к существующему агенту

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nВсегда пишите на британском английском и используйте оксфордскую запятую.";
    }
    return $agents;
} );
```

### Регистрация нового агента

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Оптимизирует записи и страницы для поисковых систем.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'Ты — специалист по SEO. Сосредоточься на оптимизации ключевых слов, мета-описаниях и структурированных данных.',
        'suggestions'   => [
            'Проверь заголовок главной страницы и мета-описание.',
            'Предложи улучшения тегов заголовков для пяти последних записей.',
        ],
    ];
    return $agents;
} );
```

Новый агент появляется в выпадающем списке агентов сразу после выполнения фильтра.

### Удаление встроенного агента

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
