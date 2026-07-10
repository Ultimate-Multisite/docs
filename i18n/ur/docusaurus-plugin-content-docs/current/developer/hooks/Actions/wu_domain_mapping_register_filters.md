---
id: wu_domain_mapping_register_filters
title: wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

کچھ پلگ انز (plugins) ایسا URL محفوظ کر سکتے ہیں جو میپنگ (mapping) فعال ہونے سے پہلے کا تھا، یا وہ URL کو اس طرح بنا سکتے ہیں جو اوپر دیے گئے filters میں شامل نہیں ہے۔

ایسی صورتحال میں، ہم مزید filters شامل کرنا چاہتے ہیں۔ جو دوسرا پیرامیٹر پاس کیا جاتا ہے وہ `mangle_url` callback ہوتا ہے۔ ہم اس filter کو براہ راست استعمال کرنے کی خلاف ورزی کرتے ہیں۔ اس کے بجائے، `Domain_Mapping::apply_mapping_to_url` method کا استعمال کریں۔

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | میگل (mangle) کرنے والا callable۔ |
| $domain_mapper | `self` | یہ object۔ |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) میں لائن 530 پر ڈیفائن کیا گیا ہے۔
