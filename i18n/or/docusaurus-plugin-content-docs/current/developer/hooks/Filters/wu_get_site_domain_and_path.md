---
id: wu_get_site_domain_and_path
title: ଫିଲ୍ଟର - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path

ବିକାଶକମାନଙ୍କୁ domain/path ଯୁଗଳ ପରିବର୍ତ୍ତନ କରିବାକୁ ଦିଏ।

ଏହା ବିଭିନ୍ନ କାମରେ ଉପଯୋଗୀ ହୋଇପାରେ, ଯେପରିକି କୌଣସି ପ୍ରକାରର staging ସମାଧାନ, ଭିନ୍ନ server ଇତ୍ୟାଦି କାର୍ଯ୍ୟକାରୀ କରିବା।

## ପାରାମିଟର {#parameters}

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $d | `object` | domain ଏବଂ path keys ଥିବା ବର୍ତ୍ତମାନର object। |
| $path_or_subdomain | `string` | function କୁ ଦିଆଯାଇଥିବା ମୂଳ path/subdomain। |

### ଯେହେତୁ {#since}

- 2.0.0
### ଉତ୍ସ {#source}

[`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) ରେ ୨୩୫ ନମ୍ବର ଧାଡ଼ିରେ ପରିଭାଷିତ।


## ଫେରାଇଥାଏ {#returns}
domain ଏବଂ path keys ଥିବା ଏକ object।
