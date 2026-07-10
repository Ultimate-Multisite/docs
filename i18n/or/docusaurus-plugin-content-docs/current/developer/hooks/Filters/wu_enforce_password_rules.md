---
id: wu_enforce_password_rules
title: ଫିଲ୍ଟର୍ - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# ଫିଲ୍ଟର: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

ଅତିରିକ୍ତ ପାସୱାର୍ଡ ନିୟମ ଲାଗୁ କରାଯିବ କି ନାହିଁ ଫିଲ୍ଟର କରନ୍ତୁ।

true ହେଲେ, ସର୍ବନିମ୍ନ ଲମ୍ବ ଏବଂ ଅକ୍ଷର ଆବଶ୍ୟକତା ଲାଗୁ କରେ। "Super Strong" ସେଟିଂ ପାଇଁ କିମ୍ବା Defender Pro ର Strong Password ବୈଶିଷ୍ଟ୍ୟ ସକ୍ରିୟ ଥିଲେ ସ୍ୱୟଂଚାଳିତ ଭାବେ ସକ୍ରିୟ ହୁଏ।

## ପାରାମିଟରଗୁଡ଼ିକ {#parameters}

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $enforce_rules | `bool` | ଅତିରିକ୍ତ ନିୟମ ଲାଗୁ କରାଯିବ କି ନାହିଁ। |
| $strength_setting | `string` | admin ସେଟିଂ ମୂଲ୍ୟ। |
| $defender_active | `bool` | Defender Pro Strong Password ସକ୍ରିୟ କି ନାହିଁ। |

### ଆରମ୍ଭରୁ {#since}

- 2.4.0
### ଉତ୍ସ {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) ରେ 531 ନମ୍ବର ଧାଡ଼ିରେ ପରିଭାଷିତ।
