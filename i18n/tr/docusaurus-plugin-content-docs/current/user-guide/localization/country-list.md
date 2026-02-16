---
title: Ülke Listesi
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Ultimate Multisite ülke listesini yeniden sıralama

Ülke seçimi için kullanılan açılır menü, ülke isimlerinin İngilizce karşılıklarına göre alfabetik olarak sıralanır. Bu durum bazen şirketinizin bulunduğu ülkenin veya müşterilerinizin çoğunluğunun yaşadığı ülkenin uzun bir ülke listesinin ortalarında kalmasına neden olabilir.

Bu sorunu çözmek ve istediğiniz ülkeyi seçim listesinin en üstüne eklemek için aşağıdaki kod parçacığını kullanabilirsiniz (bunu bir mu-plugin'e ekleyebilirsiniz):

add_filter('wu_get_countries', function($countries) {

// DE yerine kendi ülkenizin iki harfli kodunu yazın

// Aşağıdaki örnek Almanya içindir.

unset($countries['DE']);

// DE yerine kendi ülkenizin iki harfli kodunu

// ve ülkenizin adını yazın.

// Aşağıdaki örnek Almanya içindir.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});
