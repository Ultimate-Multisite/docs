---
id: wu_make_primary_domain_redirect_url
title: Filter - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

አንድ የዶሜይን (domain) ዋና (primary) ከተደረገ በኋላ የሚመራበትን (redirect) አድራሻ የሚቀይር (filters) ነው።

ገንቢዎች (developers) አንድ ዶሜይን ዋና ሲያደርጉ ተጠቃሚዎች የት እንደሚመራበት (redirect) በራሳቸው እንዲያስተካክሉ ያስችላል። በመደበኛነት (by default)፣ ወደ ዋናው ድረ-ገጽ (main site) የአሁኑን URL ይመራዋል፣ ወይም ወደ እየተቀየረ ባለው ድረ-ገጽ የአስተዳሚ (admin) URL ይመራዋል።

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | መደበኛው የredirect URL። ዋና ድረ-ገጽ ከሆነ የአሁኑን URL፣ ወይም የአሁኑ ድረ-ገጽ የአስተዳሚ (admin) URL ሊሆን ይችላል። |
| $current_site | `int` | የዶሜይኑ ዋና እየሆነበት የድረ-ገጹ (site) መለያ ቁጥር (ID)። |
| $domain | `\Domain` | ዋና የተደረገበት የዶሜይን ነገር (object)። |
| $old_primary_domains | `array` | ቀደም ሲል ዋና የነበሩ የዶሜይን መለያዎች (IDs) ስብስብ (array)። |

### Since

- 2.0.0
### Source

Defined in [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) at line 639


## Returns
የተቀየረውን (filtered) የredirect URL።
