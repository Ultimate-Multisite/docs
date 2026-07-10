---
id: wu_checkout_form_base_domains
title: מסנן - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# מסנן: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

מסנן דומייני בסיס משותפים של טופס התשלום שלא אמורים להפוך לרשומות דומיין ממופה.

השתמשו במסנן הזה כאשר אינטגרציה מספקת דומייני בסיס נוספים עבור שדות **URL של האתר** בטופס התשלום. דומיינים שמוחזרים על ידי מסנן זה מטופלים כמארחי רישום משותפים במקום כדומיינים מותאמים אישית לכל אתר.

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $domains | `array` | דומייני בסיס משותפים שנאספו מהגדרות טופס התשלום. |

### מאז {#since}

- 2.13.0

### מקור {#source}

מוגדר ב־`inc/functions/domain.php`.


## מחזיר {#returns}

מערך של דומייני בסיס מנורמלים של טופס התשלום.
