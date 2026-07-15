---
title: ចុះឈ្មោះគណនីតាមរយៈ Zapier
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Sự kiện: ลงทะเบียนบัญชีผ่าน Zapier

Trong bài viết [Tích hợp Ultimate Multisite với Zapier](zapier.md), chúng ta đã thảo luận về cách sử dụng Zapier để thực hiện các hành động khác nhau trong Ultimate Multisite dựa trên các trigger và event. Trong bài viết này, chúng tôi sẽ chỉ cho bạn cách tích hợp các ứng dụng bên thứ ba. Chúng ta sẽ sử dụng Google Sheets làm nguồn dữ liệu và gửi thông tin đó đến Ultimate Multisite để đăng ký tài khoản.

Trước khi kết nối Zapier, hãy truy cập **Ultimate Multisite > Settings > API & Webhooks** và xác nhận rằng API đã được bật. Sao chép API Key và API Secret từ màn hình này khi Zapier yêu cầu thông tin tài khoản Ultimate Multisite.

![Cài đặt API và Webhooks với API Key, API Secret và tùy chọn Bật API](/img/admin/settings-api-webhooks.png)

Đầu tiên, bạn cần tạo một **Google Sheet** trong Google Drive của mình. Hãy đảm bảo bạn định nghĩa đúng từng cột để sau này có thể ánh xạ dữ liệu một cách dễ dàng.

Sau khi tạo Google Sheet, bạn có thể đăng nhập vào tài khoản Zapier của mình và bắt đầu tạo một zap.

Trong ô tìm kiếm cho **"App event"**, hãy chọn **"Google Sheets"**.

Sau đó, đối với trường "**Event**", hãy chọn "**New spreadsheet row**" (Dòng bảng tính mới) và nhấn "**Continue**" (Tiếp tục).

Bước tiếp theo sẽ yêu cầu bạn chọn một **Google Account** nơi Google Sheet được lưu. Vì vậy, chỉ cần đảm bảo rằng tài khoản Google chính xác đã được chỉ định.

Trong phần **"Set up trigger"**, bạn sẽ cần chọn và chỉ định Google Spreadsheet và worksheet mà bạn sẽ sử dụng để dữ liệu đến từ đó. Chỉ cần điền thông tin đó và nhấn "**Continue**".

Tiếp theo là "**test your trigger**" (kiểm tra trigger của bạn) để đảm bảo rằng Google Sheet của bạn đã được kết nối đúng cách.

Nếu bài kiểm tra của bạn thành công, bạn sẽ thấy kết quả hiển thị một số giá trị từ các bảng tính của mình. Nhấn "**Continue**" để tiếp tục.

ជំហានបន្ទាប់គឺការកំណត់រចនាសម្ព័ន្ធសកម្មភាពទីពីរ ដែលនឹងបង្កើត ឬចុះឈ្មោះគណនីនៅក្នុង Ultimate Multisite។ នៅលើវាលស្វែងរក សូមជ្រើសរើស "**Ultimate Multisite(2.0.2)** "

នៅក្រោមវាល "**Event** " សូមជ្រើសរើស "**Register an Account in Ultimate Multisite** " រួចចុចប៊ូតុង "**Continue** "។

នៅក្រោម "**Set up an action** " អ្នកនឹងឃើញវាលផ្សេងៗសម្រាប់ទិន្នន័យអតិថិជន ការជាសមាជិក ផលិតផល ជាដើម។ អ្នកអាចភ្ជាប់ (map) តម្លៃទាំងនោះទៅក្នុង Google Sheet របស់អ្នក ហើយកំណត់វាទៅវាលដែលត្រឹមត្រូវ ដែលគួរតែត្រូវបានបំពេញតាមរូបភាពបង្ហាញខាងក្រោម។

បន្ទាប់ពីភ្ជាប់តម្លៃរួច អ្នកអាចសាកល្បងសកម្មភាពនេះបាន។
