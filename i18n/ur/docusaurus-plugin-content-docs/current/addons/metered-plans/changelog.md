---
title: پیمائش پر مبنی منصوبوں کی تبدیلیوں کا خاکہ
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Metered Plans Changelog {#metered-plans-changelog}

Version 1.1.0 - Released on 2026-05-05
- New: Multisite subsites کے لیے AI token billing — کسٹمر سائٹس پر AI ٹوکن کے استعمال کو ٹریک کریں اور بل کریں، جس میں ہر ٹوکن کے لیے قابل ترتیب (configurable) ریٹس شامل ہیں۔
- New: Connector enforcement کو dynamic limit discovery اور write-through کے ساتھ دوبارہ بنایا گیا ہے، جو تمام connectors پر حقیقی وقت (real-time) کی درستگی کو یقینی بناتا ہے۔
- Fix: Database table upgrades اب BerlinDB schema definitions کے ساتھ صحیح طریقے سے منسلک ہیں، جس سے نئی انسٹالیشنز پر upgrade failure نہیں ہوگا۔
- Fix: Database upgrade callbacks کو صحیح فارمیٹ میں تبدیل کیا گیا ہے، جس سے خاموش (silent) upgrade failures کا مسئلہ حل ہوا ہے۔
- Fix: AI Usage Overage Markup input field میں اب fractional values قبول کیے جاتے ہیں۔
- Fix: Plugin load پر fatal errors اور double-initialization issues کو حل کیا گیا ہے۔
- Improved: check-env npm script شامل کیا گیا ہے تاکہ developer environments پہلی بار چلنے پر خود کو configure کر سکیں۔

### 1.0.3 {#103}
* Plugin Update Checker v5 میں اپ ڈیٹ کیا گیا
* جدید WordPress plugin headers شامل کیے گئے
* تازہ ترین WordPress versions کے ساتھ compatibility بہتر بنائی گئی
* usage tracking کی کارکردگی (performance) کو بہتر بنایا گیا

### 1.0.2 {#102}
* Bug fixes اور performance improvements
* usage reporting کو بہتر بنایا گیا

### 1.0.0 {#100}
* ابتدائی ریلیز
* Core metered billing functionality
* Usage tracking اور overage calculation
* خودکار invoice generation
