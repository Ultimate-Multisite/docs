---
title: Референция на хуковете
sidebar_position: 1
_i18n_hash: 126ed8ba22f4c3faebf743dd13eeb90e
---
# Свързани функции (Hooks Reference)

Автоматично генерирана документация за всички **59 действия** и **115 филтри** в Ultimate Multisite.

## Действия (Actions)

- [auth_redirect](./Actions/auth_redirect) — Задейства се преди пренасочването за автентикация.
- [set_auth_cookie](./Actions/set_auth_cookie) — Задейства се веднага преди да се зададе битовият файл за автентикация.
- [set_logged_in_cookie](./Actions/set_logged_in_cookie) — Задейства се веднага преди да се зададе битовият файл за влизане (logged-in).
- [wp_ultimo_host_providers_load](./Actions/wp_ultimo_host_providers_load) — Позволява на разработчиците да добавят своите интеграции с хост провайдори чрез wp плагини.
- [wp_ultimo_load](./Actions/wp_ultimo_load) — Задейства се, когато всички зависимости са заредени.
- [wu_activation](./Actions/wu_activation) — Позволява на други части на плагина да приложат своите рутини за активиране.
- [wu_after_switch_template](./Actions/wu_after_switch_template) — Позволява на разработчиците на плагини да прикачат функции след като потребител или супер администратор смени шаблона на сайта.
- [wu_before_light_ajax](./Actions/wu_before_light_ajax) — В някои случаи ще ни е необходимо да зареждаме допълнителна мощ за обработка на действията.
- [wu_before_search_models](./Actions/wu_before_search_models) — Задейства се преди обработката на заявката за търсене.
- [wu_cart_after_setup](./Actions/wu_cart_after_setup) — Позволява на разработчиците да внесат допълнителни промени в обекта за плащане (checkout).
- [wu_cart_setup](./Actions/wu_cart_setup) — Позволява на разработчиците да внесат допълнителни промени в обекта за плащане (checkout).
- [wu_checkout_add_field_field_class-get_type](./Actions/wu_checkout_add_field_field_class-get_type) — Задейства се преди да се добави поле към формата за плащане.

- [wu_checkout_after_process_order](./Actions/wu_checkout_after_process_order) — Позволяйте разработчиците да активират допълнителни хукове.
- [wu_checkout_before_process_checkout](./Actions/wu_checkout_before_process_checkout) — Преди да обработим процеса на плащане.
- [wu_checkout_order_created](./Actions/wu_checkout_order_created) — Задейства се след като поръчката в чекаута е напълно сглобена.
- [wu_dashboard_this-tab_widgets](./Actions/wu_dashboard_this-tab_widgets) — Позволяйте разработчиците на плагини да добавят виджети към панела за таб на Network Dashboard.
- [wu_dashboard_widgets](./Actions/wu_dashboard_widgets) — Позволяйте разработчиците на плагини да добавят виджети към панела за таб на Network Dashboard.
- [wu_deactivation](./Actions/wu_deactivation) — Позволете на други части на плагина да приложат своите рутини за деактивация.
- [wu_delete_this-object_id](./Actions/wu_delete_this-object_id) — Позволяйте разработчиците на плагини да добавят действия към процеса на изтриване.
- [wu_domain_became_primary](./Actions/wu_domain_became_primary) — Задейства се, когато доменът стане основният домейн за сайта.
- [wu_domain_created](./Actions/wu_domain_created) — Задейства се при добавяне на нова мапинг на домен.
- [wu_domain_mapping_load](./Actions/wu_domain_mapping_load) — Задейства се след като бъде заредена нашата основна Domain Mapping.
- [wu_domain_mapping_register_filters](./Actions/wu_domain_mapping_register_filters) — Някои плагини ще запазят URL преди мапингът да е активен или ще изграждат URL по различен начин, който не е включен в

- [wu_duplicate_site](./Actions/wu_duplicate_site) — Позволя разработчиците да качват код след дублиране на сайт.
- [wu_enqueue_extra_hooks](./Actions/wu_enqueue_extra_hooks) — Позволя на разработчиците на плагини да добавят допълнителни хукове (hooks).
- [wu_flush_known_caches](./Actions/wu_flush_known_caches) — Хук за допълнително почистване на кеша.
- [wu_handle_add_new_domain_modal](./Actions/wu_handle_add_new_domain_modal) — Задейства се преди обработката на заявката за модален прозорец за добавяне на нов домен.
- [wu_handle_customer_meta_fields](./Actions/wu_handle_customer_meta_fields) — Позволя на разработчиците на плагини да записват мета данни по различен начин, ако е необходимо.
- [wu_handle_user_meta_fields](./Actions/wu_handle_user_meta_fields) — Позволя на разработчиците на плагини да записват мета данни за потребителя по различен начин, ако е необходимо.
- [wu_magic_link_invalid_token](./Actions/wu_magic_link_invalid_token) — Задейства се, когато се срещне невалиден токен за магически линк (magic link).
- [wu_magic_link_login](./Actions/wu_magic_link_login) — Задейства се след влизане на потребител чрез магически линк.
- [wu_maybe_create_customer](./Actions/wu_maybe_create_customer) — Позволя на разработчиците на плагини да правят допълнителни действия, когато се добави клиент.
- [wu_mcp_abilities_registered](./Actions/wu_mcp_abilities_registered) — Задейства се след регистрирането на способностите на MCP за определено същество (entity).
- [wu_mcp_adapter_initialized](./Actions/wu_mcp_adapter_initialized) — Задейства се след инициализирането на адаптера на MCP.

- [wu_membership_post_cancel](./Actions/wu_membership_post_cancel) — Задейства се след отказ от членството.
- [wu_membership_post_renew](./Actions/wu_membership_post_renew) — Задейства се след помия на членството.
- [wu_membership_pre_cancel](./Actions/wu_membership_pre_cancel) — Задейства се преди отказ от членството.
- [wu_membership_pre_renew](./Actions/wu_membership_pre_renew) — Задейства се преди помия на членството.
- [wu_model_post_save](./Actions/wu_model_post_save) — Сработва след като обектът бъде записан в базата данни.
- [wu_page_added](./Actions/wu_page_added) — Позволява на разработчиците на плагини да изпълняват допълнителни действия, когато страниците бъдат регистрирани.
- [wu_page_after_render](./Actions/wu_page_after_render) — Позволява на разработчиците на плагини да добавят допълнителен съдържание след като запечатаме страницата.
- [wu_page_before_render](./Actions/wu_page_before_render) — Позволява на разработчиците на плагини да добавят допълнително съдържание преди запечатането на страницата.
- [wu_page_load](./Actions/wu_page_load) — Позволява на разработчиците на плагини да добавят допълнителни хукове към нашите страници.
- [wu_page_this-id_after_render](./Actions/wu_page_this-id_after_render) — Позволява на разработчиците на плагини да добавят допълнително съдържание след като запечатаме страницата с този ID.
- [wu_page_this-id_before_render](./Actions/wu_page_this-id_before_render) — Позволява на разработчиците на плагини да добавят допълнително съдържание преди запечатането на страницата с този ID.
- [wu_page_this-id_load](./Actions/wu_page_this-id_load) — Позволява на разработчиците на плагини да добавят допълнителни хукове към нашите страници с този ID.

- [wu_page_this-id_register_widgets](./Actions/wu_page_this-id_register_widgets) — Задейства се след регистрацията на виджети за тази страница.
- [wu_register_capabilities](./Actions/wu_register_capabilities) — Задейства се, за да позволява на аддони (addons) да прикрепят модули с възможности към интеграциите.
- [wu_register_integrations](./Actions/wu_register_integrations) — Задейства се, за да позволява на интеграциите да се регистрират сами.
- [wu_register_rest_routes](./Actions/wu_register_rest_routes) — Позволява регистрацията на допълнителни маршрути (routes).
- [wu_save_this-object_id](./Actions/wu_save_this-object_id) — Позволява на разработчиците на плагини да добавят действия към процеса на запис.
- [wu_site_created](./Actions/wu_site_created) — Задейства се след първоначално създаване на сайт.
- [wu_sso_loaded](./Actions/wu_sso_loaded) — Позволява на разработчиците на плагини да добавят допълнителни хукове (hooks), ако е необходимо.
- [wu_template_previewer](./Actions/wu_template_previewer) — Задейства се, когато се работи в контекста на предварително показването на шаблона (template previewer).
- [wu_this-id_scripts](./Actions/wu_this-id_scripts) — Задейства хука за зареждане на скриптове (enqueue scripts hook).
- [wu_this-model_post_delete](./Actions/wu_this-model_post_delete) — Задейства се след съхранение на обजेक्ट в базата данни.
- [wu_this-model_post_save](./Actions/wu_this-model_post_save) — Задейства се след съхранение на обजेक्ट в базата данни.
- [wu_this-model_pre_delete](./Actions/wu_this-model_pre_delete) — Задейства се след съхранение на обजेक्ट в базата данни.

- [wu_unlock_this-object_id](./Actions/wu_unlock_this-object_id) — Позволява на разработчиците на плагини да добавят действия към процеса на отваряне (unlocking).

## Филтри

- [auth_cookie_expiration](./Filters/auth_cookie_expiration) — Фильтърът за ограничаване на продължителността на валидността на бисквитките за автентикация.
- [auth_redirect_scheme](./Filters/auth_redirect_scheme) — Фильтърът за промяна на схемата за пренасочване при автентикацията.
- [get_blogs_of_user](./Filters/get_blogs_of_user) — Повторява оригиналния WP Filter тук, за добра предпазливост.
- [get_site_url_for_previewer](./Filters/get_site_url_for_previewer) — Позволява на разработчиците на плагини да филтрират URL-а, който се използва в прелиビューтора (previewer).
- [secure_auth_cookie](./Filters/secure_auth_cookie) — Фильтърът за определяне дали бисквитката за автентикация трябва да се изпраща само през HTTPS.
- [secure_auth_redirect](./Filters/secure_auth_redirect) — Фильтърът за определяне дали да се използва сигурно пренасочване при автентикацията.
- [secure_logged_in_cookie](./Filters/secure_logged_in_cookie) — Фильтърът за определяне дали бисквитката за влизане трябва да се изпраща само през HTTPS.
- [send_auth_cookies](./Filters/send_auth_cookies) — Позволява предотвратяване на реалното изпращане на бисквитките за автентикация към клиента.
- [wp_ultimo_redirect_url_after_signup](./Filters/wp_ultimo_redirect_url_after_signup) — Задава URL-а за пренасочване след регистрацията.
- [wp_ultimo_registration_steps](./Filters/wp_ultimo_registration_steps) — Добавя допълнителни стъпки чрез филтри.
- [wp_ultimo_render_vars](./Filters/wp_ultimo_render_vars) — Позволява на разработчиците на плагини да добавят допълнителна променлива към контекста за рендиране глобално.
- [wp_ultimo_skip_network_active_check](./Filters/wp_ultimo_skip_network_active_check) — Позволява на разработчиците да прескочат тази проверка на активната мрежа (network active check).

- [wu_add_new_domain_modal_fields](./Filters/wu_add_new_domain_modal_fields) — Фильтърва полетата за модално прозорето за добавяне на нов домен.
- [wu_add_product_setup_fee_line_item](./Filters/wu_add_product_setup_fee_line_item) — Позволява на разработчиците да променят елемента с такса за настройка продукта.
- [wu_admin_notices](./Filters/wu_admin_notices) — Позволява на разработчиците да филтрират административните известия, добавени от Ultimate Multisite.
- [wu_after_.this-slug._api_arguments](./Filters/wu_after_.this-slug._api_arguments) — Филтрира аргументите на API след промяна.
- [wu_allowed_line_item_types](./Filters/wu_allowed_line_item_types) — Сега работим с всички типове.
- [wu_apply_plan_limits](./Filters/wu_apply_plan_limits) — Позволява на разработчиците на плагини да преминат през ограниченията (short-circuit).
- [wu_apply_signup_fee](./Filters/wu_apply_signup_fee) — Филтрира дали такса за регистрация трябва да бъде приложена.
- [wu_before_.this-slug._api_arguments](./Filters/wu_before_.this-slug._api_arguments) — Филтрира оригиналните аргументи на API преди промяната.
- [wu_billing_address_fields](./Filters/wu_billing_address_fields) — Позволява на разработчиците на плагини да филтрират полетата за сметка (billing address).
- [wu_bypass_checkout_form](./Filters/wu_bypass_checkout_form) — Позволява на разработчиците да преминат през изхода и да зададат нов.
- [wu_bypass_unset_current_user](./Filters/wu_bypass_unset_current_user) — Позволява на разработчиците да пропуснат кода за недовършено зададен текущ потребител (unset current user).
- [wu_cart_get_recurring_total](./Filters/wu_cart_get_recurring_total) — Филтрира общата сума на повтарящата се такса в количката.

- [wu_cart_get_subtotal](./Filters/wu_cart_get_subtotal) — Филете "начална сума" общата сума.
- [wu_cart_get_total](./Filters/wu_cart_get_total) — Филете "начална сума" общата сума.
- [wu_checkout_calculate_prorate_credits](./Filters/wu_checkout_calculate_prorate_credits) — Позволява на разработчиците на плагини да влияят върху стойността на кредитите.
- [wu_checkout_field_templates](./Filters/wu_checkout_field_templates) — Нашият API за добавяне на нови шаблони за полета, които се свързват тук.
- [wu_checkout_field_types](./Filters/wu_checkout_field_types) — Нашият API за добавяне на нови типове за полета, които се свързват тук.
- [wu_checkout_pages_error_messages](./Filters/wu_checkout_pages_error_messages) — Филете съобщения за грешките.
- [wu_checkout_step_validation_submittable_field_types](./Filters/wu_checkout_step_validation_submittable_field_types) — Позволява на разработчиците да пропуснат проверката, ако полето е автоматично изпращаемо (auto-submittable).
- [wu_checkout_validation_aliases](./Filters/wu_checkout_validation_aliases) — Позволява на разработчиците на плагини да добавят персонализирани псевдоними в валидатора на формата.
- [wu_checkout_validation_rules](./Filters/wu_checkout_validation_rules) — Позволява на разработчиците на плагини да филтрират правилата за валидация.
- [wu_cli_params_to_remove](./Filters/wu_cli_params_to_remove) — Не задавайте нежеланите Параметри (Params).
- [wu_contains_element](./Filters/wu_contains_element) — Позволява на разработчиците да променят резултатите от първоначалния търсене.

- [wu_core_installer_install_sunrise](./Filters/wu_core_installer_install_sunrise) — Позволя давайки хост провайдори да инстали константите по различен начин.
- [wu_country_get_administrative_division_name](./Filters/wu_country_get_administrative_division_name) — Връща красивият име на административните подразделения на страната.
- [wu_country_get_cities](./Filters/wu_country_get_cities) — Връща списъка с градове за един регион в една страна.
- [wu_country_get_states](./Filters/wu_country_get_states) — Връща списъка със състоянията за тази страна.
- [wu_current_set_customer](./Filters/wu_current_set_customer) — Позволя на разработчиците да променят поведението по подразбиране и да задават текущия клиент по различен начин.
- [wu_current_set_membership](./Filters/wu_current_set_membership) — Позволя на разработчиците да променят поведението по подразбиране и да задават текущата членство по различен начин.
- [wu_current_set_site](./Filters/wu_current_set_site) — Позволя на разработчиците да променят поведението по подразбиране и да задават текущия сайт по различен начин.
- [wu_current_type_get_manage_url](./Filters/wu_current_type_get_manage_url) — Позволя на разработчиците да променят параметрите за URL на управлението на сайта.
- [wu_documentation_get_link](./Filters/wu_documentation_get_link) — Позволя на разработчиците на плагини да филтрират линковете.
- [wu_domain_has_correct_dns](./Filters/wu_domain_has_correct_dns) — Позволя на разработчиците на плагини да добавят нови проверки за определяне на резултатите.

- [wu_element_block_types_to_check](./Filters/wu_element_block_types_to_check) — Може да ни тряabe да добавим допълнителни блокове по-късно.
- [wu_element_maybe_extract_arguments](./Filters/wu_element_maybe_extract_arguments) — Добавя общ филтър, който позволява на разработчиците да разширят този парсер за работа с допълнителни builders или плагини.
- [wu_enforce_password_rules](./Filters/wu_enforce_password_rules) — Филтрира дали да се прилагат допълнителни правила за пароли.
- [wu_generated_username_from_email](./Filters/wu_generated_username_from_email) — Филтрира генерираното потребителско име от имейла.
- [wu_get_checkout_variables](./Filters/wu_get_checkout_variables) — Позволява на разработчиците на плагини да филтрират предварително зададените променливи за страница на чекаута.
- [wu_get_membership_allowed_forms](./Filters/wu_get_membership_allowed_forms) — Позволява на разработчиците да добавят нови slug-ове на форми, за да се обходи това поведение.
- [wu_get_migration_steps](./Filters/wu_get_migration_steps) — Позволява на разработчиците и add-on-овете да добавят нови стъпки за миграция.
- [wu_get_network_public_ip](./Filters/wu_get_network_public_ip) — Вижте повече за този филтър по-долу, в същия метод.
- [wu_get_post_types](./Filters/wu_get_post_types) — Позволява на разработчиците да из selects кои типове записи трябва да бъдат показвани.
- [wu_get_pricing_table_lines_this-id](./Filters/wu_get_pricing_table_lines_this-id) — Връща Редове, които могат да се филтрират по този id.
- [wu_get_site_domain_and_path](./Filters/wu_get_site_domain_and_path) — Позволява на разработчиците да манипулират двойките домен/пути.

- [wu_hosting_integration_wizard_sections](./Filters/wu_hosting_integration_wizard_sections) — Фильтърва секциите на wizard за настройка интеграция с хостинг.
- [wu_id_form_fields](./Filters/wu_id_form_fields) — Фильтърва полетата във форма. Формата се идентифицира по ID в името на филтъра.
- [wu_independent_billing_cycle_product_types](./Filters/wu_independent_billing_cycle_product_types) — Фильтърва типовете продукти, които имат независими цикли за плащане.
- [wu_is_api_enabled](./Filters/wu_is_api_enabled) — Позволява на разработчиците на plugin да принуди определено състояние за API.
- [wu_is_development_mode](./Filters/wu_is_development_mode) — Позволява на разработчиците на plugin да добавят допълнителни тестове за development mode (режим за разработка).
- [wu_is_mcp_enabled](./Filters/wu_is_mcp_enabled) — Позволява на разработчиците на plugin да принуди определено състояние за MCP адаптера.
- [wu_light_ajax_allowed_hooks](./Filters/wu_light_ajax_allowed_hooks) — От е безопасности причини ограничаваме броя на действията, които могат да бъдат включени (hooked). Този филтър позволява на разработчиците да разширят...
- [wu_limits_is_post_above_limit](./Filters/wu_limits_is_post_above_limit) — Проверява дали даден тип пост е разрешен в този план. Позволява на разработчиците на plugin да филтрират връщаното значение.
- [wu_magic_link_enforce_ip](./Filters/wu_magic_link_enforce_ip) — Фильтърва дали да се прилага проверка на IP адрес.
- [wu_magic_link_enforce_user_agent](./Filters/wu_magic_link_enforce_user_agent) — Фильтърва дали да се прилага проверка на user agent (браузърен агент).

- [wu_magic_link_url](./Filters/wu_magic_link_url) — Филете генерираната URL на магическия линк.
- [wu_magic_links_enabled](./Filters/wu_magic_links_enabled) — Филете дали магическите линкове са включени или не.
- [wu_make_primary_domain_redirect_url](./Filters/wu_make_primary_domain_redirect_url) — Филете URL на пренасочване след като направите домейна основен.
- [wu_maybe_redirect_to_admin_panel_exclusion_list](./Filters/wu_maybe_redirect_to_admin_panel_exclusion_list) — Създайте списък с изключения параметри, които предотвратяват автоматичното пренасочване към административната панел.
- [wu_mcp_include_ability](./Filters/wu_mcp_include_ability) — Филете за да надвишите решението за включване на способността на MCP (Multi-Channel Platform).
- [wu_membership_calculated_date_expiration](./Filters/wu_membership_calculated_date_expiration) — Филете изчислената дата на изтичане.
- [wu_membership_renewal_expiration_date](./Filters/wu_membership_renewal_expiration_date) — Филете изчислената дата на изтичане, която ще бъде зададена след помия.
- [wu_membership_update_forms](./Filters/wu_membership_update_forms) — Позволете разработчиците да добавят нови slug-ове за форми за актуализация.
- [wu_minimum_password_length](./Filters/wu_minimum_password_length) — Филете минималната дължина на паролата.
- [wu_minimum_password_strength](./Filters/wu_minimum_password_strength) — Филете минималната необходимо степен на сигурност на паролата (скор от zxcvbn).
- [wu_page_get_title_links](./Filters/wu_page_get_title_links) — Позволете разработчиците на плагиновете и ни сами да добавяме действия (action links) към нашите редактиращи страници.

- [wu_password_require_lowercase](./Filters/wu_password_require_lowercase) — Филтрира дали да се изисква малки букви в паролите.
- [wu_password_require_number](./Filters/wu_password_require_number) — Филтрира дали да се изисква цифри в паролите.
- [wu_password_require_special](./Filters/wu_password_require_special) — Филтрира дали да се изисква специални символи в паролите.
- [wu_password_require_uppercase](./Filters/wu_password_require_uppercase) — Филтрира дали да се изисква заглавни букви в паролите.
- [wu_pending_payment_message](./Filters/wu_pending_payment_message) — Позволява на потребителя да промени съобщението относно неплатените плащания.
- [wu_plan_product_types](./Filters/wu_plan_product_types) — Филтрира типовете продукти, които трябва да се третират като планове (plans).
- [wu_post_count](./Filters/wu_post_count) — Позволява на разработчиците на плагини да променят общия брой записи.
- [wu_post_count_statuses](./Filters/wu_post_count_statuses) — Позволява на разработчиците на плагини да променят кои статуси на постове трябва да се броят. По подразбиране, публикуваните и лични постове се брои.
- [wu_post_default_status](./Filters/wu_post_default_status) — Филтрира данните на обекта преди те да бъдат съ저вани в базата данни.
- [wu_pre_save_settings](./Filters/wu_pre_save_settings) — Позволява на разработчиците да филтрират настройките преди запазване от Ultimate Multisite.
- [wu_rest_create_item](./Filters/wu_rest_create_item) — Филтрира дали е разрешено да се продължи с заявката или не.

- [wu_rest_delete_item](./Filters/wu_rest_delete_item) — Фильтър, който проверява дали е разрешено да продължите с заявката или не.
- [wu_rest_get_item](./Filters/wu_rest_get_item) — Фильтър, който проверява дали е разрешено да продължите с заявката или не.
- [wu_rest_get_items](./Filters/wu_rest_get_items) — Фильтър, който проверява дали е разрешено да продължите с заявката или не.
- [wu_rest_update_item](./Filters/wu_rest_update_item) — Фильтър, който проверява дали е разрешено да продължите с заявката или не.
- [wu_return_url](./Filters/wu_return_url) — Позволява на разработчиците да променят URL за връщане на портала, използвана след процеса на плащане.
- [wu_search_models_functions](./Filters/wu_search_models_functions) — Позволява на разработчиците на плагини да добавят повече функции за модели търсене.
- [wu_setup_wizard](./Filters/wu_setup_wizard) — Позволява на разработчиците да добавят допълнителни стъпки в wizard за настройка.
- [wu_should_redirect_to_primary_domain](./Filters/wu_should_redirect_to_primary_domain) — Позволява на разработчиците да прекъснат редиректирането, предотвратявайки му да се случи.
- [wu_signup_step_handler_this-step](./Filters/wu_signup_step_handler_this-step) — Позволява пренаписване на обработчика за тази стъпка в регистрацията.
- [wu_site_list_get_bulk_actions](./Filters/wu_site_list_get_bulk_actions) — Фильтър, който филтрира наличните масови действия за сайтове.
- [wu_sites_column_limit](./Filters/wu_sites_column_limit) — Фильтър за промяна на стойността за `get pluginssites` в мрежата.
- [wu_sso_enabled](./Filters/wu_sso_enabled) — Включва/изключва възможността за единично вход (single-sign-on) между домейни.

- [wu_stripe_checkout_subscription_data](./Filters/wu_stripe_checkout_subscription_data) — Фильтрирате данните за абонамента от Stripe. Може да превземете контрола над `success_url` или `cancel_url`.
- [wu_stripe_create_payment_intent_args](./Filters/wu_stripe_create_payment_intent_args) — Фильтрирате аргументите за създаване на payment intent.
- [wu_stripe_existing_plan_id](./Filters/wu_stripe_existing_plan_id) — Фильтрирате ID на плана, който да проверявате. Ако този план съществува, новата абонамент ще използва този план.
- [wu_stripe_existing_product_id](./Filters/wu_stripe_existing_product_id) — Фильтрирате ID на продукта, който да проверявате. Ако този продукт съществува, новата абонамент ще използва този продукт.
- [wu_stripe_generate_idempotency_key](./Filters/wu_stripe_generate_idempotency_key) — Фильтрирате стойността на `idempotency_key`, която се изпраща с опции за плащане към Stripe.
- [wu_stripe_webhook_membership](./Filters/wu_stripe_webhook_membership) — Фильтрирате записята за членство, свързана с този webhook.
- [wu_this-model_meta_pre_save](./Filters/wu_this-model_meta_pre_save) — Фильтрирате мета данните преди те да бъдат сериализирани за съхранение в база данни.
- [wu_this-model_pre_save](./Filters/wu_this-model_pre_save) — Фильтрирате данните на обекта преди тяхното съхранение в базата данни.
- [wu_upgrade_to_unlock_url](./Filters/wu_upgrade_to_unlock_url) — Позволява на разработчиците да променят URL за преминаване към разблокиране (upgrade to unlock URL).
- [wu_use_domain_mapping](./Filters/wu_use_domain_mapping) — Определя дали трябва да се използва доимбаване на домейн (domain mapping).

- [wu_username_from_email](./Filters/wu_username_from_email) — Филтър за ново потребителско име на клиента.
- [wu_users_membership_limit_message](./Filters/wu_users_membership_limit_message) — Позволява на разработчиците да променят съобщението относно лимита на членовете в групата.
- [wu_view_override_replaceable_views](./Filters/wu_view_override_replaceable_views) — Позволява на разработчиците да добавят допълнителни папки към списъка за заместващи виоди (replaceable list).
- [wu_wp_cli_enabled_sub_commands](./Filters/wu_wp_cli_enabled_sub_commands) — Филтрира кои подкоманди са активни за тази субект.
- [wu_wp_config_reference_hook_line_patterns](./Filters/wu_wp_config_reference_hook_line_patterns) — Проверяваме три шаблона, когато се опитваме да определим къде можем да вмъкнем нашите константи:
