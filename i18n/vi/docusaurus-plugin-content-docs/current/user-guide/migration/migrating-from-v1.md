---
title: Di chuyển từ V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Di chuyển từ V1

## Ultimate Multisite đã chuyển từ dòng phiên bản 1.x ban đầu sang dòng phiên bản 2.x.

Ultimate Multisite phiên bản 2.0 trở lên là bản viết lại hoàn toàn mã nguồn, nghĩa là phiên bản cũ và phiên bản mới hầu như không có gì chung. Vì vậy, khi nâng cấp từ 1.x lên 2.x, dữ liệu của bạn sẽ cần được di chuyển sang định dạng mà các phiên bản mới có thể hiểu được.

May mắn thay, Ultimate Multisite 2.0+ **đã tích hợp sẵn trình di chuyển** trong phần lõi, có khả năng phát hiện dữ liệu từ phiên bản cũ và chuyển đổi sang định dạng mới. Quá trình di chuyển này diễn ra trong **Trình hướng dẫn cài đặt** của phiên bản 2.0+.

Bài học này hướng dẫn cách trình di chuyển hoạt động, cách xử lý khi gặp lỗi, và cách khắc phục các sự cố có thể phát sinh trong quá trình này.

_**QUAN TRỌNG: Trước khi bắt đầu nâng cấp từ phiên bản 1.x lên 2.0, hãy đảm bảo rằng bạn đã tạo bản sao lưu cơ sở dữ liệu của trang web**_

## Các bước đầu tiên

Bước đầu tiên là tải xuống file .zip của plugin và cài đặt phiên bản 2.0 trên bảng điều khiển quản trị mạng của bạn.

Sau khi bạn [cài đặt và kích hoạt phiên bản 2.0](../getting-started/installing-ultimate-multisite.md), hệ thống sẽ tự động phát hiện rằng Multisite của bạn đang chạy trên phiên bản cũ và bạn sẽ thấy thông báo này ở đầu trang plugin.

_**LƯU Ý:** Nếu bạn đã cài đặt Ultimate Multisite 1.x trên Multisite của mình, bạn sẽ có tùy chọn thay thế plugin bằng phiên bản vừa tải xuống. Hãy nhấp vào **Replace current with uploaded**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

Trang tiếp theo sẽ cho bạn biết những add-on cũ nào bạn đã cài đặt cùng với phiên bản 1.x. Trang này sẽ có hướng dẫn về việc phiên bản bạn đang sử dụng có tương thích với phiên bản 2.0 hay không, hoặc bạn có cần cài đặt phiên bản nâng cấp của add-on sau khi di chuyển hay không.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Khi bạn đã sẵn sàng tiếp tục, bạn có thể nhấp vào nút **Visit the Installer to finish the upgrade**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Sau đó, bạn sẽ được đưa đến trang trình hướng dẫn cài đặt với một số thông báo chào mừng. Bạn chỉ cần nhấp **Get Started** để chuyển sang trang tiếp theo.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Sau khi nhấp **Get Started**, bạn sẽ được chuyển hướng đến trang Kiểm tra trước khi cài đặt. Trang này sẽ hiển thị Thông tin hệ thống và cài đặt WordPress của bạn, đồng thời cho bạn biết liệu nó có đáp ứng **yêu cầu của Ultimate Multisite** hay không.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Bước tiếp theo là nhập khóa bản quyền Ultimate Multisite của bạn và kích hoạt plugin. Điều này sẽ đảm bảo rằng tất cả các tính năng, bao gồm cả add-on, sẽ hoạt động trên trang web của bạn.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Sau khi nhập khóa, nhấp **Agree & Activate**.

Sau khi kích hoạt bản quyền, bạn có thể bắt đầu quá trình cài đặt thực sự bằng cách nhấp **Install** ở trang tiếp theo. Thao tác này sẽ tự động tạo các file và cơ sở dữ liệu cần thiết để phiên bản 2.0 hoạt động.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## Bây giờ, đến phần di chuyển

Trình di chuyển có tính năng an toàn tích hợp sẵn, sẽ kiểm tra toàn bộ multisite của bạn để đảm bảo rằng tất cả dữ liệu Ultimate Multisite có thể được di chuyển mà không gặp bất kỳ vấn đề nào. Nhấp nút **Run Check** để bắt đầu quá trình.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

Sau khi chạy kiểm tra, bạn có hai khả năng: kết quả có thể **có lỗi** hoặc **không có lỗi**.

### Có lỗi

Nếu bạn nhận được thông báo lỗi, bạn sẽ cần liên hệ với đội ngũ hỗ trợ của chúng tôi để họ có thể giúp bạn khắc phục lỗi. Hãy đảm bảo rằng bạn **cung cấp nhật ký lỗi** khi tạo ticket hỗ trợ. Bạn có thể tải xuống nhật ký hoặc nhấp vào liên kết có nội dung liên hệ đội ngũ hỗ trợ. Thao tác này sẽ mở tiện ích trợ giúp ở phía bên phải trang của bạn với các trường đã được điền sẵn, bao gồm cả nhật ký lỗi trong phần mô tả.

_**Vì hệ thống đã phát hiện lỗi, bạn sẽ không thể tiếp tục di chuyển sang phiên bản 2.0. Bạn có thể quay lại phiên bản 1.x để tiếp tục vận hành mạng của mình cho đến khi lỗi được khắc phục.**_

### Không có lỗi

Nếu hệ thống không tìm thấy lỗi nào, bạn sẽ thấy thông báo thành công và nút **Migrate** ở phía dưới cho phép bạn tiếp tục quá trình di chuyển. Trên trang này, bạn sẽ được nhắc tạo bản sao lưu cơ sở dữ liệu trước khi tiếp tục, điều mà chúng tôi khuyến khích mạnh mẽ. Nhấp **Migrate** nếu bạn đã có bản sao lưu.

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

Và đó là tất cả những gì bạn cần làm!

Bạn có thể tiếp tục chạy trình hướng dẫn cài đặt để cập nhật logo và những thứ khác trên mạng của mình, hoặc bắt đầu khám phá menu Ultimate Multisite phiên bản 2.0 và giao diện mới của nó. Hãy thoải mái trải nghiệm nhé.
