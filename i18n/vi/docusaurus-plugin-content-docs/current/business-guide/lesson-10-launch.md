---
title: 'Bài học 10: Ngày ra mắt'
sidebar_position: 11
_i18n_hash: 49ba467b8efba57e92cf072bcec53969
---
# Bài 10: Ngày Ra Mắt {#lesson-10-launch-day}

Mọi thứ đã được xây dựng xong. Trước khi mở cửa, bài học này sẽ hướng dẫn bạn qua danh sách kiểm tra trước khi ra mắt để đảm bảo không có gì bị lỗi, thiếu sót hay gây xấu hổ.

## Chúng Ta Đã Dừng Ở Đâu {#where-we-left-off}

FitSite đã được cấu hình đầy đủ các mẫu (templates), gói dịch vụ (plans), quy trình thanh toán (checkout), thương hiệu (branding), quy trình giới thiệu (onboarding) và giá cả (pricing). Giờ là lúc chúng ta xác minh mọi thứ hoạt động ổn định và chính thức ra mắt.

## Danh Sách Kiểm Tra Trước Khi Ra Mắt {#pre-launch-checklist}

Hãy đi qua từng mục. Tuyệt đối không bỏ qua bất kỳ mục nào.

### Cơ Sở Hạ Tầng Nền Tảng (Platform Infrastructure) {#platform-infrastructure}

- [ ] Hosting ổn định và hoạt động tốt khi chịu tải
- [ ] Wildcard SSL đã kích hoạt và tất cả các subdomain đều chạy qua HTTPS
- [ ] Ánh xạ tên miền (Domain mapping) hoạt động -- hãy thử tạo một trang web và ánh xạ một tên miền tùy chỉnh
- [ ] Sao lưu (Backups) đã được cấu hình và kiểm tra (hãy khôi phục ít nhất một lần để xác minh)
- [ ] Giám sát (Monitoring) đã được thiết lập -- bạn sẽ biết nếu nền tảng bị sập

### Mẫu (Templates) {#templates}

- [ ] Cả ba mẫu đều tải đúng trên các trang web mới
- [ ] Nội dung giữ chỗ (Placeholder content) hữu ích và không có lỗi chính tả
- [ ] Tất cả hình ảnh đều có giấy phép sử dụng hợp lệ (không có hình mờ của ảnh stock)
- [ ] Tính đáp ứng trên thiết bị di động (Mobile responsiveness) hoạt động trên mọi trang mẫu
- [ ] Tốc độ tải trang chấp nhận được (hãy kiểm tra bằng các công cụ như GTmetrix hoặc PageSpeed Insights)
- [ ] Không có liên kết bị hỏng hoặc tài sản (assets) bị thiếu trên bất kỳ mẫu nào

### Gói và Sản Phẩm (Plans and Products) {#plans-and-products}

- [ ] Cả ba gói đều đang hoạt động và hiển thị
- [ ] Mô tả gói chính xác và phù hợp với lĩnh vực cụ thể
- [ ] Giá cả chính xác (hàng tháng và hàng năm)
- [ ] Phí thiết lập (Setup fees) đã được cấu hình trên các gói phù hợp
- [ ] Thời gian dùng thử (Trial period) hoạt động trên gói Starter
- [ ] Các sản phẩm bán thêm (Order bumps) xuất hiện chính xác trong quá trình thanh toán
- [ ] Giới hạn của plugin và theme được áp dụng chính xác theo từng gói

### Quy Trình Thanh Toán (Checkout Flow) {#checkout-flow}

- [ ] Hoàn thành một lần đăng ký thử nghiệm đầy đủ trên mỗi gói (sử dụng chế độ thanh toán thử)
- [ ] Lựa chọn mẫu hiển thị các mẫu chính xác theo từng gói
- [ ] Thanh toán diễn ra thành công
- [ ] Khách hàng nhận được email chào mừng sau khi đăng ký
- [ ] Trang web mới được tạo với mẫu chính xác
- [ ] Khách hàng có thể đăng nhập vào trang web mới của họ ngay lập tức
- [ ] Mã giảm giá hoạt động chính xác

### Thương Hiệu (Branding) {#branding}

- [ ] Trang đăng nhập hiển thị thương hiệu FitSite
- [ ] Bảng điều khiển quản trị (Admin dashboard) hiển thị thương hiệu FitSite
- [ ] Tất cả email hệ thống sử dụng thương hiệu FitSite và ngôn ngữ chuyên biệt về thể hình
- [ ] Hóa đơn hiển thị chính xác với thông tin kinh doanh của bạn
- [ ] Trang marketing đã hoạt động và liên kết đến biểu mẫu thanh toán

### Quy Trình Giới Thiệu (Onboarding) {#onboarding}

- [ ] Widget Quick Start xuất hiện trên bảng điều khiển của khách hàng mới
- [ ] Tất cả liên kết Quick Start đều trỏ đến các trang chính xác
- [ ] Chuỗi email chào mừng đã được cấu hình và kiểm tra
- [ ] Các bài viết trong Knowledge base đã được xuất bản và dễ truy cập
- [ ] Trang tài khoản hiển thị thông tin gói và tùy chọn nâng cấp chính xác

### Pháp Lý và Kinh Doanh (Legal and Business) {#legal-and-business}

- [ ] Điều khoản dịch vụ (Terms of service) đã được xuất bản và liên kết từ trang thanh toán
- [ ] Chính sách quyền riêng tư (Privacy policy) đã được xuất bản và dễ truy cập
- [ ] Chính sách hoàn tiền (Refund policy) đã được xác định và ghi lại
- [ ] Thực thể kinh doanh đã được thiết lập để nhận thanh toán
- [ ] Cổng thanh toán (Payment gateway) đang ở chế độ trực tiếp (live mode) (không phải chế độ thử)
- [ ] Cấu hình thuế chính xác cho khu vực của bạn

## Ra Mắt Thử (Soft Launch) vs. Ra Mắt Chính Thức (Hard Launch) {#soft-launch-vs-hard-launch}

Hãy cân nhắc một chiến lược ra mắt hai giai đoạn:

### Giai Đoạn 1: Ra Mắt Thử (Soft Launch) {#phase-1-soft-launch}

Mời 5-10 chủ studio thể hình đăng ký trước khi ra mắt công chúng. Đây là những khách hàng beta của bạn. Hãy đề nghị họ một mức giảm giá đáng kể (giảm 50% trọn đời, hoặc miễn phí 3 tháng) để đổi lấy:

- Phản hồi trung thực về trải nghiệm đăng ký và onboarding
- Sự cho phép sử dụng trang web của họ làm ví dụ minh họa
- Báo cáo bất kỳ lỗi hoặc vấn đề nào họ gặp phải

Điều này giúp bạn nhận được phản hồi thực tế từ khách hàng và các trang web đang hoạt động để trưng bày trước khi mở cửa cho công chúng.

### Giai Đoạn 2: Ra Mắt Chính Thức (Public Launch) {#phase-2-public-launch}

Sau khi đã tích hợp phản hồi từ giai đoạn soft launch:

- Chuyển cổng thanh toán sang chế độ trực tiếp (live mode)
- Xuất bản trang marketing của bạn
- Bắt đầu thu hút khách hàng (Bài 11)
- Thông báo trên các kênh ngành thể hình liên quan

## Hành Động Ngày Ra Mắt {#launch-day-actions}

Vào ngày bạn công khai:

1. **Chuyển sang thanh toán trực tiếp** -- vô hiệu hóa chế độ thử trên cổng thanh toán của bạn
2. **Kiểm tra lại lần nữa** -- thực hiện một lần đăng ký thử nghiệm đầy đủ với khoản thanh toán thật (sau đó hoàn tiền cho bản thân)
3. **Giám sát chặt chẽ** -- theo dõi các lỗi, đăng ký thất bại hoặc sự cố thanh toán
4. **Sẵn sàng hỗ trợ** -- những khách hàng thực đầu tiên của bạn có thể cần giúp đỡ, và phản hồi nhanh sẽ xây dựng lòng tin
5. **Ăn mừng ngắn gọn** -- sau đó quay lại làm việc

## Những Điều Có Thể Sai {#what-can-go-wrong}

Hãy chuẩn bị cho:

- **Sự cố cổng thanh toán**: Chuẩn bị sẵn liên hệ hỗ trợ của nhà cung cấp cổng thanh toán của bạn
- **Vấn đề chứng chỉ SSL**: Biết cách kiểm tra và gia hạn chứng chỉ
- **Lỗi gửi email**: Kiểm tra xem email có thực sự đến được (kiểm tra thư mục spam)
- **Hiệu suất khi chịu tải**: Nếu bạn có đột biến lưu lượng truy cập, hãy biết cách mở rộng hosting của mình
- **Sự nhầm lẫn của khách hàng**: Chuẩn bị sẵn knowledge base và các kênh hỗ trợ

## Mạng Lưới FitSite Cho Đến Nay {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode) ✓
├── Ultimate Multisite (configured + branded) ✓
├── Platform Domain (fitsite.com + wildcard SSL) ✓
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain) ✓
├── Products (Starter, Growth, Pro + Order Bumps + Discounts) ✓
├── Checkout Flow (tested end-to-end) ✓
├── Branding (complete) ✓
├── Customer Onboarding (Quick Start, emails, help resources) ✓
├── Pricing Strategy (annual, trials, setup fees, discounts) ✓
├── Pre-Launch Checklist (verified) ✓
├── Soft Launch (beta customers onboarded) ✓
└── LIVE ✓
```

## Những Gì Chúng Ta Đã Xây Trong Bài Học Này {#what-we-built-this-lesson}

- **Một danh sách kiểm tra trước khi ra mắt toàn diện** bao gồm cơ sở hạ tầng, nội dung, thanh toán và pháp lý
- **Chiến lược soft launch** để nhận phản hồi thực tế trước khi công khai
- **Các quy trình ngày ra mắt** để hoạt động với sự tự tin
- **Kế hoạch dự phòng** cho các sự cố thường gặp khi ra mắt

---

**Tiếp theo:** [Bài 11: Tìm Khách Hàng](lesson-11-customers) -- giờ FitSite đã hoạt động, làm thế nào để bạn thu hút các chủ studio thể hình đăng ký?
