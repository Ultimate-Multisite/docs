---
title: 'Bài học 7: Cá nhân hóa nó'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Bài 7: Cá Nhân Hóa Nền Tảng

Khách hàng của bạn không bao giờ được cảm thấy như họ đang sử dụng "một plugin WordPress nào đó." Họ phải cảm thấy như họ đang sử dụng FitSite — một nền tảng được xây dựng dành riêng cho ngành của họ. Bài học này sẽ đề cập đến việc xây dựng thương hiệu (branding), gắn thương hiệu riêng (white-labeling), và giúp nền tảng của bạn mang lại cảm giác như một sản phẩm hoàn chỉnh.

## Chúng Ta Đã Dừng Ở Đâu {#where-we-left-off}

FitSite đã có một quy trình thanh toán hoạt động, giúp chủ phòng tập thể hình đi từ việc chọn gói dịch vụ đến việc có một trang web trực tiếp. Bây giờ, chúng ta sẽ làm cho toàn bộ trải nghiệm này trở nên liền mạch và mang thương hiệu của bạn.

## Tên Miền Nền Tảng Của Bạn {#your-platform-domain}

Nền tảng thương hiệu của bạn chính là tên miền. Đối với FitSite:

- **Tên miền chính**: `fitsite.com` (trang marketing và gốc mạng lưới của bạn)
- **Trang web khách hàng**: `studioname.fitsite.com` (tên miền phụ/subdomains)
- **Tên miền tùy chỉnh**: Khách hàng gói Growth và Pro có thể liên kết tên miền riêng của họ

### Thiết Lập Tên Miền Của Bạn {#setting-up-your-domain}

1. Đăng ký tên miền nền tảng của bạn
2. Trỏ tên miền này đến nhà cung cấp hosting của bạn
3. Cấu hình wildcard DNS (`*.fitsite.com`) cho các tên miền phụ của khách hàng
4. Đảm bảo SSL wildcard đang hoạt động

Xem [Cách Cấu Hình Ánh Xạ Tên Miền](/user-guide/domain-mapping/how-to-configure-domain-mapping) để biết hướng dẫn chi tiết.

## Gắn Thương Hiệu Riêng Trải Nghiệm Quản Trị (White-Labeling) {#white-labeling-the-admin-experience}

Khi chủ phòng tập thể hình đăng nhập vào Dashboard của họ, họ phải thấy thương hiệu của bạn, chứ không phải thương hiệu của WordPress hay Ultimate Multisite.

### Trang Đăng Nhập Tùy Chỉnh {#custom-login-page}

Tùy chỉnh trang đăng nhập của WordPress để hiển thị:

- Logo FitSite của bạn
- Hình ảnh nền phù hợp với ngành thể hình
- Màu sắc thương hiệu của bạn

### Branding Dashboard {#dashboard-branding}

Sử dụng addon [Admin Page Creator](/addons/admin-page-creator) hoặc CSS tùy chỉnh để:

- Thay thế logo WordPress bằng logo FitSite của bạn
- Tùy chỉnh bảng màu quản trị để phù hợp với thương hiệu của bạn
- Thêm một widget Dashboard tùy chỉnh với các liên kết nhanh và tài nguyên hỗ trợ chuyên biệt cho ngành thể hình

### Trang Quản Trị Tùy Chỉnh {#custom-admin-pages}

Hãy cân nhắc tạo các trang quản trị tùy chỉnh để hiển thị các hành động liên quan nhất đối với chủ phòng tập thể hình:

- "Chỉnh sửa Lịch Lớp Học Của Bạn"
- "Cập Nhật Hồ Sơ Huấn Luyện Viên"
- "Xem Trang Web Của Bạn"

Điều này giúp giảm đường cong học tập bằng cách đưa các hành động chuyên biệt, liên quan lên vị trí trung tâm thay vì giấu chúng trong menu tiêu chuẩn của WordPress.

## Xây Dựng Thương Hiệu Trong Truyền Thông {#branding-your-communications}

Mọi email, hóa đơn và thông báo đều phải củng cố thương hiệu của bạn.

### Email Hệ Thống {#system-emails}

Truy cập **Ultimate Multisite > Settings > Emails** và tùy chỉnh tất cả các email hệ thống:

- **Tên người gửi**: FitSite
- **Email người gửi**: hello@fitsite.com
- **Mẫu email**: Sử dụng màu sắc và logo thương hiệu của bạn
- **Ngôn ngữ**: Phù hợp với ngành thể hình xuyên suốt

Các email quan trọng cần tùy chỉnh:

| Email | Phiên bản chung | Phiên bản FitSite |
|-------|----------------|-----------------|
| Chào mừng | "Trang web mới của bạn đã sẵn sàng" | "Trang web phòng tập thể hình của bạn đã hoạt động" |
| Biên lai thanh toán | "Đã nhận thanh toán" | "Xác nhận thanh toán gói FitSite" |
| Thử nghiệm kết thúc | "Thời gian dùng thử của bạn sắp hết" | "Thời gian dùng thử FitSite của bạn kết thúc sau 3 ngày — hãy giữ trang web phòng tập của bạn hoạt động" |

### Hóa Đơn {#invoices}

Tùy chỉnh mẫu hóa đơn với:

- Logo và màu thương hiệu FitSite của bạn
- Thông tin doanh nghiệp của bạn
- Tên sản phẩm chuyên biệt cho ngành thể hình (không phải ID gói chung chung)

## Trang Web Công Khai (Customer-Facing Site) {#the-customer-facing-site}

Tên miền chính của bạn (`fitsite.com`) cần một trang marketing để bán nền tảng này. Điều này tách biệt với khu vực quản trị mạng lưới Ultimate Multisite — đây là bộ mặt công khai của doanh nghiệp bạn.

Các trang chính:

- **Trang chủ**: Trình bày giá trị cốt lõi cho các doanh nghiệp thể hình
- **Tính năng**: FitSite làm được gì, bằng ngôn ngữ của ngành thể hình
- **Giá cả**: Ba gói dịch vụ của bạn với bảng so sánh tính năng chuyên biệt
- **Ví dụ**: Trưng bày các trang web được xây dựng trên nền tảng
- **Đăng ký**: Liên kết đến biểu mẫu thanh toán của bạn

:::tip Trang Marketing của Bạn Có Thể Là Một Trang Mạng Lưới
Hãy tạo trang marketing của bạn như một trang web trong mạng lưới của riêng bạn. Điều này cho phép bạn quản lý nó từ cùng một Dashboard và thể hiện khả năng của chính nền tảng của bạn.
:::

## Tên Miền Tùy Chỉnh Cho Khách Hàng {#custom-domain-for-customers}

Đối với các khách hàng sử dụng gói bao gồm tên miền tùy chỉnh, hãy ghi lại quy trình này một cách rõ ràng:

1. Khách hàng đăng ký hoặc chuyển tên miền của họ đến một nhà đăng ký tên miền.
2. Khách hàng cập nhật DNS để trỏ đến nền tảng của bạn (cung cấp các bản ghi chính xác).
3. Ultimate Multisite sẽ xử lý việc ánh xạ tên miền và SSL.

Hãy tạo một bài viết hỗ trợ hoặc mục kiến thức chuyên biệt cho quy trình này, được viết dành cho chủ phòng tập thể hình không chuyên về kỹ thuật.

## Mạng Lưới FitSite Cho Đến Nay {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (chế độ tên miền phụ)
├── Ultimate Multisite (đã cấu hình + gắn thương hiệu)
├── Tên miền nền tảng (fitsite.com + SSL wildcard)
├── Mẫu Trang Web (Studio Essential, Gym Pro, Fitness Chain)
├── Sản phẩm (Starter, Growth, Pro + Order Bumps)
├── Quy trình thanh toán (chuyên biệt ngành, đã kiểm thử)
├── Branding
│   ├── Trang đăng nhập tùy chỉnh
│   ├── Dashboard quản trị có thương hiệu
│   ├── Email hệ thống chuyên biệt ngành
│   ├── Hóa đơn có thương hiệu
│   └── Trang marketing trên fitsite.com
└── Sẵn sàng cho quy trình onboarding (bài học tiếp theo)
```

## Những Gì Chúng Ta Đã Xây Trong Bài Học Này {#what-we-built-this-lesson}

- **Tên miền nền tảng và DNS** được cấu hình cho trải nghiệm mang thương hiệu
- **Admin được gắn thương hiệu riêng** với thương hiệu FitSite xuyên suốt
- **Truyền thông được tùy chỉnh** — email, hóa đơn và thông báo đều mang thương hiệu
- **Một trang marketing** bán FitSite cho chủ phòng tập thể hình
- **Tài liệu về tên miền tùy chỉnh** cho các khách hàng muốn tên miền riêng

---

**Tiếp theo:** [Bài 8: Onboarding Khách Hàng](lesson-8-onboarding) — chúng ta sẽ thiết kế trải nghiệm biến một người đăng ký mới thành một khách hàng tích cực và hài lòng.
