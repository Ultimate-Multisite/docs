---
title: Qauv Tshiab
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# ປ່ຽນລຳດັບຂອງລາຍຊື່ປະເທດໃນ Ultimate Multisite {#re-ordering-the-ultimate-multisite-country-list}

Dropdown ທີ່ໃຊ້ເລືອກປະເທດ ຈະຖືກຈັດລຽງຕາມຕົວອັກສອນພາສາອັງກິດຂອງຊື່ປະເທດ. ອັນນີ້ອາດເຮັດໃຫ້ບາງຄັ້ງ, ປະເທດຕົ້ນທາງຂອງບໍລິສັດເຈົ້າ ແລະ/ຫຼື ລູກຄ້າສ່ວນໃຫຍ່ ຖືກເຊື່ອງໄວ້ຢູ່ກາງລາຍຊື່ປະເທດທີ່ຍາວຫຼາຍ.

ເພື່ອຊ່ວຍແກ້ปัญຫານີ້ ແລະ ເພີ່ມປະເທດທີ່ເຈົ້າຕ້ອງການໃສ່ຢູ່ເທິງຂອງລາຍການເລືອກ, ເຈົ້າສາມາດໃຊ້ snippet ខាងក្រោមນີ້ໄດ້ (ເຈົ້າສາມາດເພີ່ມມັນເຂົ້າໃນ mu-plugin ໄດ້):

add_filter('wu_get_countries', function($countries) {

// ປ່ຽນ DE ເປັນລະຫັດສອງຕົວຂອງປະເທດຂອງເຈົ້າ

// ຕົວຢ່າງດ້ານລຸ່ມສໍາລັບເຢຍລະມັນ.

unset($countries['DE']);

// ປ່ຽນ DE ເປັນລະຫັດສອງຕົວຂອງປະເທດຂອງເຈົ້າ

// ແລະ ຊື່ຂອງປະເທດຂອງເຈົ້າ.

// ຕົວຢ່າງດ້ານລຸ່ມ, ສຳລັບເຢຍລະມັນ.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});
