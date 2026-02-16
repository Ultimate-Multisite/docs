---
title: Danh sách Quốc gia
sidebar_position: 5
_i18n_hash: 9c3cc54ddec563f05e01e1282a9e9f87
---
# Sắp xếp lại danh sách quốc gia trong Ultimate Multisite

Dropdown chọn quốc gia được sắp xếp theo thứ tự bảng chữ cái dựa trên tên tiếng Anh của các quốc gia. Điều này có nghĩa là đôi khi quốc gia của công ty bạn hoặc quốc gia của phần lớn khách hàng có thể bị chìm giữa một danh sách dài các tên quốc gia.

Để giúp bạn khắc phục vấn đề này và đưa quốc gia mong muốn lên đầu danh sách, bạn có thể sử dụng đoạn code bên dưới (bạn có thể thêm vào mu-plugin):

add_filter('wu_get_countries', function($countries) {

// Thay DE bằng mã hai chữ cái của quốc gia bạn muốn

// Ví dụ dưới đây là cho Đức.

unset($countries['DE']);

// Thay DE bằng mã hai chữ cái của quốc gia bạn muốn

// và tên của quốc gia đó.

// Ví dụ dưới đây là cho Đức.

$countries = array_merge(array( 'DE' => __('Germany', 'ultimate-multisite'), ), $countries);

return $countries;

});
