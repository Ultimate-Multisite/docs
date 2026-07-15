---
title: 'Bài học 3: Thiết lập Mạng của bạn'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Bài 3: Thiết Lập Mạng Lưới Của Bạn

Đã đến lúc xây dựng rồi. Trong bài học này, bạn sẽ cài đặt Ultimate Multisite và cấu hình nền tảng cho mạng lưới FitSite. Mọi quyết định ở đây đều được cân nhắc dựa trên thị trường ngách thể hình.

## Chúng Ta Đã Dừng Ở Đâu {#where-we-left-off}

Chúng ta đã chọn các phòng tập thể hình làm thị trường ngách và xác nhận cơ hội này. Giờ đây, chúng ta sẽ biến ý tưởng đó thành một nền tảng hoạt động thực tế.

## Lựa Chọn Hosting {#choosing-your-hosting}

Việc chọn hosting quan trọng hơn nhiều đối với một nền tảng ngách so với một trang web đơn lẻ. Bạn không chỉ lưu trữ một trang web—bạn đang lưu trữ một mạng lưới sẽ phát triển lên hàng chục hoặc hàng trăm trang web.

### Những Điều Cần Lưu Ý {#what-to-look-for}

- **Hỗ trợ WordPress Multisite**: Không phải tất cả các nhà cung cấp hosting đều xử lý multisite tốt.
- **SSL Wildcard**: Cực kỳ cần thiết cho các mạng lưới dựa trên tên miền con (subdomain).
- **Tài nguyên có khả năng mở rộng**: Bạn cần không gian để phát triển mà không cần phải di chuyển (migrate).
- **Tích hợp Ultimate Multisite**: Việc tự động ánh xạ tên miền và SSL sẽ tiết kiệm đáng kể công sức vận hành.

### Phương Pháp Khuyến Nghị {#recommended-approach}

Hãy chọn một nhà cung cấp hosting từ danh sách [Compatible Providers](/user-guide/host-integrations/closte). Các nhà cung cấp này đã được kiểm tra với Ultimate Multisite và cung cấp các tích hợp bạn cần cho việc ánh xạ tên miền và tự động hóa SSL.

Đối với FitSite, chúng ta sẽ sử dụng cấu hình tên miền con (subdomain). Điều này có nghĩa là các trang web của khách hàng ban đầu sẽ xuất hiện dưới dạng `tênstudio.fitsite.com` trước khi họ tùy chọn ánh xạ tên miền riêng của mình.

## Cài Đặt WordPress Multisite {#installing-wordpress-multisite}

Nếu bạn chưa có cài đặt WordPress Multisite:

1. Cài đặt WordPress trên nhà cung cấp hosting của bạn.
2. Làm theo hướng dẫn [How to Install WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite).
3. Chọn cấu hình **subdomain** khi được nhắc.

:::tip Tại sao là Subdomains?
Subdomains cung cấp cho mỗi trang web khách hàng một địa chỉ riêng biệt (`studio.fitsite.com`) thay vì một đường dẫn (`fitsite.com/studio`). Điều này chuyên nghiệp hơn cho khách hàng của bạn và tránh được các xung đột về permalink. Xem [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) để so sánh chi tiết.
:::

## Cài Đặt Ultimate Multisite {#installing-ultimate-multisite}

Hãy làm theo hướng dẫn [Installing Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) để:

1. Tải lên và kích hoạt plugin trên toàn mạng lưới.
2. Chạy [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard).

Trong quá trình sử dụng setup wizard, hãy luôn nhớ đến thị trường ngách FitSite:

- **Currency (Tiền tệ)**: Đặt theo loại tiền tệ mà khách hàng phòng tập thể hình của bạn sử dụng.
- **Company name (Tên công ty)**: "FitSite" (hoặc tên thương hiệu bạn chọn).
- **Company logo (Logo công ty)**: Tải lên logo thương hiệu của bạn — logo này sẽ xuất hiện trên hóa đơn và email.

## Cấu Hình Cho Ngách Thể Hình {#configuring-for-the-fitness-niche}

Sau khi cài đặt Ultimate Multisite, hãy thực hiện các lựa chọn cấu hình cụ thể cho ngách này:

### Cài Đặt Chung (General Settings) {#general-settings}

Truy cập **Ultimate Multisite > Settings** và cấu hình:

- **Site name**: FitSite
- **Default role**: Administrator — chủ sở hữu phòng tập thể hình cần quyền kiểm soát đầy đủ nội dung trang web của họ.
- **Registration**: Bật đăng ký người dùng để chủ sở hữu studio có thể tự đăng ký.

### Cấu Hình Email (Email Configuration) {#email-configuration}

Các email hệ thống của bạn phải nói ngôn ngữ của ngách này. Truy cập **Ultimate Multisite > Settings > Emails** và tùy chỉnh:

- Thay thế ngôn ngữ chung chung "trang web mới của bạn" bằng các thông điệp cụ thể về thể hình.
- Chủ đề chào mừng ví dụ: "Trang web phòng tập thể hình của bạn đã sẵn sàng"
- Nội dung chào mừng ví dụ: Đề cập đến studio, các lớp học và cách bắt đầu với trang web thể hình của họ.

Chúng ta sẽ tinh chỉnh những phần này hơn trong Bài 8 (Onboarding Khách Hàng), nhưng việc thiết lập tông giọng ngay từ bây giờ sẽ đảm bảo ngay cả những lần đăng ký thử nghiệm ban đầu cũng mang tính chuyên biệt cho ngách.

### Cấu Hình Tên Miền (Domain Configuration) {#domain-configuration}

Nếu bạn sử dụng nhà cung cấp hosting tương thích, hãy cấu hình ánh xạ tên miền ngay bây giờ:

1. Truy cập **Ultimate Multisite > Settings > Domain Mapping**.
2. Làm theo hướng dẫn tích hợp dành riêng cho host của bạn.
3. Kiểm tra xem các subsites mới có được cấp SSL tự động không.

Điều này đảm bảo rằng khi chúng ta bắt đầu tạo các mẫu (template) và trang web thử nghiệm trong bài học tiếp theo, mọi thứ đều hoạt động trơn tru từ đầu đến cuối.

## Mạng Lưới FitSite Cho Đến Hiện Tại {#the-fitsite-network-so-far}

Cuối bài học này, bạn đã có:

```
FitSite Network
├── WordPress Multisite (chế độ subdomain)
├── Ultimate Multisite (đã cài đặt và cấu hình)
├── Hosting với SSL wildcard
├── Ánh xạ tên miền đã được cấu hình
├── Mẫu email chuyên biệt theo ngách (ban đầu)
└── Sẵn sàng cho các mẫu trang web (bài học tiếp theo)
```

## Những Gì Chúng Ta Đã Xây Trong Bài Học Này {#what-we-built-this-lesson}

- **Một cài đặt WordPress Multisite** hoạt động ở chế độ subdomain.
- **Ultimate Multisite đã được cài đặt** và cấu hình với thương hiệu FitSite.
- **Hosting và SSL** được thiết lập cho một mạng lưới đang phát triển.
- **Ánh xạ tên miền** được cấu hình cho nhà cung cấp hosting của bạn.
- **Tông giọng email chuyên biệt theo ngách** được thiết lập ngay từ ngày đầu tiên.

---

**Tiếp theo:** [Bài 4: Xây Dựng Mẫu Trang Web Ngách](lesson-4-templates) — chúng ta sẽ tạo các mẫu trang web mà chủ sở hữu phòng tập thể hình thực sự muốn sử dụng.
