---
title: Senarai Negara
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Menyusun semula senarai negara Ultimate Multisite

Dropdown untuk memilih negara disusun mengikut abjad berdasarkan nama negara dalam bahasa Inggeris. Ini bermakna kadangkala, negara asal syarikat anda dan/atau kebanyakan pelanggan anda mungkin terselit di tengah-tengah senarai nama negara yang panjang.

Untuk membantu anda menyelesaikan masalah ini dan menambah negara pilihan anda ke bahagian atas senarai pemilihan, anda boleh menggunakan snippet di bawah (anda boleh menambahnya ke dalam mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Tukar DE kepada kod dua huruf negara anda

// Contoh di bawah untuk Jerman.

unset($countries['DE']);

// Tukar DE kepada kod dua huruf negara anda

// dan nama negara anda.

// Contoh di bawah, untuk Jerman.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});
