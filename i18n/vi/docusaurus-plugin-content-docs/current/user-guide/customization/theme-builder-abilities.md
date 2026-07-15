---
title: Tính năng của Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Khả năng của Theme Builder: Dựng Khung và Kích hoạt Chủ đề Block

Superdav AI Agent v1.12.0 giới thiệu hai khả năng mạnh mẽ cho phép bạn tạo và triển khai các chủ đề block (block themes) tùy chỉnh trực tiếp từ giao diện chat.

## Tổng quan {#overview}

Các khả năng **scaffold-block-theme** và **activate-theme** cho phép agent thực hiện các tác vụ sau:
- Tạo ra các chủ đề block hoàn chỉnh, sẵn sàng cho sản xuất dựa trên yêu cầu của bạn
- Tự động kích hoạt chủ đề trên trang web của bạn mà không cần can thiệp thủ công
- Xây dựng bản sắc thị giác mạch lạc thông qua các quyết định thiết kế có hướng dẫn

## Dựng Khung Chủ đề Block (Scaffold Block Theme) {#scaffold-block-theme}

Khả năng **scaffold-block-theme** sẽ tạo ra một chủ đề block WordPress mới với cấu trúc chủ đề hoàn chỉnh, bao gồm:

- Cấu hình `theme.json` với các token thiết kế
- Các tệp template block cho các bố cục phổ biến
- Các kiểu và biến thể block tùy chỉnh
- Siêu dữ liệu và khai báo hỗ trợ chủ đề

### Cách gọi (How to Invoke) {#how-to-invoke}

Trong cuộc trò chuyện với Superdav AI Agent, bạn có thể yêu cầu tạo chủ đề bằng cách:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

Agent sẽ:
1. Thu thập sở thích thiết kế của bạn qua cuộc trò chuyện
2. Tạo ra cấu trúc chủ đề hoàn chỉnh
3. Tạo tất cả các tệp chủ đề cần thiết
4. Chuẩn bị chủ đề để kích hoạt

### Kết quả mong đợi (Expected Output) {#expected-output}

Khi khả năng này thực thi thành công, bạn sẽ thấy:

- Xác nhận rằng chủ đề đã được dựng khung (scaffolded)
- Tên và vị trí của chủ đề
- Tóm tắt các token thiết kế đã được áp dụng (màu sắc, kiểu chữ, khoảng cách)
- Trạng thái sẵn sàng để kích hoạt

Ví dụ về kết quả:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Kích hoạt Chủ đề (Activate Theme) {#activate-theme}

Khả năng **activate-theme** sẽ chuyển trang web của bạn sang một chủ đề block mới được dựng khung hoặc một chủ đề hiện có.

### Cách gọi (How to Invoke) {#how-to-invoke-1}

Sau khi dựng khung chủ đề, bạn có thể kích hoạt nó ngay lập tức:

```
"Activate the Modern Agency theme"
```

Hoặc kích hoạt bất kỳ chủ đề hiện có nào:

```
"Switch to the Twentytwentyfour theme"
```

### Kết quả mong đợi (Expected Output) {#expected-output-1}

Khi việc kích hoạt thành công:

- Xác nhận chủ đề đang hoạt động
- Tên chủ đề trước đó (để tham khảo)
- URL trang web nơi chủ đề đang hoạt động
- Bất kỳ ghi chú thiết lập cụ thể nào của chủ đề

Ví dụ về kết quả:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Quy trình làm việc: Dựng Khung và Kích hoạt (Workflow: Scaffold and Activate) {#workflow-scaffold-and-activate}

Một quy trình làm việc điển hình kết hợp cả hai khả năng:

1. **Yêu cầu tạo chủ đề**: "Create a block theme for my SaaS landing page"
2. **Agent dựng khung chủ đề**: Tạo các tệp và token thiết kế
3. **Xem xét và tinh chỉnh**: Thảo luận các thay đổi thiết kế nếu cần
4. **Kích hoạt**: "Activate the theme now"
5. **Xác minh**: Truy cập trang web của bạn để xác nhận thiết kế mới đã hoạt động

## Token Thiết kế và Tùy chỉnh (Design Tokens and Customization) {#design-tokens-and-customization}

Các chủ đề được dựng khung sử dụng các design tokens của WordPress (thông qua `theme.json`) cho:

- **Màu sắc (Colors)**: Bảng màu Primary, secondary, accent, neutral
- **Kiểu chữ (Typography)**: Các họ phông chữ, kích thước, độ đậm, chiều cao dòng
- **Khoảng cách (Spacing)**: Các thang đo padding, margin, gap
- **Viền (Borders)**: Token bán kính và độ rộng
- **Đổ bóng (Shadows)**: Các mức độ nổi (elevation levels)

Các token này được tập trung hóa trong `theme.json`, giúp bạn dễ dàng điều chỉnh toàn bộ hệ thống thiết kế chỉ từ một tệp duy nhất.

## Hạn chế và Lưu ý (Limitations and Notes) {#limitations-and-notes}

- Các chủ đề được dựng khung trong thư mục `/wp-content/themes/` và phải tuân theo quy ước đặt tên của WordPress
- Việc kích hoạt yêu cầu quyền thích hợp trên trang web WordPress của bạn
- Mã PHP tùy chỉnh trong chủ đề là tối thiểu; hãy sử dụng plugins cho các chức năng phức tạp
- Chủ đề block hoạt động tốt nhất với WordPress 5.9 trở lên

## Khắc phục sự cố (Troubleshooting) {#troubleshooting}

**Chủ đề không xuất hiện sau khi dựng khung**
- Xác minh thư mục chủ đề tồn tại và có quyền truy cập thích hợp
- Kiểm tra xem `theme.json` có phải là JSON hợp lệ không
- Đảm bảo tên chủ đề không bị xung đột với các chủ đề hiện có

**Kích hoạt thất bại**
- Xác nhận bạn có quyền quản trị viên (administrator permissions)
- Kiểm tra xem thư mục chủ đề có thể đọc được bởi WordPress không
- Xem nhật ký lỗi (error logs) của WordPress để biết chi tiết

**Token thiết kế không áp dụng**
- Xác minh cú pháp `theme.json` là chính xác
- Xóa bất kỳ plugin caching nào
- Kiểm tra xem phiên bản WordPress của bạn có hỗ trợ các token bạn đang sử dụng không

## Các bước tiếp theo (Next Steps) {#next-steps}

Sau khi kích hoạt chủ đề, bạn có thể:
- Sử dụng **Design System Aesthetics skill** để tinh chỉnh kiểu chữ, màu sắc và khoảng cách
- Tùy chỉnh các kiểu block riêng lẻ thông qua trình soạn thảo block của WordPress
- Thêm CSS tùy chỉnh vào tệp `style.css` của chủ đề
- Tạo các template block tùy chỉnh cho các loại trang cụ thể
