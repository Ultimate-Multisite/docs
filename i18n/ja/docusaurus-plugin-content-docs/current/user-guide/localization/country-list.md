---
title: 国一覧
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Ultimate Multisite 国リストの並べ替え

国を選択するドロップダウンは、国名の英語バリエーションに基づいてアルファベット順に並べられています。これにより、時には、会社の本拠国やほとんどの顧客の国が、膨大な国名リストの中間に埋もれてしまうことがあります。

それを修正し、選択リストの先頭に自分の国を追加するために、以下のスニペットを使用できます（mu-pluginに追加してください）：

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
