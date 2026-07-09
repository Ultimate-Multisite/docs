---
id: wu_this-model_meta_pre_save
title: 'فلټر - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

د ډاټا meta مخکې له دې فلټر کوي چې serialize شي او په ډیټابېس کې زېرمه شي.

## پارامترونه

| نوم | ډول | تشریح |
|------|------|-------------|
| $meta | `array` | هغه meta ډاټا چې زېرمه کېږي، unserializedserialized. |
| $data_unserialized | `array` | د ابجېکټ ډاټا چې زېرمه کېږي. |
| $this | `\Base_Model` | د ابجېکټ instance. |

### له نسخې راهیسې

- 2.0.0
### سرچینه

په [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) کې په 534 کرښه تعریف شوی.
