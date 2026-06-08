---
id: wu_wp_config_reference_hook_line_patterns
title: Bộ lọc - wu_wp_config_reference_hook_line_patterns
sidebar_label: wu_wp_config_reference_hook_line_patterns
_i18n_hash: 5fd70ec9bc5a2b3357660797baf5519b
---
# Filter: wu_wp_config_reference_hook_line_patterns

Khi xác định vị trí để chèn các hằng số (constants), chúng tôi sẽ kiểm tra theo nhiều mẫu (patterns) khác nhau:

1. Chúng tôi tìm kiếm định nghĩa của biến `$table_prefix`;
2. Chúng tôi tìm kiếm các định nghĩa `$table_prefix` phức tạp hơn – ví dụ, những định nghĩa sử dụng biến môi trường (env variables);
3. Nếu không tìm thấy, chúng tôi sẽ tìm kiếm comment 'Happy Publishing';
4. Nếu cả điều trên cũng không có, chúng tôi sẽ tìm đến phần đầu của file. Trong đó, key đại diện cho mẫu (pattern) và value là số dòng cần thêm vào. Nếu bạn truyền một số dòng âm, đoạn code sẽ được ghi vào *trước* dòng được tìm thấy, thay vì ghi vào sau nó.

### Nguồn

Được định nghĩa tại [`inc/helpers/class-wp-config.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/helpers/class-wp-config.php#L143) ở dòng 143.
