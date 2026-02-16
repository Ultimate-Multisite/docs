---
title: Nâng cấp Gói dịch vụ
sidebar_position: 11
_i18n_hash: 83ee30a9547c0ea02bd1338ab7ec3f69
---
# Nâng cấp gói dịch vụ (v2)

_**LƯU Ý QUAN TRỌNG: Bài viết này áp dụng cho Ultimate Multisite phiên bản 2.x.**_

Khách hàng của bạn có thể nâng cấp gói dịch vụ bất cứ lúc nào. Họ có thể nâng cấp lên gói khác hoặc mua thêm các dịch vụ hay gói bổ sung mà bạn cung cấp trên mạng lưới của mình.

Trong hướng dẫn này, chúng tôi sẽ trình bày cách khách hàng nâng cấp gói dịch vụ và những gì xảy ra sau khi quá trình nâng cấp hoàn tất.

Để nâng cấp gói dịch vụ, khách hàng cần truy cập dashboard và vào trang **Account**.

![Dashboard khách hàng với liên kết trang Account](/img/admin/memberships-list.png)

Trên trang Account, họ sẽ thấy thông tin thành viên hiện tại và gói dịch vụ đang sử dụng. Để nâng cấp lên gói khác, họ cần nhấp vào **Change** ở góc trên bên phải của phần **Your Membership**.

![Phần Your Membership với nút Change](/img/admin/memberships-list.png)

Họ sẽ được chuyển đến biểu mẫu thanh toán hiển thị tất cả các gói dịch vụ có sẵn.

Họ cũng có thể xem **các dịch vụ và gói bổ sung khả dụng cho gói hiện tại**, trong trường hợp họ chỉ muốn mua một dịch vụ hoặc gói cụ thể (như lượt truy cập không giới hạn hoặc dung lượng lưu trữ trong ví dụ này), mà không cần nâng cấp gói.

![Biểu mẫu thanh toán hiển thị các gói và dịch vụ có sẵn](/img/admin/memberships-list.png)

Sau khi chọn sản phẩm muốn mua, họ sẽ thấy số tiền cần thanh toán ngay - không bao gồm tín dụng hiện có - và số tiền sẽ được tính vào ngày thanh toán tiếp theo.

Thông thường, nếu sản phẩm là một gói dịch vụ khác và thanh toán được thực hiện giữa chu kỳ tính phí, khách hàng sẽ nhận được tín dụng cho số tiền đã trả ở gói đầu tiên.

![Tóm tắt thanh toán nâng cấp với tín dụng và số tiền thanh toán tiếp theo](/img/admin/memberships-list.png)

Nếu họ chọn một gói hoặc dịch vụ không thay đổi gì so với đăng ký hiện tại, họ sẽ thấy thông báo giải thích điều đó.

![Thông báo khi gói được chọn không thay đổi đăng ký](/img/admin/memberships-list.png)

Sau khi hoàn tất thanh toán, (các) sản phẩm mới sẽ được thêm vào tài khoản của khách hàng và tất cả các giới hạn hoặc tính năng của (các) sản phẩm mới sẽ được áp dụng ngay lập tức: lượt truy cập, dung lượng lưu trữ, bài viết, v.v...

## 

## 

## Lộ trình nâng cấp và hạ cấp

Trong mỗi sản phẩm, bạn sẽ có tab **Up & Downgrades**. Tùy chọn đầu tiên trong tab này là trường có tên **Plan Group**.

**Plan groups** cho phép bạn thông báo với Ultimate Multisite rằng một số gói thuộc cùng một "nhóm", và do đó sẽ được sử dụng để xây dựng các tùy chọn lộ trình nâng cấp/hạ cấp.

![Tab Up and Downgrades với trường Plan Group](/img/config/product-upgrades.png)

Ví dụ, bạn có **Free plan**, **Basic Plan** và **Premium Plan**. Bạn muốn người dùng đăng ký **Free Plan** chỉ có thể nâng cấp lên **Premium Plan** và không muốn họ thấy "Basic Plan" như một tùy chọn nâng cấp. Tất cả những gì bạn cần làm là gán cùng một tên nhóm cho cả Free và Premium plan như trong ảnh chụp màn hình bên dưới.

![Free Plan được gán nhóm High End](/img/config/product-upgrades.png)

![Premium Plan được gán nhóm High End](/img/config/product-upgrades.png)

Điều này sẽ cho Ultimate Multisite biết rằng có một "nhóm" các gói trong mạng lưới tên là **High End**. Khi đưa ra các tùy chọn nâng cấp hoặc hạ cấp, chỉ những gói trong cùng nhóm mới được hiển thị cho người dùng.
