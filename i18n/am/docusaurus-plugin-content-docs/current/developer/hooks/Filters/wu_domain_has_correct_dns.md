---
id: wu_domain_has_correct_dns
title: ማጣሪያ - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns {#filter-wudomainhascorrectdns}

የፕልጊን ገንቢዎች ውጤቱን ለመወሰን አዳዲስ ፍተሻዎችን እንዲጨምሩ ያስችላል።

## መለኪያዎች {#parameters}

| Name | Type | መግለጫ |
|------|------|-------------|
| $result | `bool` | አሁን ያለው ውጤት። |
| $domain | `self` | የአሁኑ የዶሜን ተልዕኮ። |
| $domains_and_ips | `array` | በDNS ፍለጋ ላይ የተገኙ የዶሜን እና የIPዎች ዝርዝር። |

### ከ {#since}

- 2.0.4
### ምንጭ {#source}

Defined in [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) at line 455


## የሚመልሰው {#returns}
የDNS በትክክል ተዘጋጅቷል ወይስ አልተዘጋጀም።
