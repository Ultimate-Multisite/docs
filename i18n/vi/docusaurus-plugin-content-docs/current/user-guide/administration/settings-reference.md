---
title: Tham chiếu Cài đặt
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Tham chiếu Settings

Trang này theo dõi các settings ảnh hưởng đến việc quản trị hằng ngày và các thay đổi hành vi gần đây trong Ultimate Multisite.

## Tùy chọn khác {#other-options}

Khu vực **Tùy chọn khác** xuất hiện bên dưới **Ultimate Multisite > Settings > Login & Registration**.

| Setting | Mô tả |
|---|---|
| **Bật Jumper** | Hiển thị công cụ điều hướng nhanh Jumper trong khu vực quản trị. Dùng nó để chuyển trực tiếp đến các màn hình Ultimate Multisite, đối tượng mạng và các đích quản trị được hỗ trợ. Tắt nó nếu bạn không muốn lối tắt này hiển thị. |

## Báo cáo lỗi và đo từ xa {#error-reporting-and-telemetry}

Thiết lập chọn tham gia báo cáo lỗi trước đây đã bị xóa khỏi trang settings. Đo từ xa ẩn danh bị tắt và không có nút bật/tắt UI để bật nó.

Nếu bạn duy trì runbook nội bộ hoặc ảnh chụp màn hình cho trang settings, hãy xóa các tham chiếu đến trường chọn tham gia báo cáo lỗi cũ để quản trị viên không tìm kiếm một thiết lập không còn tồn tại.

## Settings nhập/xuất {#importexport-settings}

Tab settings **Nhập/Xuất** mô tả những settings mà nó kiểm soát và liên kết trực tiếp đến **Ultimate Multisite > Site Export** cho các kho lưu trữ site và mạng. Sử dụng tab settings cho cấu hình nhập/xuất, sử dụng **Tools > Export & Import** cho quy trình xuất/nhập một site, và sử dụng công cụ Site Export khi bạn cần một kho lưu trữ Network Export đầy đủ.

## Cảnh báo số dư Domain Seller HostAfrica {#domain-seller-hostafrica-balance-warning}

Khi addon Domain Seller được kết nối với HostAfrica, quản trị viên mạng hiện thấy một cảnh báo số dư thấp có thể bỏ qua khi số dư Account đại lý quá thấp để xử lý đăng ký hoặc gia hạn tên miền một cách đáng tin cậy.

Hãy xem thông báo này như một cảnh báo vận hành: nạp thêm số dư cho đại lý HostAfrica trước khi chấp nhận thêm đăng ký tên miền trả phí, sau đó quay lại settings Domain Seller hoặc màn hình giám sát tên miền để xác nhận việc đăng ký và gia hạn có thể tiếp tục bình thường.

## Settings trình kết nối nhà cung cấp AI {#ai-provider-connector-settings}

Settings trình kết nối nhà cung cấp AI hiện chỉ hiển thị các nhóm Account OAuth được hỗ trợ:

| Nhà cung cấp | Quy trình thiết lập |
|---|---|
| **Anthropic Max** | Kết nối một hoặc nhiều Account Anthropic Max bằng nút OAuth. Sử dụng phương án OAuth thủ công dự phòng khi trình duyệt sandbox không thể tự động hoàn tất chuyển hướng. |
| **OpenAI ChatGPT/Codex** | Kết nối Account ChatGPT thông qua cùng quy trình nhóm OAuth. Các thao tác được trình kết nối hỗ trợ có thể sử dụng lệnh gọi công cụ ChatGPT Codex sau khi Account được kết nối. |
| **Google AI Pro** | Kết nối Account Google AI Pro thông qua OAuth, sau đó làm mới trình kết nối nếu danh sách Account không cập nhật ngay lập tức. |

Cursor Pro không còn là nhà cung cấp được hỗ trợ. Hãy xóa ảnh chụp màn hình nội bộ, runbook hoặc các bước onboarding cũ có đề cập đến trường thiết lập Cursor Pro hoặc đường dẫn trình kết nối.

Khi thêm hoặc xóa Account nhà cung cấp, hãy nhập địa chỉ email hợp lệ cho Account đang được làm mới hoặc xóa và lưu settings nhà cung cấp trước khi kiểm tra các thao tác dựa trên trình kết nối.
