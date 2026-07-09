---
id: signup_get_available_languages
title: Filter - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages {#filter-signupgetavailablelanguages}

Menapis senarai bahasa yang tersedia untuk pendaftaran tapak di bahagian hadapan (front-end).

Jika anda memberikan array kosong kepada hook ini, ia akan menonaktifkan paparan tetapan pada borang pendaftaran, dan bahasa lalai akan digunakan apabila membuat tapak. Bahasa yang belum dipasang akan dikeluarkan.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $available_languages | `array` | Bahasa yang tersedia. |

### Since {#since}

- 4.4.0
### Source {#source}

Defined in [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) at line 117
