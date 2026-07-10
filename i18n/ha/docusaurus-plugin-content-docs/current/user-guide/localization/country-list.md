---
title: Jijin ƙasashe
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# بارگیری مجدد لیست کشورهای Ultimate Multisite {#re-ordering-the-ultimate-multisite-country-list}

منوی کشویی برای انتخاب کشور بر اساس نام‌های انگلیسیِ کشورهای مرتب شده است. این ممکن است به این معنی باشد که گاهی اوقات، کشور اصلی شرکت شما و/یا اکثر مشتریانتان در وسط یک لیست طولانی از نام کشور گم می‌شود.

برای اینکه بتوانید این مشکل را حل کرده و کشور مورد نظر خود را در بالای لیست انتخاب‌ها اضافه کنید، می‌توانید از قطعه کد زیر استفاده کنید (می‌توانید آن را به یک mu-plugin اضافه کنید):

add_filter('wu_get_countries', function($countries) {

// DE را با کد دو حرفی کشور خود تغییر دهید

// مثال زیر برای آلمان.

unset($countries['DE']);

// DE را با کد دو حرفی کشور خود و نام کشور خود تغییر دهید.

// مثال زیر، برای آلمان است.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});
