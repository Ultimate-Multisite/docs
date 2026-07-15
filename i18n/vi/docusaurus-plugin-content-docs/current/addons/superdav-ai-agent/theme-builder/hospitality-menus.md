---
title: Thực đơn Khách sạn
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Menu Ẩm Thực

Tính năng **Menu Ẩm Thực** cho phép Theme Builder tạo và nhúng các trang menu đồ ăn và thức uống có cấu trúc trực tiếp vào trang WordPress của bạn.

## Tổng quan {#overview}

Giờ đây, Theme Builder có thể tạo các trang menu chuyên nghiệp, có cấu trúc dành cho các doanh nghiệp dịch vụ ăn uống, bao gồm nhà hàng, quán cà phê, quán bar và dịch vụ tiệc. Các menu này được tích hợp hoàn toàn vào thiết kế của trang web và dễ dàng cập nhật cũng như quản lý.

## Các Loại Hình Dịch Vụ Được Hỗ Trợ {#supported-hospitality-types}

- **Nhà hàng** — menu ăn uống đầy đủ dịch vụ
- **Quán cà phê** — menu cà phê và đồ ăn nhẹ
- **Quán bar và Lounge** — menu đồ uống và món khai vị
- **Tiệm bánh** — menu bánh ngọt và bánh mì
- **Dịch vụ tiệc (Catering)** — các lựa chọn menu sự kiện
- **Xe bán đồ ăn (Food Trucks)** — menu dịch vụ ăn uống di động
- **Nhà sản xuất bia và rượu vang** — menu đồ uống kèm mô tả

## Cấu Trúc Menu {#menu-structure}

### Danh Mục Menu {#menu-categories}

Các menu được tổ chức thành các danh mục:

- **Khai vị (Appetizers)** — món khai vị và các món nhỏ
- **Món chính (Entrees)** — các món ăn chính
- **Món ăn kèm (Sides)** — đồ ăn kèm và rau củ
- **Tráng miệng (Desserts)** — các món ngọt
- **Đồ uống (Beverages)** — các loại thức uống (có và không cồn)
- **Đặc biệt (Specials)** — món đặc biệt hàng ngày hoặc theo mùa

### Định Dạng Mục Menu {#menu-item-format}

Mỗi mục menu bao gồm:

```json
{
  "name": "Cá hồi nướng",
  "description": "Cá hồi Đại Tây Dương tươi với sốt bơ chanh",
  "price": "$24.95",
  "dietary_info": ["Không Gluten", "Giàu Protein"],
  "allergens": ["Cá"],
  "availability": "Hàng ngày"
}
```

#### Trường Thông Tin Mục {#item-fields}

| Trường | Kiểu | Mô tả |
|-------|------|-------------|
| `name` | string | Tên món ăn hoặc đồ uống |
| `description` | string | Mô tả chi tiết về món ăn |
| `price` | string | Giá tiền (định dạng tiền tệ) |
| `dietary_info` | array | Thuộc tính ăn kiêng (Vegan, Không Gluten, v.v.) |
| `allergens` | array | Các chất gây dị ứng phổ biến (Hạt, Hàu, v.v.) |
| `availability` | string | Thời gian có sẵn (Hàng ngày, Theo mùa, v.v.) |

## Tạo Menu Ẩm Thực {#creating-hospitality-menus}

### Bước 1: Cung cấp thông tin Menu {#step-1-provide-menu-information}

Hãy cho Theme Builder biết về menu của bạn:

```
Tạo menu nhà hàng Ý cho nhà hàng của tôi với các món khai vị,
món pasta, món chính và món tráng miệng. Bao gồm giá và mô tả.
```

### Bước 2: Theme Builder Tạo Menu {#step-2-theme-builder-generates-menu}

Theme Builder sẽ:

1. Tạo một trang menu có cấu trúc
2. Thiết kế sao cho phù hợp với chủ đề (theme) của trang web bạn
3. Sắp xếp các mục vào các danh mục
4. Định dạng giá và mô tả
5. Thêm thông tin ăn kiêng và chất gây dị ứng

### Bước 3: Xem lại và Tùy chỉnh {#step-3-review-and-customize}

Bạn có thể:

1. Chỉnh sửa các mục menu và giá cả
2. Thêm hoặc xóa danh mục
3. Sắp xếp lại thứ tự các mục trong danh mục
4. Cập nhật mô tả và thông tin ăn kiêng
5. Điều chỉnh kiểu dáng và bố cục

## Tùy Chọn Hiển Thị Menu {#menu-display-options}

### Trang Menu Đầy Đủ {#full-menu-page}

Một trang chuyên dụng hiển thị toàn bộ menu của bạn:

- Được tổ chức theo danh mục
- Có thể tìm kiếm và lọc
- Bố cục thân thiện với việc in ấn
- Thiết kế đáp ứng trên thiết bị di động

### Widget Menu {#menu-widget}

Nhúng các phần menu vào các trang khác:

- Các món nổi bật trên trang chủ
- Các món đặc biệt hàng ngày trên thanh bên (sidebar)
- Menu đồ uống trên trang bar
- Trưng bày món tráng miệng ở chân trang (footer)

### Menu PDF {#menu-pdf}

Tạo một menu PDF có thể tải xuống:

- Định dạng chuyên nghiệp
- Chất lượng sẵn sàng để in
- Bao gồm hình ảnh và mô tả
- Dễ dàng chia sẻ và gửi qua email

## Thông Tin Ăn Kiêng và Chất Gây Dị Ứng {#dietary-and-allergen-information}

### Thuộc Tính Ăn Kiêng {#dietary-attributes}

Đánh dấu các mục bằng thông tin ăn kiêng:

- **Vegan** — không sản phẩm từ động vật
- **Vegetarian** — không thịt
- **Gluten-Free** — an toàn cho người mắc bệnh Celiac
- **Dairy-Free** — không sản phẩm từ sữa
- **Nut-Free** — không hạt cây hoặc đậu phộng
- **Low-Carb** — ít carbohydrate
- **High-Protein** — giàu protein

### Cảnh Báo Chất Gây Dị Ứng {#allergen-warnings}

Bao gồm các chất gây dị ứng phổ biến:

- **Nuts** — hạt cây và đậu phộng
- **Shellfish** — giáp xác và động vật thân mềm
- **Fish** — tất cả các loài cá
- **Dairy** — sữa và các sản phẩm từ sữa
- **Eggs** — trứng gà
- **Soy** — sản phẩm từ đậu nành
- **Gluten** — lúa mì và các ngũ cốc chứa gluten
- **Sesame** — hạt và dầu mè

## Quản Lý Menu {#menu-management}

### Cập Nhật Giá Cả {#updating-prices}

Dễ dàng cập nhật giá menu:

1. Điều hướng đến trang menu
2. Nhấp vào "Edit Menu" (Chỉnh sửa Menu)
3. Cập nhật giá cho các mục
4. Lưu thay đổi
5. Thay đổi sẽ xuất hiện ngay lập tức trên trang web của bạn

### Thêm Các Mục Theo Mùa {#adding-seasonal-items}

Tạo các biến thể menu theo mùa:

1. Tạo một phiên bản menu mới
2. Thêm các mục theo mùa
3. Đánh dấu các mục là "Seasonal" (Theo mùa)
4. Lên lịch ngày có sẵn
5. Tự động hiển thị trong mùa

### Quản Lý Các Món Đặc Biệt {#managing-specials}

Hiển thị các món đặc biệt hàng ngày hoặc hàng tuần:

1. Tạo danh mục "Specials" (Đặc biệt)
2. Thêm các mục kèm ngày có sẵn
3. Làm nổi bật các món đặc biệt trên trang chủ
4. Cập nhật hàng ngày hoặc hàng tuần
5. Lưu trữ các món đặc biệt cũ

## Tích Hợp với Theme Builder {#integration-with-theme-builder}

Khi sử dụng Theme Builder cho các trang web dịch vụ ăn uống:

1. **Tự động phát hiện menu** — xác định xem bạn có phải là doanh nghiệp đồ ăn/thức uống hay không
2. **Tạo trang menu** — tạo các trang menu chuyên nghiệp
3. **Khớp thiết kế** — menu phù hợp với chủ đề của trang web bạn
4. **Tối ưu hóa di động** — menu hiển thị đẹp mắt trên điện thoại
5. **Tối ưu hóa SEO** — menu thân thiện với công cụ tìm kiếm

## Thực Hành Tốt Nhất {#best-practices}

### Thiết Kế Menu {#menu-design}

- **Tổ chức rõ ràng** — cấu trúc danh mục logic
- **Mô tả dễ đọc** — hấp dẫn và cung cấp đầy đủ thông tin
- **Giá cả nhất quán** — tiền tệ và định dạng rõ ràng
- **Ảnh chuyên nghiệp** — hình ảnh món ăn chất lượng cao
- **Khoảng trắng** — không làm trang bị quá tải

### Nội Dung {#content}

- **Mô tả chính xác** — mô tả các mục một cách chính xác
- **Làm nổi bật món đặc biệt** — làm cho các món đặc biệt nổi bật
- **Bao gồm chất gây dị ứng** — luôn liệt kê các chất gây dị ứng
- **Cập nhật thường xuyên** — giữ giá và các mục luôn mới nhất
- **Sử dụng ngôn ngữ hấp dẫn** — làm cho các món ăn nghe ngon miệng

### Khả Năng Tiếp Cận {#accessibility}

- **Phông chữ dễ đọc** — sử dụng các kiểu chữ rõ ràng, dễ đọc
- **Độ tương phản đủ** — đảm bảo văn bản dễ đọc
- **Nhãn ăn kiêng** — đánh dấu rõ ràng các lựa chọn ăn kiêng
- **Cảnh báo dị ứng** — hiển thị các chất gây dị ứng một cách nổi bật
- **Thân thiện với di động** — kiểm tra trên tất cả các thiết bị

## Ví Dụ {#examples}

### Cấu Trúc Menu Nhà Hàng {#restaurant-menu-structure}

```
Khai vị
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese Salad

Món Pasta
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Món Chính
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Tráng miệng
├── Tiramisu
├── Panna Cotta
└── Gelato Selection
```

### Cấu Trúc Menu Quán Cà Phê {#cafe-menu-structure}

```
Cà Phê
├── Espresso
├── Cappuccino
└── Latte

Bánh Ngọt
├── Croissants
├── Muffins
└── Scones

Bánh Sandwich
├── Caprese Panini
├── Smoked Turkey Club
└── Vegetarian Wrap
```

## Tính Năng Liên Quan {#related-features}

- [Create Menu](../abilities/create-menu.md) — tạo menu điều hướng
- [Design Direction](./design-direction.md) — tùy chỉnh thiết kế trang web của bạn
- [Discovery Interview](./discovery-interview.md) — lập kế hoạch cấu trúc trang web của bạn
