---
title: Nkwado Ụdị Tema
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Nkwado Tema Builder Abilities: Scaffold and Activate Block Themes {#theme-builder-abilities-scaffold-and-activate-block-themes}

Superdav AI Agent v1.12.0 na-akọrọ abụọ nke dị nche na-eme ka ị chụkọta (generate) na iji tema block custom direct from chat interface.

## Overview {#overview}

Abụọ ndị a bụ **scaffold-block-theme** na **activate-theme** na-eme ka agents na-agbaje:
- Chụkọta complete, ready-for-production block themes dari n'ebe ị chọrọ
- Iji activate themes na site ọrụ gị anọrọ anaghị eziokwu (manual intervention)
- Ịkọwa ihe dị mma nke visual identity mgbe ị chọpụta design decisions

## Scaffold Block Theme {#scaffold-block-theme}

Abụọ **scaffold-block-theme** na-eme ka new WordPress block theme ọhụrụ na-agbaje structure tema complete, nke nwere:

- `theme.json` configuration na design tokens
- Block template files maka layouts ndị dị nwere
- Custom block styles na variations
- Theme metadata na declarations support

### Ọ dị ka ị chọpụta (How to Invoke) {#how-to-invoke}

Na chat gị na Superdav AI Agent, ị ga ịbata chọrọ generation theme:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

Agent ahụ ga:
1. Na-agbaje ihe ndị ị chọrọ maka design n'ime kiliki (conversation)
2. Chụkọta structure theme complete
3. Kụrụ olu files tema na-akọrọ
4. Iji prepare theme anọrọ activate

### Output Ndị A Na-agbaje (Expected Output) {#expected-output}

Mgbe abụọ ahụ na-eme ka ọ dị mma, ị ga ị chọpụta:

- Confirmation na theme ahụ na-achụkọta (scaffolded) anọrọ
- Nama tema na ebe ya n'ime site
- Summary nke design tokens ndị na-agbaje (colors, typography, spacing)
- Status ready-to-activate

Output ọmụmụ:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Activate Theme {#activate-theme}

A khả năng **activate-theme** sẽ chuyển trang web của bạn sang một theme (giao diện) mới được tạo hoặc một theme đã có sẵn.

### Cách Kích Hoạt {#how-to-invoke-1}

Sau khi bạn tạo xong một theme, bạn có thể kích hoạt nó ngay lập tức:

```
"Kích hoạt theme Modern Agency"
```

Hoặc kích hoạt bất kỳ theme nào đang tồn tại:

```
"Chuyển sang theme Twentytwentyfour"
```

### Kết Quả Mong Đợi {#expected-output-1}

Khi việc kích hoạt thành công:

- Thông báo về theme đang được sử dụng
- Tên theme trước đó (để tham khảo)
- Địa chỉ trang web nơi theme đã được áp dụng
- Bất kỳ ghi chú thiết lập cụ thể nào của theme

Ví dụ về kết quả:
```
✓ Theme đã được kích hoạt thành công
  Theme đang dùng: Modern Agency
  Theme trước đó: Twentytwentyfour
  Đang hoạt động tại: https://yoursite.com
  Ghi chú: Kiểm tra trang chủ của bạn để xác nhận bố cục mới
```

## Quy Trình Làm Việc: Tạo và Kích Hoạt {#workflow-scaffold-and-activate}

Một quy trình làm việc thông thường kết hợp cả hai khả năng này lại với nhau:

1. **Yêu cầu tạo theme**: "Tạo một block theme cho trang đích SaaS của tôi"
2. **Agent tạo theme**: Nó sẽ tạo các file và các mã thiết kế (design tokens)
3. **Xem xét và chỉnh sửa**: Thảo luận về những thay đổi thiết kế nếu cần
4. **Kích hoạt**: "Kích hoạt theme ngay bây giờ"
5. **Xác minh**: Truy cập trang web của bạn để kiểm tra xem thiết kế mới đã được áp dụng chưa

## Design Tokens và Tùy Biến {#design-tokens-and-customization}

Các theme được tạo (scaffolded themes) sử dụng các design tokens của WordPress (thông qua `theme.json`) cho:

- **Màu sắc**: Bảng màu chính, phụ, điểm nhấn, trung tính
- **Kiểu chữ**: Các font chữ, kích thước, độ đậm nhạt, khoảng cách dòng
- **Khoảng cách**: Lề trong (padding), lề ngoài (margin), các thang khoảng cách (gap scales)
- **Viền**: Các mã bán kính và độ rộng của viền
- **Bóng đổ**: Các mức độ nâng cao (elevation levels)

Những tokens này được tập trung ở `theme.json`, giúp bạn dễ dàng điều chỉnh toàn bộ hệ thống thiết kế chỉ từ một file duy nhất.

## Hạn Chế và Lưu Ý {#limitations-and-notes}

- Themes na-akọ (scaffolded) nwere n'ime `/wp-content/themes/` ma ọ bụrụ na ha na-agba aka WordPress naming conventions.
- Activation (kọwa) na-agbaaka izin ndị dị mma n'ime site WordPress tusi.
- Code PHP custom na-akụkọ (themes) na-adị minim; jiji plugins maka ihe ndị dị nwere ike ịdị ọchịchị.
- Block themes na-agbanwe mgbe a na-WordPress 5.9 na ụbọchị ọwụ (later).

## Troubleshooting {#troubleshooting}

**Theme na-akpọ (doesn't appear) ọ bụrụ na ya na-akọ (scaffolding)**
- Jiji na-akọ directory theme na-agbaaka izin ndị dị mma.
- Jiji na-chek na `theme.json` na-agbaje JSON ọma.
- Jiji na-chek na onye a na-theme ahụ na-anọ n'ime anọ nwere ike ịdị (conflict) na-themes ndị dị.

**Activation na-akpọ (fails)**
- Jiji na-chek na ị na-enwe izin administrator.
- Jiji na-chek na directory theme na-agbaaka izin WordPress ị chere ya.
- Jiji na-chek logs error na WordPress maka mme ọkụ (details).

**Design tokens na-akpọ (not applying)**
- Jiji na-chek na syntax `theme.json` na-agbaje ọma.
- Jiji na-chete plugins caching ahụ.
- Jiji na-chek na version WordPress ị na-enwe na-agbaaka tokens ị na-agbanwe.

## Next Steps {#next-steps}

Ọ bụrụ na ị na-activate theme ahụ, ị ga-anọ ike:
- Ụdị **Design System Aesthetics skill** maka ịgba ọkụ typography, colors, na spacing.
- Jiji styles individual block-a n'ime WordPress block editor.
- Jiji CSS custom na file `style.css` na theme ahụ.
- Kọwa custom block templates maka page types ndị dị nwere ike.
