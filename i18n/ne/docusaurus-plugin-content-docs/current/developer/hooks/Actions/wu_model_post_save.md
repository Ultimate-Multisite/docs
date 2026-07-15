---
id: wu_model_post_save
title: कार्य - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save

कुनै वस्तु डेटाबेसमा भण्डारण भएपछि चल्छ।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | मोडेल slug। |
| $data | `array` | भण्डारण गरिने वस्तुको डेटा, क्रमबद्ध गरिएको। |
| $data_unserialized | `array` | भण्डारण गरिने वस्तुको डेटा। |
| $this | `\Base_Model` | वस्तु instance। |

### Since {#since}

- 2.0.0
### Source {#source}

- [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) मा पङ्क्ति 613 मा परिभाषित
- [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) मा पङ्क्ति 1743 मा परिभाषित
