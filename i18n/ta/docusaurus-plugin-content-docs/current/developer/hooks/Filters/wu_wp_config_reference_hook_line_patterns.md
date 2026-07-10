---
id: wu_wp_config_reference_hook_line_patterns
title: Filter - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns {#filter-wuwpconfigreferencehooklinepatterns}

எங்களுடைய constants-களை எங்கு சேர்க்க முடியும் என்பதைக் கண்டறிய, நாங்கள் மூன்று வடிவங்களை (patterns) சரிபார்க்கிறோம்:

1. `$table_prefix` என்ற variable வரையறையை நாங்கள் தேடுகிறோம்; 2. மேலும் சிக்கலான `$table_prefix` வரையறைகளை நாங்கள் தேடுகிறோம் - உதாரணமாக, env variables பயன்படுத்தும் வரையறைகள்; 3. அது கிடைக்கவில்லை என்றால், 'Happy Publishing' என்ற comment-ஐ நாங்கள் பார்க்கிறோம்; 4. அதுவும் கிடைக்கவில்லை என்றால், கோப்பின் தொடக்கத்தை நாங்கள் பார்க்கிறோம். இங்குள்ள key என்பது வடிவத்தைக் (pattern) குறிக்கிறது, மற்றும் value என்பது சேர்க்கப்பட வேண்டிய வரிகளின் எண்ணிக்கையைக் குறிக்கிறது. ஒரு negative number-ஐ வரிகளின் எண்ணிக்கையாக அனுப்பினால், கண்டுபிடிக்கப்பட்ட வரியின் *பிறகு* எழுதுவதற்குப் பதிலாக, அதற்கு *முன்பு* எழுத முடியும்.

### Source {#source}

[`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) என்ற இடத்தில், 143-வது வரியில் வரையறுக்கப்பட்டுள்ளது.
