---
title: Tìm kiếm trên Internet
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Tìm kiếm Internet

Gratis AI Agent v1.5.0 bổ sung khả năng **Tìm kiếm Internet** (Internet Search), cho phép trợ lý AI truy xuất các thông tin cập nhật từ web trong quá trình trò chuyện. Tính năng này được cung cấp bởi [Brave Search API](https://brave.com/search/api/) hoặc [Tavily API](https://tavily.com/).

## Cách thức hoạt động

Khi tìm kiếm internet được bật, trợ lý có thể tự động truy vấn nhà cung cấp tìm kiếm bạn đã cấu hình khi nó xác định rằng câu hỏi cần thông tin hiện tại hoặc thông tin bên ngoài — ví dụ: tin tức gần đây, giá cả trực tiếp, hoặc tài liệu có thể đã thay đổi kể từ thời điểm mô hình được huấn luyện.

Các kết quả sẽ được truy xuất theo thời gian thực và được đưa vào ngữ cảnh của trợ lý trước khi nó tạo ra phản hồi. Trợ lý sẽ thông báo khi nào nó đã sử dụng kết quả tìm kiếm để trả lời câu hỏi.

## Bật Tìm kiếm Internet

Tìm kiếm internet yêu cầu một khóa API (API key) từ nhà cung cấp tìm kiếm bạn chọn. Để cấu hình tính năng này:

1. Truy cập **Gratis AI Agent → Settings → Advanced**.
2. Tìm mục thả xuống **Internet Search Provider** và chọn **Brave Search** hoặc **Tavily**.
3. Nhập khóa API của bạn vào ô tương ứng. Các liên kết đăng ký được hiển thị bên cạnh mỗi ô.
4. Nhấp vào **Save Settings**.

Sau khi lưu khóa, khả năng Tìm kiếm Internet sẽ tự động khả dụng cho trợ lý.

## Brave Search

### Cách lấy Khóa API Brave Search

1. Truy cập [trang Brave Search API](https://brave.com/search/api/).
2. Đăng ký một gói dịch vụ. Có gói miễn phí với giới hạn yêu cầu hàng tháng.
3. Sao chép khóa API của bạn từ bảng điều khiển nhà phát triển Brave Search.
4. Dán nó vào trường **Brave Search API Key** trong cài đặt Gratis AI Agent.

### Giới hạn sử dụng

Việc sử dụng được tính phí bởi Brave Search dựa trên số lượng truy vấn được thực hiện. Mỗi phản hồi AI kích hoạt tìm kiếm sẽ được tính là một truy vấn. Vui lòng theo dõi mức sử dụng của bạn tại [bảng điều khiển nhà phát triển Brave Search](https://brave.com/search/api/) để tránh các khoản phí bất ngờ.

## Tavily

Superdav AI Agent v1.10.0 bổ sung **Tavily** như một nhà cung cấp tìm kiếm internet thay thế, mang lại kết quả tìm kiếm phong phú hơn và các khả năng nghiên cứu nâng cao.

### Cách lấy Khóa API Tavily

1. Truy cập [trang Tavily API](https://tavily.com/).
2. Đăng ký một tài khoản. Có gói miễn phí với giới hạn yêu cầu hàng tháng.
3. Sao chép khóa API của bạn từ dashboard Tavily.
4. Dán nó vào trường **Tavily API Key** trong cài đặt Gratis AI Agent.

### Giới hạn sử dụng

Việc sử dụng được tính phí bởi Tavily dựa trên số lượng lệnh gọi API được thực hiện. Mỗi phản hồi AI kích hoạt tìm kiếm sẽ được tính là một lệnh gọi. Vui lòng theo dõi mức sử dụng của bạn tại [dashboard Tavily](https://tavily.com/) để tránh các khoản phí bất ngờ.

## Tắt Tìm kiếm Internet

Xóa khóa API khỏi trường nhà cung cấp tìm kiếm đang hoạt động và lưu lại. Khả năng Tìm kiếm Internet sẽ không còn được cung cấp cho trợ lý nữa.

:::note
Tìm kiếm internet làm tăng độ trễ (latency) của phản hồi vì trợ lý phải chờ kết quả tìm kiếm trước khi tạo ra câu trả lời. Đối với các trường hợp sử dụng yêu cầu thời gian thực, bạn nên cân nhắc xem việc tìm kiếm thời gian thực có cần thiết hay kiến thức tích hợp sẵn của trợ lý là đủ.
:::
