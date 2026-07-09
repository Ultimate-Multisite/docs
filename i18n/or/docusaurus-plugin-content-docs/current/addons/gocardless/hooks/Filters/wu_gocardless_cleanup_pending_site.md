---
id: wu_gocardless_cleanup_pending_site
title: ଫିଲ୍ଟର - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

ବାତିଲ ହୋଇଥିବା GoCardless ସଦସ୍ୟତା ପାଇଁ ଏକ ଅନାଥ ଅପେକ୍ଷାରତ ସାଇଟ ବିଲୋପ କରିବା ପୂର୍ବରୁ ଚାଲୁ ହୁଏ।

ବିଲୋପ ରୋକିବାକୁ ଏହି Filter ରୁ false ଫେରାନ୍ତୁ।

## ପାରାମିଟର

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $blog_id | `int` | ଅପେକ୍ଷାରତ ସାଇଟର WordPress blog ID। |
| $membership | `\WP_Ultimo\Models\Membership` | ବାତିଲ ହୋଇଥିବା ସଦସ୍ୟତା। |
| $old_status | `string` | ବାତିଲ ପୂର୍ବର ସ୍ଥିତି। |

### ଯେହେତୁ

- 2.0.0
### ଉତ୍ସ

[`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) ରେ 1086 ନମ୍ବର ଲାଇନରେ ପରିଭାଷିତ।
