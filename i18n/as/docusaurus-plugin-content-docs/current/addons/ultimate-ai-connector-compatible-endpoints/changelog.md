---
title: শ্ৰেষ্ঠ এআই সংযোগকাৰী সামঞ্জস্যপূৰ্ণ এণ্ডপইণ্টসমূহৰ বাবে চেঞ্জলগ
sidebar_position: 99
_i18n_hash: bc1e5acc3b2415defb863e64a18d271c
---
# Ultimate AI Connector for Compatible Endpoints-ৰ চেঞ্জলগ

## Version 2.0.0 — 2026-04-24 তাৰিখে মুকলি কৰা

* নতুন: বহু-প্ৰোভাইডাৰ সমৰ্থন (Multi-provider support) — একাধিক AI endpoints কনফিগাৰ কৰিব পাৰিব আৰু প্ৰোভাইডাৰসমূহৰ মাজত স্বয়ংক্রিয় ফলব্যাক (automatic fallback) লৈ ৰিকৱেষ্ট (requests) ৰুট কৰিব পাৰিব।
* সংশোধন (Fix): প্ৰতিজন প্ৰোভাইডাৰৰ বাবে সঠিক প্ৰোভাইডাৰ ID, ৰেজিষ্ট্ৰেচন URL আৰু HTTP ফিল্টাৰ স্কোপিং লৈ বহু-প্ৰোভাইডাৰ SDK ইন্টিগ্ৰেচন।
* সংশোধন (Fix): নতুন প্ৰোভাইডাৰ কাৰ্ডটো এতিয়া যোগ কৰাৰ লগে লগে স্বয়ংক্রিয়ভাৱে খোল (auto-expands) হয়; প্লাগইন আপডেটৰ সময়ত স্ক্ৰিপ্ট কেছ বাস্টিং (script cache busting) যোগ কৰা হৈছে।
* সংশোধন (Fix): eval() ৰ বাবে গতিশীল প্ৰোভাইডাৰ ক্লাছ নেমস্পেছ (Dynamic provider class namespace) আৰু নতুনকৈ যোগ কৰা প্ৰোভাইডাৰসমূহৰ বাবে স্বয়ংক্রিয়ভাৱে খোল হোৱাৰ ব্যৱহাৰ (auto-expand behaviour)।
* সংশোধন (Fix): WordPress 6.9+ ৰ বাবে স্থিতিশীল (stable) Card/CardBody/CardHeader/CardDivider কম্পোনেন্ট ব্যৱহাৰ কৰা হৈছে (এতিয়া আৰু পৰীক্ষামূলক নহয়)।
* সংশোধন (Fix): প্ৰোভাইডাৰক টানি পুনৰ সাজু কৰাৰ (drag-to-reorder) বাবে undefined DragHandle-ক unicode grip icon লৈ সলনি কৰা হৈছে।
* সংশোধন (Fix): প্ৰতিটো পেজ লোডৰ সময়ত হোৱা ব্লক কৰা HTTP ৰিকৱেষ্ট (blocking HTTP request) বাতিল কৰা হৈছে।
* উন্নত কৰা (Improved): GitHub Actions workflows Node.js 24 লৈ উন্নীত কৰা হৈছে।

## Version 1.0.0 — প্ৰথম মুকলি
