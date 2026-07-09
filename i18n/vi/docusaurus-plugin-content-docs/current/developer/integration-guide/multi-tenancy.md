---
title: Tích hợp đa đối tượng thuê
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Tích hợp Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 thay đổi một số điểm chạm tích hợp cho tenant độc lập, xác minh di trú và tự động hóa vòng đời tenant.

## Luồng khởi tạo tenant

Các tích hợp tạo hoặc sửa đổi tenant nên tuân theo thứ tự này:

1. Xác định bản ghi sổ đăng ký tenant và mô hình cô lập.
2. Tạo hoặc xác minh trình ghi cơ sở dữ liệu tenant.
3. Khởi tạo lược đồ tenant.
4. Cấp phát người dùng tenant.
5. Đăng ký định tuyến tenant và đường dẫn hệ thống tệp.
6. Chạy xác minh di trú trước khi đưa tenant ra sử dụng.

Đừng giả định rằng một tenant độc lập có thể dùng lại kết nối cơ sở dữ liệu mạng. Hãy dùng sổ đăng ký tenant và các trừu tượng trình ghi do addon cung cấp.

## SSO và REST hooks

Tự động đăng nhập tenant không trạng thái sử dụng các token thời hạn ngắn với một claim mục đích, bảo vệ chống phát lại JTI, giới hạn hết hạn và ghim nguồn gốc. Các tích hợp thêm nút đăng nhập hoặc liên kết quản lý từ xa nên tạo lượt truy cập tenant thông qua luồng SSO được hỗ trợ thay vì tự xây dựng trực tiếp URL đăng nhập tenant.

Các sự kiện kiểm tra API phía mạng và bản tóm tắt hằng ngày có sẵn cho các cổng tenant độc lập. Hãy dùng các nhật ký đó khi gỡ lỗi những hệ thống bên ngoài gọi endpoint vòng đời tenant.

## URL hành động của khách hàng độc lập

Ultimate Multisite v2.13.0 định tuyến các hành động khách hàng của tenant độc lập trở lại trang chính cho các luồng tài khoản, thanh toán, lập hóa đơn, hóa đơn, trang, chuyển đổi mẫu và ánh xạ miền. Các tích hợp hiển thị liên kết quản lý phía tenant nên trỏ các hành động đó đến bảng khách hàng của trang chính và bao gồm một đích quay lại đã được xác thực khi người dùng cần có thể điều hướng trở lại tenant sau khi hoàn tất hành động.

Dùng trình bao SSO lõi cho các liên kết quản lý xuyên miền:

```php
$url = wu_with_sso($main_site_customer_url);
```

URL được tạo vẫn có thể được lọc thông qua `wu_sso_url`, nhận URL SSO, người dùng hiện tại, ID trang đích và ngữ cảnh chuyển hướng. Add-on có thể dùng filter đó để thêm ngữ cảnh riêng của nhà cung cấp hoặc thay thế URL broker trong khi vẫn giữ nguyên xác thực token của Ultimate Multisite.

Không sao chép trạng thái gói thành viên, hóa đơn, địa chỉ thanh toán, mẫu hoặc quản lý miền bên trong tenant độc lập. Hãy xem bảng điều khiển tenant là nơi khởi chạy và bảng khách hàng của trang chính là hệ thống ghi nhận chính thức cho các hành động được quản lý.

## Xác minh di trú

Sau khi một tích hợp di trú hoặc vòng đời thay đổi dữ liệu tenant, hãy chạy các cổng xác minh:

- `wp tenant verify-no-legacy --site=<site-id>` xác nhận tenant không còn phụ thuộc vào các đường dẫn phía mạng cũ.
- `wp tenant verify-sovereign-push --site=<site-id>` xác nhận các tác vụ đẩy độc lập có thể xử lý và xả hàng đợi.

Các tích hợp nên xem xác minh thất bại là yếu tố chặn triển khai và tránh đánh dấu tenant là đang hoạt động cho đến khi lỗi được giải quyết.

## Xóa tenant

Các luồng xóa nên gọi đường dẫn tháo dỡ addon để thông tin xác thực cơ sở dữ liệu tenant được dọn dẹp. Các tích hợp bên ngoài có thể xóa tài nguyên của nhà cung cấp sau khi tháo dỡ thành công, nhưng không nên xóa cơ sở dữ liệu hoặc thư mục trên máy chủ khi xác minh hoặc các tác vụ đẩy bất đồng bộ vẫn đang chạy.

## Bộ định tuyến cơ sở dữ liệu đã lỗi thời

`Database_Router` cũ đã được thay thế bằng một stub báo lỗi thời. Các tích hợp mới nên xác định tenant thông qua API bộ định tuyến trang hiện tại và sổ đăng ký tenant thay vì phụ thuộc vào lớp bộ định tuyến cũ.
