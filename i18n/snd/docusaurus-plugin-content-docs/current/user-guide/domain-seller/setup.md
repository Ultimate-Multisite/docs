---
title: تنصيب ۽ پرووڊائزر کانگيشن
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# ডোমেইন সেলার: সেটআপ এবং প্রোভাইডার কনফিগারেশন

ডোমেইন সেলার অ্যাড-অনটি একটি গাইড করা সেটআপ উইজার্ডের সাথে আসে যা আপনাকে প্রতিটি প্রয়োজনীয় ধাপ ধাপে ধাপে বুঝিয়ে দেবে। এই পেজটিতে আমরা উইজার্ডের প্রবাহ এবং পরে কীভাবে প্রোভাইডার কনফিগার বা পুনরায় কনফিগার করতে হয় তা আলোচনা করব।

## প্রয়োজনীয়তা

- **Multisite Ultimate** v2.4.12 বা তার বেশি, নেটওয়ার্ক-অ্যাক্টিভেটেড
- **PHP** 7.4+
- অন্তত একটি সমর্থিত রেজিস্টারের জন্য API ক্রেডেনশিয়াল

## প্রথমবার সেটআপ উইজার্ড

প্রথমবার আপনি প্লাগইনটি নেটওয়ার্ক-অ্যাক্টিভেট করার সময় সেটআপ উইজার্ডটি স্বয়ংক্রিয়ভাবে চালু হবে। এটি যেকোনো সময় **Network Admin › Ultimate Multisite › Domain Seller Setup** থেকে পাওয়া যাবে।

### ধাপ ১ — একটি প্রোভাইডার বেছে নিন

আপনি যে রেজিস্টারের সাথে সংযোগ করতে চান সেটি নির্বাচন করুন। সমর্থিত বিকল্পগুলি:

| Provider | DNS management | WHOIS privacy |
|---|---|---|
| OpenSRS | হ্যাঁ | হ্যাঁ |
| Namecheap | না | হ্যাঁ (WhoisGuard, ফ্রি) |
| HostAfrica | হ্যাঁ | হ্যাঁ (ID সুরক্ষা) |
| Openprovider | হ্যাঁ | হ্যাঁ |
| Hostinger | হোস্টেড ডোমেইনের জন্য কোর Hostinger ডোমেইন ম্যাপিংয়ের মাধ্যমে | হ্যাঁ |
| GoDaddy | না | না |
| ResellerClub | হ্যাঁ | না |
| NameSilo | না | না |
| Enom | হ্যাঁ | না |

### ধাপ ২ — ক্রেডেনশিয়াল প্রবেশ করান

প্রতিটি প্রোভাইডারের আলাদা ক্রেডেনশিয়াল ফিল্ড থাকে:

**OpenSRS** — ইউজারনেম এবং প্রাইভেট কী (OpenSRS Reseller Control Panel থেকে)

**Namecheap** — ইউজারনেম এবং API কী (Account › Tools › API Access থেকে)

**HostAfrica** — HostAfrica রিসেলার মডিউল থেকে ডোমেইনস রিসেলার API এন্ডপয়েন্ট এবং ক্রেডেনশিয়াল। বর্তমানে আলাদা কোনো স্যান্ডবক্স এন্ডপয়েন্ট ডকুমেন্ট করা নেই; লাইভ রেজিস্ট্রেশন চালানোর আগে নিরাপদ রিড-অনলি চেক দিয়ে পরীক্ষা করুন।

**Openprovider** — ইউজারনেম এবং পাসওয়ার্ড, যেখানে API অ্যাক্সেস চালু থাকবে। ঐচ্ছিক স্যান্ডবক্স মোডে Openprovider স্যান্ডবক্স API ব্যবহার করা হয়, এবং রেজিস্ট্রেশনের জন্য একটি ঐচ্ছিক ডিফল্ট কাস্টমার হ্যান্ডেল পুনরায় ব্যবহার করা যেতে পারে।

**Hostinger** — کور Hostinger انٹیگریشنৰ পৰা শেয়াৰ্ড Hostinger hPanel API টোকেন। ই একেটা টোকেনৰে core domain mapping আৰু Domain Seller registration কামবোৰ কৰে।

**GoDaddy** — API key আৰু secret (developer.godaddy.com ৰ পৰা)

**ResellerClub** — Reseller ID আৰু API key (ResellerClub control panel ৰ পৰা)

**NameSilo** — API key (namesilo.com › Account › API Manager ৰ পৰা)

**Enom** — Account ID আৰু API token

যদি উপলব্ধ থাকে, প্ৰদানকাৰৰ ট্ৰেষ্ট এম্ব

- **Domain bechne (domain selling) enable karna** — is feature ko on/off karne ke liye toggle karein
- **Default provider** — woh provider jiska istemal domain search aur nayi products ke liye kiya jata hai
- **Max TLDs per search** — jab koi customer search karta hai to kitne TLDs check kiye jayenge; zyada values se zyada options dikhte hain lekin yeh slow ho sakte hain
- **Availability cache duration** — availability aur pricing results ko kitne time tak cache rakha jaye; kam values zyada accurate hoti hain lekin API calls badh jati hain
- **Manage domain products** — Products list ka quick link

- **Configure providers** — providers add karne ya unhe dobara set up karne ke liye Integration Wizard kholega

### Doosra provider jorna (Adding a second provider)

**Configure providers** par click karein aur naye registrar ke liye wizard ko phir se chalaein. Aap ek hi waqt mein kai providers configure kar sakte hain. Har domain product ko kisi khaas provider ko assign karein, ya default par chhod dein.

### TLDs ko manually sync karna (Syncing TLDs manually)

Settings page mein, kisi bhi configured provider ke bagal mein **Sync TLDs** par click karein taaki latest pricing aa jaye. Yeh tab kaam aata hai jab koi provider wholesale pricing update karta hai ya nayi TLDs add karta hai.

---

## Logs (Logs)

Har provider apne alag log channel par likhta hai. Aap **Network Admin › Ultimate Multisite › Logs** ke andar logs dekh sakte hain:

| Log channel | Contents |
|---|---|
| `domain-seller-registration` | سڀني رجيستريشن جي ڪوششون (ڪامياب ۽ ناڪامي) |
| `domain-seller-renewal` | تجديد جو ڪم جو نتيجا |
| `domain-seller-opensrs` | خام OpenSRS API سرگرمين جي سرگرمي |
| `domain-seller-namecheap` | خام Namecheap API سرگرمين جي سرگرمي |
| `domain-seller-hostafrica` | خام HostAfrica API سرگرمين جي سرگرمي |
| `domain-seller-openprovider` | خام Openprovider API سرگرمين جي سرگرمي |
| `domain-seller-hostinger` | خام Hostinger API سرگرمين جي سرگرمي |
| `domain-seller-godaddy` | خام GoDaddy API سرگرمين جي سرگرمي |
| `domain-seller-resellerclub` | خام ResellerClub API سرگرمين جي سرگرمي |
| `domain-seller-namesilo` | خام NameSilo API سرگرمين جي سرگرمي |
| `domain-seller-enom` | خام Enom API سرگرمين جي سرگرمي |

---

## پراڊائڊر صلاحيتون (Provider capability notes)

هر رجيستريٽر جو API هڪ ئي ڪم ڏيکاري ٿو نه. addon ان ڪمن کي جيڪا سپورٽ نه آهي، واضح اڪماء (errors) سان ڏيکاري ٿو جنهن عام طور تي chupchap ناڪام ٿيندا آهن.

- **HostAfrica** وڏي تر جي ريزلير ڪم جو عمل سپورٽ ڪري ٿو، جنهن ۾ لکوپ، TLD/پرائسنگ سنڪرني، رجيستريشن، تجديد، منتقلي (transfer)، نيمسر سرگرمين ۾ اپڊيٽ، DNS رڪارڊز، EPP ڪوڊز، رجيستريٽر لاک، ۽ ID پروڪشن شامل آهي.
- **Openprovider** ريزلير جي قيمت تي TLD سنڪرني، رجيستريشن، تجديد، منتقلي، نيمسر سرگرمين ۾ اپڊيٽ، DNS زونز، EPP ڪوڊز، رجيستريٽر لاک، ۽ WHOIS پرائیویسی سپورٽ ڪري ٿو. اهو هڪ مختصر وقت جي لاءِ واري bearer token سان تصديق ڪري ٿو جنهن کي addon خود بخاري طور تي نئين صورت ۾ اپڊيٽ ڪري ٿو.
- **Hostinger** شئرڊ hPanel API token جي ذريعي ايفائليبلٽي سرچ، رجيستريشن، پورٽ فوليو لکوپ، نيمسر سرگرمين ۾ اپڊيٽ، رجيستريٽر لاک، ۽ WHOIS پرائیویسی سپورٽ ڪري ٿو. Hostinger جو پبلڪ Domains API ريزلير/ wholesale قيمت، ان باهه منتقلي (inbound transfer)، واضح تجديد، يا EPP-ڪوڊ حاصل ڪرڻ کي ڏيکاري نه ٿو؛ تجديد خود بخاري طور تي خود بخاري ٿيندا آهن.
