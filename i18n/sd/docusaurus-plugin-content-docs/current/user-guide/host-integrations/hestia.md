---
title: هستيا ڪنٽرول پینل انٽيغريشن
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel Integration

এই গাইডটি ব্যাখ্যা করে কিভাবে আপনার নেটওয়ার্কের ম্যাপ করা ডোমেইনগুলিকে স্বয়ংক্রিয়ভাবে Hestia-তে ওয়েব ডোমেইন উপনাম (Web Domain Aliases) হিসাবে যোগ (এবং সরিয়ে ফেলা) করার জন্য Ultimate Multisite Hestia ইন্টিগ্রেশন কনফিগার করতে হয়।

- Hestia CLI রেফারেন্স: v-add-web-domain-alias / v-delete-web-domain-alias
- অফিসিয়াল REST API ডকুমেন্ট: https://hestiacp.com/docs/server-administration/rest-api.html

## ইয়া কি করে (What It Does) {#what-it-does}
- যখন Ultimate Multisite-এ একটি ডোমেইন ম্যাপ করা হয়, তখন ইন্টিগ্রেশনটি Hestia API-কে কল করে নিচের কমান্ডগুলো চালানোর জন্য:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- যখন কোনো ডোমেইন ম্যাপিং সরানো হয়, তখন এটি চালায়:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- ডোমেইন ম্যাপিং সেটিংসের "Auto-create www subdomain" সেটিং অনুযায়ী ঐচ্ছিকভাবে `www.` উপনাম যোগ বা সরিয়ে দেয়।

## পূর্বশর্ত (Prerequisites) {#prerequisites}
- একটি বিদ্যমান Hestia ওয়েব ডোমেইন যা ইতিমধ্যেই আপনার ওয়ার্ডপ্রেস ইনস্টলেশনের দিকে নির্দেশ করছে। ইন্টিগ্রেশনটি এই বেস ডোমেইনে উপনাম যুক্ত করবে।
- Hestia API অ্যাক্সেস চালু থাকতে হবে। আপনি পাসওয়ার্ড বা কোনো API হ্যাশ/টোকেন ব্যবহার করে প্রমাণীকরণ করতে পারেন।

API অ্যাক্সেস এবং প্রমাণীকরণের বিস্তারিত জানতে Hestia-এর REST API ডকুমেন্ট দেখুন:
https://hestiacp.com/docs/server-administration/rest-api.html

## কনফিগারেশন (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
নিচের মানগুলো প্রদান করুন:

`WU_HESTIA_API_URL` (ضروري)
  - بنيادي API جو، عام طور تي `https://your-hestia-host:8083/api/`.

`WU_HESTIA_API_USER` (ضروري)
  - Hestia صارف جيڪا API ڪمنڊز لاءِ استعمال ٿيندي آهي (ڪثرت عام طور تي `admin`).

`WU_HESTIA_API_PASSWORD` يا `WU_HESTIA_API_HASH` (ڪو هڪ ضرور)
  - هيٺ ڏنل ۾ ڪنهن هڪ تصديقي طريقو کي چونڊيو: پاسورڊ يا API هاش/توكن.

`WU_HESTIA_ACCOUNT` (ضروري)
  - Web Domain جو حساب (مالڪ) جيڪو Hestia ۾ آهي؛ هي CLI جو پهرين argument آهي.

`WU_HESTIA_WEB_DOMAIN` (ضروري)
  - موجوده Hestia Web Domain جيڪا توهان جي WordPress کي سروس ڏئي ٿي (الياز هتي جڙيل ويندا آهن).

`WU_HESTIA_RESTART` (اختياري؛ डिफल्ट `yes`)
  - الياز تبديل ڪرڻ کان پوءِ سروسز کي ريستار/ريلوڊ ڪرڻ آهي يا نه، هيٺ ڏنل آهي.

توهان ان constants کي `wp-config.php` ۾ داخل ڪري سگهو ٿا، يا هو متحرڪ طور تي تعريف ڪري سگهو ٿا.

## Setups جو تصديق ڪرڻ {#verifying-setup}
- wizard جي "Testing" قدم ۾، پليجن ڪال API ذريعي `v-list-web-domains <WU_HESTIA_ACCOUNT> json` کي ڪندو آهي. ڪامياب جواب کان وٺي توهان جي ڪنيڪٽيويتي ۽ تصديق ٿيندي آهي.
- هڪ domain جو مئپ ڪرڻ کان پوءِ، Hestia ۾ چیک ڪريو: Web > بنيادي domain > Aliases. توهان کي نئين alias جو شامل ٿيل ڏسڻ گهرجي.

## نوٽس ۽ ٽيپس {#notes--tips}
- ٺهيل شيءِ `WU_HESTIA_WEB_DOMAIN` موجود هجڻ وارو آهي ۽ `WU_HESTIA_ACCOUNT` جي مالڪ هجڻ وارو آهي.
- جيڪڏهن SSL گهرجي، ته سرٽيفڪيٽس کي Hestia ۾ منظم ڪريو. هي ان وقت صرف aliases کي سنڀالندو آهي.
- پليجن توهان جي Domain Mapping "www subdomain" تر جي ترتيبي تي `www.<domain>` کي شامل يا کين ختم ڪري سگهي ٿو.

## مثال API ڪال (cURL) {#example-api-call-curl}
هي هڪ تصوراتي مثال آهي (پنهنجي ماحول مطابق تعديل ڪريو). صحيح parameters لاءِ آفیشل ڊاڪومينٽ ڪرڻ گهرجي.

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

منہ deletion (حذف) لاءِ، `cmd=v-delete-web-domain-alias` استعمال ڪريو ۽ اها ئي arguments استعمال ڪريو.

## Troubleshooting (مسئلے حل ڪرڻ) {#troubleshooting}
- API کان HTTP error: چیک ڪريو ته `WU_HESTIA_API_URL` رسائي (reachable) آهي ۽ ان ۾ `/api` شامل آهي.
- Auth errors (تصديق غلطيون): تصدیق ڪريو ته `WU_HESTIA_API_USER` ۽ يا ته `WU_HESTIA_API_PASSWORD` يا `WU_HESTIA_API_HASH` set ڪيل آهي.
- لاگز ۾ “Missing account/base domain” (اکاؤنٽ/بنيادي ڊومين مڪمل ناهي) ڏسڻ: ٺهيل (set) ڪريو ته Hestia ۾ `WU_HESTIA_ACCOUNT` ۽ `WU_HESTIA_WEB_DOMAIN` set ڪيل آهن ۽ صحيح آهن.

## References (حوالا) {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
