---
title: Тусламжийн тасалбаруудын өөрчлөлтийн бүртгэл
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Support Tickets өөрчлөлтийн бүртгэл

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Сайжруулсан: vendor/ санг Git хяналтаас хассан (.gitignore-д аль хэдийн хамрагдсан), ингэснээр repository хэмжээ багассан
* Сайжруулсан: WordPress 7.0 хүртэл туршсан

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Засвар: Nullable ticket model setters-д null утгуудыг зөвшөөрсөн
* Засвар: Multisite дэмжлэгийг зөв хангахын тулд бүх ticket-үүдийг global network-wide хүснэгтүүдэд хадгалдаг болгосон
* Засвар: Staff талбаруудыг нууж, хэрэглэгчийн шинэ ticket маягт дээрх хоосон хуудас руу redirect хийхийг зассан
* Засвар: Metadata хадгалалтад undefined add_meta() дуудлагуудыг зөв update_meta()-аар сольсон
* Засвар: Бүртгэгдээгүй capability шалгалтыг зөв wu_view_all_support_tickets-аар сольсон
* Засвар: Ticket status, assignment, quick-edit үйлдлүүдэд дутуу AJAX handlers нэмсэн
* Засвар: Ticket views дотор staff response илрүүлэх method нэрийг зассан
* Засвар: Давхардсан reply handlers-ийг нэгтгэж, nonce action нэрүүдийг нийцүүлсэн
* Засвар: [wu_submit_ticket] shortcode-д дутуу frontend view нэмсэн
* Засвар: Дутуу user_id багана нэмж, Support_Ticket::get_user_id() method-ыг зассан
* Засвар: Priority filter option tag дахь илүү давхар хашилтыг устгасан
* Засвар: Super admins-д зориулсан network admin ticket management panel нэмсэн
* Сайжруулсан: Admin CSS-ийг нэг external stylesheet-д нэгтгэсэн
* Сайжруулсан: Subsite admin menu-ээс Settings submenu-г устгасан
* Сайжруулсан: Frontend assets-ийг зөвхөн support ticket хуудсууд дээр нөхцөлтэйгөөр ачаалдаг болгосон
* Сайжруулсан: Bedrock root autoloader dependencies-ийг аль хэдийн ачаалсан үед plugin autoloader-ийг алгасдаг болгосон

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Нэмсэн: Admin болон frontend-д зориулсан ticket бүрэн үзэх ажиллагаа
* Нэмсэн: Ticket reply илгээхэд зориулсан AJAX handler
* Нэмсэн: Зөв form handling бүхий ticket reply ажиллагааны дэмжлэг
* Нэмсэн: Admin дотор ticket submissions болон replies-д зориулсан зөв notice display
* Нэмсэн: Хэрэглэгч өөрөө илгээх үед одоогийн хэрэглэгчтэй ticket-ийг автоматаар холбох
* Нэмсэн: Хэрэглэгчид ticket ownership-ийг өөрчлөн дарахаас сэргийлэх security enhancement
* Нэмсэн: Дутуу helper functions (wu_format_date, wu_user_can_view_ticket, гэх мэт)
* Нэмсэн: Файлын attachment-ийг зөв татах болон боловсруулах
* Нэмсэн: Ticket replies болон status changes-д зориулсан email notification system
* Зассан: Ticket reply form одоо шаардлагатай ticket ID-г агуулдаг болсон
* Зассан: Admin ticket views дахь notice visibility асуудлууд
* Зассан: Support ticket functions дахь syntax errors
* Сайжруулсан: Responses болон attachments-д зориулсан зөв query болон schema classes бүхий database structure
* Сайжруулсан: Ticket models-д attributes-ийн оронд жинхэнэ properties руу migration хийсэн

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Шинэчилсэн: Тогтвортой байдлын үүднээс prefix-ийг ultimate-multisite болгож өөрчилсөн
* Шинэчилсэн: Text domain standardization
* Зассан: Жижиг bug fixes болон improvements

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Анхны хувилбар
* Бүрэн ticket management system
* Олон түвшний access control
* Threaded conversation system
* File attachment support
* Email notification system
* Admin болон хэрэглэгчийн interfaces
* Statistics болон reporting
