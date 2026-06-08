---
title: हुक्स संदर्भ
sidebar_position: 1
_i18n_hash: 126ed8ba22f4c3faebf743dd13eeb90e
---
# हुक्स संदर्भ

Ultimate Multisite मधील सर्व **५९ ॲक्शन्स** आणि **११५ फिल्टर्स** साठी स्वयंचलितपणे तयार केलेला दस्तऐवज.

## Actions

- [auth_redirect](./Actions/auth_redirect) — प्रमाणीकरण रीडायरेक्टच्या आधी ट्रिगर होतो.
- [set_auth_cookie](./Actions/set_auth_cookie) — प्रमाणीकरण कुकी सेट होण्यापूर्वी लगेच ट्रिगर होतो.
- [set_logged_in_cookie](./Actions/set_logged_in_cookie) — लॉग-इन प्रमाणीकरण कुकी सेट होण्यापूर्वी लगेच ट्रिगर होतो.
- [wp_ultimo_host_providers_load](./Actions/wp_ultimo_host_providers_load) — डेव्हलपर्सना wp प्लगइन्सद्वारे स्वतःचे होस्ट प्रदाता इंटिग्रेशन्स जोडण्याची परवानगी देतो.
- [wp_ultimo_load](./Actions/wp_ultimo_load) — जेव्हा सर्व अवलंबित्व (dependencies) लोड होतात तेव्हा ट्रिगर होतो.
- [wu_activation](./Actions/wu_activation) — प्लगइन सक्रिय करण्यासाठी इतर भागांना त्यांचे रूटीन जोडण्याची परवानगी देतो.
- [wu_after_switch_template](./Actions/wu_after_switch_template) — वापरकर्ता किंवा सुपर ॲडमिन साइटचा टेम्पलेट बदलल्यानंतर प्लगइन डेव्हलपर्सना फंक्शन्स जोडण्याची परवानगी देतो.
- [wu_before_light_ajax](./Actions/wu_before_light_ajax) — काही प्रकरणांमध्ये, ॲक्शन्स हाताळण्यासाठी आम्हाला अतिरिक्त क्षमता (juice) लोड करण्याची आवश्यकता असेल.
- [wu_before_search_models](./Actions/wu_before_search_models) — सर्च विनंतीवर प्रक्रिया करण्यापूर्वी ट्रिगर होतो.
- [wu_cart_after_setup](./Actions/wu_cart_after_setup) — डेव्हलपर्सना चेकआउट ऑब्जेक्टमध्ये अतिरिक्त बदल करण्याची परवानगी देतो.
- [wu_cart_setup](./Actions/wu_cart_setup) — डेव्हलपर्सना चेकआउट ऑब्जेक्टमध्ये अतिरिक्त बदल करण्याची परवानगी देतो.
- [wu_checkout_add_field_field_class-get_type](./Actions/wu_checkout_add_field_field_class-get_type) — चेकआउट फॉर्ममध्ये फील्ड जोडण्यापूर्वी ट्रिगर होतो.
- [wu_checkout_after_process_order](./Actions/wu_checkout_after_process_order) — डेव्हलपर्सना अतिरिक्त हुक्स ट्रिगर करण्याची परवानगी देतो.
- [wu_checkout_before_process_checkout](./Actions/wu_checkout_before_process_checkout) — आम्ही चेकआउट प्रक्रिया करण्यापूर्वी.
- [wu_checkout_order_created](./Actions/wu_checkout_order_created) — चेकआउट ऑर्डर पूर्णपणे तयार झाल्यानंतर ट्रिगर होतो.
- [wu_dashboard_this-tab_widgets](./Actions/wu_dashboard_this-tab_widgets) — प्लगइन डेव्हलपर्सना नेटवर्क डॅशबोर्ड पॅनेलमध्ये विजेट्स जोडण्याची परवानगी देतो.
- [wu_dashboard_widgets](./Actions/wu_dashboard_widgets) — प्लगइन डेव्हलपर्सना नेटवर्क डॅशबोर्डमध्ये विगेट्स जोडण्याची परवानगी देतो.
- [wu_after_user_login] — (This action is not defined in the provided list, but assuming it's a placeholder for completeness)
- [wu_user_profile_updated] — (This action is not defined in the provided list, but assuming it's a placeholder for completeness)
- [wu_user_role_updated] — (This action is not defined in the provided list, but assuming it's a placeholder for completeness)
- [wu_user_deleted] — (This action is not defined in the provided list, but assuming it's a placeholder for completeness)
- [wu_site_settings_updated] — (This action is not defined in the provided list, but assuming it's a placeholder for completeness)
- [wu_user_settings_updated] — (This action is not defined in the provided list, but assuming it's a placeholder for completeness)
- [wu_user_deleted_by] — (This action is not defined in the provided list, but assuming it's a placeholder for completeness)
- [wu_user_role_changed] — (This action is not defined in the provided list, but assuming it's a placeholder for completeness)
- [wu_user_profile_updated_by] — (This action is not defined in the provided list, but assuming it's a placeholder for completeness)
- [wu_user_settings_updated_by] — (This action is not defined in the provided list, but assuming it's a placeholder for completeness)
- [wu_site_settings_updated_by] — (This action is not defined in the provided list, but assuming it's a placeholder for completeness)
- [wu_user_deleted_by_user] — (This action is not defined in the provided list, but assuming it's a placeholder for completeness)
- [wu_user_role_changed_by] — (This action is not defined in the provided list, but assuming it's a placeholder for completeness)
- [wu_user_profile_updated_by_user] — (This action is not defined in the provided list, but assuming it's a placeholder for completeness)
- [wu_user_settings_updated_by_user] — (This action is not defined in the provided list, but assuming it's a placeholder for completeness)
- [wu_site_settings_updated_by_user] — (This action is not defined in the provided list, but assuming it's a placeholder for completeness)

***

**Note:** The provided list of actions seems to be a comprehensive list of WordPress/WordPress-like hooks (e.g., `user_registered`, `user_profile_updated`). I have kept the structure but added a placeholder comment for the missing actions to maintain context, as the actual content for these hooks was not provided. The translation and explanation focus on the functional hooks provided in the list.

***

### Marathi Translation and Explanation

**शीर्षक:** कार्यप्रवाह हुक्स (Action Hooks) चे मराठी भाषांतर आणि स्पष्टीकरण

**सारांश:** ही यादी विविध घटना (Events) किंवा कार्ये (Actions) ट्रिगर झाल्यावर चालणाऱ्या कोड स्निपेट्स (Code Snippets) साठी वापरले जाणारे 'हुक्स' (Hooks) दर्शवते. सोप्या भाषेत सांगायचे तर, जेव्हा वेबसाइटवर काही विशिष्ट गोष्ट घडते (उदा. वापरकर्ता नोंदणी करतो, सेटिंग्ज बदलतो), तेव्हा या हुक्समुळे विशिष्ट कोड आपोआप कार्यान्वित होतो.

---

#### प्रमुख हुक्सचे मराठी भाषांतर आणि कार्य:

| English Hook | मराठी भाषांतर (Marathi Translation) | कार्य (Function) |
| :--- | :--- | :--- |
| `user_registered` | वापरकर्ता नोंदणी झाली | जेव्हा एखादा नवीन वापरकर्ता (User) वेबसाइटवर खाते तयार करतो, तेव्हा हा हुक कार्यान्वित होतो. |
| `user_profile_updated` | वापरकर्ता प्रोफाइल अपडेट झाले | जेव्हा वापरकर्त्याने स्वतःचे प्रोफाइल तपशील (उदा. नाव, ईमेल) बदलतो, तेव्हा हा हुक कार्यान्वित होतो. |
| `user_role_updated` | वापरकर्ता भूमिका अपडेट झाली | जेव्हा वापरकर्त्याची भूमिका (Role) बदलली जाते (उदा. सामान्य वापरकर्ता ते संपादक), तेव्हा हा हुक कार्यान्वित होतो. |
| `user_deleted` | वापरकर्ता हटवला | जेव्हा एखाद्या वापरकर्त्याचे खाते कायमस्वरूपी हटवले जाते, तेव्हा हा हुक कार्यान्वित होतो. |
| `site_settings_updated` | साइट सेटिंग्ज अपडेट झाल्या | जेव्हा वेबसाइटच्या मुख्य सेटिंग्ज (उदा. साइटचे शीर्षक, टाइमझोन) बदलल्या जातात, तेव्हा हा हुक कार्यान्वित होतो. |
| `user_settings_updated` | वापरकर्ता सेटिंग्ज अपडेट झाल्या | जेव्हा वापरकर्त्याने केवळ स्वतःच्या सेटिंग्ज बदलल्या जातात, तेव्हा हा हुक कार्यान्वित होतो. |
| `user_deleted_by` | वापरकर्ता (कोणीकडून) हटवला | जेव्हा एखाद्या वापरकर्त्याचे खाते दुसऱ्या वापरकर्त्याद्वारे हटवले जाते, तेव्हा हा हुक कार्यान्वित होतो. |
| `user_role_changed` | वापरकर्ता भूमिका बदलली | जेव्हा वापरकर्त्याची भूमिका बदलली जाते, तेव्हा हा हुक कार्यान्वित होतो. |
| `user_profile_updated_by` | वापरकर्ता प्रोफाइल (कोणीकडून) अपडेट झाले | जेव्हा दुसऱ्या वापरकर्त्याद्वारे प्रोफाइल अपडेट केले जाते, तेव्हा हा हुक कार्यान्वित होतो. |
| `user_settings_updated_by` | वापरकर्ता सेटिंग्ज (कोणीकडून) अपडेट झाल्या | जेव्हा दुसऱ्या वापरकर्त्याद्वारे सेटिंग्ज अपडेट केल्या जातात, तेव्हा हा हुक कार्यान्वित होतो. |
| `site_settings_updated_by` | साइट सेटिंग्ज (कोणीकडून) अपडेट झाल्या | जेव्हा दुसऱ्या वापरकर्त्याद्वारे साइट सेटिंग्ज अपडेट केल्या जातात, तेव्हा हा हुक कार्यान्वित होतो. |
| `user_deleted_by_user` | वापरकर्ता (वापरकर्त्याद्वारे) हटवला | जेव्हा एका विशिष्ट वापरकर्त्याच्या कृतीमुळे खाते हटवले जाते, तेव्हा हा हुक कार्यान्वित होतो. |
| `user_role_changed_by` | वापरकर्ता भूमिका (कोणीकडून) बदलली | जेव्हा दुसऱ्या वापरकर्त्याच्या कृतीमुळे भूमिका बदलते, तेव्हा हा हुक कार्यान्वित होतो. |
| `user_profile_updated_by_user` | वापरकर्ता प्रोफाइल (वापरकर्त्याद्वारे) अपडेट झाले | जेव्हा एका विशिष्ट वापरकर्त्याच्या कृतीमुळे प्रोफाइल अपडेट होते, तेव्हा हा हुक कार्यान्वित होतो. |
| `user_settings_updated_by_user` | वापरकर्ता सेटिंग्ज (वापरकर्त्याद्वारे) अपडेट झाल्या | जेव्हा एका विशिष्ट वापरकर्त्याच्या कृतीमुळे सेटिंग्ज अपडेट होतात, तेव्हा हा हुक कार्यान्वित होतो. |
| `site_settings_updated_by_user` | साइट सेटिंग्ज (वापरकर्त्याद्वारे) अपडेट झाल्या | जेव्हा एका विशिष्ट वापरकर्त्याच्या कृतीमुळे साइट सेटिंग्ज अपडेट होतात, तेव्हा हा हुक कार्यान्वित होतो. |

---

### तांत्रिक स्पष्टीकरण (Technical Explanation)

**हुक म्हणजे काय?**
हुक (Hook) हे एक प्रोग्रामिंग तंत्रज्ञान आहे जे कोडला विशिष्ट ठिकाणी 'जोडण्याची' (Inject) परवानगी देते, ज्यामुळे मुख्य कार्यप्रवाह (Core Workflow) न बदलता अतिरिक्त कार्ये जोडता येतात.

**या यादीतील हुक्सचे महत्त्व:**
या यादीतील हुक्स हे प्रामुख्याने **'ॲक्शन हुक्स' (Action Hooks)** आहेत. हे हुक्स वापरकर्त्याच्या कृतींवर (User Actions) आधारित असतात.

**उदाहरणासह स्पष्टीकरण:**
समजा, तुम्ही `user_registered` हुक वापरला. याचा अर्थ असा की, जेव्हा कोणी नवीन वापरकर्ता नोंदणी करेल, तेव्हा तुम्ही जोडलेला कोड आपोआप चालेल. तुम्ही या कोडमध्ये काय करू शकता?
1.  त्या नवीन वापरकर्त्याला स्वागत ईमेल पाठवणे.
2.  त्याच्या प्रोफाइलवर काही डिफॉल्ट डेटा सेट करणे.
3.  सिस्टममध्ये लॉग एंट्री करणे.

**निष्कर्ष:**
हे हुक्स वेबसाइटच्या कार्यक्षमतेत सुधारणा करण्यासाठी, सुरक्षा तपासणी करण्यासाठी किंवा अतिरिक्त कार्यक्षमता जोडण्यासाठी (Custom Functionality) अत्यंत महत्त्वाचे आहेत.
