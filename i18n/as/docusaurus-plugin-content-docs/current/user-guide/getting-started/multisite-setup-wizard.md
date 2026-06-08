---
title: Multisite Setup Wizard
sidebar_position: 3
_i18n_hash: fd09dc94f24b0b37245b847380feea3f
---
# Multisite Setup Wizard

Ultimate Multisite-ত এটা বিল্ট-ইন Wizard আছে, যিয়ে এটা সাধাৰণ WordPress installation-ক স্বয়ংক্রিয়ভাৱে এটা WordPress Multisite network-ত পৰিৱৰ্তন কৰে। ইয়াৰ ফলত আপুনি `wp-config.php` হাতেৰে সম্পাদনা কৰিবলগীয়া নহয় বা ডেটাবেছ কমাণ্ড (database commands) চলাইবলগীয়া নহয়।

:::tip
যদি আপোনাৰ WordPress installation ইতিমধ্যে এটা Multisite network হিচাপে চলি আছে, তেন্তে আপুনি এই ধাপটো সম্পূৰ্ণৰূপে এৰি যাব পাৰে। Multisite সক্ষম নহ'লেহে এই Wizard-টো দেখুৱাই।
:::

## Wizard ক'ত দেখুৱাই?

আপুনি এটা সাধাৰণ (non-Multisite) WordPress installation-ত Ultimate Multisite activate কৰিলে, plugin-টোৱে ধৰিব যে Multisite সক্ষম নহ'ল আৰু সেয়েহে, সাধাৰণ setup wizard-ৰ সলনি স্বয়ংক্রিয়ভাৱে আপোনাক Multisite Setup Wizard-লৈ rediret কৰে।

আপুনি ইয়াক **WP Admin > Ultimate Multisite > Multisite Setup** তো পোনপটীয়াকৈ অ্যাক্সেছ কৰিব পাৰে।

## প্ৰয়োজনীয়তা (Prerequisites)

Wizard-টো চলাইবলৈ আগতে, নিশ্চিত কৰক যে:

- আপোনাৰ WordPress installation-ত **administrator access** আছে
- আপোনাৰ server-ৰ `wp-config.php` ফাইলটো web server দ্বাৰা **writable** (সম্পাদনা কৰিব পৰা)
- আপোনাৰ ফাইল আৰু ডেটাবেছৰ এটা **recent backup** আছে

:::warning
এই Wizard-টোৱে আপোনাৰ `wp-config.php` ফাইলটো সলনি কৰে আৰু নতুন ডেটাবেছ টেবুল (database tables) সৃষ্টি কৰে। আগুৱাই যোৱাৰ আগতে সদায় এটা backup সৃষ্টি কৰক।
:::

## Step 1: Welcome

প্ৰথম স্ক্রীণত ব্যাখ্যা কৰা হৈছে যে WordPress Multisite কি আৰু Wizard-টোৱে কি কৰিব:

- আপোনাৰ WordPress configuration-ত Multisite feature সক্ষম কৰা
- প্ৰয়োজনীয় network database tables সৃষ্টি কৰা
- `wp-config.php`-ত প্ৰয়োজনীয় multisite constants যোগ কৰা
- network-ৰ সকলো ঠাইতে Ultimate Multisite network-activate কৰা

![Multisite Setup Wizard - Welcome step](/img/installation/multisite-wizard/wizard-welcome.png)

প্ৰগতি কৰিবলৈ **Continue** ক্লিক কৰক।

## Step 2: Network Configuration

এই ধাপটোৱে আপোনাক আপোনাৰ network settings configure কৰিবলৈ কয়।

### Site Structure

আপোনাৰ network site সমূহ কেনেকৈ সংগঠিত হ'ব, সেইটো বাছি লওক:

- **Sub-domains** (প্ৰেৰ্শমান) — site সমূহৰ নিজৰ subdomain থাকিব, উদাহৰণস্বৰূপে, `site1.yourdomain.com`
- **Sub-directories** — site সমূহ পথ (paths) হিচাপে সৃষ্টি কৰা হয়, উদাহৰণস্বৰূপে, `yourdomain.com/site1`

:::note
যদি আপুনি sub-domains বাছি লয়, তেন্তে আপুনি নিজৰ domain-ৰ বাবে **wildcard DNS** আৰু এটা **wildcard SSL certificate** configure কৰিব লাগিব। বেছিভাগ managed WordPress host-এ ই স্বয়ংক্রিয়ভাৱে কৰি দিয়ে। অধিক তথ্যৰ বাবে [Ultimate Multisite 101](./ultimate-multisite-101) চাওক।
:::

### Network Title

আপোনাৰ network-ৰ বাবে এটা নাম দিয়ক। ই স্বয়ংক্রিয়ভাৱে আপোনাৰ বৰ্তমানৰ site title লৈ "Network" যোগ কৰি ডিফল্ট হয়। আপুনি ইয়াক পাছত network settingsৰ পৰা সলনি কৰিব পাৰে।

### Network Admin Email

network administration notification-ৰ বাবে ব্যৱহৃত ইমেইল ঠিকনা। ই বৰ্তমান ব্যৱহাৰকাৰীৰ ইমেইল ঠিকনা লৈ ডিফল্ট হয়।

![Multisite Setup Wizard - Network Configuration](/img/installation/multisite-wizard/wizard-network-configuration.png)

ফিল্ডবোৰ ভৰাই লোৱাৰ পিছত, প্ৰগতি কৰিবলৈ **Continue** ক্লিক কৰক।

## Step 3: Installation

শুরু কৰিবলৈ **Install** বাটনটো ক্লিক কৰক। Wizard-টোৱে অনুক্ৰমিকভাৱে পাঁচটা স্বয়ংক্রিয় ধাপ সম্পাদন কৰে, আৰু প্ৰতিটো ধাপৰ প্ৰগতি real-time-ত দেখুৱাই:

![Multisite Setup Wizard - Installation pending](/img/installation/multisite-wizard/wizard-installation-pending.png)

| Step | Description |
|------|-------------|
| **Enable Multisite** | `wp-config.php`-ত `WP_ALLOW_MULTISITE` constant যোগ কৰে |
| **Create Network** | multisite ডেটাবেছ টেবুলসমূহ (`wp_site`, `wp_sitemeta`, `wp_blogs`, ইত্যাদি) সৃষ্টি কৰে আৰু আপোনাৰ network configuration লৈ ইয়াক ভৰাই দিয়ে |
| **Update Configuration** | `wp-config.php`-ত শেষৰ multisite constants যোগ কৰে (`MULTISITE`, `SUBDOMAIN_INSTALL`, `DOMAIN_CURRENT_SITE`, ইত্যাদি) |
| **Fix Cookies** | activation হোৱাৰ পিছত authentication সমস্যা নহওঁক তাৰ বাবে network metadata ত site URL সঠিক আছে বুলি নিশ্চিত কৰে |
| **Network Activate Plugin** | Ultimate Multisite network-activate কৰে যাতে ই সমগ্ৰ network-ত চলি থাকে |

প্ৰতিটো ধাপত এই статусৰ এটা দেখুৱাই:

- **Pending** — প্ৰক্ৰিয়াকৰণৰ বাবে অপেক্ষা কৰি আছে
- **Installing...** — বৰ্তমান চলি আছে
- **Success!** — সফলভাৱে সম্পন্ন হ'ল
- **Error message** — এটা ভুল হৈছে (message-এ সমস্যাটো বৰ্ণনা কৰিব)

সকলো ধাপ সফলভাৱে সম্পন্ন হোৱাৰ পিছত, আপুনি প্ৰতিটো আইটেমৰ বাবে এটা সেউজীয়া "Success!" статус দেখিব:

![Multisite Setup Wizard - Installation complete](/img/installation/multisite-wizard/wizard-installation-complete.png)

Wizard-টোৱে তাৰ পিছত স্বয়ংক্রিয়ভাৱে completion screen-লৈ আগুৱাই যায়।

## Step 4: Complete

installation সম্পন্ন হোৱাৰ পিছত, আপুনি এটা success message দেখিব, যিয়ে নিশ্চিত কৰে যে WordPress Multisite সক্ষম হৈছে।

![Multisite Setup Wizard - Setup Complete](/img/installation/multisite-wizard/wizard-complete.png)

এতিয়া আপুনি আপোনাৰ WaaS platform configure কৰিবলৈ Ultimate Multisite setup wizard ক অব্যাহত ৰাখিব পাৰে (company details, default content, payment gateways, ইত্যাদি)।

:::note
multisite installation সম্পন্ন হোৱাৰ পিছত, আপোনাৰ browser-এ নতুনকৈ সক্ষম হোৱা network admin-ৰ মাজেৰে rediret হ'ব। Multisite environment-ৰ বাবে authentication cookies আপডেট হোৱাৰ বাবে আপুনি পুনৰ লগ ইন কৰিব লাগিব পাৰে।
:::

## Manual Setup Fallback

যদি Wizard-টোৱে আপোনাৰ `wp-config.php` ফাইলত লিখিব নোৱাৰে (file permissions বা server restrictions কাৰণতে), তেন্তে ই আপোনাক হাতেৰে যোগ কৰিবলগীয়া সঠিক কোডটো দেখুৱাব:

1. `/* That's all, stop editing! */` লাইনৰ ওপৰত যোগ কৰিবলগীয়া **wp-config.php constants**
2. আপুনি বাছি লোৱা site structure (subdomain বা subdirectory) লৈ উপযুক্ত **.htaccess rewrite rules**

হাতেৰে সলনি কৰাৰ পিছত, পৃষ্ঠাটো refresh কৰক আৰু Wizard-টোৱে ধৰিব যে multisite এতিয়া active।

## Troubleshooting

### Wizard-এ কোৱা হ'ল যে wp-config.php writable নহয়

আপোনাৰ web server process-ৰ `wp-config.php` ফাইলটোত write permission হ'ব লাগিব। আপুনি এইবোৰ কৰিব পাৰে:

- ফাইলৰ permission অস্থায়ীভাৱে `644` বা `666` লৈ সলনি কৰক
- Wizard-এ দিয়া manual setup fallback instructions ব্যৱহাৰ কৰক
- আপোনাৰ hosting provider-ক সহায় বিচৰক

### Setup হোৱাৰ পিছত site সমূহ অ্যাক্সেছ কৰিব নোৱাৰা (subdomains)

যদি আপুনি subdomain structure বাছি লৈছিল, তেন্তে আপুনি নিজৰ domain-ৰ বাবে **wildcard DNS** configure কৰিব লাগিব। এটা DNS record যোগ কৰক:

```
Type: A (or CNAME)
Host: *
Value: [your server IP]
```

যদি আপুনি কেনেকৈ configure কৰিব লাগে নিশ্চিত নহয়, তেন্তে আপোনাৰ hosting provider-ক পৰীক্ষা কৰক।

### Setup হোৱাৰ পিছত authentication সমস্যা

যদি multisite setup হোৱাৰ পিছত আপুনি logout হৈ যায় বা cookie error অনুভৱ কৰে:

1. site-ৰ বাবে আপোনাৰ browser cookies clear কৰক
2. `yourdomain.com/wp-login.php` ত পুনৰ লগ ইন কৰক
3. যদি সমস্যাটো চলি থাকে, তেন্তে নিশ্চিত কৰক যে আপোনাৰ `wp-config.php`-ত `COOKIE_DOMAIN` `false` সেট কৰা নাই — এইটো subdomain multisite installation-ত এটা জনা সমস্যা।

### Installation চলাকালীন এটা ধাপ বিফল হ'ল

যদি installation-ৰ এটা ধাপত error দেখুৱাই:

1. দেখুওৱা error message টো মনত ৰাখক
2. configuration ধাপলৈ উভতি যোৱা আৰু পুনৰ চেষ্টা কৰক
3. যদি error টো চলি থাকে, তেন্তে অধিক বিৱৰণৰ বাবে আপোনাৰ server-ৰ PHP error log পৰীক্ষা কৰক
4. যি ধাপবোৰ ইতিমধ্যে সম্পন্ন হৈছে, সেইবোৰ পুনৰ চলোৱাৰ সময়ত এৰি দিয়া হ'ব (installer-টো idempotent)।
