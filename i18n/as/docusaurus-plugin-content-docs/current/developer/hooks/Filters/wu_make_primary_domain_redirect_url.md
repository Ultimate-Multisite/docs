---
id: wu_make_primary_domain_redirect_url
title: ফিল্টৰ - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

এটা ডোমেইনক প্ৰাইমাৰী কৰাৰ পিছত রিডাইৰেক্ট URL ফিল্টাৰ কৰে।

এই ফিল্টাৰে ডেভেলপাৰসকলক কাস্টমাইজ কৰিবলৈ অনুমতি দিয়ে যে কোনো ডোমেইনক সফলভাৱে প্ৰাইমাৰী হিচাপে সেট কৰাৰ পিছত ব্যৱমূহক ক'ত রিডাইৰেক্ট কৰা হ'ব। ডিফল্টভাৱে, ই মূল স্থানৰ বৰ্তমান URL-লৈ, বা সলনি কৰা স্থানৰ এডমিন URL-লৈ রিডাইৰেক্ট কৰে।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | ডিফল্ট রিডাইৰেক্ট URL। ই হয় মূল স্থানৰ বৰ্তমান URL, নহয় সলনি কৰা স্থানৰ এডমিন URL। |
| $current_site | `int` | সেই স্থানটোৰ ID যাৰ ডোমেইনক প্ৰাইমাৰী কৰা হৈছে। |
| $domain | `\Domain` | ডোমেইন বস্তু (domain object) যাক প্ৰাইমাৰী কৰা হৈছে। |
| $old_primary_domains | `array` | সেই ডোমেইনসমূহৰ ID-ৰ এটা তালিকা যিবোৰ পূৰ্বতে প্ৰাইমাৰী আছিল। |

### Since

- 2.0.0
### Source

Defined in [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) at line 639


## Returns
ফিল্টাৰ কৰা রিডাইৰেক্ট URL।
