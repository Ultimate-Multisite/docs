---
title: Nchịkọta Settings
sidebar_position: 11
_i18n_hash: 0259b88b319090b358483322ad97fc2d
---
# Referencere Settings

Pege này theo dõi các cài đặt ảnh hưởng đến việc quản trị hàng ngày và những thay đổi hành vi gần đây trong Ultimate Multisite.

## Các Tùy chọn khác

Khu vực **Other Options** sẽ xuất hiện dưới mục **Ultimate Multisite > Settings > Login & Registration**.

| Setting | Mô tả |
|---|---|
| **Enable Jumper** | Hiển thị công cụ điều hướng nhanh Jumper trong khu vực admin. Hãy dùng nó để nhảy thẳng đến các màn hình Ultimate Multisite, đối tượng mạng và các đích quản trị được hỗ trợ. Tắt nó nếu bạn không muốn thấy lối tắt này. |

## Báo cáo lỗi và telemetry (thu thập dữ liệu)

Cài đặt đăng ký báo cáo lỗi trước đây đã bị xóa khỏi trang cài đặt. Telemetry ẩn danh hiện đang bị vô hiệu hóa và không có nút chuyển đổi giao diện nào để bật nó.

Nếu bạn duy trì các sổ tay vận hành nội bộ hoặc ảnh chụp màn hình cho trang cài đặt, hãy xóa các tham chiếu đến trường đăng ký báo cáo lỗi cũ để quản trị viên không tìm kiếm một cài đặt không còn tồn tại nữa.

## Cài đặt Import/Export (Nhập/Xuất)

Tab **Import/Export** mô tả những cài đặt nào nó kiểm soát và liên kết trực tiếp đến **Ultimate Multisite > Site Export** cho các bản lưu trữ trang web và mạng. Hãy dùng tab cài đặt để cấu hình nhập/xuất, hãy dùng **Tools > Export & Import** cho quy trình xuất/nhập của một trang đơn lẻ, và hãy dùng công cụ Site Export khi bạn cần một bản lưu trữ Network Export đầy đủ.

## Cài đặt kết nối nhà cung cấp AI

Cài đặt kết nối nhà cung cấp AI hiện chỉ hiển thị các nhóm tài khoản OAuth được hỗ trợ:

| Nhà cung cấp | Quy trình thiết lập |
|---|---|
| **Anthropic Max** | Kết nối một hoặc nhiều tài khoản Anthropic Max bằng nút OAuth. Sử dụng phương án OAuth thủ công khi trình duyệt sandbox không thể hoàn tất chuyển hướng tự động. |
| **OpenAI ChatGPT/Codex** | Kết nối các tài khoản ChatGPT thông qua quy trình pool OAuth tương tự. Các thao tác được hỗ trợ bởi Connector có thể sử dụng các lệnh công cụ (tool calls) của ChatGPT Codex sau khi tài khoản đã được kết nối. |
| **Google AI Pro** | Kết nối các tài khoản Google AI Pro thông qua OAuth, sau đó làm mới connector nếu danh sách tài khoản không cập nhật ngay lập tức. |

Cursor Pro không còn là nhà cung cấp được hỗ trợ nữa. Hãy xóa các ảnh chụp màn hình nội bộ cũ, runbook hoặc các bước hướng dẫn sử dụng đề cập đến các trường thiết lập Cursor Pro hoặc đường dẫn connector.

Khi thêm hoặc xóa các tài khoản nhà cung cấp, hãy nhập địa chỉ email hợp lệ cho tài khoản đang được làm mới hoặc xóa và lưu cài đặt nhà cung cấp trước khi kiểm tra các thao tác dựa trên connector.
