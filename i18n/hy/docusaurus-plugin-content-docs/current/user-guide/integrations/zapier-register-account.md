---
title: Գրանցվեք հաշիվը՝ օգտագործելով Zapier-ը
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Sự kiện: Zapier thông qua Google Sheets đăng ký tài khoản

Bài viết [Tích hợp Ultimate Multisite với Zapier](zapier.md) đã thảo luận về cách sử dụng Zapier để thực hiện các hành động khác nhau trong Ultimate Multisite dựa trên các trigger và sự kiện. Trong bài viết này, chúng ta sẽ cho bạn thấy cách tích hợp các ứng dụng bên thứ ba. Chúng ta sẽ sử dụng Google Sheets làm nguồn dữ liệu và gửi thông tin đến Ultimate Multisite để đăng ký tài khoản.

Trước khi kết nối Zapier, hãy truy cập **Ultimate Multisite > Settings > API & Webhooks** và xác nhận rằng API đã được bật. Sao chép API Key và API Secret từ màn hình này khi Zapier yêu cầu thông tin tài khoản Ultimate Multisite.

![Cài đặt API và Webhooks với API Key, API Secret và tùy chọn Bật API](/img/admin/settings-api-webhooks.png)

Đầu tiên, bạn cần tạo một **Google Sheet** trong Google Drive của mình. Hãy đảm bảo bạn định nghĩa đúng từng cột để có thể ánh xạ dữ liệu dễ dàng sau này.

Sau khi tạo Google Sheet, bạn có thể đăng nhập vào tài khoản Zapier của mình và bắt đầu tạo một zap.

Trong trường tìm kiếm cho **"App event"** (Sự kiện ứng dụng), hãy chọn **"Google Sheets"**.

Sau đó, đối với trường "**Event**" (Sự kiện), hãy chọn "**New spreadsheet row**" (Dòng bảng tính mới) và nhấn "**Continue**" (Tiếp tục).

Bước tiếp theo sẽ yêu cầu bạn chọn một **Google Account** (Tài khoản Google) nơi Google Sheet được lưu. Vì vậy, chỉ cần đảm bảo rằng tài khoản Google chính xác đã được chỉ định.

Trong phần **"Set up trigger"** (Thiết lập trigger), bạn sẽ cần chọn và chỉ định Google Spreadsheet và worksheet mà bạn sẽ sử dụng để dữ liệu đến từ đó. Chỉ cần điền thông tin vào đó và nhấn "**Continue**".

Tiếp theo là "**test your trigger**" (Kiểm tra trigger) để đảm bảo rằng Google Sheet của bạn đã được kết nối đúng cách.

Nếu bài kiểm tra của bạn thành công, bạn sẽ thấy kết quả hiển thị một số giá trị từ các bảng tính của mình. Nhấn "**Continue**" để tiếp tục.

Հաջորդ քայլը կլինի երկրորդ գործողության սահմանումը՝ Ultimate Multisite-ում հաշիվ ստեղծելու կամ գրանցելու համար։ Փնտրման դաշտում ընտրեք "**Ultimate Multisite(2.0.2)**"։

"Event" (Իրադարձություն) դաշտի ներքո, ընտրեք "**Register an Account in Ultimate Multisite**" և սեղմեք "**Continue**" (Շարունակել) կոճակը։

"Set up an action" (Գործողության սահմանում) բաժնում դուք կտեսնեք տարբեր դաշտեր՝ հաճախորդի տվյալների, անդամակցության, ապրանքների և այլ բաների համար։ Կարող եք ձեր Google Sheet-ի արժեքները համապատասխանեցնել (map) և դրանք տեղադրել այն համապատասխան դաշտերում, որտեղ պետք է լինեն՝ ինչպես ցույց է տրված ս크риншотում։

Արժեքները համապատասխանեցնելուց հետո կարող եք փորձարկել գործողությունը։
