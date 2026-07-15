---
title: Gửi email và thông báo hàng loạt
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Gửi Email và Broadcasts (v2)

_**LƯU Ý QUAN TRỌNG: Bài viết này đề cập đến Ultimate Multisite phiên bản 2.x.**_

Ultimate Multisite đi kèm một tính năng cho phép bạn giao tiếp với khách hàng bằng cách gửi email đến một người dùng mục tiêu hoặc một nhóm người dùng, cũng như gửi thông báo trên Dashboard quản trị của họ để phát thông báo

## Thêm thông báo quản trị vào Dashboard của khách hàng bằng Broadcasts {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

Sử dụng tính năng broadcast của Ultimate Multisite, bạn có thể thêm **thông báo quản trị** vào Dashboard quản trị subsite của người dùng.

Điều này cực kỳ hữu ích nếu bạn cần đưa ra thông báo như bảo trì hệ thống hoặc cung cấp sản phẩm hay dịch vụ mới cho người dùng hiện tại. Đây là cách thông báo quản trị sẽ hiển thị trên Dashboard của người dùng.

<!-- Không có ảnh chụp màn hình: Thông báo quản trị broadcast được hiển thị trên Dashboard subsite của khách hàng -->

Để bắt đầu một thông báo quản trị, hãy đi tới Dashboard quản trị mạng của bạn và bên dưới menu **Ultimate Multisite**, bạn sẽ thấy tùy chọn **Broadcasts**.

![Trang danh sách Broadcasts trong quản trị Ultimate Multisite](/img/admin/broadcasts-list.png)

Bạn cũng có thể chỉnh sửa các broadcast hiện có:

![Giao diện chỉnh sửa broadcast](/img/admin/broadcast-edit.png)

Từ trang này, nhấp vào nút **Add Broadcast** ở phía trên.

Thao tác này sẽ mở cửa sổ modal Add broadcast, nơi bạn có thể chọn loại broadcast muốn gửi.

Hãy chọn **Message** rồi nhấp vào nút **Next Step**.

![Modal thêm broadcast với tùy chọn Message được chọn](/img/admin/broadcast-add-message.png)

Cửa sổ tiếp theo sẽ yêu cầu bạn chọn **Target customer** hoặc **Target product**. Lưu ý rằng bạn có thể chọn nhiều hơn một người dùng hoặc nhiều hơn một sản phẩm.

Để tìm kiếm tài khoản người dùng hoặc sản phẩm, bạn cần bắt đầu nhập từ khóa vào trong trường.

Trong trường **Message type**, bạn có thể chọn màu của thông báo. Điều này sẽ nhấn mạnh mức độ khẩn cấp của thông điệp.

Sau đó, bạn có thể nhấp **Next Step**.

![Các trường Target customers, Target product và Message type cho broadcast dạng Message](/img/admin/broadcast-message-targets.png)

Cửa sổ tiếp theo là nơi bạn có thể bắt đầu soạn thông điệp bằng cách nhập tiêu đề và nội dung/thông điệp bạn muốn broadcast đến người dùng.

![Trình chỉnh sửa tiêu đề và nội dung thông điệp broadcast ở bước soạn](/img/admin/broadcast-edit.png)

Sau khi tạo thông điệp, bạn có thể nhấn nút **Send**.

Và thế là xong. Thông báo quản trị sẽ ngay lập tức hiển thị trên Dashboard của người dùng.

## Gửi email đến khách hàng của bạn {#send-emails-to-your-customers}

Sử dụng tính năng broadcast của Ultimate Multisite, bạn có thể gửi email đến người dùng. Bạn có tùy chọn chỉ gửi email cho những người dùng cụ thể hoặc nhắm mục tiêu một nhóm người dùng cụ thể dựa trên sản phẩm hoặc gói mà họ đã đăng ký.

Để bắt đầu một email broadcast, hãy đi tới Dashboard quản trị mạng của bạn và bên dưới menu Ultimate Multisite, bạn sẽ thấy tùy chọn Broadcast.

![Trang danh sách Broadcasts được dùng làm điểm bắt đầu cho email broadcast](/img/admin/broadcasts-list.png)

Từ trang này, nhấp vào nút **Add broadcast** ở phía trên.

Thao tác này sẽ mở cửa sổ modal Add broadcast, nơi bạn có thể chọn loại broadcast muốn gửi. Hãy chọn **Email** rồi nhấp vào nút **Next Step**.

![Modal thêm broadcast với tùy chọn Email được chọn](/img/admin/broadcast-add-email.png)

Cửa sổ tiếp theo sẽ yêu cầu bạn chọn **Target customer** hoặc **Target produc** t. Lưu ý rằng bạn có thể chọn nhiều hơn một người dùng hoặc nhiều hơn một sản phẩm.

Để tìm kiếm tài khoản người dùng hoặc sản phẩm, bạn cần bắt đầu nhập từ khóa vào trong trường.

Khi đối tượng mục tiêu của bạn đã được chọn, bạn có thể nhấp **Next Step**.

![Lựa chọn Target customers và Target product cho Email broadcast](/img/admin/broadcast-email-targets.png)

Cửa sổ tiếp theo là nơi bạn có thể bắt đầu soạn email bằng cách nhập tiêu đề và nội dung/thông điệp bạn muốn gửi đến người dùng.

<!-- Không có ảnh chụp màn hình: Trình chỉnh sửa tiêu đề và nội dung email broadcast ở bước soạn -->

Sau khi tạo thông điệp, bạn có thể nhấn nút **Send**.

Và đó là cách dễ dàng để gửi email đến người dùng cuối của bạn bằng tính năng broadcast.

## Email hệ thống {#system-emails}

Email hệ thống trong Ultimate Multisite là những **thông báo tự động** được hệ thống gửi sau một số hành động nhất định như đăng ký, thanh toán, ánh xạ tên miền, v.v. Những email này có thể được chỉnh sửa hoặc sửa đổi từ cài đặt Ultimate Multisite. Nó cũng đi kèm một tính năng cho phép bạn đặt lại và nhập các cài đặt hiện có từ một bản cài đặt Ultimate Multisite khác.

### Đặt lại & Nhập {#resetting--importing}

Các phiên bản Ultimate Multisite mới, cũng như các add-on, có thể và sẽ đăng ký email mới theo thời gian.

Để tránh xung đột và các vấn đề khác, **chúng tôi sẽ không tự động thêm các mẫu email mới làm Email hệ thống trên bản cài đặt của bạn** , trừ khi chúng rất quan trọng đối với việc hoạt động đúng của một tính năng nhất định.

Tuy nhiên, super admin và agent có thể nhập các email mới được đăng ký này thông qua công cụ nhập. Quy trình đó sẽ tạo một email hệ thống mới với nội dung và cấu hình của mẫu email mới, cho phép super admin thực hiện bất kỳ sửa đổi nào họ muốn hoặc giữ nguyên như vậy.

#### Cách nhập email hệ thống {#how-to-import-system-emails}

Đi tới trang Cài đặt Ultimate Multisite của bạn và chuyển đến tab **Emails**.

![Tab Emails trong cài đặt Ultimate Multisite hiển thị phần Email hệ thống](/img/config/settings-emails-tab.png)

Sau đó, trên thanh bên, nhấp vào nút **Customize System Emails**.

<!-- Không có ảnh chụp màn hình: Nút Customize System Emails trên bảng thanh bên Email hệ thống -->

Trên trang Email hệ thống, bạn sẽ thấy nút hành động **Reset & Import** ở phía trên. Nhấp vào nút đó sẽ mở cửa sổ modal nhập và đặt lại.

![Nút hành động Reset hoặc Import trên trang quản trị Email hệ thống](/img/admin/system-emails-reset-import.png)

Sau đó, bạn có thể bật/tắt các tùy chọn Import Emails để xem email hệ thống nào có sẵn để được nhập.

<!-- Ảnh chụp màn hình không khả dụng: modal Đặt lại và Nhập với các tùy chọn Nhập Email được mở rộng -->

#### Đặt lại Email hệ thống {#reseting-system-emails}

Đôi khi, bạn sẽ nhận ra rằng những thay đổi bạn đã thực hiện với một mẫu email nhất định không còn phù hợp với bạn nữa và bạn muốn đặt lại mẫu đó về **trạng thái mặc định**.

Trong những trường hợp như vậy, bạn có hai tùy chọn: bạn có thể chỉ cần xóa email hệ thống và nhập lại nó (bằng cách sử dụng các hướng dẫn ở trên) - điều này sẽ xóa số liệu gửi và những thứ khác, khiến phương pháp này ít được ưu tiên nhất.

Hoặc bạn có thể sử dụng **công cụ Đặt lại & Nhập** để đặt lại mẫu email đó.

Để đặt lại một mẫu email, bạn có thể làm theo các bước ở trên cho đến khi đến công cụ Đặt lại & Nhập, sau đó bật tùy chọn **Đặt lại** và chọn các email bạn muốn đặt lại về nội dung mặc định của chúng.

<!-- Ảnh chụp màn hình không khả dụng: modal Đặt lại và Nhập với các tùy chọn Đặt lại Email được mở rộng -->
