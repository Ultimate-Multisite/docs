---
title: Closte تي سريز کانستانٽ کي تريندا
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte تي ڪلاسٽ ۾ sunrise constant کي true ڪرڻ جو طريقو

ڪجهه هاستنگ فراهميون (host providers) سيكيورٽي جي ڪري wp-config.php کي لاک ڪري ڇڏين ٿيون. ان جو مطلب اهو آهي ته Ultimate Multisite خود بخاري طور تي فائل ۾ ضروري constants شامل نه ڪري سگهي ٿو جنهن سان ডومين ميپنگ ۽ ٻيا خاص ڪم ڪم (features) کام شروع ٿي سگهن. Closte ان ماڻهن مان هڪ آهي.

پر، Closte وٽ wp-config.php ۾ constants شامل ڪرڻ جو هڪ محفوظ طريقو موجود آهي. توهان کي بس هيٺ ڏنل قدم پوري ڪرڻ گهرجي:

## Closteแดش بورڊ تي {#on-the-closte-dashboard}

پہلا، [اپرو Closte account ۾ لاگ ان ڪريو](https://app.closte.com/)، Sites ميني آئڪن تي ڪلڪ ڪريو، ڇاڪاڻ ته توهان موجوده سائيٽ تي ڪم ڪري رهيا آهيو تڏهن Site جو Dashboard لڠڪ (link) ڪلڪ ڪريو:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

توهان سکرین جي هيٺين طرف هڪ ڪجهه نون ميني آئڪن ڏسي رهندا رهيا. ان ميني کي استعمال ڪري **Settings** صفحا تي وڃو:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

پھر، **Settings** ۾، WP-Config ٽاب (tab) کي ڏسو، ۽ ان ٽاب تي "Additional wp-config.php content" جي فیلڊ (field) کي ڏسو:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite نصب ڪرڻ جي صورتحال ۾، توهان کي ان فیلڊ ۾ sunrise constant شامل ڪرڻو پوندو. بس هڪ نون لين (line) جو اضافو ڪري هيٺ ڏنل لين کي پیسٽ ڪريو. ان کان پوءِ **Save All** بٽڻ تي ڪلڪ ڪريو.

define('SUNRISE', true);

بس، توهان جي ڪم ٿي ويو آهي. Ultimate Multisite انٽال wizard تي واپس وڃو ۽ عمل کي جاري رکڻ لاءِ صفحو رينويز (refresh) ڪريو.
