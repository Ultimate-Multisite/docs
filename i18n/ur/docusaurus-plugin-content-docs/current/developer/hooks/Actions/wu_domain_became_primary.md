---
id: wu_domain_became_primary
title: عمل - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

یہ عمل اس وقت فعال ہوتا ہے جب کوئی ڈومین کسی سائٹ کے لیے پرائمری ڈومین بن جاتا ہے۔

یہ ایکشن اس وقت ٹرگر ہوتا ہے جب کسی ڈومین کے `primary_domain` فلگ کو `true` پر سیٹ کیا جاتا ہے، چاہے وہ ایک نیا پرائمری ڈومین بنانا ہو یا کسی موجودہ ڈومین کو پرائمری بنانا ہو۔

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | وہ ڈومین جو پرائمری بن گیا۔ |
| $blog_id | `int` | متاثرہ سائٹ کا بلاگ ID۔ |
| $was_new | `bool` | کیا یہ ایک نیا بنایا گیا ڈومین ہے۔ |

### Since

- 2.0.0
### Source

Defined in [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) at line 560
