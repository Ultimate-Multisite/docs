---
title: Công cụ và Cấu hình
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# Công cụ và Cấu hình {#tools-and-configuration}

Theme Builder sử dụng một bộ công cụ để phân tích, thiết kế và xây dựng site WordPress của bạn. Trong phiên bản 1.16.0, **sd-ai-agent/site-scrape hiện là công cụ Tier 1**, khiến nó có sẵn theo mặc định trong Theme Builder. Superdav AI Agent v1.18.0 cũng giới thiệu một gói đồng hành Advanced được phân phối riêng cho các quy trình làm việc của nhà phát triển đáng tin cậy; các công cụ đó không phải là một phần của gói lõi WordPress.org và phải được cài đặt cũng như uỷ quyền riêng.

## Công cụ có sẵn {#available-tools}

### Công cụ Tier 1 (Luôn có sẵn) {#tier-1-tools-always-available}

Công cụ Tier 1 có sẵn theo mặc định trong Theme Builder mà không cần cấu hình bổ sung.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**Mục đích:** Phân tích các website hiện có để trích xuất cảm hứng thiết kế, cấu trúc nội dung và chức năng.

**Khả năng:**

- **Phân tích website** — thu thập và phân tích website của đối thủ cạnh tranh hoặc website truyền cảm hứng
- **Trích xuất thiết kế** — xác định màu sắc, phông chữ và các mẫu bố cục
- **Cấu trúc nội dung** — hiểu tổ chức trang và hệ thống phân cấp
- **Phát hiện tính năng** — xác định plugin và chức năng
- **Phân tích hiệu suất** — kiểm tra tốc độ trang và tối ưu hoá
- **Phân tích SEO** — xem xét thẻ meta và dữ liệu có cấu trúc

**Cách sử dụng:**

```
Phân tích thiết kế của example.com và dùng nó làm cảm hứng cho site của tôi.
```

**Nội dung được trích xuất:**

- Bảng màu và cách sử dụng màu
- Kiểu chữ (phông chữ và kích thước)
- Cấu trúc bố cục và khoảng cách
- Mẫu điều hướng
- Tổ chức nội dung
- Cách sử dụng hình ảnh và phương tiện
- Phần tử tương tác
- Khả năng đáp ứng trên thiết bị di động

**Giới hạn:**

- Không thể thu thập các site được bảo vệ bằng mật khẩu
- Tôn trọng robots.txt và chính sách của site
- Có thể không ghi nhận được nội dung động
- Các site dùng nhiều JavaScript có thể có phân tích hạn chế
- Các site lớn có thể mất nhiều thời gian hơn để phân tích

### Công cụ Tier 2 (Tuỳ chọn) {#tier-2-tools-optional}

Công cụ Tier 2 có sẵn khi được bật rõ ràng trong cài đặt Theme Builder.

#### Phân tích nâng cao {#advanced-analytics}

Cung cấp các chỉ số hiệu suất chi tiết:

- Thời gian tải trang
- Core Web Vitals
- Điểm SEO
- Điểm khả năng truy cập
- Điểm phương pháp hay nhất

#### Trình tối ưu hoá nội dung {#content-optimizer}

Phân tích và đề xuất cải thiện cho:

- Khả năng đọc
- Tối ưu hoá SEO
- Cách sử dụng từ khoá
- Cấu trúc nội dung
- Vị trí lời kêu gọi hành động

### Công cụ Tier 3 (Premium) {#tier-3-tools-premium}

Công cụ Tier 3 yêu cầu cấu hình bổ sung hoặc tính năng premium.

#### Trình tạo nội dung AI {#ai-content-generator}

Tạo nội dung cho:

- Mô tả sản phẩm
- Trang dịch vụ
- Bài viết blog
- Mô tả meta
- Nội dung lời kêu gọi hành động

#### Công cụ thiết kế nâng cao {#advanced-design-tools}

Cung cấp các khả năng thiết kế nâng cao:

- Tạo CSS tuỳ chỉnh
- Tạo hoạt ảnh
- Thiết kế phần tử tương tác
- Lý thuyết màu nâng cao
- Tối ưu hoá kiểu chữ

### Công cụ đồng hành Advanced (Gói riêng) {#advanced-companion-tools-separate-package}

Gói đồng hành Advanced được phân phối riêng với bản phát hành lõi Superdav AI Agent. Gói này dành cho môi trường của nhà phát triển và chủ sở hữu site đáng tin cậy, nơi quản trị viên cho phép rõ ràng agent sử dụng công cụ có tác động lớn.

Khả năng đồng hành Advanced có thể bao gồm:

- **Công cụ hệ thống tệp** — kiểm tra và sửa đổi các tệp đã được phê duyệt trong môi trường đáng tin cậy
- **Công cụ cơ sở dữ liệu** — truy vấn hoặc cập nhật dữ liệu site khi được uỷ quyền rõ ràng
- **Công cụ WP-CLI** — chạy các lệnh bảo trì và kiểm tra WordPress
- **Công cụ điều phối REST** — gọi các endpoint REST đã đăng ký thông qua quy trình điều phối được kiểm soát
- **Công cụ xây dựng plugin** — tạo khung và lặp lại trên mã plugin
- **Công cụ snapshot Git** — tạo snapshot trước các thao tác nhà phát triển rủi ro
- **Công cụ quản lý người dùng** — hỗ trợ xem xét hoặc điều chỉnh bản ghi người dùng khi được phép
- **Công cụ benchmark** — chạy benchmark hiệu suất hoặc năng lực để đánh giá phát triển

Không ghi tài liệu các công cụ này như các công cụ Theme Builder có sẵn chung cho mọi bản cài đặt. Chúng chỉ có sẵn khi gói đồng hành Advanced được cài đặt, bật và giới hạn cho quản trị viên đáng tin cậy.

## Cấu hình công cụ {#tool-configuration}

### Bật công cụ {#enabling-tools}

Để bật công cụ bổ sung trong Theme Builder:

1. Điều hướng đến **Gratis AI Agent → Settings**
2. Đi tới **Theme Builder → Tools**
3. Bật/tắt công cụ khi cần
4. Lưu cài đặt

### Quyền của công cụ {#tool-permissions}

Một số công cụ yêu cầu quyền:

- **Thu thập site** — yêu cầu truy cập internet
- **Phân tích** — yêu cầu tích hợp Google Analytics
- **Tạo nội dung** — yêu cầu API key
- **Tính năng nâng cao** — có thể yêu cầu subscription premium
- **Công cụ đồng hành Advanced** — yêu cầu gói Advanced được phân phối riêng và sự tin cậy rõ ràng từ quản trị viên

### API Key và thông tin xác thực {#api-keys-and-credentials}

Cấu hình API key cho các công cụ yêu cầu chúng:

1. Đi tới **Gratis AI Agent → Settings → API Keys**
2. Nhập thông tin xác thực cho từng công cụ
3. Kiểm tra kết nối
4. Lưu an toàn

### Cài đặt gói đồng hành Advanced {#installing-the-advanced-companion-package}

Gói đồng hành Advanced được phát hành riêng với ZIP lõi WordPress.org. Chỉ cài đặt gói này từ kênh phân phối dự án chính thức cho bản phát hành, sau đó giới hạn quyền truy cập cho quản trị viên đáng tin cậy. Xem xét các cổng phê duyệt của con người và hành vi snapshot git trước khi bật công cụ hệ thống tệp, cơ sở dữ liệu, WP-CLI, điều phối REST, xây dựng plugin, quản lý người dùng hoặc benchmark trên site production.

## Sử dụng sd-ai-agent/site-scrape {#using-sd-ai-agentsite-scrape}

### Cách sử dụng cơ bản {#basic-usage}

Yêu cầu Theme Builder phân tích một website:

```
Phân tích thiết kế của site đối thủ cạnh tranh của tôi tại competitor.com
và đề xuất cải thiện thiết kế cho site của tôi.
```

### Phân tích cụ thể {#specific-analysis}

Yêu cầu các loại phân tích cụ thể:

```
Trích xuất bảng màu từ example.com và dùng nó làm cảm hứng.
```

```
Phân tích cấu trúc điều hướng của example.com và áp dụng cách tổ chức
tương tự cho site của tôi.
```

```
Kiểm tra khả năng đáp ứng trên thiết bị di động của example.com và đảm bảo site của tôi
cũng đáp ứng tương đương.
```

### Phân tích so sánh {#comparison-analysis}

So sánh nhiều site:

```
So sánh thiết kế của site1.com và site2.com và tạo một thiết kế
kết hợp những yếu tố tốt nhất của cả hai.
```

## Giới hạn và cân nhắc về công cụ {#tool-limitations-and-considerations}

### Giới hạn tốc độ {#rate-limiting}

- Scraping bị giới hạn tốc độ để ngăn máy chủ quá tải
- Nhiều yêu cầu đến cùng một site có thể bị điều tiết
- Các site lớn có thể mất nhiều thời gian hơn để phân tích

### Độ chính xác của nội dung {#content-accuracy}

- Nội dung động có thể không được ghi nhận đầy đủ
- Nội dung được hiển thị bằng JavaScript có thể không hoàn chỉnh
- Dữ liệu thời gian thực có thể không được phản ánh
- Một số nội dung có thể nằm sau paywall

### Cân nhắc pháp lý và đạo đức {#legal-and-ethical-considerations}

- Tôn trọng robots.txt và chính sách của site
- Không scrape nội dung có bản quyền để tái xuất bản
- Sử dụng phân tích để lấy cảm hứng, không sao chép
- Xác minh rằng bạn có quyền sử dụng nội dung đã trích xuất
- Tuân thủ điều khoản dịch vụ của các site được phân tích

### Tác động đến hiệu năng {#performance-impact}

- Scraping các site lớn có thể mất thời gian
- Nhiều lượt scrape đồng thời có thể chậm hơn
- Kết nối mạng ảnh hưởng đến tốc độ
- Các tập dữ liệu lớn có thể cần xử lý nhiều hơn

## Các phương pháp hay nhất {#best-practices}

### Sử dụng phân tích site {#using-site-analysis}

1. **Phân tích nhiều site** — thu thập cảm hứng từ nhiều nguồn
2. **Tập trung vào cấu trúc** — học các mẫu bố cục và tổ chức
3. **Trích xuất màu sắc** — dùng bảng màu làm điểm khởi đầu
4. **Nghiên cứu typography** — xác định các tổ hợp phông chữ bạn thích
5. **Xem xét điều hướng** — hiểu cách tổ chức menu

### Scraping có đạo đức {#ethical-scraping}

1. **Tôn trọng robots.txt** — tuân theo hướng dẫn của site
2. **Không sao chép nội dung** — chỉ sử dụng phân tích để lấy cảm hứng
3. **Xác minh quyền** — đảm bảo bạn có thể sử dụng nội dung đã trích xuất
4. **Ghi nguồn** — ghi nhận các nguồn cảm hứng
5. **Tuân thủ điều khoản** — tuân thủ điều khoản dịch vụ của site

### Tối đa hóa hiệu quả công cụ {#maximizing-tool-effectiveness}

1. **Cụ thể** — yêu cầu các loại phân tích cụ thể
2. **Cung cấp ngữ cảnh** — giải thích mục đích của site của bạn
3. **Đặt kỳ vọng** — mô tả mục tiêu thiết kế của bạn
4. **Lặp lại** — tinh chỉnh dựa trên kết quả
5. **Kết hợp công cụ** — sử dụng nhiều công cụ để phân tích toàn diện

## Khắc phục sự cố {#troubleshooting}

### Site không scrape được {#site-wont-scrape}

- Kiểm tra xem site có thể truy cập công khai hay không
- Xác minh robots.txt cho phép scraping
- Thử một site khác
- Kiểm tra kết nối internet
- Liên hệ hỗ trợ nếu sự cố vẫn tiếp diễn

### Phân tích không hoàn chỉnh {#incomplete-analysis}

- Site có thể có nội dung động
- JavaScript có thể không được render đầy đủ
- Các site lớn có thể hết thời gian chờ
- Thử phân tích các trang cụ thể thay thế
- Yêu cầu các loại phân tích cụ thể

### Hiệu năng chậm {#slow-performance}

- Các site lớn mất nhiều thời gian hơn để phân tích
- Nhiều lượt scrape đồng thời sẽ chậm hơn
- Kết nối mạng ảnh hưởng đến tốc độ
- Thử vào giờ thấp điểm
- Phân tích các phần nhỏ hơn trước

## Tài liệu liên quan {#related-documentation}

- [Phỏng vấn khám phá](./discovery-interview.md) — thu thập thông tin thiết kế
- [Định hướng thiết kế](./design-direction.md) — tinh chỉnh thiết kế của bạn
- [Menu ngành lưu trú](./hospitality-menus.md) — tạo các trang menu
