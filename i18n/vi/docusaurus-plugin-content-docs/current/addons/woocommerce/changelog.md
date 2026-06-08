---
title: Lịch sử thay đổi tích hợp WooCommerce
sidebar_position: 99
_i18n_hash: b34d062c52ab13dbab02f7162f01e641
---
# Nhật ký thay đổi Tích hợp WooCommerce

Version 2.0.6 - Phát hành ngày 2026-01-16
* Cải tiến: Bao gồm các gói đăng ký cốt lõi trong addon. Không còn yêu cầu extension Woocommerce Subscriptions.

Version 2.0.5 - Phát hành ngày 2026-01-09
* Cải tiến: Tải bản dịch từ API glotpress.
* Sửa lỗi: Lỗi nghiêm trọng trên một số page builder.
* Sửa lỗi: Chuyển hướng vô hạn khi khách hàng là thành viên của trang chính.

Version 2.0.4 - Phát hành ngày 2025-11-14
* Bổ sung: Bản dịch cho nhiều ngôn ngữ hơn.
* Thay đổi: Đổi tên thành Ultimate Multisite: Woocommerce Integration.
* Bổ sung: Tương thích với Woocommerce 10.2.1.
* Bổ sung: Tương thích với Woocommerce Subscriptions 7.7.0.
* Sửa lỗi: Tương thích với PHP 8.4
* Sửa lỗi: Chuyển hướng nhưng khi không có trang tài khoản WC.

Version 2.0.3 - Phát hành ngày 2025-08-13
* Thay đổi: Kích hoạt cập nhật tự động với marketplace mới.

Version 2.0.2 - Phát hành ngày 2025-07-05
* Thay đổi: Đổi tên thành Multisite Ultimate: Woocommerce Integration.
* Bổ sung: Tương thích với Woocommerce 9.8.1.
* Bổ sung: Tương thích với Woocommerce Subscriptions 7.3.0.
* Sửa lỗi: Khách hàng hủy gói đăng ký.
* Sửa lỗi: Lỗi nghiêm trọng khi sử dụng block checkout.
* Cải tiến: Hiện tương thích với các bảng đơn hàng tùy chỉnh hiệu suất cao của Woocommerce.
* Sửa lỗi: Hủy gói đăng ký tại checkout của WooCommerce vẫn có thể nâng cấp thành viên.

Version 2.0.1 - Phát hành ngày 2023-08-09

* Bổ sung: Tương thích với Woocommerce 7.9.0.
* Bổ sung: Tương thích với Woocommerce Subscriptions 5.3.0.
* Bổ sung: Hỗ trợ cập nhật thành viên.
* Bổ sung: Thông báo về phí dùng thử và phí thiết lập trong Woocommerce.
* Bổ sung: Nhận dạng các sản phẩm Woocommerce của Ultimate Multisite bằng giá trị meta.
* Bổ sung: Đã chèn một bản sửa lỗi tạm thời để đánh dấu tất cả các sản phẩm Woocommerce liên quan đến Ultimate Multisite.
* Bổ sung: Loại bỏ các sản phẩm do Ultimate Multisite tạo khỏi danh sách Woocommerce.
* Cải tiến: Tạo một khoản giảm giá Woocommerce không định kỳ để áp dụng vào giỏ hàng.
* Cải tiến: Khôi phục khoản giảm giá định kỳ cho sản phẩm Woocommerce.
* Cải tiến: Thêm nhãn giảm giá định kỳ vào sản phẩm Woocommerce.
* Cải tiến: Đảm bảo loại sản phẩm tại checkout.
* Sửa lỗi: Duy trì trạng thái thành viên trong quá trình hạ cấp.
* Sửa lỗi: Kiểm tra xem gói đăng ký có tồn tại hay không để tránh lỗi trong quá trình hủy.
* Sửa lỗi: Thêm ngày bắt đầu gói đăng ký để sử dụng trong các gói đăng ký Woocommerce.
* Nội bộ: Triển khai quy trình build PHP 8.1 mới.

Version 2.0.0 - Viết lại hoàn toàn.

* Bổ sung: Phương thức xử lý hủy để loại bỏ gói đăng ký woo khi thay đổi cổng thanh toán hoặc hủy thành viên;
* Bổ sung: Bộ xử lý để hạ cấp và nâng cấp thành viên;
* Cải tiến: Tải các dependency của woocommerce trên form cập nhật khách hàng trong subsites để cho phép cập nhật tài khoản;
* Cải tiến: Sửa lỗi tải giỏ hàng Woocommerce nếu chưa tồn tại;
* Cải tiến: Đảm bảo chúng ta đang ở các bảng của trang chính khi xử lý checkout;
* Cải tiến: Làm cho đơn hàng gia hạn Ultimo dựa trên giá trị đơn hàng gói đăng ký Woocommerce chứ không phải từ lần thanh toán cuối cùng;
* Sửa lỗi: Liên kết nút WU Membership;
* Sửa lỗi: Đặt đơn hàng Ultimo là đã thanh toán khi việc gia hạn gói đăng ký Woocommerce đã thanh toán;
* Build: Thêm MPB làm builder;

Version 2.0.0-beta-5 - Phát hành ngày 2022-01-21

* Nội bộ: Thêm hooks và filters generator;
* Nội bộ: Thêm các stub Ultimate Multisite để cải thiện trải nghiệm phát triển;
* Đã sửa: Ngăn chặn việc tạo nhiều sản phẩm khi không cần thiết;

Version 2.0.0-beta.4 - 2021-09-23

* Sửa lỗi: Yêu cầu WooCommerce phải hoạt động trên toàn mạng thay vì chỉ trên trang chính;
* Cải tiến: Thêm filter cho phép add-on được sử dụng như một mu-plugin;

Version 2.0.0-beta.3 - 2021-05-28

* Sửa lỗi: Kiểm soát truy cập dashboard quá nghiêm ngặt;
* Cải tiến: Thêm liên kết trợ giúp WooCommerce vào menu trên cùng của Ultimate Multisite;

Version 2.0.0-beta.2 - 2021-05-04

* Cải tiến: Tạo các khoản thanh toán đang chờ xử lý trên Ultimo khi tạo đơn hàng gia hạn WCS;
* Cải tiến: Điền trước các trường thanh toán bằng dữ liệu khách hàng Ultimate Multisite;
* Cải tiến: Thêm lại các trường thanh toán cho các cổng thanh toán;

Version 2.0.0-beta.1 - 2021-05-04

* Bản beta ban đầu

-- Các phiên bản cũ --

Version 1.2.6 - 26/03/2020

* Sửa lỗi: Tương thích kém nhỏ với các phiên bản mới hơn của WooCommerce Subscriptions;

Version 1.2.5 - 26/08/2019

* Sửa lỗi: Lỗi từ bản phát hành trước;

Version 1.2.4 - 22/08/2019

* Cải tiến: Thêm tùy chọn chuyển hướng đến màn hình checkout của WooCommerce ngay sau khi tích hợp;

Version 1.2.3 - 26/05/2019

* Sửa lỗi: Email thanh toán cho WooCommerce bị mất trong một số trường hợp đặc biệt;

Version 1.2.2 - 27/02/2019

* Bổ sung: Hỗ trợ phí thiết lập trên tích hợp WooCommerce Subscription;

Version 1.2.1 - 17/11/2018

* Sửa lỗi: Vấn đề tương thích với phiên bản Ultimate Multisite 1.9.0;

Version 1.2.0 - 10/09/2018

* Cải tiến: URL cập nhật mới cho các add-on;
* Bổ sung: Hỗ trợ beta cho WooCommerce Subscription;

Version 1.1.2 - 11/02/2018

* Sửa lỗi: Liên kết đến Pay được tạo động để phản hồi các thay đổi về endpoint của WooCommerce;
* Cải tiến: Chúng tôi hiện buộc trạng thái hoàn thành cho các đơn hàng của mình khi gọi payment_completed để đảm bảo các hook gia hạn của chúng tôi chạy khi cần;

Version 1.1.1 - 24/01/2018

* Sửa lỗi: Bây giờ nó cũng kiểm tra xem WooCommerce chỉ mới được kích hoạt trên trang chính hay không;
* Sửa lỗi: Bao gồm các over-loading để cho phép tạo đơn hàng bao gồm thuế;

Version 1.1.0 - 04/11/2017

* Sửa lỗi: Bây giờ nhãn của nút tích hợp thực sự thay đổi để phản ánh cài đặt. Yêu cầu Ultimate Multisite 1.5.0;
* Sửa lỗi: Tích hợp WooCommerce hiện hoạt động ngay cả khi WooCommerce không hoạt động trên toàn mạng và chỉ được kích hoạt trên trang chính;

1.0.0 - Phát hành ban đầu
