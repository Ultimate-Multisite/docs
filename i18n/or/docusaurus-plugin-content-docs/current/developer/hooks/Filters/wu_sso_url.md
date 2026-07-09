---
id: wu_sso_url
title: ଫିଲ୍ଟର - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url {#filter-wussourl}

କ୍ରସ୍-ଡୋମେନ୍ ଗ୍ରାହକ କାର୍ଯ୍ୟ ପାଇଁ ଫେରାଇବା ପୂର୍ବରୁ ତିଆରି ହୋଇଥିବା SSO URLଗୁଡ଼ିକୁ ଫିଲ୍ଟର୍ କରେ।

Ultimate Multisiteର token validation ଅବିକଳ ରଖି, କୌଣସି integrationକୁ sovereign-tenant SSO linkରେ ବିଶ୍ୱସନୀୟ context ଯୋଡ଼ିବାକୁ କିମ୍ବା broker URL ବଦଳାଇବାକୁ ଦରକାର ହେଲେ ଏହି filter ବ୍ୟବହାର କରନ୍ତୁ।

## ପାରାମିଟର୍ {#parameters}

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $sso_url | `string` | ତିଆରି ହୋଇଥିବା SSO URL। |
| $user | `WP_User` | SSO visit ଦ୍ୱାରା ପ୍ରମାଣିତ ହେବାକୁ ଥିବା ବ୍ୟବହାରକାରୀ। |
| $site_id | `int` | visit ପାଇଁ ଲକ୍ଷ୍ୟ ସାଇଟ୍ ଆଇଡି। |
| $redirect_to | `string` | ସଫଳ SSO validation ପରେ ଗନ୍ତବ୍ୟ URL। |

### ଯେହେତୁ {#since}

- 2.13.0

### ଉତ୍ସ {#source}

`inc/sso/class-sso.php`ରେ ପରିଭାଷିତ।


## ଫେରାଇଥାଏ {#returns}

ଫିଲ୍ଟର୍ ହୋଇଥିବା SSO URL।
