---
id: wu_model_post_save
title: אַקציע - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save {#action-wumodelpostsave}

ווערט אויסגעפֿירט נאָך דעם ווי אַן אָביעקט ווערט אויפֿגעהיט אין דער דאַטאַבאַזע.

## פּאַראַמעטערס {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | דער model slug. |
| $data | `array` | די אָביעקט־דאַטן וואָס וועלן ווערן אויפֿגעהיט, serialized. |
| $data_unserialized | `array` | די אָביעקט־דאַטן וואָס וועלן ווערן אויפֿגעהיט. |
| $this | `\Base_Model` | די אָביעקט־אינסטאַנץ. |

### זינט {#since}

- 2.0.0
### מקור {#source}

- דעפֿינירט אין [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) אויף שורה 613
- דעפֿינירט אין [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) אויף שורה 1743
