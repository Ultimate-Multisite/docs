---
title: Nkwupụta Mode Migration
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Chuyema Migraçao Modu Third-Party

Superdav AI Agent v1.12.0 inye gị na ị chọrọ ahụ dị ka ọ dị. **Modu third-party (third-party mode) onwe ya bụ "auto" (tụrụ),** nke na-agbanwe ike ịnweta WordPress Abilities API native na WordPress 7.0+ anọ n'ime, ebe a na-agbanwe ihe ndị ahụ ọ dịghị na-akwado.

## Ihe Ndị Na-agbanwe? {#what-changed}

### Ma ọ bụ v1.12.0 {#before-v1120}

Ihe ndị third-party abilities chọrọ ịnweta manual:

- Ịrụ ọrụ ịgbanwe "third-party mode" (modu third-party)
- Ihe ndị ahụ na-agbanwe n'ime registry ọhụrụ
- Integration na WordPress Abilities API bụ ihe dịghị na-akwado
- Modu legacy bụ ihe dịghị na-akwado

### Ma ọ bụ v1.12.0 {#after-v1120}

Ihe ndị third-party abilities na-agbanwe onwe ya:

- Third-party mode onwe ya bụ "auto" (tụrụ)
- Ihe ndị ahụ na-agbanwe native na WordPress Abilities API
- Ebe a na-agbanwe ihe dịghị na-akwado na WordPress 7.0+
- Modu legacy bụ ihe dịghị na-akwado anọ n'ime WordPress versions ọhụrụ

## Ndị Na-agbanwe? {#who-is-affected}

### New Installations (WordPress 7.0+) {#new-installations-wordpress-70}

**Ebe a na-agbanwe ihe anyị ga-kọrọ.** Third-party mode onwe ya bụ "auto" (tụrụ) anọ n'ime, na ihe ndị ahụ na-agbanwe dị ka ọ dịghị na-akwado.

### Existing Installations {#existing-installations}

**Settings gị na-agbanwe.** Ma ị bụ:

- **Legacy mode**: Ị na-agbanwe legacy mode (ahụghị ihe anyị ga-kọrọ)
- **Manual third-party mode**: Ị na-agbanwe manual mode (ahụghị ihe anyị ga-kọrọ)
- **Auto mode**: Ị na-agbanwe auto mode (ahụghị ihe anyị ga-kọrọ)

### WordPress Versions Before 7.0 {#wordpress-versions-before-70}

**Legacy mode bụ ihe dịghị na-akwado anọ n'ime.** Ma ị na WordPress 6.x ma ọ bụ ndị dị kawo:

- Third-party mode onwe ya bụ "legacy" (dịghị na-akwado)
- Ị ga-anọchịrị ịgbanwe third-party mode manual ma ị chọrọ
- Upgrade na WordPress 7.0+ iji ri ịnweta Abilities API native

## Ọ dị mma ịghọta Modu Ahụ {#understanding-the-modes}

### Auto Mode (New Default) {#auto-mode-new-default}

**Auto mode** na-agbanwe integration native na WordPress Abilities API:

- Ihe ndị ahụ na-agbanwe via WordPress hooks
- Compatibility ọ bụla na WordPress 7.0+ Abilities API
- Discovery automatic na ihe ndị third-party abilities dịghị na-akwado
- Ahụghị ihe anyị ga-kọrọ

**Khi nào nên dùng**: WordPress 7.0+ với các khả năng của bên thứ ba

### Chế độ Thủ công (Manual Mode) {#manual-mode}

**Chế độ thủ công** cần bạn phải thiết lập rõ ràng:

- Bạn sẽ chỉ định những khả năng của bên thứ ba nào cần tải
- Rất hữu ích để kiểm tra hoặc tải chọn lọc các khả năng
- Cần chỉnh sửa các file cấu hình
- Kiểm soát nhiều hơn, nhưng cũng tốn công cài đặt hơn

**Khi nào nên dùng**: Để kiểm tra, tải chọn lọc khả năng, hoặc khi bạn có cấu hình tùy chỉnh riêng

### Chế độ Di sản (Legacy Mode) {#legacy-mode}

**Chế độ di sản** sử dụng hệ thống khả năng của bên thứ ba cũ:

- Đăng ký khả năng tùy chỉnh (không phải WordPress Abilities API)
- Tương thích ngược với các phiên bản WordPress cũ hơn
- Không có tích hợp gốc với WordPress
- Đã lỗi thời nhưng vẫn được hỗ trợ

**Khi nào nên dùng**: Với WordPress 6.x trở xuống, hoặc khi bạn cần tương thích di sản

## Kiểm tra Chế độ Hiện tại của Bạn {#checking-your-current-mode}

### Qua Bảng Quản trị (Admin Panel) {#via-admin-panel}

1. Truy cập **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Tìm cài đặt **Third-Party Mode**
3. Bạn sẽ thấy chế độ hiện tại của mình và các tùy chọn để thay đổi nó

### Qua Mã (Code) {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', hoặc 'legacy'
```

## Thay đổi Chế độ Của Bạn {#changing-your-mode}

### Chuyển sang Chế độ Tự động (Auto Mode) {#switch-to-auto-mode}

Nếu bạn đang dùng WordPress 7.0+ và muốn sử dụng chế độ tự động:

1. Truy cập **Superdav AI Agent** → **Settings**
2. Tìm **Third-Party Mode**
3. Chọn **Auto (WordPress Abilities API)**
4. Nhấn **Save**

Superdav AI Agent sẽ tự động phát hiện và đăng ký các khả năng của bên thứ ba.

### Chuyển sang Chế độ Thủ công (Manual Mode) {#switch-to-manual-mode}

Nếu bạn muốn kiểm soát thủ công những khả năng nào được tải:

1. Truy cập **Superdav AI Agent** → **Settings**
2. Tìm **Third-Party Mode**
3. Chọn **Manual**
4. Nhấn **Save**
5. Chỉnh sửa file cấu hình của bạn để chỉ định những khả năng nào cần tải

### Chuyển sang Chế độ Di sản (Legacy Mode) {#switch-to-legacy-mode}

Nếu bạn cần tương thích di sản:

1. Chị đi đến **Superdav AI Agent** → **Settings**
2. Tìm **Third-Party Mode** (Chế độ Bên thứ Ba)
3. Chọn **Legacy** (Di sản)
4. Nhấn **Save** (Lưu)

## Lợi ích của Auto Mode (Chế độ Tự động) {#benefits-of-auto-mode}

### Khám phá Tự động {#automatic-discovery}

Các khả năng sẽ được tự động tìm thấy từ:

- Các plugin đã cài đặt
- Theme đang hoạt động
- Các plugin bắt buộc phải dùng
- Các plugin drop-in

Không cần đăng ký thủ công.

### Tích hợp Gốc (Native Integration) {#native-integration}

Các khả năng tích hợp với WordPress Abilities API:

- Đồng bộ với lõi WordPress
- Hoạt động với admin của WordPress
- Tương thích với các plugin khác sử dụng Abilities API
- Sẽ hoạt động tốt trong tương lai khi WordPress phát triển

### Quản lý Đơn giản hơn {#simplified-management}

- Không cần chỉnh sửa các file cấu hình
- Không cần đăng ký khả năng thủ công
- Các tùy chọn hiển thị Khả năng (Ability Visibility) sẽ tự động hoạt động
- Thông báo của Admin sẽ cảnh báo bạn về các khả năng chưa được phân loại

### Hiệu suất Tốt hơn {#better-performance}

- Các khả năng được lưu vào bộ nhớ đệm (cached)
- Được tải lười biếng theo yêu cầu (Lazy-loaded on demand)
- Được tối ưu hóa cho WordPress 7.0+

## Lộ trình Di chuyển (Migration Path) {#migration-path}

### Nếu bạn đang dùng WordPress 6.x {#if-youre-on-wordpress-6x}

1. **Nâng cấp lên WordPress 7.0+** (khi sẵn sàng)
2. **Cập nhật Superdav AI Agent** lên v1.12.0+
3. **Thay đổi chế độ bên thứ ba sang Auto** (tùy chọn; chế độ legacy vẫn hoạt động)
4. **Xem lại khả năng hiển thị** để đảm bảo kiểm soát truy cập đúng cách

### Nếu bạn đang dùng WordPress 7.0+ {#if-youre-on-wordpress-70}

1. **Cập nhật Superdav AI Agent** lên v1.12.0+
2. **Kiểm tra chế độ bên thứ ba đã được đặt là Auto** (nó sẽ mặc định như vậy)
3. **Xem lại khả năng hiển thị** để đảm bảo kiểm soát truy cập đúng cách
4. **Thử các khả năng bên thứ ba** để xác nhận chúng hoạt động

## Khắc phục Sự cố (Troubleshooting) {#troubleshooting}

### Các khả năng không tải trong chế độ auto {#abilities-arent-loading-in-auto-mode}

- Kiểm tra xem bạn đã dùng WordPress 7.0+ chưa
- Kiểm tra xem chế độ bên thứ ba đã được đặt là "Auto" chưa
- Xác minh plugin cung cấp khả năng đó đang hoạt động
- Kiểm tra các log lỗi của WordPress để tìm lỗi đăng ký (registration errors)

### Tôi muốn giữ chế độ legacy {#i-want-to-keep-legacy-mode}

- Đi đến **Settings** → **Third-Party Mode**
- Chọn **Legacy**
- Nhấn **Save**
- Chế độ legacy sẽ tiếp tục hoạt động

### Ndem Anyị Ndị Custom Abilities Na Ndị Na Ndị Na Ndị {#my-custom-abilities-arent-showing}

- Check na ọ bụrụ na ha nwere registration via WordPress hooks
- Check na ha na-implement Abilities API correctly
- Review WordPress error logs
- Use the **Ability Visibility** admin page to see all registered abilities

### A Naa "unclassified ability" notices {#im-getting-unclassified-ability-notices}

- Oge a dị normal na new third-party abilities
- Review and classify them in the admin notice
- See **Ability Visibility** for details on classification

## Backward Compatibility {#backward-compatibility}

### Existing Configurations {#existing-configurations}

Ọ bụrụ na ị nwere existing third-party ability configurations:

- **Legacy mode**: Configuration ha na-enweghị dị
- **Manual mode**: Configuration ha na-enweghị dị
- **Auto mode**: Configuration ha na-enweghị dị (auto mode na-akpọ)

Na ị chọta configuration custom ha, jikọta n'Manual or Legacy mode.

### Deprecation Timeline {#deprecation-timeline}

- **v1.12.0**: Legacy and Manual modes na-enweghị dị
- **v1.13.0+**: Legacy mode na-enweghị dị deprecation notices
- **v2.0.0**: Legacy mode na-enweghị dị (TBD)

## Best Practices {#best-practices}

### For New Installations {#for-new-installations}

- Use Auto mode (o bụ default)
- Pụrụ Superdav AI Agent na-discover abilities automatically
- Use Ability Visibility don control access

### For Existing Installations {#for-existing-installations}

- Upgrade to WordPress 7.0+ ọ bụrụ na gị
- Switch to Auto mode don simplified management
- Review and classify abilities using Ability Visibility

### For Custom Abilities {#for-custom-abilities}

- Register abilities via WordPress hooks (Abilities API)
- Avoid custom ability registries
- Test on WordPress 7.0+ with Auto mode

## Next Steps {#next-steps}

1. **Kiểm tra phiên bản WordPress của bạn**: Xác minh rằng bạn đang dùng 7.0 trở lên để sử dụng chế độ Tự động (Auto mode).
2. **Xem lại chế độ bên thứ ba của bạn**: Vào Settings và kiểm tra xem chế độ hiện tại của bạn là gì.
3. **Cập nhật nếu cần**: Chuyển sang chế độ Auto nếu bạn đang dùng WordPress 7.0 trở lên.
4. **Phân loại khả năng**: Xem xét và phân loại bất kỳ khả năng nào chưa được phân loại.
5. **Kiểm tra**: Xác minh rằng các khả năng bên thứ ba của bạn hoạt động đúng.

## Các Chủ đề Liên quan {#related-topics}

- **Khả năng Hiển thị (Ability Visibility)**: Kiểm soát những khả năng nào sẽ được hiển thị ở đâu.
- **WordPress Abilities API**: Tìm hiểu về cách đăng ký khả năng gốc của WordPress.
- **Phát triển Khả năng Bên thứ Ba (Third-Party Ability Development)**: Tạo ra các khả năng hoạt động với chế độ Auto mode.
