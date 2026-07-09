---
id: wu_site_created
title: عمل - wu_site_created
sidebar_label: wu_site_created
_i18n_hash: 0f7bc337be7a1f9c47c1e442fe04b9ae
---
# Action: wu_site_created {#action-wusitecreated}

یہ عمل اس وقت ٹرگر ہوتا ہے جب کوئی سائٹ پہلی بار بنائی جاتی ہے۔

اگر یہ کسی ٹیمپلیٹ سے نقل (duplicate) کی جائے تو یہ نہیں چلے گا۔

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | وہ آبجیکٹ ڈیٹا جو محفوظ کیا جائے گا۔ |
| $site | `\Site` | آبجیکٹ کا انسٹنس (object instance)۔ |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1652) at line 1652
