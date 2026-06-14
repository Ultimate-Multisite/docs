---
title: Ndem Email na Broadcasts
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# Gửi Emails na Broadcasts (v2)

_**LƯU Ý QUAN TRỌNG: Bài viết này đề cập đến Ultimate Multisite phiên bản 2.x.**_

Ultimate Multisite có một tính năng cho phép bạn giao tiếp với khách hàng bằng cách gửi email đến người dùng cụ thể hoặc một nhóm người dùng, cũng như gửi thông báo trên bảng điều khiển quản trị (admin dashboard) của họ để phát đi các thông báo chung.

## Thêm thông báo quản trị vào bảng điều khiển của khách hàng với Broadcasts

Sử dụng tính năng broadcast của Ultimate Multisite, bạn có thể thêm **thông báo quản trị** vào bảng điều khiển admin của subsite người dùng đó.

Điều này cực kỳ hữu ích nếu bạn cần đưa ra một thông báo như bảo trì hệ thống hoặc giới thiệu sản phẩm/dịch vụ mới cho những người dùng hiện tại của mình. Đây là cách thông báo quản trị sẽ hiển thị trên dashboard của người dùng đó.

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

Để bắt đầu một thông báo quản trị, hãy vào bảng điều khiển admin mạng (network admin dashboard) của bạn và dưới menu **Ultimate Multisite**, bạn sẽ tìm thấy tùy chọn **Broadcasts**.

![Broadcasts list page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Bạn cũng có thể chỉnh sửa các broadcast đã có:

![Broadcast edit interface](/img/admin/broadcast-edit.png)

Từ trang này, hãy nhấp vào nút **Add Broadcast** ở trên cùng.

Điều này sẽ mở cửa sổ modal Add broadcast nơi bạn có thể chọn loại broadcast mà bạn muốn gửi.

Hãy tiến hành chọn **Message** rồi nhấp vào nút **Next Step**.

![Add broadcast modal with the Message option selected](/img/admin/broadcast-add-message.png)

Cửa sổ tiếp theo sẽ hỏi bạn về **Target customer** (Khách hàng mục tiêu) hoặc **Target product** (Sản phẩm mục tiêu). Lưu ý rằng bạn có thể chọn nhiều hơn một người dùng hoặc nhiều hơn một sản phẩm.

Kamar ịgba nkwado ọ bụrụ ma ihe ị chọrọ ịhụ, ị ga-agba nkwado ahụ n'ime field ahụ.

N'ime field **Message type**, ị ga-abịa kọwa nkwado nke akụkọ ahụ. A ga-arị eziokwu na ọ bụ ihe dị mkpa nke nkwado gị.

Ọ bụrụ na ị chọrọ, ị ga-agba **Next Step**.

![Target customers, target product and message type fields for a Message broadcast](/img/admin/broadcast-message-targets.png)

N'ime window ahụ, ị ga-bata mme nkwado gị ma ị gbanne subject na content/message ị chọrọ ịgba nkwado ya n'ime ndị ọrụ.

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

Ọ bụrụ na ị chụrụ mme, ị ga-agba button **Send**.

Ma ahụ bụ ihe niile. Ihe a gbara n'ime admin dashboard ya ga-abịa n'ime dashboard ọrụ gị hemen dị ka anaa.

## Ịgba email anyịkoro gị

N'ime feature broadcast na Ultimate Multisite, ị ga-abịa email anyịkoro gị. Ọ bụ chi ị chọrọ ịgba email ya n'ime ndị ọrụ ma ị chọrọ ịgba ya n'ime akụkọ ọ bụ akụkọ ahụ nke anọchịrị na ebe ị chọrọ, dịka ihe ọ bụ akụkọ ma plan ị nwere subscription ya.

Iji gbanne email broadcast, jikọpụta n'ime admin dashboard anyịkoro gị ma n'ime menu Ultimate Multisite, ị ga-abịa option Broadcast.

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

N'ime page a, jikọpụta button **Add broadcast** na akauru.

Ọ ga-abịa modal window Add broadcast ahụ ma ị ga-chọn ihe ị chọrọ ịgba nkwado. Jikọpụta select **Email** tarere ma jikọpụta button **Next Step**.

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

N'ime window ahụ ga-bata gị **Target customer** ma ọ bụ **Target product**. Ọ bụ ihe ị chọrọ ịgbara okwu na ọ bụrụ na ị chọrọ ịgbara okwu n'ime ndị ọrụ ma ọ bụ akụkọ ọzọ.

Kamar ịgba nkwado ọ bụrụ ma ihe ọprodukụ ị chọrọ, ị ga-agba nkwado (keyword) ọkụkọ (field) ahụ.

Ọ bụrụ na ị gachie onye ị chọrọ (target audience), ị nwere ike ịkpọ **Next Step**.

![Target customers and target product selection for an Email broadcast](/img/admin/broadcast-email-targets.png)

Nkwado kacha akụkọ ahụ bụ ya na ị nwere ike ịbegbụ nwere ike ịgba email gara na byara gị (subject) na ihe ọrụ/nkwado (content/message) ị chọrọ ịgba n'ụlọ ndị mmadụ.

<!-- Screenshot unavailable: Email broadcast subject and content editor on the compose step -->

Ọ bụrụ na ị chụrụ nkwado gị, ị nwere ike ịkpọ nút **Send**.

Ma ọ bụ, ọ dị ka ịgba email gara n'ụlọ ndị mmadụ gị olu (feature) broadcast ahụ.

## System emails

System emails na Ultimate Multisite bụ ihe ndị a-agbaje **notifications automatic** nke sistemahọ nwere ike ịgba onwe ya anọchaaka ọrụ dị ka ịregistre, ịkwado, ịgba domain, na ihe ndị ọzọ. Ọ bụrụ na ị chọrọ, ị nwere ike ịgbagwa ma ọ bụ ịgbakọta (modify) email ndị a n'ime settings Ultimate Multisite. Ọkụkọ ahụ kuma ihe dị ka ị nwere ike ịgbagwa ma ọ bụ ịgbakọta settings dị na instalasiya Ultimate Multisite ọzọ.

### Resetting & Importing

Nkwado Ultimate Multisite ndị baru, na taimaka a, na add-ons, ga-agbaje email ndị baru anọchaaka n'ụlọ dị ka onye ọ bụla.

Ọ bụrụ na ị chọrọ ịgbakọta ihe ndị a dịka ịdị mma ma ọ bụ ịgba nkwado (import) settings dị na instalasiya Ultimate Multisite ọzọ, **anyị ga-agbaje email templates baru ahụ dịka System Emails n'instalasiya gị anọchaaka**, ma ọ bụrụ na ha dị mkpa maka ịdị mma nke onye ọrụ ahụ.

Ọ bụrụ na ị bụ super admin ma agent, ị nwere ike ịgba email ndị a baru anọchaaka ya olu importer (importer tool). Ọrụ na ihe a ga-agbaje email system new na isi okwu na akụkọ nke template email baru ahụ, ọ ga-anọchịrị onye super admin ịgbakọta ihe ọ bụla ị chọrọ ma ọ bụ ịdị ya dị ka ọ bụ.

#### How to import system emails

Họ đi đến trang Cài đặt Ultimate Multisite của bạn và vào tab **Emails**.

![Tab Emails trong cài đặt Ultimate Multisite hiển thị phần System Emails](/img/config/settings-emails-tab.png)

Sau đó, trên thanh bên (sidebar), hãy nhấn nút **Customize System Emails** (Tùy chỉnh Email Hệ thống).

<!-- Screenshot unavailable: Nút Customize System Emails trên bảng điều khiển sidebar System Emails -->

Trên trang System Emails, bạn sẽ thấy nút hành động **Reset & Import** ở phía trên cùng. Nhấn vào nút đó sẽ mở cửa sổ modal để nhập (import) và đặt lại (reset).

![Nút Reset hoặc Import trên trang quản trị System Emails](/img/admin/system-emails-reset-import.png)

Sau đó, bạn có thể bật các tùy chọn Import Emails để xem những email hệ thống nào có sẵn để nhập vào.

<!-- Screenshot unavailable: Modal Reset và Import với các tùy chọn Import Emails được mở rộng -->

#### Đặt lại Email Hệ thống (Reseting System Emails)

Đôi khi, bạn sẽ nhận ra rằng những thay đổi bạn đã thực hiện cho một mẫu email cụ thể không còn hoạt động với mình nữa và bạn muốn đặt nó về **trạng thái mặc định** của nó.

Trong những trường hợp như vậy, bạn có hai lựa chọn: bạn có thể đơn giản là xóa email hệ thống đó và nhập lại (sử dụng hướng dẫn ở trên) - điều này sẽ xóa các số liệu gửi đi và những thứ khác, vì vậy phương pháp này ít được ưu tiên nhất.

Hoặc bạn có thể sử dụng **Reset & Import tool** để đặt lại mẫu email đó.

Để đặt lại một mẫu email, bạn có thể làm theo các bước ở trên cho đến khi bạn đến công cụ Reset & Import, sau đó, bật tùy chọn **Reset** và chọn những email mà bạn muốn đặt lại về nội dung mặc định của chúng.

<!-- Screenshot unavailable: Modal Reset và Import với các tùy chọn Reset Emails được mở rộng -->
