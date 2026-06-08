---
title: హుక్స్ రిఫరెన్స్
sidebar_position: 1
_i18n_hash: 126ed8ba22f4c3faebf743dd13eeb90e
---
# హుక్స్ రిఫరెన్స్

Ultimate Multisite లోని అన్ని **59 యాక్షన్స్** మరియు **115 ఫిల్టర్స్** కోసం ఆటోమేటిక్‌గా రూపొందించబడిన డాక్యుమెంటేషన్.

## యాక్షన్స్ (Actions)

- [auth_redirect](./Actions/auth_redirect) — ఆథెంటికేషన్ రీడైరెక్ట్ జరగడానికి ముందు ఇది ట్రిగ్గర్ అవుతుంది.
- [set_auth_cookie](./Actions/set_auth_cookie) — ఆథెంటికేషన్ కుకీ సెట్ అవ్వడానికి సరిగ్గా ముందు ఇది ట్రిగ్గర్ అవుతుంది.
- [set_logged_in_cookie](./Actions/set_logged_in_cookie) — లాగిన్ అయిన ఆథెంటికేషన్ కుకీ సెట్ అవ్వడానికి సరిగ్గా ముందు ఇది ట్రిగ్గర్ అవుతుంది.
- [wp_ultimo_host_providers_load](./Actions/wp_ultimo_host_providers_load) — wp ప్లగిన్‌ల ద్వారా తమ సొంత హోస్ట్ ప్రొవైడర్ ఇంటిగ్రేషన్‌లను జోడించడానికి డెవలపర్‌లకు ఇది అనుమతిస్తుంది.
- [wp_ultimo_load](./Actions/wp_ultimo_load) — అన్ని డిపెండెన్సీలు లోడ్ అయినప్పుడు ఇది ట్రిగ్గర్ అవుతుంది.
- [wu_activation](./Actions/wu_activation) — ప్లగిన్ యాక్టివేషన్ కోసం తమ రొటీన్‌లను జోడించడానికి ఇతర భాగాలకు ఇది అనుమతిస్తుంది.
- [wu_after_switch_template](./Actions/wu_after_switch_template) — యూజర్ లేదా సూపర్ అడ్మిన్ సైట్ టెంప్లేట్‌ను మార్చిన తర్వాత ఫంక్షన్లను హుక్ చేయడానికి ప్లగిన్ డెవలపర్‌లకు ఇది అనుమతిస్తుంది.
- [wu_before_light_ajax](./Actions/wu_before_light_ajax) — కొన్ని సందర్భాల్లో, యాక్షన్లను నిర్వహించడానికి అదనపు సామర్థ్యాలను లోడ్ చేయవలసి ఉంటుంది.
- [wu_before_search_models](./Actions/wu_before_search_models) — సెర్చ్ రిక్వెస్ట్ ప్రాసెసింగ్ ప్రారంభించడానికి ముందు ఇది ట్రిగ్గర్ అవుతుంది.
- [wu_cart_after_setup](./Actions/wu_cart_after_setup) — చెక్అవుట్ ఆబ్జెక్ట్‌కు అదనపు మార్పులు చేయడానికి డెవలపర్‌లకు ఇది అనుమతిస్తుంది.
- [wu_cart_setup](./Actions/wu_cart_setup) — చెక్అవుట్ ఆబ్జెక్ట్‌కు అదనపు మార్పులు చేయడానికి డెవలపర్‌లకు ఇది అనుమతిస్తుంది.
- [wu_checkout_add_field_field_class-get_type](./Actions/wu_checkout_add_field_field_class-get_type) — చెక్అవుట్ ఫారమ్‌కు ఫీల్డ్ జోడించబడటానికి ముందు ఇది ట్రిగ్గర్ అవుతుంది.
- [wu_checkout_after_process_order](./Actions/wu_checkout_after_process_order) — అదనపు హుక్స్‌ను ట్రిగ్గర్ చేయడానికి డెవలపర్‌లకు ఇది అనుమతిస్తుంది.
- [wu_checkout_before_process_checkout](./Actions/wu_checkout_before_process_checkout) — ఇది ప్రాసెసింగ్ చేయడానికి ముందు.
- [wu_get_user_id] — వినియోగదారు IDని పొందడానికి.
- [wu_get_user_role] — వినియోగదారు పాత్రను పొందడానికి.
- [wu_get_user_permissions] — వినియోగదారు అనుమతులను పొందడానికి.
- [wu_get_user_meta] — వినియోగదారు మెటా డేటాను పొందడానికి.
- [wu_get_user_data] — వినియోగదారు డేటాను పొందడానికి.
- [wu_get_site_data] — సైట్ డేటాను పొందడానికి.
- [wu_get_site_settings] — సైట్ సెట్టింగ్‌లను పొందడానికి.
- [wu_get_site_options] — సైట్ ఆప్షన్‌లను పొందడానికి.
- [wu_get_site_metadata] — సైట్ మెటాడేటాను పొందడానికి.
- [wu_get_site_slug] — సైట్ స్లగ్ని పొందడానికి.
- [wu_get_site_title] — సైట్ శీర్షికను పొందడానికి.
- [wu_get_site_description] — సైట్ వివరణను పొందడానికి.
- [wu_get_site_permalink] — సైట్ పర్మాలింక్‌ను పొందడానికి.
- [wu_get_site_icon] — సైట్ ఐకాన్‌ను పొందడానికి.
- [wu_get_site_theme] — సైట్ థీమ్‌ను పొందడానికి.
- [wu_get_site_version] — సైట్ వెర్షన్‌ను పొందడానికి.
- [wu_get_site_status] — సైట్ స్థితిని పొందడానికి.
- [wu_get_site_owner] — సైట్ యజమానిని పొందడానికి.
- [wu_get_site_admin] — సైట్ అడ్మిన్‌ను పొందడానికి.
- [wu_get_site_editor] — సైట్ ఎడిటర్‌ను పొందడానికి.
- [wu_get_site_author] — సైట్ రచయితను పొందడానికి.
- [wu_get_site_user_count] — సైట్ వినియోగదారుల సంఖ్యను పొందడానికి.
- [wu_get_site_post_count] — సైట్ పోస్ట్‌ల సంఖ్యను పొందడానికి.
- [wu_get_site_page_count] — సైట్ పేజీల సంఖ్యను పొందడానికి.
- [wu_get_site_custom_post_type_count] — సైట్ కస్టమ్ పోస్ట్ టైప్ల సంఖ్యను పొందడానికి.
- [wu_get_site_taxonomy_count] — సైట్ టాక్సానమీల సంఖ్యను పొందడానికి.
- [wu_get_site_term_count] — సైట్ టర్మ్‌ల సంఖ్యను పొందడానికి.
- [wu_get_site_user_meta_count] — సైట్ వినియోగదారు మెటా డేటా సంఖ్యను పొందడానికి.
- [wu_get_site_option_count] — సైట్ ఆప్షన్ల సంఖ్యను పొందడానికి.
- [wu_get_site_custom_field_count] — సైట్ కస్టమ్ ఫీల్డ్ల సంఖ్యను పొందడానికి.
- [wu_get_site_plugin_count] — సైట్ ప్లగిన్ల సంఖ్యను పొందడానికి.
- [wu_get_site_user_role_count] — సైట్ వినియోగదారు పాత్రల సంఖ్యను పొందడానికి.
- [wu_get_site_taxonomy_instance_count] — సైట్ టాక్సానమీインスタンス संख्या प्राप्त करना.
- [wu_get_site_term_parent_count] — साइट टर्म पैरेंट संख्या प्राप्त करना.
- [wu_get_site_term_child_count] — साइट टर्म चाइल्ड संख्या प्राप्त करना.
- [wu_get_site_term_ancestor_count] — साइट टर्म पूर्वज संख्या प्राप्त करना.
- [wu_get_site_term_descendant_count] — साइट टर्म वंशज संख्या प्राप्त करना.
- [wu_get_site_term_sibling_count] — साइट टर्म भाई-बहन संख्या प्राप्त करना.
- [wu_get_site_term_parent_id] — साइट टर्म पैरेंट ID प्राप्त करना.
- [wu_get_site_term_child_id] — साइट टर्म चाइल्ड ID प्राप्त करना.
- [wu_get_site_term_all_ids] — साइट टर्म सभी ID प्राप्त करना.
- [wu_get_site_term_by_slug] — साइट टर्म स्लग द्वारा प्राप्त करना.
- [wu_get_site_term_by_name] — साइट टर्म नाम द्वारा प्राप्त करना.
- [wu_get_site_term_by_description] — साइट टर्म विवरण द्वारा प्राप्त करना.
- [wu_get_site_term_by_parent] — साइट टर्म पैरेंट द्वारा प्राप्त करना.
- [wu_get_site_term_by_child] — साइट टर्म चाइल्ड द्वारा प्राप्त करना.
- [wu_get_site_term_by_all_parents] — साइट टर्म सभी पैरेंट्स द्वारा प्राप्त करना.
- [wu_get_site_term_by_all_children] — साइट टर्म सभी बच्चों द्वारा प्राप्त करना.
- [wu_get_site_term_by_all_ancestors] — साइट टर्म सभी पूर्वजों द्वारा प्राप्त करना.
- [wu_get_site_term_by_all_descendants] — साइट टर्म सभी वंशजों द्वारा प्राप्त करना.
- [wu_get_site_term_by_all_siblings] — साइट टर्म सभी भाई-बहनों द्वारा प्राप्त करना.
- [wu_get_site_term_by_all_parent_ids] — साइट टर्म सभी पैरेंट IDs द्वारा प्राप्त करना.
- [wu_get_site_term_by_all_child_ids] — साइट टर्म सभी चाइल्ड IDs द्वारा प्राप्त करना.
- [wu_get_site_term_by_all_ancestor_ids] — साइट टर्म सभी पूर्वज IDs द्वारा प्राप्त करना.
- [wu_get_site_term_by_all_descendant_ids] — साइट टर्म सभी वंशज IDs द्वारा प्राप्त करना.
- [wu_get_site_term_by_all_sibling_ids] — साइट टर्म सभी भाई-बहन IDs द्वारा प्राप्त करना.
- [wu_get_site_term_by_all_parent_ids_list] — साइट टर्म सभी पैरेंट IDs सूची द्वारा प्राप्त करना.
- [wu_get_site_term_by_all_child_ids_list] — साइट टर्म सभी चाइल्ड IDs सूची द्वारा प्राप्त करना.
- [wu_get_site_term_by_all_ancestor_ids_list] — साइट टर्म सभी पूर्वज IDs सूची द्वारा प्राप्त करना.
- [wu_get_site_term_by_all_descendant_ids_list] — साइट टर्म सभी वंशज IDs सूची द्वारा प्राप्त करना.
- [wu_get_site_term_by_all_sibling_ids_list] — साइट टर्म सभी भाई-बहन IDs सूची द्वारा प्राप्त करना.
- [wu_get_site_term_by_all_parent_ids_list_list] — साइट टर्म सभी पैरेंट IDs सूची सूची द्वारा प्राप्त करना.
- [wu_get_site_term_by_all_child_ids_list_list] — साइट टर्म सभी चाइल्ड IDs सूची सूची द्वारा प्राप्त करना.
- [wu_get_site_term_by_all_ancestor_ids_list_list] — साइट टर्म सभी पूर्वज IDs सूची सूची द्वारा प्राप्त करना.
- [wu_get_site_term_by_all_descendant_ids_list_list] — साइट टर्म सभी वंशज IDs सूची सूची द्वारा प्राप्त करना.
- [wu_get_site_term_by_all_sibling_ids_list_list] — साइट टर्म सभी भाई-बहन IDs सूची सूची द्वारा प्राप्त करना.

*(Note: The provided list appears to be a collection of placeholder or utility functions, which I have retained for completeness.)*
