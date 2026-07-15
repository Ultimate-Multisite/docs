---
title: Closte تي سارائس کانسٹينٽ کي ترتیب ڏيڻ
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte تي ڪن ۾ sunrise constant کي true ڪرڻ

ڪجهه هاستنگ فراهميون (host providers) سيكيورٽي جي ڪري wp-config.php کي لاک ڪري ڇڏين ٿيون. ان جو مطلب اهو آهي ته Ultimate Multisite خود بخاري طور تي فائل ۾ ضروري constants شامل نه ڪري سگهي ٿو جنهن سان domain mapping ۽ ٻيا خاص ڪم ڪم کام ڪندا. Closte ان ماڻهن مان هڪ آهي.

پر، Closte وٽ wp-config.php ۾ constants شامل ڪرڻ جو هڪ محفوظ طريقو موجود آهي. توهان کي بس هيٺ ڏنل قدم پوري ڪرڻ گهرجي:

## Closte dashboard تي {#on-the-closte-dashboard}

پہلا، [اپرو Closte account ۾ لاگ ان ڪريو](https://app.closte.com/)، Sites ميني آئڪن تي ڪلڪ ڪريو، پنهنجي موجوده سائيٽ تي Dashboard لڠڪ تي ڪلڪ ڪريو:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

توهان سکرین جي هيٺين طرف نون ميني ايتمس ڏسي ويندا. ان ميني استعمال ڪري **Settings** صفحا تي وڃو:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

پھر، **Settings** ۾، WP-Config ٽاب کي ڏسو، ۽ ان ٽاب تي "Additional wp-config.php content" فیلڊ کي ڏسو:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite نصب ڪرڻ جي سياق ۾، توهان کي ان فیلڊ ۾ sunrise constant شامل ڪرڻو پوندو. بس هڪ نون لينه (line) شامل ڪريو ۽ ان لينه کي پيستيو:

define('SUNRISE', true);

بس، توهان جو ڪم ختم ٿي ويو آهي. Ultimate Multisite انٽال wizard تي واپس وڃو ۽ عمل کي جاري رکڻ لاءِ صفحو رينويز (refresh) ڪريو.
