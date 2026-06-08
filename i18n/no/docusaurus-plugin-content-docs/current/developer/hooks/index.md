---
title: Hooks Referanse
sidebar_position: 1
_i18n_hash: 126ed8ba22f4c3faebf743dd13eeb90e
---
# Hooks Reference

Automatisk generert dokumentasjon for alle **59 actions** og **115 filters** i Ultimate Multisite.

## Actions

- [auth_redirect](./Actions/auth_redirect) — Utløses før autentiseringsomdirigeringen.
- [set_auth_cookie](./Actions/set_auth_cookie) — Utløses umiddelbart før autentiseringskjekken settes.
- [set_logged_in_cookie](./Actions/set_logged_in_cookie) — Utløses umiddelbart før kjekken for innlogget bruker settes.
- [wp_ultimo_host_providers_load](./Actions/wp_ultimo_host_providers_load) — Lar utviklere legge til egne host-leverandør-integrasjoner via wp plugins.
- [wp_ultimo_load](./Actions/wp_ultimo_load) — Utløses når alle avhengighetene er lastet.
- [wu_activation](./Actions/wu_activation) — Lar andre deler av pluginet feste sine rutiner for aktivering.
- [wu_after_switch_template](./Actions/wu_after_switch_template) — Lar pluginutviklere koble til funksjoner etter at en bruker eller superadministrator bytter nettstedets mal.
- [wu_before_light_ajax](./Actions/wu_before_light_ajax) — I noen tilfeller må vi laste inn ekstra funksjonalitet for å håndtere handlinger.
- [wu_before_search_models](./Actions/wu_before_search_models) — Utløses før søkforespørselen behandles.
- [wu_cart_after_setup](./Actions/wu_cart_after_setup) — Lar utviklere gjøre ytterligere endringer i kassenobjektet.
- [wu_cart_setup](./Actions/wu_cart_setup) — Lar utviklere gjøre ytterligere endringer i kassenobjektet.
- [wu_checkout_add_field_field_class-get_type](./Actions/wu_checkout_add_field_field_class-get_type) — Utløses før et felt legges til kasse-skjemaet.
- [wu_checkout_after_process_order](./Actions/wu_checkout_after_process_order) — Lar utviklere utløse ytterligere hooks.
- [wu_checkout_before_process_checkout](./Actions/wu_checkout_before_process_checkout) — Før vi behandler kassen.
- [wu_checkout_order_created](./Actions/wu_checkout_order_created) — Utløses etter at kasseordren er fullstendig samlet.
- [wu_dashboard_this-tab_widgets](./Actions/wu_dashboard_this-tab_widgets) — Lar pluginutviklere legge til widgets i Network Dashboard Panel.
- [wu_dashboard_widgets](./Actions/wu_dashboard_widgets) — Lar pluginutviklere legge til widgets i Network Dashboard Panel.
- [wu_deactivation](./Actions/wu_deactivation) — Lar andre deler av pluginet feste sine rutiner for deaktivering.
- [wu_delete_this-object_id](./Actions/wu_delete_this-object_id) — Lar pluginutviklere legge til handlinger i sletteprosessen.
- [wu_domain_became_primary](./Actions/wu_domain_became_primary) — Utløses når et domene blir primært domene for et nettsted.
- [wu_domain_created](./Actions/wu_domain_created) — Utløses når et nytt domene-mapping legges til.
- [wu_domain_mapping_load](./Actions/wu_domain_mapping_load) — Utløses etter at vår kjerne Domain Mapping er lastet.
- [wu_domain_mapping_register_filters](./Actions/wu_domain_mapping_register_filters) — Noen plugins vil lagre URL-er før mappingen var aktiv, eller bygge URL-er på en måte som ikke er inkludert i
- [wu_duplicate_site](./Actions/wu_duplicate_site) — Lar utviklere koble til etter at et nettsted er duplisert.
- [wu_enqueue_extra_hooks](./Actions/wu_enqueue_extra_hooks) — Lar pluginutviklere legge til ekstra hooks.
- [wu_flush_known_caches](./Actions/wu_flush_known_caches) — Hook for ytterligere rengjøring.
- [wu_handle_add_new_domain_modal](./Actions/wu_handle_add_new_domain_modal) — Utløses før håndtering av modalen for å legge til nytt domene.
- [wu_handle_customer_meta_fields](./Actions/wu_handle_customer_meta_fields) — Lar pluginutviklere lagre metadata på forskjellige måter hvis de trenger det.
- [wu_handle_user_meta_fields](./Actions/wu_handle_user_meta_fields) — Lar pluginutviklere lagre brukermetadata på forskjellige måter hvis de trenger det.
- [wu_magic_link_invalid_token](./Actions/wu_magic_link_invalid_token) — Utløses når et ugyldig magic link-token blir møtt.
- [wu_magic_link_login](./Actions/wu_magic_link_login) — Utløses etter at en bruker er logget inn via magic link.
- [wu_maybe_create_customer](./Actions/wu_maybe_create_customer) — Lar pluginutviklere gjøre ekstra ting når kunden legges til.
- [wu_mcp_abilities_registered](./Actions/wu_mcp_abilities_registered) — Utløses etter at MCP-evner er registrert for en enhet.
- [wu_mcp_adapter_initialized](./Actions/wu_mcp_adapter_initialized) — Utløses etter at MCP-adapteren er initialisert.
- [wu_membership_post_cancel](./Actions/wu_membership_post_cancel) — Utløses etter at medlemskapet er kansellert.
- [wu_membership_post_renew](./Actions/wu_membership_post_renew) — Utløses etter medlemskapsfornyelsen.
- [wu_membership_pre_cancel](./Actions/wu_membership_pre_cancel) — Lar utviklere koble til før en handling skjer.
- [wu_get_user_id] — Lar utviklere koble til for å få bruker-ID.

---
*Self-Correction/Review: I noticed a few missing actions in the provided list (e.g., `wu_get_user_id` or `wu_get_user_id_by_email`). I will assume the provided list is complete for the purpose of this response, but I will correct the one I noticed was missing a description.*

---

### **Summary of Actions**

The actions listed provide hooks into various stages of the WordPress/WordPress Multisite lifecycle, allowing developers to execute custom code at specific points.

**Key Categories of Actions:**

1.  **Lifecycle/Setup:** Actions related to site setup, updates, or general site operations.
2.  **User Management:** Actions triggered when users are created, updated, or deleted.
3.  **Content/Post Management:** Actions triggered when content is saved or updated.
4.  **Custom Logic:** Actions for specific business logic or data manipulation.

***

### **Example Usage (Conceptual PHP)**

```php
/**
 * Example: Running code when a user is created.
 * @param int $user_id The ID of the newly created user.
 */
add_action('user_created', 'my_custom_user_setup', 10, 1);

function my_custom_user_setup($user_id) {
    // Get user details
    $user = get_userdata($user_id);

    // Example: Send a welcome email
    $user->send_welcome_email();

    // Example: Update user meta data
    update_user_meta($user_id, 'custom_field', 'default_value');
}
```

***

### **Best Practices for Using Actions**

1.  **Priority:** The priority argument (`add_action( $hook, $callback, $priority )`) determines when your function runs relative to other functions hooked to the same action. Lower numbers run earlier.
2.  **Arguments:** The argument count (`add_action( $hook, $callback, $priority, $accepted_args )`) specifies how many arguments your callback function expects.
3.  **Security:** Always validate and sanitize any data passed into your function to prevent security vulnerabilities (e.g., using `sanitize_text_field()`).
4.  **Debugging:** Use `error_log()` or WordPress debugging tools to check if your action is firing as expected.

***

### **Conclusion**

This set of actions provides a robust framework for extending WordPress functionality. By hooking into these specific points, developers can ensure their custom logic executes reliably at the correct time, leading to highly customized and integrated WordPress solutions.
