---
id: wu_page_load
title: অ্যাকশন - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load

প্লাগইন ডেভেলপারদের আমাদের পেজগুলোতে অতিরিক্ত হুক যোগ করার সুযোগ দেয়।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | এই পেজটির আইডি। |
| $page_hook | `string` | এই পেজটির পেজ হুক। |
| $admin_page | `self` | পেজ ইনস্ট্যান্স। |

### Since {#since}

- 1.8.2
- 2.0.4: তৃতীয় প্যারামিটার যোগ করা হয়েছে: পেজ ইনস্ট্যান্স।
### Source {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318)-এ লাইন ৩১৮-এ সংজ্ঞায়িত করা হয়েছে।
