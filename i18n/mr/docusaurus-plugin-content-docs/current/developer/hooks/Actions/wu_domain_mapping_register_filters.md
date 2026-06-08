---
id: wu_domain_mapping_register_filters
title: Action - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

काही प्लगइन्स (plugins) मॅपिंग सक्रिय होण्यापूर्वीचे URL सेव्ह करतात किंवा URL वेगळ्या पद्धतीने तयार करतात, जे वरील फिल्टर्समध्ये समाविष्ट नाही.

अशा प्रकरणांमध्ये, आपल्याला अतिरिक्त फिल्टर्स जोडण्याची आवश्यकता असते. येथे पास केलेला दुसरा पॅरामीटर `mangle_url` कॉल बॅक (callback) असतो. आम्ही या फिल्टर्सचा थेट वापर करण्याचा सल्ला देत नाही. त्याऐवजी, `Domain_Mapping::apply_mapping_to_url` मेथडचा वापर करा.

## पॅरामीटर्स (Parameters)

| नाव (Name) | प्रकार (Type) | वर्णन (Description) |
|------|------|-------------|
| $mangle_url | `callable` | मॅंगल (mangle) करण्यासाठी लागणारे कॉल बॅक. |
| $domain_mapper | `self` | हे ऑब्जेक्ट (object). |

### पासून (Since)

- 2.0.0
### स्रोत (Source)

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) मध्ये लाइन ५३० वर परिभाषित केले आहे.
