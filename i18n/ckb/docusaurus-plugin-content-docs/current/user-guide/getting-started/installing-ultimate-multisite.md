---
title: ناردنی Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# ناردنکردنی Ultimate Multisite

:::note
ئەم ڕێنماییە پێویستی بەوەیە کە ئێستا WordPress Multisite دامەزراوە و ڕێکخراوەتەوە. بۆ فێربوونی چۆن ئەوە بکەیت، سەرنجی بدە بە [ئەم ڕێنماییە](https://www.wpbeginner.com/glossary/multisite/) لە WP Beginner.
:::

## دامەزراندنی Pluginەکە

Ultimate Multisite بە بێ بەرامبەر لەسەر [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) دەستاییە.

لە **Network Admin Dashboard** (داشبۆردی ئیدارەی تۆڕەکەت)، بگواشبە **Plugins → Add New Plugin**.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

ئەو شتێک بەدوای لێبگرە کە دەڵێیت **"Ultimate Multisite"** (بە کوتیشن بۆ یەک دەستکاریی ورد)، و ئەوە وەک یەکەم ئەنجام دەردەکەوێت. **Install Now** (هاتوانەیە: ئێستا دامەزران بکە) بگرە.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

کاتێک دامەزران کرد، **Network Activate** (فعۆڕکردنی تۆڕەکە) بگرە بۆ چالاککردنەوەی Pluginەکە لەسەر هەموو تۆڕەکەتدا.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

پاش چالاککردنەوە، بە شێوەیەکی ئۆتۆماتیک دەبێت ڕێنمایی Setup Wizard (ڕێنمای دامەزراندن) بۆ تۆ بکات.

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Setup Wizard

Setup Wizard یەکەت دەبێت بە چەند خولۆڵەی ١٠ خرداد ڕێنمایی بکات کە Ultimate Multisite لەسەر ئاستی تۆڕەکەت ڕێکبخەیتەوە.

### Welcome (بەخێربێیت)

**Get Started** (دەستپێکردن) بگرە بۆ دەستپێکردن.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Pre-install Checks (پشکنینەکانی پێش دامەزراندن)

ئەم هەنگاوە زانیاریی سیستەمی تۆ و دامەزراوە WordPress یەکەت دەدات بەبۆ ئەوەی دڵنیابیت کە پێداویستی Ultimate Multisite لەسەر ڕێژەیە. ئەگەر هەموو شتێک باش بێت، **Go to the Next Step** (بڕۆ بۆ هەنگاوە دوایین) بگرە.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note बटنی Network Activate (v2.6.1+)
ئەگەر Ultimate Multisite دامەزراوەکەت دامەزرێت بەڵام **هێشتا نەکاتە ئاستی تۆڕی** — بۆ نموونە، ئەگەر لەسەر شاشەی پلاتفۆرمی پلاتینی پلاگینە **Activate** (single-site) هەڵبژاردن کردیت لەبری **Network Activate** لە منوچەی plugins — هەنگاوی Pre-install Checks ئەم حاڵەتان دەدات و बटانی **Network Activate** دەردەخات.

کلیککردن لەسەر **Network Activate** پلاگینەکە بە شێوەیەکی ئۆتۆماتیکی لە سەرانسەری تۆڕی multisite یەکەت دەگرێتەوە. دوای چالاککردن، wizard بە شێوەیەکی ئاسایی بۆ هەنگاوی دامەزراندنی بەردەوام دەبێت. پێویست نییە لە wizard بڕۆیت بۆ چارەسەرکردنی دۆخی چالاککردن.
:::

### دامەزراندن (Installation)

Installer ئەو خشتەی داتابەیسانە پێویستان دروست دەکات و فایل `sunrise.php` ی پێویست بۆ کارکردنی Ultimate Multisite دەدات. کلیک بکە بەسەر **Install** بۆ بەردەوامبوون.

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### کۆمپانیای تۆ (Your Company)

ئامۆژگاریی کۆمپانیاکەت پڕ بکە و یەکەم فەرمی خودت بۆ دروست بکە. ئەم زانیارییە لە سەرانسەری platformەکەدا بەکاردێت. کاتێک تەواو کردیت، کلیک بکە بەسەر **Continue**.

![Your Company configuration step](/img/installation/wizard-your-company.png)

### ناوەڕۆکی پیش‌دێت (Default Content)

ئەم هەنگاوە دەبێت ڕێگە بداتت کە template هاوسەنگی پێشوەخت، بەرهەم و ناوەڕۆکی دەستپێکی دیکە دامەزراو بکەیت. ئەمە شێوازێکی باشە بۆ ئەوەی ئارامی لە تایبەتمەندیەکانی Ultimate Multisite وەربگریت. کلیک بکە بەسەر **Install** بۆ زیادکردنی ناوەڕۆکی پیش‌دێت، یان ئەم هەنگاوە بپێخسەرەوە ئەگەر دەتەوێت لە سەرەتادا دەست بکەیت.

![Default content installation step](/img/installation/wizard-default-content.png)

### پلاگینە پێشنیوەکان (Recommended Plugins)

بە ئارامی، پلاگینەکانی هاوبەشی پێشنیوەکان دامەزرێنە. کلیک بکە بەسەر **Install** بۆ زیادکردنیان یان بپێخسەرەوە بۆ بەردەوامبوون.

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### ئامادە!

ئەووەیە تەواو بووە! دامەزراندنی Ultimate Multisite یەکەت تەواو بووە. ئێستا دەتوانی لە **Network Admin Dashboard**دا پلاتفۆرمی وێبسایتی خۆت بە شێوەی Service دروست بکەیتەوە.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

بۆ ئەوەی دەستپێبکەیت و خۆت ببینیت!
