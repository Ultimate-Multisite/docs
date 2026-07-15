---
id: wu_model_post_save
title: សកម្មភាព - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save

ដំណើរការបន្ទាប់ពីវត្ថុមួយត្រូវបានរក្សាទុកទៅក្នុងមូលដ្ឋានទិន្នន័យ។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | slug របស់ម៉ូដែល។ |
| $data | `array` | ទិន្នន័យវត្ថុដែលនឹងត្រូវបានរក្សាទុក ដោយបាន serialized។ |
| $data_unserialized | `array` | ទិន្នន័យវត្ថុដែលនឹងត្រូវបានរក្សាទុក។ |
| $this | `\Base_Model` | instance របស់វត្ថុ។ |

### ចាប់ពីកំណែ {#since}

- 2.0.0
### ប្រភព {#source}

- កំណត់នៅក្នុង [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) នៅបន្ទាត់ 613
- កំណត់នៅក្នុង [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) នៅបន្ទាត់ 1743
