---
id: wu_admin_notices
title: ଫିଲ୍ଟର - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# ଫିଲ୍ଟର: wu_admin_notices

Ultimate Multisite ଦ୍ୱାରା ଯୋଡ଼ାଯାଇଥିବା admin notices କୁ ଫିଲ୍ଟର କରିବାକୁ ବିକାଶକାରୀଙ୍କୁ ଅନୁମତି ଦିଏ।

## ପାରାମିଟର {#parameters}

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $notices | `array` | ସେହି ନିର୍ଦ୍ଦିଷ୍ଟ panel ପାଇଁ notice ର ତାଲିକା। |
| $all_notices | `array` | panel ଅନୁସାରେ ଅଲଗା କରି ଯୋଡ଼ାଯାଇଥିବା notice ର ତାଲିକା। |
| $panel | `string` | notice ଆଣିବା ପାଇଁ panel। |
| $filter | `string` | ଯଦି dismissable notice ଗୁଡ଼ିକୁ ଫିଲ୍ଟର କରି ବାହାର କରାଯାଇଛି। |
| $dismissed_messages | `array` | dismiss କରାଯାଇଥିବା notice key ର ତାଲିକା। |

### ଆରମ୍ଭରୁ {#since}

- 2.0.0
### ଉତ୍ସ {#source}

[`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) ରେ ୧୨୧ ନମ୍ବର ଧାଡ଼ିରେ ପରିଭାଷିତ


## ଫେରାଇଥାଏ {#returns}
