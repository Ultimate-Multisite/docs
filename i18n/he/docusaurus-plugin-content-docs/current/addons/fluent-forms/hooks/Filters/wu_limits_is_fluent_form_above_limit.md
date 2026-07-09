---
id: wu_limits_is_fluent_form_above_limit
title: מסנן - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# Filter: wu_limits_is_fluent_form_above_limit {#filter-wulimitsisfluentformabovelimit}

בודק אם סוג טופס נתון מותר בתכנית זו. מאפשר למפתחי תוספים לסנן את ערך ההחזרה.

## פרמטרים {#parameters}

| Name | Type | תיאור |
|------|------|-------------|
| $value | `bool` | אם סוג הטופס עולה על המגבלה או לא |
| $form_type | `string` | סוג הטופס הנבדק |
| $form_count | `int` | ספירת טפסים נוכחית |
| $quota | `int` | הקוטה המותרת |

### מאז {#since}

- 1.0.0
### מקור {#source}

- מוגדר ב[`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) בשורה 56
- מוגדר ב[`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) בשורה 89
