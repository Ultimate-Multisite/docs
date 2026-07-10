---
id: wu_domain_has_correct_dns
title: ଫିଲ୍ଟର - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns {#filter-wudomainhascorrectdns}

ଫଳାଫଳ ନିର୍ଦ୍ଧାରଣ କରିବା ପାଇଁ plugin ବିକାଶକାରୀମାନଙ୍କୁ ନୂଆ ଯାଞ୍ଚ ଯୋଡ଼ିବାକୁ ଅନୁମତି ଦିଅନ୍ତୁ।

## ପାରାମିଟର {#parameters}

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $result | `bool` | ବର୍ତ୍ତମାନର ଫଳାଫଳ। |
| $domain | `self` | ବର୍ତ୍ତମାନର ଡୋମେନ instance। |
| $domains_and_ips | `array` | DNS lookup ରେ ମିଳିଥିବା ଡୋମେନ ଓ IPs ର ତାଲିକା। |

### ଆରମ୍ଭରୁ {#since}

- 2.0.4
### ଉତ୍ସ {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) ରେ line 455 ରେ ପରିଭାଷିତ


## ଫେରାଇଥାଏ {#returns}
DNS ସଠିକ୍ ଭାବରେ setup ହୋଇଛି କି ନାହିଁ।
