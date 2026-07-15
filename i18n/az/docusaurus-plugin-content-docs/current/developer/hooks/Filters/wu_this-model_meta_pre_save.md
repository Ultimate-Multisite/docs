---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

Bu filter, meta məlumatları verilənlər bazasına yazılmadan əvvəl, serializasiya edilməzdən əvvəl filtrləyir.

## Parametrlər {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta | `array` | Yaddaşa yazılacaq, unserializasiya edilmiş meta məlumatı. |
| $data_unserialized | `array` | Yaddaşa yazılacaq obyekt məlumatı. |
| $this | `\Base_Model` | Obyekt nümunəsi. |

### Nə vaxtdan {#since}

- 2.0.0
### Mənbə {#source}

[`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) faylının 534-cü sətirində təyin edilmişdir.
