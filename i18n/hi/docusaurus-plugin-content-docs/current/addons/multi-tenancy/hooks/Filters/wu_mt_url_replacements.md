---
id: wu_mt_url_replacements
title: फ़िल्टर - wu_mt_url_replacements
sidebar_label: wu_mt_url_replacements
_i18n_hash: 2a3e1ab7bb695958155a426bfb7fce2b
---
# फ़िल्टर: wu_mt_url_replacements {#filter-wumturlreplacements}

URL बदलने के जोड़े (replacement pairs) को फ़िल्टर करता है।

## पैरामीटर्स {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $replacements | `array` | वर्तमान प्रतिस्थापन जोड़े। |
| $old_url | `string` | पुराना URL। |
| $new_url | `string` | नया URL। |
| $blog_id | `int` | ब्लॉग ID। |

### से {#since}

- 1.0.0
### स्रोत {#source}

[`inc/migration/class-url-rewriter.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/migration/class-url-rewriter.php#L151) में लाइन 151 पर परिभाषित है।
