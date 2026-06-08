---
title: Công cụ và Cấu hình
sidebar_position: 4
_i18n_hash: f27cdab7be320668b6c1d53db1190775
---
# Công cụ và Cấu hình

Theme Builder sử dụng một bộ công cụ để giúp bạn phân tích, thiết kế và xây dựng trang web WordPress của mình. Trong phiên bản 1.16.0, **sd-ai-agent/site-scrape hiện là công cụ Tier 1**, nghĩa là nó đã được tích hợp sẵn trong Theme Builder.

## Các Công cụ Có Sẵn

### Công cụ Tier 1 (Luôn Sẵn Có)

Các công cụ Tier 1 được tích hợp sẵn trong Theme Builder mà không cần cấu hình thêm.

#### sd-ai-agent/site-scrape

**Mục đích:** Phân tích các trang web hiện có để trích xuất nguồn cảm hứng thiết kế, cấu trúc nội dung và tính năng.

**Khả năng:**

- **Phân tích website** — thu thập và phân tích các trang web đối thủ hoặc nguồn cảm hứng
- **Trích xuất thiết kế** — xác định màu sắc, phông chữ và các mẫu bố cục
- **Cấu trúc nội dung** — hiểu cách tổ chức và hệ thống phân cấp của trang
- **Phát hiện tính năng** — nhận diện các plugin và chức năng
- **Phân tích hiệu suất** — kiểm tra tốc độ và tối ưu hóa trang
- **Phân tích SEO** — xem xét các thẻ meta và dữ liệu có cấu trúc

**Cách sử dụng:**

```
Analyze the design of example.com and use it as inspiration for my site.
```

**Những gì nó trích xuất:**

- Bảng màu và cách sử dụng màu sắc
- Kiểu chữ (phông chữ và kích thước)
- Cấu trúc bố cục và khoảng cách
- Các mẫu điều hướng
- Tổ chức nội dung
- Hình ảnh và cách sử dụng media
- Các yếu tố tương tác
- Khả năng hiển thị trên thiết bị di động

**Hạn chế:**

- Không thể thu thập dữ liệu từ các trang web được bảo vệ bằng mật khẩu
- Tôn trọng robots.txt và chính sách của trang web
- Có thể không nắm bắt được nội dung động
- Các trang web nặng về JavaScript có thể bị giới hạn phân tích
- Các trang web lớn có thể mất nhiều thời gian hơn để phân tích

### Công cụ Tier 2 (Tùy chọn)

Các công cụ Tier 2 chỉ khả dụng khi bạn bật chúng rõ ràng trong phần cài đặt của Theme Builder.

#### Advanced Analytics

Cung cấp các chỉ số hiệu suất chi tiết:

- Thời gian tải trang
- Core Web Vitals
- Điểm SEO
- Điểm khả năng truy cập (Accessibility score)
- Điểm thực hành tốt nhất (Best practices score)

#### Content Optimizer

Phân tích và đề xuất cải tiến cho:

- Khả năng đọc (Readability)
- Tối ưu hóa SEO
- Sử dụng từ khóa
- Cấu trúc nội dung
- Vị trí lời kêu gọi hành động (Call-to-action)

### Công cụ Tier 3 (Cao cấp)

Các công cụ Tier 3 yêu cầu cấu hình bổ sung hoặc các tính năng cao cấp.

#### AI Content Generator

Tạo nội dung cho:

- Mô tả sản phẩm
- Trang dịch vụ
- Bài đăng blog
- Mô tả meta
- Nội dung lời kêu gọi hành động

#### Advanced Design Tools

Cung cấp các khả năng thiết kế nâng cao:

- Tạo CSS tùy chỉnh
- Tạo hoạt ảnh (Animation)
- Thiết kế yếu tố tương tác
- Lý thuyết màu sắc nâng cao
- Tối ưu hóa kiểu chữ

## Cấu hình Công cụ

### Bật Công cụ

Để bật các công cụ bổ sung trong Theme Builder:

1. Điều hướng đến **Gratis AI Agent → Settings**
2. Truy cập **Theme Builder → Tools**
3. Bật/tắt các công cụ theo nhu cầu
4. Lưu cài đặt

### Quyền Công cụ

Một số công cụ yêu cầu quyền truy cập:

- **Site scraping** — yêu cầu quyền truy cập internet
- **Analytics** — yêu cầu tích hợp Google Analytics
- **Content generation** — yêu cầu khóa API (API keys)
- **Advanced features** — có thể yêu cầu gói đăng ký cao cấp

### Khóa API và Thông tin Xác thực

Cấu hình các khóa API cho những công cụ yêu cầu chúng:

1. Truy cập **Gratis AI Agent → Settings → API Keys**
2. Nhập thông tin xác thực cho từng công cụ
3. Kiểm tra kết nối
4. Lưu an toàn

## Sử dụng sd-ai-agent/site-scrape

### Sử dụng Cơ bản

Yêu cầu Theme Builder phân tích một trang web:

```
Analyze the design of my competitor's site at competitor.com
and suggest design improvements for my site.
```

### Phân tích Cụ thể

Yêu cầu các loại phân tích cụ thể:

```
Extract the color palette from example.com and use it as inspiration.
```

```
Analyze the navigation structure of example.com and apply similar
organization to my site.
```

```
Check the mobile responsiveness of example.com and ensure my site
is equally responsive.
```

### Phân tích So sánh

So sánh nhiều trang web:

```
Compare the designs of site1.com and site2.com and create a design
that combines the best elements of both.
```

## Hạn chế và Lưu ý về Công cụ

### Giới hạn Tốc độ (Rate Limiting)

- Việc thu thập dữ liệu bị giới hạn tốc độ để tránh quá tải máy chủ
- Nhiều yêu cầu đến cùng một trang web có thể bị giảm tốc độ
- Các trang web lớn có thể mất nhiều thời gian hơn để phân tích

### Độ chính xác của Nội dung

- Nội dung động có thể không được thu thập đầy đủ
- Nội dung được render bằng JavaScript có thể không hoàn chỉnh
- Dữ liệu thời gian thực có thể không được phản ánh
- Một số nội dung có thể nằm sau tường phí (paywalls)

### Cân nhắc Pháp lý và Đạo đức

- Tôn trọng robots.txt và chính sách của trang web
- Không thu thập nội dung có bản quyền để sao chép
- Sử dụng phân tích để lấy cảm hứng, không phải để sao chép
- Xác minh bạn có quyền sử dụng nội dung được trích xuất
- Tuân thủ điều khoản dịch vụ của các trang web được phân tích

### Tác động Hiệu suất

- Thu thập dữ liệu từ các trang web lớn có thể mất thời gian
- Nhiều lần thu thập dữ liệu đồng thời có thể chậm hơn
- Kết nối mạng ảnh hưởng đến tốc độ
- Bộ dữ liệu lớn có thể yêu cầu nhiều tài nguyên xử lý hơn

## Thực hành Tốt nhất

### Khi Sử dụng Phân tích Website

1. **Phân tích nhiều trang web** — thu thập cảm hứng từ nhiều nguồn khác nhau
2. **Tập trung vào cấu trúc** — học các mẫu bố cục và tổ chức
3. **Trích xuất màu sắc** — sử dụng bảng màu làm điểm khởi đầu
4. **Nghiên cứu kiểu chữ** — xác định các sự kết hợp phông chữ bạn yêu thích
5. **Xem xét điều hướng** — hiểu cách tổ chức menu

### Thu thập Dữ liệu có Đạo đức

1. **Tôn trọng robots.txt** — tuân theo hướng dẫn của trang web
2. **Không sao chép nội dung** — chỉ sử dụng phân tích để lấy cảm hứng
3. **Xác minh quyền lợi** — đảm bảo bạn có quyền sử dụng nội dung được trích xuất
4. **Ghi nguồn** — ghi công các nguồn cảm hứng
5. **Tuân thủ điều khoản** — tuân thủ điều khoản dịch vụ của trang web

### Tối đa hóa Hiệu quả Công cụ

1. **Cụ thể hóa** — yêu cầu các loại phân tích cụ thể
2. **Cung cấp ngữ cảnh** — giải thích mục đích của trang web bạn
3. **Thiết lập kỳ vọng** — mô tả mục tiêu thiết kế của bạn
4. **Lặp lại** — tinh chỉnh dựa trên kết quả
5. **Kết hợp công cụ** — sử dụng nhiều công cụ để phân tích toàn diện

## Khắc phục Sự cố

### Website Không Thu thập Dữ liệu

- Kiểm tra xem trang web có thể truy cập công khai không
- Xác minh robots.txt có cho phép thu thập dữ liệu không
- Thử một trang web khác
- Kiểm tra kết nối internet
- Liên hệ bộ phận hỗ trợ nếu sự cố vẫn tiếp diễn

### Phân tích Không Hoàn chỉnh

- Trang web có thể chứa nội dung động
- JavaScript có thể chưa được render đầy đủ
- Các trang web lớn có thể bị hết thời gian chờ (timeout)
- Thử phân tích các trang cụ thể thay vì toàn bộ trang
- Yêu cầu các loại phân tích cụ thể

### Hiệu suất Chậm

- Các trang web lớn cần nhiều thời gian hơn để phân tích
- Nhiều lần thu thập dữ liệu đồng thời sẽ chậm hơn
- Kết nối mạng ảnh hưởng đến tốc độ
- Thử vào giờ thấp điểm
- Phân tích các phần nhỏ hơn trước

## Tài liệu Liên quan

- [Discovery Interview](./discovery-interview.md) — thu thập thông tin thiết kế
- [Design Direction](./design-direction.md) — tinh chỉnh thiết kế của bạn
- [Hospitality Menus](./hospitality-menus.md) — tạo các trang menu
