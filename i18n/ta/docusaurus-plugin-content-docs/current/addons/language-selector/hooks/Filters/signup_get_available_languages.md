---
id: signup_get_available_languages
title: Filter - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages {#filter-signupgetavailablelanguages}

முன்-பக்க (front-end) தளத்தில் সাইட் பதிவு செய்யும் போது கிடைக்கும் மொழிகளின் பட்டியலை இது வடிகட்டுகிறது.

இந்த ஹூக்கிற்கு (hook) ஒரு காலியான அரே (empty array) அனுப்பினால், பதிவு படிவத்தில் (signup form) உள்ள அமைப்பின் வெளியீடு முடக்கப்படும். மேலும், தளத்தை உருவாக்கும்போது இயல்புநிலை மொழி (default language) பயன்படுத்தப்படும். ஏற்கனவே நிறுவப்படாத மொழிகள் நீக்கப்படும்.

## அளவுருக்கள் (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $available_languages | `array` | கிடைக்கும் மொழிகள். |

### எப்போது இருந்து (Since) {#since}

- 4.4.0
### ஆதாரம் (Source) {#source}

[`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) என்ற கோப்பில் 117 வரியில் வரையறுக்கப்பட்டுள்ளது.
