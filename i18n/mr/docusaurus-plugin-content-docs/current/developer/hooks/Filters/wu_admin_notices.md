---
id: wu_admin_notices
title: फिल्टर - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Filter: wu_admin_notices {#filter-wuadminnotices}

Ultimate Multisite ने जोडलेल्या ॲडमिन सूचनांना (admin notices) फिल्टर करण्याची क्षमता डेव्हलपर्सना देते.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $notices | `array` | त्या विशिष्ट पॅनेलसाठी असलेल्या सूचनांची यादी. |
| $all_notices | `array` | पॅनेलनुसार विभागलेल्या (segregated) जोडलेल्या सूचनांची यादी. |
| $panel | `string` | ज्या पॅनेलच्या सूचना मिळवायच्या आहेत. |
| $filter | `string` | जर बंद करता येणाऱ्या सूचना फिल्टर केल्या गेल्या असतील. |
| $dismissed_messages | `array` | बंद केलेल्या सूचनांच्या की (key) ची यादी. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) मध्ये लाइन 121 वर परिभाषित केले आहे.


## Returns {#returns}
