---
title: 'Bài học 9: Định giá để có lợi nhuận'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Bài 9: Định giá để Tăng lợi nhuận

Ở Bài 5, chúng ta đã thiết lập mức giá ban đầu cho các gói FitSite. Bây giờ, chúng ta sẽ tinh chỉnh chiến lược định giá bằng các kỹ thuật giúp tăng doanh thu, khuyến khích nâng cấp và giảm tỷ lệ khách hàng rời bỏ (churn).

## Chúng ta đã dừng ở đâu {#where-we-left-off}

FitSite đã có các gói dịch vụ, mẫu giao diện, quy trình thanh toán, thương hiệu và quy trình giới thiệu khách hàng (onboarding). Mức giá ban đầu là $49/$99/$199 mỗi tháng. Giờ đây, chúng ta sẽ tối ưu hóa mức giá đó để nó mang lại hiệu quả cao hơn.

## Nguyên tắc Định giá cho các Nền tảng Ngách {#pricing-principles-for-niche-platforms}

### Định giá theo Giá trị, không phải Chi phí {#price-on-value-not-cost}

Chi phí lưu trữ (hosting) của bạn có thể chỉ từ $5-$15 cho mỗi trang web của khách hàng. Điều đó không có nghĩa là bạn phải định giá sản phẩm của mình là $20. Bạn không bán dịch vụ hosting. Bạn đang bán:

- Một trang web thể hình chuyên nghiệp, vốn có thể tốn $2.000-$5.000 để xây dựng theo yêu cầu
- Việc bảo trì, cập nhật và bảo mật liên tục mà họ không cần phải lo lắng
- Các tính năng chuyên biệt cho ngành nghề mà các công cụ xây dựng chung chung không có
- Uy tín của một nền tảng được xây dựng dành riêng cho ngành của họ

Hãy định giá dựa trên giá trị bạn mang lại, chứ không phải chi phí để cung cấp nó.

### Neo giá so với các Phương án Thay thế {#anchor-to-alternatives}

Khi một chủ phòng tập thể hình đánh giá FitSite, họ sẽ so sánh nó với:

- **Thuê nhà phát triển web**: $2.000-$5.000 ban đầu + $50-$100/tháng bảo trì
- **Wix/Squarespace**: $16-$45/tháng nhưng không có tính năng chuyên biệt cho thể hình, họ phải tự xây dựng
- **Không làm gì cả**: Mất các thành viên vì họ không tìm thấy bạn trực tuyến

Với mức giá $49-$199/tháng, FitSite rẻ hơn thuê nhà phát triển, mạnh mẽ hơn các công cụ xây dựng chung chung, và tốt hơn rất nhiều so với việc không có trang web.

## Triển khai các Biến thể Giá {#implementing-price-variations}

Định giá hàng năm khuyến khích sự cam kết và giảm tỷ lệ khách hàng rời bỏ. Hãy truy cập tab **Price Variations** (Biến thể Giá) của từng gói và thêm các tùy chọn hàng năm:

| Plan | Monthly | Annual (per month) | Annual Total | Savings |
|------|---------|-------------------|--------------|---------|
| Starter | $49/mo | $39/mo | $468/year | 20% off |
| Growth | $99/mo | $79/mo | $948/year | 20% off |
| Pro | $199/mo | $159/mo | $1,908/year | 20% off |

Thêm trường **Period Selection** (Chọn Kỳ hạn) vào form thanh toán của bạn để khách hàng có thể chuyển đổi giữa thanh toán hàng tháng và hàng năm. Xem [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

### Tại sao Định giá Hàng năm lại Hiệu quả {#why-annual-pricing-works}

- **Đối với bạn**: Tiền mặt trả trước, giảm tỷ lệ khách hàng rời bỏ (khách hàng trả tiền hàng năm ít có khả năng hủy giữa kỳ)
- **Đối với họ**: Tiết kiệm thực tế, khả năng dự đoán ngân sách

## Phí Thiết lập {#setup-fees}

Hãy cân nhắc một khoản phí thiết lập một lần cho các gói bao gồm cấu hình trực tiếp:

- **Starter**: Không phí thiết lập (loại bỏ rào cản gia nhập)
- **Growth**: Phí thiết lập $99 (bao gồm cấu hình tên miền tùy chỉnh và tư vấn ban đầu)
- **Pro**: Phí thiết lập $299 (bao gồm thiết lập đa địa điểm và cuộc gọi onboarding)

Hãy cấu hình các phí thiết lập trong phần định giá của từng gói. Xem [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product) để biết chi tiết.

## Thời gian Dùng thử {#trial-periods}

Việc cung cấp thời gian dùng thử giúp giảm ma sát khi đăng ký nhưng cũng mang lại rủi ro không chuyển đổi. Đối với FitSite:

- **Dùng thử miễn phí 7 ngày** chỉ áp dụng cho gói Starter
- Không dùng thử cho Growth và Pro (những khách hàng này cam kết hơn và kỳ vọng phải trả tiền)

Hãy cấu hình thời gian dùng thử trong phần định giá của gói Starter bằng cách bật toggle **Offer Trial** (Cung cấp Dùng thử) và đặt thời lượng là 7 ngày.

### Cách Biến Thời gian Dùng thử thành Khách hàng Trả phí {#making-trials-convert}

Thời gian dùng thử chỉ hiệu quả nếu khách hàng cảm nhận được giá trị trong suốt thời gian đó. Chuỗi onboarding của bạn (Bài 8) rất quan trọng ở đây — các email chào mừng cần được lên lịch để thúc đẩy sự tương tác trong vòng 7 ngày.

## Mã Giảm giá {#discount-codes}

Hãy tạo các mã giảm giá chiến lược cho các mục đích cụ thể:

- **FITLAUNCH** — Giảm 30% trong 3 tháng đầu (cho chương trình khuyến mãi ra mắt)
- **ANNUAL20** — Giảm 20% cho các gói hàng năm (nếu chưa được giảm giá)
- **REFERRAL** — Miễn phí 1 tháng (cho giới thiệu của khách hàng)

Truy cập **Ultimate Multisite > Discount Codes** để tạo chúng. Xem [Creating Discount Codes](/user-guide/configuration/creating-discount-codes) để xem hướng dẫn đầy đủ.

:::tip Không Giảm giá Mặc định
Giảm giá nên là công cụ chiến lược, không phải là vật cố định. Nếu mọi người đều được giảm giá, đó không còn là giảm giá nữa — đó là mức giá thực của bạn. Hãy sử dụng chúng cho các chiến dịch, giới thiệu và khuyến mãi có thời hạn cụ thể.
:::

## Xử lý Thuế {#tax-handling}

Nếu bạn hoạt động tại một khu vực yêu cầu thu thuế:

1. Cấu hình tỷ lệ thuế trong **Ultimate Multisite > Settings > Taxes**
2. Áp dụng các danh mục thuế cho các gói của bạn
3. Đảm bảo hóa đơn hiển thị thuế chính xác

Xem [Tax Handling](/user-guide/payment-gateways/tax-handling) để biết cấu hình chi tiết. Nếu bạn phục vụ khách hàng quốc tế, hãy cân nhắc [VAT addon](/addons/vat) để tuân thủ quy định của EU.

## Xem xét lại Định giá của bạn {#reviewing-your-pricing}

Sau khi ra mắt, hãy xem xét lại định giá hàng quý. Hãy xem xét:

- **Tỷ lệ chuyển đổi theo gói**: Nếu gói Starter chuyển đổi tốt nhưng Growth thì không, có thể khoảng cách giữa chúng quá lớn
- **Tỷ lệ nâng cấp**: Nếu ít khách hàng nâng cấp từ Starter lên Growth, có thể gói Growth chưa cung cấp đủ giá trị bổ sung
- **Tỷ lệ khách hàng rời bỏ theo gói**: Nếu khách hàng trả tiền hàng năm ít rời bỏ hơn, hãy đẩy mạnh định giá hàng năm hơn
- **Giá của đối thủ cạnh tranh**: Các giải pháp thay thế đang tính phí bao nhiêu? Bạn đã định vị đúng chưa?

## Mạng lưới FitSite cho đến nay {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (chế độ subdomain)
├── Ultimate Multisite (đã cấu hình + thương hiệu hóa)
├── Platform Domain (fitsite.com + SSL wildcard)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo hoặc $468/yr) + dùng thử 7 ngày
│   ├── FitSite Growth ($99/mo hoặc $948/yr) + phí thiết lập $99
│   ├── FitSite Pro ($199/mo hoặc $1,908/yr) + phí thiết lập $299
│   └── Order Bumps + Mã Giảm giá
├── Checkout Flow (với toggle chọn kỳ hạn)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding (Quick Start, emails, help resources)
├── Pricing Strategy
│   ├── Giảm giá hàng năm (giảm 20%)
│   ├── Phí thiết lập chiến lược
│   ├── Dùng thử 7 ngày trên Starter
│   ├── Mã giảm giá cho chiến dịch và giới thiệu
│   └── Cấu hình thuế
└── Sẵn sàng ra mắt (bài học tiếp theo)
```

## Những gì chúng ta đã xây dựng trong Bài này {#what-we-built-this-lesson}

- **Định giá hàng năm** với chiết khấu 20% để khuyến khích cam kết
- **Phí thiết lập** ở các cấp cao hơn để bù đắp công sức onboarding
- **Thời gian dùng thử** ở gói cơ bản để giảm ma sát khi đăng ký
- **Mã giảm giá chiến lược** cho ra mắt, giới thiệu và chiến dịch
- **Cấu hình thuế** cho việc thanh toán tuân thủ
- **Khung xem xét định giá** để tối ưu hóa liên tục

---

**Tiếp theo:** [Bài 10: Ngày Ra mắt](lesson-10-launch) — danh sách kiểm tra trước khi ra mắt và đưa sản phẩm vào hoạt động.
