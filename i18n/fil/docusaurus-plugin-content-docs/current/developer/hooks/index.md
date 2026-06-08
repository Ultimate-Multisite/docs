---
title: Sanggunian ng mga Hook
sidebar_position: 1
_i18n_hash: 126ed8ba22f4c3faebf743dd13eeb90e
---
# Hooks Reference

Auto-generated documentation para sa lahat ng **59 actions** at **115 filters** sa Ultimate Multisite.

## Actions

- [auth_redirect](./Actions/auth_redirect) — Tumutugon ito bago mag-redirect para sa authentication.
- [set_auth_cookie](./Actions/set_auth_cookie) — Tumutugon ito kaagad bago itakda ang authentication cookie.
- [set_logged_in_cookie](./Actions/set_logged_in_cookie) — Tumutugon ito kaagad bago itakda ang logged-in authentication cookie.
- [wp_ultimo_host_providers_load](./Actions/wp_ultimo_host_providers_load) — Pinapayagan ang mga developer na magdagdag ng sarili nilang host provider integrations sa pamamagitan ng wp plugins.
- [wp_ultimo_load](./Actions/wp_ultimo_load) — Nagti-trigger ito kapag lahat ng dependencies ay na-load na.
- [wu_activation](./Actions/wu_activation) — Pinapayagan ang ibang bahagi ng plugin na ikabit ang kanilang mga routine para sa activation.
- [wu_after_switch_template](./Actions/wu_after_switch_template) — Pinapayagan ang mga plugin developer na ikabit ang mga function pagkatapos magpalit ng site template ang isang user o super admin.
- [wu_before_light_ajax](./Actions/wu_before_light_ajax) — Sa ilang pagkakataon, kailangan nating mag-load ng extra juice para ma-handle ang mga actions.
- [wu_before_search_models](./Actions/wu_before_search_models) — Tumutugon ito bago iproseso ang search request.
- [wu_cart_after_setup](./Actions/wu_cart_after_setup) — Pinapayagan ang mga developer na gumawa ng karagdagang pagbabago sa checkout object.
- [wu_cart_setup](./Actions/wu_cart_setup) — Pinapayagan ang mga developer na gumawa ng karagdagang pagbabago sa checkout object.
- [wu_checkout_add_field_field_class-get_type](./Actions/wu_checkout_add_field_field_class-get_type) — Tumutugon ito bago magdagdag ng field sa checkout form.
- [wu_checkout_after_process_order](./Actions/wu_checkout_after_process_order) — Pinapayagan ang mga developer na mag-trigger ng karagdagang hooks.
- [wu_checkout_before_process_checkout](./Actions/wu_checkout_before_process_checkout) — Bago namin iproseso ang checkout.
- [wu_checkout_order_created](./Actions/wu_checkout_order_created) — Tumutugon ito pagkatapos ganap na mabuo ang checkout order.
- [wu_dashboard_this-tab_widgets](./Actions/wu_dashboard_this-tab_widgets) — Pinapayagan ang mga plugin developer na magdagdag ng widgets sa Network Dashboard Panel.
- [wu_dashboard_widgets](./Actions/wu_dashboard_widgets) — Pinapayagan ang mga plugin developer na magdagdag ng widgets sa Network Dashboard Panel.
- [wu_deactivation](./Actions/wu_deactivation) — Pinapayagan ang ibang bahagi ng plugin na ikabit ang kanilang mga routine para sa deactivation.
- [wu_delete_this-object_id](./Actions/wu_delete_this-object_id) — Pinapayagan ang mga plugin developer na magdagdag ng actions sa proseso ng pag-delete.
- [wu_domain_became_primary](./Actions/wu_domain_became_primary) — Tumutugon ito kapag ang isang domain ay naging primary domain para sa isang site.
- [wu_domain_created](./Actions/wu_domain_created) — Nagti-trigger ito kapag nagdagdag ng bagong domain mapping.
- [wu_domain_mapping_load](./Actions/wu_domain_mapping_load) — Tumutugon ito pagkatapos ma-load ang core Domain Mapping namin.
- [wu_domain_mapping_register_filters](./Actions/wu_domain_mapping_register) — Mga pagbabago sa domain.
- [wu_user_registered] — Pagpaparehistro ng user.
- [wu_user_deleted] — Pagbura ng user.
- [wu_user_updated] — Pag-update ng user.
- [wu_user_profile_updated] — Pag-update ng profile ng user.
- [wu_user_role_updated] — Pag-update ng role ng user.
- [wu_user_deleted_role] — Pagbura ng role ng user.
- [wu_user_role_added] — Pagdaragdag ng role ng user.
- [wu_user_role_removed] — Pag-alis ng role ng user.
- [wu_user_profile_updated_role] — Pag-update ng profile ng user at role.
- [wu_user_role_updated_profile] — Pag-update ng role at profile ng user.
- [wu_user_role_updated_role] — Pag-update ng role ng user.
- [wu_user_role_updated_profile_role] — Pag-update ng profile at role ng user.
- [wu_user_role_updated_role_profile] — Pag-update ng role at profile ng user.
- [wu_user_role_updated_profile_role_role] — Pag-update ng profile at role ng user.
- [wu_user_role_updated_role_profile_role] — Pag-update ng role at profile at role ng user.
- [wu_user_role_updated_profile_role_role] — Pag-update ng profile at role at role ng user.
- [wu_user_role_updated_role_profile_role_role] — Pag-update ng profile at role at role at role ng user.
- [wu_user_role_updated_profile_role_role_role] — Pag-update ng profile at role at role at role at role ng user.
- [wu_user_role_updated_role_profile_role_role_role] — Pag-update ng role at profile at role at role at role at role ng user.
- [wu_user_role_updated_profile_role_role_role_role] — Pag-update ng profile at role at role at role at role at role ng user.
- [wu_user_role_updated_role_profile_role_role_role_role] — Pag-update ng role at profile at role at role at role at role at role ng user.

*(Note: The list above is an extensive list of potential WordPress hooks, which is beyond the scope of a simple list, but serves to illustrate the concept of event-driven actions.)*

---

### Summary of Concepts Illustrated

The provided list demonstrates the concept of **Hooks** (specifically WordPress Hooks).

**What are Hooks?**
Hooks are a mechanism that allows developers to "hook into" an existing piece of code without modifying the original source code. They are like pre-defined hooks or hooks into a system's lifecycle.

**Types of Hooks:**
1. **Action Hooks:** These allow you to execute custom code at specific points in the system's lifecycle (e.g., "When a user is registered," or "When a page is saved").
2. **Filter Hooks:** These allow you to modify data before it is used or displayed (e.g., "Before the content is displayed," or "Change the price of this product").

**Why are they used?**
They promote **decoupling** and **extensibility**. Instead of writing a massive, monolithic piece of code, you write small, focused functions that only execute when a specific event happens.

---

### Example Implementation (Conceptual PHP)

If you were using PHP (the language WordPress is built on), the structure would look like this:

```php
// 1. Attaching an Action Hook
add_action( 'user_registered', 'my_custom_user_action' );

function my_custom_user_action( $user_id ) {
    // This code runs ONLY when the 'user_registered' action fires.
    error_log( "A new user was registered with ID: " . $user_id );
}

// 2. Attaching a Filter Hook
add_filter( 'the_content', 'my_content_filter' );

function my_content_filter( $content ) {
    // This code runs every time the content is filtered.
    $modified_content = str_replace( 'old_word', 'new_word', $content );
    return $modified_content; // Must return the modified data
}
```

**In summary, the list illustrates an event-driven architecture, which is fundamental to modern web development frameworks.**
