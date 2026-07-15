---
id: wu_sso_enabled
title: ফিল্টার - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled

ক্রস-ডোমেইন সিঙ্গেল-সাইন-অন (single-sign-on) সক্ষমতা চালু বা বন্ধ করা।

এই মানটি ফিল্টার করে আপনি সিঙ্গেল-সাইন-অন পুরোপুরি বন্ধ করতে পারেন, অথবা এটিকে শর্তসাপেক্ষে চালু করতে পারেন।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enabled | `bool` | SSO কি চালু থাকবে? চালু করতে `True` এবং বন্ধ করতে `false` ব্যবহার করুন। |

### Since {#since}

- 2.0.11
### Source {#source}

[`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110)-এ লাইন ১১০-এ সংজ্ঞায়িত।

## Returns {#returns}
SSO চালু আছে কি না।
