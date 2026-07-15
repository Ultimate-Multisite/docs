---
title: Cách ly đa người thuê
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Cô lập Đa người thuê (Multi-Tenancy Isolation)

Cô lập đa người thuê là một khái niệm quan trọng trong các hệ thống WordPress đa trang (multisite). Nó đề cập đến việc đảm bảo rằng dữ liệu, cấu hình và hoạt động của một trang web (site) không ảnh hưởng hay bị lẫn lộn với các trang web khác đang chạy trên cùng một nền tảng hoặc máy chủ. Nói cách khác, mỗi trang web phải hoạt động như một thực thể độc lập hoàn toàn về mặt dữ liệu.

Trong môi trường WordPress đa người thuê, mục tiêu chính là ngăn chặn tình trạng "rò rỉ" dữ liệu (data leakage). Điều này có nghĩa là:

1. **Dữ liệu riêng biệt:** Dữ liệu của Trang A không được phép hiển thị hoặc bị ảnh hưởng bởi dữ liệu của Trang B.
2. **Cấu hình độc lập:** Các cài đặt như theme, plugin, cấu hình cơ sở dữ liệu (database) phải được quản lý một cách tách biệt cho từng trang web cụ thể.

### Tại sao Cô lập Đa người thuê lại quan trọng? {#isolation-strategy}

Việc cô lập đa người thuê mang lại nhiều lợi ích thiết thực:

* **Bảo mật:** Đây là yếu tố quan trọng nhất. Nếu không có sự cô lập, một lỗi hoặc một hành vi độc hại trên một trang web có thể vô tình làm lộ thông tin nhạy cảm của các trang web khác.
* **Tính ổn định:** Giúp đảm bảo rằng việc cập nhật plugin hoặc theme cho Trang A sẽ không gây ra xung đột và làm hỏng hoạt động của Trang B.
* **Tuân thủ quy định (Compliance):** Trong nhiều ngành nghề, việc tách biệt dữ liệu khách hàng là yêu cầu bắt buộc về mặt pháp lý.

### Các phương pháp thực hiện Cô lập Đa người thuê trong WordPress {#database-host-binding}

Có nhiều cách để đạt được sự cô lập này, tùy thuộc vào kiến trúc bạn đang sử dụng:

#### 1. Sử dụng Multisite Cơ bản (Basic Multisite) {#filesystem-root}

Đây là cấu hình đơn giản nhất của WordPress cho đa trang. Trong cơ chế này, mặc dù tất cả các trang web chia sẻ cùng một cài đặt cốt lõi của WordPress, chúng vẫn được cô lập ở cấp độ dữ liệu:

* **Cơ sở dữ liệu riêng:** Mỗi site trong Multisite thường có một bảng (table) hoặc một tập hợp các bảng riêng để lưu trữ nội dung, người dùng và cấu hình cụ thể của nó.
* **Tách biệt URL:** Mỗi trang web sẽ có một tên miền (domain) hoặc subdomain riêng, giúp chúng hoạt động như những thực thể khác nhau về mặt truy cập.

#### 2. Cô lập ở cấp độ Cơ sở dữ liệu (Database Level Isolation) {#provisioning-order}

Đây là mức độ cô lập sâu hơn, thường được áp dụng khi bạn cần sự tách biệt tối đa:

* **Sử dụng cơ sở dữ liệu riêng:** Thay vì dùng một database chung cho tất cả các site, mỗi site có thể được gán một instance MySQL hoàn toàn riêng. Điều này đảm bảo rằng việc truy cập hoặc thao tác trên Database của Site A sẽ không bao giờ chạm vào Database của Site B.

#### 3. Cô lập ở cấp độ Môi trường (Environment Isolation) {#sovereign-customer-management-flows}

Trong môi trường phát triển và sản xuất, cô lập cũng có thể được thực hiện bằng cách:

* **Sử dụng các môi trường hosting khác nhau:** Mỗi site chạy trên một server hoặc một cấu hình hosting hoàn toàn riêng biệt.
* **Tách biệt quyền truy cập:** Đảm bảo rằng người quản trị của Site A không có quyền truy cập vào file cấu hình hoặc dữ liệu của Site B.

### Tóm tắt

Cô lập đa người thuê là nền tảng để xây dựng các hệ thống WordPress đa trang an toàn và ổn định. Dù bạn sử dụng Multisite cơ bản hay các giải pháp phức tạp hơn, nguyên tắc cốt lõi vẫn là: **Mỗi site phải được coi là một đơn vị độc lập về dữ liệu.** Việc lựa chọn phương pháp cô lập nào phụ thuộc vào nhu cầu bảo mật và quy mô dự án của bạn.

Ultimate Multisite: Đa người thuê (Multi-Tenancy) phiên bản 1.2.0 hỗ trợ việc cô lập cơ sở dữ liệu và hệ thống tệp tin cho từng subsite để đảm bảo tính độc lập của khách thuê. Điều này giúp giữ dữ liệu của từng tenant tách biệt trong khi vẫn duy trì khả năng cấp phát mạng, thanh toán và quản trị ở cấp độ mạng.

## Chiến lược cô lập

Sử dụng sự cô lập chủ quyền (sovereign isolation) cho những khách hàng cần sự phân tách dữ liệu mạnh hơn, không gian lưu trữ hệ thống tệp riêng biệt, hoặc một ranh giới máy chủ riêng.

Mỗi người thuê chủ quyền (tenant) nên có:

- Cơ sở dữ liệu riêng hoặc chiến lược tiền tố cơ sở dữ liệu được phê duyệt cho máy chủ lưu trữ (host).
- Thư mục gốc hệ thống tệp (filesystem root) dành riêng cho tenant.
- Một mục đăng ký tenant ánh xạ trang web với cơ sở dữ liệu, đường dẫn gốc, tên miền và mô hình cô lập (isolation model).

Kết quả xác minh di chuyển trước khi người thuê (tenant) được coi là hoạt động chính thức.

## Ràng buộc máy chủ cơ sở dữ liệu

Phiên bản 1.2.0 thay đổi hành vi mặc định về việc ràng buộc máy chủ trên cùng một máy (same-machine host binding) cho các cài đặt sovereign. Các giá trị trên cùng máy như `localhost` sẽ được chuẩn hóa để Bedrock, FrankenPHP và các cài đặt WordPress containerized có thể cấp và xác minh quyền truy cập dựa trên chuỗi máy chủ mà MySQL thực sự nhìn thấy.

Khi cấu hình một tenant chủ quyền (sovereign tenant):

1. Đặt tên máy chủ cơ sở dữ liệu (database host) thành giá trị mà runtime của tenant yêu cầu.
2. Sử dụng `localhost` cho các cài đặt socket cục bộ khi máy chủ mong đợi kết nối cục bộ.
3. Chỉ sử dụng `127.0.0.1` hoặc tên máy chủ dịch vụ (service hostname) khi máy chủ cơ sở dữ liệu cấp quyền truy cập cho máy chủ đó.

4. Chạy xác minh di chuyển sau khi thay đổi liên kết máy chủ (host binding).

Nếu các báo cáo xác minh trả về lỗi, hãy so sánh quyền người dùng trong DB của tenant với cấu hình binding host đã được thiết lập. Một người dùng được cấp quyền cho `user@localhost` sẽ khác với `user@127.0.0.1` hoặc `user@%`.

## Filesystem root

Thư mục gốc của người thuê (tenant root) cần phải ổn định qua các lần khởi động lại và triển khai. Hãy tránh sử dụng các đường dẫn mount tạm thời. Đối với các cài đặt kiểu Bedrock, hãy xác nhận rằng thư mục gốc của người thuê trỏ đến thư mục web WordPress mà bootstrap của người thuê mong đợi, chứ không chỉ là thư mục gốc của dự án.

## Quy trình cấp phát (Provisioning order)

Đối với các tenant chủ quyền mới, hãy sử dụng quy trình này:

1. Tạo mục đăng ký người thuê (tenant registry entry).
2. Tạo cơ sở dữ liệu và người dùng cơ sở dữ liệu cho người thuê.
3. Thiết lập lược đồ (schema) cho người thuê.
4. Cung cấp người dùng cho người thuê.
5. Cấu hình các đường dẫn hệ thống tệp (filesystem paths) của người thuê.
6. Chạy xác minh di chuyển (migration verification).

7. Chuyển đổi định tuyến hoặc DNS sau khi xác minh thành công.

Thứ tự này giúp ngăn các khách hàng bị cô lập một phần nhận lưu lượng truy cập trước khi trình ghi cơ sở dữ liệu (database writer), người dùng và hệ thống tệp (filesystem) đã sẵn sàng.

## Luồng quản lý khách hàng chủ quyền

Ultimate Multisite v2.13.0 giữ các hành động quản lý khách hàng trên trang web chính khi chế độ sovereign được bật. Một tenant vẫn có thể chạy như một bản cài đặt WordPress riêng biệt, nhưng các hành động hướng đến khách hàng phụ thuộc vào thanh toán mạng, tư cách thành viên hoặc dữ liệu tài khoản dùng chung nên chuyển khách hàng quay lại trang web chính thay vì cố gắng hoàn tất hành động bên trong runtime của tenant.

Luồng trang chủ áp dụng cho:

- Thanh toán và thay đổi kế hoạch.
- Tổng quan tài khoản và các thao tác hồ sơ khách hàng.
- Cập nhật địa chỉ thanh toán và các màn hình quản lý thanh toán.
- Xem hóa đơn và lịch sử thanh toán.
- Các thao tác quản lý trang web như thêm hoặc xóa trang web.

Chuyển đổi mẫu (Template Switching).
Ánh xạ tên miền và thay đổi tên miền chính (Domain Mapping and Primary-Domain Changes).

Khi khách hàng thực hiện một trong các hành động này từ một tenant độc lập (sovereign tenant), Ultimate Multisite sẽ xây dựng URL của trang web chính tương ứng và giữ lại tenant nguồn làm đích trả về khi việc đó an toàn. Điều này cho phép khách hàng hoàn tất hành động được quản lý đối với hồ sơ mạng, sau đó quay lại ngữ cảnh của tenant mà không cần sao chép trạng thái thanh toán hoặc thành viên vào cơ sở dữ liệu độc lập (sovereign database).

Đối với các nhà điều hành (operators), quy tắc thực tế là: hãy giữ các trang thanh toán (billing), tài khoản (account), thanh toán hóa đơn (checkout), hóa đơn (invoice), mẫu (template) và quản lý tên miền (domain-management) trên trang web chính cho các mạng độc lập (sovereign networks). Các bảng điều khiển của người thuê (tenant dashboards) có thể liên kết đến những trang đó, nhưng trang web chính vẫn là nguồn thông tin đáng tin cậy để thực hiện hành động.
