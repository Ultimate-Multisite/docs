---
title: Nhật ký thay đổi VAT
sidebar_position: 99
_i18n_hash: 6a39ef4779b6ed52a08804c75ca25fc9
---
# Nhật ký thay đổi VAT

Version 1.0.7 - Phát hành ngày 2026-02-03

* Khắc phục: Mã VAT Đức (DE) bị lỗi xác thực do lỗi MS_MAX_CONCURRENT_REQ của dịch vụ VIES SOAP. Chúng tôi đã chuyển từ API SOAP cũ sang API REST VIES chính thức của EU để xác thực đáng tin cậy hơn.
* Khắc phục: Giờ đây, nếu dịch vụ VIES tạm thời không khả dụng, hệ thống sẽ chấp nhận mã VAT thay vì từ chối sai. Một mục nhật ký sẽ được tạo để xem xét sau.
* Khắc phục: Trường VAT/Mã số thuế hiện hiển thị cho tất cả các quốc gia, không chỉ các thành viên EU. Các mã số thuế ngoài EU (ví dụ: mã CHE của Thụy Sĩ) sẽ được lưu trữ để hiển thị trên hóa đơn mà không cần xác thực VIES.
* Khắc phục: Việc tra cứu tiền tố VAT cho Hy Lạp (GR), Monaco (MC) và Isle of Man (IM) bị lỗi do logic tra cứu mảng không chính xác.
* Cải tiến: Đã loại bỏ dependency phát triển (dev dependency) wp-cli-bundle không cần thiết, vốn có thể gây ra lỗi nghiêm trọng khi sử dụng cùng với addon Site Exporter.
* Cải tiến: Bổ sung bộ kiểm thử đơn vị (unit test suite) toàn diện (53 bài kiểm tra).

Version 1.0.6 - Phát hành ngày 2026-01-25

* Khắc phục: Các giao dịch B2B nội địa hiện tính VAT chính xác. Theo quy tắc VAT của EU, cơ chế tính ngược (reverse charge) chỉ áp dụng cho giao dịch B2B xuyên biên giới, chứ không áp dụng khi quốc gia của khách hàng trùng với quốc gia của công ty.

Version 1.0.5 - Phát hành ngày 2026-01-22

* Khắc phục: Addon không tải hoặc hoạt động đúng cách.
* Thay đổi: Đã chuyển nguồn dữ liệu tỷ lệ VAT từ euvatrates.com sang kho lưu trữ ibericode/vat-rates để có dữ liệu đáng tin cậy và được bảo trì tích cực hơn.
* Khắc phục: Sửa lỗi chính tả giá trị tùy chọn super_reduced_rates.
* Cải tiến: Thêm kiểm tra giá trị null khi xử lý mã quốc gia để ngăn ngừa lỗi.
* Thay đổi: Loại bỏ các tệp dịch thuật được đóng gói, thay vào đó sử dụng cập nhật tự động qua Traduttore.

Version: 1.0.3 - Phát hành ngày 2025-09-28

* Đổi tiền tố thành ultimate-multisite; cập nhật text domain; tăng phiên bản.

Version 1.0.0-beta.4 - 2021-09-24

* Bổ sung: bộ lọc wp_ultimo_skip_network_active_check cho các thiết lập dựa trên mu-plugins;

Version 1.0.0 - 05/08/2021 - Phát hành ban đầu
