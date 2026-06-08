---
id: wu_page_this-id_load
title: 'কাৰ্য্য - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_{$this->id}_load

প্লাগইন ডেভেলপাৰসকলক আমাৰ পেজলৈ অধিক 'hook' যোগ কৰিবলৈ অনুমতি দিয়ে।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | এই পৃষ্ঠাৰ ID। |
| $page_hook | `string` | এই পৃষ্ঠাৰ পেজ hook। |
| $admin_page | `self` | পেজৰ প্ৰতিলিপি (page instance)। |

### Since

- 1.8.2
- 2.0.4: তৃতীয় পৰিটাৰী (parameter) যোগ কৰা হৈছে: পেজৰ প্ৰতিলিপি।
### Source

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) ত ৩৩২ নং শাৰীত সংজ্ঞায়িত কৰা হৈছে।
