---
id: wu_page_load
title: Action - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load

প্লাগইন ডেভেলপাৰসকলক আমাৰ পৃষ্ঠাখাত আৰু কিছুমান হুক (hooks) যোগ কৰিবলৈ এইটোৱে অনুমতি দিয়ে।

## প‍্যারামিটাৰসমূহ

| নাম | ধৰণ | বৰ্ণনা |
|------|------|-------------|
| $id | `string` | এই পৃষ্ঠাৰ ID। |
| $page_hook | `string` | এই পৃষ্ঠাৰ পেজ হুক। |
| $admin_page | `self` | পেজৰ প্ৰতিলিপি (page instance)। |

### কোনেৰে পৰা উপলব্ধ

- 1.8.2
- 2.0.4: তৃতীয় প‍্যারামিটাৰ যোগ কৰা হৈছে: পেজৰ প্ৰতিলিপি।
### উৎস

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) ফাইলৰ ৩১৮ নং শাৰীত সংজ্ঞায়িত।
