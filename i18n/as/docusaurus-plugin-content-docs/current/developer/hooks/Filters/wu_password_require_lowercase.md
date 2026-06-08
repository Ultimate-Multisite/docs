---
id: wu_password_require_lowercase
title: Filter - wu_password_require_lowercase
sidebar_label: wu_password_require_lowercase
_i18n_hash: 5afaa63a8b318dc2167edd1bba3e0b27
---
# Filter: wu_password_require_lowercase

প্ৰয়োজনীয়তা অনুসৰি পাছৱৰ্ডত সৰু আখৰ (lowercase letters) চহৰ কৰিব নে নাই, সেইটো ফিল্টাৰ কৰে।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $require | `bool` | সৰু আখৰ চহৰ কৰিব নে নাই। নিয়ম বলবৎ কৰা হৈছে বুলি ক'লে ডিফল্টভাৱে 'সত্য' (true) থাকে। |
| $defender_active | `bool` | Defender Pro Strong Password সক্ৰিয় (active) হৈ আছে নে নাই। |

### Since

- 2.4.0
### Source

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L563) ফাইলৰ ৫৬৩ নং লাইনত সংজ্ঞায়িত কৰা হৈছে।
