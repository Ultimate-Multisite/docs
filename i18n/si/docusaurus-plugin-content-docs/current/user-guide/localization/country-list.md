---
title: රට ලැයිස්තුව
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Ultimate Multisite රටේ රටවල් ලැයිස්තුව නැවත සකස් කිරීම {#re-ordering-the-ultimate-multisite-country-list}

රටක් තෝරා ගැනීමට ඇති 드롭다운 එක, රටවල ඉංග්‍රීසි නාමයන් මත අකාරාදියට (alphabetically) පිළිවෙලින් පෙළගස්වා තිබෙනවා. මේ නිසා සමහර වෙලාවට ඔබේ සමාගමේ හෝ බොහෝ පාරිභෝගිකයින්ගේ මව් රටේ නම, ඉතා විශාල රටවල් නම් ලැයිස්තුවේ මැද කොටසක සැඟවී තිබිය හැකියි.

එය නිවැරදි කිරීමට සහ ඔබ තෝරා ගැනීමට කැමති රටේ නම තෝරා ගැනීමේ ලැයිස්තුවේ මුලට එකතු කිරීමට ඔබට පහත snippet එක භාවිතා කළ හැකිය (ඔබට මෙය mu-plugin එකකට එක් කළ හැකිය):

add_filter('wu_get_countries', function($countries) {

// DE යන්න ඔබේ රටේ ද්විඅකුරු කේතයෙන් වෙනස් කරන්න

// ජර්මනිය සඳහා පහත උදාහරණය.

unset($countries['DE']);

// DE යන්න ඔබේ රටේ ද්විඅකුරු කේතයෙන් සහ ඔබේ රටේ නාමයේ නාමය වෙනස් කරන්න.

// ජර්මනිය සඳහා පහත උදාහරණය.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});
