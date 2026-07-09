---
id: wu_wp_config_reference_hook_line_patterns
title: Filter - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns {#filter-wuwpconfigreferencehooklinepatterns}

ನಾವು ನಮ್ಮ ಕಾನ್ಸ್ಟಂಟ್‌ಗಳನ್ನು ಎಲ್ಲಿ ಸೇರಿಸಬಹುದು ಎಂದು ಕಂಡುಹಿಡಿಯಲು ಮೂರು ಮಾದರಿಗಳನ್ನು (patterns) ಪರಿಶೀಲಿಸುತ್ತೇವೆ:

1. ನಾವು `$table_prefix` ವೇರಿಯಬಲ್ ವ್ಯಾಖ್ಯಾನವನ್ನು ಹುಡುಕುತ್ತೇವೆ; 2. ನಾವು ಹೆಚ್ಚು ಸಂಕೀರ್ಣವಾದ `$table_prefix` ವ್ಯಾಖ್ಯಾನಗಳನ್ನು ಹುಡುಕುತ್ತೇವೆ - ಉದಾಹರಣೆಗೆ, ಇವುಗಳು env ವೇರಿಯಬಲ್‌ಗಳನ್ನು ಬಳಸುವಂತಹವು; 3. ಅದು ಲಭ್ಯವಿಲ್ಲದಿದ್ದರೆ, ನಾವು 'Happy Publishing' ಕಾಮೆಂಟ್ ಅನ್ನು ನೋಡುತ್ತೇವೆ; 4. ಅದು ಕೂಡ ಲಭ್ಯವಿಲ್ಲದಿದ್ದರೆ, ನಾವು ಫೈಲ್‌ನ ಆರಂಭವನ್ನು ನೋಡುತ್ತೇವೆ. ಇಲ್ಲಿ ಕೀ (key) ಎಂದರೆ ಮಾದರಿ (pattern) ಮತ್ತು ವ್ಯಾಲ್ಯೂ (value) ಎಂದರೆ ಸೇರಿಸಬೇಕಾದ ಸಾಲುಗಳ ಸಂಖ್ಯೆ. ಒಂದು ನಕಾರಾತ್ಮಕ ಸಾಲುಗಳ ಸಂಖ್ಯೆಯನ್ನು ಬಳಸಿದರೆ, ಆ ಸಾಲಿನ ನಂತರ ಬರೆಯುವ ಬದಲು, ಅದಕ್ಕೂ ಮೊದಲು ಬರೆಯಬಹುದು.

### Source {#source}

[`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) ನಲ್ಲಿ 143ನೇ ಸಾಲಿನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ
