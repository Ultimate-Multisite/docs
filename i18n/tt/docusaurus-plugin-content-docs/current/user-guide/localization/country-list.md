---
title: Күлеклемеләр
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Ultimate Multisite ülkesi ro'yxatini qayta tartiblash {#re-ordering-the-ultimate-multisite-country-list}

Mamlakatni tanlash uchun tushuvchi menyu mamlakatlar nomlarining inglizcha variantlariga ko'ra alifbo tartibida joylashtirilgan. Bu shuni anglatishi mumkin, ki, kompaniyangizning va/yoki aksariyat mijozlaringizning uy mamlakati juda uzun mamlakat nomi ro'yxatining o'rtasida qolishi mumkin.

Buni tuzatish va tanlagan mamlakatingizni tanlov ro'yxatining yuqori qismiga qo'shish uchun quyidagi snippet dan foydalanishingiz mumkin (buni mu-plugin ga qo'shishingiz mumkin):

add_filter('wu_get_countries', function($countries) {

// DE ni mamlakatingizning ikki harfli kodi bilan almashtiring

// Misol Германия uchun.

unset($countries['DE']);

// DE ni mamlakatingizning ikki harfli kodi va mamlakatingiz nomi bilan almashtiring.

// Misol Германия uchun quyidagicha.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});
