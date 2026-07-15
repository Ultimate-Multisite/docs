---
id: wu_domain_has_correct_dns
title: Bộ lọc - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

Cho phép các nhà phát triển plugin thêm các bước kiểm tra mới để xác định kết quả cuối cùng.

## Tham số {#parameters}

| Tên | Kiểu dữ liệu | Mô tả |
|------|------|-------------|
| $result | `bool` | Kết quả hiện tại. |
| $domain | `self` | Đối tượng domain hiện tại. |
| $domains_and_ips | `array` | Danh sách các domain và IP được tìm thấy qua tra cứu DNS. |

### Từ phiên bản {#since}

- 2.0.4
### Nguồn {#source}

Được định nghĩa trong [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) tại dòng 455

## Giá trị trả về {#returns}
Cho biết liệu DNS đã được thiết lập đúng hay chưa.
