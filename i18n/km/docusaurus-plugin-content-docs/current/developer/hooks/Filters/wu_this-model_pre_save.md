---
id: wu_this-model_pre_save
title: 'តម្រង - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save {#filter-wuthis-modelpresave}

ត្រងទិន្នន័យវត្ថុ មុនពេលវាត្រូវបានរក្សាទុកទៅក្នុងមូលដ្ឋានទិន្នន័យ។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $data | `array` | ទិន្នន័យវត្ថុដែលនឹងត្រូវបានរក្សាទុក ជាទម្រង់ serialized។ |
| $data_unserialized | `array` | ទិន្នន័យវត្ថុដែលនឹងត្រូវបានរក្សាទុក។ |
| $this | `\Base_Model` | instance របស់វត្ថុ។ |

### ចាប់ពី {#since}

- 2.0.0
### ប្រភព {#source}

បានកំណត់នៅក្នុង [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) នៅបន្ទាត់ 570
