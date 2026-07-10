---
id: wu_page_added
title: কৰ্য্য - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added {#action-wupageadded}

প্লাগইন ডেভেলপাৰসকলক পৃষ্ঠা যোগ কৰাৰ সময়ত অতিৰিক্ত কাম কৰিবলৈ অনুমতি দিয়ে।

`wu_page_load` ৰ দৰে নহয়, যি কেৱল এটা নিৰ্দিষ্ট পৃষ্ঠা দেখা হৈছে যেতিয়াই কাৰ্য কৰে, এই হুকটো Ultimate Multisite কোড ব্যৱহাৰ কৰি যোগ কৰা প্ৰতিটো এডমিন পৃষ্ঠাৰ বাবে ৰেকজিষ্ট্ৰেচনৰ সময়তে কাৰ্য কৰে।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | এই পৃষ্ঠাৰ ID। |
| $page_hook | `string` | এই পৃষ্ঠাৰ হুক নাম। |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) at line 228
