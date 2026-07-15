---
title: Еллар рўйхати
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Ultimate Multisite ülkesini yeniden sıralama

Ülke seçmek için açılan menü, ülkelerin İngilizce isimlerine göre alfabetik olarak sıralanır. Bu durum bazen şirketinizin veya müşterilerinizin ana ülkesinin ve/veya çoğu müşterinizin çok uzun bir ülke adı listesinin ortasında kalmasına neden olabilir.

Bunu düzeltmenize ve seçtiğiniz ülkeyi seçim listesinin en üstüne eklemenize yardımcı olmak için aşağıdaki kod parçasını kullanabilirsiniz (bunu bir mu-plugin'e ekleyebilirsiniz):

add_filter('wu_get_countries', function($countries) {

// DE'yi kendi ülkenizin iki harfli koduyla değiştirin

// Aşağıdaki örnek Almanya için.

unset($countries['DE']);

// DE'yi kendi ülkenizin iki harfli koduyla ve ülkenizin adıyla değiştirin.

// Aşağıdaki örnek, Almanya için.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});
