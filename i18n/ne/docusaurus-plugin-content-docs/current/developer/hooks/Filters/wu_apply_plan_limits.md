---
id: wu_apply_plan_limits
title: फिल्टर - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits

plugin विकासकर्ताहरूलाई सीमाहरू short-circuit गर्न अनुमति दिनुहोस्।

तपाईंले यो filter कुनै पनि सीमा सुरु हुनुअघि मनमानी code चलाउन प्रयोग गर्न सक्नुहुन्छ। यदि तपाईंको filter ले कुनै पनि truthy मान फर्काउँछ भने, प्रक्रिया अगाडि बढ्नेछ; यदि यसले कुनै पनि falsy मान फर्काउँछ भने, code फर्किनेछ र तलका कुनै पनि hooks चल्ने छैनन्।

### संस्करणदेखि {#since}

- 1.7.0
### स्रोत {#source}

- [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) मा line 52 मा परिभाषित
- [`inc/limits/class-disk-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-disk-space-limits.php#L98) मा line 98 मा परिभाषित
## फर्काउँछ {#returns}
