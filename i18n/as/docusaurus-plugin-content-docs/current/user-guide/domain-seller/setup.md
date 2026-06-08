---
title: সেটআপ আৰু প্ৰোভাইডাৰ কনফিগাৰেচন
sidebar_position: 1
_i18n_hash: 2a9c0d63fc6ee6bad011c099707fb3f3
---
# Domain Seller: Setup আৰু Provider কনফিগাৰেচন

Domain Seller addon-এ এটা guided setup wizard লগত আহে, যিয়ে আপোনাক প্ৰয়োজনীয় প্ৰতিটো পদক্ষেপৰ মাজেৰে লৈ যাব। এই পৃষ্ঠাখনত wizard-ৰ flow আৰু তাৰ পিছত provider কনফিগাৰ কৰিব বা পুনৰ কনফিগাৰ কৰাৰ পদ্ধতি আলোচনা কৰা হৈছে।

## প্ৰয়োজনীয়তা (Requirements)

- **Multisite Ultimate** v2.4.12 বা তাতকৈ অধিক, network-এ activate কৰা
- **PHP** 7.4+
- কমেও এটা সহায়ক registrar-ৰ বাবে API credentials

## প্ৰথমবাৰৰ setup wizard

প্লাগইনটো network-এ activate কৰাৰ প্ৰথমবাৰৰ লগে লগে setup wizard টো স্বয়ংক্রিয়ভাৱে আৰম্ভ হয়। ই **Network Admin › Ultimate Multisite › Domain Seller Setup** बाट যিকোনো সময়ত উপলব্ধ।

### Step 1 — এটা provider বাছি লওক

আপুনি কোন registrar-ক সংযোগ কৰিব বিচাৰে, সেয়া বাছি লওক। সহায়ক বিকল্পসমূহ:

| Provider | DNS management | WHOIS privacy |
|---|---|---|
| OpenSRS | Yes | Yes |
| Namecheap | No | Yes (WhoisGuard, free) |
| GoDaddy | No | No |
| ResellerClub | Yes | No |
| NameSilo | No | No |
| Enom | Yes | No |

### Step 2 — credentials প্ৰৱেশ কৰক

প্ৰত্যেক provider-ৰ বাবে ভিন্ন credential field থাকে:

**OpenSRS** — Username আৰু private key (OpenSRS Reseller Control Panel ৰ পৰা)

**Namecheap** — Username আৰু API key (Account › Tools › API Access ৰ পৰা)

**GoDaddy** — API key আৰু secret (developer.godaddy.com ৰ পৰা)

**ResellerClub** — Reseller ID আৰু API key (ResellerClub control panel ৰ পৰা)

**NameSilo** — API key (namesilo.com › Account › API Manager ৰ পৰা)

**Enom** — Account ID আৰু API token

লাইভ হোৱাৰ আগতে provider-ৰ test environment-ৰ সৈতে পৰীক্ষা কৰিবলৈ উপলব্ধ **Sandbox mode** চেক কৰক।

### Step 3 — সংযোগ পৰীক্ষা কৰক

**Test Connection** ক্লিক কৰক। wizard টো credentials আৰু connectivity পৰীক্ষা কৰিবলৈ এটা lightweight API call প্ৰেণ কৰে। আগুৱাই যোৱাৰ আগতে কোনো credential সমস্যা ঠিক কৰক।

### Step 4 — TLDs import কৰক

সংযুক্ত provider-ৰ পৰা উপলব্ধ সকলো TLDs আৰু wholesale pricing টো লৈ আহিবলৈ **Import TLDs** ক্লিক কৰক। ই domain products ব্যৱহাৰ কৰা TLD list টো পূৰণ কৰে। বৃহৎ TLD catalog থকা provider-সমূহৰ বাবে এই import টো কৰাত ৩০–৬০ ছেকেণ্ড সময় লাগিব পাৰে।

TLDs সমূহ স্বয়ংক্রিয়ভাৱে প্ৰতিদিনে এটা বাৰ এটা cron jobৰ জৰিয়তে re-sync কৰা হয়।

### Step 5 — এটা domain product সৃষ্টি কৰক

wizard টো এটা default catch-all domain product এটা 10% markup লৈ সৃষ্টি কৰে। আপুনি এই product টো তৎক্ষণাত edit কৰিব পাৰে বা skip কৰি **Ultimate Multisite › Products** ৰ তলত ম্যানুৱেলভাৱে product সৃষ্টি কৰিব পাৰে।

সম্পূৰ্ণ product কনফিগাৰেচন গাইডৰ বাবে [Domain Products and Pricing](./domain-products) চাওক।

---

## এটা provider পুনৰ কনফিগাৰ কৰা (Reconfiguring a provider)

**Network Admin › Ultimate Multisite › Settings › Domain Seller** লৈ যাওক (বা প্লাগইন list ত **Settings** ক্লিক কৰক)।

settings page ত তলত দিয়া বিষয়সমূহ আছে:

- **Enable domain selling** — সমগ্ৰ feature টো on/off কৰিবলৈ toggle কৰক
- **Default provider** — domain search আৰু নতুন product-ৰ বাবে ব্যৱহৃত provider
- **Max TLDs per search** — ग्राहकজনে search কৰোঁতে কতো TLD check কৰিব; উচ্চ মানদণ্ডে অধিক বিকল্প দেখুৱায় কিন্তু ই ধীৰ হয়
- **Availability cache duration** — availability আৰু pricing result ক কিমান সময়লৈ cache কৰিব; নিম্ন মানদণ্ডে অধিক সঠিক হয় কিন্তু API call বৃদ্ধি কৰে
- **Manage domain products** — Products list লৈ এটা quick link
- **Configure providers** — provider যোগ কৰিব বা পুনৰ কনফিগাৰ কৰিবলৈ Integration Wizard খুলি দিয়ে

### দ্বিতীয়কজন provider যোগ কৰা (Adding a second provider)

**Configure providers** ক্লিক কৰক আৰু নতুন registrar-ৰ বাবে wizard টো পুনৰ run কৰক। আপুনি একে সময়তে একাধিক provider কনফিগাৰ কৰিব পাৰে। প্ৰতিটো domain product এটা নিৰ্দিষ্ট provider লৈ assign কৰক, বা default मा থওক।

### TLDs ম্যানুৱেলভাৱে sync কৰা (Syncing TLDs manually)

settings page ত, কোনো কনফিগাৰ কৰা providerৰ কাষত **Sync TLDs** ক্লিক কৰি সৰ্বোচ্চ মূল্য (latest pricing) টো লৈ আহৰণ কৰক। কোনো provider ले wholesale pricing আপডেট কৰিলে বা নতুন TLD যোগ কৰিলে ই উপকাৰী।

---

## Logs

প্ৰত্যেক provider-এ নিজৰ log channel ত লিখি থাকে। Logs সমূহ **Network Admin › Ultimate Multisite › Logs** ত দেখা যায়:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | সকলো registration প্ৰয়াস (সফল আৰু অসফল) |
| `domain-seller-renewal` | Renewal job result |
| `domain-seller-opensrs` | Raw OpenSRS API activity |
| `domain-seller-namecheap` | Raw Namecheap API activity |
| `domain-seller-godaddy` | Raw GoDaddy API activity |
| `domain-seller-resellerclub` | Raw ResellerClub API activity |
| `domain-seller-namesilo` | Raw NameSilo API activity |
| `domain-seller-enom` | Raw Enom API activity |
