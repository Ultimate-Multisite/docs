---
title: Txhawm thiab Tuaj
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Xuất và Nhập

Ultimate Multisite 2.9.0 thêm một công cụ **Xuất & Nhập** cho trang đơn lẻ dưới mục **Tools > Export & Import**. Bạn sử dụng nó khi cần đóng gói một trang WordPress thành tệp ZIP, khôi phục tệp ZIP đó, hoặc di chuyển một trang giữa các cài đặt WordPress Ultimate Multisite và trang đơn lẻ tương thích.

## Quyền yêu cầu

Bạn phải đăng nhập với tư cách là quản trị viên có thể truy cập menu **Tools** của WordPress trên trang bạn đang xuất hoặc nhập. Trên mạng đa trang (multisite), hãy sử dụng tài khoản quản trị viên mạng khi xuất hoặc nhập các trang con từ các công cụ Ultimate Multisite cấp mạng.

Các tệp tải xuống ZIP được phục vụ thông qua một điểm cuối tải xuống đã xác thực, vì vậy hãy giữ phiên quản trị viên hoạt động cho đến khi quá trình tải xuống hoàn tất và không chia sẻ các URL tải xuống được tạo ra công khai.

## Xuất trang sang ZIP

1. Trong admin WordPress của trang bạn muốn sao chép, đi tới **Tools > Export & Import**.
2. Mở khu vực xuất và chọn trang bạn muốn đóng gói.
3. Chọn nội dung tùy chọn cần bao gồm, chẳng hạn như tệp tải lên (uploads), plugin và theme, khi các tùy chọn đó có sẵn.
4. Bắt đầu quá trình xuất và đợi quá trình hoàn tất. Các trang lớn có thể cần phải chạy ngầm trước khi ZIP sẵn sàng.
5. Tải xuống tệp ZIP đã hoàn thành từ danh sách xuất.

Hãy giữ tệp ZIP ở một nơi an toàn. Nó có thể chứa nội dung trang, cài đặt, tệp đa phương tiện (media files) và các tài sản mã được chọn.

## Nội dung khi xuất

Một tệp ZIP xuất có thể bao gồm:

- Nội dung cơ sở dữ liệu và cấu hình của trang đã chọn.
- Các tệp đa phương tiện đã tải lên khi chúng được bao gồm.
- Plugin và theme khi các tùy chọn đó được chọn.
- Dữ liệu siêu dữ liệu (metadata) được sử dụng bởi công cụ Xuất & Nhập để xây dựng lại trang trên cài đặt đích.

ZIP file chu xis neem chawm nuam media, xim plugin thiab theme, thiab site database tables no xim li cas.

## Site hauv ZIP los tso (Importing a site from a ZIP)

1. Tsim lub **Tools > Export & Import** rau WordPress site uas koj thov los.
2. Lò koj lub import area ntawd los thiab upload lub ZIP uas tab tom ua tau ntawm Export & Import tool.
3. Siv URL tshiab (replacement URL) heev ib yam tam sim peb yuav siv leej tshiab, lossis tsis tuaj yeem siv qhia (leave the field blank) los txhua URL uas muaj kom zoo li u thov los.
4. Xim tias koj yuav tso lub ZIP uas upload los hauv sau ntawd hauv peb tsis txhob ua ib yam los tso (delete the uploaded ZIP) thaum import tej yam tsis tas tam.
5. Thawm **Begin Import**.
6. Tso koj xim rau import uas tseem tsis tso (pending import) los tso hauv peb tsis tas tam. Siv **Cancel Import** yog tias koj xav txhob tso lub luag no tsis tas tam thaum peb ua tiav.
7. Tom qab site uas import los loj peb yuav tso traffic txawm lossis customer access.

Ha cov WordPress installation uas muaj site hauv ib leeg, siv ZIP los tso yuav lub site uas ceeb los ntawm lub site uas import los. Tsim backup zoo tshaj plaws (full backup) ntawm site uas koj xav los tso thaum koj mus rov los, thiab tsis txhob mus ua import ntau rau ib site los ib yam tig luag hnub.

## Limitations and compatibility notes

---

- ຖ້າ你有 thư mục upload ໃຫຍ່ໆ ຫຼື media library ທີ່ໃຫຍ່ຫຼາຍ, ມັນອາດຈະສ້າງ file ZIP ທີ່ມີຂະໜາດໃຫຍ່. ກະລຸນາຢືນຢັນຈຳກັດການ upload ຂອງ PHP, ຈຳກັດການເຮັດວຽກ (execution limits), ພື້ນທີ່ໃນ disk, memory, ແລະ server timeout settings ກ່ອນທີ່ຈະ export ຫຼື import ເຊື້ອຊົງໃຫຍ່ໆ.
- Media library ທີ່ໃຫຍ່ຫຼາຍອາດຈະຕ້ອງຖືກຍ້າຍໃນຊ່ວງເວລາບໍາລຸງຮັກສາທີ່ມີການເຂົ້າເຖິງໜ້ອຍ.
- ການຕິດຕັ້ງ WordPress ປາຍທາງ (target installation) ຄວນໃຊ້ WordPress, PHP, Ultimate Multisite, plugin, ແລະ theme versions ທີ່ເຂົ້າກັນໄດ້.
- ການ import site ແບບ single-site ຈະມາແທນທີ່ site ປາຍທາງ. ມັນບໍ່ແມ່ນເຄື່ອງມື merge ເພື່ອລວມຂໍ້ມູນ.
- ການຍ້າຍຈາກ Multisite-to-single-site ແລະ single-site-to-multisite ຈະຖືກສະໜັບສະໜູນໄດ້ຕໍ່ເມື່ອ environment ປາຍທາງສາມາດເຮັດວຽກກັບ plugins, themes, URLs, ແລະ components ຂອງ Ultimate Multisite ທີ່ຕ້ອງການຂອງ site ທີ່ export ອອກມາໄດ້.
- ເຮັດ file ZIP ໃຫ້ເປັນສ່ວນຕົວ (private). ມັນອາດຈະມີເນື້ອໃນ database, file ທີ່ upload ເຂົ້າໄປ, ແລະ ລາຍລະອຽດການຕັ້ງຄ່າຈາກ site ທີ່ export ອອກມາ.

ສຳລັບ workflow ການ export ໃນລະດັບ network ເກົ່າໆ, ກະລຸນາເບິ່ງ [Site Export](/user-guide/administration/site-export).
