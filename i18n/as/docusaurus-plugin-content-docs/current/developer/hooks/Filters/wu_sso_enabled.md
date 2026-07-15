---
id: wu_sso_enabled
title: Filter - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled

অন্য ডোমেইনৰ বাবে একক লগইন (single-sign-on) সুবিধা সক্ষম কৰিব বা অক্ষম কৰিব।

এই মানটো ফিল্টাৰ কৰি একক লগইন সম্পূৰ্ণৰূপে বন্ধ কৰিব পাৰো, অথবা ইয়াক এটা নিৰ্দিষ্ট সময়তহে সক্ষম কৰিব পাৰো।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enabled | `bool` | SSO সক্ষম কৰিব নেকি? সক্ষম কৰিবলৈ `True` আৰু বন্ধ কৰিবলৈ `false`। |

### Since {#since}

- 2.0.11
### Source {#source}

[`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) ফাইলৰ ১১০ নং শাৰীত সংজ্ঞায়িত কৰা হৈছে।

## Returns {#returns}
SSO সক্ষম হৈ আছে নে নাই।
