---
id: retrieve_password_message
title: Filter - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message {#filter-retrievepasswordmessage}

পাছৱৰ্ড রিসেট ইমেইলৰ বাৰ্তাৰ মূল অংশ ফিল্টাৰ কৰে।

## পৰামিটারসমূহ (Parameters) {#parameters}

| Name | Type | বৰ্ণনা (Description) |
|------|------|-------------|
| $message | `string` | ডিফল্ট ইমেইল বাৰ্তা। |
| $key | `string` | অ্যাক্টিভেশ্যন কী (Activation Key)। |
| $user_login | `string` | ব্যৱমকাৰীৰ বাবে ব্যৱহাৰকাৰীৰ নাম (Username)। |
| $user_data | `\WP_User` | WP_User অবজেক্ট। |

### কোনেৰে পৰা (Since) {#since}

- ২.৮.০
- ৪.১.০: <code>$user_login</code> আৰু <code>$user_data</code> পৰামিটার যোগ কৰা হৈছে।
### উৎস (Source) {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) ত ১৪৯ নং শাৰীত সংজ্ঞায়িত।

## ফলাফল (Returns) {#returns}
ডিফল্ট ইমেইল বাৰ্তা।
