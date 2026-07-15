---
id: wu_model_post_save
title: عمل - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# عمل: wu_model_post_save

جڏهن ڪو آبجيڪٽ database ۾ محفوظ ڪيو وڃي ٿو، تڏهن هلندو آهي.

## پيراميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $model | `string` | ماڊل جو slug. |
| $data | `array` | آبجيڪٽ جو ڊيٽا جيڪو محفوظ ڪيو ويندو، serialized. |
| $data_unserialized | `array` | آبجيڪٽ جو ڊيٽا جيڪو محفوظ ڪيو ويندو. |
| $this | `\Base_Model` | آبجيڪٽ جو instance. |

### کان وٺي {#since}

- 2.0.0
### ذريعو {#source}

- [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) ۾ لائن 613 تي بيان ٿيل
- [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) ۾ لائن 1743 تي بيان ٿيل
