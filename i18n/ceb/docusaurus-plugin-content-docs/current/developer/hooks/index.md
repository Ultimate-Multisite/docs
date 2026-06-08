---
title: Mga Referensya sa Hooks
sidebar_position: 1
_i18n_hash: 126ed8ba22f4c3faebf743dd13eeb90e
---
# Mga Reference sa Hooks

Automated nga dokumentasyon para sa tanang **59 ka aksyon (actions)** ug **115 ka filter** sa Ultimate Multisite.

## Aksyon (Actions)

- [auth_redirect](./Actions/auth_redirect) — Nagawas kini sa pag-redirect para sa authentication.
- [set_auth_cookie](./Actions/set_auth_cookie) — Nagawas dayon pa sa pag-set sa authentication cookie.
- [set_logged_in_cookie](./Actions/set_logged_in_cookie) — Nagawas dayon pa sa pag-set sa logged-in authentication cookie.
- [wp_ultimo_host_providers_load](./Actions/wp_ultimo_host_providers_load) — Nagtugot kini sa mga developer nga magdugang og ilang kaugalingong host provider integrations pinaagi sa mga wp plugin.
- [wp_ultimo_load](./Actions/wp_ultimo_load) — Mos-trigger kini kung ang tanang dependencies na nag-load na.
- [wu_activation](./Actions/wu_activation) — Tugotan niini nga ang ubang bahin sa plugin magdugang og ilang mga routine para sa activation.
- [wu_after_switch_template](./Actions/wu_after_switch_template) — Nagtugot kini sa mga developer sa pag-hook og functions human nga nag-switch ang user o super admin sa site template.
- [wu_before_light_ajax](./Actions/wu_before_light_ajax) — Sa pipila ka mga kaso, kinahanglan nato mag-load og dugang gahum para mahatagan kini og trabaho.
- [wu_before_search_models](./Actions/wu_before_search_models) — Nagawas kini sa dili pa ang pagproseso sa search request.
- [wu_cart_after_setup](./Actions/wu_cart_after_setup) — Tugotan niini nga ang mga developer maghimo og dugang kausaban sa checkout object.
- [wu_cart_setup](./Actions/wu_cart_setup) — Tugotan niini nga ang mga developer maghimo og dugang kausaban sa checkout object.
- [wu_checkout_add_field_field_class-get_type](./Actions/wu_checkout_add_field_field_class-get_type) — Nagawas kini sa dili pa ang usa ka field maapil sa checkout form.

- [wu_checkout_after_process_order](./Actions/wu_checkout_after_process_order) — Tugot ang mga developer nga mag-trigger og dugang hooks.
- [wu_checkout_before_process_checkout](./Actions/wu_checkout_before_process_checkout) — Sa dili pa nato proseso ang checkout.
- [wu_checkout_order_created](./Actions/wu_checkout_order_created) — Nag-trigger pagkahuman nga hingpit na ma-assemble ang order sa checkout.
- [wu_dashboard_this-tab_widgets](./Actions/wu_dashboard_this-tab_widgets) — Tugot sa mga plugin developer nga magdugang og widgets sa Network Dashboard Panel.
- [wu_dashboard_widgets](./Actions/wu_dashboard_widgets) — Tugot sa mga plugin developer nga magdugang og widgets sa Network Dashboard Panel.
- [wu_deactivation](./Actions/wu_deactivation) — Tugoti ang ubang bahin sa plugin nga magbutang sa ilang routines para sa deactivation.
- [wu_delete_this-object_id](./Actions/wu_delete_this-object_id) — Tugot sa mga plugin developer nga magdugang og actions sa proseso sa pag-delete.
- [wu_domain_became_primary](./Actions/wu_domain_became_primary) — Nag-trigger kung ang usa ka domain mahimong primary domain para sa usa ka site.
- [wu_domain_created](./Actions/wu_domain_created) — Nag-trigger kung adunay bag-ong domain mapping nga gi-add.
- [wu_domain_mapping_load](./Actions/wu_domain_mapping_load) — Nag-trigger human ma-load ang among core Domain Mapping.
- [wu_domain_mapping_register_filters](./Actions/wu_domain_mapping_register_filters) — Ang pipila ka plugins magsave og URL sa dili pa aktibo ang mapping o maghimo og URLs sa lain nga pamaagi nga wala giapil diri

- [wu_duplicate_site](./Actions/wu_duplicate_site) — Tugot ang mga developer nga mag-hook human sa pagduplika sa site.
- [wu_enqueue_extra_hooks](./Actions/wu_enqueue_extra_hooks) — Tugot sa mga plugin developer nga magdugang og dugang hooks.
- [wu_flush_known_caches](./Actions/wu_flush_known_caches) — Hook para sa dugang paglimpyo (cleaning).
- [wu_handle_add_new_domain_modal](./Actions/wu_handle_add_new_domain_modal) — Nag-trigger kini sa dili pa i-handle ang request sa modal nga magdugang og bag-ong domain.
- [wu_handle_customer_meta_fields](./Actions/wu_handle_customer_meta_fields) — Tugot sa mga plugin developer nga mag-save og meta data sa lain-laing pama kung kinahanglan nila.
- [wu_handle_user_meta_fields](./Actions/wu_handle_user_meta_fields) — Tugot sa mga plugin developer nga mag-save og user meta data sa lain-laing pama kung kinahanglan nila.
- [wu_magic_link_invalid_token](./Actions/wu_magic_link_invalid_token) — Nag-trigger kini kung adunay dili balido nga magic link token nga naatubang.
- [wu_magic_link_login](./Actions/wu_magic_link_login) — Nag-trigger human ang usa ka user ma-login pinaagi sa magic link.
- [wu_maybe_create_customer](./Actions/wu_maybe_create_customer) — Tugot sa mga plugin developer nga magbuhat og dugang butang kung ang customer gidugang.
- [wu_mcp_abilities_registered](./Actions/wu_mcp_abilities_registered) — Nag-trigger human pagparehistro sa MCP abilities para sa usa ka entity.
- [wu_mcp_adapter_initialized](./Actions/wu_mcp_adapter_initialized) — Nag-trigger human ang initialization sa MCP adapter.

- [wu_membership_post_cancel](./Actions/wu_membership_post_cancel) — Nag-trigger pagkahuman human membership ang membership.
- [wu_membership_post_renew](./Actions/wu_membership_post_renew) — Nag-trigger paghuman renewal sa membership.
- [wu_membership_pre_cancel](./Actions/wu_membership_pre_cancel) — Nag-trigger sa dili pa ma-cancel ang membership.
- [wu_membership_pre_renew](./Actions/wu_membership_pre_renew) — Nag-trigger sa dili pa ma-renew ang membership.
- [wu_model_post_save](./Actions/wu_model_post_save) — Nag-fire human usa pagkahuman nga object i-store sa database.
- [wu_page_added](./Actions/wu_page_added) — Nagtugot sa mga plugin developer nga magpadagan og dugang butang kung ang mga page gi-register.
- [wu_page_after_render](./Actions/wu_page_after_render) — Nagtugot sa mga plugin developer nga magdugang og dugang content human natapos nato ang pag-print sa page.
- [wu_page_before_render](./Actions/wu_page_before_render) — Nagtugot sa mga plugin developer nga magdugang og dugang content sa dili pa natapos nato ang pag-print sa page.
- [wu_page_load](./Actions/wu_page_load) — Nagtugot sa mga plugin developer nga magdugang og dugang hooks sa atong mga pages.
- [wu_page_this-id_after_render](./Actions/wu_page_this-id_after_render) — Nagtugot sa mga plugin developer nga magdugang og dugang content human natapos nato ang pag-print sa page.
- [wu_page_this-id_before_render](./Actions/wu_page_this-id_before_render) — Nagtugot sa mga plugin developer nga magdugang og dugang content sa dili pa natapos nato ang pag-print sa page.
- [wu_page_this-id_load](./Actions/wu_page_this-id_load) — Nagtugot sa mga plugin developer nga magdugang og dugang hooks sa atong mga pages.

- [wu_page_this-id_register_widgets](./Actions/wu_page_this-id_register_widgets) — Nagawas pagkahimtang human-readable (human-readable) sa mga widgets para niining page.
- [wu_register_capabilities](./Actions/wu_register_capabilities) — Nag-trigger aron tugotan ang mga addon nga magbutang og capability modules sa mga integrations.
- [wu_register_integrations](./Actions/wu_register_integrations) — Nag-trigger aron tugotan ang mga integrations nga magparehistro kanunay.
- [wu_register_rest_routes](./Actions/wu_register_rest_routes) — Tugotan ang pagparehistro og dugang routes.
- [wu_save_this-object_id](./Actions/wu_save_this-object_id) — Tugotan ang mga plugin developer nga magbutang og actions sa proseso sa pag-save.
- [wu_site_created](./Actions/wu_site_created) — Nag-trigger human ang usa ka site para unang gihimo.
- [wu_sso_loaded](./Actions/wu_sso_loaded) — Tugotan ang mga plugin developer nga magbutang og dugang hooks, kung kinahanglanon.
- [wu_template_previewer](./Actions/wu_template_previewer) — Nag-run kung sulod sa template previewer context.
- [wu_this-id_scripts](./Actions/wu_this-id_scripts) — Nag-trigger sa enqueue scripts hook.
- [wu_this-model_post_delete](./Actions/wu_this-model_post_delete) — Nag-trigger human ang usa ka object nga gitago sa database.
- [wu_this-model_post_save](./Actions/wu_this-model_post_save) — Nag-trigger human pag-save og usa ka object sa database.
- [wu_this-model_pre_delete](./Actions/wu_this-model_pre_delete) — Nag-trigger human sa dili pa ma-delete ang usa ka object nga gitago sa database.

- [wu_unlock_this-object_id](./Actions/wu_unlock_this-object_id) — Tugot ang mga developer sa plugin para magdugang og mga aksyon sa proseso sa pag-unlock.

## Mga Filter

- [auth_cookie_expiration](./Filters/auth_cookie_expiration) — Nag-filter sa tagitna kung unsa ang tagit nga panahon nga magexpire ang authentication cookie.
- [auth_redirect_scheme](./Filters/auth_redirect_scheme) — Nag-filter sa scheme sa redirect sa authentication.
- [get_blogs_of_user](./Filters/get_blogs_of_user) — Gi-replicate diri ang original WP Filter, para sa dugang kaalam.
- [get_site_url_for_previewer](./Filters/get_site_url_for_previewer) — Nagtugot sa mga plugin developer nga mag-filter sa URL nga gigamit sa previewer.
- [secure_auth_cookie](./Filters/secure_auth_cookie) — Nag-filter kung ang auth cookie ba kinahanglan ipadala lang pinaagi sa HTTPS.
- [secure_auth_redirect](./Filters/secure_auth_redirect) — Nag-filter kung gamiton ba ang secure authentication redirect.
- [secure_logged_in_cookie](./Filters/secure_logged_in_cookie) — Nag-filter kung ang logged in cookie ba kinahanglan ipadala lang pinaagi sa HTTPS.
- [send_auth_cookies](./Filters/send_auth_cookies) — Nagtugot nga mapugngan ang pagpadala sa auth cookies ngadto sa client.
- [wp_ultimo_redirect_url_after_signup](./Filters/wp_ultimo_redirect_url_after_signup) — Iset ang redirect URL human sa signup.
- [wp_ultimo_registration_steps](./Filters/wp_ultimo_registration_steps) — Dugangi og mga lakang pinaagi sa filters.
- [wp_ultimo_render_vars](./Filters/wp_ultimo_render_vars) — Nagtugot sa mga plugin developer nga magdugang og extra variable sa render context sa tibuok sistema.
- [wp_ultimo_skip_network_active_check](./Filters/wp_ultimo_skip_network_active_check) — Nagtugot sa mga developer nga i-short-circuit kining check.

- [wu_add_new_domain_modal_fields](./Filters/wu_add_new_domain_modal_fields) — Nag-filter sa mga fields para sa add new domain modal.
- [wu_add_product_setup_fee_line_item](./Filters/wu_add_product_setup_fee_line_item) — Tugot sa mga developer nga maghimo og mga kausaban sa setup fee line item.
- [wu_admin_notices](./Filters/wu_admin_notices) — Tugot sa mga developer nga mag-filter sa admin notices nga gipangita sa Ultimate Multisite.
- [wu_after_.this-slug._api_arguments](./Filters/wu_after_.this-slug._api_arguments) — Mag-filter human na kini giusab.
- [wu_allowed_line_item_types](./Filters/wu_allowed_line_item_types) — Karon, atong giatiman ang tanang mga tipo (types).
- [wu_apply_plan_limits](./Filters/wu_apply_plan_limits) — Tugot sa mga plugin developer nga mag-short-circuit sa mga limitasyon.
- [wu_apply_signup_fee](./Filters/wu_apply_signup_fee) — Mag-filter kung ang signup fee ba kinahanglan i-apply o dili.
- [wu_before_.this-slug._api_arguments](./Filters/wu_before_.this-slug._api_arguments) — Mag-filter sa orihinal nga api arguments.
- [wu_billing_address_fields](./Filters/wu_billing_address_fields) — Tugot sa mga plugin developer nga mag-filter sa billing address fields.
- [wu_bypass_checkout_form](./Filters/wu_bypass_checkout_form) — Tugot sa mga developer nga mag-bypass sa output ug magbutang og bag-o.
- [wu_bypass_unset_current_user](./Filters/wu_bypass_unset_current_user) — Tugot sa mga developer nga mag-bypass sa code nga wala nag-set og current user.
- [wu_cart_get_recurring_total](./Filters/wu_cart_get_recurring_total) — Mag-filter sa total sa "recurring amount".

- [wu_cart_get_subtotal](./Filters/wu_cart_get_subtotal) — I-filter ang total sa "initial amount".
- [wu_cart_get_total](./Filters/wu_cart_get_total) — I-filter pud ang total sa "initial amount".
- [wu_checkout_calculate_prorate_credits](./Filters/wu_checkout_calculate_prorate_credits) — Pahuwayan ang mga plugin developer nga mag-manipula sa credit value.
- [wu_checkout_field_templates](./Filters/wu_checkout_field_templates) — Ang atong APIs para magdugang og bag-ong field templates, hook kini diri.
- [wu_checkout_field_types](./Filters/wu_checkout_field_types) — Ang atong APIs para magdugang og bag-ong field types, hook kini diri.
- [wu_checkout_pages_error_messages](./Filters/wu_checkout_pages_error_messages) — I-filter ang mga error messages.
- [wu_checkout_step_validation_submittable_field_types](./Filters/wu_checkout_step_validation_submittable_field_types) — Tuguti ang mga developer nga mag-bypass sa check kung ang usa ka field kay auto-submittable.
- [wu_checkout_validation_aliases](./Filters/wu_checkout_validation_aliases) — Tuguti ang mga plugin developer nga magdugang og custom aliases sa form validator.
- [wu_checkout_validation_rules](./Filters/wu_checkout_validation_rules) — Tuguti ang mga plugin developer nga mag-filter sa validation rules.
- [wu_cli_params_to_remove](./Filters/wu_cli_params_to_remove) — I-unset ang dili gusto nga Params.
- [wu_contains_element](./Filters/wu_contains_element) — Tuguti ang mga developer nga magbag-o sa resulta sa initial search.

- [wu_core_installer_install_sunrise](./Filters/wu_core_installer_install_sunrise) — Tugot ang mga host provider nga mag-install sa constant sa lain pamaagi.
- [wu_country_get_administrative_division_name](./Filters/wu_country_get_administrative_division_name) — Nagbalik sa nindot nga ngalan sa mga sub-division sa administrasyon sa nasud.
- [wu_country_get_cities](./Filters/wu_country_get_cities) — Nagbalik sa listahan sa mga siyudad para sa usa ka estado sa usa ka nasud.
- [wu_country_get_states](./Filters/wu_country_get_states) — Nagbalik sa listahan sa mga estado para niining nasud.
- [wu_current_set_customer](./Filters/wu_current_set_customer) — Tugot sa mga developer nga usbon ang default behavior ug mag-set og lain nga current customer.
- [wu_current_set_membership](./Filters/wu_current_set_membership) — Tugot sa mga developer nga usbon ang default behavior ug mag-set og lain nga current membership.
- [wu_current_set_site](./Filters/wu_current_set_site) — Tugot sa mga developer nga usbon ang default behavior ug mag-set og lain nga current site.
- [wu_current_type_get_manage_url](./Filters/wu_current_type_get_manage_url) — Tugot sa mga developer nga usbon ang mga parameter sa manage site URL.
- [wu_documentation_get_link](./Filters/wu_documentation_get_link) — Tugot sa mga plugin developer nga magfilter sa mga link.
- [wu_domain_has_correct_dns](./Filters/wu_domain_has_correct_dns) — Tugot sa mga plugin developer nga magdugang og bag-ong mga check aron maghatag og resulta.

- [wu_element_block_types_to_check](./Filters/wu_element_block_types_to_check) — Basin kinahanglan nato dugang blocks sa umaabot.
- [wu_element_maybe_extract_arguments](./Filters/wu_element_maybe_extract_arguments) — Nagadugang og generic filter aron ang mga developer makapadugang (extend) ni parser para molihok sa dagkong builders o plugins.
- [wu_enforce_password_rules](./Filters/wu_enforce_password_rules) — Filter kung ipatuman ba ang dugang mga lagda sa password.
- [wu_generated_username_from_email](./Filters/wu_generated_username_from_email) — Filter sa username nga gi-generate gikan sa email.
- [wu_get_checkout_variables](./Filters/wu_get_checkout_variables) — Nagtugot sa mga plugin developer nga magfilter sa pre-sets sa checkout page.
- [wu_get_membership_allowed_forms](./Filters/wu_get_membership_allowed_forms) — Nagtugot sa mga developer nga magdugang og bag-ong form slugs aron malikayan kini nga pamaagi.
- [wu_get_migration_steps](./Filters/wu_get_migration_steps) — Nagtugot sa mga developer ug add-ons nga magdugang og bag-ong migration steps.
- [wu_get_network_public_ip](./Filters/wu_get_network_public_ip) — Makita ang dugang bahin ni filter diri, sa parehas nga method.
- [wu_get_post_types](./Filters/wu_get_post_types) — Nagtugot sa mga developer nga mopili kung unsang post types ang ipasundayag.
- [wu_get_pricing_table_lines_this-id](./Filters/wu_get_pricing_table_lines_this-id) — Magbalik og Lines, pwedeng i-filter.
- [wu_get_site_domain_and_path](./Filters/wu_get_site_domain_and_path) — Nagtugot sa mga developer nga magmanipula sa domain/path pairs.

- [wu_hosting_integration_wizard_sections](./Filters/wu_hosting_integration_wizard_sections) — Nag-filter sa mga seksyon sa wizard para sa pag-set up sa hosting integration.
- [wu_id_form_fields](./Filters/wu_id_form_fields) — Nag-filter sa mga field sa usa ka form. Ang form giila pinaagi sa ID sa filter name.
- [wu_independent_billing_cycle_product_types](./Filters/wu_independent_billing_cycle_product_types) — Mag-filter sa mga product type nga adunay independent billing cycle.
- [wu_is_api_enabled](./Filters/wu_is_api_enabled) — Tugotan ang mga plugin developer nga pugngan (force) ang usa ka gihatag nga estado para sa API.
- [wu_is_development_mode](./Filters/wu_is_development_mode) — Tugotan ang mga plugin developer nga magdugang og dugang testing alang sa development mode.
- [wu_is_mcp_enabled](./Filters/wu_is_mcp_enabled) — Tugotan ang mga plugin developer nga pugngan (force) ang usa ka gihatag nga estado para sa MCP adapter.
- [wu_light_ajax_allowed_hooks](./Filters/wu_light_ajax_allowed_hooks) — Tungod sa seguridad, limitado nato ang gidaghanon sa mga aksyon nga pwedeng i-hook in. Kini nga filter nagtugot sa mga developer nga mapalawom (expand).
- [wu_limits_is_post_above_limit](./Filters/wu_limits_is_post_above_limit) — Nag-check kung ang usa ka gihatag nga post type tugotan ba sa plan karon. Tugotan ang mga plugin developer nga mag-filter sa return value.
- [wu_magic_link_enforce_ip](./Filters/wu_magic_link_enforce_ip) — Mag-filter kung ipatuman (enforce) ang IP address verification.
- [wu_magic_link_enforce_user_agent](./Filters/wu_magic_link_enforce_user_agent) — Mag-filter kung ipatuman (enforce) ang user agent verification.

- [wu_magic_link_url](./Filters/wu_magic_link_url) — I-filter ang generated magic link URL.
- [wu_magic_links_enabled](./Filters/wu_magic_links_enabled) — Mag-filter kung ang mga magic links na enabled ba.
- [wu_make_primary_domain_redirect_url](./Filters/wu_make_primary_domain_redirect_url) — Nag-filter sa redirect URL humanon paggawas sa domain primary.
- [wu_maybe_redirect_to_admin_panel_exclusion_list](./Filters/wu_maybe_redirect_to_admin_panel_exclusion_list) — Paghimo og exclusion list sa mga parameters nga makapugong sa auto-redirect.
- [wu_mcp_include_ability](./Filters/wu_mcp_include_ability) — Mag-filter para override ang desisyon kung iisama ang MCP ability.
- [wu_membership_calculated_date_expiration](./Filters/wu_membership_calculated_date_expiration) — Mag-filter sa gi-calculate nga expiration date.
- [wu_membership_renewal_expiration_date](./Filters/wu_membership_renewal_expiration_date) — Mag-filter sa gi-calculate nga expiration date para ma-set human sa renewal.
- [wu_membership_update_forms](./Filters/wu_membership_update_forms) — Tugotan ang mga developer nga magdugang og bag-ong update form slugs.
- [wu_minimum_password_length](./Filters/wu_minimum_password_length) — Mag-filter sa minimum nga gitas-an sa password.
- [wu_minimum_password_strength](./Filters/wu_minimum_password_strength) — Mag-filter sa minimum nga strength sa password nga kinahanglan (zxcvbn score).
- [wu_page_get_title_links](./Filters/wu_page_get_title_links) — Tugotan ang mga plugin developer, ug amo, nga magdugang og action links sa among edit pages.

- [wu_password_require_lowercase](./Filters/wu_password_require_lowercase) — Magpili kung kinahanglan ba nga adunay lowercase letters sa mga password.
- [wu_password_require_number](./Filters/wu_password_require_number) — Magpili kung kinahanglan ba nga adunay numero sa mga password.
- [wu_password_require_special](./Filters/wu_password_require_special) — Magpili kung kinahanglan ba nga adunay special characters sa mga password.
- [wu_password_require_uppercase](./Filters/wu_password_require_uppercase) — Magpili kung kinahanglan ba nga adunay uppercase letters sa mga password.
- [wu_pending_payment_message](./Filters/wu_pending_payment_message) — Tugotan ang user nga usbon ang mensahe bahin sa pending payments.
- [wu_plan_product_types](./Filters/wu_plan_product_types) — Magpili kung unsang mga product types ang itraktar isip plans.
- [wu_post_count](./Filters/wu_post_count) — Tugotan ang mga plugin developer nga usbon ang kinatibuk-ang bilang sa post count.
- [wu_post_count_statuses](./Filters/wu_post_count_statuses) — Tugotan ang mga plugin developer nga usbon kung unsang status sa post ang i-count. Default, published ug private posts ang i-count.
- [wu_post_default_status](./Filters/wu_post_default_status) — Magfilter sa object data sa dili pa kini i-save sa database.
- [wu_pre_save_settings](./Filters/wu_pre_save_settings) — Tugotan ang mga developer nga magfilter sa settings sa dili pa ma-save pinaagi sa Ultimate Multisite.
- [wu_rest_create_item](./Filters/wu_rest_create_item) — Magfilter kung tugotan ba ang pagpadayon sa request o dili.

- [wu_rest_delete_item](./Filters/wu_rest_delete_item) — Nagunit kung gitugotan ba ang pagpadayon sa request o dili.
- [wu_rest_get_item](./Filters/wu_rest_get_item) — Nagfilter kung gitugotan ba ang pagpadayon sa request o dili.
- [wu_rest_get_items](./Filters/wu_rest_get_items) — Nagfilter kung gitugotan ba ang pagpadayon sa request o dili.
- [wu_rest_update_item](./Filters/wu_rest_update_item) — Nagfilter kung gitugotan ba ang pagpadayon sa request o dili.
- [wu_return_url](./Filters/wu_return_url) — Gitugotan niini nga usbon sa mga developer ang gateway return URL nga gigamit human sa checkout process.
- [wu_search_models_functions](./Filters/wu_search_models_functions) — Nagtugot kini sa mga plugin developer nga magdugang pa og search models functions.
- [wu_setup_wizard](./Filters/wu_setup_wizard) — Gitugotan niini nga magdugang ang mga developer og dugang steps sa setup wizard.
- [wu_should_redirect_to_primary_domain](./Filters/wu_should_redirect_to_primary_domain) — Gitugotan kini sa mga developer nga i-short-circuit ang redirection, aron mapugngan kini nga mahitabo.
- [wu_signup_step_handler_this-step](./Filters/wu_signup_step_handler_this-step) — Nagtugot kini alang sa handler rewrite.
- [wu_site_list_get_bulk_actions](./Filters/wu_site_list_get_bulk_actions) — Magfilter sa mga bulk actions nga magamit para sa mga sites.
- [wu_sites_column_limit](./Filters/wu_sites_column_limit) — Magfilter aron usbon ang value alang sa get pluginssites sulod sa network.
- [wu_sso_enabled](./Filters/wu_sso_enabled) — I-enable o i-disable ang cross-domain single-sign-on capability.

- [wu_stripe_checkout_subscription_data](./Filters/wu_stripe_checkout_subscription_data) — Mag-filter sa Stripe Subscription data. Mahimo nimo i-override ang success_url o cancel_url.
- [wu_stripe_create_payment_intent_args](./Filters/wu_stripe_create_payment_intent_args) — Nag-filter sa mga payment intent arguments.
- [wu_stripe_existing_plan_id](./Filters/wu_stripe_existing_plan_id) — Nag-filter sa ID sa plan nga i-check. Kung naa kini, ang bag-ong subscription mogamit ni plan.
- [wu_stripe_existing_product_id](./Filters/wu_stripe_existing_product_id) — Nag-filter sa ID sa product nga i-check. Kung naa kini, ang bag-ong subscription mogamit ni product.
- [wu_stripe_generate_idempotency_key](./Filters/wu_stripe_generate_idempotency_key) — Nag-filter sa idempotency_key value nga gihatag sa Stripe charge options.
- [wu_stripe_webhook_membership](./Filters/wu_stripe_webhook_membership) — Nag-filter sa membership record nga konektado ni webhook.
- [wu_this-model_meta_pre_save](./Filters/wu_this-model_meta_pre_save) — Nag-filter sa data meta una pa kini i-serialize para i-store sa database.
- [wu_this-model_pre_save](./Filters/wu_this-model_pre_save) — Nag-filter sa object data una pa kini i-store sa database.
- [wu_upgrade_to_unlock_url](./Filters/wu_upgrade_to_unlock_url) — Nagtugot sa mga developer nga magbag-o sa upgrade to unlock URL.
- [wu_use_domain_mapping](./Filters/wu_use_domain_mapping) — Nagdesisyon kung gamiton ba ang mapping.

- [wu_username_from_email](./Filters/wu_username_from_email) — Filter ang bag-o nga username sa customer.
- [wu_users_membership_limit_message](./Filters/wu_users_membership_limit_message) — Nagtugot kini sa mga developer nga usbon ang mensahe bahin sa limitasyon sa mga miyembro.
- [wu_view_override_replaceable_views](./Filters/wu_view_override_replaceable_views) — Nagtugot ni sa mga developer nga magdugang og dugang folders sa listahan sa replaceable views.
- [wu_wp_cli_enabled_sub_commands](./Filters/wu_wp_cli_enabled_sub_commands) — Mga filter kung uns sub_commands ang gi-enable para aning entity.
- [wu_wp_config_reference_hook_line_patterns](./Filters/wu_wp_config_reference_hook_line_patterns) — Nag-check mi kami sa tulo ka patterns kung asa nato mahimo i-inject ang among mga constants:
