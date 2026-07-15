---
id: wu_domain_became_primary
title: פעולה - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

מופעל כאשר דומיין הופך להיות הדומיין הראשי של אתר.

פעולה זו מופעלת כאשר הדגל `primary_domain` של דומיין מוגדר ל-true, בין אם מדובר ביצירת דומיין ראשי חדש או בעדכון דומיין קיים כדי להפוך אותו לראשי.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | הדומיין שהפך להיות הראשי. |
| $blog_id | `int` | מזהה הבלוג של האתר המושפע. |
| $was_new | `bool` | האם זהו דומיין שנוצר לאחרונה. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) at line 560
