---
title: Nchịkọta Ọrụ Site Builder Removal
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Thông báo Gỡ bỏ Chế độ Xây dựng Trang (Site Builder Mode)

**Chế độ Site Builder đã bị gỡ bỏ trong Superdav AI Agent v1.12.0.** Nếu bạn đang sử dụng chế độ Site Builder, bạn nên chuyển sang dùng **Setup Assistant agent** để tạo theme và thiết lập trang web.

## Điều Gì Đã Xảy Ra?

### Chế độ Site Builder (Cũ)

Chế độ Site Builder là một giao diện dạng hướng dẫn (wizard-based interface) dùng cho các việc sau:

- Tạo trang web từ mẫu có sẵn
- Cấu hình các cài đặt cơ bản
- Chọn theme
- Thiết lập nội dung ban đầu

### Cái Gì Thay Thế Nó?

**Setup Assistant agent** giờ sẽ xử lý tất cả các chức năng của Site Builder với:

- Cách thiết lập linh hoạt hơn, được hướng dẫn bởi agent
- Các tùy chọn tùy chỉnh theme tốt hơn
- Tích hợp với quy trình giới thiệu Theme Builder (Theme Builder onboarding)
- Bộ nhớ `site_brief` bền vững cho các phiên làm việc sau này

## Nếu Bạn Đang Dùng Site Builder Mode

### Trang Web Của Bạn An Toàn

- Các trang web đã được tạo bằng Site Builder mode vẫn hoạt động bình thường
- Không bị mất dữ liệu hay gián đoạn trang web
- Bạn có thể tiếp tục quản lý các trang web của mình như trước

### Chuyển sang Setup Assistant Agent

Đối với việc thiết lập trang web mới hoặc thay đổi theme, hãy dùng Setup Assistant agent:

```
"Help me set up a new site"
```

hoặc

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent cung cấp chức năng tương tự nhưng linh hoạt hơn nhiều.

## So Sánh: Site Builder vs. Setup Assistant

| Tính năng | Site Builder (Đã Gỡ bỏ) | Setup Assistant (Mới) |
|---------|----------------------|----------------------|
| Phương pháp thiết lập | Biểu mẫu hướng dẫn (Wizard form) | Trò chuyện với Agent |
| Chọn Theme | Các mẫu có sẵn | Tạo tùy chỉnh theo ý muốn |
| Tùy chỉnh | Các lựa chọn giới hạn | Hệ thống thiết kế đầy đủ |
| Site brief | Không được lưu trữ | Bộ nhớ bền vững |
| Phiên làm việc sau | Thiết lập lại từ đầu | Sử dụng site_brief đã lưu |
| Tính linh hoạt | Quy trình cố định | Trò chuyện thích ứng |

## Chuyển sang Setup Assistant Agent

### Đối với Trang Web Mới

Thay vì sử dụng chế độ Xây dựng Trang (Site Builder mode):

1. Yêu cầu: "Giúp tôi thiết lập một trang mới"
2. Trợ lý Thiết lập (Setup Assistant agent) sẽ hướng dẫn bạn qua các bước sau:
   - Mục đích và mục tiêu của trang web
   - Đối tượng mục tiêu
   - Bản sắc thương hiệu
   - Tạo theme (giao diện)
   - Cấu hình ban đầu

### Đối với các Trang đã có

Nếu bạn đã có một trang web từ chế độ Site Builder mode:

1. Bạn vẫn có thể tiếp tục sử dụng nó như hiện tại
2. Để cập nhật theme, hãy yêu cầu: "Thiết kế lại trang của tôi"
3. Trợ lý Thiết lập sẽ giúp bạn tạo một theme mới
4. Dữ liệu trang web của bạn sẽ không thay đổi

### Đối với việc Thay đổi Theme

Thay vì chọn theme trong chế độ Site Builder mode:

1. Yêu cầu: "Thay đổi theme của tôi"
2. Trợ lý Thiết lập sẽ:
   - Hỏi về sở thích thiết kế của bạn
   - Tạo một theme tùy chỉnh
   - Kích hoạt nó trên trang web của bạn

## Những Điểm Khác Biệt Chính

### Chế độ Site Builder Mode

```
1. Chọn mẫu (template)
2. Chọn theme
3. Cấu hình các cài đặt cơ bản
4. Hoàn tất
```

### Trợ lý Thiết lập (Setup Assistant Agent)

```
1. Mô tả mục đích của trang web bạn
2. Xác định đối tượng mục tiêu của bạn
3. Chọn sở thích thiết kế
4. Agent tạo theme tùy chỉnh
5. Agent kích hoạt theme
6. Tóm tắt trang được lưu lại cho các phiên sau
```

## Lợi Ích của Trợ lý Thiết lập (Setup Assistant Agent)

### Linh hoạt hơn

- Mô tả trang web của bạn bằng ngôn ngữ tự nhiên
- Nhận các đề xuất tùy chỉnh
- Thích ứng với nhu cầu cụ thể của bạn

### Tùy biến tốt hơn

- Tạo theme tùy chỉnh
- Các quyết định về hệ thống thiết kế (Design system)
- Các mã thiết kế (design tokens) được lưu lại vĩnh viễn

### Bộ nhớ Bền vững

- tóm tắt trang web (`site_brief`) của bạn được lưu lại
- Các agent trong tương lai sẽ hiểu về trang web của bạn
- Không cần phải lặp lại thông tin thiết lập

### Quy trình Tích hợp

- Hướng dẫn xây dựng Theme Builder (Theme Builder onboarding)
- Kỹ năng Thẩm mỹ Hệ thống Thiết kế (Design System Aesthetics skill)
- Khả năng kiểm soát hiển thị (Visibility controls)
- Tất cả hoạt động liền mạch với nhau

## Khắc phục Sự cố

### Tôi không tìm thấy chế độ Site Builder mode

Chế độ Site Builder mode đã bị gỡ bỏ. Hãy sử dụng trợ lý Thiết lập (Setup Assistant agent) thay thế:

"Help me set up a new site"

### Ọ na-akụ site ọhụrụ

Ka ị chọrọ kọwa site ọhụrụ, ị nwere akụkọ a:

1. **Request (Nkwado):** "Help me set up a new site"
2. **Describe your original site's purpose and design (Kọwa ihe site ọhụrụ ya bụ na-eme ka na-eme ya)**
3. **The agent will generate a similar theme (Agent ahụ ga-agbanwe akụkọ dị mma dị ka site ọhụrụ)**
4. **Your site_brief will be stored for future reference (Site_brief cua gị ga-eji n'ụdị ọzọ)**

### Site Builder site onwe m na-eme ka ọ dịghị iji

Sites ndị bụ site Builder mode nke anọ ọnụ na-eme ka ọ dị. Ka ị nwere ihe ịdekpụrụ (issues):

1. **Check that your theme is still active (Keti na akụkọ gị na-eme ka ọ dị)**
2. **Verify your plugins are enabled (Keti na plugins gị na-eme ka ọ dị)**
3. **Check WordPress error logs (Keti na log ihe omume WordPress)**
4. **Contact support if problems persist (Keti na support ma ihe ndị a dịghị chọrọ)**

### Ọ ga-akụ template Site Builder m dị?

Template Site Builder bụ site anọ n'ụlọ ọma ya. Mana:

- **Sites gị onwe dị na-eme ka ọ dị**
- **Ị ga-agbanwe sites dị mma dịka site ọhụrụ na-eji Setup Assistant agent**
- **Setup Assistant agent ga-enye gị ike ịchekwa ihe ndị dị n'ụdị ọzọ**

## Ihe Gịnị Ga-akwụ (Next Steps)

1. **Ọ bụrụ na ị chọrọ site ọhụrụ**: Jiri Setup Assistant agent
2. **Ọ bụrụ na ị nwere site anọ m**: Ji ya dị ka ọ dị
3. **Ọ bụrụ na ị chọrọ ịgba ọkụ akụkọ (theme changes)**: Nkwado help dị ka Setup Assistant agent
4. **Ọ bụrụ na ị chọrọ ịgbakọta akụkọ (design refinement)**: Jiri Design System Aesthetics skill

## Ihe Ndị Na-agba (Related Topics)

- **Theme Builder Onboarding**: Ịgbagwa site ọhụrụ nke akụkọ dị mma
- **Setup Assistant Agent**: Setup site na-eji agent
- **Site Specification Skill**: Keti ihe ndị ị chọrọ n'site gị na onye ị chọrọ (audience)
- **Design System Aesthetics Skill**: Ọgbọọọ akụkọ gị dị mma
