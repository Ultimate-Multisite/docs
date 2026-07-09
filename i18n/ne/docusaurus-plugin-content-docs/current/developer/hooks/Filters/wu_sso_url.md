---
id: wu_sso_url
title: फिल्टर - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# फिल्टर: wu_sso_url

क्रस-डोमेन ग्राहक कार्यहरूका लागि फर्काइनुअघि उत्पन्न गरिएका SSO URLहरू फिल्टर गर्छ।

कुनै एकीकरणले sovereign-tenant SSO linkमा विश्वसनीय सन्दर्भ थप्न वा Ultimate Multisiteको token validation जोगाइराख्दै broker URL प्रतिस्थापन गर्न आवश्यक हुँदा यो फिल्टर प्रयोग गर्नुहोस्।

## प्यारामिटरहरू

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $sso_url | `string` | उत्पन्न गरिएको SSO URL। |
| $user | `WP_User` | SSO भ्रमणद्वारा प्रमाणीकरण गरिने प्रयोगकर्ता। |
| $site_id | `int` | भ्रमणका लागि लक्षित site ID। |
| $redirect_to | `string` | सफल SSO validation पछि गन्तव्य URL। |

### देखि

- 2.13.0

### स्रोत

`inc/sso/class-sso.php` मा परिभाषित।


## फर्काइने मान

फिल्टर गरिएको SSO URL।
