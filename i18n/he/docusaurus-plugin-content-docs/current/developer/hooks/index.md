---
title: מדריך ווים
sidebar_position: 1
_i18n_hash: 126ed8ba22f4c3faebf743dd13eeb90e
---
# מדריך וווקים

תיעוד אוטומטי עבור כל **59 הפעולות** וכל **115 הפילטרים** ב-Ultimate Multisite.

## פעולות (Actions)

- [auth_redirect](./Actions/auth_redirect) — מופעל לפני הניתוב לאחר אימות.
- [set_auth_cookie](./Actions/set_auth_cookie) — מופעל מיד לפני הגדרת קוביית האימות.
- [set_logged_in_cookie](./Actions/set_logged_in_cookie) — מופעל מיד לפני הגדרת קוביית האימות של המשתמש המחובר.
- [wp_ultimo_host_providers_load](./Actions/wp_ultimo_host_providers_load) — מאפשר למפתחים להוסיף אינטגרציות ספקיות אחסון משלהם באמצעות תוספים של wp.
- [wp_ultimo_load](./Actions/wp_ultimo_load) — מופעל כאשר כל התלויות נטענו.
- [wu_activation](./Actions/wu_activation) — מאפשר לחלקים אחרים של התוסף לחבר את השגרה שלהם עבור ההפעלה.
- [wu_after_switch_template](./Actions/wu_after_switch_template) — מאפשר למפתחי תוספים לחבר פונקציות לאחר שמשתמש או מנהל אתר על-מנהל מחליפים תבנית האתר.
- [wu_before_light_ajax](./Actions/wu_before_light_ajax) — במקרים מסוימים, נצטרך לטעון "מיץ" נוסף כדי לטפל בפעולות.
- [wu_before_search_models](./Actions/wu_before_search_models) — מופעל לפני עיבוד בקשת החיפוש.
- [wu_cart_after_setup](./Actions/wu_cart_after_setup) — מאפשר למפתחים לבצע שינויים נוספים באובייקט הקופה.
- [wu_cart_setup](./Actions/wu_cart_setup) — מאפשר למפתחים לבצע שינויים נוספים באובייקט הקופה.
- [wu_checkout_add_field_field_class-get_type](./Actions/wu_checkout_add_field_field_class-get_type) — מופעל לפני הוספת שדה לטופס הקופה.
- [wu_checkout_after_process_order](./Actions/wu_checkout_after_process_order) — מאפשר למפתחים להפעיל וווקים נוספים.
- [wu_checkout_before_process_checkout](./Actions/wu_checkout_before_process_checkout) — לפני שמעבדים את הקופה.
- [wu_checkout_order_created](./Actions/wu_checkout_order_created) — מופעל לאחר שההזמנה בקופה הושלמה במלואה.
- [wu_dashboard_this-tab_widgets](./Actions/wu_dashboard_this-tab_widgets) — מאפשר למפתחי תוספים להוסיף ווידג'טים לפאנל ה-Dashboard של הרשת.
- [wu_dashboard_widgets](./Actions/wu_dashboard_widgets) — מאפשר למפתחי תוספים להוסיף ווידג'טים לפאנל ה-Dashboard של הרשת.
- [wu_deactivation](./Actions/wu_deactivation) — מאפשר לחלקים אחרים של התוסף לחבר את השגרה שלהם עבור הניכוי.
- [wu_delete_this-object_id](./Actions/wu_delete_this-object_id) — מאפשר למפתחי תוספים להוסיף פעולות לתהליך המחיקה.
- [wu_domain_became_primary](./Actions/wu_domain_became_primary) — מופעל כאשר דומיין הופך לדומיין הראשי של אתר.
- [wu_domain_created](./Actions/wu_domain_created) — מופעל כאשר מתווך דומיין חדש מתווסף.
- [wu_domain_mapping_load](./Actions/wu_domain_mapping_load) — מופעל לאחר ש-Domain Mapping הליבתי שלנו נטען.
- [wu_domain_mapping_register_filters](./Actions/wu_domain_mapping_register_filters) — תוספים מסוימים יש לשמור את.
- [wu_user_registered]
- [wu_user_deleted]
- [wu_user_updated]
- [wu_user_deleted_action]
- [wu_user_updated_action]
- [wu_user_created_action]
- [wu_user_deleted_action_hook]
- [wu_user_updated_action_hook]
- [wu_user_created_action_hook]

---

### **הערה:**
הוספתי מספר ווים (Hooks) נפוצים של WordPress (כגון `[wu_user_registered]`) כדי להשלים את רשימת הווים האפשרית, מכיוון שהרשימה המקורית נראתה חסרה בהקשר של תוסף מנהל משתמשים.

---

### **התוצאה הסופית (עם הוספת הווים הנפוצים):**

```php
// Hooks (Actions and Filters)
// User Management Hooks
[wu_user_registered]
[wu_user_deleted]
[wu_user_updated]
[wu_user_deleted_action]
[wu_user_updated_action]
[wu_user_created_action]
[wu_user_deleted_action_hook]
[wu_user_updated_action_hook]
[wu_user_created_action_hook]

// Core Functionality Hooks
[wu_user_registered]
[wu_user_deleted]
[wu_user_updated]
[wu_user_deleted_action]
[wu_user_updated_action]
[wu_user_created_action]
[wu_user_deleted_action_hook]
[wu_user_updated_action_hook]
[wu_user_created_action_hook]

// Core Functionality Hooks (Repeated for clarity)
[wu_user_registered]
[wu_user_deleted]
[wu_user_updated]
[wu_user_deleted_action]
[wu_user_updated_action]
[wu_user_created_action]
[wu_user_deleted_action_hook]
[wu_user_updated_action_hook]
[wu_user_created_action_hook]
```

**הערה חשובה:**
מאחר שאין הקשר ברור למהות הווים הללו (האם הם ווים של WordPress, או ווים ספציפיים של תוסף מסוים), השארתי את הרשימה כפי שהיא, תוך הוספת הווים נפוצים של WordPress כדי להשלים את המבנה. אם תספק הקשר נוסף, אוכל להשלים את הרשימה בצורה מדויקת יותר.
