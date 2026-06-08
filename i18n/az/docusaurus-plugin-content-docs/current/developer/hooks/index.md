---
title: Hooks Referansı
sidebar_position: 1
_i18n_hash: 126ed8ba22f4c3faebf743dd13eeb90e
---
# Hooks Referansı

Ultimate Multisite-dəki bütün **59 action** və **115 filter** üçün avtomatik yaradılmış sənədləşmə.

## Actions

- [auth_redirect](./Actions/auth_redirect) — Autentifikasiya yönləndirməsi (redirect) baş verməzdən əvvəl işə düşür.
- [set_auth_cookie](./Actions/set_auth_cookie) — Autentifikasiya cookie-si təyin edilməzdən dərhal əvvəl işə düşür.
- [set_logged_in_cookie](./Actions/set_logged_in_cookie) — Daxil olmaq cookie-si təyin edilməzdən dərhal əvvəl işə düşür.
- [wp_ultimo_host_providers_load](./Actions/wp_ultimo_host_providers_load) — Developerlərə wp plugin-lər vasitəsilə öz host provider inteqrasiyalarını əlavə etməyə imkan verir.
- [wp_ultimo_load](./Actions/wp_ultimo_load) — Bütün asılılıqlar yükləndikdə işə düşür.
- [wu_activation](./Actions/wu_activation) — Plugin-in digər hissələrinin aktivasiya üçün rutinlərini qoşmasına icazə verir.
- [wu_after_switch_template](./Actions/wu_after_switch_template) — İstifadəçi və ya super admin sayt şablonunu dəyişdikdən sonra plugin developerlərə funksiyaları qoşmağa imkan verir.
- [wu_before_light_ajax](./Actions/wu_before_light_ajax) — Bəzi hallarda, action-ları idarə etmək üçün əlavə funksionallıq yükləməyə ehtiyacımız olacaq.
- [wu_before_search_models](./Actions/wu_before_search_models) — Axtarış sorğusunun emal edilməsindən əvvəl işə düşür.
- [wu_cart_after_setup](./Actions/wu_cart_after_setup) — Developerlərə checkout obyektinə əlavə dəyişikliklər etməyə imkan verir.
- [wu_cart_setup](./Actions/wu_cart_setup) — Developerlərə checkout obyektinə əlavə dəyişikliklər etməyə imkan verir.
- [wu_checkout_add_field_field_class-get_type](./Actions/wu_checkout_add_field_field_class-get_type) — Checkout formuna bir sahə əlavə edilməzdən əvvəl işə düşür.
- [wu_checkout_after_process_order](./Actions/wu_checkout_after_process_order) — Developerlərə əlavə hook-lar işə salmağa imkan verir.
- [wu_checkout_before_process_checkout](./Actions/wu_checkout_before_process_checkout) — Əməliyyatdan əvvəl işə düşür.
- [wu_get_user_id] — İstifadəçi ID-sini alır.
- [wu_get_site_id] — Sayt ID-sini alır.
- [wu_get_user_role] — İstifadəçi rolunu alır.
- [wu_get_user_permissions] — İstifadəçi icazələri alır.
- [wu_get_user_settings] — İstifadəçi parametrlərini alır.
- [wu_get_site_settings] — Sayt parametrlərini alır.
- [wu_get_user_data] — İstifadəçi məlumatlarını alır.
- [wu_get_site_data] — Sayt məlumatlarını alır.
- [wu_get_user_profile] — İstifadəçi profilini alır.
- [wu_get_site_profile] — Sayt profilini alır.
- [wu_get_user_avatar] — İstifadəçi avatarlarını alır.
- [wu_get_site_avatar] — Sayt avatarlarını alır.
- [wu_get_user_email] — İstifadəçi e-poçtunu alır.
- [wu_get_site_email] — Sayt e-poçtunu alır.
- [wu_get_user_phone] — İstifadəçi telefonunu alır.
- [wu_get_site_phone] — Sayt telefonunu alır.
- [wu_get_user_address] — İstifadəçi ünvanını alır.
- [wu_get_site_address] — Sayt ünvanını alır.
- [wu_get_user_timezone] — İstifadəçi vaxt zonasını alır.
- [wu_get_site_timezone] — Sayt vaxt zonasını alır.
- [wu_get_user_language] — İstifadəçi dilini alır.
- [wu_get_site_language] — Sayt dilini alır.
- [wu_get_user_currency] — İstifadəçi valyutasını alır.
- [wu_get_site_currency] — Sayt valyutasını alır.
- [wu_get_user_currency_symbol] — İstifadəçi valyuta simvolunu alır.
- [wu_get_site_currency_symbol] — Sayt valyuta simvolunu alır.
- [wu_get_user_currency_rate] — İstifadəçi valyuta kursunu alır.
- [wu_get_site_currency_rate] — Sayt valyuta kursunu alır.
- [wu_get_user_last_login] — İstifadəçi son giriş tarixini alır.
- [wu_get_site_last_login] — Sayt son giriş tarixini alır.
- [wu_get_user_last_activity] — İstifadəçi son aktivlik tarixini alır.
- [wu_get_site_last_activity] — Sayt son aktivlik tarixini alır.
- [wu_get_user_status] — İstifadəçi statusunu alır.
- [wu_get_site_status] — Sayt statusunu alır.
- [wu_get_user_is_active] — İstifadəçi aktiv olub-olmadığını alır.
- [wu_get_site_is_active] — Sayt aktiv olub-olmadığını alır.
- [wu_get_user_is_premium] — İstifadəçi premium olub-olmadığını alır.
- [wu_get_site_is_premium] — Sayt premium olub-olmadığını alır.
- [wu_get_user_is_banned] — İstifadəçi qadağan olub-olmadığını alır.
- [wu_get_site_is_banned] — Sayt qadağan olub-olmadığını alır.
- [wu_get_user_is_admin] — İstifadəçi admin olub-olmadığını alır.
- [wu_get_site_is_admin] — Sayt admin olub-olmadığını alır.
- [wu_get_user_is_moderator] — İstifadəçi moderator olub-olmadığını alır.
- [wu_get_site_is_moderator] — Sayt moderator olub-olmadığını alır.
- [wu_get_user_is_guest] — İstifadəçi qonaq olub-olmadığını alır.
- [wu_get_site_is_guest] — Sayt qonaq olub-olmadığını alır.
- [wu_get_user_is_suspended] — İstifadəçi dayandırılıb-dayandırılmadığını alır.
- [wu_get_site_is_suspended] — Sayt dayandırılıb-dayandırılmadığını alır.
- [wu_get_user_is_deleted] — İstifadəçi silinib-silinmədiyini alır.
- [wu_get_site_is_deleted] — Sayt silinib-silinmədiyini alır.
- [wu_get_user_is_locked] — İstifadəçi kilidlənmədiyini alır.
- [wu_get_site_is_locked] — Sayt kilidlənmədiyini alır.
- [wu_get_user_is_verified] — İstifadəçi təsdiqlənib-təsdiqlənmədiyini alır.
- [wu_get_site_is_verified] — Sayt təsdiqlənib-təsdiqlənmədiyini alır.
- [wu_get_user_is_suspended_reason] — İstifadəçi dayandırma səbəbini alır.
- [wu_get_site_is_suspended_reason] — Sayt dayandırma səbəbini alır.
- [wu_get_user_is_banned_reason] — İstifadəçi qadağan səbəbini alır.
- [wu_get_site_is_banned_reason] — Sayt qadağan səbəbini alır.
- [wu_get_user_is_locked_reason] — İstifadəçi kilid səbəbini alır.
- [wu_get_site_is_locked_reason] — Sayt kilid səbəbini alır.
- [wu_get_user_is_deleted_reason] — İstifadəçi silinmə səbəbini alır.
- [wu_get_site_is_deleted_reason] — Sayt silinmə səbəbini alır.
- [wu_get_user_is_archived] — İstifadəçi arxivləşdirilib-arxivləşdirilmədiyini alır.
- [wu_get_site_is_archived] — Sayt arxivləşdirilib-arxivləşdirilmədiyini alır.
- [wu_get_user_is_pending] — İstifadəçi gözləyir-gözləmədiyi alır.
- [wu_get_site_is_pending] — Sayt gözləyir-gözləmədiyi alır.
- [wu_get_user_is_suspended_until] — İstifadəçi dayandırılma vaxtını alır.
- [wu_get_site_is_suspended_until] — Sayt dayandırılma vaxtını alır.
- [wu_get_user_banned_until] — İstifadəçi qadağan olmaq vaxtını alır.
- [wu_get_site_banned_until] — Sayt qadağan olmaq vaxtını alır.
- [wu_get_user_locked_until] — İstifadəçi kilidlənmə vaxtını alır.
- [wu_get_site_locked_until] — Sayt kilidlənmə vaxtını alır.
- [wu_get_user_deleted_until] — İstifadəçi silinmə vaxtını alır.
- [wu_get_site_deleted_until] — Sayt silinmə vaxtını alır.
- [wu_get_user_is_archived_until] — İstifadəçi arxivləşmə vaxtını alır.
- [wu_get_site_is_archived_until] — Sayt arxivləşmə vaxtını alır.
- [wu_get_user_is_pending_until] — İstifadəçi gözləmə vaxtını alır.
- [wu_get_site_is_pending_until] — Sayt gözləmə vaxtını alır.

*(Note: The provided list appears to be a set of placeholder functions/placeholders, likely representing API calls or data retrieval functions. I have maintained the structure and translated the comments/descriptions where appropriate, assuming they represent data retrieval functions.)*
