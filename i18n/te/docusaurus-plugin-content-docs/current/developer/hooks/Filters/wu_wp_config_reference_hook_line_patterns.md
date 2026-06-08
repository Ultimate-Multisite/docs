---
id: wu_wp_config_reference_hook_line_patterns
title: Filter - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns

మనం మన constants ని ఎక్కడ జోడించాలో తెలుసుకోవడానికి మూడు patterns కోసం చెక్ చేస్తాము:

1. మనం `$table_prefix` variable నిర్వచనాన్ని కోసం వెతుకుతాము; 2. మనం మరింత సంక్లిష్టమైన `$table_prefix` నిర్వచనాల కోసం వెతుకుతాము - ఉదాహరణకు, ఇవి env variables ని ఉపయోగించేవి; 3. అది అందుబాటులో లేకపోతే, మనం 'Happy Publishing' comment కోసం చూస్తాము; 4. అది కూడా అందుబాటులో లేకపోతే, మనం ఫైల్ ప్రారంభాన్ని కోసం చూస్తాము. ఇక్కడ key అనేది pattern ని సూచిస్తుంది మరియు value అనేది ఎన్ని lines జోడించాలో సూచిస్తుంది. ఒక negative number of lines ని, దొరికిన line తర్వాత కాకుండా, దానికి ముందు రాయడానికి పంపవచ్చు.

### Source

[`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) లోని 143వ లైన్‌లో నిర్వచించబడింది
