---
title: সদস্যপদৰ সমাপ্তি আৰু স্থান বন্ধ কৰা
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Membership Expiration আৰু Site Blocking

এই গাইডটোৱে ব্যাখ্যা কৰে যে Ultimate Multisite কেনেকৈ মেম্বৰশ্বিপৰ মেয়াদ শেষ হোৱা (expiration), ট্রায়েল শেষ হোৱা, আৰু ফ্ৰণ্টএণ্ডত সাইট ব্লক কৰে। ই এটা মেম্বৰশ্বিপৰ সক্ৰিয়ৰ পৰা মেয়াদোত্তৰ হোৱা জীৱনচক্ৰক কওঁ, কোনবোৰ সেটিংছৰ দ্বাৰা সাইট ব্লক কৰা হয়, আৰু মেম্বৰশ্বিপ মেয়াদোত্তৰ হোৱাৰ পিছতো সাইট কেনেকৈ উপলব্ধ থাকিব পাৰে, সেই বিষয়ে আলোচনা কৰে।

## Membership Status Lifecycle (মেম্বৰশ্বিপৰ স্থিতিৰ জীৱনচক্ৰ) {#membership-status-lifecycle}

Ultimate Multisite-ত থকা প্ৰতিটো মেম্বৰশ্বিপৰ তলত দিয়া কোনো এটা স্থিতি থাকে:

:::note Free memberships are lifetime
ফ্ৰী মেম্বৰশ্বিপবোৰ কেতিয়াও মেয়াদোত্তৰ নহয়। Ultimate Multisite ইয়াৰক জীৱনকালৰ সুবিধা বুলি গণ্য কৰে, গতিকে কোনো এডমিনিষ্ট্ৰেটৰে ইয়াৰ স্থিতি সলনি কৰা নহ'লে বা কাস্টমৰক আন কোনো প্ৰডাক্টলৈ নিব নহ'লে ইয়াৰ মেয়াদোত্তৰ পৰীক্ষাত অন্তৰ্ভুক্ত নহয়।
:::

| Status | Meaning |
|---|---|
| **Pending** | প্ৰথম পেমেন্ট বা ইমেইল ভেরিফিকেচনৰ বাবে অপেক্ষা কৰি আছে |
| **Trialing** | সক্ৰিয় ট্রায়েল সময়কাল, এতিয়াও কোনো পেমেন্ট সংগ্ৰহ কৰা হোৱা নাই |
| **Active** | পেমেন্ট কৰা আৰু বৰ্তমান সক্ৰিয় |
| **On Hold** | পুনৰীক্ষণ পেমেন্টৰ বাবে অপেক্ষা কৰি আছে (ইনভויছ সৃষ্টি কৰা হৈছে, পেমেন্টৰ বাবে অপেক্ষা) |
| **Expired** | মেয়াদোত্তৰ তাৰিখ আৰু সুবিধাৰ সময়কাল পাৰ হৈ গ'ল, কিন্তু পুনৰীক্ষণ কৰা নহ'ল |
| **Cancelled** | কাস্টমৰ বা এডমিনিষ্ট্ৰেটৰৰ দ্বাৰা স্পষ্টকৈ বাতিল কৰা হৈছে |

### How Memberships Transition to Expired (মেম্বৰশ্বিপবোৰ কেনেকৈ মেয়াদোত্তৰ হয়) {#how-memberships-transition-to-expired}

Ultimate Multisite এটা ব্যাকগ্ৰাউণ্ড চেকিং কৰে **প্ৰতি ঘণ্টাত** যিটো মেম্বৰশ্বিপবোৰক মেয়াদোত্তৰ বুলি চিহ্নিত কৰিব লাগে, তাক বিচাৰে। এই চেকিংটোৱে [Action Scheduler](https://actionscheduler.org/) ব্যৱহাৰ কৰে (সৰলভাৱে WP-Cron নহয়) আৰু ই `wu_membership_check` নামক এটা শিডিউল কৰা অ্যাকশন হিচাপে চলি থাকে।

এই মেয়াদোত্তৰ চেকিংত ডিফল্টভাৱে **৩ দিনৰ এটা বিল্ট-ইন সুবিধাৰ সময়কাল (grace period)** থাকে। এটা মেম্বৰশ্বিপৰ স্থিতি `expired` বুলি চিহ্নিত হ'ব নহয়, তাৰ `date_expiration` তাৰিখটোৰ ৩ দিন পাৰ হোৱাৰ পাছতো। ই কাস্টমৰক তেওঁলোকৰ স্থিতি সলনি হোৱাৰ আগতে পলমকৈ পেমেন্ট কৰাৰ বাবে সময় দিয়ে।

:::info
৩ দিনৰ মেয়াদোত্তৰ সুবিধাৰ সময়কালটো তলত বৰ্ণনা কৰা Frontend Block Grace Period সেটিংৰ পৰা পৃথক। মেয়াদোত্তৰ সুবিধাৰ সময়কালটো নিয়ন্ত্ৰণ কৰে যে স্থিতিটো Active/On-Hold ৰ পৰা Expired লৈ ক'ৰবাত সলনি হ'ব। ফ্ৰণ্টএণ্ড ব্লক সুবিধাৰ সময়কালটো নিয়ন্ত্ৰণ কৰে যে স্থিতি সলনি হোৱাৰ পিছত **সাইটটো ক'ৰবাত ব্লক হ'ব**।
:::

#### Auto-Renewing vs. Non-Auto-Renewing Memberships (স্বয়ংক্রিয় পুনৰীক্ষণ বনাম স্বয়ংক্রিয় পুনৰীক্ষণ নোহোৱা মেম্বৰশ্বিপ) {#auto-renewing-vs-non-auto-renewing-memberships}

মেয়াদোত্তৰ হোৱাৰ আচৰণ বুজিবলৈ এই পাৰ্থক্যটো অতি গুৰুত্বপূৰ্ণ:

- **Non-auto-renewing memberships** (`auto_renew = false`): ঘণ্টাকৈ হোৱা cron job-এ সম্পূৰ্ণ জীৱনচক্ৰটো সামৰি লয় — ই পুনৰীক্ষণ পেমেন্ট সৃষ্টি কৰে, মেম্বৰশ্বিপটো On-Hold লৈ স্থানান্তৰ কৰে, আৰু যদি পেমেন্ট নোপোৱা হয় তেন্তে ইয়াৰক মেয়াদোত্তৰ বুলি চিহ্নিত কৰে।

- **Auto-renewing memberships** (`auto_renew = true`): cron মেয়াদোত্তৰ চেকিংয়ে **এইবোৰক সম্পূৰ্ণৰূপে এৰাই যায়**। পেমেন্ট গেটৱে (Stripe, PayPal, ইত্যাদি) ক'ৰবাত কোনো সমস্যা হোৱা বা বাতিল হোৱা কাৰণে Webhooks যোগেদি Ultimate Multisite ক জনাওঁক বুলি আশা কৰা হয়। যদি webhook লাভ নহয় — কোনো ভুল কনফিগাৰেটেড endpoint, গেটৱেৰ সমস্যা, বা ব্যৱস্থাৰ বাহিৰত বাতিল হোৱা কোনো সাবস্ক্রিপচনৰ বাবে — তেন্তে মেয়াদোত্তৰ তাৰিখ পাৰ হোৱাৰ পিছতো মেম্বৰশ্বিপটো অনিৰ্দিষ্টকাললৈ `active` হৈ থাকিব পাৰে।

### How Trials End (ট্রায়েল কেনেকৈ শেষ হয়) {#how-trials-end}

এটা ট্রায়েলিং মেম্বৰশ্বিপৰ ট্রায়েল সময়কাল শেষ হোৱাৰ লগে লগে, ব্যৱস্থাই:

১. সম্পূৰ্ণ সাবস্ক্রিপচনৰ পৰিমাণৰে এটা পেন্ডিং পুনৰীক্ষণ পেমেন্ট সৃষ্টি কৰে
২. মেম্বৰশ্বিপৰ স্থিতি `trialing` ৰ পৰা `on-hold` লৈ স্থানান্তৰ কৰে
৩. কাস্টমৰক পুনৰীক্ষণ পেমেন্টৰ通知 ইমেইল পঠিয়ায়

এই প্ৰক্ৰিয়াটো সাধাৰণ মেয়াদোত্তৰ চেকিংৰ দৰেই ঘণ্টাকৈ চলি থাকে, কিন্তু **কেৱল non-auto-renewing memberships** ৰ বাবে। auto-renewing ট্রায়েলৰ বাবে, পেমেন্ট গেটৱেয়ে ট্রায়েলৰ পৰা পেমেন্ট কৰা সাবস্ক্রিপচনলৈ স্থানান্তৰ কৰে।

## Block Frontend Access (ফ্ৰণ্টএণ্ড প্ৰৱেশ বাধা দিয়া) {#block-frontend-access}

ডিফল্টভাৱে, এটা মেম্বৰশ্বিপ মেয়াদোত্তৰ হোৱা বা On Hold হৈ যোৱাৰ লগে লগে, **কেৱল wp-admin dashboard টোৱেই সীমিত কৰা হয়**। সাইটৰ public frontend বাহিৰৰ বাবে উপলব্ধ থাকে। public প্ৰৱেশো বাধা দিবলৈ, আপুনি **Block Frontend Access** সেটিংটো সক্ষম কৰিব লাগিব।

### Configuring the Setting (সেটিং কনফিগাৰ কৰা) {#configuring-the-setting}

**Ultimate Multisite > Settings > Memberships** লৈ যোৱা আৰু **Block Frontend Access** সক্ষম কৰা।

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

মেম্বৰশ্বিপ সেটিংছ পৃষ্ঠাৰ সম্পূৰ্ণ দৃশ্যটো তলত দিয়া হ'ল:

![Membership settings full page](/img/config/settings-membership-full.png)

এই আচৰণটো নিয়ন্ত্ৰণ কৰা তিনিটা সম্পৰ্কিত সেটিং আছে:

| Setting | Description | Default |
|---|---|---|
| **Block Frontend Access** | মূল টগল। সক্ষম কৰিলে, মেম্বৰশ্বিপ সক্ৰিয় নোহোৱা হ'লে নেটৱৰ্ক সাইটৰ public frontend ব্লক কৰে। | Off |
| **Frontend Block Grace Period** | মেম্বৰশ্বিপ নিষ্ক্ৰিয় হোৱাৰ পিছত ব্লক কৰাৰ আগতে অপেক্ষা কৰিবলগীয়া দিনৰ সংখ্যা। তৎক্ষণাত ব্লক কৰিবলৈ `0` সেট কৰক। | 0 |
| **Frontend Block Page** | এটা সাইট ব্লক হোৱাৰ লগে লগে ভ্ৰমণকাৰীক স্থানান্তৰ কৰিবলৈ মূল সাইটত থকা এটা পৃষ্ঠা। যদি সেট কৰা নহয়, তেন্তে ভ্ৰমণকাৰীসকলে এটা সাধাৰণ "Site not available" বা বৰ্ণনা দেখিব। | None |

### What Visitors See When a Site Is Blocked (সাইট ব্লক হোৱাৰ লগে লগে ভ্ৰমণকাৰীসকলে কি দেখে) {#what-visitors-see-when-a-site-is-blocked}

ফ্ৰণ্টএণ্ড প্ৰৱেশ বাধা দিয়া হ'লে, সাইটটোৰ ভ্ৰমণকাৰীসকলে হয়:

১. **স্থানান্তৰ কৰা হয়** আপুনি **Frontend Block Page** ত বাছনি কৰা পৃষ্ঠালৈ (যদি কনফিগাৰ কৰা হৈছে), অথবা
২. **এটা ডিফল্ট বৰ্ণনা দেখে**: "This site is not available at the moment." আৰু সাইট এডমিনিটৰৰ বাবে লগইন পৃষ্ঠাৰ লগত এটা লিংক।

সাইট এডমিনিটৰসকলে এতিয়াও লগইন কৰিব পাৰে — লগইন পৃষ্ঠাখন কেতিয়াও ব্লক নহয়।

### What Gets Blocked and When (কি ব্লক হয় আৰু ক'ৰবাত) {#what-gets-blocked-and-when}

ব্লকিং আচৰণটো মেম্বৰশ্বিপৰ স্থিতিৰ ওপৰত নিৰ্ভৰ কৰে:

| Membership Status | Frontend Blocked? | Grace Period Applied? |
|---|---|---|
| Active | No | -- |
| Trialing | **No** (তলত দিয়া টোকাটো চাওক) | -- |
| On Hold | Considered active -- not blocked | -- |
| Expired | **Yes**, if Block Frontend Access is on | Yes |
| Cancelled | **Yes**, always (regardless of setting) | **No** -- তৎক্ষণাত ব্লক হয় |
| Pending | Not blocked via membership check | -- |

:::warning Trialing memberships are not blocked
এটা ট্রায়েল সময়কাল শেষ হোৱাৰ পিছতো, `trialing` স্থিতি থকা মেম্বৰশ্বিপটো ফ্ৰণ্টএণ্ডত **ব্লক নহ'ব**। ট্রায়েলটো প্ৰথমে আন এটা স্থিতি লৈ স্থানান্তৰ হ'ব লাগিব (সাধাৰণতে cron jobৰ দ্বাৰা `on-hold`, তাৰ পিছত যদি পেমেন্ট নহয় তেন্তে `expired`)। যদি আপুনি ট্রায়েলিং মেম্বৰশ্বিপ দেখা পায় যি স্থানান্তৰ হোৱা নাই, তেন্তে তলৰ সমস্যা সমাধান অংশটো চাওক।
:::

:::note Cancelled memberships bypass the grace period
বাতিল কৰা মেম্বৰশ্বিপবোৰ কেতিয়াও মেয়াদোত্তৰ তাৰিখ পাৰ হোৱাৰ লগে লগে ব্লক হয়, Block Frontend Access সক্ষম হৈ থকা বা নহ'লেও। Frontend Block Grace Period বাতিল কৰা মেম্বৰশ্বিপলৈ প্ৰযোজ্য নহয়।
:::

## Troubleshooting: Sites Remaining Accessible After Expiration (সমস্যা সমাধান: মেয়াদোত্তৰ হোৱাৰ পিছতো সাইট উপলব্ধ থকা) {#troubleshooting-sites-remaining-accessible-after-expiration}

যদি মেম্বৰশ্বিপ মেয়াদোত্তৰ হোৱাৰ পিছতো সাইটবোৰ publicভাৱে উপলব্ধ থাকে, তেন্তে এই চেকিংবোৰ ক্ৰম অনুসৰি কৰক:

### 1. Verify the Block Frontend Access Setting Is Enabled (Block Frontend Access সেটিং সক্ষম হৈ আছে বুলি পৰীক্ষা কৰক) {#1-verify-the-block-frontend-access-setting-is-enabled}

**Ultimate Multisite > Settings > Memberships** লৈ যোৱা আৰু **Block Frontend Access** টগলটো সক্ষম হৈ আছে বুলি নিশ্চিত কৰা। এই সেটিংটো **ডিফল্টভাৱে বন্ধ** থাকে, যাৰ অৰ্থ হ'ল মেম্বৰশ্বিপ নিষ্ক্ৰিয় হোৱাৰ লগে লগে কেৱল wp-admin সীমিত হয়।

### 2. Check the Frontend Block Grace Period (ফ্ৰণ্টএণ্ড ব্লক সুবিধাৰ সময়কাল পৰীক্ষা কৰক) {#2-check-the-frontend-block-grace-period}

একে সেটিংছ পৃষ্ঠাখনত, **Frontend Block Grace Period** মানটো পৰীক্ষা কৰা। যদি ইয়াক ৭ দিনলৈ সেট কৰা হৈছে, উদাহৰণস্বৰূপে, মেম্বৰশ্বিপৰ মেয়াদোত্তৰ তাৰিখৰ ৭ দিন পাৰ হোৱালৈকে ফ্ৰণ্টএণ্ড ব্লক নহ'ব — আনকি মেম্বৰশ্বিপৰ স্থিতি ইতিমধ্যে `expired` হৈ থকাৰ বাবেও।

যদি আপুনি মেম্বৰশ্বিপ নিষ্ক্ৰিয় হোৱাৰ লগে লগে তৎক্ষণাত ব্লক কৰিব বিচাৰে, তেন্তে ইয়াক `0` সেট কৰক।

### 3. Confirm the Membership Status Has Actually Changed (মেম্বৰশ্বিপৰ স্থিতি ખৰদিয় সলনি হৈছে বুলি নিশ্চিত কৰক) {#3-confirm-the-membership-status-has-actually-changed}

**Ultimate Multisite > Memberships** লৈ যোৱা আৰু প্ৰভাৱিত মেম্বৰশ্বিপটোৰ স্থিতি পৰীক্ষা কৰা। যদি মেয়াদোত্তৰ তাৰিখ পাৰ হোৱাৰ পাছতো ইয়াৰ স্থিতি `active` দেখুৱায়, তেন্তে স্থিতি স্থানান্তৰ হোৱা নাই। সাধাৰণ কাৰণসমূহ:

- **মেম্বৰশ্বিপটো auto-renewing**: মেম্বৰশ্বিপ এডিট পৃষ্ঠাখনত `auto_renew` ফিল্ডটো চাওক। যদি auto-renew সক্ষম কৰা হৈছে, তেন্তে মেয়াদোত্তৰ cron e এই মেম্বৰশ্বিপটো এৰাই যায় — ই পেমেন্ট গেটৱেটক ব্যর্থতাৰ বিষয়ে রিপোর্ট কৰিবলৈ নিৰ্ভৰ কৰে। আপোনাৰ গেটৱে ড্যাশবৰ্ড (Stripe, PayPal) পৰীক্ষা কৰি সাবস্ক্রিপচনৰ স্থিতি Ultimate Multisite লৈ দেখুৱাই থকাৰ সৈতে মিল আছে নে নাই নিশ্চিত কৰক।

- **cron job চলি নাই**: পৰৱৰ্তী পদক্ষেপটো চাওক।

### 4. Verify Action Scheduler Is Running (Action Scheduler চলি আছে বুলি পৰীক্ষা কৰক) {#4-verify-action-scheduler-is-running}

Ultimate Multisite ইয়াৰ cron job-ৰ বাবে Action Scheduler ব্যৱহাৰ কৰে। নেটৱৰ্ক এডমিনত **Tools > Scheduled Actions** লৈ যোৱা আৰু তলত দিয়াটো বিচাৰো:

- **`wu_membership_check`** — ইয়াৰক প্ৰতি ঘণ্টাত চলি থকা এটা পুনৰাবৃত্ত হোৱা অ্যাকশন হিচাপে দেখা উচিত। যদি ই নাই, তেন্তে মেম্বৰশ্বিপ চেকিংবোৰ শিডিউল কৰা হোৱা নাই।
- **`wu_async_mark_membership_as_expired`** — এইবোৰ নির্দিষ্ট মেম্বৰশ্বিপবোৰক মেয়াদোত্তৰ বুলি চিহ্নিত কৰিবলৈ একক কাৰ্য। যদি আপুনি ইয়াত কোনো ব্যর্থ অ্যাকশন দেখা পায়, তেন্তে তেওঁলোকে কিয় তাৰ ফলত এটা ভুল বৰ্ণনা দিব পাৰে।

যদি আপুনি থমকি ৰোৱা বা ব্যর্থ অ্যাকশন দেখা পায়, তেন্তে আপোনাৰ Action Scheduler সমস্যা হ'ব পাৰে। সাধাৰণ কাৰণসমূহ:

- `wp-config.php` ত **`DISABLE_WP_CRON`** `true` সেট কৰা হৈছে আৰু কোনো system-level cron replacement নাই।
- **কম সাইট ট্ৰেফিক** — WP-Cron কেৱল কোনোৱে সাইটলৈ আহিলেহে চলি।

reliable cron execution নিশ্চিত কৰিবলৈ, এটা system cron job সেট কৰক:

```bash
# Run every 5 minutes via wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Or via WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Check for Gateway Webhook Issues (Auto-Renewing Memberships) (গেটৱে webhook সমস্যা পৰীক্ষা কৰক) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

যদি মেম্বৰশ্বিপটো auto-renewing হয় আৰু গেটৱে সাবস্ক্রিপচন বাতিল হৈ গ'ল বা ব্যর্থ হৈ গ'ল, কিন্তু Ultimate Multisite এতিয়াও ইয়াক `active` দেখুৱায়:

- **Stripe**: Stripe Dashboard > Customers লৈ যোৱা আৰু সাবস্ক্রিপচনৰ স্থিতি পৰীক্ষা কৰা। তাৰ পিছত Developers > Webhooks তলত webhook endpoint টি সক্ৰিয় আছে নে নাই পৰীক্ষা কৰা। endpoint টো আপোনাৰ সাইটলৈ আঙুলিয়াই দিব লাগিব আৰু সফল ডেলিভাৰী দেখুৱাব লাগিব।
- **PayPal**: আপোনাৰ PayPal business account ত সাবস্ক্রিপচনৰ স্থিতি পৰীক্ষা কৰা আৰু IPN/webhook ডেলিভাৰী পৰীক্ষা কৰা।

যদি গেটৱেয়ে সাবস্ক্রিপচনটো বাতিল বুলি দেখুৱায় কিন্তু Ultimate Multisite এ দেখুৱায় নাই, তেন্তে webhook notification টো হেৰুৱাই গ'ল। আপুনি **Ultimate Multisite > Memberships > [Edit Membership]** ত মেম্বৰশ্বিপৰ স্থিতিটো হাতেৰে সলনি কৰিব পাৰে।

### 6. Check the Expiration Grace Period (Cron Level) (মেয়াদোত্তৰ সুবিধাৰ সময়কাল পৰীক্ষা কৰক) {#6-check-the-expiration-grace-period-cron-level}

cron চেকিংৰ নিজৰ সুবিধাৰ সময়কাল (ডিফল্ট: ৩ দিন) আছে যাৰ পিছত মেম্বৰশ্বিপটো মেয়াদোত্তৰ বুলি চিহ্নিত কৰা হয়। ই ফ্ৰণ্টএণ্ড ব্লক সুবিধাৰ সময়কালৰ পৰা পৃথক। সাইট ব্লক হোৱাৰ আগতে মুঠ সময় হ'ব পাৰে:

**Expiration grace period (৩ দিন)** + **Frontend block grace period (আপোনাৰ সেটিং)** = মুঠ বিলম্ব

উদাহৰণস্বৰূপে, ডিফল্ট সেটিং আৰু ৭ দিনৰ ফ্ৰণ্টএণ্ড সুবিধাৰ সময়কালৰ লগে লগে, `date_expiration` তাৰিখৰ পিছত সাইটটো ব্লক হোৱাৰ আগতে ১০ দিনলৈকে সময় লাগিব পাৰে।

### 7. Manually Expire a Membership (মেম্বৰশ্বিপ হাতেৰে মেয়াদোত্তৰ কৰা) {#7-manually-expire-a-membership}

যদি আপুনি cron চক্ৰৰ বাবে অপেক্ষা নকৰি তৎক্ষণাত এটা সাইট ব্লক কৰিব বিচাৰে, তেন্তে আপুনি মেম্বৰশ্বিপৰ স্থিতি হাতেৰে সলনি কৰিব পাৰে:

১. **Ultimate Multisite > Memberships** লৈ যোৱা
২. প্ৰভাৱিত মেম্বৰশ্বিপটোত ক্লিক কৰা
৩. স্থিতিটো **Expired** বা **Cancelled** লৈ সলনি কৰা
৪. **Save** ক্লিক কৰা

ফ্ৰণ্টএণ্ড ব্লকটো পৰৱৰ্তী পৃষ্ঠা লোডৰ সময়ত প্ৰভাৱিত হ'ব (মেয়াদোত্তৰ মেম্বৰশ্বিপৰ বাবে Frontend Block Grace Period অনুসৰি, বা বাতিল কৰা মেম্বৰশ্বিপৰ বাবে তৎক্ষণাত)।

## Summary (সৰসংক্ষেপ) {#summary}

মেয়াদোত্তৰ তাৰিখৰ পৰা সাইট ব্লক হোৱালৈকে সম্পূৰ্ণ সময়ৰ ৰেখাচিত্র:

```text
date_expiration passes
       |
       v
  [3-day cron grace period]     <-- membership still shows as active/on-hold
       |
       v
  Cron marks membership as "expired"
       |
       v
  [Frontend Block Grace Period]  <-- configured in Settings > Memberships
