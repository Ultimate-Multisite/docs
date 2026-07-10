---
id: wu_wp_config_reference_hook_line_patterns
title: פילטר - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns {#filter-wuwpconfigreferencehooklinepatterns}

אנחנו בודקים מספר תבניות כדי להבין היכן נוכל להוסיף את הקבועים שלנו:

1. אנחנו מחפשים את הגדרה של המשתנה $table_prefix;
2. אנחנו מחפשים הגדרות מורכבות יותר של $table_prefix – אלה המשתמשות במשתני סביבה, לדוגמה;
3. אם זה לא זמין, אנחנו מחפשים את ההערה 'Happy Publishing';
4. אם גם זה לא זמין, אנחנו מחפשים מהתחלת הקובץ. המפתח מייצג את התבנית והערך הוא מספר השורות שיש להוסיף. ניתן להעביר מספר שלילי כדי לכתוב לפני השורה שנמצאה, במקום אחריה.

### Source {#source}

מוגדר ב[`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) בשורה 143
