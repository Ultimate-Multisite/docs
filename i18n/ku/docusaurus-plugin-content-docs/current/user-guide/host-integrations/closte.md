---
title: Integrasiی Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Integration-ی Closte

## گشتی (Overview) {#overview}
Closte ی پلتفرمی مدیریت شده برای هاستینگ وردپرسە کە لەسەر بنەمای زیرساختی Google Cloud دروست کراوە. ئەم integrationە ڕێنوێنی دۆمەین و بەڕێوەبردنی گوازارنی SSL لە نێوان Ultimate Multisite و Closte دەدات.

## تایبەتمەندییەکان (Features) {#features}
- هێزکردنی دۆمەی ئۆتۆماتیک (Automatic domain syncing)
- بەڕێوەبردنی گوازارنی SSL (SSL certificate management)
- پشتگیریکردنی دۆمەکانی Wildcard (Wildcard domain support)
- ئەگەر لەسەر Closte بێت، پێویستی بە هیچ ڕێکخستنێکی تایبەت نییە.

## پێداویستییەکان (Requirements) {#requirements}
ئەم constantە دەبێت لە فایلەکەت `wp-config.php` دابنێیت ئەگەر لەسەر Closte کار دەکەیت:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

ئەم constantە بە شێوەیەکی ئاسایی پێشوەخت دەبێت ئەگەر لەسەر Closte هاستینگ کردبێت.

## ڕێنماییەکانی راکردنەوە (Setup Instructions) {#setup-instructions}

### 1. پاراستنی API Key ی Closte-ی خۆت (Verify Your Closte API Key) {#1-verify-your-closte-api-key}
ئەگەر لەسەر Closte کار دەکەیت، constant `CLOSTE_CLIENT_API_KEY` دەبێت پێشوەخت بێت لە فایلەکەت `wp-config.php`. دەتوانی ئەمە بە چاودێری فایلەکەت `wp-config.php` بڕوانینەوە.

### 2. چالاککردنەوەی Integration (Enable the Integration) {#2-enable-the-integration}
1. لە پۆستەی admin وردپرس، بگواشبە Ultimate Multisite > Settings.
2. بۆ تابلۆی "Domain Mapping" (پێناساندنی دۆمە)، دەربکەووەتە خوارەوە بۆ "Host Integrations".
3. Integration ی Closte-یەکە چالاک بکە.
4. لەسەر دڵنیایی کردنی گۆڕانکارییەکان، بگەڕێ بۆ "Save Changes".

## چۆن کار دەکات (How It Works) {#how-it-works}
کاتێک دۆمەیەکی لە Ultimate Multisite دا پێناساند دەکرێت:

1. Integrationەکە داواێک بۆ API ی Closte دەنێرێت بۆ زیادکردنی ئەو دۆمەیە بۆ ئەپڵیکەیشنی تۆ.
2. Closte بە شێوەیەکی ئۆتۆماتیک بەڕێوەدەبات گوازارنی SSL.
3. کاتێک پێناساندنی دۆمەکە لەناوچێت، Integrationەکە ئەو دۆمەیە لە Closte دەداتەوە.

ئەم integrationە هەروەها کار دەکات لەگەڵ ڕێکخستنی ماوەی تاقیکردنەوەی DNS (DNS check interval) لە Ultimate Multisite، کە ڕێنوێنی دابنێت چەند جارە سیستەمەکە لێکۆڵینێت بۆ پراکەوتکردنی DNS و دروستکردنی گوازارنی SSL.

## دروستکردنی تۆماری دۆمە (Domain Record Creation) {#domain-record-creation}

ئەم یەکێکە بۆ ئەوەی کاتێک سایتێک دروست دەکرێت یان دووبارە دابنێری، تۆمارێکی ناو دامێنی (domain record) بە شێوەیەکی ئۆتۆماتیک دروست بێت. ئەمە بە تایبەتی گرنگە بۆ یەکگرتووویی Closte، چونکە دروستکردنی تۆمارەکە دەستپێدەکات APIی Closte بۆ ئەوەی ناو دامێنی و پڕۆتۆکۆڵی SSL (SSL certificate) دروست بکات.

## چارەسەرکردنی کێشەکان (Troubleshooting) {#troubleshooting}

### کێشەکانی پەیوەندی بە API {#api-connection-issues}
- دڵنیا بیت کە کلای APIی Closte ڕاستە.
- دڵنیا بیت کە شاری Closte پێویستییەکان دەبێت.

### کێشەکانی پڕۆتۆکۆڵی SSL (SSL Certificate) {#ssl-certificate-issues}
- کلای Closte شوێنکردنی پڕۆتۆکۆڵی SSL دەوێت کاتێک دروست بکات (بە گشتی ٥ تا ١٠ خولەک).
- دڵنیا بیت کە ناو دامێنی ئێوە بە شێوەیەکی دروست بۆ ئای پی دبێریتە IPی خوادەی Closte.
- تۆمارەکانی DNS بۆ ناو دامێنی خۆتان چاک بکەرەوە بۆ ئەوەی لە ڕێگەی دروستکردنیان گونجاو بن.

### ناو دامێنی نەکراوەتەوە (Domain Not Added) {#domain-not-added}
- لە لاگەکانی Ultimate Multisite بۆ هەر پەیامێکی هەڵە یان کێشەیەکی دیکە چاک بکەرەوە.
- دڵنیا بیت کە ناو دامێنی پێشتر لە Closte تۆمارکراوە.
- دڵنیا بیت کە تۆمارەکانی DNSی ناو دامێنی ئێوە بە شێوەیەکی دروست ڕێکخراون.

### ماوەی تاقیکردنەوەی DNS (DNS Check Interval) {#dns-check-interval}
- ئەگەر دروستکردنی پڕۆتۆکۆڵی SSL زۆر کات دەگرێت، دەتوانیت ماوەی تاقیکردنەوەی DNS لە ڕێکخستنی مۆبایلی ناو دامێنی (Domain Mapping settings) بگۆڕیت.
- ماوەی پیش‌دۆزراوەکە ٣٠٠ چرکە (٥ خولەک)ە، بەڵام دەتوانیت بۆ تاقیکردنەوەی خێراتر، بە کەمترین ١٠ چرکەیشان دیاری بکەیت.
