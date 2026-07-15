---
id: wu_this-model_post_save
title: 'Գործողություն - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save

Գործարկվում է, երբ օբյեկտը պահվում է տվյալների բազայում։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $data | `array` | Օբյեկտի տվյալները, որոնք կպահվեն։ |
| $this | `\Base_Model` | Օբյեկտի instance-ը։ |
| $new | `bool` | True, եթե օբյեկտը նոր է։ |

### Սկսած {#since}

- 2.0.0
### Աղբյուր {#source}

- Սահմանված է [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624)-ում՝ 624-րդ տողում
- Սահմանված է [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754)-ում՝ 1754-րդ տողում
