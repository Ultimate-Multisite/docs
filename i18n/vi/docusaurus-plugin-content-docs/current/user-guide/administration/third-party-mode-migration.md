---
title: Di chuyển Chế độ Bên thứ Ba
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Di chuyển sang Chế độ Bên thứ Ba

Superdav AI Agent v1.12.0 đã thay đổi cách xử lý các khả năng (abilities) bên thứ ba. **Chế độ bên thứ ba hiện mặc định là tự động (auto)**, cho phép tích hợp API Abilities gốc của WordPress trên WordPress 7.0+ mà không cần cấu hình thủ công.

## Thay đổi gì? {#what-changed}

### Trước v1.12.0 {#before-v1120}

Các khả năng bên thứ ba yêu cầu cấu hình thủ công:

- Bạn phải bật rõ ràng "chế độ bên thứ ba"
- Các khả năng được tải từ một sổ đăng ký (registry) tùy chỉnh
- Tích hợp với WordPress Abilities API là tùy chọn
- Chế độ cũ (Legacy mode) là mặc định

### Sau v1.12.0 {#after-v1120}

Các khả năng bên thứ ba hoạt động tự động:

- Chế độ bên thứ ba mặc định là "auto"
- Các khả năng tích hợp gốc với WordPress Abilities API
- Không cần cấu hình thủ công trên WordPress 7.0+
- Chế độ cũ vẫn khả dụng cho các phiên bản WordPress cũ hơn

## Ai bị ảnh hưởng? {#who-is-affected}

### Cài đặt mới (WordPress 7.0+) {#new-installations-wordpress-70}

**Không cần hành động nào.** Chế độ bên thứ ba tự động được đặt thành "auto", và các khả năng hoạt động ngay lập tức.

### Cài đặt hiện có {#existing-installations}

**Cài đặt của bạn được bảo toàn.** Nếu bạn đang sử dụng:

- **Chế độ cũ (Legacy mode)**: Bạn vẫn ở chế độ cũ (không thay đổi)
- **Chế độ bên thứ ba thủ công (Manual third-party mode)**: Bạn vẫn ở chế độ thủ công (không thay đổi)
- **Chế độ tự động (Auto mode)**: Bạn tiếp tục với chế độ tự động (không thay đổi)

### Phiên bản WordPress trước 7.0 {#wordpress-versions-before-70}

**Chế độ cũ vẫn khả dụng.** Nếu bạn đang dùng WordPress 6.x hoặc cũ hơn:

- Chế độ bên thứ ba mặc định là "legacy"
- Bạn có thể bật chế độ bên thứ ba thủ công nếu muốn
- Nâng cấp lên WordPress 7.0+ để sử dụng Abilities API gốc

## Hiểu về các chế độ {#understanding-the-modes}

### Chế độ tự động (Auto Mode) (Mặc định mới) {#auto-mode-new-default}

**Chế độ tự động** sử dụng tích hợp Abilities API gốc của WordPress:

- Các khả năng được đăng ký thông qua các hook của WordPress
- Tương thích hoàn toàn với Abilities API của WordPress 7.0+
- Tự động phát hiện các khả năng bên thứ ba
- Không cần cấu hình thủ công

**Khi nào nên dùng**: WordPress 7.0+ với các khả năng bên thứ ba

### Chế độ thủ công (Manual Mode) {#manual-mode}

**Chế độ thủ công** yêu cầu cấu hình rõ ràng:

- Bạn chỉ định những khả năng bên thứ ba nào cần tải
- Hữu ích cho việc kiểm thử hoặc tải khả năng chọn lọc
- Yêu cầu chỉnh sửa các tệp cấu hình
- Kiểm soát cao hơn, nhưng thiết lập phức tạp hơn

**Khi nào nên dùng**: Kiểm thử, tải khả năng chọn lọc, hoặc cấu hình tùy chỉnh

### Chế độ cũ (Legacy Mode) {#legacy-mode}

**Chế độ cũ** sử dụng hệ thống khả năng bên thứ ba cũ:

- Sổ đăng ký khả năng tùy chỉnh (không phải WordPress Abilities API)
- Tương thích ngược với các phiên bản WordPress cũ hơn
- Không tích hợp gốc với WordPress
- Đã lỗi thời nhưng vẫn được hỗ trợ

**Khi nào nên dùng**: WordPress 6.x hoặc cũ hơn, hoặc khi bạn cần tương thích với hệ thống cũ

## Kiểm tra chế độ hiện tại của bạn {#checking-your-current-mode}

### Qua Bảng điều khiển Admin {#via-admin-panel}

1. Truy cập **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Tìm cài đặt **Third-Party Mode**
3. Bạn sẽ thấy chế độ hiện tại và các tùy chọn để thay đổi nó

### Qua Code {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', hoặc 'legacy'
```

## Thay đổi chế độ của bạn {#changing-your-mode}

### Chuyển sang Chế độ tự động (Auto Mode) {#switch-to-auto-mode}

Nếu bạn đang dùng WordPress 7.0+ và muốn sử dụng chế độ tự động:

1. Truy cập **Superdav AI Agent** → **Settings**
2. Tìm **Third-Party Mode**
3. Chọn **Auto (WordPress Abilities API)**
4. Nhấn **Save**

Superdav AI Agent sẽ tự động phát hiện và đăng ký các khả năng bên thứ ba.

### Chuyển sang Chế độ thủ công (Manual Mode) {#switch-to-manual-mode}

Nếu bạn muốn tự kiểm soát những khả năng nào được tải:

1. Truy cập **Superdav AI Agent** → **Settings**
2. Tìm **Third-Party Mode**
3. Chọn **Manual**
4. Nhấn **Save**
5. Chỉnh sửa tệp cấu hình của bạn để chỉ định những khả năng cần tải

### Chuyển sang Chế độ cũ (Legacy Mode) {#switch-to-legacy-mode}

Nếu bạn cần tương thích với hệ thống cũ:

1. Truy cập **Superdav AI Agent** → **Settings**
2. Tìm **Third-Party Mode**
3. Chọn **Legacy**
4. Nhấn **Save**

## Lợi ích của Chế độ tự động (Auto Mode) {#benefits-of-auto-mode}

### Phát hiện tự động (Automatic Discovery) {#automatic-discovery}

Các khả năng được tự động phát hiện từ:

- Các plugin đã cài đặt
- Chủ đề (theme) đang hoạt động
- Các plugin must-use
- Các plugin drop-in

Không cần đăng ký thủ công.

### Tích hợp gốc (Native Integration) {#native-integration}

Các khả năng tích hợp với WordPress Abilities API:

- Nhất quán với lõi WordPress
- Hoạt động với admin của WordPress
- Tương thích với các plugin khác sử dụng Abilities API
- Chuẩn bị cho tương lai khi WordPress phát triển

### Quản lý đơn giản hóa (Simplified Management) {#simplified-management}

- Không cần chỉnh sửa tệp cấu hình
- Không cần đăng ký khả năng thủ công
- Các điều khiển Khả năng hiển thị (Ability Visibility) hoạt động tự động
- Thông báo admin sẽ cảnh báo bạn về các khả năng chưa được phân loại

### Hiệu suất tốt hơn (Better Performance) {#better-performance}

- Các khả năng được lưu vào bộ nhớ đệm (cached)
- Tải lười (Lazy-loaded) khi cần
- Tối ưu hóa cho WordPress 7.0+

## Lộ trình di chuyển (Migration Path) {#migration-path}

### Nếu bạn đang dùng WordPress 6.x {#if-youre-on-wordpress-6x}

1. **Nâng cấp lên WordPress 7.0+** (khi sẵn sàng)
2. **Cập nhật Superdav AI Agent** lên v1.12.0+
3. **Thay đổi chế độ bên thứ ba thành Auto** (tùy chọn; chế độ cũ vẫn hoạt động)
4. **Xem lại khả năng hiển thị** để đảm bảo quyền truy cập phù hợp

### Nếu bạn đang dùng WordPress 7.0+ {#if-youre-on-wordpress-70}

1. **Cập nhật Superdav AI Agent** lên v1.12.0+
2. **Xác minh chế độ bên thứ ba được đặt là Auto** (mặc định là như vậy)
3. **Xem lại khả năng hiển thị** để đảm bảo quyền truy cập phù hợp
4. **Kiểm thử các khả năng bên thứ ba** để xác nhận chúng hoạt động

## Khắc phục sự cố (Troubleshooting) {#troubleshooting}

### Các khả năng không tải trong chế độ tự động {#abilities-arent-loading-in-auto-mode}

- Xác minh bạn đang dùng WordPress 7.0+
- Kiểm tra xem chế độ bên thứ ba đã được đặt là "Auto" chưa
- Xác minh plugin cung cấp khả năng đang hoạt động
- Kiểm tra nhật ký lỗi của WordPress để tìm lỗi đăng ký

### Tôi muốn giữ chế độ cũ (legacy mode) {#i-want-to-keep-legacy-mode}

- Truy cập **Settings** → **Third-Party Mode**
- Chọn **Legacy**
- Nhấn **Save**
- Chế độ cũ sẽ tiếp tục hoạt động

### Các khả năng tùy chỉnh của tôi không hiển thị {#my-custom-abilities-arent-showing}

- Xác minh chúng được đăng ký qua các hook của WordPress
- Kiểm tra xem chúng có triển khai Abilities API đúng cách không
- Xem lại nhật ký lỗi của WordPress
- Sử dụng trang admin **Ability Visibility** để xem tất cả các khả năng đã đăng ký

### Tôi nhận được thông báo "unclassified ability" {#im-getting-unclassified-ability-notices}

- Điều này là bình thường đối với các khả năng bên thứ ba mới
- Xem lại và phân loại chúng trong thông báo admin
- Xem **Ability Visibility** để biết chi tiết về việc phân loại

## Tương thích ngược (Backward Compatibility) {#backward-compatibility}

### Cấu hình hiện có {#existing-configurations}

Nếu bạn có các cấu hình khả năng bên thứ ba hiện có:

- **Chế độ cũ (Legacy mode)**: Cấu hình của bạn vẫn tiếp tục hoạt động
- **Chế độ thủ công (Manual mode)**: Cấu hình của bạn vẫn tiếp tục hoạt động
- **Chế độ tự động (Auto mode)**: Cấu hình của bạn sẽ bị bỏ qua (chế độ tự động sẽ ghi đè)

Để giữ cấu hình tùy chỉnh của bạn, hãy ở chế độ Thủ công hoặc Chế độ cũ.

### Lịch trình lỗi thời (Deprecation Timeline) {#deprecation-timeline}

- **v1.12.0**: Chế độ cũ và Thủ công vẫn được hỗ trợ đầy đủ
- **v1.13.0+**: Chế độ cũ có thể hiển thị thông báo lỗi thời
- **v2.0.0**: Chế độ cũ có thể bị loại bỏ (Sẽ thông báo sau)

## Thực hành tốt nhất (Best Practices) {#best-practices}

### Đối với cài đặt mới {#for-new-installations}

- Sử dụng chế độ tự động (vì nó là mặc định)
- Để Superdav AI Agent tự động phát hiện các khả năng
- Sử dụng Ability Visibility để kiểm soát quyền truy cập

### Đối với cài đặt hiện có {#for-existing-installations}

- Nâng cấp lên WordPress 7.0+ khi có thể
- Chuyển sang chế độ tự động để quản lý đơn giản hơn
- Xem lại và phân loại các khả năng bằng Ability Visibility

### Đối với khả năng tùy chỉnh {#for-custom-abilities}

- Đăng ký khả năng qua các hook của WordPress (Abilities API)
- Tránh sử dụng sổ đăng ký khả năng tùy chỉnh
- Kiểm thử trên WordPress 7.0+ với chế độ tự động

## Các bước tiếp theo {#next-steps}

1. **Kiểm tra phiên bản WordPress của bạn**: Xác minh bạn đang dùng 7.0+ để sử dụng chế độ tự động
2. **Xem lại chế độ bên thứ ba của bạn**: Truy cập Settings và kiểm tra chế độ hiện tại
3. **Cập nhật nếu cần**: Chuyển sang chế độ tự động nếu bạn đang dùng WordPress 7.0+
4. **Phân loại khả năng**: Xem lại và phân loại bất kỳ khả năng nào chưa được phân loại
5. **Kiểm thử**: Xác minh các khả năng bên thứ ba của bạn hoạt động chính xác

## Chủ đề liên quan {#related-topics}

- **Ability Visibility**: Kiểm soát những khả năng nào được hiển thị ở đâu
- **WordPress Abilities API**: Tìm hiểu về việc đăng ký khả năng gốc của WordPress
- **Third-Party Ability Development**: Tạo các khả năng hoạt động với chế độ tự động
