---
title: Tạo Logo SVG
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# Tạo Logo SVG

Tính năng **Tạo Logo SVG** cho phép Theme Builder tạo và nhúng các logo SVG tùy chỉnh trực tiếp vào trang WordPress của bạn, kèm theo quá trình làm sạch (sanitisation) tự động và an toàn namespace.

## Tổng quan {#overview}

Tính năng này tạo ra các logo đồ họa vector có thể mở rộng (SVG) dựa trên định hướng thương hiệu và sở thích thiết kế của trang web bạn. Các SVG được tạo ra sẽ được tự động làm sạch để đảm bảo chúng an toàn khi sử dụng trong WordPress mà vẫn giữ được tính toàn vẹn về mặt hình ảnh.

## Tham số {#parameters}

| Tham số | Kiểu | Bắt buộc | Mô tả |
|-----------|------|----------|-------------|
| `site_name` | string | Yes | Tên trang web dùng để tạo logo |
| `style` | string | Yes | Phong cách thiết kế (ví dụ: "hiện đại", "cổ điển", "tối giản", "vui tươi") |
| `colors` | array | No | Mảng các mã màu hex để sử dụng trong logo (ví dụ: `["#678233", "#ffffff"]`) |
| `width` | number | No | Chiều rộng SVG bằng pixel (mặc định: 200) |
| `height` | number | No | Chiều cao SVG bằng pixel (mặc định: 200) |
| `include_text` | boolean | No | Xác định xem có bao gồm tên trang web dưới dạng văn bản trong logo hay không (mặc định: true) |

## Định dạng đầu ra {#output-format}

Tính năng này trả về một chuỗi SVG với cấu trúc sau:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## Hành vi làm sạch SVG {#svg-sanitisation-behaviour}

Các SVG được tạo ra sẽ trải qua quá trình làm sạch tự động và an toàn namespace để:

- **Loại bỏ các thuộc tính không an toàn** — loại bỏ các trình xử lý sự kiện, script và các thuộc tính tiềm ẩn nguy hiểm khác
- **Giữ lại các namespace** — duy trì các namespace SVG (xmlns, xlink) để hiển thị đúng cách
- **Xác thực cấu trúc** — đảm bảo SVG tuân thủ các tiêu chuẩn W3C
- **Mã hóa các thực thể** — mã hóa các ký tự đặc biệt trong nội dung văn bản một cách chính xác
- **Loại bỏ tham chiếu bên ngoài** — loại bỏ các stylesheet và tham chiếu hình ảnh bên ngoài

Điều này đảm bảo SVG an toàn để nhúng trực tiếp vào WordPress mà không cần yêu cầu làm sạch bổ sung.

## Ví dụ sử dụng {#usage-example}

**Lời nhắc (Prompt):**
```
Generate a modern logo for my tech startup called "CloudSync" using blue and white colors.
```

**Kết quả:**
Tính năng này tạo ra một logo SVG mà:
- Kết hợp tên trang web "CloudSync"
- Sử dụng bảng màu xanh dương và trắng đã chỉ định
- Tuân theo các nguyên tắc thiết kế hiện đại
- Được tự động làm sạch và sẵn sàng để sử dụng

## Tích hợp với Theme Builder {#integration-with-theme-builder}

Khi sử dụng tính năng chọn định hướng thiết kế của Theme Builder, tính năng Tạo Logo SVG:

1. Phân tích định hướng thiết kế và bảng màu của bạn.
2. Tạo một logo SVG tùy chỉnh phù hợp với sở thích của bạn.
3. Tự động nhúng logo vào khu vực header/thương hiệu của trang web bạn.
4. Lưu SVG dưới dạng logo tùy chỉnh trong media của WordPress.

## Các phương pháp tốt nhất {#best-practices}

- **Cung cấp sở thích phong cách rõ ràng** — mô tả phong cách thiết kế bạn muốn (hiện đại, cổ điển, vui tươi, v.v.).
- **Chỉ định màu sắc** — bao gồm các màu thương hiệu của bạn để đảm bảo tính nhất quán.
- **Kiểm tra hiển thị** — xác minh logo hiển thị chính xác trên các kích thước màn hình khác nhau.
- **Tùy chỉnh thêm** — sử dụng các công cụ tùy chỉnh logo của WordPress để điều chỉnh kích thước và vị trí.

## Hạn chế {#limitations}

- Logo SVG được tạo dưới dạng đồ họa tĩnh (không phải hoạt hình).
- Các logo phức tạp với nhiều yếu tố có thể yêu cầu tinh chỉnh thủ công.
- Không hỗ trợ phông chữ tùy chỉnh; văn bản sử dụng phông chữ hệ thống.
- Kích thước quá lớn hoặc quá nhỏ có thể ảnh hưởng đến chất lượng.

## Các tính năng liên quan {#related-abilities}

- [Validate Palette Contrast](./validate-palette-contrast.md) — kiểm tra độ tương phản màu sắc để đảm bảo khả năng tiếp cận
- [Create Menu](./create-menu.md) — tạo menu điều hướng cho trang web của bạn
