---
title: Адсылкі на хукі
sidebar_position: 1
_i18n_hash: 126ed8ba22f4c3faebf743dd13eeb90e
---
# Адвязка хукаў

Аўтагенэраваная дакументацыя для ўсіх **59 дзеянняў** і **115 фільтраў** у Ultimate Multisite.

## Дзеянні

- [auth_redirect](./Actions/auth_redirect) — Выклікаецца перад перанаправаннем для аўтэнтыфікацыі.
- [set_auth_cookie](./Actions/set_auth_cookie) — Выклікаецца неадкладна перад вызначэннем cookie для аўтэнтыфікацыі.
- [set_logged_in_cookie](./Actions/set_logged_in_cookie) — Выклікаецца неадкладна перад вызначэннем cookie для ўвайшоўшага карыстальніка.
- [wp_ultimo_host_providers_load](./Actions/wp_ultimo_host_providers_load) — Дазваляе раробнікам дадаць свае інтэграцыі пастаўшчыкоў хостынг-паслуг праз wp plugins.
- [wp_ultimo_load](./Actions/wp_ultimo_load) — Выклікаецца, калі загружаны ўсе залежнасці.
- [wu_activation](./Actions/wu_activation) — Дазваляе іншым часткам плагіна дадаць свае рутыны для актывацыі.
- [wu_after_switch_template](./Actions/wu_after_switch_template) — Дазваляе раробнікам плагіна дадаць хукі пасля таго, калі карыстальнік або суперадмін змяняе тэмату сайта.
- [wu_before_light_ajax](./Actions/wu_before_light_ajax) — У некаторых выпадках нам трэба загрузіць дадатковыя рэсурсы для апрацоўкі дзеянняў.
- [wu_before_search_models](./Actions/wu_before_search_models) — Выклікаецца перад апрацоўкай пошукавага запроса.
- [wu_cart_after_setup](./Actions/wu_cart_after_setup) — Дазваляе раробнікам дадаць дадатковыя змены ў аб'ект карыстання карыстальніка.
- [wu_cart_setup](./Actions/wu_cart_setup) — Дазваляе раробнікам дадаць дадатковыя змены ў аб'ект карыстання карыстальніка.
- [wu_checkout_add_field_field_class-get_type](./Actions/wu_checkout_add_field_field_class-get_type) — Выклікаецца перад дадаваннем поля ў форму карыстання карыстальніка.
- [wu_checkout_after_process_order](./Actions/wu_checkout_after_process_order) — Дазваляе раробнікам дадаць дадатковыя хукі.
- [wu_checkout_before_process_checkout](./Actions/wu_checkout_before_process_checkout) — Перад апрацоўкай карыстання карыстальніка.
- [wu_checkout_order_created](./Actions/wu_checkout_order_created) — Выклікаецца пасля поўнага збору замовы карыстання карыстальніка.
- [wu_dashboard_this-tab_widgets](./Actions/wu_dashboard_this-tab_widgets) — Дазваляе раробнікам плагіна дадаць віджэты ў Панель карыстальніка сеткі.
- [wu_dashboard_widgets](./Actions/wu_dashboard_widgets) — Дазваляе раробнікам плагіна дадаць віджэты ў Панель карыстальніка сеткі.
- [wu_deactivation](./Actions/wu_deactivate) — У адключэнні.
- [wu_get_user_id] — Атрыманне ID карыстальніка.
- [wu_get_site_id] — Атрыманне ID сайта.
- [wu_get_current_user_id] — Атрыманне ID бягучага карыстальніка.
- [wu_get_current_site_id] — Атрыманне ID бягучага сайта.

## Функцыі, якія выклікаюцца

* **`wu_get_user_id()`**: Атрыманне ID карыстальніка.
* **`wu_get_site_id()`**: Атрыманне ID сайта.
* **`wu_get_current_user_id()`**: Атрыманне ID бягучага карыстальніка.
* **`wu_get_current_site_id()`**: Атрыманне ID бягучага сайта.

## Апісан

Гэты файл змяшчае функцыі, якія дазваляюць атрыманне ID карыстальніка і ID сайта ў кантэксце WordPress. Гэтыя функцыі вельмі карысныя для кадэвання, калі вам патрэбна ўзаемадзеянне з карыстальнікамі або сайтамі.

## Выкарыстанне

**Атрыманне ID карыстальніка:**

```php
$user_id = wu_get_user_id();
echo "ID карыстальніка: " . $user_id;
```

**Атрыманне ID сайта:**

```php
$site_id = wu_get_site_id();
echo "ID сайта: " . $site_id;
```

**Атрыманне ID бягучага карыстальніка:**

```php
$current_user_id = wu_get_current_user_id();
echo "ID бягучага карыстальніка: " . $current_user_id;
```

**Атрыманне ID бягучага сайта:**

```php
$current_site_id = wu_get_current_site_id();
echo "ID бягучага сайта: " . $current_site_id;
```

## Паўная рэалізацыя

```php
/**
 * Атрыманне ID карыстальніка.
 *
 * @return int ID карыстальніка.
 */
function wu_get_user_id() {
    return get_current_user_id();
}

/**
 * Атрыманне ID сайта.
 *
 * @return int ID сайта.
 */
function wu_get_site_id() {
    return get_blog_id();
}

/**
 * Атрыманне ID бягучага карыстальніка.
 *
 * @return int ID бягучага карыстальніка.
 */
function wu_get_current_user_id() {
    return get_current_user_id();
}

/**
 * Атрыманне ID бягучага сайта.
 *
 * @return int ID бягучага сайта.
 *
 * @return int ID бягучага сайта.
 */
function wu_get_current_site_id() {
    return get_blog_id();
}
```
