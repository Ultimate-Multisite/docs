---
title: ছেটআপ আৰু প্ৰদানকাৰী কনফিগাৰেচন
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: ছেটআপ আৰু প্ৰদানকাৰী কনফিগাৰেচন

Domain Seller addon-ৰ সৈতে এটা নিৰ্দেশিত ছেটআপ wizard আহে, যিয়ে আপোনাক প্ৰতিটো প্ৰয়োজনীয় ধাপৰ মাজেৰে লৈ যায়। এই পৃষ্ঠাত wizard প্ৰবাহ আৰু পাছত প্ৰদানকাৰীসমূহ কেনেকৈ কনফিগাৰ বা পুনৰ কনফিগাৰ কৰিব লাগে সেয়া আলোচনা কৰা হৈছে।

## প্ৰয়োজনীয়তা {#requirements}

- **Multisite Ultimate** v2.4.12 বা তাতকৈ উচ্চ, নেটৱৰ্ক-সক্ৰিয়
- **PHP** 7.4+
- অন্ততঃ এটা সমৰ্থিত registrar-ৰ বাবে API credentials

## প্ৰথম-চলোৱা ছেটআপ wizard {#first-run-setup-wizard}

আপুনি pluginটো প্ৰথমবাৰ network-activate কৰিলে ছেটআপ wizard স্বয়ংক্ৰিয়ভাৱে আৰম্ভ হয়। ই যিকোনো সময়তে **Network Admin › Ultimate Multisite › Domain Seller Setup**-ৰ পৰাও উপলব্ধ।

### ধাপ 1 — এটা প্ৰদানকাৰী বাছনি কৰক {#step-1--choose-a-provider}

আপুনি সংযোগ কৰিব বিচৰা registrar বাছনি কৰক। সমৰ্থিত বিকল্পসমূহ:

| প্ৰদানকাৰী | DNS পৰিচালনা | WHOIS গোপনীয়তা |
|---|---|---|
| OpenSRS | হয় | হয় |
| Namecheap | নহয় | হয় (WhoisGuard, বিনামূলীয়া) |
| HostAfrica | হয় | হয় (ID সুৰক্ষা) |
| Openprovider | হয় | হয় |
| Hostinger | hosted domain-সমূহৰ বাবে core Hostinger domain mapping-ৰ জৰিয়তে | হয় |
| GoDaddy | নহয় | নহয় |
| ResellerClub | হয় | নহয় |
| NameSilo | নহয় | নহয় |
| Enom | হয় | নহয় |

### ধাপ 2 — credentials দিয়ক {#step-2--enter-credentials}

প্ৰতিজন প্ৰদানকাৰীৰ credential field বেলেগ বেলেগ:

**OpenSRS** — Username আৰু private key (OpenSRS Reseller Control Panel-ৰ পৰা)

**Namecheap** — Username আৰু API key (Account › Tools › API Access-ৰ পৰা)

**HostAfrica** — HostAfrica reseller module-ৰ পৰা Domains Reseller API endpoint আৰু credentials। বৰ্তমান কোনো পৃথক sandbox endpoint নথিভুক্ত কৰা হোৱা নাই; live registration চলোৱাৰ আগতে নিৰাপদ read-only পৰীক্ষাৰে টেষ্ট কৰক।

**Openprovider** — API access সক্ৰিয় থকা Username আৰু password। ঐচ্ছিক sandbox mode-এ Openprovider sandbox API ব্যৱহাৰ কৰে, আৰু এটা ঐচ্ছিক default customer handle registration-সমূহৰ বাবে পুনৰ ব্যৱহাৰ কৰিব পাৰি।

**Hostinger** — core Hostinger integration-ৰ পৰা শ্বেয়াৰ কৰা Hostinger hPanel API token। একেটা token-এ core domain mapping আৰু Domain Seller registration কাৰ্যকলাপ চলায়।

**GoDaddy** — API key আৰু secret (developer.godaddy.com-ৰ পৰা)

**ResellerClub** — Reseller ID আৰু API key (ResellerClub control panel-ৰ পৰা)

**NameSilo** — API key (namesilo.com › Account › API Manager-ৰ পৰা)

**Enom** — Account ID আৰু API token

live যোৱাৰ আগতে প্ৰদানকাৰীৰ test environment-ৰ বিৰুদ্ধে পৰীক্ষা কৰিবলৈ উপলব্ধ ঠাইত **Sandbox mode** চেক কৰক।

### ধাপ 3 — সংযোগ পৰীক্ষা কৰক {#step-3--test-the-connection}

**Test Connection** ক্লিক কৰক। wizard-এ credentials আৰু connectivity সত্যাপন কৰিবলৈ এটা lightweight API call পঠিয়ায়। আগবাঢ়াৰ আগতে যিকোনো credential সমস্যা ঠিক কৰক।

### ধাপ 4 — TLDs আমদানি কৰক {#step-4--import-tlds}

সংযুক্ত প্ৰদানকাৰীৰ পৰা সকলো উপলব্ধ TLDs আৰু wholesale pricing টানিবলৈ **Import TLDs** ক্লিক কৰক। ই domain products-এ ব্যৱহাৰ কৰা TLD list পূৰণ কৰে। ডাঙৰ TLD catalog থকা প্ৰদানকাৰীৰ বাবে import-এ 30–60 ছেকেণ্ড সময় ল’ব পাৰে।

TLDs-ও scheduled cron job-ৰ জৰিয়তে দিনে এবাৰ স্বয়ংক্ৰিয়ভাৱে পুনৰ sync কৰা হয়।

### ধাপ 5 — এটা domain product সৃষ্টি কৰক {#step-5--create-a-domain-product}

wizard-এ 10% markup-ৰ সৈতে এটা default catch-all domain product সৃষ্টি কৰে। আপুনি এই productটো তৎক্ষণাৎ সম্পাদনা কৰিব পাৰে বা skip কৰি **Ultimate Multisite › Products**-ৰ অধীনত products হাতেৰে সৃষ্টি কৰিব পাৰে।

সম্পূৰ্ণ product configuration guide-ৰ বাবে [Domain Products আৰু Pricing](./domain-products) চাওক।

---

## প্ৰদানকাৰী পুনৰ কনফিগাৰ কৰা {#reconfiguring-a-provider}

**Network Admin › Ultimate Multisite › Settings › Domain Seller**-লৈ যাওক (বা plugin list-ত **Settings** ক্লিক কৰক)।

settings page-ত আছে:

- **domain selling সক্ৰিয় কৰক** — সম্পূৰ্ণ featureটো on/off toggle কৰে
- **Default provider** — domain search আৰু নতুন products-ৰ বাবে ব্যৱহৃত প্ৰদানকাৰী
- **প্ৰতি search-ত সৰ্বাধিক TLDs** — customer-এ search কৰোঁতে কিমান TLDs চেক কৰিব; উচ্চ মানে অধিক বিকল্প দেখুৱায় কিন্তু লেহেমীয়া
- **Availability cache duration** — availability আৰু pricing results কিমান সময় cache কৰিব; কম মান অধিক সঠিক কিন্তু API calls বৃদ্ধি কৰে
- **domain products পৰিচালনা কৰক** — Products list-লৈ quick link
- **প্ৰদানকাৰীসমূহ কনফিগাৰ কৰক** — প্ৰদানকাৰী যোগ বা পুনৰ কনফিগাৰ কৰিবলৈ Integration Wizard খোলে

### দ্বিতীয় প্ৰদানকাৰী যোগ কৰা {#adding-a-second-provider}

**Configure providers** ক্লিক কৰক আৰু নতুন registrar-ৰ বাবে wizard পুনৰ চলাওক। আপোনাৰ একে সময়তে একাধিক প্ৰদানকাৰী কনফিগাৰ কৰা থাকিব পাৰে। প্ৰতিটো domain product-ৰ বাবে এটা নিৰ্দিষ্ট প্ৰদানকাৰী নিৰ্ধাৰণ কৰক, বা default-ত ৰাখক।

### TLDs হাতেৰে sync কৰা {#syncing-tlds-manually}

settings page-ত, শেহতীয়া pricing টানিবলৈ যিকোনো কনফিগাৰ কৰা প্ৰদানকাৰীৰ কাষত **Sync TLDs** ক্লিক কৰক। কোনো প্ৰদানকাৰীয়ে wholesale pricing আপডেট কৰিলে বা নতুন TLDs যোগ কৰিলে ই উপযোগী।

---

## Logs {#logs}

প্ৰতিজন প্ৰদানকাৰীয়ে নিজৰ log channel-ত লিখে। Logs **Network Admin › Ultimate Multisite › Logs**-ৰ অধীনত চাব পাৰি:

| Log channel | বিষয়বস্তু |
|---|---|
| `domain-seller-registration` | সকলো registration চেষ্টা (সফল আৰু বিফল) |
| `domain-seller-renewal` | Renewal job results |
| `domain-seller-opensrs` | Raw OpenSRS API activity |
| `domain-seller-namecheap` | Raw Namecheap API activity |
| `domain-seller-hostafrica` | Raw HostAfrica API activity |
| `domain-seller-openprovider` | Raw Openprovider API activity |
| `domain-seller-hostinger` | Raw Hostinger API activity |
| `domain-seller-godaddy` | Raw GoDaddy API activity |
| `domain-seller-resellerclub` | Raw ResellerClub API activity |
| `domain-seller-namesilo` | Raw NameSilo API activity |
| `domain-seller-enom` | Raw Enom API activity |

---

## প্ৰদানকাৰীৰ capability notes {#provider-capability-notes}

প্ৰতিটো registrar API-এ একেবোৰ operations expose নকৰে। addon-এ নীৰৱে বিফল হোৱাৰ সলনি স্পষ্ট admin-facing errors-ৰ সৈতে unsupported operations দেখুৱায়।

- **HostAfrica**-এ আটাইতকৈ বিস্তৃত লাইভ পুনৰ্বিক্ৰেতা কাৰ্যপ্ৰবাহ সমৰ্থন কৰে, য’ত lookup, TLD/মূল্য sync, পঞ্জীয়ন, নবীকৰণ, স্থানান্তৰ, nameserver আপডেট, DNS ৰেকৰ্ড, EPP কোড, registrar lock, আৰু ID সুৰক্ষা অন্তৰ্ভুক্ত।
- **Openprovider**-এ পুনৰ্বিক্ৰেতা-মূল্যযুক্ত TLD sync, পঞ্জীয়ন, নবীকৰণ, স্থানান্তৰ, nameserver আপডেট, DNS zone, EPP কোড, registrar lock, আৰু WHOIS গোপনীয়তা সমৰ্থন কৰে। ই এটা স্বল্প-সময়ৰ bearer token-ৰে প্ৰমাণীকৰণ কৰে, যিটো addon-এ স্বয়ংক্ৰিয়ভাৱে refresh কৰে।
- **Hostinger**-এ শ্বেয়াৰ কৰা hPanel API token-ৰ জৰিয়তে উপলব্ধতা সন্ধান, পঞ্জীয়ন, portfolio lookup, nameserver আপডেট, registrar lock, আৰু WHOIS গোপনীয়তা সমৰ্থন কৰে। Hostinger-ৰ ৰাজহুৱা Domains API-এ পুনৰ্বিক্ৰেতা/wholesale মূল্য, inbound transfer, explicit renewal, বা EPP-code retrieval উন্মুক্ত নকৰে; নবীকৰণ কেৱল auto-renew হয়।
