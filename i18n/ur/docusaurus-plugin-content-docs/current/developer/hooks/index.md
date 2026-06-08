---
title: Hooks کا حوالہ
sidebar_position: 1
_i18n_hash: 126ed8ba22f4c3faebf743dd13eeb90e
---
# Hooks Reference

Ultimate Multisite میں تمام **59 actions** اور **115 filters** کے لیے خودکار طور پر تیار کردہ دستاویز۔

## Actions

- [auth_redirect](./Actions/auth_redirect) — Authentication redirect سے پہلے چلتا ہے۔
- [set_auth_cookie](./Actions/set_auth_cookie) — Authentication cookie سیٹ ہونے سے فوراً پہلے چلتا ہے۔
- [set_logged_in_cookie](./Actions/set_logged_in_cookie) — logged-in authentication cookie سیٹ ہونے سے فوراً پہلے چلتا ہے۔
- [wp_ultimo_host_providers_load](./Actions/wp_ultimo_host_providers_load) — ڈویلپرز کو wp plugins کے ذریعے اپنے ہوسٹ فراہم کنندہ انٹیگریشنز شامل کرنے کی اجازت دیتا ہے۔
- [wp_ultimo_load](./Actions/wp_ultimo_load) — جب تمام dependencies لوڈ ہو جاتی ہیں تو ٹرگر ہوتا ہے۔
- [wu_activation](./Actions/wu_activation) — پلاگ ان کے دیگر حصوں کو activation کے لیے اپنی روٹینز منسلک کرنے دیتا ہے۔
- [wu_after_switch_template](./Actions/wu_after_switch_template) — یہ پلاگ ان ڈویلپرز کو اجازت دیتا ہے کہ وہ اس وقت کے بعد فنکشنز کو ہک کریں جب کوئی صارف یا سپر ایڈمن سائٹ کا ٹیمپلیٹ تبدیل کرتا ہے۔
- [wu_before_light_ajax](./Actions/wu_before_light_ajax) — کچھ صورتوں میں، ہمیں actions کو ہینڈل کرنے کے لیے اضافی مواد لوڈ کرنے کی ضرورت ہوگی۔
- [wu_before_search_models](./Actions/wu_before_search_models) — search request کی پروسیسنگ سے پہلے چلتا ہے۔
- [wu_cart_after_setup](./Actions/wu_cart_after_setup) — ڈویلپرز کو چیک آؤٹ آبجیکٹ میں اضافی تبدیلیاں کرنے کی اجازت دیتا ہے۔
- [wu_cart_setup](./Actions/wu_cart_setup) — ڈویلپرز کو چیک آؤٹ آبجیکٹ میں اضافی تبدیلیاں کرنے کی اجازت دیتا ہے۔
- [wu_checkout_add_field_field_class-get_type](./Actions/wu_checkout_add_field_field_class-get_type) — چیک آؤٹ فارم میں کوئی فیلڈ شامل ہونے سے پہلے چلتا ہے۔
- [wu_checkout_after_process_order](./Actions/wu_checkout_after_process_order) — ڈویلپرز کو اضافی hooks ٹرگر کرنے کی اجازت دیتا ہے۔
- [wu_checkout_before_process_checkout](./Actions/wu_checkout_before_process_checkout) — چیک آؤٹ پروسیس کرنے سے پہلے۔
- [wu_checkout_order_created](./Actions/wu_checkout_order_created) — چیک آؤٹ آرڈر مکمل طور پر تیار ہونے کے بعد چلتا ہے۔
- [wu_dashboard_this-tab_widgets](./Actions/wu_dashboard_this-tab_widgets) — پلاگ ان ڈویلپرز کو Network Dashboard Panel میں widgets شامل کرنے کی اجازت دیتا ہے۔
- [wu_dashboard_widgets](./Actions/wu_dashboard_widgets) — پلاگ ان ڈویلپرز کو Network Dashboard Panel میں widgets شامل کرنے کی اجازت دیتا ہے۔
- [wu_deactivation](./Actions/wu_deactivation) — پلاگ ان کے دیگر حصوں کو deactivation کے لیے اپنی روٹینز منسلک کرنے دیتا ہے۔
- [wu_delete_this-object_id](./Actions/wu_delete_this-object_id) — پلاگ ان ڈویلپرز کو حذف کرنے کے عمل میں actions شامل کرنے کی اجازت دیتا ہے۔
- [wu_domain_became_primary](./Actions/wu_domain_became_primary) — جب کوئی ڈومین کسی سائٹ کے لیے پرائمری ڈومین بن جاتا ہے تو چلتا ہے۔
- [wu_domain_created](./Actions/wu_domain_created) — نئے ڈومین کے لیے کیا جاتا ہے۔
- [wu_get_user_id] — صارف کی ID حاصل کرتا ہے۔

***

### 💡 Quick Guide:

*   **`[action]`**: The action to perform.
*   **`[args]`**: Arguments passed to the action.

***

### 📚 Example:

```php
// Example: Get the current user's ID
$user_id = [wu_get_user_id]();
```

***

### 🚀 Getting Started:

1.  **Setup:** Include the library file.
2.  **Usage:** Call the function with the required arguments.

***

### ⚠️ Important Notes:

*   Always check the documentation for required arguments.
*   Error handling is crucial for robust code.

***

### 🛠️ Code Snippet:

```php
// Example: Check if the user is logged in
if (is_user_logged_in()) {
    // Perform actions for logged-in users
}
```
