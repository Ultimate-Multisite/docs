---
title: কন্ট্রোল প্যানেল ইন্টিগ্ৰেচন উন্নত কৰা
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# কণ্ট্ৰল প্যানেল ইন্টিগ্ৰেচন উন্নত কৰা

## সামগ্ৰিক আভাস (Overview)
Enhance এটা আধুনিক কণ্ট্ৰল প্যানেল, যিয়ে শক্তিশালী হোস্টিং অটোমেশ্যন আৰু ব্যৱস্থাপনা ক্ষমতা প্ৰদান কৰে। এই ইন্টিগ্ৰেচনটোৱে Ultimate Multisite আৰু Enhance Control Panel ৰ মাজত স্বয়ংক্রিয় ডোমেইন Syncing আৰু SSL সার্টিফিকেট ব্যৱস্থাপনা সক্ষম কৰে।

**সম্পৰক আলোচনা:** কমিউনিটিৰ টিপছ আৰু অধিক তথ্যৰ বাবে [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) চাওক।

## বৈশিষ্ট্যসমূহ (Features)
- Ultimate Multisite ত ডোমেইন ম্যাপ কৰাৰ সময়ত স্বয়ংক্রিয় ডোমেইন Syncing
- DNS সমাধান হোৱাৰ লগে লগে LetsEncryptৰ জৰিয়তে স্বয়ংক্রিয় SSL সার্টিফিকেট প্ৰদান (provisioning)
- সাব-ডোমেইন মোডত চলি থকা নেটৱৰ্কৰ বাবে সাব-ডোমেইন সমৰ্থন
- ম্য্যাপিং डिलিট কৰিলে ডোমেইনও डिलিট কৰা হয়
- API ক্রেডেনশিয়াল পৰীক্ষা কৰিবলৈ সংযোগ পৰীক্ষা (Connection testing)

## প্ৰয়োজনীয়তা (Requirements)

### ছিষ্টেম প্ৰয়োজনীয়তা (System Requirements)
- Enhance Control Panel স্থাপন কৰা আৰু ইয়াক প্ৰৱেশ কৰিব পৰা হ'ব লাগিব
- WordPress Multisite স্থাপন কৰা আৰু ই Enhance ছাৰ্ভাৰত হোষ্ট কৰা বা ইয়াৰ সৈতে সংযোগ কৰা
- Apache web server (Enhance বৰ্তমান Apache কনফিগাৰেচন সমৰ্থন কৰে; LiteSpeed Enterprise কম মূল্যত উপলব্ধ)

### API প্ৰৱেশ (API Access)
API টোকেন সৃষ্টি কৰিবলৈ আপোনাৰ Enhance Control Panel ত এডমিনিষ্ট্ৰেটৰ প্ৰৱেশ (administrator access) থাকিব লাগিব।

## API ক্রেডেনশিয়াল লাভ কৰা (Getting Your API Credentials)

### ১. এটা API টোকেন সৃষ্টি কৰক (Create an API Token)

১. এডমিনিষ্ট্ৰেটৰ হিচাপে আপোনাৰ Enhance Control Panel লগ ইন কৰক
২. নেভিগেশ্বন মেনুৰ পৰা **Settings** ক্লিক কৰক
৩. **Access Tokens** লৈ যাওক
৪. **Create Token** ক্লিক কৰক
৫. টোকেনটো এটা বৰ্ণনামূলক নাম দিয়ক (উদাহৰণস্বৰূপে, "Ultimate Multisite Integration")
৬. **System Administrator** ভূমিকা (role) দিয়া কৰক
৭. মেয়াদপূৰ্তি তাৰিখৰ বাবে:
   - যদি আপুনি টোকেনটো কেতিয়াও মেয়াদপূৰ্ণ নহ'ব বুলি বিচাৰে তেন্তে ইয়াক খালি ৰাখক
   - অথবা নিৰাপত্তা কাৰণত এটা নিৰ্দিষ্ট মেয়াদপূৰ্তি তাৰিখ দিয়ক
৮. **Create** ক্লিক কৰক

সৃষ্টি কৰাৰ পিছত, আপোনাৰ **Access Token** আৰু **Organization ID** প্ৰদৰ্শিত হ'ব। টোকেনটো কেৱল এবাৰহে দেখুৱাব, সেয়েহে **এইবোৰ তৎক্ষণাত সেভ কৰক**।

### ২. আপোনাৰ Organization ID লাভ কৰক (Get Your Organization ID)

Organization ID টি Access Tokens পৃষ্ঠাৰ এটা নীলা তথ্য বক্সে "Org ID: {your_id}" বুলি লেবেল কৰা থাকে।

Organization ID টি এনে ধৰণৰ UUID: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

আপুনি তলত দিয়া ধৰণেও কোনো ग्राहकৰ Organization ID বিচাৰি পাব:
১. **Customers** পৃষ্ঠা লৈ যাওক
২. প্ৰাসংগিক ग्राहकৰ বাবে **Manage customer** ক্লিক কৰক
৩. URL ত চাওক - Organization ID টি `/customers/` ৰ পিছৰ alphanumeric আখৰসমূহ।

### ৩. আপোনাৰ Server ID লাভ কৰক (Get Your Server ID)

আপোনাৰ Server ID (ডোমেইন কাৰ্যকলাপৰ বাবে প্ৰয়োজনীয়):

১. Enhance Control Panel ত, **Servers** লৈ যাওক
২. য'ত আপোনাৰ WordPress স্থাপন কৰা আছে সেই ছাৰ্ভাৰটোত ক্লিক কৰক
৩. Server ID (UUID ধৰণ) URL বা ছাৰ্ভাৰৰ বিৱৰণত দেখা যাব
৪. বিকল্পভাৱে, আপুনি ছাৰ্ভাৰসমূহ তালিকাভুক্ত কৰিবলৈ API ব্যৱহাৰ কৰিব পাৰে:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID টি UUID ধৰণ অনুসৰণ কৰে: `00000000-0000-0000-0000-000000000000`

### ৪. আপোনাৰ API URL লাভ কৰক (Get Your API URL)

আপোনাৰ API URL হৈছে আপোনাৰ Enhance Control Panel URL ত `/api/` যোগ কৰা:

```
https://your-enhance-panel.com/api/
```

**গুৰুত্বপূৰ্ণ:** `/api/` পথটো প্ৰয়োজনীয়। সাধাৰণ ভুলসমূহৰ ভিতৰত আছে:
- কেৱল ডোমেইন ব্যৱহাৰ কৰা, `/api/` অবিহনে
- HTTPS ৰ সলনি HTTP ব্যৱহাৰ কৰা (নিৰাপдতাৰ বাবে HTTPS প্ৰয়োজনীয়)

## কনফিগাৰেচন (Configuration)

### প্ৰয়োজনীয় ধ্ৰুৱকসমূহ (Required Constants)

তলৰ ধ্ৰুৱকসমূহ আপোনাৰ `wp-config.php` ফাইলত যোগ কৰক:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### ইন্টিগ্ৰেচন উইজৰ্ডৰ জৰিয়তে সেটআপ (Setup via Integration Wizard)

১. আপোনাৰ WordPress admin ত, **Ultimate Multisite** > **Settings** লৈ যাওক
২. **Integrations** ট্ৰি (tab) লৈ যাওক
৩. **Enhance Control Panel Integration** বিচাৰি উলিয়াবলৈ আৰু **Configuration** ক্লিক কৰক
৪. উইজৰ্ডটোৱে আপোনাক সেটআপৰ জৰিয়তে পথ দেখুৱাব:
   - **Step 1:** ভূমিকা আৰু বৈশিষ্ট্যৰ আভাস
   - **Step 2:** আপোনাৰ API ক্রেডেনশিয়াল প্ৰৱেশ কৰক (টোকেন, API URL, Server ID)
   - **Step 3:** সংযোগ পৰীক্ষা কৰক
   - **Step 4:** গ্ৰহণ কৰক আৰু সক্রিয় কৰক

আপুনি বাছি ল'ব পাৰে:
- উইজৰ্ডটোক স্বয়ংক্রিয়ভাৱে ধ্ৰুৱকসমূহ আপোনাৰ `wp-config.php` ফাইলত যোগ কৰিবলৈ দিয়া
- ধ্ৰুৱক সংজ্ঞা কপি কৰি নিজে যোগ কৰা

## অধিক WordPress কনফিগাৰেচন (Additional WordPress Configuration)

কমিউনিটিৰ মতামতৰ ওপৰত ভিত্তি কৰি ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), আপোনাক এই অধিক ছেটিংগসমূহ কনফিগাৰ কৰিব লাগিব পাৰে:

### .htaccess কনফিগাৰেচন

যদি আপুনি ডোমেইন ম্য্যাপিংৰ সৈতে কোনো সমস্যা অনুভৱ কৰে:
১. মূল Enhance `.htaccess` ফাইলটো डिलিট কৰক
২. ইয়াক সাধাৰণ WordPress Multisite `.htaccess` ফাইলৰে সলনি কৰক

### কুকি ধ্ৰুৱকসমূহ (Cookie Constants)

ম্যাপ কৰা ডোমেইনসমূহৰ বাবে সঠিক কুকি ব্যৱস্থাপনা নিশ্চিত কৰিবলৈ এই ধ্ৰুৱকসমূহ `wp-config.php` ত যোগ কৰক:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## ই কেনেকৈ কাম কৰে (How It Works)

### এটা ডোমেইন ম্যাপ কৰাৰ সময়ত (When a Domain is Mapped)

১. এটা ব্যৱমৃত ডোমেইন Ultimate Multisite ত ম্যাপ কৰে (বা এটা নতুন স্থান সাব-ডোমেইন মোডত সৃষ্টি কৰা হয়)
২. ইন্টিগ্ৰেচনটোৱে Enhance ৰ API লৈ এটা POST request পঠায়: `/servers/{server_id}/domains`
৩. Enhance টো আপোনাৰ ছাৰ্ভাৰ কনফিগাৰেচনত ডোমেইনটো যোগ কৰে
৪. DNS টো আপোনাৰ ছাৰ্ভাৰলৈ সমাধান হোৱাৰ লগে লগে, Enhance স্বয়ংক্রিয়ভাৱে LetsEncryptৰ জৰিয়তে এটা SSL সার্টিফিকেট প্ৰদান কৰে
৫. ডোমেইনটো HTTPS লগত সক্ৰিয় হয়

### এটা ডোমেইন আঁতৰাই দিয়াৰ সময়ত (When a Domain is Removed)

১. Ultimate Multisite ত এটা ডোমেইন ম্য্যাপিং डिलিট কৰা হয়
২. ইন্টিগ্ৰেচনটোৱে ডোমেইনটোৰ ID বিচাৰি Enhance লৈ কোৱাৰী (query) কৰে
৩. এটা DELETE request পঠোৱা হয়: `/servers/{server_id}/domains/{domain_id}`
৪. Enhance টো আপোনাৰ ছাৰ্ভাৰ কনফিগাৰেচনৰ পৰা ডোমেইনটো আঁতৰাই দিয়ে

### DNS আৰু SSL পৰীক্ষা (DNS and SSL Checking)

Ultimate Multisite ত বিল্ট-ইন DNS আৰু SSL পৰীক্ষা আছে:
- আপুনি **Domain Mapping Settings** ত পৰীক্ষাৰ অন্তৰাল (check interval) কনফিগাৰ কৰিব পাৰে (ডিফল্ট: ৩০০ ছেকেণ্ড/৫ মিনিট)
- এটা ডোমেইনক সক্ৰিয় বুলি চিহ্নিত কৰাৰ আগতে ছিষ্টেমটোৱে DNS প্ৰচাৰ (propagation) পৰীক্ষা কৰিব।
- SSL সার্টিফিকেটৰ বৈধতা স্বয়ংক্রিয়ভাৱে পৰীক্ষা কৰা হয়
- Enhance টো স্বয়ংক্রিয়ভাৱে SSL প্ৰদান কৰে, সেয়েহে হাতেৰে SSL কনফিগাৰেচনৰ প্ৰয়োজন নহয়

## সেটআপ পৰীক্ষা কৰা (Verifying Setup)

### সংযোগ পৰীক্ষা কৰক (Test the Connection)

১. ইন্টিগ্ৰেচন উইজৰ্ডত, **Test Connection** ছেটপটো ব্যৱহাৰ কৰক
২. প্লাগইনটোৱে আপোনাৰ ছাৰ্ভাৰত ডোমেইন তালিকাভুক্ত কৰিবলৈ চেষ্টা কৰিব
৩. এটা সফলতাৰ বাৰ্তা নিশ্চিত কৰে:
   - API ক্রেডেনশিয়াল সঠিক
   - API URL উপলব্ধ
   - Server ID বৈধ
   - অনুমতিসমূহ সঠিকভাৱে সেট কৰা

### এটা ডোমেইন ম্যাপ কৰাৰ পিছত (After Mapping a Domain)

১. Ultimate Multisite ত এটা পৰীক্ষা ডোমেইন ম্যাপ কৰক
২. Ultimate Multisite লগসমূহ (Ultimate Multisite > Logs > integration-enhance) চাওক
৩. Enhance Control Panel ত পৰীক্ষা কৰক যে ডোমেইনটো যোগ কৰা হৈছে নে:
   - **Servers** > **Your Server** > **Domains** লৈ যাওক
   - নতুন ডোমেইনটো তালিকাখনত দেখা যাব
৪. DNS প্ৰচাৰ হোৱাৰ লগে লগে, SSL স্বয়ংক্রিয়ভাৱে প্ৰদান কৰা হৈছে নে তাৰ পৰীক্ষা কৰক

## সমস্যা সমাধান (Troubleshooting)

### API সংযোগ সমস্যা (API Connection Issues)

**Error: "Failed to connect to Enhance API"**
- নিশ্চিত কৰক যে `WU_ENHANCE_API_URL` ত শেষত `/api/` অন্তৰ্ভুক্ত হৈছে
- নিশ্চিত কৰক যে আপুনি HTTPS ব্যৱহাৰ কৰিছে, HTTP নহয়
- পৰীক্ষা কৰক যে Enhance প্যানেলটো আপোনাৰ WordPress ছাৰ্ভাৰৰ পৰা প্ৰৱেশ কৰিব পৰা
- সংযোগ ব্লক কৰা কোনো ফায়াৰৱল নিয়ম আছে নে নাই, সেয়া পৰীক্ষা কৰক

**Error: "Enhance API Token not found"**
- নিশ্চিত কৰক যে `WU_ENHANCE_API_TOKEN` `wp-config.php` ত সংজ্ঞায়িত কৰা হৈছে
- পৰীক্ষা কৰক যে Enhance ত টোকেনটো डिलিট হোৱা নাই বা মেয়াদপূৰ্ণ হোৱা নাই
- টোকেনৰ মানত কোনো বানান ভুল আছে নে নাই, সেয়া পৰীক্ষা কৰক

**Error: "Server ID is not configured"**
- নিশ্চিত কৰক যে `WU_ENHANCE_SERVER_ID` `wp-config.php` ত সংজ্ঞায়িত কৰা হৈছে
- নিশ্চিত কৰক যে Server ID টি এটা বৈধ UUID ধৰণৰ
- নিশ্চিত কৰক যে ছাৰ্ভাৰটো Enhance প্যানেলত বিদ্যমান

### ডোমেইন যোগ নহ'লে (Domain Not Added)

**লগসমূহ পৰীক্ষা কৰক:**
১. **Ultimate Multisite** > **Logs** লৈ যাওক
২. **integration-enhance** লৈ ফিল্টাৰ কৰক
৩. সমস্যাটো সূচায় থকা কোনো ভুল বাৰ্তা বিচাৰক

**সাধাৰণ কাৰণসমূহ:**
- অবৈধ ডোমেইন নাম ধৰণ
- ডোমেইনটো Enhance ত ইতিমধ্যে বিদ্যমান
- अपুৰাসং যথেষ্ট API অনুমতি (নিশ্চিত কৰক যে টোকেনটোত System Administrator ভূমিকা আছে)
- Server ID টো Enhance ত থকা সঁচাক লৈ মিল নহ'ব

### SSL সার্টিফিকেট সমস্যা (SSL Certificate Issues)

**SSL প্ৰদান নহ'লে:**
- পৰীক্ষা কৰক যে DNS আপোনাৰ ছাৰ্ভাৰৰ IP ঠিকনালৈ আঙুলিয়াই আছে নে
- নিশ্চিত কৰক যে ডোমেইনটো সঠিকভাৱে সমাধান হয়: `nslookup yourdomain.com`
- SSL প্ৰদান কৰিবলৈ Enhance টো DNS সমাধান হোৱাৰ প্ৰয়োজন
- SSL প্ৰদান কৰিবলৈ সাধাৰণতে DNS প্ৰচাৰ হোৱাৰ পিছত ৫-১০ মিনিট সময় লাগে
- SSL-সম্পৰ্কীয় ভুলসমূহৰ বাবে Enhance Control Panel লগ পৰীক্ষা কৰক

**Enhance ত হাতেৰে SSL সমস্যা সমাধান:**
১. **Servers** > **Your Server** > **Domains** লৈ যাওক
২. আপোনাৰ ডোমেইনটো বিচাৰি উলিয়াবলৈ আৰু ইয়াৰ SSL স্থিতি পৰীক্ষা কৰক
৩. যদি প্ৰয়োজন হয় তেন্তে আপুনি হাতেৰে SSL প্ৰদান কৰিবলৈ ট্ৰigger কৰিব পাৰে

### DNS পৰীক্ষা অন্তৰাল (DNS Check Interval)

যদি ডোমেইন বা SSL সার্টিফিকেট সক্ৰিয় হ'বলৈ বেছি সময় লাগে:
১. **Ultimate Multisite** > **Settings** > **Domain Mapping** লৈ যাওক
২. **DNS Check Interval** ছেটিং বিচাৰি উলিয়াবলৈ
৩. ডিফল্ট ৩০০ ছেকেণ্ডৰ পৰা এটা কম মান (ন্যূনতম: ১০ ছেকেণ্ড) লৈ পৰিৱৰ্তন কৰক
৪. **নোট:** কম অন্তৰাল মানে অধিক ঘন ঘন পৰীক্ষা, কিন্তু অধিক ছাৰ্ভাৰ লোড

### Authentication Errors

**HTTP 401/403 ভুল:**
- Enhance ত আপোনাৰ API টোকেন পুনৰ সৃষ্টি কৰক
- নিশ্চিত কৰক যে টোকেনটোত **System Administrator** ভূমিকা আছে
- পৰীক্ষা কৰক যে টোকেনটো মেয়াদপূৰ্ণ হোৱা নাই
- নিশ্চিত কৰক যে আপুনি সঠিক Organization ID ব্যৱহাৰ কৰিছে (যদিও ই সাধাৰণতে URL ত প্ৰয়োজনীয় নহয়)

### লগ বিশ্লেষণ (Log Analysis)

বিস্তারিত লগিং সক্ষম কৰক:
```php
// উন্নত ডিবাগিংৰ বাবে wp-config.php ত যোগ কৰক
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

পিছত তলত লগ পৰীক্ষা কৰক:
- Ultimate Multisite লগ: **Ultimate Multisite** > **Logs**
- WordPress ডিবাগ লগ: `wp-content/debug.log`
- Enhance প্যানেল লগ: Enhance ৰ admin interface ত উপলব্ধ

## API তথ্যকোষ (API Reference)

### Authentication
সকলো API অনুৰোধে Bearer টোকেন Authentication ব্যৱহাৰ কৰে:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### সাধাৰণ Endpoints ব্যৱহাৰ কৰা হয় (Common Endpoints Used)

**ছাৰ্ভাৰ তালিকাভুক্ত কৰক (List Servers):**
```
GET /servers
```

**এটা ছাৰ্ভাৰত ডোমেইন তালিকাভুক্ত কৰক (List Domains on a Server):**
```
GET /servers/{server_id}/domains
```

**এটা ডোমেইন যোগ কৰক (Add a Domain):**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**এটা ডোমেইন डिलিট কৰক (Delete a Domain):**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### সম্পূৰ্ণ API তথ্যকোষ (Full API Documentation)
সম্পূৰ্ণ API তথ্যকোষ: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## উত্তম অভ্যাস (Best Practices)

### নিৰাপত্তা (Security)
- **কখনো API টোকেন ভারছন কণ্ট্ৰলত কমিট নকৰিব**
- টোকেনসমূহ `wp-config.php` ত সংৰক্ষণ কৰক, যাক Git ৰ পৰা বাদ দিয়া উচিত
- উপযুক্ত অনুমতি সহ টোকেন ব্যৱহাৰ কৰক (সম্পূৰ্ণ ইন্টিগ্ৰেচনৰ বাবে System Administrator)
- উৎপাদন পৰিৱেশৰ বাবে টোকেন মেয়াদপূৰ্তি তাৰিখ সেট কৰক
- টোকেনসমূহ সময়ৰ লগে লগে সলনি কৰক (Rotate)

### কাৰ্যক্ষমতা (Performance)
- অতিমাত্ৰা API কল এৰাই চলিবলৈ ডিফল্ট DNS পৰীক্ষা অন্তৰাল (৩০০ ছেকেণ্ড) ব্যৱহাৰ কৰক
- বৃহৎ পৰ্যায়ৰ ডোমেইন কাৰ্যকলাপ চলি থকা সময়ত Enhance ছাৰ্ভাৰ সম্পদৰ নিৰীক্ষণ কৰক
- যদি এটাৰ লগে লগে বহু ডোমেইন ম্যাপ কৰা হয় তেন্তে ডোমেইন যোগ কৰাটো ভাগ কৰি ভাবিবলৈ বিবেচনা কৰক

### নিৰীক্ষণ (Monitoring)
- ইন্টিগ্ৰেচনৰ ভুলসমূহৰ বাবে নিয়মিতভাৱে Ultimate Multisite লগ পৰীক্ষা কৰক
- ডোমেইন যোগ কৰাত বিফল হোৱাৰ বাবে (failure) এটা ব্যবস্থা কৰক
---
---
