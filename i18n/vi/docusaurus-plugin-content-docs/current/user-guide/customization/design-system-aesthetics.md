---
title: Kỹ năng thẩm mỹ hệ thống thiết kế
sidebar_position: 21
_i18n_hash: 3fef8415909ed14038f38e9eda3a4545
---
# Thiết lập tính thẩm mỹ cho Hệ thống Thiết kế

**Kỹ năng Thiết lập tính thẩm mỹ cho Hệ thống Thiết kế** là một phương pháp hướng dẫn giúp bạn tinh chỉnh nhận diện trực quan của trang web. Nó giúp bạn đưa ra các quyết định nhất quán về kiểu chữ (typography), màu sắc, khoảng cách (spacing), và các giá trị định nghĩa chuyển động (motion tokens) – những yếu tố tạo nên hệ thống thiết kế của bạn.

## Thiết lập tính thẩm mỹ cho Hệ thống Thiết kế là gì?

Thiết lập tính thẩm mỹ cho Hệ thống Thiết kế là một kỹ năng có cấu trúc, bao gồm các phần sau:

- **Kiểu chữ (Typography)**: Các họ phông chữ, kích thước, độ đậm, và chiều cao dòng.
- **Màu sắc (Color)**: Bảng màu chính (primary), phụ (secondary), nhấn (accent), và trung tính (neutral).
- **Khoảng cách (Spacing)**: Các đơn vị đệm (padding), lề (margin), và khoảng trống (gap).
- **Viền (Borders)**: Các giá trị định nghĩa bán kính (radius) và độ rộng.
- **Đổ bóng (Shadows)**: Các giá trị định nghĩa độ cao và chiều sâu.
- **Chuyển động (Motion)**: Các hiệu ứng hoạt hình (animations) và chuyển tiếp (transitions).

Những quyết định này được lưu trữ trong file `theme.json` của theme, tạo nên một hệ thống trực quan gắn kết.

## Tại sao nên sử dụng Thiết lập tính thẩm mỹ cho Hệ thống Thiết kế?

### Tính nhất quán (Consistency)

Một hệ thống thiết kế đảm bảo:

- Tất cả văn bản sử dụng cùng một hệ thống kiểu chữ.
- Màu sắc được sử dụng nhất quán trên toàn bộ trang web.
- Khoảng cách tuân theo một quy luật dễ đoán.
- Các hoạt ảnh mang lại cảm giác đồng bộ.

### Hiệu suất (Efficiency)

Thay vì phải đưa ra quyết định thiết kế từng trang một, bạn chỉ cần:

- Định nghĩa các tokens một lần.
- Áp dụng chúng ở mọi nơi.
- Cập nhật toàn cục bằng cách thay đổi một giá trị duy nhất.

### Tính linh hoạt (Flexibility)

Bạn có thể:

- Điều chỉnh toàn bộ hệ thống thiết kế của mình một cách nhanh chóng.
- Thử nghiệm với các phong cách thẩm mỹ khác nhau.
- Duy trì tính nhất quán của thương hiệu ngay cả khi hệ thống đang phát triển.

## Kích hoạt Kỹ năng Thiết lập tính thẩm mỹ cho Hệ thống Thiết kế

### Kích hoạt thủ công

Bạn có thể bắt đầu kỹ năng này bất cứ lúc nào bằng cách nhập:

```
"Help me refine my design system"
```

hoặc

```
"Let's improve my site's aesthetics"
```

hoặc

```
"Guide me through design system decisions"
```

### Gợi ý tự động

Các Agent có thể gợi ý sử dụng kỹ năng này khi bạn:

- Yêu cầu thay đổi thiết kế.
- Yêu cầu thiết kế lại theo phong cách "hiện đại" hoặc "chuyên nghiệp".
- Muốn cải thiện tính nhất quán về mặt thị giác.
- Chuẩn bị ra mắt trang web.

## Quy trình Thiết lập tính thẩm mỹ cho Hệ thống Thiết kế

### Bước 1: Kiểu chữ (Typography)

Agent sẽ hỏi bạn về các lựa chọn phông chữ:

```
Bạn thích phong cách kiểu chữ nào?
- Serif (truyền thống, thanh lịch)
- Sans-serif (hiện đại, sạch sẽ)
- Monospace (kỹ thuật, tập trung vào code)

Đối với phông chữ tiêu đề (heading):
- Bạn muốn một phông chữ tiêu đề riêng biệt, hay dùng chung với văn bản nội dung?
- Sở thích: đậm, thanh lịch, vui tươi, tối giản?

Đối với phông chữ nội dung (body):
- Khả năng đọc là yếu tố quan trọng. Bạn thích:
  - Văn bản lớn hơn, thoáng hơn
  - Văn bản nhỏ gọn, hiệu quả
  - Kích thước tiêu chuẩn
```

Sau đó, Agent sẽ xác định:

- **Phông chữ tiêu đề (Heading font)**: Phông chữ chính cho các tiêu đề và tiêu đề phụ.
- **Phông chữ nội dung (Body font)**: Phông chữ cho các đoạn văn và nội dung chính.
- **Phông chữ monospace (Monospace font)**: Phông chữ cho code và nội dung kỹ thuật.
- **Thang kích thước (Size scale)**: Các kích thước định sẵn (small, base, large, XL, v.v.).
- **Thang độ đậm (Weight scale)**: Các độ đậm của phông chữ (regular, medium, bold, v.v.).
- **Chiều cao dòng (Line height)**: Khoảng cách giữa các dòng để dễ đọc.

### Bước 2: Bảng màu (Color Palette)

```
Hãy cùng định nghĩa bảng màu của bạn.

Màu chính (Primary color - màu thương hiệu):
- Hiện tại: [hiển thị màu hiện có]
- Thay đổi thành: [bộ chọn màu hoặc mã hex]

Màu phụ (Secondary color - màu hỗ trợ):
- Hiện tại: [hiển thị màu hiện có]
- Thay đổi thành: [bộ chọn màu hoặc mã hex]

Màu nhấn (Accent color - dùng cho highlight và CTA):
- Hiện tại: [hiển thị màu hiện có]
- Thay đổi thành: [bộ chọn màu hoặc mã hex]

Bảng màu trung tính (Neutral palette - màu xám cho văn bản, viền, nền):
- Nhạt (Light): [màu]
- Trung bình (Medium): [màu]
- Đậm (Dark): [màu]
```

Agent sẽ tạo ra một bảng màu hoàn chỉnh bao gồm:

- Màu chính, màu phụ và màu nhấn.
- Các màu xám trung tính (nhạt, trung bình, đậm).
- Các màu ngữ nghĩa (success, warning, error).
- Các trạng thái hover và active.

### Bước 3: Khoảng cách (Spacing)

```
Bạn muốn không gian "thở" bao nhiêu?

Sở thích về thang khoảng cách:
- Compact (chặt chẽ, bố cục hiệu quả)
- Normal (khoảng cách cân bằng)
- Spacious (khoảng trắng rộng rãi)

Điều này ảnh hưởng đến:
- Padding bên trong nút và thẻ (card)
- Margin giữa các phần (section)
- Gap giữa các mục trong lưới (grid items)
```

Agent sẽ định nghĩa các tokens khoảng cách:

- Đơn vị cơ sở (Base unit - thường là 4px hoặc 8px).
- Thang đo: xs, sm, md, lg, xl, 2xl.
- Các giá trị cụ thể cho padding, margin, gap.

### Bước 4: Viền và Đổ bóng (Borders and Shadows)

```
Độ sâu và độ sắc nét trực quan:

Sở thích về bán kính viền (Border radius):
- Sharp (không bo tròn)
- Subtle (bán kính nhỏ)
- Rounded (bán kính vừa)
- Very rounded (bán kính lớn)

Độ sâu đổ bóng (Shadow depth):
- Flat (không đổ bóng)
- Subtle (đổ bóng nhẹ)
- Pronounced (đổ bóng mạnh)
```

Agent sẽ tạo ra:

- Các tokens bán kính viền (cho nút, thẻ, input).
- Các tokens đổ bóng cho các mức độ cao.
- Các tokens độ rộng viền.

### Bước 5: Chuyển động và Hoạt ảnh (Motion and Animation)

```
Trang web của bạn nên mang lại cảm giác như thế nào khi tương tác?

Sở thích về hoạt ảnh:
- Minimal (không hoạt ảnh)
- Subtle (chuyển tiếp nhẹ nhàng)
- Playful (hoạt ảnh dễ nhận thấy)

Các hoạt ảnh cụ thể:
- Chuyển trang: fade, slide, hay không?
- Hover nút: scale, đổi màu, hay cả hai?
- Trạng thái tải: spinner, skeleton, hay progress bar?
```

Agent sẽ định nghĩa:

- Thời lượng chuyển tiếp (Transition durations - nhanh, bình thường, chậm).
- Hàm làm mượt (Easing functions - ease-in, ease-out, ease-in-out).
- Các keyframe hoạt ảnh cho các tương tác phổ biến.

## Áp dụng Thiết lập tính thẩm mỹ cho Hệ thống Thiết kế

### Tự động áp dụng

Sau khi bạn hoàn thành kỹ năng, Agent sẽ:

1. Cập nhật `theme.json` của theme với tất cả các tokens.
2. Áp dụng hệ thống thiết kế cho theme đang hoạt động của bạn.
3. Tái tạo các kiểu block (block styles) để khớp với hệ thống mới.
4. Kích hoạt theme đã được cập nhật.

### Áp dụng thủ công

Bạn cũng có thể chỉnh sửa `theme.json` trực tiếp:

```json
{
  "version": 3,
  "settings": {
    "color": {
      "palette": [
        {
          "color": "#0066CC",
          "name": "Primary",
          "slug": "primary"
        }
      ]
    },
    "typography": {
      "fontFamilies": [
        {
          "fontFamily": "Inter, sans-serif",
          "name": "Body",
          "slug": "body"
        }
      ]
    },
    "spacing": {
      "spacingSizes": [
        {
          "size": "0.5rem",
          "name": "Small",
          "slug": "sm"
        }
      ]
    }
  }
}
```

## Xem Hệ thống Thiết kế của bạn

### Hỏi Agent

```
"Show me my design system"
```

hoặc

```
"What are my current design tokens?"
```

Agent sẽ hiển thị kiểu chữ, màu sắc, khoảng cách và các tokens khác của bạn.

### Xem theme.json

Mở `/wp-content/themes/[theme-name]/theme.json` trong trình soạn thảo văn bản để xem các định nghĩa token thô.

## Cập nhật Hệ thống Thiết kế của bạn

### Cập nhật nhanh

Yêu cầu Agent thực hiện các thay đổi cụ thể:

```
"Make the primary color darker"
```

hoặc

```
"Increase the spacing scale by 20%"
```

hoặc

```
"Change the heading font to a serif"
```

### Thiết kế lại toàn bộ (Full Redesign)

Chạy lại kỹ năng Thiết lập tính thẩm mỹ cho Hệ thống Thiết kế:

```
"Let's redesign my entire design system"
```

Điều này sẽ hướng dẫn bạn qua tất cả các quyết định một lần nữa, bắt đầu từ các giá trị hiện tại của bạn.

### Cập nhật một phần (Partial Updates)

Chỉ cập nhật các khía cạnh cụ thể:

```
"Just update the color palette, keep everything else"
```

## Các Thực hành Tốt nhất về Hệ thống Thiết kế

### Tính nhất quán

- Luôn sử dụng cùng một tokens ở mọi nơi.
- Không tạo ra các màu sắc hoặc kích thước chỉ dùng một lần.
- Tham chiếu đến tokens thay vì mã hóa cứng (hardcoding) các giá trị.

### Đặt tên (Naming)

Sử dụng các tên rõ ràng, mang tính ngữ nghĩa:

- ✓ `primary`, `secondary`, `accent`
- ✗ `blue`, `color-1`, `main`

- ✓ `heading-lg`, `body-sm`
- ✗ `font-size-24`, `text-large`

### Khả năng mở rộng (Scalability)

Thiết kế hệ thống của bạn để có thể mở rộng:

- Sử dụng các đơn vị tương đối (rem, em) thay vì pixel.
- Tạo các thang đo (scales - xs, sm, md, lg, xl) thay vì các giá trị tùy ý.
- Lên kế hoạch cho các bổ sung trong tương lai.

### Tài liệu hóa (Documentation)

Tài liệu hóa hệ thống thiết kế của bạn:

- Lý do bạn chọn các màu sắc cụ thể.
- Khi nào nên sử dụng từng token.
- Các trường hợp ngoại lệ và tình huống đặc biệt.

## Các Mẫu Thiết kế Hệ thống Phổ biến

### Tối giản Hiện đại (Modern Minimalist)

- Kiểu chữ Sans-serif (Inter, Helvetica).
- Bảng màu giới hạn (2-3 màu).
- Khoảng cách rộng rãi.
- Đổ bóng tinh tế.
- Hoạt ảnh mượt mà, nhanh.

### Ấm áp và Thân thiện (Warm and Friendly)

- Kết hợp Serif và Sans-serif.
- Bảng màu ấm (cam, xám ấm).
- Góc bo tròn.
- Đổ bóng mềm mại.
- Hoạt ảnh vui tươi.

### Doanh nghiệp Chuyên nghiệp (Professional Corporate)

- Sans-serif sạch sẽ (Roboto, Open Sans).
- Bảng màu trung tính với màu nhấn.
- Khoảng cách có cấu trúc.
- Đổ bóng tối thiểu.
- Chuyển tiếp tinh tế.

### Sáng tạo và Mạnh mẽ (Creative and Bold)

- Kiểu chữ đặc trưng.
- Bảng màu đậm.
- Khoảng cách đa dạng.
- Đổ bóng mạnh mẽ.
- Hoạt ảnh dễ nhận thấy.

## Khắc phục sự cố (Troubleshooting)

**Các thay đổi hệ thống thiết kế của tôi không hiển thị**
- Xóa bộ nhớ cache của trình duyệt.
- Xây dựng lại trang web nếu bạn đang sử dụng static generator.
- Kiểm tra xem `theme.json` có phải là JSON hợp lệ không.
- Xác minh rằng theme đang hoạt động.

**Màu sắc trông khác nhau trên các trang khác nhau**
- Kiểm tra CSS xung đột trong các plugin.
- Xác minh rằng tất cả các trang đều sử dụng cùng một theme.
- Xóa bất kỳ plugin caching nào.

**Tôi muốn quay lại hệ thống thiết kế trước đó**
- Hỏi Agent: "Show me my design system history" (Hiển thị lịch sử hệ thống thiết kế của tôi).
- Chỉnh sửa thủ công `theme.json` về các giá trị trước đó.
- Chạy lại kỹ năng với các lựa chọn khác.

## Các Bước Tiếp theo

Sau khi xác định hệ thống thiết kế của bạn:

1. **Xem lại trang web**: Truy cập trang web của bạn để xem thiết kế mới.
2. **Tinh chỉnh thêm**: Thực hiện các điều chỉnh bằng cách sử dụng lại kỹ năng này.
3. **Tạo mẫu (templates)**: Xây dựng các mẫu block tùy chỉnh bằng các tokens thiết kế của bạn.
4. **Tài liệu hóa**: Chia sẻ hệ thống thiết kế của bạn với các thành viên trong nhóm.
