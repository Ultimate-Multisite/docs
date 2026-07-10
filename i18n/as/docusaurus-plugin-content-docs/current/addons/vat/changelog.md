---
title: VAT Changelog
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# VAT Changelog {#vat-changelog}

Version 1.0.7 - মুকলি কৰা হৈছিল: 2026-02-03

* সংশোধন: VIES SOAP service MS_MAX_CONCURRENT_REQ ত্রুটির কাৰণত German (DE) VAT নম্বৰসমূহ বৈধতা প্ৰমাণ কৰাত ব্যৰ্থ হৈছিল। অধিক বিশ্বাসযোগ্য বৈধতাৰ বাবে আমি সেয়া পুৰণি SOAP API ৰ পৰা আনুষ্ঠানিক EU VIES REST API লৈ সলনি কৰিছো।
* সংশোধন: VIES service অস্থায়ীভাৱে উপলব্ধ নহ'লে এতিয়া VAT নম্বৰ গ্ৰহ কৰা হয়, ভুলকৈ প্ৰত্যাখ্যান কৰা নহয়। ইয়াৰ বাবে এটা log entry সৃষ্টি কৰা হয় যাৰ পিছত পুনৰীক্ষণ কৰিব পাৰি।
* সংশোধন: VAT/Tax ID field এতিয়া কেৱল EU সদস্য দেশৰ বাবে নহয়, সকলো দেশৰ বাবে দৃশ্যমান। Non-EU tax ID (যেনে Swiss CHE নম্বৰ) VIES বৈধতা নোহোৱাকৈও invoice প্ৰদৰ্শনৰ বাবে সংৰক্ষিত কৰা হয়।
* সংশোধন: ভুল array lookup logic কাৰণত Greece (GR), Monaco (MC), আৰু Isle of Man (IM) ৰ বাবে VAT prefix lookup ব্যাহত হৈছিল।
* উন্নতি: এটা অপ্রয়োজনীয় wp-cli-bundle dev dependency আঁতৰাই দিয়া হ'ল, যি Site Exporter addonৰ সৈতে ব্যৱহাৰ কৰোঁতে fatal error সৃষ্টি কৰিব পাৰে।
* উন্নতি: এটা বিস্তৃত unit test suite (৫৩ টা টেস্ট) যোগ কৰা হ'ল।

Version 1.0.6 - মুকলি কৰা হৈছিল: 2026-01-25

* সংশোধন: দেশীয় B2B লেনদেনসমূহে এতিয়া সঠিকভাৱে VAT গ্ৰহ কৰে। EU VAT নিয়ম অনুসৰি, reverse charge কেৱল সীমান্ত পাৰ হৈ হোৱা B2B লেনদেনৰ বাবে প্ৰযোজ্য, কিয়নো ক্ৰয়কাৰীৰ দেশখন কোম্পানীৰ দেশখনৰ সৈতে মিললে নহয়।

Version 1.0.5 - মুকলি কৰা হৈছিল: 2026-01-22

* সংশোধন: Addon লোড নহ'ব বা সঠিকভাৱে কাম নকৰিব।
* পৰিৱৰ্তন: অধিক বিশ্বাসযোগ্য আৰু সক্ৰিয়ভাৱে সংৰক্ষিত তথ্যৰ বাবে VAT rate data source लाई euvatrates.com ৰ পৰা ibericode/vat-rates repository লৈ সলনি কৰা হ'ল।
* সংশোধন: super_reduced_rates option value ত থকা টাইপো (typo) সংশোধন কৰা হ'ল।
* উন্নতি: error নহ'বলৈ country code handling ৰ বাবে null checks যোগ কৰা হ'ল।
* পৰিৱৰ্তন: Traduttore ৰ মাধ্যমেৰে স্বয়ংক্রিয় আপডেটৰ বাবে bundled translation files আঁতৰাই দিয়া হ'ল।

Version: 1.0.3 - মুকলি কৰা হৈছিল: 2025-09-28

* prefix rename কৰি ultimate-multisite কৰা হ'ল; text domain আপডেট কৰা হ'ল; version bump কৰা হ'ল।

Version 1.0.0-beta.4 - 2021-09-24

* যোগ কৰা হ'ল: mu-plugins based setups ৰ বাবে filter wp_ultimo_skip_network_active_check;

Version 1.0.0 - 05/08/2021 - প্ৰথম মুকলি
