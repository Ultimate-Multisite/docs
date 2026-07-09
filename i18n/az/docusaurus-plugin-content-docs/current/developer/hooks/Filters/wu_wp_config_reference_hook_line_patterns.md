---
id: wu_wp_config_reference_hook_line_patterns
title: Filter - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns {#filter-wuwpconfigreferencehooklinepatterns}

Sabitlərimizi (constants) harada yerləşdirə biləcəyimizi müəyyən etmək üçün üç naxış (pattern) axtarırıq:

1. `$table_prefix` dəyişəninin tərifini axtarırıq; 2. Daha mürəkkəb `$table_prefix` tərifləri axtarırıq – məsələn, env dəyişənlərindən istifadə edənlər; 3. Əgər bu mövcud deyilsə, 'Happy Publishing' şərhini axtarırıq; 4. Əgər bu da mövcud deyilsə, faylın əvvəlini axtarırıq. Açar (key) naxışı, dəyər (value) isə əlavə ediləcək sətir sayını göstərir. Əgər sətir sayı mənfi olarsa, bu, tapılan sətirdən sonra yox, əvvəl yazılmasını təmin edir.

### Source {#source}

Defined in [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) at line 143
