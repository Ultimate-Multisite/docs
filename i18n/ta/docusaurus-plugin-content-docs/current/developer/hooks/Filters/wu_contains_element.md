---
id: wu_contains_element
title: Filter - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# Filter: wu_contains_element {#filter-wucontainselement}

ஆரம்ப தேடலின் முடிவுகளை மாற்ற டெவலப்பர்களுக்கு இது அனுமதிக்கிறது.

இது மூன்றாம் தரப்பு பில்டர்கள் (third-party builders) போன்றவற்றுக்கு மிகவும் பயனுள்ளதாக இருக்கும்.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $contains_elements | `bool` | அந்த உறுப்பு (element) உள்ளடக்கத்தில் (content) இருந்தால். |
| $content | `string` | பரிசோதிக்கப்படும் உள்ளடக்கம். |
| $element | `self` | தற்போதைய உறுப்பு. |
| $post | `null\|\WP_Post` | சரிபார்க்க வேண்டிய பதிவு (post). |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) என்ற இடத்தில், 534 வரியில் வரையறுக்கப்பட்டுள்ளது.
