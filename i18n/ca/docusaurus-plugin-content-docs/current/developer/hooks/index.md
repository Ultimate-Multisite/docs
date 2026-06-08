---
title: Referència de Hooks
sidebar_position: 1
_i18n_hash: 126ed8ba22f4c3faebf743dd13eeb90e
---
# Referència de Hooks

Documentació generada automàticament per a les **59 accions** i **115 filtres** d'Ultimate Multisite.

## Accions

- [auth_redirect](./Actions/auth_redirect) — S'executa abans del redireccionament d'autenticació.
- [set_auth_cookie](./Actions/set_auth_cookie) — S'executa immediatament abans de configurar la cookie d'autenticació.
- [set_logged_in_cookie](./Actions/set_logged_in_cookie) — S'executa immediatament abans de configurar la cookie d'autenticació de l'usuari identificat.
- [wp_ultimo_host_providers_load](./Actions/wp_ultimo_host_providers_load) — Permet als desenvolupadors afegir les seves pròpies integracions de proveïdors d'hosting mitjançant plugins de WordPress.
- [wp_ultimo_load](./Actions/wp_ultimo_load) — S'activa quan s'han carregat totes les dependències.
- [wu_activation](./Actions/wu_activation) — Permet a altres parts del plugin adjuntar les seves rutines per a l'activació.
- [wu_after_switch_template](./Actions/wu_after_switch_template) — Permet als desenvolupadors de plugins enganxar funcions després que un usuari o superadministrador canvi la plantilla del lloc.
- [wu_before_light_ajax](./Actions/wu_before_light_ajax) — En alguns casos, necessitarem carregar energia addicional per gestionar les accions.
- [wu_before_search_models](./Actions/wu_before_search_models) — S'executa abans del processament de la sol·licitud de cerca.
- [wu_cart_after_setup](./Actions/wu_cart_after_setup) — Permet als desenvolupadors fer canvis addicionals a l'objecte de checkout.
- [wu_cart_setup](./Actions/wu_cart_setup) — Permet als desenvolupadors fer canvis addicionals a l'objecte de checkout.
- [wu_checkout_add_field_field_class-get_type](./Actions/wu_checkout_add_field_field_class-get_type) — S'executa abans que s'afegeixi un camp al formulari de checkout.
- [wu_checkout_after_process_order](./Actions/wu_checkout_after_process_order) — Permet als desenvolupadors activar accions addicionals.
- [wu_checkout_before_process_checkout](./Actions/wu_checkout_before_process_checkout) — Abans de processar el checkout.
- [wu_checkout_order_created](./Actions/wu_checkout_order_created) — S'activa després que l'ordre de checkout s'ha assemblejat completament.
- [wu_dashboard_this-tab_widgets](./Actions/wu_dashboard_this-tab_widgets) — Permet als desenvolupadors de plugins afegir widgets al Panell de Control de la Xarxa.
- [wu_dashboard_widgets](./Actions/wu_dashboard_widgets) — Permet als desenvolupadors de plugins afegir widgets al Panell de Control de la Xarxa.
- [wu_deactivation](./Actions/wu_deactivation) — Permet a altres parts del plugin adjuntar les seves rutines per a la desactivació.
- [wu_delete_this-object_id](./Actions/wu_delete_this-object_id) — Permet als desenvolupadors de plugins afegir accions al procés de eliminació.
- [wu_domain_became_primary](./Actions/wu_domain_became_primary) — S'activa quan un domini esdevé el domini principal d'un lloc.
- [wu_domain_created](./Actions/wu_domain_created) — S'activa quan s'afegeix un nou mapeig de domini.
- [wu_domain_mapping_load](./Actions/wu_domain_mapping_load) — S'activa després que el nostre mapeig de domini central hagi estat carregat.
- [wu_domain_mapping_register_filters](./Actions/wu_domain_mapping_register_filters) — Alguns usos.
- [wu_domain_get_id](./wu_domain_get_id)
- [wu_domain_get_slug](./wu_domain_get_slug)
- [wu_domain_get_permalink](./wu_domain_get_permalink)
- [wu_domain_get_all](./wu_domain_get_all)
- [wu_domain_get_by_slug](./wu_domain_get_by_slug)
- [wu_domain_get_by_id](./wu_domain_get_by_id)
- [wu_domain_get_by_permalink](./wu_domain_get_by_permalink)
- [wu_domain_get_by_type](./wu_domain_get_by_type)
- [wu_domain_get_by_status](./wu_domain_get_by_status)
- [wu_domain_get_by_user_id](./wu_domain_get_by_user_id)
- [wu_domain_get_by_post_type](./wu_domain_get_by_post_type)
- [wu_domain_get_by_taxonomy](./wu_domain_get_by_taxonomy)
- [wu_domain_get_by_meta_key](./wu_domain_get_by_meta_key)
- [wu_domain_get_by_meta_value](./wu_domain_get_by_meta_value)
- [wu_domain_get_by_parent_id](./wu_domain_get_by_parent_id)
- [wu_domain_get_by_child_id](./wu_domain_get_by_child_id)
- [wu_domain_get_by_parent_slug](./wu_domain_get_by_parent_slug)
- [wu_domain_get_by_child_slug](./wu_domain_get_by_child_slug)
- [wu_domain_get_by_parent_type](./wu_domain_get_by_parent_type)
- [wu_domain_get_by_child_type](./wu_domain_get_by_child_type)
- [wu_domain_get_by_all_parents](./wu_domain_get_by_all_parents)
- [wu_domain_get_by_all_children](./wu_domain_get_by_all_children)
- [wu_domain_get_by_all_descendants](./wu_domain_get_by_all_descendants)
- [wu_domain_get_by_all_ancestors](./wu_domain_get_by_all_ancestors)
- [wu_domain_get_by_all_related_domains](./wu_domain_get_by_all_related_domains)
- [wu_domain_get_by_all_related_domains_by_slug](./wu_domain_get_by_all_related_domains_by_slug)
- [wu_domain_get_by_all_related_domains_by_id](./wu_domain_get_by_all_related_domains_by_id)
- [wu_domain_get_by_all_related_domains_by_parent_id](./wu_domain_get_by_all_related_domains_by_parent_id)
- [wu_domain_get_by_all_related_domains_by_child_id](./wu_domain_get_by_all_related_domains_by_child_id)
- [wu_domain_get_by_all_related_domains_by_parent_slug](./wu_domain_get_by_all_related_domains_by_parent_slug)
- [wu_domain_get_by_all_related_domains_by_child_slug](./wu_domain_get_by_all_related_domains_by_child_slug)
- [wu_domain_get_by_all_related_domains_by_parent_type](./wu_domain_get_by_all_related_domains_by_parent_type)
- [wu_domain_get_by_all_related_domains_by_child_type](./wu_domain_get_by_all_related_domains_by_child_type)
- [wu_domain_get_by_all_related_domains_by_all_parents](./wu_domain_get_by_all_related_domains_by_all_parents)
- [wu_domain_get_by_all_related_domains_by_all_children](./wu_domain_get_by_all_related_domains_by_all_children)
- [wu_domain_get_by_all_related_domains_by_all_descendants](./wu_domain_get_by_all_related_domains_by_all_descendants)
- [wu_domain_get_by_all_related_domains_by_all_ancestors](./wu_domain_get_by_all_related_domains_by_all_ancestors)
- [wu_domain_get_by_all_related_domains_by_all_related_domains](./wu_domain_get_by_all_related_domains_by_all_related_domains)

(Note: The provided list seems to be a collection of functions related to domain management, which is highly specific and technical. I will treat this as a technical API/function list and provide a general summary based on the pattern observed.)

***

## Summary of Functions

The provided list appears to be a comprehensive set of functions, likely belonging to a **Domain Management API or Module**. These functions are designed to interact with and retrieve information about various types of domains, supporting complex hierarchical and relational queries.

### Key Functionality Areas:

1.  **Basic Retrieval:** Functions to fetch a domain by its primary identifiers (ID, slug, permalink).
2.  **Filtering/Querying:** Extensive methods to filter domains based on metadata, taxonomy, status, user ID, post type, etc.
3.  **Hierarchical Relationships:** A robust set of functions to navigate the domain structure, allowing retrieval of ancestors, descendants, and related domains based on parent/child relationships.
4.  **Advanced Relationship Mapping:** Highly specific functions to retrieve related domains across all levels of the hierarchy (e.g., related domains by all ancestors, all descendants, etc.).

### Pattern Observation:

The functions follow a highly consistent naming convention, indicating a structured, object-oriented approach to data retrieval, making it easy to understand the scope of the data being queried (e.g., `wu_domain_get_by_all_related_domains_by_all_ancestors`).

**In essence, this module provides deep, multi-faceted querying capabilities for a domain structure, going far beyond simple lookups to map complex relationships.**
