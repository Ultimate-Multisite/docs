---
id: wu_this-model_meta_pre_save
title: 'តម្រង - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

ច្រោះ meta នៃទិន្នន័យ មុនពេលវាត្រូវបានធ្វើ serialization ដើម្បីរក្សាទុកទៅក្នុងមូលដ្ឋានទិន្នន័យ។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $meta | `array` | ទិន្នន័យ meta ដែលនឹងត្រូវបានរក្សាទុក ដោយមិនបានធ្វើ serialization/បានធ្វើ serialization។ |
| $data_unserialized | `array` | ទិន្នន័យវត្ថុដែលនឹងត្រូវបានរក្សាទុក។ |
| $this | `\Base_Model` | instance របស់វត្ថុ។ |

### ចាប់ពី {#since}

- 2.0.0
### ប្រភព {#source}

បានកំណត់ក្នុង [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) នៅបន្ទាត់ 534
