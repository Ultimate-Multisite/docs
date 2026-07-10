---
title: Hestia Control Panel ইন্টিগ্ৰেচন
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel Integration {#hestia-control-panel-integration}

এই গাইডখনত ব্যাখ্যা কৰা হৈছে কেনেকৈ Ultimate Multisite Hestia ইন্টিগ্ৰেচন কনফিগার কৰিব লাগে, যাতে আপোনাৰ নেটৱৰ্কৰ ম্যাপ কৰা ডোমেইনবোৰ স্বয়ংক্রিয়ভাৱে Hestia-ত Web Domain Aliases হিচাপে যোগ (আৰু আঁতৰাই) যায়।

- Hestia CLI ৰেফৰেন্স: v-add-web-domain-alias / v-delete-web-domain-alias
- অফিচিয়েল REST API ডক: https://hestiacp.com/docs/server-administration/rest-api.html

## ই কি কৰে {#what-it-does}
- যেতিয়া এটা ডোমেইন Ultimate Multisite-ত ম্যাপ কৰা হয়, তেতিয়া ইন্টিগ্ৰেচন-এ তলৰ API কলটো কৰে:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- যেতিয়া ডোমেইন ম্যপিংটো আঁতৰাই দিয়া হয়, তেতিয়া ই তলৰ কলটো কৰে:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- ঐচ্ছিকভাৱে, ডোমেইন ম্যপিং ছেটিংছত থকা আপোনাৰ “Auto-create www subdomain” ছেটিং অনুসৰি `www.` alias যোগ বা আঁতৰাই দিয়ে।

## প্ৰয়োজনীয়তা (Prerequisites) {#prerequisites}
- এটা ইতিমধ্যে থকা Hestia Web Domain যিটো আপোনাৰ WordPress ইনষ্টলেচনলৈ আঙুলিয়াই থাকে। ইন্টিগ্ৰেচন-এ এই বেছিক ডোমেইনটোত aliases যোগ কৰিব।
- Hestia API এক্সেছ সক্ষম কৰা। আপুনি এটা পাছৱৰ্ড বা এটা API hash/token ব্যৱহাৰ কৰি অথেন্টিকেট কৰিব পাৰে।

API এক্সেছ সক্ষম কৰা আৰু অথেন্টিকেচনৰ বিৱৰণৰ বাবে Hestia-ৰ REST API ডক চাওক:
https://hestiacp.com/docs/server-administration/rest-api.html

## কনফিগাৰেচন (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
তলৰ মানবোৰ প্ৰদান কৰক:

- `WU_HESTIA_API_URL` (প্ৰয়োজনীয়)
  - বেছিক API endpoint, সাধাৰণতে `https://your-hestia-host:8083/api/`।
- `WU_HESTIA_API_USER` (প্ৰয়োজনীয়)
  - API কাৰ্য্যৰ বাবে ব্যৱহৃত Hestia user (সাধাৰণতে `admin`)।
- `WU_HESTIA_API_PASSWORD` বা `WU_HESTIA_API_HASH` (কমপক্ষে এটা)
  - এটা অথেন্টিকেচন পদ্ধতি বাছি লওক: পাছৱৰ্ড বা API hash/token।
- `WU_HESTIA_ACCOUNT` (প্ৰয়োজনীয়)
  - Hestia-ত Web Domain-ৰ কাৰ্য্যকাৰী (owner) একাউণ্ট; এইটো CLI-ৰ প্ৰথম আৰ্গুমেন্ট।
- `WU_HESTIA_WEB_DOMAIN` (প্ৰয়োজনীয়)
  - যিটো বিদ্যমান Hestia Web Domain যিয়ে আপোনাৰ WordPress-ক সেৱা আগবঢ়ায় (aliases ইয়াত যোগ কৰা হ'ব)।
- `WU_HESTIA_RESTART` (ঐচ্ছিক; ডিফল্ট `yes`)
  - aliases সলনি কৰাৰ পিছত সেৱাসমূহ পুনৰ আৰম্ভ কৰিব/reload কৰিব নে।

আপুনি wizard-ক এই ধ্ৰুৱক (constants) `wp-config.php`-ত ইনজেক্ট কৰিবলৈ দিব পাৰে, অথবা ইয়াক নিজে সংজ্ঞায়িত কৰিব পাৰে।

## ছেটআপ পৰীক্ষা কৰা (Verifying Setup) {#verifying-setup}
- wizard-ৰ “Testing” ছেটত, প্লাগইন-এ API মাজেৰে `v-list-web-domains <WU_HESTIA_ACCOUNT> json` কল কৰে। এটা সফলতাৰ উত্তৰক সংযোগ আৰু অথেন্টিকেচন নিশ্চিত কৰে।
- এটা ডোমেইন ম্যাপ কৰাৰ পিছত, Hestia-ত চাওক: Web > বেছিক ডোমেইন > Aliases। আপুনি নতুন alias যোগ কৰা দেখা উচিত।

## টোকা আৰু টিপছ (Notes & Tips) {#notes--tips}
- নিশ্চিত কৰক যে `WU_HESTIA_WEB_DOMAIN` ইতিমধ্যে বিদ্যমান আৰু `WU_HESTIA_ACCOUNT`ৰ মালিকানাধীন।
- যদি SSL প্ৰয়োজন হয়, তেন্তে Hestia-ত সার্টিফিকেটসমূহ ব্যৱস্থাপনা কৰক। এই ইন্টিগ্ৰেচন-এ বৰ্তমান কেৱল aliases লয়।
- প্লাগইন-এ আপোনাৰ Domain Mapping “www subdomain” ছেটিং অনুসৰি `www.<domain>` যোগ বা আঁতৰো কৰিব পাৰে।

## উদাহৰণ API কল (cURL) {#example-api-call-curl}
তলত এটা ধাৰণাগত উদাহৰণ দিয়া হ'ল (আপোনাৰ পৰিৱেশ অনুসৰি সাল-সলনি কৰক)। সঠিক প্যারামিটারৰ বাবে অফিচিয়েল ডক চাওক।

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

delete কৰিবলৈ, `cmd=v-delete-web-domain-alias` ব্যৱহাৰ কৰক আৰু একে আৰ্গুমেন্টবোৰ ব্যৱহাৰ কৰক।

## সমস্যা সমাধান (Troubleshooting) {#troubleshooting}
- API ৰ পৰা HTTP error: পৰীক্ষা কৰক যে `WU_HESTIA_API_URL` উপলব্ধ আৰু `/api` অন্তৰ্ভুক্ত।
- Auth error: নিশ্চিত কৰক যে `WU_HESTIA_API_USER` আৰু হয় `WU_HESTIA_API_PASSWORD` অথবা `WU_HESTIA_API_HASH`।
- লগত “Missing account/base domain”: নিশ্চিত কৰক যে `WU_HESTIA_ACCOUNT` আৰু `WU_HESTIA_WEB_DOMAIN` Hestia-ত ছেট কৰা আৰু বৈধ।

## তথ্যসূত্র (References) {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
