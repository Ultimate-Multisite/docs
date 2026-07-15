---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_{$this->id}_register_widgets

এই পৃষ্ঠাৰ বাবে widget সমূহ ৰেজিষ্টাৰ কৰাৰ পিছত এই অ্যাকশনটো ট্ৰিগাৰ হয়।

hook নামৰ গতিশীল অংশ, `$this->id`, ले পৃষ্ঠাৰ ID বুজায়।

## পৰামিটারসমূহ (Parameters) {#parameters}

| নাম (Name) | ধৰণ (Type) | বৰ্ণনা (Description) |
|------|------|-------------|
| $id | `string` | পৃষ্ঠাৰ ID। |
| $page_hook | `string` | পৃষ্ঠাৰ hook। |
| $page | `object` | পৃষ্ঠাৰ object। |

### আৰম্ভ (Since) {#since}

- 2.4.10
### উৎস (Source) {#source}

[`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) ফাইলৰ লাইন ৭৫৫ ত সংজ্ঞায়িত কৰা হৈছে।
