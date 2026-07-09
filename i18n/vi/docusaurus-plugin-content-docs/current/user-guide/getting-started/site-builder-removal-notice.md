---
title: Thông báo loại bỏ Chế độ Xây dựng Trang
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Thông báo loại bỏ Site Builder Mode {#site-builder-mode-removal-notice}

**Chế độ Site Builder đã được loại bỏ trong Superdav AI Agent v1.12.0.** Nếu bạn đang sử dụng Site Builder mode, bạn nên chuyển sang sử dụng **Setup Assistant agent** để tạo theme và thiết lập trang web.

## Điều gì đã xảy ra? {#what-happened}

### Site Builder Mode (Phiên bản cũ) {#site-builder-mode-legacy}

Site Builder mode là một giao diện dựa trên wizard (trình hướng dẫn) để thực hiện các tác vụ sau:

- Tạo trang web từ các mẫu có sẵn
- Cấu hình các cài đặt cơ bản
- Chọn một theme
- Thiết lập nội dung ban đầu

### Thay thế bằng gì? {#what-replaced-it}

**Setup Assistant agent** hiện xử lý tất cả các chức năng của Site Builder với:

- Thiết lập theo hướng dẫn của agent linh hoạt hơn
- Tùy chọn tùy chỉnh theme tốt hơn
- Tích hợp với quy trình onboarding của Theme Builder
- Bộ nhớ site_brief bền vững cho các phiên làm việc sau này

## Nếu bạn đang sử dụng Site Builder Mode {#if-you-were-using-site-builder-mode}

### Trang web của bạn vẫn an toàn {#your-sites-are-safe}

- Các trang web hiện có được tạo bằng Site Builder mode vẫn hoạt động bình thường
- Không mất dữ liệu hay gián đoạn trang web
- Bạn vẫn có thể tiếp tục quản lý trang web của mình như bình thường

### Chuyển sang Setup Assistant Agent {#migrate-to-setup-assistant-agent}

Đối với việc thiết lập trang web mới hoặc thay đổi theme, hãy sử dụng Setup Assistant agent:

```
"Help me set up a new site"
```

hoặc

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent cung cấp chức năng tương tự nhưng với sự linh hoạt cao hơn.

## So sánh: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Tính năng | Site Builder (Đã loại bỏ) | Setup Assistant (Mới) |
|---------|----------------------|----------------------|
| Phương thức thiết lập | Form wizard | Hội thoại agent |
| Chọn theme | Các mẫu được xác định trước | Tạo tùy chỉnh |
| Tùy chỉnh | Tùy chọn hạn chế | Hệ thống thiết kế đầy đủ |
| Site brief | Không lưu trữ | Bộ nhớ bền vững |
| Các phiên sau | Thiết lập lại | Sử dụng site_brief đã lưu |
| Tính linh hoạt | Quy trình cố định | Hội thoại thích ứng |

## Cách chuyển sang Setup Assistant Agent {#migrating-to-setup-assistant-agent}

### Đối với trang web mới {#for-new-sites}

Thay vì sử dụng Site Builder mode:

1. Yêu cầu: "Help me set up a new site"
2. Setup Assistant agent sẽ hướng dẫn bạn qua các bước:
   - Mục đích và mục tiêu của trang web
   - Đối tượng mục tiêu
   - Nhận diện thương hiệu
   - Tạo theme
   - Cấu hình ban đầu

### Đối với trang web hiện có {#for-existing-sites}

Nếu bạn có một trang web hiện có được tạo bằng Site Builder mode:

1. Bạn vẫn có thể tiếp tục sử dụng nó như hiện tại
2. Để cập nhật theme, hãy yêu cầu: "Redesign my site"
3. Setup Assistant agent sẽ giúp bạn tạo một theme mới
4. Dữ liệu trang web của bạn vẫn được giữ nguyên

### Đối với việc thay đổi theme {#for-theme-changes}

Thay vì chọn theme bằng Site Builder mode:

1. Yêu cầu: "Change my theme"
2. Setup Assistant agent sẽ:
   - Hỏi về sở thích thiết kế của bạn
   - Tạo một theme tùy chỉnh
   - Kích hoạt nó trên trang web của bạn

## Sự khác biệt chính {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
1. Chọn một mẫu
2. Chọn một theme
3. Cấu hình các cài đặt cơ bản
4. Hoàn thành
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. Mô tả mục đích trang web của bạn
2. Xác định đối tượng mục tiêu
3. Chọn sở thích thiết kế
4. Agent tạo theme tùy chỉnh
5. Agent kích hoạt theme
6. Site brief được lưu cho các phiên sau
```

## Lợi ích của Setup Assistant Agent {#benefits-of-setup-assistant-agent}

### Linh hoạt hơn {#more-flexible}

- Mô tả trang web của bạn bằng ngôn ngữ tự nhiên
- Nhận các đề xuất tùy chỉnh
- Thích ứng với nhu cầu cụ thể của bạn

### Tùy chỉnh tốt hơn {#better-customization}

- Tạo theme tùy chỉnh
- Các quyết định về hệ thống thiết kế
- Các token thiết kế bền vững

### Bộ nhớ bền vững {#persistent-memory}

- site_brief của bạn được lưu trữ
- Các agent trong tương lai sẽ hiểu về trang web của bạn
- Không cần phải lặp lại thông tin thiết lập

### Quy trình làm việc tích hợp {#integrated-workflow}

- Quy trình onboarding Theme Builder
- Kỹ năng Design System Aesthetics
- Kiểm soát khả năng hiển thị (Ability Visibility controls)
- Tất cả hoạt động cùng nhau một cách liền mạch

## Khắc phục sự cố {#troubleshooting}

### Tôi không tìm thấy Site Builder mode {#i-cant-find-site-builder-mode}

Site Builder mode đã được loại bỏ. Thay vào đó, hãy sử dụng Setup Assistant agent:

```
"Help me set up a new site"
```

### Tôi muốn tái tạo một trang web từ Site Builder {#i-want-to-recreate-a-site-from-site-builder}

Bạn có thể tái tạo nó bằng Setup Assistant agent:

1. Yêu cầu: "Help me set up a new site"
2. Mô tả mục đích và thiết kế ban đầu của trang web
3. Agent sẽ tạo một theme tương tự
4. site_brief của bạn sẽ được lưu để tham khảo trong tương lai

### Trang web Site Builder hiện có của tôi không hoạt động {#my-existing-site-builder-site-isnt-working}

Các trang web hiện có được tạo bằng Site Builder mode vẫn tiếp tục hoạt động. Nếu bạn gặp sự cố:

1. Kiểm tra xem theme của bạn vẫn đang hoạt động hay không
2. Xác minh các plugin của bạn đã được bật
3. Kiểm tra nhật ký lỗi của WordPress
4. Liên hệ bộ phận hỗ trợ nếu sự cố vẫn tiếp diễn

### Tôi có thể tiếp tục sử dụng các mẫu Site Builder cũ không? {#can-i-still-use-my-old-site-builder-templates}

Các mẫu Site Builder không còn khả dụng. Tuy nhiên:

- Các trang web hiện có của bạn vẫn tiếp tục hoạt động
- Bạn có thể tái tạo các trang web tương tự bằng Setup Assistant agent
- Setup Assistant agent cung cấp nhiều tùy chọn tùy chỉnh hơn

## Các bước tiếp theo {#next-steps}

1. **Đối với trang web mới**: Sử dụng Setup Assistant agent
2. **Đối với trang web hiện có**: Tiếp tục sử dụng chúng như bình thường
3. **Đối với thay đổi theme**: Yêu cầu sự trợ giúp từ Setup Assistant agent
4. **Đối với tinh chỉnh thiết kế**: Sử dụng kỹ năng Design System Aesthetics

## Chủ đề liên quan {#related-topics}

- **Theme Builder Onboarding**: Thiết lập hướng dẫn cho các theme tùy chỉnh
- **Setup Assistant Agent**: Thiết lập trang web theo hướng dẫn của agent
- **Site Specification Skill**: Xác định mục tiêu và đối tượng của trang web
- **Design System Aesthetics Skill**: Tinh chỉnh nhận diện trực quan của trang web
