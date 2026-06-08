---
id: wu_magic_link_enforce_ip
title: Filter - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

यह फ़िल्टर नियंत्रित करता है कि IP एड्रेस वेरिफिकेशन (IP address verification) लागू करना है या नहीं।

इसे `false` पर सेट करने से टोकन (tokens) अलग-अलग नेटवर्कों से काम कर पाएंगे। इससे सुरक्षा थोड़ी कम हो जाती है, लेकिन उपयोगिता (usability) बढ़ जाती है (उदाहरण के लिए, मोबाइल उपयोगकर्ता जब नेटवर्क बदलते हैं)।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | क्या IP एड्रेस मैचिंग लागू करनी है। |

### Since

- 2.0.0
### Source

Defined in [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) at line 422
