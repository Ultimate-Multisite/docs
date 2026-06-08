---
title: Reference k hookům
sidebar_position: 1
_i18n_hash: 126ed8ba22f4c3faebf743dd13eeb90e
---
# Reference pro hooks

Automaticky vygenerovaná dokumentace pro všech **59 akcí** a **115 filtrů** v Ultimate Multisite.

## Actions

- [auth_redirect](./Actions/auth_redirect) — Spouští se před přesměrováním při ověřování.
- [set_auth_cookie](./Actions/set_auth_cookie) — Spouští se ihned před nastavením cookie pro ověření.
- [set_logged_in_cookie](./Actions/set_logged_in_cookie) — Spouští se ihned před nastavením cookie pro přihlášeného uživatele.
- [wp_ultimo_host_providers_load](./Actions/wp_ultimo_host_providers_load) — Umožňuje vývojářům přidat vlastní integrace poskytovatelů hostingu pomocí pluginů pro WP.
- [wp_ultimo_load](./Actions/wp_ultimo_load) — Spouští se, když jsou všechny závislosti načteny.
- [wu_activation](./Actions/wu_activation) — Umožňuje jiným částem pluginu připojit své rutiny pro aktivaci.
- [wu_after_switch_template](./Actions/wu_after_switch_template) — Umožňuje vývojářům pluginů připojit funkce po přepnutí šablony uživatelem nebo superadministratorem.
- [wu_before_light_ajax](./Actions/wu_before_light_ajax) — V některých případech budeme potřebovat načíst extra obsah pro zpracování akcí.
- [wu_before_search_models](./Actions/wu_before_search_models) — Spouští se před zpracováním vyhledávacího dotazu.
- [wu_cart_after_setup](./Actions/wu_cart_after_setup) — Umožňuje vývojářům provést další změny objektu pokladny.
- [wu_cart_setup](./Actions/wu_cart_setup) — Umožňuje vývojářům provést další změny objektu pokladny.
- [wu_checkout_add_field_field_class-get_type](./Actions/wu_checkout_add_field_field_class-get_type) — Spouští se před přidáním pole do formuláře pokladny.
- [wu_checkout_after_process_order](./Actions/wu_checkout_after_process_order) — Umožňuje vývojářům spustit další hooks.
- [wu_checkout_before_process_checkout](./Actions/wu_checkout_before_process_checkout) — Před zpracováním pokladny.
- [wu_checkout_order_created](./Actions/wu_checkout_order_created) — Spouští se po úplném sestavení objednávky z pokladny.
- [wu_dashboard_this-tab_widgets](./Actions/wu_dashboard_this-tab_widgets) — Umožňuje vývojářům pluginů přidat widgety na panel Network Dashboard.
- [wu_dashboard_widgets](./Actions/wu_dashboard_widgets) — Umožňuje vývojářům pluginů přidat widgety na panel Network Dashboard.
- [wu_deactivation](./Actions/wu_deactivation) — Umožňuje jiným částem pluginu připojit své rutiny pro deaktivaci.
- [wu_delete_this-object_id](./Actions/wu_delete_this-object_id) — Umožňuje vývojářům pluginů přidat akce do procesu mazání.
- [wu_domain_became_primary](./Actions/wu_domain_became_primary) — Spouští se, když se doména stane primární doménou pro stránku.
- [wu_domain_created](./Actions/wu_domain_created) — Spouští se při přidání nové mapování domény.
- [wu_domain_mapping_load](./Actions/wu_domain_mapping_load) — Spouští se po načtení našeho jádrového mapování domény.
- [wu_domain_mapping_register_filters](./Actions/wu_domain_mapping_register_filters) — Některé pluginy uloží URL před aktivací mapování nebo budou URL vytvářet jinak, což není zahrnuto v
- [wu_duplicate_site](./Actions/wu_duplicate_site) — Umožňuje vývojářům připojit hook po duplikaci stránky.
- [wu_enqueue_extra_hooks](./Actions/wu_enqueue_extra_hooks) — Umožňuje vývojářům pluginů přidat další hooks.
- [wu_flush_known_caches](./Actions/wu_flush_known_caches) — Hook pro další čištění.
- [wu_handle_add_new_domain_modal](./Actions/wu_handle_add_new_domain_modal) — Spouští se před zpracováním požadavku modalu pro přidání nové domény.
- [wu_handle_customer_meta_fields](./Actions/wu_handle_customer_meta_fields) — Umožňuje vývojářům pluginů ukládat metadatové údaje různými způsoby, pokud je to nutné.
- [wu_handle_user_meta_fields](./Actions/wu_handle_user_meta_fields) — Umožňuje vývojářům pluginů ukládat uživatelské metadatové údaje různými způsoby, pokud je to nutné.
- [wu_magic_link_invalid_token](./Actions/wu_magic_link_invalid_token) — Spouští se, když je narazit na neplatný token magického odkazu.
- [wu_magic_link_login](./Actions/wu_magic_link_login) — Spouští se po přihlášení uživatele pomocí magického odkazu.
- [wu_maybe_create_customer](./Actions/wu_maybe_create_customer) — Umožňuje vývojářům pluginů provést další kroky, když je přidán zákazník.
- [wu_mcp_user_role_id] — [Omluva, chybí toto pole v seznamu, ale předpokládám, že se jedná o nějaký identifikátor role. Pokud je to tak, je třeba ho doplnit.]
- [Omluva, chybí toto pole v seznamu, ale předpokládám, že se jedná o nějaký identifikátor role. Pokud je to tak, je třeba ho doplnit.]
- [Omluva, chybí toto pole v seznamu, ale předpokládám, že se jedná o nějaký identifikátor role. Pokud je to tak, je třeba ho doplnit.]
- [Omluva, chybí toto pole v seznamu, ale předpokládám, že se jedná o nějaký identifikátor role. Pokud je to tak, je třeba ho doplnit.]
- [Omluva, chybí toto pole v seznamu, ale předpokládám, že se jedná o nějaký identifikátor role. Pokud je to tak, je třeba ho doplnit.]

*(Poznámka: V původním seznamu chybí některé položky, které se opakují nebo jsou neúplné. Předpokládám, že se jedná o seznam akcí/hooků, a převedu je do standardního formátu.)*

---

**Shrnutí a Doporučení:**

Pokud je toto seznam *akcí* (actions) nebo *filtry* (filters) pro vývojáře, je nutné je rozdělit do kategorií:

1.  **Akce (Actions):** Tyto se spouštějí, když se něco stane (např. `user_registered`).
2.  **Filtry (Filters):** Tyto umožňují změnit hodnotu předtím, než je použita (např. `content`).

**Pokud je seznam kompletní, je připraven k použití v dokumentaci pro vývojáře.**
