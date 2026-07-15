---
title: Tạo Menu
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# Tạo Menu

Khả năng **Tạo Menu** cho phép tạo các menu điều hướng của WordPress, hỗ trợ nhãn điều hướng riêng biệt, tách biệt với tiêu đề trang.

## Tổng quan {#overview}

Khả năng này mở rộng chức năng tạo menu tiêu chuẩn bằng cách cho phép bạn chỉ định tham số `navigation_label`. Điều này giúp bạn tạo các menu mà nhãn hiển thị trên thanh điều hướng khác với tiêu đề trang, mang lại sự linh hoạt hơn trong cấu trúc trang web và trải nghiệm người dùng.

## Tham số {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Tên menu, ví dụ: `Primary Navigation` |
| `location` | string | No | Vị trí chủ đề để gán menu này, ví dụ: `primary` |
| `navigation_label` | string | No | Nhãn hiển thị trên điều hướng (khác với tiêu đề trang) |

## Giá trị trả về {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## Nhãn Điều Hướng so với Tiêu đề Trang {#navigation-label-vs-page-title}

Tham số `navigation_label` cho phép bạn tách tên menu nội bộ khỏi nhãn hiển thị cho người dùng:

- **`name`** — Định danh menu nội bộ được WordPress sử dụng (ví dụ: "Primary Navigation")
- **`navigation_label`** — Nhãn hiển thị cho khách truy cập trang web trên thanh điều hướng (ví dụ: "Main Menu")

Điều này hữu ích khi:
- Quy ước đặt tên nội bộ của bạn khác với nhãn hiển thị cho người dùng
- Bạn muốn nhãn điều hướng ngắn hơn so với bảng quản trị
- Bạn cần hỗ trợ nhiều ngôn ngữ với độ dài nhãn khác nhau
- Bạn đang xây dựng menu cho các khu vực hoặc nhóm người dùng cụ thể

## Ví dụ Sử dụng {#usage-examples}

### Ví dụ 1: Menu Đơn Giản với Nhãn Điều Hướng {#example-1-simple-menu-with-navigation-label}

**Prompt:**
```
Create a primary navigation menu called "Main Navigation" with the navigation label "Menu".
```

**Result:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### Ví dụ 2: Menu cho Vị Trí Chủ Đề Cụ Thể {#example-2-menu-for-specific-theme-location}

**Prompt:**
```
Create a footer menu called "Footer Links" with navigation label "Quick Links" and assign it to the footer location.
```

**Result:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## Tích hợp với Theme Builder {#integration-with-theme-builder}

Khi sử dụng Theme Builder, khả năng Tạo Menu sẽ:

1. Tự động phát hiện các vị trí menu chủ đề có sẵn
2. Tạo menu với nhãn điều hướng phù hợp cho thiết kế của bạn
3. Gán menu vào các vị trí chủ đề chính xác
4. Hỗ trợ thêm các mục menu sau khi tạo

## Khả năng Liên quan {#related-abilities}

- **`add_menu_item`** — Thêm mục vào menu hiện có
- **`update_menu`** — Đổi tên menu hoặc gán lại nó vào một vị trí chủ đề
- **`delete_menu`** — Xóa menu khỏi trang web của bạn

## Thực hành Tốt nhất {#best-practices}

- **Sử dụng nhãn điều hướng rõ ràng** — Giữ nhãn ngắn gọn và mô tả rõ ràng cho người dùng
- **Khớp với vị trí chủ đề** — Gán menu vào vị trí chủ đề chính xác để hiển thị đúng
- **Lập kế hoạch cấu trúc menu** — Quyết định cấu trúc menu của bạn trước khi tạo các mục
- **Kiểm tra khả năng đáp ứng** — Xác minh menu hiển thị đúng trên thiết bị di động
- **Bản địa hóa nhãn** — Sử dụng các nhãn điều hướng khác nhau cho các phiên bản ngôn ngữ khác nhau

## Hạn chế {#limitations}

- Nhãn điều hướng chỉ để hiển thị; `name` nội bộ vẫn được sử dụng để nhận dạng của WordPress
- Hỗ trợ chủ đề khác nhau; không phải tất cả các chủ đề đều hỗ trợ tất cả các vị trí menu
- Các mục menu phải được thêm riêng sau khi tạo menu
- Thay đổi nhãn điều hướng yêu cầu cập nhật menu

## Khả năng Liên quan {#related-abilities-1}

- [Generate Logo SVG](./generate-logo-svg.md) — tạo logo cho header trang web của bạn
- [Validate Palette Contrast](./validate-palette-contrast.md) — đảm bảo bảng màu dễ tiếp cận
