---
id: wu_this-model_meta_pre_save
title: 'فلٽر - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save {#filter-wuthis-modelmetapresave}

ڊيٽا meta کي فلٽر ڪري ٿو، ان کان اڳ جو اهو database ۾ محفوظ ڪرڻ لاءِ serialized ڪيو وڃي.

## پيراميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $meta | `array` | اهو meta data جيڪو محفوظ ڪيو ويندو، unserializedserialized. |
| $data_unserialized | `array` | اهو object data جيڪو محفوظ ڪيو ويندو. |
| $this | `\Base_Model` | object instance. |

### کان وٺي {#since}

- 2.0.0
### ذريعو {#source}

[`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) ۾ line 534 تي بيان ٿيل آهي.
