---
title: 國家列表
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# 重新排序 Ultimate Multisite 國家清單

選擇國家的下拉選單是依照英文國名的字母順序排列。這表示有時候，您公司所在的國家或大多數客戶所在的國家，可能會埋藏在一長串國名清單的中間。

為了解決這個問題，讓您偏好的國家顯示在選單最上方，您可以使用以下程式碼片段（可以將它加入 mu-plugin）：

add_filter('wu_get_countries', function($countries) {

// 將 DE 改成您國家的兩位字母代碼

// 以下範例是德國。

unset($countries['DE']);

// 將 DE 改成您國家的兩位字母代碼

// 並填入您國家的名稱。

// 以下範例是德國。

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});
