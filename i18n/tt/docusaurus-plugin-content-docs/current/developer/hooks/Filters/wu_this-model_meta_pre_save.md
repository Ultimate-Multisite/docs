---
id: wu_this-model_meta_pre_save
title: 'Фильтр - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save {#filter-wuthis-modelmetapresave}

Мәгълүматлар базасына саклау өчен сериализацияләнгәнче, data meta мәгълүматларын фильтрлый.

## Параметрлар {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta | `array` | Сакланачак meta мәгълүматлары, unserializedserialized. |
| $data_unserialized | `array` | Сакланачак объект мәгълүматлары. |
| $this | `\Base_Model` | Объект инстансы. |

### Версиядән башлап {#since}

- 2.0.0
### Чыганак {#source}

[`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) эчендә 534 нче юлда билгеләнгән
