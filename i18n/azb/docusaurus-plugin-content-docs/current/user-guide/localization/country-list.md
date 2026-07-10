---
title: Ülke Listesi
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Ultimate Multisite ülkesi listesini yeniden düzenleme {#re-ordering-the-ultimate-multisite-country-list}

Ülke seçimi için kullanılan açılır menü, ülke isimlerinin İngilizce versiyonlarına göre alfabetik olarak sıralanır. Bu durum, bazen şirketinizin veya müşterilerinizin çoğunluğunun bulunduğu ana ülkenin, çok uzun bir ülke listesinin ortasında kalmasına neden olabilir.

Bu sorunu çözmenize ve seçili ülkenizi listeye en üste eklemenize yardımcı olmak için aşağıdaki kod parçacığını kullanabilirsiniz (bunu bir mu-plugin'e ekleyebilirsiniz):

```php
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
```
