---
title: 'Bài học 6: Trải nghiệm đăng ký'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Bài 6: Trải nghiệm Đăng ký

Quy trình thanh toán chính là nơi chúng ta biến sự quan tâm thành doanh thu. Một quy trình đăng ký khó hiểu hoặc chung chung sẽ khiến khách hàng bỏ đi. Ngược lại, một quy trình được thiết kế riêng cho ngành nghề của họ, sử dụng ngôn ngữ của họ và cảm thấy dễ dàng sẽ giúp bạn chuyển đổi họ thành khách hàng.

## Chúng ta đã dừng ở đâu {#where-we-left-off}

FitSite đã có các mẫu (templates) và gói dịch vụ (plans) được cấu hình. Bây giờ, chúng ta sẽ xây dựng trải nghiệm đăng ký và thanh toán để biến các chủ studio thể hình thành những khách hàng trả phí.

## Hiểu về Quy trình Đăng ký {#understanding-the-registration-flow}

Các form thanh toán của Ultimate Multisite là các form đa bước (multi-step forms) có thể tùy chỉnh hoàn toàn. Đối với FitSite, chúng ta cần một quy trình:

1. Cảm giác như được thiết kế riêng cho các doanh nghiệp thể hình.
2. Chỉ thu thập những thông tin thực sự cần thiết.
3. Giúp khách hàng đến được một trang web hoạt động nhanh nhất có thể.

Xem [Quy trình Đăng ký](/user-guide/configuration/the-registration-flow) để biết tài liệu kỹ thuật đầy đủ.

## Thiết kế Thanh toán cho FitSite {#designing-the-fitsite-checkout}

Truy cập **Ultimate Multisite > Checkout Forms** và tạo một form mới.

### Bước 1: Lựa chọn Gói dịch vụ (Plan Selection) {#step-1-plan-selection}

Điều đầu tiên một chủ studio thể hình nhìn thấy phải là các gói dịch vụ, được trình bày bằng ngôn ngữ mà họ hiểu.

- Thêm trường **Pricing Table** (Bảng giá)
- Cấu hình để hiển thị cả ba gói dịch vụ FitSite
- Các mô tả gói dịch vụ bạn đã viết ở Bài 5 sẽ xuất hiện ở đây — hãy đảm bảo chúng nói về nhu cầu kinh doanh thể hình, chứ không phải các tính năng kỹ thuật.

:::tip Ngôn ngữ chuyên ngành là quan trọng
"1 GB dung lượng lưu trữ" không có ý nghĩa gì với chủ phòng gym. "Mọi thứ bạn cần cho một trang web studio chuyên nghiệp" thì có ý nghĩa lớn. Hãy viết mô tả gói dịch vụ bằng ngôn ngữ của khách hàng bạn.
:::

### Bước 2: Lựa chọn Mẫu (Template Selection) {#step-2-template-selection}

Sau khi chọn gói dịch vụ, khách hàng sẽ chọn mẫu khởi đầu của họ.

- Thêm trường **Template Selection** (Lựa chọn Mẫu)
- Các mẫu có sẵn sẽ được lọc dựa trên gói dịch vụ mà họ đã chọn (được cấu hình ở Bài 5)
- Mỗi mẫu nên có một hình ảnh xem trước (preview image) hiển thị thiết kế chuyên biệt cho ngành thể hình.

### Bước 3: Tạo Tài khoản (Account Creation) {#step-3-account-creation}

Giữ phần này thật tối giản. Chỉ thu thập:

- Địa chỉ email
- Mật khẩu
- Tên studio/doanh nghiệp (thông tin này sẽ trở thành tên trang web của họ)

Đừng yêu cầu những thông tin bạn không cần ở bước đăng ký. Mỗi trường thông tin thừa đều làm giảm tỷ lệ chuyển đổi.

### Bước 4: Thiết lập Trang web (Site Setup) {#step-4-site-setup}

- **Site title** (Tiêu đề trang web): Tự động điền từ tên studio đã nhập ở Bước 3.
- **Site URL** (Địa chỉ URL trang web): Tự động tạo từ tên studio (ví dụ: `ironworks.fitsite.com`).

### Bước 5: Thanh toán (Payment) {#step-5-payment}

- Thêm trường **Payment** (Thanh toán)
- Cấu hình cổng thanh toán của bạn ([Stripe](/user-guide/payment-gateways/stripe) được khuyến nghị cho việc thanh toán theo gói đăng ký)
- Nếu bạn đã tạo các sản phẩm bổ sung (order bumps) ở Bài 5, hãy thêm trường **Order Bump** trước bước thanh toán.

### Bước 6: Xác nhận (Confirmation) {#step-6-confirmation}

- Tùy chỉnh thông báo xác nhận bằng ngôn ngữ chuyên ngành thể hình.
- Ví dụ: "Trang web studio thể hình của bạn đang được tạo. Bạn sẽ được chuyển hướng đến trang web mới trong vài giây."

## Thêm Công tắc Chọn Kỳ hạn (Period Selection Toggle) {#adding-a-period-selection-toggle}

Nếu bạn đã thiết lập các biến thể giá trong các gói dịch vụ của mình (hàng tháng so với hàng năm), hãy thêm trường **Period Selection** vào form thanh toán để khách hàng có thể chuyển đổi giữa các kỳ thanh toán. Xem [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) để biết hướng dẫn.

## Cấu hình Thanh toán {#configuring-payment}

Nếu bạn chưa thiết lập cổng thanh toán nào:

1. Truy cập **Ultimate Multisite > Settings > Payment Gateways**
2. Làm theo [hướng dẫn thiết lập Stripe](/user-guide/payment-gateways/stripe) hoặc cổng thanh toán ưa thích của bạn.
3. Thực hiện một quy trình thanh toán hoàn chỉnh bằng chế độ thử nghiệm (test payment).

Xem [Getting Paid](/user-guide/payment-gateways/getting-paid) để biết chi tiết về cách thanh toán được chuyển vào tài khoản của bạn.

## Kiểm tra Quy trình (Testing the Flow) {#testing-the-flow}

Trước khi chuyển sang bước tiếp theo, hãy hoàn thành một lần đăng ký thử nghiệm đầy đủ:

1. Mở form thanh toán trong cửa sổ trình duyệt ẩn danh (incognito/private browser window).
2. Chọn một gói dịch vụ.
3. Chọn một mẫu.
4. Tạo tài khoản.
5. Hoàn tất thanh toán (sử dụng chế độ thử nghiệm).
6. Xác minh rằng trang web đã được tạo với mẫu chính xác.

Kiểm tra các mục sau:

- [ ] Mô tả gói dịch vụ rõ ràng và chuyên biệt theo ngành nghề.
- [ ] Xem trước mẫu hiển thị các thiết kế phù hợp với ngành thể hình.
- [ ] Địa chỉ URL trang web được tạo chính xác từ tên studio.
- [ ] Thanh toán được xử lý thành công.
- [ ] Khách hàng được chuyển đến một trang web hoạt động với mẫu đã chọn.
- [ ] Email xác nhận sử dụng ngôn ngữ chuyên ngành thể hình.

## Mạng lưới FitSite cho đến nay {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (chế độ subdomain)
├── Ultimate Multisite (đã cấu hình)
├── Hosting với SSL wildcard + ánh xạ tên miền
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Lựa chọn gói dịch vụ với mô tả chuyên ngành
│   ├── Lựa chọn mẫu với bản xem trước thể hình
│   ├── Tạo tài khoản tối giản
│   ├── Thanh toán qua Stripe
│   └── Xác nhận chuyên ngành thể hình
└── Sẵn sàng để xây dựng thương hiệu (bài học tiếp theo)
```

## Những gì chúng ta đã xây dựng trong Bài này {#what-we-built-this-lesson}

- **Một form thanh toán đa bước** được thiết kế riêng cho chủ studio thể hình.
- **Ngôn ngữ chuyên ngành** xuyên suốt quy trình đăng ký.
- **Giảm thiểu ma sát** — chỉ các trường thiết yếu, đường dẫn nhanh đến trang web hoạt động.
- **Tích hợp thanh toán** với xác minh thử nghiệm.
- **Một quy trình end-to-end đã được kiểm tra** từ chọn gói dịch vụ đến trang web hoạt động.

---

**Tiếp theo:** [Bài 7: Cá nhân hóa thương hiệu](lesson-7-branding) — chúng ta sẽ gỡ bỏ thương hiệu nền tảng và thiết lập FitSite như một thương hiệu độc lập.
