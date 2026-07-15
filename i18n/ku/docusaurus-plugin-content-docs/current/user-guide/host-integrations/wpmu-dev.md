---
title: Integrasyon WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integration-a WPMU DEV

## گشتی (Overview) {#overview}
WPMU DEV یەک پلاتفۆرمێکی وردی و پڕمایەنی WordPress ییە کە هاستکردن، پلگینەکان و خزمەتگوزئینان بۆ سایتەکانی WordPress پێشکەش دەکات. ئەم یەکگرتووکارییە دەبێت ڕێگە بدات لە هەڵسُوێنانی ئۆمایەن (domain syncing) و بەڕێوەبردنی گوازارکەی SSL لە نێوان Ultimate Multisite و هاستکردنی WPMU DEV ئەنجام بدرێت.

## تایبەتمەندییەکان (Features) {#features}
- یەکگرتووی ئۆمایەنی ئۆتۆماتیک (Automatic domain syncing)
- بەڕێوەبردنی گوازارکەی SSL (SSL certificate management)
- هەوڵەکانی تاقیکردنی زیاتر بۆ گوازارکەی SSL

## پێداوودارەکان (Requirements) {#requirements}
ئەم یەکگرتووکارییە خۆی دەدۆزێتەوە ئەگەر لە WPMU DEV هاستکردن بکەیت و API بەکار دەهێنێت کە لە پڕۆژەکەدا هەیە. ئەگەر لە WPMU DEV هاستکردن بکەیت، پێویستی بە ڕێکخستنی زیاتوو نییە.

ئەم یەکگرتووکارییە لێدەکات بۆ چیای `WPMUDEV_HOSTING_SITE_ID` بگەڕێتەوە کە ئۆتۆماتیک دەبێت لە کاتی هاستکردن لە WPMU DEV دابنێریت.

## ڕێنماییەکانی دامەزراندن (Setup Instructions) {#setup-instructions}

### ١. پشکنینی هاستکردنی WPMU DEV {#1-verify-wpmu-dev-hosting}
ئەگەر لە WPMU DEV هاستکردن بکەیت، پێویستە ئەو کۆنستانتان پێشتر دیارکراون بێت. چاک بکە:

1. کۆنستانی `WPMUDEV_HOSTING_SITE_ID` لە ناوچەیەکدا (environment) دیار کراوە
2. یەکەم ئەندازیی WPMU DEV بە کار گیرانی API هەبێت

### ٢. چالاککردنی یەکگرتووکارییەکە (Enable the Integration) {#2-enable-the-integration}
1. لە ئامێرە ئەدمنیی WordPress-ەکەتدا، بگواشبە Ultimate Multisite > Settings
2. بۆ تابلۆی "Domain Mapping" (پێناساندنی دامێنی)، دەگەڕێیتەوە
3. بەرەو خوارەوە بچۆ بۆ بەشی "Host Integrations" (یەکگرتووکارییەکانی هاستکردن)
4. یەکگرتووکاریی WPMU DEV-یەکە چالاک بکە
5. لەسەر دڵنیایی کردنی گۆڕانکارییەکان، بڵێ "Save Changes"

## چۆن کار دەکات (How It Works) {#how-it-works}

### یەکگرتنی دامێنی (Domain Syncing) {#domain-syncing}
کاتێک دامێنێکی لە Ultimate Multisite دا پێناسراوە:

1. ئەم یەکگرتووکارییە بەکار دەهێنێت APIی WPMU DEV بۆ زیادکردنی دامێنەکە لەسەر هەژمارە هاستکردنەکەت
2. هەروەها، وەرگرتنی وردی (www version)ی دامێنەکە ئۆتۆماتیک زیاد دەکات
3. WPMU DEV بەڕێوە دەبات ڕێکخستنی دامێنی و دەست پێدانی گوازارکەی SSL

### بەڕێوەبردنی گوازارکەی SSL (SSL Certificate Management) {#ssl-certificate-management}

ئەتا بەستراوکردنی ئەو سیستەمە ڕێکخراوە کە ژمارەی هەوڵەکانی پشکنینی گواستنەوەی SSL (SSL certificate verification attempts) بۆ میزبینی WPMU DEV زیاد دەکات، چونکە پێویستە کاتێکیان هەبێت بۆ ئەوەی بەڵگەنامەکانی SSL دروست و دامەزرێنرێن. بە شێوەیەکی پیش‌تەوا، تا 10 جار هەوڵ دەدات بۆ پشکنینی گواستنەوەی SSL، لەکاتێکدا پێ standard 5 هەوڵ هەیە.

## تێبینی گرنگان {#important-notes}

### لەناوچوونی دامەین (Domain Removal) {#domain-removal}

لە ئێستادا APIی WPMU DEV ڕێگای دیاریکراوە بۆ ئەوەی دامەینکان دەدات بە ئاسانی لەناو ببەن. کاتێک یەکگرتووی دامەین لە Ultimate Multisite دەکەیتەوە، ئەو دامەینە لە کۆنتڕۆڵی میزبینی WPMU DEV دایە. پێویستە ئەگەر پێویست بێت، دەبێت بە شێوەیەکی دەستی خۆت لە داش보ارەکەی میزبینی WPMU DEV لەناو ببیتەوە.

### پشکنینی ناساندنی API (API Authentication) {#api-authentication}

ئەم یەکگرتووە بە کلیدی APIی WPMU DEV کار دەکات کە لە داتابەیس وۆردپرێسەکەت بەو ناو `wpmudev_apikey` هەڵدەستێت. ئەمە بە شێوەیەکی ئۆتۆماتیک ڕێکدەدرێت کاتێک سایتەکەت پەیوەندی دەدات بە WPMU DEV.

## چارەسەرکردنی کێشەکان (Troubleshooting) {#troubleshooting}

### کێشەکانی پەیوەندی API (API Connection Issues) {#api-connection-issues}
- دڵنیابە کە سایتەکەت بە شێوەیەکی دروست لەگەڵ WPMU DEV پەیوەندیدارە.
- چاک بکە ئایا ناو `wpmudev_apikey` لە داتابەیس وۆردپرێسەکەت هەڵدەستێت.
- دڵنیابە ئەوەی کە ئەندازیاری (membership) ی WPMU DEV چالاکە.

### کێشەکانی بەڵگەنامی SSL (SSL Certificate Issues) {#ssl-certificate-issues}
- WPMU DEV دەتوانرێت کاتێکیان هەبێت بۆ دروستکردنی بەڵگەنامەکانی SSL (بە گشتی 5 تا 15 خولەک).
- یەکگرتووە ڕێکخراوە کە تا 10 جار بۆ پشکنینی بەڵگەنامەکانی SSL دەدات.
- ئەگەر بەڵگەنامەکان دوای هەوڵدانێکی زۆر وەک پێویست دروست نەبن، پەیوەندی بە پشتیوانی WPMU DEV بکە.

### دامەینەکە زیاد نەکراوە (Domain Not Added) {#domain-not-added}
- لە لۆگەکانی Ultimate Multisite دەرکەوتنی هەر پەیام هەڵەیە چاک بکە.
- دڵنیابە کە ئەو دامەینە پێشتر لە WPMU DEV دا زیاد نییە.
- دڵنیابە پلانی میزبینی (hosting plan) ی WPMU DEV پشتگیریی ژمارەی دامەینەکانی زیاتر کە تۆ دەدات زیاد بکەیت.
