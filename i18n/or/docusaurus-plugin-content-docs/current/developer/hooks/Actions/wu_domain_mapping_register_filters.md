---
id: wu_domain_mapping_register_filters
title: କାର୍ଯ୍ୟ - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# କାର୍ଯ୍ୟ: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

କିଛି ପ୍ଲଗଇନ mapping ସକ୍ରିୟ ହେବା ପୂର୍ବରୁ URL ସଞ୍ଚୟ କରିବ, କିମ୍ବା ଉପରୋକ୍ତ filters ରେ ନଥିବା ଭିନ୍ନ ଉପାୟରେ URLs ତିଆରି କରିବ।

ଏପରି କ୍ଷେତ୍ରରେ, ଆମେ ଅତିରିକ୍ତ filters ଯୋଡ଼ିବାକୁ ଚାହୁଁଛୁ। ପାସ୍ ହୋଇଥିବା ଦ୍ୱିତୀୟ parameter ହେଉଛି mangle_url callback। ଆମେ ଏହି filter ସିଧାସଳଖ ବ୍ୟବହାର ନ କରିବାକୁ ସୁପାରିଶ କରୁଛୁ। ଏହାର ବଦଳରେ, Domain_Mapping::apply_mapping_to_url method ବ୍ୟବହାର କରନ୍ତୁ।

## Parameters {#parameters}

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $mangle_url | `callable` | mangle callable। |
| $domain_mapper | `self` | ଏହି object। |

### ପରଠାରୁ {#since}

- 2.0.0
### ଉତ୍ସ {#source}

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) ରେ line 530 ଠାରେ ପରିଭାଷିତ।
