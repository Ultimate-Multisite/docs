---
title: የሀገር ዝርዝር
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# የUltimate Multisite የሀገር ዝርዝርን እንደገና ማስቀመጥ {#re-ordering-the-ultimate-multisite-country-list}

የሀገርን ለመምረጥ የሚያገለግለው ድሮፕዳውን (dropdown) በሀገራቱ የእንግሊዝኛ ስሞች መሠረት በፊደል ቅደም ተከተል (alphabetically) ይደራጃል። ይህ ማለት፣ አንዳንድ ጊዜ፣ የኩባንያዎ መነሻ ሀገር እና/ወይም አብዛኛዎቹ ደንበኞችዎ የሚገኙበት ሀገር በረጅም የሀገር ስም ዝርዝር መሃል ላይ ተደብቆ ሊገኝ ይችላል።

ይህንን ለማስተካከል እና የፈለጉትን ሀገር ወደ ምርጫው ዝርዝር 顶部 (top) ለማስቀመጥ፣ ከዚህ በታች ያለውን ስኒፕኬት (snippet) መጠቀም ይችላሉ (ይህንን ወደ mu-plugin ውስጥ መጨመር ይችላሉ)።

add_filter('wu_get_countries', function($countries) {

// Change DE to the two-letter code of your country

// Example below for Germany.

unset($countries['DE']);

// Change DE to the two-letter code of your country

// and the name of your country's name.

// Example below, for Germany.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});
