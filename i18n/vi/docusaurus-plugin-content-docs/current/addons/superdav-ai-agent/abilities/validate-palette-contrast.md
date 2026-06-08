---
title: Kiểm tra độ tương phản bảng màu
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# Kiểm tra Độ Tương Phản Bảng Màu

Tính năng **Kiểm tra Độ Tương Phản Bảng Màu** sẽ kiểm tra các cặp màu trong bảng màu thiết kế của bạn để đảm bảo tuân thủ WCAG (Hướng dẫn về Khả năng Tiếp cận Nội dung Web) trước khi áp dụng chúng vào theme của bạn.

## Tổng quan

Tính năng này đảm bảo bảng màu của trang web bạn đáp ứng các tiêu chuẩn về khả năng tiếp cận bằng cách kiểm tra tỷ lệ tương phản giữa màu chữ và màu nền. Điều này giúp ngăn chặn các sự kết hợp màu sắc có thể gây khó khăn cho người dùng bị suy giảm thị lực khi đọc.

## Định dạng Đầu vào

Tính năng này nhận một bảng màu dưới dạng đầu vào:

```json
{
  "colors": [
    {
      "name": "primary",
      "hex": "#678233"
    },
    {
      "name": "text",
      "hex": "#ffffff"
    },
    {
      "name": "background",
      "hex": "#f5f5f5"
    }
  ],
  "wcag_level": "AA"
}
```

### Tham số

| Tham số | Kiểu dữ liệu | Bắt buộc | Mô tả |
|-----------|------|----------|-------------|
| `colors` | array | Có | Mảng các đối tượng màu sắc với thuộc tính `name` và `hex` |
| `wcag_level` | string | Không | Mức độ tuân thủ WCAG: "A", "AA" (mặc định), hoặc "AAA" |
| `pairs_to_check` | array | Không | Các cặp màu cụ thể cần kiểm tra (ví dụ: `["primary-text", "background-text"]`) |

## Các Mức WCAG Được Kiểm Tra

Tính năng này kiểm tra tỷ lệ tương phản theo tiêu chuẩn WCAG:

| Level | Normal Text | Large Text | Minimum Ratio |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **Normal Text** — văn bản nhỏ hơn 18pt (hoặc 14pt in đậm)
- **Large Text** — văn bản 18pt trở lên (hoặc 14pt in đậm trở lên)

## Schema Đầu ra

Tính năng này trả về một báo cáo kiểm tra chi tiết:

```json
{
  "compliant": true,
  "wcag_level": "AA",
  "pairs": [
    {
      "pair": "primary-text",
      "color1": "#678233",
      "color2": "#ffffff",
      "contrast_ratio": 5.2,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": false,
      "status": "pass"
    },
    {
      "pair": "background-text",
      "color1": "#f5f5f5",
      "color2": "#333333",
      "contrast_ratio": 12.1,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": true,
      "status": "pass"
    }
  ],
  "summary": {
    "total_pairs": 2,
    "passing": 2,
    "failing": 0,
    "recommendations": []
  }
}
```

### Các Trường Đầu ra

| Field | Kiểu dữ liệu | Mô tả |
|-------|------|-------------|
| `compliant` | boolean | Cho biết toàn bộ bảng màu có đáp ứng mức WCAG đã chỉ định hay không |
| `wcag_level` | string | Mức WCAG đã được kiểm tra |
| `pairs` | array | Kết quả chi tiết cho từng cặp màu |
| `contrast_ratio` | number | Tỷ lệ tương phản được tính toán (từ 1:1 đến 21:1) |
| `status` | string | "pass" (đạt) hoặc "fail" (không đạt) cho mỗi cặp |
| `recommendations` | array | Các gợi ý để cải thiện các cặp màu không đạt |

## Ví dụ Sử dụng

**Prompt:**
```
Check if my color palette meets WCAG AA standards. I have primary color #678233, text color #ffffff, and background #f5f5f5.
```

**Kết quả:**
Tính năng sẽ kiểm tra tất cả các sự kết hợp màu sắc và trả về:
- ✅ Primary + Text: Tỷ lệ 5.2:1 (đạt WCAG AA)
- ✅ Background + Text: Tỷ lệ 12.1:1 (đạt WCAG AAA)
- Tổng thể: Tuân thủ WCAG AA

## Tích hợp với Theme Builder

Khi sử dụng tính năng chọn hướng thiết kế (design-direction selection) của Theme Builder, tính năng Kiểm tra Độ Tương Phản Bảng Màu sẽ:

1. Phân tích bảng màu bạn đã chọn
2. Kiểm tra tất cả các sự kết hợp giữa văn bản và nền
3. Xác thực dựa trên mức WCAG bạn đã chọn
4. Cung cấp các khuyến nghị cho các cặp màu không tuân thủ
5. Ngăn chặn việc áp dụng các bảng màu không thể tiếp cận

## Thực hành Tốt nhất

- **Bắt đầu với mức AA** — WCAG AA là tiêu chuẩn cho hầu hết các trang web
- **Kiểm tra trước khi áp dụng** — hãy xác thực bảng màu của bạn trước khi cam kết với một thiết kế
- **Kiểm tra tất cả các sự kết hợp** — đảm bảo văn bản, liên kết và các thành phần giao diện người dùng đều đáp ứng tiêu chuẩn
- **Xem xét sở thích người dùng** — một số người dùng có thể có độ nhạy cảm màu sắc bổ sung
- **Sử dụng công cụ kiểm tra tương phản** — kết hợp tính năng này với các công cụ của trình duyệt để xác minh

## Các Cặp Màu Không Đạt và Khuyến Nghị

Nếu một cặp màu không đạt yêu cầu, tính năng sẽ cung cấp các khuyến nghị:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "Làm sáng màu chữ lên #ffffff (tỷ lệ sẽ là 5.2:1)",
    "Làm tối màu nền xuống #556b2f (tỷ lệ sẽ là 4.8:1)",
    "Sử dụng một màu primary khác như #4a6b1f (tỷ lệ sẽ là 6.1:1)"
  ]
}
```

## Các Tính năng Liên quan

- [Generate Logo SVG](./generate-logo-svg.md) — tạo logo bằng bảng màu đã được xác thực của bạn
- [Create Menu](./create-menu.md) — xây dựng điều hướng với các màu sắc dễ tiếp cận
