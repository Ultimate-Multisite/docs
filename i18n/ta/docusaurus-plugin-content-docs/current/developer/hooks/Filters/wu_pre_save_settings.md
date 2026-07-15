---
id: wu_pre_save_settings
title: Filter - wu_pre_save_settings
sidebar_label: wu_pre_save_settings
_i18n_hash: 9fe0dc9f71e2d9da3869f40ab53dc453
---
# Filter: wu_pre_save_settings

Ultimate Multisite மூலம் அமைப்புகளை (settings) சேமிப்பதற்கு முன் வடிகட்ட (filter) டெவலப்பர்களுக்கு இது அனுமதிக்கிறது.

## அளவுருக்கள் (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $settings | `array` | சேமிக்கப்பட வேண்டிய அமைப்புகள். |
| $settings_to_save | `array` | சேர்க்கப்பட வேண்டிய புதிய அமைப்புகள். |
| $saved_settings | `array` | தற்போது சேமிக்கப்பட்ட அமைப்புகள். |

### தொடக்கம் (Since) {#since}

- 2.0.18
### ஆதாரம் (Source) {#source}

Defined in [`inc/class-settings.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-settings.php#L296) at line 296
