---
title: Hestia Control Panel ইন্টিগ্রেশন
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel ইন্টিগ্রেশন

এই গাইডে Ultimate Multisite-এর Hestia ইন্টিগ্রেশন কীভাবে কনফিগার করতে হয় তা ব্যাখ্যা করা হয়েছে, যাতে আপনার নেটওয়ার্কে ম্যাপ করা ডোমেইনগুলো স্বয়ংক্রিয়ভাবে Hestia-তে Web Domain Alias হিসেবে যোগ (এবং মুছে ফেলা) হয়।

- Hestia CLI রেফারেন্স: v-add-web-domain-alias / v-delete-web-domain-alias
- অফিসিয়াল REST API ডকুমেন্টেশন: https://hestiacp.com/docs/server-administration/rest-api.html

## এটি কী করে
- Ultimate Multisite-এ কোনো ডোমেইন ম্যাপ করা হলে, ইন্টিগ্রেশনটি Hestia API কল করে নিচের কমান্ড চালায়:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- কোনো ডোমেইন ম্যাপিং মুছে ফেলা হলে, এটি চালায়:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Domain Mapping সেটিংসে "Auto-create www subdomain" অপশনের উপর নির্ভর করে ঐচ্ছিকভাবে `www.` alias যোগ/মুছে ফেলা হয়।

## পূর্বশর্ত
- একটি বিদ্যমান Hestia Web Domain যা ইতিমধ্যে আপনার WordPress ইনস্টলেশনের দিকে পয়েন্ট করছে। ইন্টিগ্রেশনটি এই বেস ডোমেইনের সাথে alias যুক্ত করবে।
- Hestia API অ্যাক্সেস সক্রিয় থাকতে হবে। আপনি password অথবা API hash/token ব্যবহার করে authenticate করতে পারেন।

API অ্যাক্সেস সক্রিয় করা এবং authentication সংক্রান্ত বিস্তারিত জানতে Hestia-এর REST API ডকুমেন্টেশন দেখুন:
https://hestiacp.com/docs/server-administration/rest-api.html

## কনফিগারেশন (Wizard → Integrations → Hestia)
নিচের মানগুলো প্রদান করুন:

- `WU_HESTIA_API_URL` (আবশ্যক)
  - বেস API endpoint, সাধারণত `https://your-hestia-host:8083/api/`।
- `WU_HESTIA_API_USER` (আবশ্যক)
  - API কমান্ডের জন্য ব্যবহৃত Hestia user (সাধারণত `admin`)।
- `WU_HESTIA_API_PASSWORD` অথবা `WU_HESTIA_API_HASH` (যেকোনো একটি)
  - একটি authentication পদ্ধতি বেছে নিন: password অথবা API hash/token।
- `WU_HESTIA_ACCOUNT` (আবশ্যক)
  - Hestia-তে Web Domain-এর অ্যাকাউন্ট (মালিক); এটি CLI-এর প্রথম argument।
- `WU_HESTIA_WEB_DOMAIN` (আবশ্যক)
  - বিদ্যমান Hestia Web Domain যা আপনার WordPress সার্ভ করছে (এখানে alias যুক্ত হবে)।
- `WU_HESTIA_RESTART` (ঐচ্ছিক; ডিফল্ট `yes`)
  - alias পরিবর্তনের পর সার্ভিস restart/reload করবে কিনা।

আপনি wizard-এর মাধ্যমে এই constant-গুলো `wp-config.php`-এ inject করতে পারেন, অথবা নিজে হাতে define করতে পারেন।

## সেটআপ যাচাই করা
- wizard-এর "Testing" ধাপে, plugin API-এর মাধ্যমে `v-list-web-domains <WU_HESTIA_ACCOUNT> json` কল করে। সফল response পেলে connectivity এবং authentication নিশ্চিত হয়।
- ডোমেইন ম্যাপ করার পর, Hestia-তে চেক করুন: Web > বেস ডোমেইন > Aliases। আপনি নতুন alias যুক্ত দেখতে পাবেন।

## নোট ও টিপস
- নিশ্চিত করুন `WU_HESTIA_WEB_DOMAIN` আগে থেকেই আছে এবং `WU_HESTIA_ACCOUNT`-এর মালিকানাধীন।
- SSL প্রয়োজন হলে, Hestia-তে certificate পরিচালনা করুন। এই ইন্টিগ্রেশন বর্তমানে শুধু alias হ্যান্ডেল করে।
- আপনার Domain Mapping-এর "www subdomain" সেটিং অনুযায়ী plugin `www.<domain>`-ও যোগ/মুছতে পারে।

## উদাহরণ API কল (cURL)
নিচে একটি ধারণামূলক উদাহরণ দেওয়া হলো (আপনার পরিবেশ অনুযায়ী পরিবর্তন করুন)। সঠিক parameter-এর জন্য অফিসিয়াল ডকুমেন্টেশন দেখুন।

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (অথবা &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (যোগ করার alias)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

মুছে ফেলার জন্য, `cmd=v-delete-web-domain-alias` ব্যবহার করুন এবং একই args দিন।

## সমস্যা সমাধান
- API থেকে HTTP error: যাচাই করুন `WU_HESTIA_API_URL` অ্যাক্সেসযোগ্য এবং `/api` অন্তর্ভুক্ত আছে।
- Auth error: নিশ্চিত করুন `WU_HESTIA_API_USER` এবং `WU_HESTIA_API_PASSWORD` অথবা `WU_HESTIA_API_HASH` সঠিক আছে।
- লগে "Missing account/base domain": নিশ্চিত করুন `WU_HESTIA_ACCOUNT` এবং `WU_HESTIA_WEB_DOMAIN` সেট করা আছে এবং Hestia-তে valid।

## রেফারেন্স
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
