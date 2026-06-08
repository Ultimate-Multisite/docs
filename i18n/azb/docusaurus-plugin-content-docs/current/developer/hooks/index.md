---
title: Hooks Reference
sidebar_position: 1
_i18n_hash: 126ed8ba22f4c3faebf743dd13eeb90e
---
# Хуки Референс

Автоматически сгенерированная документация для всех **59 действий** и **115 фильтров** в Ultimate Multisite.

## Действия

- [auth_redirect](./Actions/auth_redirect) — Срабатывает перед перенаправлением для аутентификации.
- [set_auth_cookie](./Actions/set_auth_cookie) — Срабатывает непосредственно перед установкой cookie аутентификации.
- [set_logged_in_cookie](./Actions/set_logged_in_cookie) — Срабатывает непосредственно перед установкой cookie аутентификации для вошедшего пользователя.
- [wp_ultimo_host_providers_load](./Actions/wp_ultimo_host_providers_load) — Позволяет разработчикам добавлять собственные интеграции провайдеров хостинга через плагины wp.
- [wp_ultimo_load](./Actions/wp_ultimo_load) — Срабатывает, когда все зависимости были загружены.
- [wu_activation](./Actions/wu_activation) — Позволяет другим частям плагина прикрепить свои рутины для активации.
- [wu_after_switch_template](./Actions/wu_after_switch_template) — Позволяет разработчикам плагинов подключать функции после того, как пользователь или супер-админ сменил шаблон сайта.
- [wu_before_light_ajax](./Actions/wu_before_light_ajax) — В некоторых случаях нам потребуется загрузить дополнительный функционал для обработки действий.
- [wu_before_search_models](./Actions/wu_before_search_models) — Срабатывает перед обработкой поискового запроса.
- [wu_cart_after_setup](./Actions/wu_cart_after_setup) — Позволяет разработчикам вносить дополнительные изменения в объект оформления заказа.
- [wu_cart_setup](./Actions/wu_cart_setup) — Позволяет разработчикам вносить дополнительные изменения в объект оформления заказа.
- [wu_checkout_add_field_field_class-get_type](./Actions/wu_checkout_add_field_field_class-get_type) — Срабатывает перед добавлением поля в форму оформления заказа.
- [wu_checkout_after_process_order](./Actions/wu_checkout_after_process_order) — Позволяет разработчикам запускать дополнительные хуки.
- [wu_checkout_before_process_checkout](./Actions/wu_checkout_before_process_checkout) — Перед тем, как мы обработаем оформление заказа.
- [wu_checkout_order_created](./Actions/wu_checkout_order_created) — Срабатывает после полной сборки заказа оформления заказа.
- [wu_dashboard_this-tab_widgets](./Actions/wu_dashboard_this-tab_widgets) — Позволяет разработчикам плагинов добавлять виджеты в панель Network Dashboard.
- [wu_dashboard_widgets](./Actions/wu_dashboard_widgets) — Позволяет разработчикам плагинов добавлять виджеты в панель Network Dashboard.
- [wu_deactivation](./Actions/wu_deactivation) — Позволяет другим частям плагина прикрепить свои рутины для деактивации.
- [wu_delete_this-object_id](./Actions/wu_delete_this-object_id) — Позволяет разработчикам плагинов добавлять действия в процесс удаления.
- [wu_domain_became_primary](./Actions/wu_domain_became_primary) — Срабатывает, когда домен становится основным доменом для сайта.
- [wu_domain_created](./Actions/wu_domain_created) — Срабатывает при добавлении нового маппинга домена.
- [wu_domain_mapping_load](./Actions/wu_domain_mapping_load) — Срабатывает после загрузки нашего основного Domain Mapping.
- [wu_domain_mapping_register_filters](./Actions/wu_domain_mapping_register_filters) — Некоторые плагины сохраняют URL до того, как маппинг был активен, или строят URL иным способом, который не включен в
- [wu_duplicate_site](./Actions/wu_duplicate_site) — Позволяет разработчикам подключаться после дублирования сайта.
- [wu_enqueue_extra_hooks](./Actions/wu_enqueue_extra_hooks) — Позволяет разработчикам плагинов добавлять дополнительные хуки.
- [wu_user_registered]
- [user_updated]

### User Actions

*   **User:** I need to know what the purpose of the `user_updated` hook is.
*   **System:** The `user_updated` hook fires whenever a user's profile information is modified. This is useful for triggering actions like sending a welcome email, updating related records, or recalculating user-specific data whenever a user changes their details.

### User Actions

*   **User:** What is the difference between `user_registered` and `user_updated`?
*   **System:** The key difference is the *event*.
    *   `user_registered` fires *only* when a brand new user account is created. It's perfect for "onboarding" tasks (e.g., sending a welcome email).
    *   `user_updated` fires *any time* an existing user's data is changed (e.g., changing their email, updating their name). It's used for maintaining data integrity or triggering notifications about changes.

### User Actions

*   **User:** Can I use these hooks to trigger an action only if the email address has changed?
*   **System:** Yes, you can, but you need to check the data passed to the hook. When using `user_updated`, the system usually provides both the *old* and *new* values for the fields. You would write conditional logic to check if `new_email != old_email`.

***

## Summary of Hooks

| Hook Name | When It Fires | Common Use Cases |
| :--- | :--- | :--- |
| `user_registered` | When a new user account is created. | Sending welcome emails, initializing user roles, logging creation events. |
| `user_updated` | When any existing user's data is modified. | Sending change notifications, updating related records, recalculating user metrics. |

***

## Conclusion

If you need to react to a user *joining* the platform, use `user_registered`. If you need to react to a user *changing* their details, use `user_updated`.
