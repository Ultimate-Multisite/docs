---
title: Yêu cầu
sidebar_position: 1
_i18n_hash: 77ce1a129b3eb304cc0b89d72faef9cf
---
# Yêu cầu hệ thống cho Ultimate Multisite

Điều đầu tiên bạn có thể tự hỏi trước khi mua Ultimate Multisite là plugin của chúng tôi cần những yêu cầu gì để hoạt động. May mắn thay, chỉ có một vài yêu cầu cơ bản để chạy Ultimate Multisite: một **tên miền**, một **nhà cung cấp hosting** tốt và một bản cài đặt WordPress **Multisite**. Đó là tất cả những gì bạn cần!

## Tên miền

Trước tiên, hãy nói về tên miền.

Khi chọn tên miền, hãy cân nhắc lĩnh vực cụ thể của bạn là gì và bạn sẽ tạo ra điều gì với Ultimate Multisite: Bạn muốn tạo một agency? Bán các website dạng cửa hàng? Hay có thể là dịch vụ web hosting WordPress? Mọi thứ đều có thể với Ultimate Multisite.

Plugin của chúng tôi cung cấp các dịch vụ đăng ký, thu tiền thanh toán, form checkout, mã giảm giá và giao tiếp với khách hàng. Phần lớn công việc cần thiết để cài đặt, cấu hình và bảo trì một WordPress Multisite đều được Ultimate Multisite hỗ trợ.

Bất kỳ lĩnh vực nào bạn chọn đều có thể quản lý được bằng plugin của chúng tôi, miễn là bạn bán website như một dịch vụ! Hãy chắc chắn chọn tên miền phù hợp với kế hoạch kinh doanh của bạn.

## Nhà cung cấp Hosting

Bây giờ bạn đã có một tên miền hấp dẫn đại diện cho lĩnh vực và doanh nghiệp của mình, bạn sẽ cần chọn một công ty web hosting tốt để lưu trữ mạng lưới của bạn với Ultimate Multisite. Có một số lựa chọn tốt trên thị trường. Một số nhà cung cấp hosting tích hợp tốt với Ultimate Multisite, điều này có thể là yếu tố quyết định tùy thuộc vào những gì bạn định xây dựng.

Ultimate Multisite sẽ hoạt động trên bất kỳ nhà cung cấp hosting nào. Điểm khác biệt duy nhất là một số công ty hosting như _WPMU DEV Hosting_, _WP Engine_, _Closte_, _Cloudways_, _Gridpane_ và _Runcloud_ có tích hợp chặt chẽ hơn cho việc ánh xạ tên miền. Với các hosting khác, bạn có thể cần ánh xạ tên miền tùy chỉnh thủ công. Bạn cũng nên chọn nhà cung cấp hosting hỗ trợ AutoSSL. _Closte_, _Runcloud_ và _cPanel_ đều hỗ trợ tính năng này.

Về thông số kỹ thuật máy chủ, không có công thức cụ thể nào vì nó sẽ phụ thuộc vào các tính năng và chức năng bạn cung cấp cũng như quy mô mạng lưới của bạn. Shared hosting có thể là khởi đầu tốt, nhưng ngay khi mạng lưới của bạn bắt đầu phát triển, bạn có thể sẽ cần một VPS chuyên dụng.

## WordPress Multisite

Bây giờ, hãy nói một chút về việc cài đặt WordPress Multisite.

WordPress Multisite cho phép bạn có một mạng lưới các site trên một bản cài đặt duy nhất. Đây là tính năng có sẵn, nhưng không được kích hoạt theo mặc định. Bạn cần bật tính năng này trong bản cài đặt WordPress và bảng điều khiển web hosting của mình.

Có WordPress với Multisite được bật **là nền tảng cho Ultimate Multisite**. Vì mục đích sử dụng chính của Ultimate Multisite là giúp người dùng quản lý và bán website như một dịch vụ, điều này cần được thực hiện trên WordPress với Multisite được bật.

Chúng tôi có **một bài viết chi tiết** hướng dẫn từng bước những gì cần làm để bật tính năng Multisite trên bản cài đặt WordPress của bạn.

Sau khi bạn đã bật Multisite trên WordPress, đã đến lúc cài đặt Ultimate Multisite. Để cài đặt Ultimate Multisite đúng cách, bạn cần có:

  * WordPress: v5.3+ (Khuyến nghị: Phiên bản ổn định mới nhất)

  * PHP: 7.4.x (hỗ trợ > 8.0 sẽ sớm có)

  * MySQL: v5+ (Khuyến nghị: 5.6, trong trường hợp nhà cung cấp hosting của bạn không có phiên bản 8.0)

Đây là những yêu cầu phần mềm duy nhất cho Ultimate Multisite.

Lưu ý rằng Ultimate Multisite có thể hoạt động với PHP 8.0 nhưng chúng tôi khuyến nghị chạy với PHP 7.4.x.

Ngoài ra, chúng tôi khuyến nghị cài đặt trên **tên miền chính**, không phải subdomain hoặc thư mục con. Nó có thể hoạt động trên subdomain/thư mục con, nhưng có thể gặp một số lỗi.

Để xem hướng dẫn chi tiết về cách cài đặt Ultimate Multisite, **nhấp vào đây**.
