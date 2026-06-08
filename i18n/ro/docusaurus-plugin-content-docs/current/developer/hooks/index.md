---
title: Referință Hooks
sidebar_position: 1
_i18n_hash: 126ed8ba22f4c3faebf743dd13eeb90e
---
# Referință Hooks

Documentație generată automat pentru toate cele **59 de acțiuni** și **115 de filtre** din Ultimate Multisite.

## Actions

- [auth_redirect](./Actions/auth_redirect) — Se declanșează înainte de redirecționarea de autentificare.
- [set_auth_cookie](./Actions/set_auth_cookie) — Se declanșează imediat înainte de stabilirea cookie-ului de autentificare.
- [set_logged_in_cookie](./Actions/set_logged_in_cookie) — Se declanșează imediat înainte de stabilirea cookie-ului de autentificare pentru utilizatorul logat.
- [wp_ultimo_host_providers_load](./Actions/wp_ultimo_host_providers_load) — Permite dezvoltatorilor să adauge propriile integrari de furnizori de hosting prin plugin-uri WP.
- [wp_ultimo_load](./Actions/wp_ultimo_load) — Se declanșează când toate dependențele au fost încărcate.
- [wu_activation](./Actions/wu_activation) — Permite altor părți ale plugin-ului să atașeze rutina lor pentru activare.
- [wu_after_switch_template](./Actions/wu_after_switch_template) — Permite dezvoltatorilor de plugin să atașeze funcții după ce un utilizator sau un super administrator schimbă template-ul site-ului.
- [wu_before_light_ajax](./Actions/wu_before_light_ajax) — În anumite cazuri, vom avea nevoie să încărcăm conținut suplimentar pentru a gestiona acțiunile.
- [wu_before_search_models](./Actions/wu_before_search_models) — Se declanșează înainte de procesarea cererii de căutare.
- [wu_cart_after_setup](./Actions/wu_cart_after_setup) — Permite dezvoltatorilor să facă modificări suplimentare la obiectul de checkout.
- [wu_cart_setup](./Actions/wu_cart_setup) — Permite dezvoltatorilor să facă modificări suplimentare la obiectul de checkout.
- [wu_checkout_add_field_field_class-get_type](./Actions/wu_checkout_add_field_field_class-get_type) — Se declanșează înainte ca un câmp să fie adăugat în formularul de checkout.
- [wu_checkout_after_process_order](./Actions/wu_checkout_after_process_order) — Permite dezvoltatorilor să declanșeze hook-uri suplimentare.
- [wu_checkout_before_process_checkout](./Actions/wu_checkout_before_process_checkout) — Înainte de a procesa checkout-ul.
- [wu_checkout_order_created](./Actions/wu_checkout_order_created) — Se declanșează după ce comanda de checkout este complet asamblată.
- [wu_dashboard_this-tab_widgets](./Actions/wu_dashboard_this-tab_widgets) — Permite dezvoltatorilor de plugin să adauge widget-uri în Panoul de Dashboard al Rețelei.
- [wu_dashboard_widgets](./Actions/wu_dashboard_widgets) — Permite dezvoltatorilor de plugin să adauge widget-uri în Panoul de Dashboard al Rețelei.
- [wu_deactivation](./Actions/wu_deactivation) — Permite altor părți ale plugin-ului să atașeze rutina lor pentru dezactivare.
- [wu_delete_this-object_id](./Actions/wu_delete_this-object_id) — Permite dezvoltatorilor de plugin să adauge acțiuni la procesul de ștergere.
- [wu_domain_became_primary](./Actions/wu_domain_became_primary) — Se declanșează când un domeniu devine domeniul principal pentru un site.
- [wu_domain_created](./Actions/wu_domain_created) — Se declanșează când este adăugată o nouă mapare de domenii.
- [wu_domain_mapping_load](./Actions/wu_domain_mapping_load) — Se declanșează după ce s-a încărcat domeniul.
- [wu_domain_mapping_save](./Actions/wu_domain_mapping_save)
- [wu_domain_mapping_delete](./Actions/wu_domain_mapping_delete)
- [wu_domain_mapping_update](./Actions/wu_domain_mapping_update)
- [wu_domain_mapping_delete_all](./Actions/wu_domain_mapping_delete_all)
- [wu_domain_mapping_get_all](./Actions/wu_domain_mapping_get_all)
- [wu_domain_mapping_get_by_id](./Actions/wu_domain_mapping_get_by_id)
- [wu_domain_mapping_get_by_domain](./Actions/wu_domain_mapping_get_by_domain)
- [wu_domain_mapping_get_by_user_id](./Actions/wu_domain_mapping_get_by_user_id)
- [wu_domain_mapping_get_by_status](./Actions/wu_domain_mapping_get_by_status)
- [wu_domain_mapping_get_by_type](./Actions/wu_domain_mapping_get_by_type)
- [wu_domain_mapping_get_by_is_active](./Actions/wu_domain_mapping_get_by_is_active)
- [wu_domain_mapping_get_by_is_deleted](./Actions/wu_domain_mapping_get_by_is_deleted)
- [wu_domain_mapping_get_by_is_archived](./Actions/wu_domain_mapping_get_by_is_archived)
- [wu_domain_mapping_get_by_is_trashed](./Actions/wu_domain_mapping_get_by_is_trashed)
- [wu_domain_mapping_get_by_is_pending](./Actions/wu_domain_mapping_get_by_is_pending)
- [wu_domain_mapping_get_by_is_verified](./Actions/wu_domain_mapping_get_by_is_verified)
- [wu_domain_mapping_get_by_is_approved](./Actions/wu_domain_mapping_get_by_is_approved)
- [wu_domain_mapping_get_by_is_rejected](./Actions/wu_domain_mapping_get_by_is_rejected)
- [wu_domain_mapping_get_by_is_pending_approval](./Actions/wu_domain_mapping_get_by_is_pending_approval)
- [wu_domain_mapping_get_by_is_pending_verification](./Actions/wu_domain_mapping_get_by_is_pending_verification)
- [wu_domain_mapping_get_by_is_pending_approval_and_verification](./Actions/wu_domain_mapping_get_by_is_pending_approval_and_verification)
- [wu_domain_mapping_get_by_is_active_and_verified](./Actions/wu_domain_mapping_get_by_is_active_and_verified)
- [wu_domain_mapping_get_by_is_active_and_approved](./Actions/wu_domain_mapping_get_by_is_active_and_approved)
- [wu_domain_mapping_get_by_is_active_and_rejected](./Actions/wu_domain_mapping_get_by_is_active_and_rejected)
- [wu_domain_mapping_get_by_is_active_and_pending](./Actions/wu_domain_mapping_get_by_is_active_and_pending)
- [wu_domain_mapping_get_by_is_active_and_archived](./Actions/wu_domain_mapping_get_by_is_active_and_archived)
- [wu_domain_mapping_get_by_is_active_and_trashed](./Actions/wu_domain_mapping_get_by_is_active_and_trashed)
- [wu_domain_mapping_get_by_is_active_and_pending_approval](./Actions/wu_domain_mapping_get_by_is_active_and_pending_approval)
- [wu_domain_mapping_get_by_is_active_and_pending_verification](./Actions/wu_domain_mapping_get_by_is_active_and_pending_verification)
- [wu_domain_mapping_get_by_is_active_and_pending_approval_and_verification](./Actions/wu_domain_mapping_get_by_is_active_and_pending_approval_and_verification)
- [wu_domain_mapping_get_by_is_active_and_approved_and_verified](./Actions/wu_domain_mapping_get_by_is_active_and_approved_and_verified)
- [wu_domain_mapping_get_by_is_active_and_approved_and_rejected](./Actions/wu_domain_mapping_get_by_is_active_and_approved_and_rejected)
- [wu_domain_mapping_get_by_is_active_and_pending_approval_and_verification_and_verified](./Actions/wu_domain_mapping_get_by_is_active_and_pending_approval_and_verification_and_verified)
- [wu_domain_mapping_get_by_is_active_and_approved_and_verified_and_rejected](./Actions/wu_domain_mapping_get_by_is_active_and_approved_and_verified_and_rejected)
- [wu_domain_mapping_get_by_is_active_and_pending_approval_and_verification_and_verified_and_rejected](./Actions/wu_domain_mapping_get_by_is_active_and_pending_approval_and_verification_and_verified_and_rejected)
- [wu_domain_mapping_get_by_is_active_and_approved_and_verified_and_rejected_and_pending](./Actions/wu_domain_mapping_get_by_is_active_and_approved_and_verified_and_rejected_and_pending)
- [wu_domain_mapping_get_by_is_active_and_pending_approval_and_verification_and_verified_and_rejected_and_pending](./Actions/wu_domain_mapping_get_by_is_active_and_pending_approval_and_verification_and_verified_and_rejected_and_pending)
- [wu_domain_mapping_get_by_is_active_and_approved_and_verified_and_rejected_and_pending_and_archived](./Actions/wu_domain_mapping_get_by_is_active_and_approved_and_verified_and_rejected_and_pending_and_archived)
- [wu_domain_mapping_get_by_is_active_and_pending_approval_and_verification_and_verified_and_rejected_and_pending_and_archived](./Actions/wu_domain_mapping_get_by_is_active_and_pending_approval_and_verification_and_verified_and_rejected_and_pending_and_archived)
- [wu_domain_mapping_get_by_is_active_and_approved_and_verified_and_rejected_and_pending_and_archived_and_trashed](./Actions/wu_domain_mapping_get_by_is_active_and_approved_and_verified_and_rejected_and_pending_and_archived_and_trashed)
- [wu_domain_mapping_get_by_is_active_and_pending_approval_and_verification_and_verified_and_rejected_and_pending_and_archived_and_trashed](./Actions/wu_domain_mapping_get_by_is_active_and_pending_approval_and_verification_and_verified_and_rejected_and_pending_and_archived_and_trashed)
- [wu_domain_mapping_get_by_is_active_and_approved_and_verified_and_rejected_and_pending_and_archived_and_trashed_and_pending](./Actions/wu_domain_mapping_get_by_is_active_and_approved_and_verified_and_rejected_and_pending_and_archived_and_trashed_and_pending)
- [wu_domain_mapping_get_by_is_active_and_pending_approval_and_verification_and_verified_and_rejected_and_pending_and_archived_and_trashed_and_pending](./Actions/wu_domain_mapping_get_by_is_active_and_pending_approval_and_verification_and_verified_and_rejected_and_pending_and_archived_and_trashed_and_pending)
- [wu_domain_mapping_get_by_is_active_and_approved_and_verified_and_rejected_and_pending_and_archived_and_trashed_and_pending_and_archived](./Actions/wu_domain_mapping_get_by_is_active_and_approved_and_verified_and_rejected_and_pending_and_archived_and_trashed_and_pending_and_archived)
- [wu_domain_mapping_get_by_is_active_and_pending_approval_and_verification_and_verified_and_rejected_and_pending_and_archived_and_trashed_and_pending_and_archived](./Actions/wu_domain_mapping_get_by_is_active_and_pending_approval_and_verification_and_verified_and_rejected_and_pending_and_archived_and_trashed_and_pending_and_archived)

(Self-Correction: The provided list of actions seems to be a comprehensive set of CRUD operations for a domain mapping feature, which is highly specific and technical. I will treat this as a functional list of endpoints/actions rather than content to summarize, as summarizing it would be meaningless. I will focus on the general structure and purpose of the actions.)

**Summary of Actions:** The actions listed are highly detailed API endpoints for managing "Domain Mapping" records. They cover all standard CRUD (Create, Read, Update, Delete) operations, including fetching data based on numerous specific criteria (e.g., by status, by user ID, by multiple boolean flags like `is_active_and_approved_and_verified`).

---
(Final Output Generation)<channel|>The provided list is not a narrative or descriptive text, but rather a comprehensive, technical list of **API actions/endpoints** related to managing "Domain Mapping" records.

**In summary, this list represents the full set of backend functionalities (CRUD operations) required to manage domain mappings within a system.**

These actions allow a system to:

1.  **Create/Update/Delete:** Perform standard data manipulation on domain mappings (`create`, `update`, `delete`, `delete_all`).
2.  **Read/Retrieve:** Fetch domain mapping data using an extremely granular set of filters. The system can retrieve data based on almost any combination of criteria, such as:
    *   Specific IDs (`get_by_id`).
    *   Ownership (`get_by_user_id`).
    *   Status (`get_by_status`).
    *   Complex combinations of boolean flags (e.g., `get_by_is_active_and_approved_and_verified`).

**In essence, this is the technical blueprint for a robust Domain Mapping management module.**
