---
title: প্রাথমিক প্রস্তুতি ও প্রদানকারীর বিন্যাস
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: সেটআপ এবং Provider কনফিগারেশন

Domain Seller addon-এ একটি নির্দেশিত সেটআপ উইজার্ড আছে, যা আপনাকে প্রয়োজনীয় প্রতিটি ধাপ দেখিয়ে এগিয়ে নেয়। এই পৃষ্ঠায় উইজার্ডের প্রবাহ এবং পরে কীভাবে Provider কনফিগার বা পুনরায় কনফিগার করবেন তা বলা হয়েছে।

## প্রয়োজনীয়তা {#requirements}

- **Ultimate Multisite** v2.4.12 বা তার বেশি, নেটওয়ার্ক-সক্রিয়
- **PHP** 7.4+
- অন্তত একটি সমর্থিত রেজিস্ট্রারের জন্য API ক্রেডেনশিয়াল

## প্রথমবারের সেটআপ উইজার্ড {#first-run-setup-wizard}

প্রথমবার আপনি plugin-টি নেটওয়ার্ক-সক্রিয় করলে সেটআপ উইজার্ড স্বয়ংক্রিয়ভাবে চালু হয়। এটি যেকোনো সময় **Network Admin › Ultimate Multisite › Domain Seller Setup** থেকেও পাওয়া যায়।

### ধাপ ১ — একটি Provider বেছে নিন {#step-1--choose-a-provider}

আপনি যে রেজিস্ট্রারের সঙ্গে সংযোগ করতে চান সেটি নির্বাচন করুন। সমর্থিত বিকল্প:

| Provider | DNS ব্যবস্থাপনা | WHOIS গোপনীয়তা |
|---|---|---|
| OpenSRS | হ্যাঁ | হ্যাঁ |
| Namecheap | না | হ্যাঁ (WhoisGuard, বিনামূল্যে) |
| HostAfrica | হ্যাঁ | হ্যাঁ (ID সুরক্ষা) |
| Openprovider | হ্যাঁ | হ্যাঁ |
| Hostinger | হোস্ট করা ডোমেইনের জন্য মূল Hostinger ডোমেইন ম্যাপিংয়ের মাধ্যমে | হ্যাঁ |
| GoDaddy | না | না |
| ResellerClub | হ্যাঁ | না |
| NameSilo | না | না |
| Enom | হ্যাঁ | না |

### ধাপ ২ — ক্রেডেনশিয়াল দিন {#step-2--enter-credentials}

প্রতিটি Provider-এর ক্রেডেনশিয়াল field আলাদা:

**OpenSRS** — Username এবং private key (OpenSRS Reseller Control Panel থেকে)

**Namecheap** — Username এবং API key (Account › Tools › API Access থেকে)

**HostAfrica** — HostAfrica reseller module থেকে Domains Reseller API endpoint এবং ক্রেডেনশিয়াল। বর্তমানে আলাদা sandbox endpoint নথিভুক্ত নেই; live registration চালানোর আগে নিরাপদ read-only check দিয়ে পরীক্ষা করুন।

**Openprovider** — API access চালু থাকা Username এবং password। ঐচ্ছিক sandbox mode Openprovider sandbox API ব্যবহার করে, এবং registration-এর জন্য ঐচ্ছিক default customer handle পুনরায় ব্যবহার করা যায়।

**Hostinger** — মূল Hostinger integration থেকে shared Hostinger hPanel API token। একই token মূল domain mapping এবং Domain Seller registration অপারেশন চালায়।

**GoDaddy** — API key এবং secret (developer.godaddy.com থেকে)

**ResellerClub** — Reseller ID এবং API key (ResellerClub control panel থেকে)

**NameSilo** — API key (namesilo.com › Account › API Manager থেকে)

**Enom** — Account ID এবং API token

লাইভে যাওয়ার আগে Provider-এর test environment-এ পরীক্ষা করতে যেখানে পাওয়া যায় সেখানে **Sandbox mode** নির্বাচন করুন।

### ধাপ ৩ — সংযোগ পরীক্ষা করুন {#step-3--test-the-connection}

**Test Connection** ক্লিক করুন। উইজার্ড ক্রেডেনশিয়াল এবং সংযোগ যাচাই করতে একটি হালকা API call পাঠায়। এগিয়ে যাওয়ার আগে যেকোনো ক্রেডেনশিয়াল সমস্যা ঠিক করুন।

### ধাপ ৪ — TLD আমদানি করুন {#step-4--import-tlds}

সংযুক্ত Provider থেকে সব উপলভ্য TLD এবং wholesale pricing আনতে **Import TLDs** ক্লিক করুন। এটি domain product-এ ব্যবহৃত TLD list পূরণ করে। বড় TLD catalog থাকা Provider-এর ক্ষেত্রে import করতে ৩০–৬০ সেকেন্ড লাগতে পারে।

নির্ধারিত cron job-এর মাধ্যমে TLD-গুলো দিনে একবার স্বয়ংক্রিয়ভাবেও পুনরায় sync হয়।

### ধাপ ৫ — একটি domain product তৈরি করুন {#step-5--create-a-domain-product}

উইজার্ড ১০% markup সহ একটি default catch-all domain product তৈরি করে। আপনি এই product সঙ্গে সঙ্গে edit করতে পারেন, অথবা skip করে **Ultimate Multisite › Products**-এর অধীনে নিজে product তৈরি করতে পারেন।

সম্পূর্ণ product configuration guide-এর জন্য [Domain Products and Pricing](./domain-products) দেখুন।

---

## Provider পুনরায় কনফিগার করা {#reconfiguring-a-provider}

**Network Admin › Ultimate Multisite › Settings › Domain Seller**-এ যান (অথবা plugin list-এ **Settings** ক্লিক করুন)।

settings পৃষ্ঠায় আছে:

- **Enable domain selling** — পুরো feature চালু/বন্ধ করার toggle
- **Default provider** — domain search এবং নতুন product-এর জন্য ব্যবহৃত Provider
- **Max TLDs per search** — customer search করলে কতটি TLD check করা হবে; বেশি মানে বেশি option দেখায়, কিন্তু ধীর
- **Availability cache duration** — availability এবং pricing result কতক্ষণ cache হবে; কম মান বেশি নির্ভুল, কিন্তু API call বাড়ায়
- **Manage domain products** — Products list-এ দ্রুত যাওয়ার link
- **Configure providers** — Provider যোগ বা পুনরায় কনফিগার করতে Integration Wizard খোলে

### দ্বিতীয় Provider যোগ করা {#adding-a-second-provider}

**Configure providers** ক্লিক করুন এবং নতুন রেজিস্ট্রারের জন্য আবার উইজার্ড চালান। একসঙ্গে একাধিক Provider কনফিগার করা থাকতে পারে। প্রতিটি domain product একটি নির্দিষ্ট Provider-এ assign করুন, অথবা default-এ রেখে দিন।

### ম্যানুয়ালি TLD sync করা {#syncing-tlds-manually}

settings পৃষ্ঠায়, সর্বশেষ pricing আনতে কনফিগার করা যেকোনো Provider-এর পাশে **Sync TLDs** ক্লিক করুন। কোনো Provider wholesale pricing আপডেট করলে বা নতুন TLD যোগ করলে এটি উপকারী।

---

## লগ {#logs}

প্রতিটি Provider নিজস্ব log channel-এ লেখে। **Network Admin › Ultimate Multisite › Logs**-এর অধীনে log দেখা যায়:

| Log channel | বিষয়বস্তু |
|---|---|
| `domain-seller-registration` | সব registration attempt (success এবং failure) |
| `domain-seller-renewal` | renewal job result |
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

## Provider সক্ষমতা সম্পর্কিত নোট {#provider-capability-notes}

প্রতিটি রেজিস্ট্রার API একই অপারেশন দেয় না। addon অসমর্থিত অপারেশনগুলো নীরবে ব্যর্থ না হয়ে স্পষ্ট admin-facing error হিসেবে দেখায়।

- **HostAfrica** সবচেয়ে বিস্তৃত লাইভ রিসেলার workflow সমর্থন করে, যার মধ্যে আছে lookup, TLD/pricing sync, registration, renewal, transfer, nameserver updates, DNS records, EPP codes, registrar lock, এবং ID protection।
- **Openprovider** রিসেলার-মূল্যের TLD sync, registration, renewal, transfers, nameserver updates, DNS zones, EPP codes, registrar lock, এবং WHOIS privacy সমর্থন করে। এটি স্বল্প-মেয়াদি bearer token দিয়ে প্রমাণীকরণ করে, যা addon স্বয়ংক্রিয়ভাবে refresh করে।
- **Hostinger** শেয়ার করা hPanel API token-এর মাধ্যমে availability search, registration, portfolio lookup, nameserver updates, registrar lock, এবং WHOIS privacy সমর্থন করে। Hostinger-এর public Domains API reseller/wholesale pricing, inbound transfer, explicit renewal, বা EPP-code retrieval প্রকাশ করে না; renewals কেবল auto-renew হয়।
