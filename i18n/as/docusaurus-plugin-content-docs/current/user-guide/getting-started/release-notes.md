---
title: ৰিলিজ টোকাস
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# ৰিলিজ টোকা {#release-notes}

## সংস্কৰণ 2.13.0 — 2026-06-05 তাৰিখে মুক্তি দিয়া হৈছে {#version-2130--released-on-2026-06-05}

- নতুন: গ্ৰাহক Account, checkout, billing, ছাইট, invoice, template সলনি কৰা, আৰু domain mapping প্ৰবাহৰ বাবে sovereign-tenant সমৰ্থন যোগ কৰা হৈছে, যাতে tenant network-সমূহে পৰিচালিত কাৰ্য্যৰ বাবে গ্ৰাহকসকলক মূল ছাইটলৈ ঘূৰাই পঠিয়াব পাৰে।
- নতুন: recurring membership-সমূহৰ বাবে renewal-credential পৰীক্ষা যোগ কৰা হৈছে, যাতে সংৰক্ষিত billing agreement, subscription, বা vault token নথকা সময়ত gateway-সমূহে auto-renewal নিষ্ক্ৰিয় কৰিব পাৰে।
- নতুন: pending ছাইট সৃষ্টি প্ৰকাশৰ বাবে HMAC-verified loopback publishing যোগ কৰা হৈছে, যাতে background job পলম হোৱা host-সমূহত checkout-ৰ পৰা ছাইট provisioning অধিক নিৰ্ভৰযোগ্য হয়।
- নতুন: SSO URL, checkout-form base domain, আৰু স্বয়ংক্ৰিয় domain-record সৃষ্টিৰ বাবে developer extension point যোগ কৰা হৈছে।
- সংশোধন: mapped domain, anonymous broker visit, logout, আৰু cross-plugin dependency conflict-ৰ মাজেৰে SSO অধিক নিৰ্ভৰযোগ্য হৈছে।
- সংশোধন: pending ছাইট সৃষ্টি এতিয়া stale publish flag-ৰ পৰা পুনৰুদ্ধাৰ হয় আৰু গ্ৰাহকসকলক ছাইট-সৃষ্টি স্ক্ৰীনত আবদ্ধ হৈ থাকিবলৈ নিদিয়ে।
- সংশোধন: shared checkout-form base domain-ৰ বাবে domain record আৰু সৃষ্টি কৰা নহয়, আৰু কোনো integration সক্ৰিয় নথকা সময়ত অব্যৱহৃত host-provider background job-সমূহ এৰাই যোৱা হয়।
- সংশোধন: Checkout, billing address, password reset, email verification, template সলনি কৰা, tour, আৰু গ্ৰাহক Dashboard edge case-সমূহে আৰু সাধাৰণ গ্ৰাহক প্ৰবাহ বাধা নিদিয়ে।
- সংশোধন: Broadcast email-সমূহে এতিয়া গ্ৰাহক-প্ৰাপকৰ গোপনীয়তা ৰাখে, আৰু recipient list বা mail transport বিফল হ’লে SMTP/plugin fatal error এৰাই চলে।
- সংশোধন: Membership renewal, expiration display, আৰু payment collection edge case-সমূহে এতিয়া তৎক্ষণাত expiration, crash, বা আৱশ্যকীয় payment বাদ পৰাটো এৰাই চলে।
- উন্নত: WordPress সামঞ্জস্যতা 7.0 লৈকে পৰীক্ষা কৰা হৈছে, production Vue asset-সমূহ npm source-ৰ পৰা পুনৰ নিৰ্মাণ কৰা হৈছে, আৰু Cypress end-to-end coverage-এ এতিয়া অধিক checkout, setup, SSO, আৰু gateway প্ৰবাহ পৰীক্ষা কৰে।

## সংস্কৰণ 2.12.0 — 2026-05-15 তাৰিখে মুক্তি দিয়া হৈছে {#version-2120--released-on-2026-05-15}

- নতুন: domain mapping integration-সহ সমৰ্থিত host provider হিচাপে Hostinger (hPanel) যোগ কৰা হৈছে
- নতুন: Site Exporter-এ এতিয়া streamlined network-wide ছাইট পুনৰুদ্ধাৰৰ বাবে network import bundle-সমূহ handle কৰে
- সংশোধন: BCC broadcast email-সমূহে এতিয়া গ্ৰাহক-প্ৰাপকৰ ঠিকনা প্ৰকাশ হোৱাটো ৰোধ কৰিবলৈ undisclosed-recipients header ব্যৱহাৰ কৰে
- সংশোধন: non-date value-ৰ সৈতে সংৰক্ষণ কৰিলে membership expiration date আৰু বিকৃত নহয়
- সংশোধন: Stripe membership update-সমূহে এতিয়া deprecated deleteDiscount API কল নকৰাকৈ discount-সমূহ সঠিকভাৱে clear কৰে
- সংশোধন: domain-mapped ছাইটসমূহত SSO redirect-সমূহ এতিয়া infinite redirect loop ৰোধ কৰিবলৈ capped কৰা হৈছে
- সংশোধন: Setup wizard image picker selection-এ এতিয়া underlying data model সঠিকভাৱে update কৰে
- সংশোধন: Site Exporter CLI-এ এতিয়া সঠিক default network ছাইট selection সংৰক্ষণ কৰে
- উন্নত: plugin package-ৰ পৰা bundled wp-cli আঁতৰোৱা হৈছে, যাৰ ফলত plugin-ৰ আকাৰ কমিছে

## সংস্কৰণ 2.11.0 — 2026-05-11 তাৰিখে মুক্তি দিয়া হৈছে {#version-2110--released-on-2026-05-11}

- নতুন: ছাইট export-সমূহে এতিয়া self-booting `index.php` bundle কৰে, যাতে ZIP-টো পৃথক plugin install নকৰাকৈ নতুন host-ত install কৰিব পৰা যায়।
- নতুন: Network export-এ administrator-সকলক Site Export admin page-ৰ পৰা একেটা archive-ত সকলো subsite export কৰিবলৈ দিয়ে।
- নতুন: Allow Site Templates plan toggle এতিয়া fallback chain-ৰ জৰিয়তে enforce কৰা হয়, plan limit-ৰ বাবে template availability সঠিকভাৱে সীমিত কৰে।
- নতুন: checkout form editor-এ আৱশ্যকীয় field configured নকৰাকৈ product যোগ কৰিলে সতৰ্ক কৰে।
- নতুন: Import/Export settings tab-এ এতিয়া নিজৰ scope স্পষ্টভাৱে বৰ্ণনা কৰে আৰু Site Export tool-লৈ পোনপটীয়াকৈ link কৰে।

## সংস্কৰণ 2.10.0 — 2026-05-05 তাৰিখে মুক্তি দিয়া হৈছে {#version-2100--released-on-2026-05-05}

- নতুন: seamless gateway configuration-ৰ বাবে OAuth flag gate-সহ manual credential entry-ৰ PayPal guided setup wizard।
- নতুন: বৰ্তমান-template card, persistent grid, আৰু **বৰ্তমান template reset কৰক** button-সহ template switch customer panel পুনৰ ডিজাইন কৰা হৈছে।
- সংশোধন: AJAX failure-ত template switching-এ আৰু UI hang নকৰে।
- সংশোধন: Template switching permission state-সমূহ unauthorized access-ৰ বিৰুদ্ধে সুৰক্ষিত কৰা হৈছে।
- সংশোধন: ছাইট override input-সমূহ সংৰক্ষণ কৰাৰ আগতে validate কৰা হৈছে।
- সংশোধন: ঠিকনা খালী থাকিলে billing address prompt এতিয়া দেখুওৱা হয়।
- সংশোধন: PHP 8.1 null-to-string deprecation notice-সমূহ সমাধান কৰা হৈছে।
- সংশোধন: timing issue ৰোধ কৰিবলৈ init hook-ৰ আগতে Currents lazy-loaded কৰা হৈছে।
- সংশোধন: সকলো login flow-ত filtered SSO path সন্মান কৰা হৈছে।
- সংশোধন: Blank ছাইট identity option-সমূহ save কৰাৰ সময়ত সংৰক্ষিত থাকে।

## সংস্কৰণ 2.9.0 — 2026-04-30 তাৰিখে মুক্তি দিয়া হৈছে {#version-290--released-on-2026-04-30}

- নতুন: **Tools > Export & Import**-ৰ অধীনত single-site export আৰু import যোগ কৰা হৈছে।
- সংশোধন: Export ZIP file-সমূহ এতিয়া authenticated download endpoint-ৰ জৰিয়তে serve কৰা হয়।
- সংশোধন: pending export/import query-সমূহত SQL injection risk আৰু query issue-সমূহ সংশোধন কৰা হৈছে।
- সংশোধন: admin-এ manual ভাৱে customer email verify কৰিলে pending ছাইট published নহয়।
- সংশোধন: membership নথকা সময়ত orphaned pending_site record-সমূহ পৰিষ্কাৰ কৰা হৈছে।
- সংশোধন: Settings nav padding আৰু search anchor navigation সংশোধন কৰা হৈছে।
- সংশোধন: pending ছাইটসমূহ এতিয়া All Sites view-ত প্ৰথমে দেখুওৱা হয়।
- সংশোধন: 403 error ৰোধ কৰিবলৈ Screenshot provider (mShots) User-Agent header যোগ কৰা হৈছে।
- সংশোধন: Import cron schedule circular dependency সমাধান কৰা হৈছে।
- সংশোধন: user settings key-সমূহত Tour ID-সমূহ underscore-লৈ normalise কৰা হৈছে।
- উন্নত: ভাল compatibility-ৰ বাবে Alchemy/Zippy-ৰ সলনি এতিয়া ZipArchive ব্যৱহাৰ কৰা হৈছে।

## সংস্কৰণ 2.8.0 — 2026-04-29 {#version-280--released-on-2026-04-29}

- নতুন: Other Options ছেটিংছ UI-ত Enable Jumper toggle যোগ কৰা হৈছে।
- নতুন: checkout ফৰ্মৰ তালিকা table-ত Status স্তম্ভ যোগ কৰা হৈছে।
- নতুন: custom MU-plugin sunrise সম্প্ৰসাৰণৰ বাবে Addon sunrise file loader।
- উন্নত: settings পৃষ্ঠাৰ পৰা error-reporting opt-in ছেটিং আঁতৰোৱা হৈছে।
- ঠিক কৰা হৈছে: ধন্যবাদ পৃষ্ঠাৰ ছাইট কাৰ্ড — ছবি এতিয়া সীমাবদ্ধ কৰা হৈছে আৰু লিংকসমূহ সঠিকভাৱে শৈলীবদ্ধ কৰা হৈছে।
- ঠিক কৰা হৈছে: Screenshot provider thum.io-ৰ পৰা WordPress.com mShots-লৈ সলনি কৰা হৈছে।
- ঠিক কৰা হৈছে: নতুন ইনষ্টলত Enable Registration আৰু Default Role এতিয়া সঠিক ডিফল্টত ছেট কৰা হয়।
- ঠিক কৰা হৈছে: ড’মেইনত এটা প’ৰ্ট অন্তৰ্ভুক্ত থাকিলে `get_site_url()` আৰু খালী ঘূৰাই নিদিয়ে।
- ঠিক কৰা হৈছে: `copy_media` ছেটিং খালী থাকিলেও clone media ফাইলসমূহ এতিয়া সঠিকভাৱে কপি কৰা হয়।
- ঠিক কৰা হৈছে: network-activate sitemeta লিখাৰ পিছত Object cache সঠিকভাৱে invalidated কৰা হৈছে।
- ঠিক কৰা হৈছে: 3-part ড’মেইনৰ বাবে DNS verification-ত custom domain স্বয়ংক্ৰিয়ভাৱে primary-লৈ উন্নীত কৰা হৈছে।
- ঠিক কৰা হৈছে: মেয়াদ উকলি যোৱা পেমেণ্ট clean up কৰা হ’লে pending membership বাতিল কৰা হৈছে।
- ঠিক কৰা হৈছে: inline login prompt dismissed হোৱাৰ পিছত Password strength checker পুনৰ bound কৰা হৈছে।
- ঠিক কৰা হৈছে: ছাইট ইতিমধ্যে সৃষ্টি হোৱা থাকিলে thank-you পৃষ্ঠাত অসীম page reload বন্ধ কৰা হৈছে।
- ঠিক কৰা হৈছে: plugin activation আৰু settings save-ত WP core registration বিকল্প sync কৰা হৈছে।
- ঠিক কৰা হৈছে: PHP 8.4 compatibility-ৰ বাবে `calculate_expiration`-ত null expiration guard যোগ কৰা হৈছে।
- ঠিক কৰা হৈছে: গ্ৰাহকৰ ইতিমধ্যে সক্ৰিয় membership থাকিলে duplicate signups blocked কৰা হৈছে।
- ঠিক কৰা হৈছে: checkout-ত `date_expiration`-ৰ বাবে null check যোগ কৰা হৈছে।
- ঠিক কৰা হৈছে: Site provisioning অধিক মজবুত কৰা হৈছে — limitations, membership inference, domain promotion।
- ঠিক কৰা হৈছে: check fail হ’লে Pre-install check status label NOT Activated-লৈ সংশোধন কৰা হৈছে।
- ঠিক কৰা হৈছে: email verification URLসমূহৰ বাবে checkout domain ব্যৱহাৰ কৰা হৈছে।
- ঠিক কৰা হৈছে: কোনো password field নাথাকিলে checkout-ৰ পিছত auto-login কৰা হৈছে।
- ঠিক কৰা হৈছে: Free memberships আৰু মেয়াদ উকলি নাযায় — lifetime হিচাপে গণ্য কৰা হৈছে।
- ঠিক কৰা হৈছে: customer-এ email verify নকৰালৈকে Email verification gate-এ site publish ধৰি ৰাখে।
- ঠিক কৰা হৈছে: SES v2 API endpoint base path আৰু identity route সংশোধন কৰা হৈছে।
- ঠিক কৰা হৈছে: `wu_inline_login_error` hook pre-submit catch block-ত emitted কৰা হৈছে।
