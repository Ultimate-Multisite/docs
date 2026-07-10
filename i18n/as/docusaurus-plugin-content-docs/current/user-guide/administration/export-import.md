---
title: এক্সপোর্ট আৰু ইমপোর্ট
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Export & Import {#export--import}

Ultimate Multisite 2.9.0 ত **Tools > Export & Import** ত এটা single-site **Export & Import** টুলের যোগ কৰা হৈছে। যেতিয়া আপুনি এটা WordPress site लाई ZIP ফাইল হিচাপে পেকেজ কৰিব, সেই ZIP ফাইলটো পুনৰ স্থাপন (restore) কৰিব, বা এটা site लाई সামঞ্জস্যপূৰ্ণ Ultimate Multisite আৰু single-site WordPress installationৰ মাজত স্থানান্তৰ কৰিব লাগে, তেতিয়া ইয়াক ব্যৱহাৰ কৰক।

## Required permissions {#required-permissions}

আপুনি যিটো site export বা import কৰিব, সেই site-ৰ WordPress **Tools** মেনু অ্যাক্সেছ কৰিব পৰা এজন অ্যাডমিনিষ্ট্ৰেটৰ হিচাপে লগইন কৰিব লাগিব। এটা multisite network-ত, network-level Ultimate Multisite tools ব্যৱহাৰ কৰি subsite export বা import কৰাৰ সময়ত network administrator account ব্যৱহাৰ কৰক।

Export ZIP ডাউনলোডहरू এটা authenticated download endpoint মাজেৰে serve কৰা হয়, গতিকে ডাউনলোড শেষ হোৱা পৰ্যন্ত অ্যাডমিন session active ৰাখিব আৰু generate কৰা download URL সমূহক জনপ্ৰিয়ভাৱে (publicly) ভাগ নকৰিব।

## Exporting a site to a ZIP {#exporting-a-site-to-a-zip}

1. আপুনি যিটো site কপি কৰিব বিচাৰে, তাৰ অ্যাডমিন প্যানেলত **Tools > Export & Import** লৈ যাওক।
2. export area খুলক আৰু যিটো site পেকেজ কৰিব বিচাৰে, তাক বাছি লওক।
3. যদি সেই বিকল্পসমূহ উপলব্ধ থাকে, তেন্তে uploads, plugins, আৰু themes जस्ता ঐচ্ছিক (optional) বিষয়বস্তু অন্তৰ্ভুক্ত কৰিবলৈ বাছি লওক।
4. export আৰম্ভ কৰক আৰু প্ৰক্ৰিয়াটো শেষ হোৱাৰ বাবে অপেক্ষা কৰক। ডাঙৰ site সমূহৰ বাবে ZIP तयार হোৱাৰ আগতে পটভূমিত (background) শেষ হ'বলৈ সময় লাগিব পাৰে।
5. exports list बाट শেষ হোৱা ZIP ফাইলটো ডাউনলোড কৰক।

ZIP ফাইলটো এটা সুৰক্ষিত স্থানত ৰাখক। ইয়াত site content, settings, media files, আৰু বাছনি কৰা code assets থাকিব পাৰে।

## What the export includes {#what-the-export-includes}

এটা export ZIP ফাইলত তলৰ বিষয়বস্তু থাকিব পাৰে:

- বাছনি কৰা site-ৰ database content আৰু configuration।
- uploads অন্তৰ্ভুক্ত কৰিলে আপলোড কৰা media files।
- যদি সেই বিকল্পসমূহ বাছনি কৰা হয়, তেন্তে plugins আৰু themes।
- লক্ষ্য installation-ত site পুনৰ গঠন কৰিবলৈ Export & Import tool ব্যৱহাৰ কৰা import metadata।

সঠিক ZIP আকাৰটো media, বাছনি কৰা plugins আৰু themes, আৰু site-ৰ database table সমূহৰ আকাৰৰ ওপৰত নিৰ্ভৰ কৰে।

## Importing a site from a ZIP {#importing-a-site-from-a-zip}

1. গন্তব্য (destination) WordPress site-ত **Tools > Export & Import** লৈ যাওক।
2. import area খুলক আৰু Export & Import tool দ্বাৰা সৃষ্টি কৰা ZIP ফাইলটো আপলোড কৰক।
3. যদি site-টোৱে এটা নতুন address ব্যৱহাৰ কৰিব লাগে, তেন্তে এটা replacement URL প্ৰৱেশ কৰক, অথবা মূল URL ৰাখিবলৈ এই field টি খালি ৰাখক।
4. import শেষ হোৱাৰ পিছত আপলোড কৰা ZIP ফাইলটো delete কৰিব নে নাই, সেইটো বাছি লওক।
5. **Begin Import** ক্লিক কৰক।
6. ইয়াৰ শেষ হোৱালৈকে pending import টো নিৰীক্ষণ কৰক। কেৱল প্ৰক্ৰিয়াটো শেষ হোৱাৰ আগতে বন্ধ কৰিবলগীয়া হ'লেহে **Cancel Import** ব্যৱহাৰ কৰক।
7. সাধাৰণ traffi বা customer access দিবলৈ আগমণ কৰাৰ আগতে import কৰা site টো পুনৰীক্ষণ কৰক।

এটা single-site WordPress installation-ত, এটা ZIP import কৰিলে বর্তমান site টো আপলোড কৰা site টোৰে সলনি হৈ যায়। আৰম্ভ কৰাৰ আগতে লক্ষ্য site-ৰ এটা সম্পূৰ্ণ backup লওক, আৰু একে সময়তে একে site-ৰ বাবে একাধিক import আৰম্ভ কৰাৰ পৰা বিৰত থাকক।

## Limitations and compatibility notes {#limitations-and-compatibility-notes}

- অতি ডাঙৰ uploads directory বা media libraries ডাঙৰ ZIP ফাইল সৃষ্টি কৰিব পাৰে। ডাঙৰ site export বা import কৰাৰ আগতে PHP upload limits, execution limits, disk space, memory, আৰু server timeout settings নিশ্চিত কৰক।
- অতি ডাঙৰ media libraries-ক কম traffi থকা maintenance window ত স্থানান্তৰ কৰিব লাগিব পাৰে।
- লক্ষ্য WordPress installation-এ সামঞ্জস্যপূৰ্ণ WordPress, PHP, Ultimate Multisite, plugin, আৰু theme version চলাই থকা উচিত।
- এটা single-site import ले লক্ষ্য site টো সলনি কৰে। ই এটা merge tool নহয়।
- Multisite-to-single-site আৰু single-site-to-multisite স্থানান্তৰ কেৱল তেতিয়াহে সমৰ্থন কৰা হয় যেতিয়া লক্ষ্য environment-এ export কৰা site-ৰ plugins, themes, URLs, আৰু প্ৰয়োজনীয় Ultimate Multisite components চলাই থকাৰ ক্ষমতা থাকে।
- ZIP ফাইলটো ব্যক্তিগত (private) ৰাখক। ইয়াত export কৰা site-ৰ database content, আপলোড কৰা ফাইল, আৰু configuration details থাকিব পাৰে।

আৰু পুৰণি network-level export workflow-ৰ বাবে, [Site Export](/user-guide/administration/site-export) চাওক।
