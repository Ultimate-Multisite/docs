---
title: گۆڕانکارییەکانی Ultimate AI Connector بۆ WebLLM
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Ultimate AI Connector بۆ WebLLM Changelog

## Version 1.1.0 — بڵاوکراوەتەوە لە 2026-04-09 {#version-110--released-on-2026-04-09}

* نوێ: Floating chat widget لەگەڵ نیشاندەری دۆخی admin-bar — هەر بەکارهێنەرێکی چووەژوورەوە دەتوانێت ڕاستەوخۆ لە front end داوای لە LLMی لای وێبگەڕ بکات.
* نوێ: کاتی کارکردنی SharedWorker — بزوێنەری MLC ئێستا لە SharedWorker دەچێت، بۆ ئەوەی چەند تابێک یەک دانیشتنی GPU هاوبەش بکەن لەبری ملمڵانێ لەسەری.
* نوێ: ناوبژیوانی apiFetch middleware interceptor — داواکارییەکانی WordPress REST کە لەگەڵ شێوازی AI Client SDK دەگونجێن، بە شێوەیەکی شفاف ئاراستە دەکرێن بۆ کارگێڕی ناوخۆیی WebLLM، پێویست بە گەڕانەوەی HTTPی loopback نییە.
* نوێ: ڕووکاری ڕێکخستنەکانی ویجێت لە پانێڵی Connector بۆ هەڵکردن/کوژاندنەوەی chat widget و ڕێکخستنی هەڵسوکەوتی auto-prompt.
* چاککراوە: بە زۆر پشتگیری کاشی IndexedDB بەکاربهێنە، بۆ ئەوەی دابەزاندنی کێشی مۆدێل دوای ئاڕاستەکردنەوەکانی HuggingFace xet CDN بمێنێتەوە، کە ڕێڕەوی پێشوەختەی Cache API دەشکێنێت.
* چاککراوە: پەڕاندنی overrideـی context_window KV-cache بۆ مۆدێلەکانی embedding (ئەوان decoderیان نییە و override هەڵەیەکی کاتی کارکردنی دروست دەکرد).
* چاککراوە: ڕاگەیاندنی مۆدێلی پاڵێوراوەی cold-start لە /webllm/v1/models پێش ئەوەی تابی worker بارکرابێت، بۆ ئەوەی بەکارهێنەرانی SDK دەستبەجێ مۆدێلێک ببینن.
* چاککراوە: بەستنی WebLLM بە فلتەری wpai_preferred_text_models بۆ ئەوەی تایبەتمەندی AI Experiments کاتێک مۆدێلێک ڕێکخراوە ئاراستەی بزوێنەری وێبگەڕ بکرێت.
* باشترکراوە: چاککردنەوەکانی Cache-busting، ئاساییکردنەوەی ناوەڕۆک، و ئاماژەی ڕەقەکاڵا کە لە کاتی تاقیکردنەوەی سەرەتا-تا-کۆتایی دەرکەوتن.

## Version 1.0.0 — بڵاوکردنەوەی سەرەتایی {#version-100--initial-release}
