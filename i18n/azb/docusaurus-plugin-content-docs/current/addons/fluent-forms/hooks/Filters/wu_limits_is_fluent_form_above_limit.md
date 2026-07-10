---
id: wu_limits_is_fluent_form_above_limit
title: Filter - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit {#filter-wulimitsisfluentformabovelimit}

Verilen bir form tipinin bu plan için kullanılıp kullanılamayacağını kontrol eder. Plugin geliştiricilerinin dönüş değerini filtrelemesine olanak tanır.

## Parametreler {#parameters}

| Name | Type | Açıklama |
|------|------|-------------|
| $value | `bool` | Form tipi limit aşımında mı, değil mi? |
| $form_type | `string` | Kontrol edilen form tipi. |
| $form_count | `int` | Mevcut form sayısı. |
| $quota | `int` | İzin verilen kota. |

### Kullanılmaya Başladığı {#since}

- 1.0.0
### Kaynak {#source}

- Defined in [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) at line 56
- Defined in [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) at line 89
