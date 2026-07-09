---
title: Định hướng Thiết kế
sidebar_position: 2
_i18n_hash: 0a55afffd66ffad6930c7794d4074971
---
# Thiết lập Hướng dẫn Thiết kế {#design-direction}

Bước **Thiết lập Hướng dẫn Thiết kế** cho phép bạn xem xét, tinh chỉnh và hoàn thiện thiết kế trực quan của theme trước khi Theme Builder tạo ra theme hoàn chỉnh.

## Tổng quan {#overview}

Sau khi hoàn thành Buổi phỏng vấn Khám phá (Discovery Interview), Theme Builder sẽ trình bày hướng dẫn thiết kế của bạn với **hiển thị xem trước trên máy tính và thiết bị di động**. Điều này giúp bạn hình dung chính xác thiết kế của mình sẽ trông như thế nào trên các thiết bị khác nhau trước khi quyết định sử dụng theme.

## Các Thành phần của Hướng dẫn Thiết kế {#design-direction-components}

### 1. Bảng màu (Color Palette) {#1-color-palette}

Bảng màu của theme bao gồm:

- **Màu chủ đạo (Primary color)** — màu thương hiệu chính được sử dụng cho nút bấm, liên kết và các điểm nhấn
- **Màu phụ (Secondary color)** — màu bổ sung để tạo sự đa dạng
- **Màu nhấn (Accent color)** — màu làm nổi bật các yếu tố quan trọng
- **Màu trung tính (Neutral colors)** — các màu xám và trắng dùng cho nền và văn bản
- **Màu chữ (Text color)** — màu văn bản chính để đảm bảo khả năng đọc

### 2. Kiểu chữ (Typography) {#2-typography}

Các lựa chọn font chữ cho:

- **Font tiêu đề (Heading font)** — dùng cho tiêu đề trang và tiêu đề mục
- **Font nội dung (Body font)** — dùng cho văn bản đoạn văn và nội dung
- **Kích thước font (Font sizes)** — kích thước linh hoạt cho các kích cỡ màn hình khác nhau
- **Chiều cao dòng (Line height)** — khoảng cách giữa các dòng để dễ đọc
- **Độ đậm của font (Font weights)** — các biến thể đậm, thường và nhạt

### 3. Bố cục và Khoảng cách (Layout and Spacing) {#3-layout-and-spacing}

- **Chiều rộng container (Container width)** — chiều rộng tối đa cho nội dung
- **Khoảng đệm và lề (Padding and margins)** — khoảng cách xung quanh các thành phần
- **Hệ thống lưới (Grid system)** — bố cục cột cho thiết kế đáp ứng
- **Khoảng cách thành phần (Component spacing)** — khoảng cách giữa các thành phần giao diện người dùng (UI)

### 4. Các Yếu tố Trực quan (Visual Elements) {#4-visual-elements}

- **Kiểu nút bấm (Button styles)** — thiết kế nút bấm chính, phụ và thứ cấp
- **Thiết kế thẻ (Card designs)** — bố cục cho các khối nội dung
- **Biểu tượng (Icons)** — kiểu và kích thước biểu tượng
- **Viền và bóng đổ (Borders and shadows)** — độ sâu trực quan tinh tế
- **Hiệu ứng di chuột (Hover effects)** — kiểu dáng trạng thái tương tác

## Hiển thị Xem trước (Preview Rendering) {#preview-rendering}

### Xem trước trên Máy tính (Desktop Preview) {#desktop-preview}

Xem trước trên máy tính hiển thị thiết kế của bạn ở chiều rộng đầy đủ (thường là 1200px trở lên):

- Thanh điều hướng đầy đủ
- Bố cục hoàn chỉnh với tất cả các cột
- Kiểu chữ và khoảng cách lớn
- Tất cả các yếu tố trực quan ở kích thước đầy đủ

### Xem trước trên Thiết bị Di động (Mobile Preview) {#mobile-preview}

Xem trước trên thiết bị di động hiển thị thiết kế của bạn ở chiều rộng di động (thường là 375px):

- Thanh điều hướng đáp ứng (menu hamburger)
- Bố cục một cột
- Kiểu chữ và khoảng cách được điều chỉnh
- Kích thước nút bấm thân thiện với cảm ứng

### Các Điểm Ngắt Đáp ứng (Responsive Breakpoints) {#responsive-breakpoints}

Theme Builder hiển thị xem trước tại các điểm ngắt sau:

| Thiết bị | Chiều rộng | Xem trước |
|--------|-------|---------|
| **Di động** | 375px | Điện thoại dọc |
| **Máy tính bảng** | 768px | Máy tính bảng ngang |
| **Máy tính** | 1200px | Máy tính đầy đủ chiều rộng |
| **Máy tính lớn** | 1920px | Màn hình siêu rộng |

## Tinh chỉnh Thiết kế của Bạn {#refining-your-design}

### Thực hiện Điều chỉnh {#making-adjustments}

Bạn có thể tinh chỉnh hướng dẫn thiết kế bằng cách:

1. **Điều chỉnh màu sắc** — thay đổi bất kỳ màu nào trong bảng màu
2. **Thay đổi font chữ** — chọn các kiểu chữ khác nhau
3. **Sửa khoảng cách** — điều chỉnh padding và margin
4. **Cập nhật bố cục** — thay đổi chiều rộng container và cột lưới
5. **Tùy chỉnh các thành phần** — sửa kiểu nút bấm, thiết kế thẻ, v.v.

### Cập nhật Xem trước {#preview-updates}

Các thay đổi được phản ánh theo thời gian thực:

- Xem trước trên máy tính cập nhật ngay lập tức
- Xem trước trên thiết bị di động cập nhật ngay lập tức
- Tất cả các điểm ngắt đáp ứng đều được cập nhật
- Bạn có thể chuyển đổi giữa các bản xem trước để xác minh các thay đổi

### Chế độ So sánh (Comparison View) {#comparison-view}

So sánh hướng dẫn thiết kế của bạn với:

- **Thiết kế gốc (Original design)** — xem những gì đã thay đổi
- **Thiết kế của đối thủ (Competitor designs)** — so sánh với các trang web lấy cảm hứng
- **Các phiên bản trước (Previous versions)** — quay lại các hướng dẫn thiết kế trước đó

## Phê duyệt Hướng dẫn Thiết kế {#design-direction-approval}

Khi bạn hài lòng với thiết kế của mình:

1. **Xem xét cả hai bản xem trước** — xác minh cả giao diện máy tính và di động đều ổn
2. **Kiểm tra tất cả các màu sắc** — đảm bảo độ tương phản và khả năng tiếp cận
3. **Kiểm tra kiểu chữ** — xác minh khả năng đọc ở mọi kích cỡ
4. **Xác nhận bố cục** — kiểm tra khoảng cách và căn chỉnh
5. **Phê duyệt thiết kế** — tiếp tục tạo theme

## Các Bước Tiếp theo {#next-steps}

Sau khi phê duyệt hướng dẫn thiết kế:

1. Theme Builder sẽ tạo theme hoàn chỉnh của bạn
2. Theme được cài đặt trên trang WordPress của bạn
3. Bạn có thể tùy chỉnh thêm bằng Customizer của WordPress
4. Tiếp tục đến [Hospitality Menus](./hospitality-menus.md) hoặc các tính năng khác

## Các Thực hành Tốt nhất {#best-practices}

- **Kiểm tra trên thiết bị thực** — nếu có thể, hãy sử dụng điện thoại và máy tính bảng thật
- **Kiểm tra khả năng đọc** — đảm bảo văn bản dễ đọc ở mọi kích cỡ
- **Xác minh độ tương phản** — sử dụng [Validate Palette Contrast](../abilities/validate-palette-contrast.md) để kiểm tra khả năng tiếp cận
- **Cân nhắc hiệu suất** — tối ưu hóa hình ảnh và font chữ để tăng tốc độ
- **Lên kế hoạch nội dung** — đảm bảo bố cục hoạt động với nội dung thực tế của bạn

## Khắc phục Sự cố (Troubleshooting) {#troubleshooting}

### Xem trước không cập nhật {#preview-not-updating}

- Tải lại trang
- Xóa bộ nhớ cache của trình duyệt
- Thử một trình duyệt khác
- Kiểm tra kết nối internet

### Màu sắc trông khác nhau {#colors-look-different}

- Kiểm tra cài đặt màu sắc của màn hình
- Thử trên các thiết bị khác nhau
- Xác minh độ tương phản màu bằng các công cụ hỗ trợ tiếp cận
- Cân nhắc sử dụng trình giả lập mù màu

### Sự cố về Kiểu chữ {#typography-issues}

- Xác minh các tệp font đang được tải
- Kiểm tra kích thước font ở các điểm ngắt khác nhau
- Thử nghiệm với nội dung thực tế
- Cân nhắc độ dài dòng để dễ đọc

## Tài liệu Liên quan {#related-documentation}

- [Discovery Interview](./discovery-interview.md) — thu thập thông tin thiết kế
- [Hospitality Menus](./hospitality-menus.md) — tạo các trang menu có cấu trúc
- [Validate Palette Contrast](../abilities/validate-palette-contrast.md) — kiểm tra khả năng tiếp cận màu sắc
- [Generate Logo SVG](../abilities/generate-logo-svg.md) — tạo logo tùy chỉnh
