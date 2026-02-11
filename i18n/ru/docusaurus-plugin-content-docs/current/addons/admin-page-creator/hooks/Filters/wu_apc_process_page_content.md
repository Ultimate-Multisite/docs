---
id: wu_apc_process_page_content
title: >
  ---

  title: Фильтр - wu_apc_process_page_content

  description: Этот фильтр позволяет вам изменить содержимое страницы до того,
  как оно будет обработано плагином.

  ---


  ## Использование


  Чтобы использовать этот фильтр, добавьте следующий код в файл `functions.php`
  вашей темы:


  ```php

  add_filter( 'wu_apc_process_page_content', 'my_custom_content_filter', 10, 2
  );

  function my_custom_content_filter( $content, $post ) {
      // Modify the content here
      return $content;
  }

  ```


  Фильтр передает два аргумента: содержимое и объект записи.


  ## Пример


  ```php

  add_filter( 'wu_apc_process_page_content', function( $content, $post ) {
      return str_replace( 'foo', 'bar', $content );
  } );

  ```
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Фильтр: wu_apc_process_page_content

Позволяет разработчикам вносить изменения в конечный контент

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $content | `string` | Контент после замен. |
| $content_before_processing | `string` | Контент до замен. |
| $to_replace | `array` | Массив, содержащий плейсхолдеры. |
| $placeholder_count | `int` | Количество найденных плейсхолдеров. |

### Начиная с

- 1.4.0

### Источник

Определено в [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) на строке 46

## Возвращает
Контент после изменения.
