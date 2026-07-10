---
title: Mamlakatlar ro'yxati
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Ultimate Multisite mamlakat ro'yxatini qayta tartiblash {#re-ordering-the-ultimate-multisite-country-list}

Mamlakatni tanlash uchun menyu ingliz tilidagi mamlakat nomlarining alifbo tartimidan kelib chiqib tartiblangan. Bu baʼzan kompaniyangizning va/yoki koʻpchilik mijozlaringizning uy mamlakati nomi juda uzun mamlakat nomi ro'yxatining o‘rtasida yashiringan bo‘lishi mumkinligini anglatishi mumkin.

Buni tuzatishga va tanlagan mamlakatingizni tanlov ro'yxatining eng yuqori qismiga qo'shish uchun quyidagi snippet dan foydalanishingiz mumkin (buni mu-plugin ga qo'shishingiz mumkin):

add_filter('wu_get_countries', function($countries) {

// DE ni mamlakatingizning ikki harfli kodi bilan almashtiring

// Misol Германия uchun.

unset($countries['DE']);

// DE ni mamlakatingizning ikki harfli kodi va mamlakatingiz nomi bilan almashtiring.

// Misol Германия uchun quyidagicha.

```php
$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;
```
