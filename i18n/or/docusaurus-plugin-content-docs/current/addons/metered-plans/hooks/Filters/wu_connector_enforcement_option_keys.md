---
id: wu_connector_enforcement_option_keys
title: ଫିଲ୍ଟର - wu_connector_enforcement_option_keys
sidebar_label: wu_connector_enforcement_option_keys
_i18n_hash: d6beae90e3f1bf32a08ce35257fb0dfc
---
# Filter: wu_connector_enforcement_option_keys {#filter-wuconnectorenforcementoptionkeys}

ମୁଖ୍ୟ site ରୁ ବାଧ୍ୟତାମୂଳକ କରାଯାଇଥିବା AI ପ୍ରଦାନକାରୀ option key ତାଲିକାକୁ filter କରନ୍ତୁ।

custom କିମ୍ବା third-party AI ପ୍ରଦାନକାରୀ plugin ପାଇଁ option key ଯୋଡନ୍ତୁ, ଯାହାଫଳରେ ସେମାନଙ୍କ settings ମଧ୍ୟ subsites ରେ ମୁଖ୍ୟ site ରୁ ଉତ୍ତରାଧିକାର ସ୍ୱରୂପ ମିଳିବ।

## ପାରାମିଟର {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | ବାଧ୍ୟତାମୂଳକ କରିବା ପାଇଁ option key ନାମଗୁଡ଼ିକ (ପୂର୍ବରୁ ଗତିଶୀଳ ଭାବେ ଚିହ୍ନଟ connector key ଏବଂ EXTRA_PROVIDER_OPTIONS ଅନ୍ତର୍ଭୁକ୍ତ)। |

### ଯେହେତୁ {#since}

- 1.2.0
### ଉତ୍ସ {#source}

[`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) ରେ 206 ନମ୍ବର ଧାଡ଼ିରେ ପରିଭାଷିତ।
