---
title: রিলিজ নোট
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# রিলিজ নোট {#release-notes}

## সংস্করণ 2.13.0 — 2026-06-05 তারিখে রিলিজ হয়েছে {#version-2130--released-on-2026-06-05}

- নতুন: গ্রাহকের Account, checkout, billing, site, invoice, template switching এবং domain mapping প্রবাহের জন্য sovereign-tenant সহায়তা যোগ করা হয়েছে, যাতে tenant নেটওয়ার্কগুলো managed কাজের জন্য গ্রাহকদের main site-এ ফেরত পাঠাতে পারে।
- নতুন: recurring membership-এর জন্য renewal-credential পরীক্ষা যোগ করা হয়েছে, যাতে সংরক্ষিত billing agreement, subscription বা vault token না থাকলে gateways auto-renewal বন্ধ করতে পারে।
- নতুন: pending site creation-এর জন্য HMAC-যাচাইকৃত loopback publishing যোগ করা হয়েছে, যাতে background jobs দেরি হয় এমন hosts-এ checkout-to-site provisioning আরও নির্ভরযোগ্য হয়।
- নতুন: SSO URL, checkout-form base domain এবং automatic domain-record creation-এর জন্য developer extension points যোগ করা হয়েছে।
- সংশোধন: mapped domains, anonymous broker visits, logout এবং cross-plugin dependency conflicts জুড়ে SSO এখন আরও নির্ভরযোগ্য।
- সংশোধন: pending site creation এখন stale publish flags থেকে পুনরুদ্ধার করে এবং গ্রাহকদের site-creation screen-এ আটকে থাকা এড়ায়।
- সংশোধন: shared checkout-form base domains-এর জন্য আর domain records তৈরি করা হয় না, এবং কোনো integration সক্রিয় না থাকলে অব্যবহৃত host-provider background jobs এড়িয়ে যাওয়া হয়।
- সংশোধন: Checkout, billing address, password reset, email verification, template switching, tours এবং customer Dashboard-এর edge case আর স্বাভাবিক customer flows আটকে দেয় না।
- সংশোধন: Broadcast emails এখন recipients গোপন রাখে এবং recipient lists বা mail transports ব্যর্থ হলে SMTP/plugin fatal errors এড়ায়।
- সংশোধন: Membership renewals, expiration display এবং payment collection-এর edge case এখন তাৎক্ষণিক expirations, crashes বা প্রয়োজনীয় payments মিস হওয়া এড়ায়।
- উন্নত: WordPress সামঞ্জস্যতা 7.0 পর্যন্ত পরীক্ষা করা হয়েছে, production Vue assets npm sources থেকে পুনর্নির্মাণ করা হয়েছে, এবং Cypress end-to-end coverage এখন আরও বেশি checkout, setup, SSO এবং gateway flows পরীক্ষা করে।

## সংস্করণ 2.12.0 — 2026-05-15 তারিখে রিলিজ হয়েছে {#version-2120--released-on-2026-05-15}

- নতুন: domain mapping integration সহ সমর্থিত host provider হিসেবে Hostinger (hPanel) যোগ করা হয়েছে
- নতুন: Site Exporter এখন সহজ network-wide site restoration-এর জন্য network import bundles পরিচালনা করে
- সংশোধন: BCC broadcast emails এখন recipient addresses প্রকাশ হওয়া ঠেকাতে undisclosed-recipients header ব্যবহার করে
- সংশোধন: non-date value দিয়ে সংরক্ষণ করলে membership expiration date আর নষ্ট হয় না
- সংশোধন: Stripe membership updates এখন deprecated deleteDiscount API কল না করেই discounts সঠিকভাবে পরিষ্কার করে
- সংশোধন: domain-mapped sites-এ SSO redirects এখন infinite redirect loops ঠেকাতে সীমাবদ্ধ করা হয়েছে
- সংশোধন: Setup wizard image picker selection এখন underlying data model সঠিকভাবে আপডেট করে
- সংশোধন: Site Exporter CLI এখন সঠিক default network site selection সংরক্ষণ করে
- উন্নত: plugin package থেকে bundled wp-cli সরানো হয়েছে, ফলে plugin-এর আকার কমেছে

## সংস্করণ 2.11.0 — 2026-05-11 তারিখে রিলিজ হয়েছে {#version-2110--released-on-2026-05-11}

- নতুন: Site exports এখন self-booting `index.php` bundle করে, যাতে আলাদা plugin install ছাড়াই ZIP একটি নতুন host-এ install করা যায়।
- নতুন: Network export administrators-কে Site Export admin page থেকে একটি archive-এ সব subsites export করতে দেয়।
- নতুন: Allow Site Templates plan toggle এখন fallback chain-এর মাধ্যমে কার্যকর করা হয়, ফলে plan limits অনুযায়ী template availability সঠিকভাবে সীমিত হয়।
- নতুন: প্রয়োজনীয় field configure না করে product যোগ করা হলে Checkout form editor সতর্ক করে।
- নতুন: Import/Export settings tab এখন এর scope পরিষ্কারভাবে বর্ণনা করে এবং সরাসরি Site Export tool-এ link দেয়।

## সংস্করণ 2.10.0 — 2026-05-05 তারিখে রিলিজ হয়েছে {#version-2100--released-on-2026-05-05}

- নতুন: seamless gateway configuration-এর জন্য OAuth flag gate সহ manual credential entry-এর PayPal guided setup wizard।
- নতুন: current-template card, persistent grid এবং **বর্তমান template রিসেট করুন** button সহ Template switch customer panel নতুনভাবে ডিজাইন করা হয়েছে।
- সংশোধন: AJAX failure হলে Template switching আর UI আটকে রাখে না।
- সংশোধন: Template switching permission states unauthorized access থেকে সুরক্ষিত করা হয়েছে।
- সংশোধন: Site override inputs সংরক্ষণের আগে যাচাই করা হয়েছে।
- সংশোধন: address খালি থাকলে এখন Billing address prompt দেখানো হয়।
- সংশোধন: PHP 8.1 null-to-string deprecation notices সমাধান করা হয়েছে।
- সংশোধন: timing issues ঠেকাতে init hook-এর আগে Currents lazy-loaded করা হয়েছে।
- সংশোধন: সব login flows-এ filtered SSO path মানা হয়েছে।
- সংশোধন: Blank site identity options সংরক্ষণের সময় বজায় রাখা হয়েছে।

## সংস্করণ 2.9.0 — 2026-04-30 তারিখে রিলিজ হয়েছে {#version-290--released-on-2026-04-30}

- নতুন: **Tools > Export & Import**-এর অধীনে single-site export এবং import যোগ করা হয়েছে।
- সংশোধন: Export ZIP files এখন authenticated download endpoint-এর মাধ্যমে পরিবেশিত হয়।
- সংশোধন: pending export/import queries-এ SQL injection risk এবং query issues সংশোধন করা হয়েছে।
- সংশোধন: admin গ্রাহকের email manually verify করলে pending site published না হওয়ার সমস্যা ঠিক হয়েছে।
- সংশোধন: membership না থাকলে orphaned pending_site records পরিষ্কার করা হয়েছে।
- সংশোধন: Settings nav padding এবং search anchor navigation সংশোধন করা হয়েছে।
- সংশোধন: Pending sites এখন All Sites view-এ প্রথমে দেখানো হয়।
- সংশোধন: 403 errors ঠেকাতে Screenshot provider (mShots) User-Agent header যোগ করা হয়েছে।
- সংশোধন: Import cron schedule circular dependency সমাধান করা হয়েছে।
- সংশোধন: user settings keys-এ Tour IDs underscores-এ normalised করা হয়েছে।
- উন্নত: আরও ভালো compatibility-এর জন্য Alchemy/Zippy-এর বদলে এখন ZipArchive ব্যবহার করা হচ্ছে।

## সংস্করণ 2.8.0 — 2026-04-29 {#version-280--released-on-2026-04-29}

- নতুন: Other Options সেটিংস UI-তে Enable Jumper টগল যোগ করা হয়েছে।
- নতুন: Checkout ফর্মের তালিকা টেবিলে Status কলাম যোগ করা হয়েছে।
- নতুন: কাস্টম MU-plugin sunrise এক্সটেনশনের জন্য Addon sunrise ফাইল লোডার।
- উন্নত: সেটিংস পেজ থেকে error-reporting opt-in সেটিং সরানো হয়েছে।
- সংশোধন: ধন্যবাদ পেজের সাইট কার্ড — ছবি এখন সীমাবদ্ধ এবং লিংকগুলো সঠিকভাবে স্টাইল করা হয়েছে।
- সংশোধন: Screenshot প্রদানকারী thum.io থেকে WordPress.com mShots-এ বদলানো হয়েছে।
- সংশোধন: নতুন ইনস্টলে Enable Registration এবং Default Role এখন সঠিক ডিফল্ট সেট করে।
- সংশোধন: ডোমেইনে পোর্ট থাকলে `get_site_url()` আর খালি ফেরত দেয় না।
- সংশোধন: `copy_media` সেটিং খালি থাকলেও ক্লোন মিডিয়া ফাইল এখন সঠিকভাবে কপি হয়।
- সংশোধন: network-activate sitemeta লেখার পরে object cache সঠিকভাবে invalidated হয়।
- সংশোধন: ৩-অংশের ডোমেইনের জন্য DNS যাচাইয়ের সময় custom domain স্বয়ংক্রিয়ভাবে primary করা হয়েছে।
- সংশোধন: মেয়াদোত্তীর্ণ পেমেন্ট পরিষ্কার করা হলে pending membership বাতিল করা হয়েছে।
- সংশোধন: inline login prompt বাতিল করার পরে password strength checker আবার bind করা হয়েছে।
- সংশোধন: সাইট আগে থেকেই তৈরি থাকলে thank-you page-এ অসীম পেজ reload বন্ধ করা হয়েছে।
- সংশোধন: plugin activation এবং settings save-এর সময় WP core registration option sync করা হয়েছে।
- সংশোধন: PHP 8.4 সামঞ্জস্যের জন্য `calculate_expiration`-এ Null expiration guard যোগ করা হয়েছে।
- সংশোধন: গ্রাহকের ইতিমধ্যে সক্রিয় membership থাকলে duplicate signup ব্লক করা হয়েছে।
- সংশোধন: checkout-এ `date_expiration`-এর জন্য null check যোগ করা হয়েছে।
- সংশোধন: সাইট provision আরও মজবুত করা হয়েছে — সীমাবদ্ধতা, membership inference, domain promotion।
- সংশোধন: check ব্যর্থ হলে pre-install check status label সংশোধন করে NOT Activated করা হয়েছে।
- সংশোধন: ইমেইল যাচাইকরণ URL-এর জন্য checkout domain ব্যবহার করা হয়েছে।
- সংশোধন: password field না থাকলে checkout-এর পরে auto-login।
- সংশোধন: Free membership আর মেয়াদোত্তীর্ণ হয় না — lifetime হিসেবে ধরা হয়।
- সংশোধন: গ্রাহক ইমেইল যাচাই না করা পর্যন্ত Email verification gate সাইট publish আটকে রাখে।
- সংশোধন: SES v2 API endpoint base path এবং identity route সংশোধন করা হয়েছে।
- সংশোধন: pre-submit catch block-এ `wu_inline_login_error` hook emitted হয়েছে।
