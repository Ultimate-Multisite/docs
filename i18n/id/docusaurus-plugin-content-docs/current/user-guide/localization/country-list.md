---
title: Daftar Negara
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Mengubah urutan daftar negara Ultimate Multisite

Dropdown untuk memilih negara diurutkan secara alfabetis berdasarkan nama negara dalam bahasa Inggris. Ini berarti, terkadang, negara asal perusahaan Anda dan/atau sebagian besar pelanggan Anda tersembunyi di tengah-tengah daftar nama negara yang sangat panjang.

Untuk membantu Anda memperbaiki hal ini dan menambahkan negara pilihan Anda ke urutan teratas daftar, Anda dapat menggunakan snippet di bawah ini (Anda dapat menambahkannya ke mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Ubah DE menjadi kode dua huruf negara Anda

// Contoh di bawah untuk Jerman.

unset($countries['DE']);

// Ubah DE menjadi kode dua huruf negara Anda

// dan nama negara Anda.

// Contoh di bawah, untuk Jerman.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});
