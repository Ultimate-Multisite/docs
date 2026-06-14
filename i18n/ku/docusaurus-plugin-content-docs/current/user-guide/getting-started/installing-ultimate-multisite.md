---
title: ناردنی Ultimate Multisite
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# دابینکردنی Ultimate Multisite (Ultimate Multisite Installation)

:::note
ئەم ڕێنماییە پێویستی بەوەیە کە ئێستا WordPress Multisite لەسەر کردووە و ڕێکخراوە. بۆ ئەوەی بزانین چۆن، لێرەدا [ئەم ڕێنماییە](https://www.wpbeginner.com/glossary/multisite/) لە WP Beginner بخوێنەوە.
:::

## دابینکردنی Pluginەکە (Installing the Plugin)

Ultimate Multisite بە بێ بەرامبەر لەسەر [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) دەستاییە.

لە **Network Admin Dashboard** یەکەت، بگواشبە بۆ **Plugins → Add New Plugin**.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

لێرەدا بەدوای **"Ultimate Multisite"** بگەڕێ (بە کوتیشن بۆ ئەوەی یەکێک لە باشترین ئەنجامە بێت)، و دەبێت وەک یەکەم ئەنجام بیبینیت. **Install Now** بکە.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

کاتێک دابین کرد، بۆ چالاککردنەوەی Pluginەکە لەسەر هەموو تۆڕەکەت، **Network Activate** بکە.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

پاش چالاککردنەوە، بە شێوەیەکی ئۆتۆماتیک دەبێت ڕێکراوت بۆ Setup Wizard.

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Setup Wizard (ڕێنمایی تنظیمکردن)

Setup Wizard یەکەت دەبێت لە ماوەی نزیکەی ١٠ خولەکدا بە ڕێگەدان بدات بۆ تنظیمکردنی Ultimate Multisite.

### Welcome (بەخێربێیت)

بۆ دەستپێکردن، **Get Started** بکە.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Pre-install Checks (پشکنینەکانی پێش دابینکردن)

ئەم هەنگاوە زانیاریی سیستەمی تۆ و دابینکردنی WordPress دەدات بە چاودێری بۆ ئەوەی لەگەڵ پێداویستی Ultimate Multisite بێت. ئەگەر هەموو شتێک باش بوو، **Go to the Next Step** بکە.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note دغڕاندی شبکه (v2.6.1+)
ئەگەر Ultimate Multisite دامبربوو بەڵام **هێشتا نەکراوەتەوە بۆ تۆڕ** — بۆ نموونە، ئەگەر لەسەر شاشەی پلاتفۆرمی پلەگینە، لەبری دابگرتنی **Activate** (single-site) هەڵبژاردن کردووە **Network Activate** — هەنگاوی پیشکشی پێش دامەزراندنی دەتوانێت ئەمە دیاری بکات و دەرکەوتنی دغڕاندی **Network Activate**.

دابگرتنی **Network Activate** پلەگینەکە بە شێوەیەکی ئۆتۆماتیکی لەسەر هەموو تۆڕی multisite یەکەت دەگرێتەوە. دوای چالاککردن، ویزارد بە شێوەیەکی ئاسایی بۆ هەنگاوی دامەزراندنی بەردەوام دەبێت. پێویست نییە لە ویزارد بڕۆیت بۆ چارەسەرکردنی دۆخی چالاککردن.
:::

### دامەزراندن (Installation)

دابگرنییەکە ئەو خشتەی داتابەیسە پێویستە دروست دەکاتەوە و فایل `sunrise.php` ی پێویست بۆ کارکردنی Ultimate Multisite دەدات. بۆ بەردەوامبوون، **Install** بگرە.

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### کۆمپانیای تۆ (Your Company)

ئامۆژگارییەکانی کۆمپانیاکەت پڕ بکەرەوە و یەکەم فەرمی خودت بۆ نێوانتان دیاری بکە. ئەم زانیارییە لە سەرانسەری پلاتفۆرم WaaS یەکەتدا بەکاردێت. کاتێک تەواو کردیت، **Continue** بگرە.

![Your Company configuration step](/img/installation/wizard-your-company.png)

### ناوەڕۆکی پیش‌دۆزراوەکان (Default Content)

ئەم هەنگاوە دەبێت بەکاردێت بۆ دامەزراندنی قالبە پێشوەختەکان، بەرهەمەکان و ناوەڕۆکی سەرەتایی دیکە. ئەمە ڕێگەیەکی باشە بۆ ئەوەی ئارامی لە تایبەتمەندیەکانی Ultimate Multisite وەربگریت. بۆ زیادکردنی ناوەڕۆکی پیش‌دۆزراوەکانی پێشوەخت، **Install** بگرە یان ئەگەر زیاتر دەتەوێت لە سەرەتادا دەست بکەیتەوە بە شێوەیەکی نوێ، ئەم هەنگاوە پستی بکە.

![Default content installation step](/img/installation/wizard-default-content.png)

### پلەگینە پێشنیارکراوەکان (Recommended Plugins)

بە ئۆپشن، پلەگینەکانی هاوبەشیی پێشنیارکراوەکان دامەزرێنە. بۆ زیادکردنیان **Install** بگرە یان بە پستی بکە بۆ بەردەوامبوون.

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### ئامادە!

ئەووەتا، دامەزراندنی Ultimate Multisite یەکەت تەواو بووە. ئێستا دەتوانی لە **Network Admin Dashboard**ەوە پلاتفۆرمی وێبسایتی خۆت بە شێوەیەکی Service دروست بکەیت.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

بۆ ئەوەی دەستپێبکەیت و خۆت بەکاربهێنیت!
