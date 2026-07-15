---
id: wp_ultimo_skip_network_active_check
title: ଫିଲ୍ଟର - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# ଫିଲ୍ଟର: wp_ultimo_skip_network_active_check

ଡେଭେଲପରମାନଙ୍କୁ ନେଟୱର୍କ ସକ୍ରିୟକରଣ ଯାଞ୍ଚକୁ ଶର୍ଟ-ସର୍କିଟ୍ କରିବାକୁ ଅନୁମତି ଦିଏ।

ଏହା composer-ଆଧାରିତ ଏବଂ ଅନ୍ୟ କଷ୍ଟମ୍ ସେଟଅପ୍, ଯେପରିକି Bedrock, ବ୍ୟବହାର କରିବାବେଳେ ଉପଯୋଗୀ। ସେଠାରେ pluginଗୁଡ଼ିକୁ mu-plugins ଭାବେ ବ୍ୟବହାର କରିବା ସାଧାରଣ ପ୍ରଚଳନ।

## ପାରାମିଟରଗୁଡ଼ିକ {#parameters}

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $skip_network_activation_check | `bool` | ଆମେ ଯାଞ୍ଚକୁ ଛାଡ଼ିବା ଉଚିତ କି ନୁହେଁ, ଡିଫଲ୍ଟ false। |

### ଏହି ସଂସ୍କରଣରୁ {#since}

- 2.0.0
### ଉତ୍ସ {#source}

[`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) ରେ ଲାଇନ୍ 272 ରେ ନିର୍ଦ୍ଦିଷ୍ଟ


## ଫେରତ ମୂଲ୍ୟ {#returns}
ଆପଣ ଯାଞ୍ଚକୁ ଛାଡ଼ିବାକୁ ଚାହିଲେ true, ନହେଲେ false।
