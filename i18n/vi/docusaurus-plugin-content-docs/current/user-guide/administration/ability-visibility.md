---
title: Tính hiển thị của khả năng
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Khả năng Hiển thị của Tính năng (Ability Visibility) {#ability-visibility}

Superdav AI Agent v1.12.0 giới thiệu các điều khiển **Khả năng Hiển thị** (Ability Visibility) để quản lý việc các tính năng nào được hiển thị trên các giao diện khác nhau. Điều này cho phép quản trị viên tinh chỉnh những khả năng của agent nào có sẵn thông qua REST APIs, máy chủ MCP, tích hợp WooCommerce và các giao diện khác.

## Khả năng Hiển thị của Tính năng là gì? {#what-is-ability-visibility}

Khả năng Hiển thị là một hệ thống quyền hạn kiểm soát:

- **Những khả năng nào** có sẵn cho agent
- **Chúng được hiển thị ở đâu** (REST API, MCP, WooCommerce, v.v.)
- **Ai có thể truy cập chúng** (thông qua danh sách cho phép của đối tác)
- **Chúng được phân loại như thế nào** (đã nhận dạng hay chưa được nhận dạng)

Mỗi khả năng đều mang một mức độ hiển thị xác định tính khả dụng của nó trên các giao diện khác nhau.

## Các Mức Độ Hiển Thị {#visibility-levels}

### Công khai (Public) {#public}

**Các khả năng Công khai** có sẵn ở mọi nơi:

- Các điểm cuối (endpoints) REST API
- Máy chủ MCP
- Tích hợp WooCommerce
- Giao diện trò chuyện (Chat interfaces)
- Tất cả các vai trò người dùng (với quyền thích hợp)

Ví dụ: `scaffold-block-theme`, `activate-theme`, `send-email`

### Nội bộ (Internal) {#internal}

**Các khả năng Nội bộ** chỉ có sẵn trong cài đặt WordPress của bạn:

- Giao diện trò chuyện
- Bảng quản trị (Admin panels)
- Chỉ dành cho người dùng đã đăng nhập
- Không được hiển thị qua REST API hoặc các tích hợp bên ngoài

Ví dụ: `manage-settings`, `view-analytics`, `export-data`

### Đối tác (Partner) {#partner}

**Các khả năng Đối tác** chỉ có sẵn cho các đối tác được đưa vào danh sách trắng (whitelisted partners):

- Yêu cầu phải có mục nhập rõ ràng trong danh sách cho phép của đối tác
- Có sẵn qua REST API với thông tin xác thực của đối tác
- Có sẵn qua MCP với xác thực của đối tác
- Không có sẵn cho người dùng thông thường

Ví dụ: `bulk-import-users`, `modify-billing`, `access-analytics`

### Vô hiệu hóa (Disabled) {#disabled}

**Các khả năng Vô hiệu hóa** không có sẵn ở bất kỳ đâu:

- Không được hiển thị qua bất kỳ giao diện nào
- Không có sẵn trong trò chuyện
- Không có sẵn trong bảng quản trị
- Hữu ích cho các khả năng đã lỗi thời hoặc thử nghiệm

## Quản lý Khả năng Hiển thị {#managing-ability-visibility}

### Truy cập Cài đặt Khả năng Hiển thị {#accessing-ability-visibility-settings}

1. Truy cập **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Nhấp vào tab **Abilities**
3. Bạn sẽ thấy danh sách tất cả các khả năng đã cài đặt cùng với mức độ hiển thị của chúng

### Xem Chi tiết Khả năng {#viewing-ability-details}

Nhấp vào bất kỳ khả năng nào để xem:

- **Name**: Mã định danh của khả năng
- **Description**: Mô tả về chức năng của khả năng
- **Current visibility**: Công khai, Nội bộ, Đối tác, hay Vô hiệu hóa
- **Partner allow-list**: Những đối tác nào có thể truy cập (nếu là hiển thị Đối tác)
- **Last updated**: Thời điểm lần cuối cùng thay đổi khả năng hiển thị
- **Status**: Đã nhận dạng (Recognized) hay Chưa được nhận dạng (Unclassified)

### Thay đổi Mức Độ Hiển Thị {#changing-visibility-levels}

Để thay đổi khả năng hiển thị của một khả năng:

1. Nhấp vào khả năng trong danh sách
2. Chọn một mức độ hiển thị mới từ menu thả xuống
3. Nếu chọn "Partner", hãy thêm các mã định danh đối tác vào danh sách cho phép
4. Nhấp vào **Save**

Ví dụ:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Thao tác Hàng loạt (Bulk Operations) {#bulk-operations}

Để thay đổi khả năng hiển thị cho nhiều khả năng:

1. Đánh dấu vào các ô bên cạnh các khả năng
2. Chọn một mức độ hiển thị mới từ menu thả xuống hành động hàng loạt
3. Nhấp vào **Apply**

## Danh sách Cho phép Đối tác (Partner Allow-List) {#partner-allow-list}

**Danh sách cho phép đối tác** kiểm soát những đối tác bên ngoài nào có thể truy cập các khả năng cấp Đối tác.

### Thêm Đối tác {#adding-partners}

1. Truy cập **Superdav AI Agent** → **Settings** → **Partners**
2. Nhấp vào **Add Partner**
3. Nhập mã định danh đối tác (thường là khóa API hoặc ID tổ chức)
4. Tùy chọn thêm tên và mô tả đối tác
5. Nhấp vào **Save**

### Gán Khả năng cho Đối tác {#assigning-abilities-to-partners}

Sau khi thêm đối tác:

1. Truy cập tab **Abilities**
2. Tìm một khả năng có hiển thị Đối tác
3. Nhấp để chỉnh sửa
4. Trong phần "Partner allow-list", đánh dấu vào các ô của những đối tác được phép truy cập
5. Nhấp vào **Save**

### Thu hồi Truy cập Đối tác {#revoking-partner-access}

Để xóa quyền truy cập của một đối tác:

1. Chỉnh sửa khả năng
2. Bỏ chọn ô của đối tác trong danh sách cho phép
3. Nhấp vào **Save**

Đối tác sẽ ngay lập tức mất quyền truy cập vào khả năng đó.

## Các Khả năng Chưa được Nhận dạng (Unclassified Abilities) {#unclassified-abilities}

Khi bạn cài đặt một khả năng của bên thứ ba mà Superdav AI Agent không nhận ra, nó sẽ được đánh dấu là **Unclassified**.

### Thông báo Quản trị về Khả năng Chưa được Nhận dạng {#admin-notice-for-unclassified-abilities}

Bạn sẽ thấy một thông báo quản trị:

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### Xem lại Khả năng Chưa được Nhận dạng {#reviewing-unclassified-abilities}

1. Nhấp vào **Review Abilities** trong thông báo
2. Đối với mỗi khả năng chưa được nhận dạng, bạn sẽ thấy:
   - Tên và mô tả khả năng
   - Nguồn (plugin/addon nào đã cài đặt nó)
   - Mức độ hiển thị được đề xuất
   - Đánh giá bảo mật

3. Chọn một mức độ hiển thị:
   - **Public**: Tin tưởng khả năng này; hiển thị nó ở mọi nơi
   - **Internal**: Giới hạn chỉ sử dụng nội bộ
   - **Partner**: Giới hạn cho các đối tác cụ thể
   - **Disabled**: Không sử dụng khả năng này

4. Nhấp vào **Classify** để lưu quyết định của bạn

### Tại sao phải Phân loại Khả năng Chưa được Nhận dạng? {#why-classify-unclassified-abilities}

Việc phân loại các khả năng:

- **Cải thiện bảo mật**: Bạn chủ động phê duyệt những gì được hiển thị
- **Ngăn ngừa sự cố**: Các khả năng chưa được nhận dạng mặc định bị vô hiệu hóa
- **Kích hoạt tính năng**: Sau khi được phân loại, khả năng đó sẽ có sẵn
- **Tài liệu hóa quyết định**: Các lựa chọn của bạn được ghi lại cho mục đích kiểm toán

## Khả năng Hiển thị trên các Giao diện Khác nhau {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Các khả năng Công khai** có sẵn qua các điểm cuối REST:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Các khả năng Nội bộ và Đối tác** không có sẵn qua REST API.

### Máy chủ MCP {#mcp-servers}

**Các khả năng Công khai** có sẵn qua MCP:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Các khả năng Nội bộ** không được hiển thị qua MCP.

**Các khả năng Đối tác** chỉ có sẵn với thông tin xác thực của đối tác.

### Tích hợp WooCommerce {#woocommerce-integration}

**Các khả năng Công khai** liên quan đến WooCommerce có sẵn:

- Quản lý sản phẩm
- Xử lý đơn hàng
- Giao tiếp với khách hàng

**Các khả năng Nội bộ** không được hiển thị cho WooCommerce.

### Giao diện Trò chuyện (Chat Interface) {#chat-interface}

**Tất cả các khả năng** (Công khai, Nội bộ, Đối tác) đều có sẵn trong trò chuyện, tùy thuộc vào quyền của người dùng:

- Quản trị viên thấy tất cả các khả năng
- Người dùng thông thường chỉ thấy các khả năng Công khai
- Đối tác thấy các khả năng Công khai + Đối tác (nếu được đưa vào danh sách trắng)

## Thực hành Tốt nhất về Bảo mật {#security-best-practices}

### Nguyên tắc Đặc quyền Tối thiểu (Principle of Least Privilege) {#principle-of-least-privilege}

- Đặt khả năng ở mức độ hiển thị hạn chế nhất nhưng vẫn cho phép sử dụng
- Sử dụng hiển thị Đối tác cho các thao tác nhạy cảm
- Vô hiệu hóa các khả năng bạn không sử dụng

### Kiểm toán Định kỳ (Regular Audits) {#regular-audits}

- Xem lại khả năng hiển thị của khả năng hàng tháng
- Kiểm tra các khả năng chưa được nhận dạng
- Thu hồi quyền truy cập của các đối tác không sử dụng

### Ghi nhật ký và Giám sát (Logging and Monitoring) {#logging-and-monitoring}

- Theo dõi khả năng nào được sử dụng nhiều nhất
- Theo dõi các mẫu truy cập của đối tác
- Cảnh báo khi có việc sử dụng khả năng bất thường

### Khả năng của Bên thứ Ba {#third-party-abilities}

- Xem xét các khả năng của bên thứ ba trước khi kích hoạt
- Phân loại chúng một cách rõ ràng
- Bắt đầu với hiển thị Nội bộ hoặc Đối tác
- Chỉ nâng cấp lên Công khai sau khi đã kiểm tra kỹ lưỡng

## Khắc phục Sự cố (Troubleshooting) {#troubleshooting}

**Một khả năng không hiển thị trong danh sách**
- Xác minh rằng khả năng đã được cài đặt và đang hoạt động
- Kiểm tra xem plugin/addon đã được bật chưa
- Tải lại trang

**Tôi không thể thay đổi khả năng hiển thị của một khả năng**
- Xác minh rằng bạn có quyền quản trị viên
- Kiểm tra xem khả năng đó có bị một plugin khóa lại không
- Thử tắt các plugin xung đột

**Một đối tác không thể truy cập một khả năng**
- Xác minh rằng đối tác có trong danh sách cho phép
- Kiểm tra xem khả năng hiển thị của khả năng đó đã được đặt là Đối tác chưa
- Xác nhận rằng thông tin xác thực của đối tác là chính xác
- Kiểm tra nhật ký API để tìm lỗi xác thực

**Các khả năng chưa được nhận dạng vẫn xuất hiện**
- Xem lại và phân loại chúng trong thông báo quản trị
- Kiểm tra xem việc phân loại của bạn đã được lưu chưa
- Xác minh rằng plugin cung cấp khả năng đó đã được cập nhật

## Di chuyển từ Chế độ Cũ (Migration from Legacy Mode) {#migration-from-legacy-mode}

Nếu bạn đang nâng cấp từ phiên bản cũ hơn của Superdav AI Agent:

- Tất cả các khả năng hiện có sẽ tự động được phân loại là Công khai
- Xem lại và điều chỉnh khả năng hiển thị khi cần thiết
- Không cần hành động nào trừ khi bạn muốn hạn chế quyền truy cập

Xem **Third-Party Mode Migration** để biết thêm chi tiết về quá trình chuyển đổi sang tích hợp Abilities API gốc.

## Các Bước Tiếp theo {#next-steps}

Sau khi cấu hình khả năng hiển thị:

1. **Xem lại các khả năng của bạn**: Kiểm toán tất cả các khả năng đã cài đặt
2. **Phân loại các khả năng chưa được nhận dạng**: Phản hồi các thông báo quản trị
3. **Thiết lập đối tác**: Thêm đối tác nếu bạn sử dụng hiển thị Đối tác
4. **Giám sát việc sử dụng**: Theo dõi khả năng nào được sử dụng nhiều nhất
5. **Tài liệu hóa quyết định**: Lưu lại ghi chú về lý do bạn chọn từng mức độ hiển thị
