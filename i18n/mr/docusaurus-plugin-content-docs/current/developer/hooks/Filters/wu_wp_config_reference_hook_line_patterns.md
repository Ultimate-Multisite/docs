---
id: wu_wp_config_reference_hook_line_patterns
title: Filter - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns

आम्ही आमच्या constants कुठे इंजेक्ट (inject) करू शकतो हे शोधताना तीन पॅटर्न तपासतो:

१. आम्ही `$table_prefix` व्हेरिएबलची व्याख्या (definition) शोधतो; २. आम्ही अधिक जटिल `$table_prefix` व्याख्या शोधतो - जसे की जे env variables वापरतात; ३. जर ते उपलब्ध नसेल, तर आम्ही 'Happy Publishing' हा comment शोधतो; ४. जर तो देखील उपलब्ध नसेल, तर आम्ही फाईलच्या सुरुवातीचा शोध घेतो. येथे key म्हणजे पॅटर्न आणि value म्हणजे किती ओळी (lines) जोडायच्या. जर नकारात्मक संख्या (negative number) दिली, तर ती ओळ सापडल्यानंतर न जोडता, त्यापूर्वी लिहिण्यासाठी वापरली जाते.

### Source

[`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) मध्ये लाइन १४३ वर परिभाषित केले आहे.
