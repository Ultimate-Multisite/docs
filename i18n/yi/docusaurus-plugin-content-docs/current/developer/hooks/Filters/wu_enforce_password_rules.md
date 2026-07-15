---
id: wu_enforce_password_rules
title: פילטער - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# פילטער: wu_enforce_password_rules

פילטערט צי צו דורכפירן נאָך פּאַראָל־כללים.

ווען true, דורכפירט עס מינימום־לענג און צייכן־פאָדערונגען. אויטאָמאַטיש אַקטיווירט פֿאַר דער "Super Strong" באַשטעלונג אָדער ווען Defender Pro'ס Strong Password פֿעיִקייט איז אַקטיוו.

## פּאַראַמעטערס {#parameters}

| נאָמען | טיפּ | באַשרײַבונג |
|------|------|-------------|
| $enforce_rules | `bool` | צי צו דורכפירן נאָך כללים. |
| $strength_setting | `string` | דער אַדמין־באַשטעלונג־ווערט. |
| $defender_active | `bool` | צי Defender Pro Strong Password איז אַקטיוו. |

### זינט {#since}

- 2.4.0
### מקור {#source}

דעפֿינירט אין [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) אויף שורה 531
