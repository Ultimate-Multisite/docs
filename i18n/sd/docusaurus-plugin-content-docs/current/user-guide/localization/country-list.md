---
title: ملڪن جي فهرست
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Ultimate Multisite جي ڪنڊري لسٹ کي دوبارہ ترتيب ڏيڻ {#re-ordering-the-ultimate-multisite-country-list}

ڪنڊري چونڊڻ لاءِ جيڪو dropdown (ड्रاپڊون) آهي، اهو ڪنڊري جي انگريزي variant جي اليفبٽڪل ترتيب ۾ ترتيب ڏئي ٿو. ان جو مطلب اهو آهي ته ڪڏهن ڪڏهن توهان جي ڪمپني ۽/يا اضافي تمام گهڻتي ڪاروباريون جو هميشه ڪندڙ ڪنڊري جو نالو هڪ وڏي ڪنڊري جي نالي جي لسٹ جي وچ ۾ ڇانتا ٿي سگهي ٿو.

اسان توهان کي ان کي درست ڪرڻ ۽ پنهنجي پسندوري ڪنڊري کي چونڊ جي لسٹ جي اوپري طرف شامل ڪرڻ ۾ مدد ڪرڻ لاءِ، توهان هي snippet استعمال ڪري سگهو ٿا (توهان ان کي هڪ mu-plugin ۾ شامل ڪري سگهو ٿا):

add_filter('wu_get_countries', function($countries) {

// DE کي پنهنجي ڪنڊري جي دو لفظن جي کوڈ ۾ تبديل ڪريو

// مثال هيٺ ڏيجندي هجندي لاءِ.

unset($countries['DE']);

// DE کي پنهنجي ڪنڊري جي دو لفظن جي کوڈ ۽ توهان جي ڪنڊري جو نالو تبديل ڪريو.

// مثال هيٺ، هيسن لاءِ.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});
