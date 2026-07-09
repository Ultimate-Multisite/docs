---
title: ملڪن جي سڃاڻپ
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Ultimate Multisite جي ڪنٽري لسٹ کي دوبارہ ترتيب ڏيڻ {#re-ordering-the-ultimate-multisite-country-list}

ڪنٽري چونڊ ڪرڻ لاءِ جيڪا dropdown (ड्रاپڊون) آهي، اهو ڪنٽري جي انگريزي variant جي اليفبائٽڪل ترتيب تي ترتيب ڏئي ٿو. ان جو مطلب اهو آهي ته ڪڏهن ڪڏهن توهان جي ڪمپني جو گهرجي ۽/يا توهان جي بيٺل گهڻن گهڻن کليڪن ۾ هڪ وڏي ڪنٽري جي نالي جي لسٹ ۾ گم ٿي سگهن ٿا.

ان کي درست ڪرڻ ۽ چونڊيل ڪنهن هميشه ترتيءَ (selection list) جو اوپर्न ڏيڻ لاءِ، توهان هي snippet استعمال ڪري سگهو ٿا (توهان ان کي mu-plugin ۾ شامل ڪري سگهو ٿا):

add_filter('wu_get_countries', function($countries) {

// DE کي توهان جي ڪنٽري جي دو لفظن جي کوڈ ۾ تبديل ڪريو

// مثال هيٺ ڏيڪي ٿي جهر مانغير (Germany) لاءِ.

unset($countries['DE']);

// DE کي توهان جي ڪنٽري جي دو لفظن جي کوڈ ۽ توهان جي ڪنٽري جي نالي سان تبديل ڪريو.

// مثال هيٺ ڏيڪي ٿي، مانغير (Germany) لاءِ.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});
