---
title: দেশ তালিকা
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Ultimate Multisite-ৰ দেশৰ তালিকা পুনৰ সজলি {#re-ordering-the-ultimate-multisite-country-list}

দেশ বাছি ল’বলৈ দিয়া ড্রপডাউন মেনুখন দেশৰ নামৰ ইংৰাজী সংস্কৰণ অনুসৰি वर्णানুক্রমে (alphabetically) সাজু কৰা থাকে। ইয়াৰ অৰ্থ হ'ব পাৰে যে, কেতিয়াবা, আপোনাৰ কোম্পানীৰ বা/নাকি আপোনাৰ বেছিভাগ গ্ৰাহকৰ মূল দেশখন এটা বিশাল দেশৰ নামৰ তালিকাৰ মাজত হেৰাই যোৱা বা লুকাই থকা এটা স্থানত থাকিব।

এই সমস্যাটো সমাধান কৰিবলৈ আৰু আপোনাৰ পছন্দৰ দেশখনক বাছনি তালিকাৰ ওপৰত স্থান দিবলৈ, আপুনি তলত দিয়া কোড খণ্ডটো ব্যৱহাৰ কৰিব পাৰে (আপুনি ইয়াক এটা mu-plugin ত যোগ কৰিব পাৰে):

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
