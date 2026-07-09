---
id: wu_domain_became_primary
title: אַקציע - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# אקציע: wu_domain_became_primary {#action-wudomainbecameprimary}

ווערט אויסגעלייזט ווען אַ דאָמיין ווערט דער הויפּט־דאָמיין פֿאַר אַ וועבזײַטל.

די אקציע ווערט אויסגעלייזט ווען אַ דאָמיינס primary_domain פֿאָן ווערט באַשטימט אויף true, אָדער בײַם שאַפֿן אַ נײַעם הויפּט־דאָמיין אָדער בײַם דערהײַנטיקן אַן עקזיסטירנדיקן דאָמיין צו ווערן הויפּט.

## פּאַראַמעטערס {#parameters}

| נאָמען | טיפּ | באַשרײַבונג |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | דער דאָמיין וואָס איז געוואָרן הויפּט. |
| $blog_id | `int` | דער בלאָג־ID פֿון דעם באַטראָפֿענעם וועבזײַטל. |
| $was_new | `bool` | צי דאָס איז אַ נײַ־געשאַפֿענער דאָמיין. |

### זינט {#since}

- 2.0.0
### מקור {#source}

דעפֿינירט אין [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) בײַ שורה 560
