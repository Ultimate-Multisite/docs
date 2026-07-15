---
id: wu_domain_became_primary
title: Action - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

የጎራ ድርጅት (domain) ዋና የጎራ ድርጅት ሲሆን የሚተገበርበት ድርጊት ነው።

ይህ ድርጊት የጎራ ድርጅት ዋና የጎራ ድርጅት ማረጋገጫ (primary_domain flag) ወደ እውነት (true) ሲቀየር ይነሳል፤ ይህም አዲስ ዋና የጎራ ድርጅት ሲፈጠር ወይም ያለውን የጎራ ድርጅት ዋና እንዲሆን ሲሻሻል ሊሆን ይችላል።

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | ዋና የሆነበት የጎራ ድርጅት። |
| $blog_id | `int` | የተጎዳው ድረ-ገጽ (site) የብሎግ መለያ (blog ID)። |
| $was_new | `bool` | ይህ አዲስ የተፈጠረ የጎራ ድርጅት መሆኑን የሚያሳይ። |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) ፋይል ውስጥ በ560ኛው መስመር ተገልጿል።
