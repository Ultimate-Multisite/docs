---
title: 国家列表
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# 重排 Ultimate Multisite 国家列表

下拉菜单按英文国家名称的变体按字母顺序排列。这可能意味着，有时贵公司的总部和/或大多数客户所在的国家会被埋在庞大的国家名称列表中间。

为帮助您解决此问题并将您选择的国家添加到选择列表的顶部，您可以使用下面的代码片段（您可以将其添加到 mu‑plugin 中）：

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
