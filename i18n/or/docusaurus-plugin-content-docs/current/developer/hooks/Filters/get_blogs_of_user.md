---
id: get_blogs_of_user
title: ଫିଲ୍ଟର - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# ଫିଲ୍ଟର: get_blogs_of_user

ସତର୍କତା ପାଇଁ, ଏଠାରେ ମୂଳ WP Filterକୁ ପୁନରୁତ୍ପାଦନ କରେ।

ଜଣେ ବ୍ୟବହାରକାରୀ ଯେଉଁ ସାଇଟଗୁଡ଼ିକର ସଦସ୍ୟ, ସେହି ତାଲିକାକୁ ଫିଲ୍ଟର କରେ।

## ପାରାମିଟରଗୁଡ଼ିକ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | ବ୍ୟବହାରକାରୀଙ୍କ ସାଇଟ ଅବଜେକ୍ଟଗୁଡ଼ିକର ଏକ ଆରେ। |
| $user_id | `int` | ବ୍ୟବହାରକାରୀ ID। |
| $all | `bool` | ଫେରାଇଦିଆଯାଇଥିବା ସାଇଟ ଆରେରେ 'deleted', 'archived', କିମ୍ବା 'spam' ଭାବେ ଚିହ୍ନିତ ସାଇଟ ସହିତ ସମସ୍ତ ସାଇଟ ରହିବ କି ନାହିଁ। ଡିଫଲ୍ଟ false। |

### ଯେହେତୁ {#since}

- 2.0.11
### ଉତ୍ସ {#source}

[`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) ରେ 851 ନମ୍ବର ଲାଇନରେ ପରିଭାଷିତ।
