---
title: 국가 목록
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Re-ordering the Ultimate Multisite country list

국가를 선택하는 드롭다운은 국가 이름의 영어 변형을 기준으로 알파벳순으로 정렬됩니다. 이로 인해 가끔 귀사의 본국 및/또는 대부분의 고객이 거대한 국가 목록의 중간에 숨어 있을 수 있습니다.

이를 해결하고 선택 목록 상단에 원하는 국가를 추가하려면 아래 스니펫을 사용하면 됩니다(이를 mu-plugin에 추가할 수 있습니다):

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
