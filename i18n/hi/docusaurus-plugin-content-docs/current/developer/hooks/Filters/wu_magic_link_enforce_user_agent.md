---
id: wu_magic_link_enforce_user_agent
title: फ़िल्टर - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent {#filter-wumagiclinkenforceuseragent}

यूज़र एजेंट सत्यापन लागू करना है या नहीं, यह फ़िल्टर करता है।

इसे false पर सेट करने से टोकन विभिन्न ब्राउज़र/डिवाइस पर काम कर पाएंगे। इससे सुरक्षा थोड़ी कम हो जाती है, लेकिन उपयोगिता (usability) बढ़ जाती है।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | क्या यूज़र एजेंट मिलान (matching) लागू करना है। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) में लाइन 410 पर परिभाषित है।
