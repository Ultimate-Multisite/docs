---
title: Site Exporterৰ পৰিৱৰ্তনৰ তালিকা
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Site Exporterৰ Changelog {#site-exporter-changelog}

Version: 1.0.6 - মুকলি কৰা হৈছিল 2026-05-11
* নতুন: সাইট এক্সপৰ্টসমূহে এতিয়া এটা নিজকে আৰম্ভ কৰা index.php সংগ্ৰহ কৰে, যাৰ ফলত ZIP ফাইলটো এটা নতুন হোষ্টত পৃথক plugin install নকৰাকৈ install কৰিব পাৰি।
* নতুন: নেটৱৰ্ক এক্সপৰ্ট (Network export) এ্যাডমিনিষ্ট্ৰেটৰক Site Export admin page ৰ পৰা সকলো সাব-সাইট এটা একক archive ত এক্সপৰ্ট কৰিবলৈ দিয়ে।

Version: 1.0.5 - মুকলি কৰা হৈছিল 2026-05-05
* সংশোধন: টেস্টিং বুটস্ট্রাপৰ বিফলতা নিৰোধ কৰিবলৈ get_config जस्ता মক কৰা নোহোৱা পদ্ধতিসমূহ সামৰি ল'বলৈ WP_CLI polyfill stub ত __callStatic যোগ কৰা হ'ল।

Version: 1.0.4 - মুকলি কৰা হৈছিল 2025-11-25

* Ultimate Multisite 2.4 ৰ সৈতে সামঞ্জস্য (compatibility) যোগ কৰা হ'ল।

Version: 1.0.2 - মুকলি কৰা হৈছিল 2025-09-28

* prefix 'ultimate-multisite' লৈ নাম সলনি কৰা হ'ল; text domain আপডেট কৰা হ'ল; আৰু সংস্কৰণ (version) বৃদ্ধি কৰা হ'ল।

### Version 1.0.1 - মুকলি কৰা হৈছিল 2023-08-09 {#version-101---released-on-2023-08-09}

* উন্নত: এতিয়া ইমপৰ্টৰ ফাইলটোৰ সঠিক ফাইল পথ (file path) পোৱাটো নিশ্চিত কৰে।
* সংশোধন: ইমপৰ্টৰৰ সময়ত ভুল হোৱা পৰিহণ কৰিবলৈ object cache বন্ধ কৰা হ'ল।
* সংশোধন: ইমপৰ্টৰ plugin ডাউনলোড লিংকটো কাম নকৰা সমস্যাটো সমাধান কৰা হ'ল।

### Version 1.0.0 - মুকলি কৰা হৈছিল 2022-12-23 {#version-100---released-on-2022-12-23}

* সংশোধন: এক্সপৰ্ট ফৰ্মৰ পপআপ লোড নহ'ব সমস্যাটো সমাধান কৰা হ'ল;
* সংশোধন: এক্সপৰ্ট পৃষ্ঠাখনত Javascript ফাইল লোড নহ'ব সমস্যাটো সমাধান কৰা হ'ল;
* আভ্যন্তৰীণ: নতুন বিল্ড প্ৰচেছ (build process);

### Version 1.0.0-beta.4 - মুকলি কৰা হৈছিল 2022-01-13 {#version-100-beta4---released-on-2022-01-13}

* আভ্যন্তৰীণ: hooks আৰু filters generator যোগ কৰা হ'ল;
* আভ্যন্তৰীণ: developerৰ সুবিধাৰ বাবে WP Ultimo stubs যোগ কৰা হ'ল;
