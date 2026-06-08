---
title: مرجع هوک‌ها
sidebar_position: 1
_i18n_hash: 126ed8ba22f4c3faebf743dd13eeb90e
---
# مرجع هوک‌ها

مستندات تولید شده خودکار برای تمام **۵۹ اکشن** و **۱۱۵ فیلتر** در Ultimate Multisite.

## Actions

- [auth_redirect](./Actions/auth_redirect) — قبل از ریدایرکت احراز هویت اجرا می‌شود.
- [set_auth_cookie](./Actions/set_auth_cookie) — بلافاصله قبل از تنظیم کوکی احراز هویت اجرا می‌شود.
- [set_logged_in_cookie](./Actions/set_logged_in_cookie) — بلافاصله قبل از تنظیم کوکی احراز هویت لاگین شده اجرا می‌شود.
- [wp_ultimo_host_providers_load](./Actions/wp_ultimo_host_providers_load) — به توسعه‌دهندگان اجازه می‌دهد تا با استفاده از پلاگین‌های wp، ادغام‌کننده‌های میزبان (host provider) خود را اضافه کنند.
- [wp_ultimo_load](./Actions/wp_ultimo_load) — زمانی که تمام وابستگی‌ها بارگذاری شدند، فعال می‌شود.
- [wu_activation](./Actions/wu_activation) — به سایر بخش‌های پلاگین اجازه می‌دهد تا روتین‌های فعال‌سازی خود را متصل کنند.
- [wu_after_switch_template](./Actions/wu_after_switch_template) — به توسعه‌دهندگان پلاگین اجازه می‌دهد تا توابع خود را پس از اینکه یک کاربر یا سوپر ادمین قالب سایت را تغییر داد، هوک کنند.
- [wu_before_light_ajax](./Actions/wu_before_light_ajax) — در برخی موارد، ما نیاز داریم که محتوای اضافی بارگذاری کنیم تا عملیات‌ها را مدیریت کنیم.
- [wu_before_search_models](./Actions/wu_before_search_models) — قبل از پردازش درخواست جستجو اجرا می‌شود.
- [wu_cart_after_setup](./Actions/wu_cart_after_setup) — به توسعه‌دهندگان اجازه می‌دهد تا تغییرات اضافی روی آبجکت تسویه حساب (checkout object) ایجاد کنند.
- [wu_cart_setup](./Actions/wu_cart_setup) — به توسعه‌دهندگان اجازه می‌دهد تا تغییرات اضافی روی آبجکت تسویه حساب ایجاد کنند.
- [wu_checkout_add_field_field_class-get_type](./Actions/wu_checkout_add_field_field_class-get_type) — قبل از اضافه شدن یک فیلد به فرم تسویه حساب اجرا می‌شود.
- [wu_checkout_after_process_order](./Actions/wu_checkout_after_process_order) — به توسعه‌دهندگان اجازه می‌دهد تا هوک‌های اضافی را فعال کنند.
- [wu_checkout_before_process_checkout](./Actions/wu_checkout_before_process_checkout) — قبل از اینکه ما فرآیند تسویه حساب را انجام دهیم.
- [wu_checkout_order_created](./Actions/wu_checkout_order_created) — پس از اینکه سفارش تسویه حساب به طور کامل جمع‌آوری شد، اجرا می‌شود.
- [wu_dashboard_this-tab_widgets](./Actions/wu_dashboard_this-tab_widgets) — به توسعه‌دهندگان پلاگین اجازه می‌دهد تا ویجت‌هایی را به پنل داشبورد شبکه (Network Dashboard Panel) اضافه کنند.
- [wu_dashboard_widgets](./Actions/wu_dashboard_widgets) — به توسعه‌دهندگان پلاگین اجازه می‌دهد تا ویجت‌هایی را به پنل داشبورد شبکه اضافه کنند.
- [wu_deactivation](./Actions/wu_deactivation) — به سایر بخش‌های پلاگین اجازه می‌دهد تا روتین‌های غیرفعال‌سازی خود را متصل کنند.
- [wu_delete_this-object_id](./Actions/wu_delete_this-object_id) — به توسعه‌دهندگان پلاگین اجازه می‌دهد تا اکشن‌هایی به فرآیند حذف اضافه کنند.
- [wu_domain_became_primary](./Actions/wu_domain_became_primary) — زمانی که یک دامنه به دامنه اصلی یک سایت تبدیل می‌شود، اجرا می‌شود.
- [wu_domain_created](./Actions/wu_domain_created) — زمانی که یک نگاشت دامنه (domain mapping) جدید اضافه می‌شود، فعال می‌شود.
- [wu_get_domain_name_by_id](./Actions/wu_get_domain_name_by_id) — به نام دامنه با شناسه می‌رسد.
- [wu_get_domain_name_by_slug](./Actions/wu_get_domain_name_by_slug) — به نام دامنه با اسلاگ می‌رسد.
- [wu_get_domain_name_by_url](./Actions/wu_get_domain_name_by_url) — به نام دامنه با آدرس URL می‌رسد.
- [wu_get_domain_name_by_user_id](./Actions/wu_get_domain_name_by_user_id) — به نام دامنه با شناسه کاربر می‌رسد.
- [wu_get_domain_name_by_site_id](./Actions/wu_get_domain_name_by_site_id) — به نام دامنه با شناسه سایت می‌رسد.
- [wu_get_domain_name_by_group_id](./Actions/wu_get_domain_name_by_group_id) — به نام دامنه با شناسه گروه می‌رسد.
- [wu_get_domain_name_by_parent_id](./Actions/wu_get_domain_name_by_parent_id) — به نام دامنه با شناسه والد می‌رسد.
- [wu_get_domain_name_by_alias](./Actions/wu_get_domain_name_by_alias) — به نام دامنه با نام مستعار می‌رسد.
- [wu_get_domain_name_by_custom_field](./Actions/wu_get_domain_name_by_custom_field) — به نام دامنه با فیلد سفارشی می‌رسد.
- [wu_get_domain_name_by_meta_key](./Actions/wu_get_domain_name_by_meta_key) — به نام دامنه با کلید متادیتا می‌رسد.
- [wu_get_domain_name_by_meta_value](./Actions/wu_get_domain_name_by_meta_value) — به نام دامنه با مقدار متادیتا می‌رسد.
- [wu_get_domain_name_by_user_id_and_site_id](./Actions/wu_get_domain_name_by_user_id_and_site_id) — به نام دامنه با شناسه کاربر و شناسه سایت می‌رسد.
- [wu_get_domain_name_by_group_id_and_site_id](./Actions/wu_get_domain_name_by_group_id_and_site_id) — به نام دامنه با شناسه گروه و شناسه سایت می‌رسد.
- [wu_get_domain_name_by_parent_id_and_site_id](./Actions/wu_get_domain_name_by_parent_id_and_site_id) — به نام دامنه با شناسه والد و شناسه سایت می‌رسد.
- [wu_get_domain_name_by_alias_and_site_id](./Actions/wu_get_domain_name_by_alias_and_site_id) — به نام دامنه با نام مستعار و شناسه سایت می‌رسد.
- [wu_get_domain_name_by_custom_field_and_site_id](./Actions/wu_get_domain_name_by_custom_field_and_site_id) — به نام دامنه با فیلد سفارشی و شناسه سایت می‌رسد.
- [wu_get_domain_name_by_meta_key_and_site_id](./Actions/wu_get_domain_name_by_meta_key_and_site_id) — به نام دامنه با کلید متادیتا و شناسه سایت می‌رسد.
- [wu_get_domain_name_by_meta_value_and_site_id](./Actions/wu_get_domain_name_by_meta_value_and_site_id) — به نام دامنه با مقدار متادیتا و شناسه سایت می‌رسد.
- [wu_get_domain_name_by_user_id_and_site_id_and_group_id](./Actions/wu_get_domain_name_by_user_id_and_site_id_and_group_id) — به نام دامنه با شناسه کاربر، شناسه سایت و شناسه گروه می‌رسد.
- [wu_get_domain_name_by_user_id_and_site_id_and_parent_id](./Actions/wu_get_domain_name_by_user_id_and_site_id_and_parent_id) — به نام دامنه با شناسه کاربر، شناسه سایت و شناسه والد می‌رسد.
- [wu_get_domain_name_by_group_id_and_site_id_and_parent_id](./Actions/wu_get_domain_name_by_group_id_and_site_id_and_parent_id) — به نام دامنه با شناسه گروه، شناسه سایت و شناسه والد می‌رسد.
- [wu_get_domain_name_by_alias_and_site_id_and_parent_id](./Actions/wu_get_domain_name_by_alias_and_site_id_and_parent_id) — به نام دامنه با نام مستعار، شناسه سایت و شناسه والد می‌رسد.
- [wu_get_domain_name_by_custom_field_and_site_id_and_parent_id](./Actions/wu_get_domain_name_by_custom_field_and_site_id_and_parent_id) — به نام دامنه با فیلد سفارشی، شناسه سایت و شناسه والد می‌رسد.
- [wu_get_domain_name_by_meta_key_and_site_id_and_parent_id](./Actions/wu_get_domain_name_by_meta_key_and_site_id_and_parent_id) — به نام دامنه با کلید متادیتا، شناسه سایت و شناسه والد می‌رسد.
- [wu_get_domain_name_by_meta_value_and_site_id_and_parent_id](./Actions/wu_get_domain_name_by_meta_value_and_site_id_and_parent_id) — به نام دامنه با مقدار متادیتا، شناسه سایت و شناسه والد می‌رسد.
- [wu_get_domain_name_by_user_id_and_site_id_and_group_id_and_parent_id](./Actions/wu_get_domain_name_by_user_id_and_site_id_and_group_id_and_parent_id) — به نام دامنه با شناسه کاربر، شناسه سایت، شناسه گروه، شناسه والد می‌رسد.
- [wu_get_domain_name_by_user_id_and_site_id_and_group_id_and_alias](./Actions/wu_get_domain_name_by_user_id_and_site_id_and_group_id_and_alias) — به نام دامنه با شناسه کاربر، شناسه سایت، شناسه گروه و نام مستعار می‌رسد.
- [wu_get_domain_name_by_user_id_and_site_id_and_custom_field_and_parent_id](./Actions/wu_get_domain_name_by_user_id_and_site_id_and_custom_field_and_parent_id) — به نام دامنه با شناسه کاربر، شناسه سایت، فیلد سفارشی و شناسه والد می‌رسد.
- [wu_get_domain_name_by_user_id_and_site_id_and_meta_key_and_parent_id](./Actions/wu_get_domain_name_by_user_id_and_site_id_and_meta_key_and_parent_id) — به نام دامنه با شناسه کاربر، شناسه سایت، کلید متادیتا و شناسه والد می‌رسد.
- [wu_get_domain_name_by_user_id_and_site_id_and_meta_value_and_parent_id](./Actions/wu_get_domain_name_by_user_id_and_site_id_and_meta_value_and_parent_id) — به نام دامنه با شناسه کاربر، شناسه سایت، مقدار متادیتا و شناسه والد می‌رسد.
- [wu_get_domain_name_by_group_id_and_site_id_and_custom_field_and_parent_id](./Actions/wu_get_domain_name_by_group_id_and_site_id_and_custom_field_and_parent_id) — به نام دامنه با شناسه گروه، شناسه سایت، فیلد سفارشی و شناسه والد می‌رسد.
- [wu_get_domain_name_by_group_id_and_site_id_and_meta_key_and_parent_id](./Actions/wu_get_domain_name_by_group_id_and_site_id_and_meta_key_and_parent_id) — به نام دامنه با شناسه گروه، شناسه سایت، کلید متادیتا و شناسه والد می‌رسد.
- [wu_get_domain_name_by_group_id_and_site_id_and_meta_value_and_parent_id](./Actions/wu_get_domain_name_by_group_id_and_site_id_and_meta_value_and_parent_id) — به نام دامنه با شناسه گروه، شناسه سایت، مقدار متادیتا و شناسه والد می‌رسد.
- [wu_get_domain_name_by_user_id_and_site_id_and_group_id_and_alias_and_parent_id](./Actions/wu_get_domain_name_by_user_id_and_site_id_and_group_id_and_alias_and_parent_id) — به نام دامنه با شناسه کاربر، شناسه سایت، شناسه گروه، نام مستعار، شناسه والد می‌رسد.
- [wu_get_domain_name_by_user_id_and_site_id_and_custom_field_and_parent_id_and_alias](./Actions/wu_get_domain_name_by_user_id_and_site_id_and_custom_field_and_parent_id_and_alias) — به نام دامنه با شناسه کاربر، شناسه سایت، فیلد سفارشی، شناسه والد و نام مستعار می‌رسد.
- [wu_get_domain_name_by_user_id_and_site_id_and_meta_key_and_parent_id_and_alias](./Actions/wu_get_domain_name_by_user_id_and_site_id_and_meta_key_and_parent_id_and_alias) — به نام دامنه با شناسه کاربر، شناسه سایت، کلید متادیتا، شناسه والد و نام مستعار می‌رسد.
- [wu_get_domain_name_by_group_id_and_site_id_and_custom_field_and_parent_id_and_alias](./Actions/wu_get_domain_name_by_group_id_and_site_id_and_custom_field_and_parent_id_and_alias) — به نام دامنه با شناسه گروه، شناسه سایت، فیلد سفارشی، شناسه والد و نام مستعار می‌رسد.
- [wu_get_domain_name_by_group_id_and_site_id_and_meta_key_and_parent_id_and_alias](./Actions/wu_get_domain_name_by_group_id_and_site_id_and_meta_key_and_parent_id_and_alias) — به نام دامنه با شناسه گروه، شناسه سایت، کلید متادیتا، شناسه والد و نام مستعار می‌رسد.
- [wu_get_domain_name_by_user_id_and_site_id_and_meta_value_and_parent_id_and_alias](./Actions/wu_get_domain_name_by_user_id_and_site_id_and_meta_value_and_parent_id_and_alias) — به نام دامنه با شناسه کاربر، شناسه سایت، مقدار متادیتا، شناسه والد و نام مستعار می‌رسد.
- [wu_get_domain_name_by_group_id_and_site_id_and_meta_value_and_parent_id_and_alias](./Actions/wu_get_domain_name_by_group_id_and_site_id_and_meta_value_and_parent_id_and_alias) — به نام دامنه با شناسه گروه، شناسه سایت، مقدار متادیتا، شناسه والد و نام مستعار می‌رسد.

(Note: The provided list of functions seems to be related to retrieving domain names based on various criteria, which is a specialized function set, likely for a WordPress/CMS environment.)
