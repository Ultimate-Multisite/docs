---
title: 'Bài học 12: Vận hành doanh nghiệp'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Bài học 12: Vận hành Doanh nghiệp

Một nền tảng không phải là một dự án bạn hoàn thành — nó là một doanh nghiệp bạn phải vận hành. Bài học này sẽ đề cập đến các hoạt động hàng ngày khi quản lý FitSite: hỗ trợ khách hàng, thanh toán, bảo trì, và giữ cho khách hàng hài lòng.

## Chúng ta đã dừng ở đâu {#where-we-left-off}

FitSite đã hoạt động và khách hàng đang đăng ký. Giờ đây, bạn cần vận hành hoạt động này một cách bền vững.

## Vận hành Hàng ngày {#daily-operations}

### Giám sát (Monitoring) {#monitoring}

Hãy kiểm tra những mục này hàng ngày (hoặc thiết lập cảnh báo):

- **Uptime**: Nền tảng có truy cập được không? Hãy sử dụng dịch vụ giám sát uptime.
- **Khách hàng đăng ký mới**: Hôm nay có bao nhiêu khách hàng mới đăng ký?
- **Thanh toán thất bại**: Có trường hợp thanh toán nào thất bại cần được chú ý không?
- **Yêu cầu hỗ trợ**: Có câu hỏi nào của khách hàng chưa được trả lời không?

### Hỗ trợ Khách hàng (Customer Support) {#customer-support}

Việc bạn tập trung vào một thị trường ngách (niche) là một lợi thế lớn. Vì tất cả khách hàng của bạn đều là các studio thể hình, bạn sẽ thấy những câu hỏi tương tự lặp đi lặp lại:

**Các câu hỏi thường gặp bạn sẽ nhận được:**

- "Làm thế nào để tôi cập nhật lịch lớp học của mình?"
- "Tôi có thể thay đổi màu sắc của trang web không?"
- "Làm thế nào để tôi thêm một huấn luyện viên mới vào trang web của mình?"
- "Tên miền của tôi không hoạt động"
- "Làm thế nào để tôi hủy/nâng cấp gói dịch vụ của mình?"

Hãy xây dựng cơ sở kiến thức (knowledge base) (bắt đầu từ Bài học 8) xoay quanh những câu hỏi thường gặp này. Bất kỳ yêu cầu hỗ trợ nào đáng lẽ có thể là một bài viết trong cơ sở kiến thức đều là tín hiệu để bạn viết bài viết đó.

### Các Cấp độ Hỗ trợ (Support Tiers) {#support-tiers}

Khi bạn phát triển, hãy cấu trúc hỗ trợ theo gói dịch vụ:

| Gói (Plan) | Cấp độ Hỗ trợ | Thời gian phản hồi |
|------|--------------|---------------|
| Starter | Cơ sở kiến thức + email | 48 giờ |
| Growth | Hỗ trợ qua email | 24 giờ |
| Pro | Email ưu tiên + cuộc gọi onboarding | 4 giờ |

Addon [Support Tickets](/addons/support-tickets) có thể giúp bạn quản lý các yêu cầu hỗ trợ ngay trong nền tảng.

## Vận hành Thanh toán (Billing Operations) {#billing-operations}

### Thanh toán Định kỳ (Recurring Payments) {#recurring-payments}

Ultimate Multisite tự động xử lý việc thanh toán định kỳ thông qua payment gateway của bạn. Công việc của bạn là theo dõi các trường hợp sau:

- **Thanh toán thất bại**: Hãy theo dõi kịp thời. Hầu hết các trường hợp thất bại là do thẻ hết hạn, chứ không phải do khách hàng cố ý hủy.
- **Dunning**: Thiết lập logic thử lại tự động thông qua payment gateway của bạn (Stripe xử lý việc này rất tốt).
- **Yêu cầu hủy**: Hiểu lý do tại sao khách hàng rời đi. Mỗi lần hủy là một phản hồi quý giá.

### Quản lý Thành viên (Managing Memberships) {#managing-memberships}

Truy cập **Ultimate Multisite > Memberships** để:

- Xem tất cả các gói đăng ký đang hoạt động
- Xử lý các yêu cầu nâng cấp và hạ cấp
- Hoàn tiền khi cần thiết
- Quản lý thời hạn dùng thử

Xem [Managing Memberships](/user-guide/administration/managing-memberships) để biết tài liệu tham khảo đầy đủ.

### Hóa đơn (Invoicing) {#invoicing}

Đảm bảo hóa đơn được tạo chính xác cho mọi khoản thanh toán. Khách hàng có thể cần hóa đơn để báo cáo chi phí kinh doanh. Xem [Managing Payments and Invoices](/user-guide/administration/managing-payments-and-invoices).

## Bảo trì Nền tảng (Platform Maintenance) {#platform-maintenance}

### Cập nhật WordPress và Plugin {#wordpress-and-plugin-updates}

Với vai trò là quản trị viên mạng (network administrator), bạn chịu trách nhiệm:

- **Cập nhật core WordPress**: Luôn kiểm tra trên một trang staging trước khi áp dụng cho môi trường production
- **Cập nhật Plugin**: Tương tự — kiểm tra trước, sau đó áp dụng trên toàn mạng
- **Cập nhật Theme**: Xác minh các mẫu (templates) vẫn hiển thị đúng sau khi cập nhật theme
- **Cập nhật Ultimate Multisite**: Theo dõi changelog và kiểm tra trước khi cập nhật

:::warning Không bao giờ cập nhật trên Production nếu chưa kiểm tra
Một bản cập nhật bị lỗi sẽ ảnh hưởng đến mọi trang web của khách hàng trên mạng của bạn. Luôn kiểm tra các bản cập nhật trên bản sao staging của mạng trước.
:::

### Bảo mật (Security) {#security}

- Giữ tất cả phần mềm luôn được cập nhật
- Sử dụng mật khẩu mạnh và xác thực hai yếu tố (two-factor authentication) cho các tài khoản admin
- Giám sát các hoạt động đáng ngờ
- Có kế hoạch xử lý sự cố bảo mật

### Hiệu suất (Performance) {#performance}

Khi mạng của bạn phát triển, hãy theo dõi:

- **Thời gian tải trang**: Các trang web của khách hàng có nhanh không?
- **Sử dụng tài nguyên máy chủ**: CPU, bộ nhớ (memory), dung lượng đĩa (disk space)
- **Hiệu suất cơ sở dữ liệu**: Các mạng lớn cần tối ưu hóa cơ sở dữ liệu theo thời gian

Hãy cân nhắc triển khai caching (page cache, object cache) và CDN nếu bạn chưa làm. [Cloudflare integration](/user-guide/host-integrations/cloudflare) xử lý phần lớn những việc này.

## Quản lý Vòng đời Khách hàng (Customer Lifecycle Management) {#customer-lifecycle-management}

### Giảm Tỷ lệ Khách hàng Rời bỏ (Reducing Churn) {#reducing-churn}

Churn là tỷ lệ khách hàng hủy dịch vụ mỗi tháng. Đối với một doanh nghiệp đăng ký dịch vụ (subscription business), việc giảm churn quan trọng không kém việc thu hút khách hàng mới.

**Các lý do phổ biến khiến khách hàng studio thể hình rời bỏ:**

- Họ không thể tìm ra cách sử dụng nền tảng → cải thiện quy trình onboarding
- Trang web không đủ đẹp → cải thiện các mẫu (templates)
- Họ không thấy giá trị → cải thiện tính năng hoặc giao tiếp
- Họ tìm thấy giải pháp thay thế rẻ hơn → củng cố giá trị thị trường ngách của bạn
- Doanh nghiệp của họ đóng cửa → không thể tránh khỏi, nhưng hãy theo dõi riêng mục này

### Khuyến khích Nâng cấp (Encouraging Upgrades) {#encouraging-upgrades}

Những khách hàng đang dùng gói Starter và đang hoạt động tốt nên được khuyến khích nâng cấp:

- Khi họ đạt giới hạn gói (số lượng trang web, dung lượng lưu trữ), hãy hiển thị các lời nhắc nâng cấp
- Gửi email mục tiêu làm nổi bật các tính năng của gói Growth mà họ sẽ được hưởng lợi
- Trình bày những gì mà khách hàng Growth/Pro đã xây dựng được

### Chiến dịch Thu hút Trở lại (Win-Back Campaigns) {#win-back-campaigns}

Khi một khách hàng hủy dịch vụ:

1. Hỏi lý do (qua khảo sát rời đi hoặc email)
2. Giải quyết mối quan tâm của họ nếu có thể
3. Đưa ra ưu đãi giảm giá để họ quay lại (30-60 ngày sau khi hủy)

## Quy trình Hàng tuần và Hàng tháng {#weekly-and-monthly-routines}

### Hàng tuần {#weekly}

- Xem xét các khách hàng đăng ký mới và các trường hợp hủy
- Trả lời tất cả các ticket hỗ trợ đang mở
- Kiểm tra hiệu suất và uptime của nền tảng
- Xem xét bất kỳ khoản thanh toán thất bại nào

### Hàng tháng {#monthly}

- Phân tích các chỉ số chính (MRR, churn, khách hàng mới, nâng cấp)
- Áp dụng các bản cập nhật WordPress và plugin (sau khi kiểm tra staging)
- Xem xét và cập nhật cơ sở kiến thức dựa trên các mẫu hỗ trợ
- Gửi bản tin hoặc cập nhật cho khách hàng (tính năng mới, mẹo, tin tức ngành thể hình)

### Hàng quý {#quarterly}

- Xem xét mức giá so với đối thủ cạnh tranh và phản hồi của khách hàng
- Đánh giá các thiết kế mẫu — chúng có cần được làm mới không?
- Đánh giá khả năng lưu trữ (hosting capacity) — bạn có cần mở rộng quy mô không?
- Xem xét và cải thiện quy trình onboarding dựa trên dữ liệu kích hoạt (activation data)

## Những gì chúng ta đã xây dựng trong Bài học này {#what-we-built-this-lesson}

- **Các quy trình giám sát hàng ngày** cho uptime, đăng ký, thanh toán và hỗ trợ
- **Cấu trúc hỗ trợ phân cấp** phù hợp với các cấp độ gói dịch vụ
- **Các hoạt động thanh toán** bao gồm dunning và xử lý hủy dịch vụ
- **Các quy trình bảo trì** cho cập nhật, bảo mật và hiệu suất
- **Các chiến lược giảm churn** dành riêng cho thị trường thể hình
- **Các quy trình vận hành hàng tuần, hàng tháng và hàng quý**

---

**Tiếp theo:** [Bài học 13: Mở rộng quy mô](lesson-13-growth) — phát triển FitSite từ một hoạt động nhỏ thành một doanh nghiệp thực thụ.
