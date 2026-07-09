---
title: Quy trình Onboarding của Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Quy Trình Thiết Lập Theme Builder {#theme-builder-onboarding-flow}

Superdav AI Agent v1.12.0 giới thiệu **quy trình thiết lập Theme Builder** có hướng dẫn, giúp bạn tạo một theme block tùy chỉnh ngay trong lần thiết lập ban đầu. Tính năng này thay thế chế độ Site Builder cũ bằng một phương pháp tiếp cận linh hoạt hơn, có sự hỗ trợ của agent.

## Quy Trình Thiết Lập Theme Builder là gì? {#what-is-the-theme-builder-onboarding-flow}

Quy trình thiết lập Theme Builder là một trình hướng dẫn tương tác, giúp bạn:

- Hướng dẫn bạn qua các quyết định thiết kế (màu sắc, kiểu chữ, bố cục)
- Thu thập các sở thích về nhận diện thương hiệu của trang web bạn
- Tạo ra một theme block tùy chỉnh phù hợp với nhu cầu của bạn
- Tự động kích hoạt theme khi hoàn tất

Quy trình này được cung cấp bởi **agent Setup Assistant**, agent này sẽ đặt các câu hỏi làm rõ và xây dựng theme của bạn dần dần.

## Bắt Đầu Quy Trình Thiết Lập Theme Builder {#starting-the-theme-builder-onboarding}

### Thiết Lập Lần Đầu {#first-run-setup}

Khi bạn lần đầu tiên khởi chạy Superdav AI Agent trên một cài đặt WordPress mới, bạn sẽ thấy:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Chọn **"Build a custom theme"** (Tạo theme tùy chỉnh) để bắt đầu quy trình thiết lập Theme Builder.

### Kích Hoạt Thủ Công {#manual-activation}

Bạn cũng có thể bắt đầu quy trình thiết lập Theme Builder bất cứ lúc nào bằng cách yêu cầu:

```
"Start the Theme Builder onboarding"
```

hoặc

```
"Help me create a custom theme"
```

## Các Bước Thiết Lập {#the-onboarding-steps}

### Bước 1: Chọn Chế Độ {#step-1-mode-selection}

Agent Setup Assistant sẽ hỏi bạn về sở thích của mình:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Chế độ Guided (Có hướng dẫn)** được khuyến nghị cho hầu hết người dùng; agent sẽ đưa ra các đề xuất thiết kế dựa trên ngành nghề và mục tiêu của bạn.

### Bước 2: Thông Số Trang Web {#step-2-site-specification}

Bạn sẽ được hỏi về trang web của mình:

- **Mục đích trang web**: Thương mại điện tử, blog, portfolio, SaaS, v.v.
- **Đối tượng mục tiêu**: Khách truy cập của bạn là ai?
- **Màu sắc thương hiệu**: Màu chính và màu phụ (hoặc "Tôi chưa chắc")
- **Giọng văn**: Chuyên nghiệp, sáng tạo, vui tươi, tối giản, v.v.

Thông tin này sẽ được lưu trữ trong bộ nhớ **site_brief** của bạn, nơi các agent tham chiếu trong các phiên làm việc sau này.

### Bước 3: Quyết Định Hệ Thống Thiết Kế (Design System) {#step-3-design-system-decisions}

Agent sẽ hướng dẫn bạn chọn các token thiết kế:

- **Kiểu chữ (Typography)**: Họ phông chữ (serif, sans-serif, monospace) và thang kích thước
- **Bảng màu (Color palette)**: Màu chính, màu phụ, màu nhấn và màu trung tính
- **Khoảng cách (Spacing)**: Bố cục gọn gàng, tiêu chuẩn hay rộng rãi
- **Chuyển động (Motion)**: Hiệu ứng hoạt hình và chuyển tiếp (nếu cần)

### Bước 4: Tạo Theme {#step-4-theme-generation}

Agent Setup Assistant sẽ tạo khung (scaffold) cho theme block tùy chỉnh của bạn với:

- `theme.json` chứa tất cả các token thiết kế của bạn
- Các mẫu block cho các bố cục phổ biến (trang chủ, blog, liên hệ)
- Các kiểu block tùy chỉnh phù hợp với hệ thống thiết kế của bạn
- Siêu dữ liệu theme và các khai báo hỗ trợ WordPress

### Bước 5: Kích Hoạt và Xác Minh {#step-5-activation-and-verification}

Theme sẽ được tự động kích hoạt, và bạn sẽ thấy:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

Sau đó, bạn có thể truy cập trang web của mình để xác minh theme đã hiển thị đúng cách hay chưa.

## Thông Số Trang Web và Bộ Nhớ site_brief {#site-specification-and-sitebrief-memory}

Trong quá trình thiết lập, agent sẽ thu thập thông số trang web của bạn vào danh mục bộ nhớ **site_brief**. Điều này bao gồm:

- Mục đích và mục tiêu của trang web
- Đối tượng mục tiêu
- Màu sắc và giọng văn thương hiệu
- Các sở thích thiết kế
- Cấu trúc nội dung

### Tại sao site_brief lại quan trọng {#why-sitebrief-matters}

Trong các phiên làm việc sau, agent sẽ tham chiếu site_brief của bạn để:

- Duy trì tính nhất quán về thiết kế qua các thay đổi
- Đề xuất các tính năng phù hợp với mục đích trang web của bạn
- Cung cấp các đề xuất có ngữ cảnh
- Tránh việc phải hỏi lại các câu hỏi thiết lập

### Xem site_brief của bạn {#viewing-your-sitebrief}

Bạn có thể yêu cầu agent:

```
"Show me my site brief"
```

hoặc

```
"What do you know about my site?"
```

Agent sẽ hiển thị thông số site đã được lưu trữ của bạn.

## Tùy Chỉnh Sau Khi Thiết Lập {#customizing-after-onboarding}

Sau khi quy trình thiết lập Theme Builder hoàn tất, bạn có thể:

### Sử Dụng Kỹ Năng Thẩm Mỹ Hệ Thống Thiết Kế (Design System Aesthetics Skill) {#use-the-design-system-aesthetics-skill}

Yêu cầu tinh chỉnh thiết kế:

```
"Refine the typography to be more modern"
```

hoặc

```
"Adjust the color palette to be warmer"
```

**Kỹ năng Design System Aesthetics** sẽ hướng dẫn bạn thực hiện các cập nhật thiết kế mục tiêu.

### Chỉnh Sửa theme.json Trực Tiếp {#edit-themejson-directly}

Đối với người dùng nâng cao, hãy chỉnh sửa `/wp-content/themes/[theme-name]/theme.json` để điều chỉnh:

- Các token màu
- Các thang kiểu chữ
- Các giá trị khoảng cách
- Định nghĩa đường viền và bóng đổ

### Tạo Mẫu Block Tùy Chỉnh {#create-custom-block-templates}

Sử dụng trình soạn thảo block của WordPress để tạo các mẫu tùy chỉnh cho:

- Bố cục trang chủ
- Trang bài viết blog
- Trang sản phẩm
- Biểu mẫu liên hệ

## So Sánh: Cũ và Mới {#comparison-old-vs-new-onboarding}

| Tính năng | Site Builder (Cũ) | Theme Builder (Mới) |
|---------|----------------|---------------------|
| Phương thức thiết lập | Dựa trên form Wizard | Hội thoại có hướng dẫn từ Agent |
| Tạo theme | Các mẫu giới hạn | Khung (scaffolding) tùy chỉnh |
| Token thiết kế | Nhập thủ công | Quyết định có hướng dẫn |
| Tính linh hoạt | Các tùy chọn cố định | Có thể tùy chỉnh |
| Cập nhật tương lai | Không được tham chiếu | Được lưu trữ trong site_brief |

## Khắc Phục Sự Cố {#troubleshooting}

**Quy trình thiết lập không hoàn thành**
- Khởi động lại quy trình: "Start the Theme Builder onboarding"
- Kiểm tra xem cài đặt WordPress của bạn đã được cập nhật chưa
- Xác minh rằng agent Setup Assistant đã được bật

**site_brief của tôi không được sử dụng**
- Xác nhận rằng agent có quyền truy cập vào bộ nhớ
- Yêu cầu agent "recall my site brief" (nhắc lại site brief của tôi)
- Kiểm tra xem bộ nhớ đã được bật trong cài đặt của bạn chưa

**Theme được tạo không khớp với sở thích của tôi**
- Sử dụng kỹ năng Design System Aesthetics để tinh chỉnh
- Yêu cầu agent "regenerate the theme with [specific changes]" (tạo lại theme với [thay đổi cụ thể])
- Chỉnh sửa theme.json trực tiếp để kiểm soát chính xác

## Các Bước Tiếp Theo {#next-steps}

Sau khi hoàn thành quy trình thiết lập Theme Builder:

1. **Xác minh trang web của bạn**: Truy cập trang web để xem theme mới
2. **Tinh chỉnh thiết kế**: Sử dụng kỹ năng Design System Aesthetics để điều chỉnh
3. **Thêm nội dung**: Bắt đầu xây dựng nội dung trang web của bạn
4. **Khám phá khả năng**: Tìm hiểu về các khả năng agent khác như scaffold-block-theme và activate-theme
