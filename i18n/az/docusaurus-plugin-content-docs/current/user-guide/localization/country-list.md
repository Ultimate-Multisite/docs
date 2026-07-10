---
title: Ölkə siyahısı
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Ultimate Multisite ölkə siyahısının sıralamasını dəyişdirmək {#re-ordering-the-ultimate-multisite-country-list}

Ölkə seçmək üçün açılan menyu, ölkə adlarının İngiliscə versiyalarına əsasən alfabetik sırayla təşkil olunur. Bu o demək ola bilər ki, bəzən şirkətinizin yaşadığı ölkə və ya müştərilərinizin əksəriyyətinin yaşadığı ölkə böyük bir ölkə siyahısının ortasında gizlənmiş olur.

Bunu düzəltməyə və seçdiyiniz ölkəni siyahının yuxarısına əlavə etməyə kömək etmək üçün aşağıdakı kod parçasına (bunu bir mu-plugin-ə əlavə edə bilərsiniz) istifadə edə bilərsiniz:

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
