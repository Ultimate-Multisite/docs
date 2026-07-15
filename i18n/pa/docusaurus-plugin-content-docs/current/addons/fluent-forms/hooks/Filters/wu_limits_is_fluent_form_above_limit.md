---
id: wu_limits_is_fluent_form_above_limit
title: Filter - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit

ਜਾਂਚ ਕਰਦਾ ਹੈ ਕਿ ਕੀ ਕੋਈ ਦਿੱਤੀ ਗਈ ਫਾਰਮ ਕਿਸਮ ਇਸ ਪਲਾਨ 'ਤੇ允许 ਹੈ। ਪਲੱਗਇਨ ਡਿਵੈਲਪਰਜ਼ ਨੂੰ ਰਿਟਰਨ ਵ্যালੂ ਨੂੰ ਫਿਲਟਰ ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦਾ ਹੈ।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $value | `bool` | ਇਹ ਦੱਸਦਾ ਹੈ ਕਿ ਕੀ ਫਾਰਮ ਕਿਸਮ ਸੀਮਾ ਤੋਂ ਵੱਧ ਹੈ ਜਾਂ ਨਹੀਂ। |
| $form_type | `string` | ਜਿਸ ਫਾਰਮ ਕਿਸਮ ਦੀ ਜਾਂਚ ਕੀਤੀ ਜਾ ਰਹੀ ਹੈ। |
| $form_count | `int` | ਮੌਜੂਦਾ ਫਾਰਮ ਗਿਣਤੀ। |
| $quota | `int` |允许 ਕੀਤੀ ਗਈ ਕੋਟਾ। |

### Since {#since}

- 1.0.0
### Source {#source}

- Defined in [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) at line 56
- Defined in [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) at line 89
