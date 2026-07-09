---
id: wu_this-model_meta_pre_save
title: 'Sía - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

Síar meta-gögnin áður en þau eru raðgerð til að vera geymd í gagnagrunninum.

## Færibreytur

| Nafn | Tegund | Lýsing |
|------|------|-------------|
| $meta | `array` | Meta-gögnin sem verða geymd, unserializedserialized. |
| $data_unserialized | `array` | Hlutargögnin sem verða geymd. |
| $this | `\Base_Model` | Tilvik hlutarins. |

### Frá útgáfu

- 2.0.0
### Uppruni

Skilgreint í [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) í línu 534
