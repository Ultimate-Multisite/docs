---
id: wu_page_this-id_load
title: 'Action - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_\{$this->id\}_load

প্লাগইন ডেভেলপারদের আমাদের পেজগুলোতে অতিরিক্ত হুক (hooks) যোগ করার সুযোগ দেয়।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | এই পেজটির আইডি। |
| $page_hook | `string` | এই পেজটির পেজ হুক। |
| $admin_page | `self` | পেজ ইনস্ট্যান্স। |

### Since

- 1.8.2
- 2.0.4: তৃতীয় প্যারামিটার যোগ করা হয়েছে: পেজ ইনস্ট্যান্স।
### Source

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) এ লাইন ৩৩২-এ সংজ্ঞায়িত করা হয়েছে।
