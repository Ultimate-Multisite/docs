---
title: 'Bài học 8: Tiếp nhận khách hàng'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Bài 8: Quy trình Hội nhập Khách hàng (Customer Onboarding)

Việc giúp khách hàng đăng ký chỉ là một nửa công việc. Nếu họ đăng nhập, cảm thấy choáng ngợp và không bao giờ quay lại, bạn đã mất họ rồi. Bài học này sẽ thiết kế trải nghiệm giúp biến một lượt đăng ký mới thành một khách hàng tích cực và gắn bó.

## Chúng Ta Đã Dừng Ở Đâu {#where-we-left-off}

FitSite đã được gắn thương hiệu hoàn chỉnh cùng với quy trình thanh toán hoạt động. Bây giờ chúng ta sẽ tập trung vào những gì xảy ra sau khi chủ phòng tập thể hình hoàn tất đăng ký và lần đầu tiên truy cập vào trang web mới của họ.

## Tại Sao Quy Trình Hội Nhập Lại Quan Trọng {#why-onboarding-matters}

30 phút đầu tiên sau khi đăng ký sẽ quyết định liệu khách hàng có ở lại hay rời đi. Một chủ phòng tập thể hình:

- Đăng nhập và thấy một trang web đã trông giống như một trang web thể hình → sẽ ở lại
- Biết chính xác phải làm gì tiếp theo → sẽ ở lại
- Cảm thấy lạc lõng trong một dashboard WordPress chung chung → sẽ rời đi

Các mẫu (template) ngách của bạn (Bài 4) đã xử lý điểm đầu tiên. Bài học này sẽ xử lý điểm thứ hai.

## Trải Nghiệm Đăng Nhập Lần Đầu {#the-first-login-experience}

### Widget Dashboard Chào Mừng {#welcome-dashboard-widget}

Tạo một widget dashboard tùy chỉnh để chào đón khách hàng mới và hướng dẫn họ các bước thiết lập. Widget này nên xuất hiện nổi bật khi họ đăng nhập lần đầu.

**Khởi động nhanh FitSite:**

1. **Thêm tên và logo studio của bạn** -- Liên kết đến Customizer hoặc cài đặt Site Identity
2. **Cập nhật lịch lớp học của bạn** -- Liên kết trực tiếp đến trình chỉnh sửa trang Classes
3. **Thêm huấn luyện viên của bạn** -- Liên kết đến trình chỉnh sửa trang Trainers
4. **Thiết lập thông tin liên hệ** -- Liên kết đến trình chỉnh sửa trang Contact
5. **Xem trước trang web của bạn** -- Liên kết đến giao diện người dùng (frontend)

Mỗi bước đều liên kết trực tiếp đến trang hoặc cài đặt liên quan. Không cần phải tìm kiếm qua các menu phức tạp.

### Đơn Giản Hóa Dashboard {#simplify-the-dashboard}

Khách hàng mới không cần phải thấy mọi mục menu của WordPress. Hãy cân nhắc:

- Ẩn các mục menu không liên quan đến việc quản lý trang web thể hình (ví dụ: Comments nếu không sử dụng)
- Sắp xếp lại menu để đặt các mục được sử dụng nhiều nhất lên đầu
- Thêm các nhãn menu tùy chỉnh có ý nghĩa với ngách của bạn ("Studio của bạn" thay vì "Appearance")

Addon [Plugin & Theme Manager](/addons/plugin-and-theme-manager) có thể giúp kiểm soát những gì khách hàng nhìn thấy.

## Chuỗi Email Chào Mừng {#welcome-email-sequence}

Một email chào mừng duy nhất là không đủ. Hãy thiết lập một chuỗi email hướng dẫn khách hàng trong tuần đầu tiên của họ:

### Email 1: Chào mừng (Ngay sau khi đăng ký) {#email-1-welcome-immediately-after-signup}

- Chủ đề: "Chào mừng đến với FitSite -- trang web studio của bạn đã hoạt động"
- Nội dung: Liên kết đăng nhập, các bước khởi động nhanh, liên kết đến tài nguyên hỗ trợ
- Giọng văn: Hào hứng, khuyến khích, chuyên biệt về thể hình

### Email 2: Những Thành Công Nhỏ (Ngày 1) {#email-2-quick-wins-day-1}

- Chủ đề: "3 việc cần làm đầu tiên trên FitSite của bạn"
- Nội dung: Thêm logo của bạn, cập nhật hình ảnh hero trên trang chủ, thêm lịch lớp học
- Bao gồm ảnh chụp màn hình chỉ rõ nơi cần nhấp chuột

### Email 3: Cá Nhân Hóa (Ngày 3) {#email-3-make-it-yours-day-3}

- Chủ đề: "Làm nổi bật trang web thể hình của bạn"
- Nội dung: Tùy chỉnh màu sắc, thêm ảnh huấn luyện viên, viết câu chuyện về studio của bạn
- Liên kết đến các ví dụ về các trang web thể hình tuyệt vời trên nền tảng

### Email 4: Chính Thức Ra Mắt (Ngày 7) {#email-4-go-live-day-7}

- Chủ đề: "Sẵn sàng chia sẻ FitSite của bạn với thế giới chưa?"
- Nội dung: Danh sách kiểm tra những gì cần xác minh trước khi chia sẻ, cách kết nối tên miền tùy chỉnh (nếu dùng Growth/Pro), mẹo chia sẻ mạng xã hội

:::tip Tự động hóa Email
Sử dụng [Webhooks](/user-guide/integrations/webhooks) hoặc [Zapier](/user-guide/integrations/zapier) để kích hoạt các email này thông qua nền tảng tiếp thị qua email của bạn. Điều này giúp bạn kiểm soát thời gian tốt hơn và cho phép bạn theo dõi mức độ tương tác.
:::

## Tài Nguyên Hỗ Trợ {#help-resources}

Tạo nội dung hỗ trợ chuyên biệt cho ngách, trả lời những câu hỏi mà chủ phòng tập thể hình thực sự quan tâm:

### Bài Viết Knowledge Base {#knowledge-base-articles}

- "Cách cập nhật lịch lớp học của bạn"
- "Thêm và chỉnh sửa hồ sơ huấn luyện viên"
- "Thay đổi logo và màu sắc của studio"
- "Kết nối tên miền riêng của bạn" (dành cho khách hàng Growth/Pro)
- "Thêm widget đặt lịch vào trang web của bạn"

Hãy viết những bài này cho người dùng không chuyên về kỹ thuật. Sử dụng ảnh chụp màn hình. Tránh dùng biệt ngữ WordPress.

### Video Hướng Dẫn {#video-walkthroughs}

Các bản ghi màn hình ngắn (2-3 phút) thể hiện:

- Đăng nhập lần đầu và định hướng
- Chỉnh sửa trang chủ
- Cập nhật lịch lớp học
- Thêm huấn luyện viên mới

Những video này không cần phải là sản phẩm trau chuốt. Điều quan trọng là chúng phải rõ ràng, hữu ích và chuyên biệt cho ngách.

## Trang Tài Khoản (The Account Page) {#the-account-page}

Ultimate Multisite bao gồm một [Trang Tài Khoản](/user-guide/client-management/account-page) dành cho khách hàng, nơi họ quản lý gói đăng ký của mình. Hãy tùy chỉnh trang này để:

- Hiển thị gói FitSite hiện tại của họ
- Hiển thị các tùy chọn nâng cấp kèm theo lợi ích cụ thể cho ngành thể hình
- Cung cấp lịch sử thanh toán và tải xuống hóa đơn
- Liên kết đến các tài nguyên hỗ trợ

## Đo Lường Thành Công Hội Nhập {#measuring-onboarding-success}

Theo dõi các chỉ số này để biết liệu quy trình hội nhập của bạn có hiệu quả không:

- **Tỷ lệ kích hoạt (Activation rate)**: Bao nhiêu phần trăm người đăng ký thực sự tùy chỉnh trang web của họ trong tuần đầu tiên?
- **Số lần đăng nhập trong tuần đầu**: Khách hàng mới đăng nhập bao nhiêu lần trong tuần đầu tiên?
- **Ticket hỗ trợ từ khách hàng mới**: Số lượng lớn có nghĩa là quy trình hội nhập của bạn còn lỗ hổng
- **Tỷ lệ chuyển đổi từ dùng thử sang trả phí (Trial-to-paid conversion)**: Nếu bạn cung cấp bản dùng thử, bao nhiêu phần trăm chuyển đổi?

## Tổng Quan Về FitSite Network Cho Đến Nay {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding
│   ├── Quick Start dashboard widget
│   ├── Simplified dashboard for fitness site management
│   ├── 4-email welcome sequence
│   ├── Niche-specific knowledge base
│   ├── Video walkthroughs
│   └── Customized account page
└── Ready for pricing strategy (next lesson)
```

## Những Gì Chúng Ta Đã Xây Dựng Trong Bài Học Này {#what-we-built-this-lesson}

- **Trải nghiệm đăng nhập lần đầu có hướng dẫn** với widget Quick Start
- **Dashboard đơn giản hóa** tập trung vào các tác vụ quản lý trang web thể hình
- **Chuỗi email chào mừng** hướng dẫn khách hàng trong tuần đầu tiên
- **Tài nguyên hỗ trợ chuyên biệt theo ngách** được viết cho chủ phòng tập thể hình không chuyên về kỹ thuật
- **Các chỉ số hội nhập** để theo dõi và cải thiện trải nghiệm

---

**Tiếp theo:** [Bài 9: Định giá để Tăng trưởng Lợi nhuận](lesson-9-pricing) -- chúng ta sẽ tinh chỉnh chiến lược định giá để tối đa hóa doanh thu và giảm thiểu tỷ lệ khách hàng rời bỏ.
