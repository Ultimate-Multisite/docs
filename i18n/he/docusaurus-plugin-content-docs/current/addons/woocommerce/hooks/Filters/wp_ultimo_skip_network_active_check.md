---
id: wp_ultimo_skip_network_active_check
title: פילטר - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

מאפשר למפתחים לבטל את בדיקת הפעלת הרשת.

זה שימושי במיוחד כשמשתמשים בהגדרות מותאמות אישית המבוססות על Composer, כמו Bedrock, למשל, במקרים שבהם השימוש ב-plugins כ-mu-plugins הוא הדרך המקובלת.

## פרמטרים {#parameters}

| שם | סוג | תיאור |
|------|------|-------------|
| $skip_network_activation_check | `bool` | אם עלינו לדלג על הבדיקה או לא, ברירת המחדל היא false. |

### מאז {#since}

- 2.0.0
### מקור {#source}

מוגדר ב-[inc/class-requirements.php](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) בשורה 272


## מחזיר {#returns}
`true` אם ברצונך לדלג על הבדיקה, ו-`false` אחרת.
