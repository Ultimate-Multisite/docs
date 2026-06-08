---
title: WebLLM ৰ বাবে Ultimate AI Connector Changelog
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# WebLLM-ৰ বাবে Ultimate AI Connector-ৰ Changelog

## Version 1.1.0 — Released on 2026-04-09

* New: Admin-bar status indicator সহ Floating chat widget — লগইন কৰা যিকোনো ব্যৱহাৰকাৰীয়ে Front end बाटै Browser-side LLM लाई প্ৰম্পট কৰিব পাৰিব।
* New: SharedWorker runtime — MLC engine এ এতিয়া SharedWorker-ত চলিব, যাৰ ফলত একাধিক Tab একেটা GPU session ভাগ কৰি লয়, আৰু এটাৰ লগত এটাৰ সংঘাত নহয়।
* New: apiFetch middleware interceptor — যি WordPress REST requests AI Client SDK pattern লয়, সেইবোৰ স্থানীয় WebLLM broker লৈ স্বয়ংক্রিয়ভাৱে (transparently) ৰুট কৰা হয়, যাৰ বাবে কোনো loopback HTTP round-tripৰ প্ৰয়োজন নহয়।
* New: Connector panel-ত Widget settings UI যোগ কৰা হৈছে, যাৰ দ্বাৰা chat widget টগল কৰিব পাৰি আৰু auto-prompt behaviour কনফিগাৰ কৰিব পাৰি।
* Fix: IndexedDB cache backend लाई Force কৰা হৈছে, যাতে HuggingFace xet CDN redirects-ৰ বাবে ভাঙি যোৱা default Cache API path-ৰ পিছতো মডেলৰ ওজন (model weight) ডাউনলোড হ'ব।
* Fix: embedding models-ৰ বাবে context_window KV-cache override এ ট্ৰাক কৰা নহয় (কাৰণ তেওঁলোকৰ কোনো decoder নাই আৰু এই override-এ runtime error সৃষ্টি কৰিছিল)।
* Fix: worker tab लोड হোৱাৰ আগতে /webllm/v1/models मा cold-start candidate model advertise কৰা হৈছে, যাতে SDK consumers-এ তৎক্ষণাত এটা মডেল দেখিব পাৰে।
* Fix: WebLLM लाई wpai_preferred_text_models filter লগত Hook কৰা হৈছে, যাতে মডেল কনফিগাৰ কৰা হ'লে AI Experiments feature-এ browser engine লৈ যায়।
* Improved: end-to-end testingৰ সময়ত Cache-busting, content normalisation, আৰু hardware-reference সম্পৰ্কীয় কিছুমান fix কৰা হৈছে।

## Version 1.0.0 — Initial Release
