---
title: Nkwado Internet
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Pencarian Internet {#internet-search}

Gratis AI Agent v1.5.0 nwere ịrụ **Internet Search** ability nke na-eme ka AI assistant chụrụ ihe ọmụma dị nwere ike ịnwurị n'ụlọ ọrụ (web) mgbe ọ nọ n'ụzọ. O cheba nke [Brave Search API](https://brave.com/search/api/) ma ọ bụ [Tavily API](https://tavily.com/).

## Ọ na-eme ka ịrụ {#how-it-works}

Mgbe ị chọpụta Internet search, AI assistant nwere ike ịgụ akụkọ (query) nke provider search ị seturu mgbe ọ mụrụ ihe bụ onye a na-ahụrị ihe dị nwere ma ọ bụ ihe dị n'ebe ahụ — oge ọchịchị, dịọrụ dị n'ụlọ, ma ọ bụ akụkọ ndị dị ike nwere ike ịdị chere mgbe ọ mụrụ ihe n'ime nkwado model-uhụrụ.

Ọ na-ahụrị ihe ndị a n'ụzọ ahụ (real time) ma ọ bụ inwe ya n'ime context nke assistant karị ịgụ akụkọ ka ọ mụrụ જવાબere. Assistant-ahụrụ onye ọ bụla mgbe ọ na-eme ka ọ chọpụta ihe ndị a nwere ike ịnwurị maka ịnwassị akụkọ.

## Ịchọta Internet Search {#enabling-internet-search}

Internet search na-agba API key dị n'ime provider search ị chọrọ. Ka ọ gị gbanwe:

1. Mene **Gratis AI Agent → Settings → Advanced**.
2. Keti dropdown **Internet Search Provider** ma chụrụ ya **Brave Search** ma ọ bụ **Tavily**.
3. Jiji API key-nwa n'ime field ahụ. Ọ dị n'ebe a links ịzụta anọ n'ime kọchaa.
4. Keti **Save Settings**.

Mgbe ị chọpụta key, Internet Search ability na-eme ka ọ dị n'ime assistant mgbe ọ mụrụ ihe.

## Brave Search {#brave-search}

### Ọ bụrụ na ị chọpụta Brave Search API Key {#obtaining-a-brave-search-api-key}

1. Mene [Brave Search API page](https://brave.com/search/api/).
2. Chọpụta plan. Oge dị nwere onye a dị mma (free tier) nke nwere oge akụkọ dị n'ime ụbọchị.
3. Kopi API key-nwa gị n'ime Brave Search developer dashboard.
4. Jiji ya n'ime field **Brave Search API Key** n'ime settings Gratis AI Agent.

### Ọdịmụ Akụkọ {#usage-limits}

Sử dụng được tính dựa trên số truy vấn mà Brave Search thực hiện. Mỗi phản hồi AI kích hoạt tìm kiếm được tính là một truy vấn. Hãy theo dõi việc sử dụng của bạn trong [bảng điều khiển nhà phát triển Brave Search](https://brave.com/search/api/) để tránh bị tính phí không mong muốn.

## Tavily {#tavily}

Superdav AI Agent v1.10.0 thêm **Tavily** làm một lựa chọn thay thế cho dịch vụ tìm kiếm trên mạng, mang lại kết quả tìm kiếm phong phú hơn và khả năng nghiên cứu nâng cao.

### Lấy Khóa API Tavily {#obtaining-a-tavily-api-key}

1. Truy cập [trang API của Tavily](https://tavily.com/).
2. Đăng ký một tài khoản. Có gói miễn phí với giới hạn yêu cầu hàng tháng.
3. Sao chép khóa API của bạn từ bảng điều khiển Tavily.
4. Dán nó vào trường **Tavily API Key** trong cài đặt Gratis AI Agent.

### Giới Hạn Sử Dụng {#usage-limits-1}

Việc sử dụng được tính bởi Tavily dựa trên số lần gọi API được thực hiện. Mỗi phản hồi AI kích hoạt tìm kiếm được tính là một lần gọi. Hãy theo dõi việc sử dụng của bạn trong [bảng điều khiển Tavily](https://tavily.com/) để tránh bị tính phí không mong muốn.

## Tắt Tìm Kiếm Trên Mạng {#disabling-internet-search}

Xóa khóa API khỏi trường nhà cung cấp tìm kiếm đang hoạt động và lưu lại. Khả năng Tìm kiếm trên Mạng sẽ không còn được cung cấp cho trợ lý nữa.

:::note
Tìm kiếm trên mạng làm tăng độ trễ của các phản hồi vì trợ lý phải chờ kết quả tìm kiếm trước khi tạo câu trả lời. Đối với các trường hợp cần thời gian thực, hãy cân nhắc xem việc tìm kiếm theo thời gian thực có cần thiết hay kiến thức tích hợp sẵn của trợ lý đã đủ chưa.
:::
