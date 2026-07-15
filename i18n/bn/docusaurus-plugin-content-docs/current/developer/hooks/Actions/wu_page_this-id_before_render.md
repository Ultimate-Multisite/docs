---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c3ef7f96b45f5b4175d13585a6cca368
---
# Action: wu_page_{$this->id}_before_render

প্লাগইন ডেভেলপারদের সুযোগ দেয় যে তারা পেজটি প্রিন্ট করার আগে অতিরিক্ত কন্টেন্ট যোগ করতে পারে।

## প্যারামিটারসমূহ {#parameters}

| নাম | ধরন | বিবরণ |
|------|------|-------------|
| $page_id | `string` | এই পেজটির আইডি। |
| $page | `object` | পেজ অবজেক্ট। |

### শুরু {#since}

- 1.8.2
### উৎস {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L398) এ লাইন ৩৯৮-এ সংজ্ঞায়িত করা হয়েছে।
