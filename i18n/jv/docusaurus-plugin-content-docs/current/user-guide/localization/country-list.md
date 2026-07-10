---
title: Daftar Negara
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Ngatur Ulang Urutan Daftar Negara Ultimate Multisite {#re-ordering-the-ultimate-multisite-country-list}

Dropdown kanggo milih negara diurutake miturut abjad saka varian basa Inggris saka jeneng negarane. Iki bisa tegese, kadang-kadang, negara panggonan utama perusahaanmu lan/utawa kebanyakan pelangganmu bisa kempal ing tengah daftar jeneng negara sing gedhe banget.

Kanggo mbantu ngresiki masalah kuwi lan nambah negara pilihanmu nang urutan paling dhuwur daftar pilihan, sampeyan bisa nganggo cuplikan (snippet) ing ngisor iki (sampeyan bisa nambahake iki nang mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Ganti DE karo kode dua huruf negara panjenengan

// Conto ing ngisor kanggo Jerman.

unset($countries['DE']);

// Ganti DE karo kode dua huruf negara panjenengan

// lan jeneng negara panjenengan.

// Conto ing ngisor, kanggo Jerman.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});
