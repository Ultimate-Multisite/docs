---
title: Daftar Negara
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Ngatur Ulang Urutan Daftar Negara Ultimate Multisite {#re-ordering-the-ultimate-multisite-country-list}

Dropdown pikeun milih negara téh diurutkeun alfabet dumasar variasi basa Inggris tina nami nagara. Ieu bisa jadi, kadang-kadang, nagara rumah perusahaan anjeun jeung/atawa sabagian loba pelanggan anjeun bisa nyumput di tengah daftar nami nagara anu kacida gedéna.

Supaya ngabantosan anjeun ngarobah éta sarta nambahan nagara pilihan anjeun ka urutan pangdepan daftar panyorangan, anjeun bisa nganggo snippet di handap ieu (anjeun bisa nambahan éta kana mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Ganti DE jadi kode dua huruf nagara anjeun

// Conto di handap pikeun Jerman.

unset($countries['DE']);

// Ganti DE jadi kode dua huruf nagara anjeun

// jeung nami nagara anjeun.

// Conto di handap, pikeun Jerman.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});
