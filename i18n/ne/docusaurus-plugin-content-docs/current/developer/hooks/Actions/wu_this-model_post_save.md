---
id: wu_this-model_post_save
title: 'कार्य - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save {#action-wuthis-modelpostsave}

कुनै वस्तु डेटाबेसमा भण्डारण भएपछि चल्छ।

## प्यारामिटरहरू {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $data | `array` | भण्डारण गरिने वस्तुको डेटा। |
| $this | `\Base_Model` | वस्तुको इन्स्ट्यान्स। |
| $new | `bool` | वस्तु नयाँ छ भने True। |

### देखि {#since}

- 2.0.0
### स्रोत {#source}

- [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) मा पङ्क्ति 624 मा परिभाषित
- [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) मा पङ्क्ति 1754 मा परिभाषित
