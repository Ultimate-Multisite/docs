---
title: Nhật ký thay đổi tích hợp WooCommerce
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# Nhật ký thay đổi tích hợp WooCommerce {#woocommerce-integration-changelog}

Phiên bản 2.2.0 - Phát hành vào 2026-07-01
* Mới: Các khoản thuế của Ultimate Multisite giờ đây xuất hiện dưới dạng các dòng phí WooCommerce riêng biệt tại checkout, giúp tổng thuế rõ ràng hơn trước khi thanh toán.
* Mới: Đã thêm cài đặt tùy chọn tham gia "Tạm ngưng tư cách thành viên ngay lập tức khi gia hạn thất bại" và filter `wu_woo_suspend_on_payment_failure` cho các site muốn tạm ngưng khi gia hạn thất bại trong khoảng thời gian thử lại của WooCommerce Subscriptions.
* Sửa: Đã đồng bộ lại các trạng thái WooCommerce Subscription có thể vẫn không đồng bộ với tư cách thành viên Ultimate Multisite sau các lần gia hạn thất bại hoặc được khôi phục.
* Sửa: Đã thêm tiền tệ của cửa hàng WooCommerce vào danh sách tiền tệ của Ultimate Multisite khi bị thiếu.
* Sửa: Đã giữ lại chi tiết thanh toán của khách hàng khi chuyển hướng người đăng ký đến WooCommerce checkout.
* Cải thiện: Đã thêm khả năng tương thích với Jetpack Autoloader 5.
* Cải thiện: Đã dọn dẹp quá trình tạo gói phát hành để các tệp zip trên GitHub và marketplace tránh các thư mục staging lồng nhau và tệp phát triển.

Phiên bản 2.0.6 - Phát hành vào 2026-01-16
* Cải thiện: Bao gồm các đăng ký cốt lõi trong addon. Không còn yêu cầu tiện ích mở rộng Woocommerce Subscriptinos.

Phiên bản 2.0.5 - Phát hành vào 2026-01-09
* Cải thiện: Tải bản dịch từ glotpress API.
* Sửa: Lỗi nghiêm trọng trong một số trình dựng trang.
* Sửa: Chuyển hướng vô hạn khi khách hàng là thành viên của site chính.

Phiên bản 2.0.4 - Phát hành vào 2025-11-14
* Đã thêm: Bản dịch cho nhiều ngôn ngữ hơn.
* Đã thay đổi: Đổi tên thành Ultimate Multisite: Woocommerce Integration.
* Đã thêm: Khả năng tương thích với Woocommerce 10.2.1.
* Đã thêm: Khả năng tương thích với Woocommerce Subscriptions 7.7.0.
* Sửa: Khả năng tương thích với PHP 8.4
* Sửa: Chuyển hướng nhưng khi không có trang WC account nào tồn tại.

Phiên bản 2.0.3 - Phát hành vào 2025-08-13
* Đã thay đổi: Đã bật cập nhật tự động với marketplace mới.

Phiên bản 2.0.2 - Phát hành vào 2025-07-05
* Đã thay đổi: Đổi tên thành Multisite Ultimate: Woocommerce Integration.
* Đã thêm: Khả năng tương thích với Woocommerce 9.8.1.
* Đã thêm: Khả năng tương thích với Woocommerce Subscriptions 7.3.0.
* Sửa: Khách hàng hủy một đăng ký.
* Sửa: Lỗi nghiêm trọng khi sử dụng khối checkout.
* Cải thiện: Hiện tương thích với bảng đơn hàng tùy chỉnh hiệu năng cao của Woocommerce.
* Sửa: Việc hủy tại WooCommerce checkout vẫn có thể nâng cấp tư cách thành viên.

Phiên bản 2.0.1 - Phát hành vào 2023-08-09

* Đã thêm: Khả năng tương thích với Woocommerce 7.9.0.
* Đã thêm: Khả năng tương thích với Woocommerce Subscriptions 5.3.0.
* Đã thêm: Hỗ trợ cập nhật tư cách thành viên.
* Đã thêm: Thông báo về thời gian dùng thử và phí thiết lập trong Woocommerce.
* Đã thêm: Nhận diện các sản phẩm Ultimate Multisite Woocommerce bằng một giá trị meta.
* Đã thêm: Chèn một bản sửa một lần để đánh dấu tất cả sản phẩm Woocommerce liên quan đến Ultimate Multisite.
* Đã thêm: Đã xóa các sản phẩm do Ultimate Multisite tạo khỏi danh sách Woocommerce.
* Cải thiện: Đã tạo một giảm giá Woocommerce không định kỳ để áp dụng cho giỏ hàng.
* Cải thiện: Đã khôi phục giảm giá định kỳ cho sản phẩm Woocommerce.
* Cải thiện: Đã thêm nhãn giảm giá định kỳ vào sản phẩm Woocommerce.
* Cải thiện: Đã đảm bảo loại sản phẩm tại checkout.
* Sửa: Duy trì trạng thái tư cách thành viên trong quá trình hạ cấp.
* Sửa: Kiểm tra xem đăng ký có tồn tại hay không để tránh lỗi trong quá trình hủy.
* Sửa: Đã thêm ngày bắt đầu đăng ký để sử dụng trong Woocommerce subscriptions.
* Nội bộ: Đã triển khai quy trình build PHP 8.1 mới.

Phiên bản 2.0.0 - Viết lại hoàn toàn.

* Đã thêm: Phương thức xử lý hủy để xóa woo subscription khi thay đổi gateway hoặc hủy tư cách thành viên;
* Đã thêm: Handler để hạ cấp và nâng cấp tư cách thành viên;
* Cải thiện: Tải các dependency của woocommerce trên biểu mẫu cập nhật khách hàng trong các site con để cho phép cập nhật account;
* Cải thiện: Tải đúng giỏ hàng Woocommerce nếu chưa tồn tại;
* Cải thiện: Đảm bảo chúng ta đang ở các bảng site chính khi xử lý checkout;
* Cải thiện: Tạo đơn hàng gia hạn Ultimo dựa trên giá trị đơn hàng Woocommerce subscription chứ không phải từ lần thanh toán cuối;
* Sửa: Liên kết nút Go to WU Membership;
* Sửa: Đặt đơn hàng Ultimo là đã thanh toán khi gia hạn Woocommerce subscriptions đã được thanh toán;
* Build: Thêm MPB làm trình dựng;

Phiên bản 2.0.0-beta-5 - Phát hành vào 2022-01-21

* Nội bộ: Đã thêm trình tạo hooks và filters;
* Nội bộ: Đã thêm Ultimate Multisite stubs để cải thiện chất lượng trải nghiệm cho developer;
* Đã sửa: Ngăn tạo nhiều sản phẩm khi không cần thiết;

Phiên bản 2.0.0-beta.4 - 2021-09-23

* Sửa: yêu cầu WooCommerce phải được kích hoạt trên network thay vì chỉ site chính;
* Cải thiện: đã thêm filter để cho phép add-on được sử dụng như một mu-plugin;

Phiên bản 2.0.0-beta.3 - 2021-05-28

* Sửa: kiểm soát quyền truy cập dashboard quá nghiêm ngặt;
* Cải thiện: Đã thêm liên kết trợ giúp WooCommerce vào top-menu của Ultimate Multisite;

Phiên bản 2.0.0-beta.2 - 2021-05-04

* Cải thiện: tạo các khoản thanh toán đang chờ trên Ultimo khi tạo đơn hàng gia hạn WCS;
* Cải thiện: điền sẵn các trường thanh toán bằng dữ liệu khách hàng Ultimate Multisite;
* Cải thiện: thêm lại các trường thanh toán cho gateways;

Phiên bản 2.0.0-beta.1 - 2021-05-04

* Bản phát hành beta ban đầu

-- Phiên bản cũ --

Phiên bản 1.2.6 - 26/03/2020

* Đã sửa: Sự không tương thích nhỏ với các phiên bản mới hơn của WooCommerce Subscriptions;

Phiên bản 1.2.5 - 26/08/2019

* Đã sửa: Lỗi trong bản phát hành trước;

Phiên bản 1.2.4 - 22/08/2019

* Cải thiện: Đã thêm tùy chọn chuyển hướng đến màn hình WooCommerce checkout ngay sau khi tích hợp;

Phiên bản 1.2.3 - 26/05/2019

* Đã sửa: Email thanh toán cho WooCommerce biến mất trong một số trường hợp biên;

Phiên bản 1.2.2 - 27/02/2019

* Đã thêm: Hỗ trợ phí thiết lập trên tích hợp WooCommerce Subscription;

Phiên bản 1.2.1 - 17/11/2018

* Đã sửa: Vấn đề tương thích với Ultimate Multisite phiên bản 1.9.0;

Phiên bản 1.2.0 - 10/09/2018

* Cải thiện: URL cập nhật mới cho add-ons;
* Đã thêm: Hỗ trợ beta cho WooCommerce Subscription;

Phiên bản 1.1.2 - 11/02/2018

* Đã sửa: Liên kết để thanh toán được tạo động để phản hồi các thay đổi đối với WooCommerce endpoints;
* Cải thiện: Giờ đây chúng tôi buộc trạng thái hoàn tất cho các đơn hàng của mình khi payment_completed được gọi để đảm bảo các renewal hooks của chúng tôi chạy đúng thời điểm;

Version 1.1.1 - 24/01/2018

* Đã sửa: Giờ đây nó cũng kiểm tra xem WooCommerce có vừa được kích hoạt trên site chính hay không;
* Đã sửa: Đã bao gồm các over-loading để cho phép việc tạo đơn hàng bao gồm thuế;

Version 1.1.0 - 04/11/2017

* Đã sửa: Giờ đây nhãn của nút tích hợp thực sự thay đổi để phản ánh cài đặt. Yêu cầu Ultimate Multisite 1.5.0;
* Đã sửa: WooCommerce Integration giờ đây hoạt động ngay cả khi WooCommerce không active trên network và chỉ được kích hoạt trong site chính;

1.0.0 - Bản phát hành ban đầu
