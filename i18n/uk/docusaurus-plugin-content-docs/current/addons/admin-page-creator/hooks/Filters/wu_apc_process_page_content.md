---
id: wu_apc_process_page_content
title: Фільтр - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Фільтр: wu_apc_process_page_content

Дозволяє розробникам змінювати кінцевий вміст.

## Параметри

| Ім'я | Тип | Опис |
|------|------|-------------|
| $content | `string` | Вміст після заміни. |
| $content_before_processing | `string` | Вміст до заміни. |
| $to_replace | `array` | Масив, що містить заповнювачі. |
| $placeholder_count | `int` | Кількість знайдених заповнювачів. |

### Зверніть увагу

- 1.4.0
### Джерело

Визначено в [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) на рядку 46

## Повертає
Вміст після модифікації.
