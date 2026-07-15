---
id: mu_migrationexportuserheaders
title: စစ်ထုတ်ခြင်း - mu_migration/export/user/headers
sidebar_label: mu_migration/export/user/headers
_i18n_hash: 93e90658913589a4b0b6bbb79e7d0be4
---
# Filter: mu_migration/export/user/headers

အသုံးပြုသူ (user) ၏ ခေါင်းစီးများ (headers) စံသတ်မှတ်ထားသည့် အစုအဝေးကို export လုပ်ခြင်း သို့မဟုတ် import လုပ်ခြင်းတို့အတွက် စစ်ထုတ်ပေးသည့် (filter) နေရာဖြစ်သည်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $custom_headers | `array` | စိတ်ကြိုက် ခေါင်းစီးများ (custom headers) အစုအဝေး။ |

### Since {#since}

- 0.1.0
### Source {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-export.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-export.php#L52) ၏ ၅၂ လိုင်းတွင် သတ်မှတ်ထားသည်။

## Returns {#returns}
Array ပုံစံ data headers များ။
