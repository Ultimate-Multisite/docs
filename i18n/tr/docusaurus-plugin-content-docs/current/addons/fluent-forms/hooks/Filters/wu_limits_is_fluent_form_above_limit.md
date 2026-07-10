---
id: wu_limits_is_fluent_form_above_limit
title: Filtre - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit {#filter-wulimitsisfluentformabovelimit}

Verilen form türünün bu planda kullanılıp kullanılamayacağını kontrol eder. Plugin geliştiricilerinin bu dönüş değerini filtrelemesine olanak tanır.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $value | `bool` | Form türü limitin üzerinde mi yoksa değil mi? |
| $form_type | `string` | Kontrol edilen form türü |
| $form_count | `int` | Mevcut form sayısı |
| $quota | `int` | İzin verilen kota |

### Versiyon {#since}

- 1.0.0
### Kaynak {#source}

- Defined in [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) at line 56
- Defined in [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) at line 89
