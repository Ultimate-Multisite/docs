---
id: wu_make_primary_domain_redirect_url
title: ଫିଲ୍ଟର୍ - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

ଡୋମେନକୁ ପ୍ରାଥମିକ କରିବା ପରେ redirect URLକୁ ଫିଲ୍ଟର କରେ।

ଡୋମେନକୁ ସଫଳତାର ସହ ପ୍ରାଥମିକ ଭାବେ ସେଟ୍ କରିବା ପରେ ବ୍ୟବହାରକାରୀଙ୍କୁ କେଉଁଠାକୁ redirect କରାଯିବ, ତାହା ବିକାଶକାରୀମାନେ ଅନୁକୂଳ କରିପାରନ୍ତି। ଡିଫଲ୍ଟ ଭାବେ, ମୁଖ୍ୟ ସାଇଟର ବର୍ତ୍ତମାନ URLକୁ, କିମ୍ବା ପରିବର୍ତ୍ତନ ହେଉଥିବା ସାଇଟର admin URLକୁ redirect କରେ।

## ପାରାମିଟର

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $redirect_url | `string` | ଡିଫଲ୍ଟ redirect URL। ମୁଖ୍ୟ ସାଇଟ ହେଲେ ବର୍ତ୍ତମାନ URL, କିମ୍ବା ବର୍ତ୍ତମାନ ସାଇଟର admin URL। |
| $current_site | `int` | ଯେ ସାଇଟର ଡୋମେନକୁ ପ୍ରାଥମିକ କରାଯାଉଛି, ସେହି ସାଇଟର ID। |
| $domain | `\Domain` | ପ୍ରାଥମିକ କରାଯାଇଥିବା ଡୋମେନ ଅବଜେକ୍ଟ। |
| $old_primary_domains | `array` | ପୂର୍ବରୁ ପ୍ରାଥମିକ ଥିବା ଡୋମେନଗୁଡ଼ିକର ID ର array। |

### ଯେହେତୁ

- 2.0.0
### ଉତ୍ସ

[`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) ଭିତରେ 639 ନମ୍ବର ଧାଡ଼ିରେ ପରିଭାଷିତ


## ଫେରାଇଥାଏ
ଫିଲ୍ଟର କରାଯାଇଥିବା redirect URL।
