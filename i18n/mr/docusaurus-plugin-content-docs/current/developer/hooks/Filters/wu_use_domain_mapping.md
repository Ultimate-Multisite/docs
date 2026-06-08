---
id: wu_use_domain_mapping
title: गाळणी - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# फिल्टर: wu_use_domain_mapping

मॅपिंग वापरायचे की नाही हे ठरवणे

सामान्यतः, तुम्हाला फक्त सक्रिय (active) मॅपिंग्सच वापरायला द्यावी लागतात. मात्र, जर तुम्हाला अधिक प्रगत लॉजिक वापरायचे असेल, किंवा गैर-सक्रिय (non-active) डोमेन मॅपिंगलाही मॅप करायला द्यायचे असेल, तर तुम्ही इथे फिल्टर करू शकता.

## पॅरामीटर्स

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | मॅपिंग सक्रिय (active) मानले पाहिजे का? |
| $mapping | `\Domain` | जे मॅपिंग आपण तपासत आहोत |
| $domain | `string` |  |

### स्रोत

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) मध्ये लाइन ३९१ वर परिभाषित केले आहे.
