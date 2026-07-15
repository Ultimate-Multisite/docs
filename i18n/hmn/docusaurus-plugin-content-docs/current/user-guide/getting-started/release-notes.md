---
title: Lwm txoj kev tso cai
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# ការចេញផ្សាយកំណែ (Release Notes)

## កំណែ ២.១៣.០ — ចេញផ្សាយនៅថ្ងៃទី ៥ ខែមិថុនា ឆ្នាំ ២០២៦ {#version-2130--released-on-2026-06-05}

- ໃໝ່: ເພີ່ມການສະໜັບສະໜູນ sovereign-tenant ສຳລັບ customer account, checkout, billing, site, invoice, template switching, ແລະ domain mapping flows ເພື່ອໃຫ້ tenant networks ສາມາດນຳພາລູກຄ້າກັບຄືນສູ່ main site ສຳລັບການຈັດການທີ່ຖືກຄວບຄຸມ.
- ໃໝ່: ເພີ່ມການກວດສອບ renewal-credential ສຳລັບ membership ທີ່ເປັນປະຈຳ ເພື່ອໃຫ້ gateway ສາມາດປິດການຕໍ່ອັດຕະໂນມັດໄດ້ເມື່ອຂາດ saved billing agreement, subscription, ຫຼື vault token.
- ໃໝ່: ເພີ່ມ HMAC-verified loopback publishing ສຳລັບ site creation ທີ່ກຳລັງລໍຖ້າ ເພື່ອເຮັດໃຫ້ checkout-to-site provisioning ມີຄວາມໜ້າເຊື່ອຖືຫຼາຍຂຶ້ນໃນ host ທີ່ມີການຊັກຊ້າຂອງ background jobs.
- ໃໝ່: ເພີ່ມ developer extension points ສຳລັບ SSO URLs, checkout-form base domains, ແລະ automatic domain-record creation.
- ແກ້ໄຂ: SSO ມີຄວາມໜ້າເຊື່ອຖືຫຼາຍຂຶ້ນໃນທົ່ວ domain ທີ່ຖືກ map, anonymous broker visits, logout, ແລະ cross-plugin dependency conflicts.
- ແກ້ໄຂ: ການສ້າງ site ທີ່ກຳລັງລໍຖ້າ ເຊິ່ງປັດຈຸບັນສາມາດຟື້ນຕົວຈາກ stale publish flags ແລະ ຫຼີກລ່ຽງການເຮັດໃຫ້ລູກຄ້າជាប់ຢູ່ໜ້າ creation site.
- ແກ້ໄຂ: domain records ບໍ່ໄດ້ຖືກສ້າງຂຶ້ນສຳລັບ shared checkout-form base domains, ແລະ background jobs ຂອງ host-provider ທີ່ບໍ່ໄດ້ໃຊ້ແມ່ນຖືກຂ້າມເມື່ອບໍ່ມີ integration ເປີດໃຊ້ງານ.
- ແກ້ໄຂ: edge cases ຂອງ Checkout, billing address, password reset, email verification, template switching, tours, ແລະ customer dashboard ບໍ່ໄດ້ບລັອກ flow ປົກກະຕິຂອງລູກຄ້າອີກຕໍ່ໄປ.
- ແກ້ໄຂ: broadcast emails ເຮັດໃຫ້ຜູ້ຮັບເປັນສ່ວນຕົວໃນຂະນະທີ່ຫຼີກລ່ຽງ error ຂອງ SMTP/plugin fatal ເມື່ອ recipient lists ຫຼື mail transports ລົ້ມເຫຼວ.
- ແກ້ໄຂ: edge cases ຂອງ membership renewals, expiration display, ແລະ payment collection ບໍ່ໄດ້ເຮັດໃຫ້ເກີດການໝົດອາຍຸທັນທີ, crash, ຫຼື ການພາດການຈ່າຍເງິນທີ່ຕ້ອງການ.
- ປັບປຸງ: WordPress compatibility ໄດ້ຖືກທົດສອບເຖິງ 7.0, production Vue assets ຖືກ build ໃໝ່ຈາກ npm sources, ແລະ Cypress end-to-end coverage ເຮັດໃຫ້ມີການກວດສອບ flow checkout, setup, SSO, ແລະ gateway ຫຼາຍຂຶ້ນ.

## Phiên bản 2.12.0 — Ra mắt ngày 2026-05-15 {#version-2120--released-on-2026-05-15}

- Mới: Thêm Hostinger (hPanel) làm nhà cung cấp host hỗ trợ cùng tính năng ánh xạ tên miền (domain mapping integration).
- Mới: Site Exporter giờ có thể xử lý các gói nhập mạng (network import bundles) để khôi phục trang web trên toàn mạng một cách dễ dàng hơn.
- Sửa lỗi: Email BCC broadcast giờ sử dụng header không tiết lộ người nhận để ngăn việc lộ địa chỉ người nhận.
- Sửa lỗi: Ngày hết hạn thành viên không còn bị hỏng khi lưu bằng giá trị không phải là ngày tháng nữa.
- Sửa lỗi: Các cập nhật thành viên Stripe giờ xóa đúng các khoản giảm giá mà không cần gọi API deleteDiscount đã lỗi thời.
- Sửa lỗi: Chuyển hướng SSO trên các trang web được ánh xạ tên miền giờ bị giới hạn để ngăn vòng lặp chuyển hướng vô tận.
- Sửa lỗi: Việc chọn hình ảnh trong trình tạo thiết lập (setup wizard image picker) giờ cập nhật đúng mô hình dữ liệu cơ bản.
- Sửa lỗi: CLI của Site Exporter giờ giữ lại lựa chọn trang web mạng mặc định chính xác.
- Cải tiến: Đã loại bỏ wp-cli được đóng gói trong gói plugin, giúp giảm kích thước plugin.

## Phiên bản 2.11.0 — Ra mắt ngày 2026-05-11 {#version-2110--released-on-2026-05-11}

- Mới: Site exports giờ sẽ đóng gói một file `index.php` tự khởi động (self-booting) để bạn có thể cài đặt ZIP lên host mới mà không cần cài thêm plugin riêng.
- Mới: Network export cho phép quản trị viên xuất tất cả các trang con (subsites) thành một archive duy nhất từ trang admin Site Export.
- Mới: Tính năng bật/tắt gói Site Templates giờ được thực thi thông qua chuỗi dự phòng, giới hạn khả năng sử dụng template đúng theo giới hạn của gói dịch vụ.
- Mới: Trình chỉnh sửa form checkout sẽ cảnh báo khi bạn thêm sản phẩm mà chưa cấu hình trường bắt buộc nào.
- Mới: Tab cài đặt Import/Export giờ mô tả rõ phạm vi hoạt động và liên kết trực tiếp đến công cụ Site Export.

## Phiên bản 2.10.0 — Ra mắt ngày 2026-05-05 {#version-2100--released-on-2026-05-05}

- ໃໝ່: PayPal ຕັ້ງຄ່າແບບແນະນຳ (guided setup wizard) ສໍາລັບການໃສ່ຂໍ້ມູນດ້ວຍມື ໂດຍມີ OAuth flag ເພື່ອໃຫ້ການຕັ້ງຄ່າ gateway ເປັນໄປຢ່າງສະດວກ.
- ໃໝ່: ການປ່ຽນ template ຂອງ customer panel ໄດ້ຖືກອອກແບບໃໝ່ ໂດຍໃຊ້ card **current-template**, persistent grid, ແລະ ປຸ່ມ **Reset current template**.
- ແກ້ໄຂ: ການປ່ຽນ template ບໍ່ເຮັດໃຫ້ UI ຄ້າງຢູ່ ເມື່ອ AJAX ລົ້ມເຫຼວອີກຕໍ່ໄປ.
- ແກ້ໄຂ: ສະຖານະການອະນຸຍາດໃນການປ່ຽນ template ໄດ້ຮັບການປອດໄພຈາກການເຂົ້າເຖິງທີ່ບໍ່ໄດ້ຮັບອະນຸຍາດ.
- ແກ້ໄຂ: ການໃສ່ຂໍ້ມູນ override site ຈະຖືກກວດສອບກ່ອນບັນທຶດ.
- ແກ້ໄຂ: ຄຳຮ້ອງຂໍທີ່ຢູ່ບิล (Billing address prompt) ຈະສະແດງຂຶ້ນເມື່ອບໍ່ມີທີ່ຢູ່.
- ແກ້ໄຂ: ໄດ້ແກ້ໄຂການແຈ້ງເຕືອນ deprecation ຂອງ PHP 8.1 ສໍາລັບ null-to-string.
- ແກ້ໄຂ: ໂຄງການ lazy-loaded ປັດຈຸບັນຈະຖືກເອົາອອກກ່ອນ init hook ເພື່ອປ້ອງກັນບັນຫາ timing.
- ແກ້ໄຂ: SSO path filter ໄດ້ຮັບການເຄົາລົບໃນທຸກ luw flows ການເຂົ້າສູ່ລະບົບ.
- ແກ້ໄຂ: ທາງເລືອກ site identity ທີ່ຫວ່າງເປົ່າໄດ້ຖືກຮັກສາໄວ້ເມື່ອບັນທຶດ.

## 2.9.0 — ເປີດຕົວໃນວັນທີ 2026-04-30 {#version-290--released-on-2026-04-30}

- ໃໝ່: ເພີ່ມການສົ່ງອອກ ແລະ ນຳເຂົ້າ single-site ໃສ່ໃນ **Tools > Export & Import**.
- ແກ້ໄຂ: ໄຟລ໌ ZIP ສົ່ງຜ່ານ download endpoint ທີ່ໄດ້ຮັບການ authenticate ແລ້ວ.
- ແກ້ໄຂ: ໄດ້ແກ້ໄຂຄວາມສ່ຽງ SQL injection ແລະ ปัญหา query ໃນ pending export/import queries.
- ແກ້ໄຂ: site ທີ່ຄ້າງຢູ່ຈະບໍ່ຖືກ publish ເມື່ອ admin ກວດສອບ email customer ດ້ວຍຕົນເອງ.
- ແກ້ໄຂ: ລາຍການ pending_site ທີ່ໂສກເຫຼືອຈະຖືກລຶບອອກເມື່ອບໍ່ມີ membership.
- ແກ້ໄຂ: ການຈັດຮູບແບບ padding navigation ແລະ anchor search ໄດ້ຮັບການແກ້ໄຂ.
- ແກ້ໄຂ: site ທີ່ຄ້າງຢູ່ຈະສະແດງເປັນອັນດັບທໍາອິດໃນ view All Sites.
- ແກ້ໄຂ: ເພີ່ມ User-Agent header ຂອງ screenshot provider (mShots) ເພື່ອປ້ອງກັນ error 403.
- ແກ້ໄຂ: ໄດ້ແກ້ໄຂ circular dependency ຂອງ import cron schedule.
- ແກ້ໄຂ: Tour IDs ຖືກເຮັດໃຫ້ເປັນ underscore ໃນ user settings keys.
- ປັບປຸງ: ໃຊ້ ZipArchive ແທນ Alchemy/Zippy ເພື່ອຄວາມເຂົ້າກັນໄດ້ທີ່ດີກວ່າ.

## 2.8.0 — ເປີດຕົວໃນວັນທີ 2026-04-29 {#version-280--released-on-2026-04-29}

- ໃໝ່: ເປີດໃຊ້ Jumper toggle ໃນການຕັ້ງຄ່າ Other Options UI ແລ້ວ.
- ໃໝ່: ເພີ່ມຄໍລumn Statusເຂົ້າໃນຕາຕະລາງ checkout forms list.
- ໃໝ່: ເພີ່ມ Addon sunrise file loader ສຳລັບ custom MU-plugin sunrise extensions.
- ປັບປຸງ: ລຶບການຕັ້ງຄ່າ error-reporting opt-in ອອກຈາກ settings page ແລ້ວ.
- ແກ້ໄຂ: thank-you page site card — ຮູບພາບຖືກຈຳກັດຂຶ້ນ ແລະ ລິ້ງຖືກຈັດຮູບແບບແລ້ວ.
- ແກ້ໄຂ: ຜູ້ສະໜອງ screenshot ປ່ຽນຈາກ thum.io ເປັນ WordPress.com mShots.
- ແກ້ໄຂ: ການลงทะเบียน (Registration) ແລະ Default Role ເປີດໃຊ້ຕັ້ງຄ່າເລີ່ມຕົ້ນຖືກຕ້ອງແລ້ວໃນການຕິດຕັ້ງໃໝ່.
- ແກ້ໄຂ: `get_site_url()` ບໍ່ໄດ້ສົ່ງຄືຫວ່າງອີກ ເມື່ອ domain ມີ port ນຳ.
- ແກ້ໄຂ: ການຄັດລອກໄຟລ໌ media ເຮັດຖືກຕ້ອງແລ້ວເມື່ອການຕັ້ງຄ່າ `copy_media` ເປັນຄ່າຫວ່າງ.
- ແກ້ໄຂ: Object cache ຖືກ invalidate ຢ່າງຖືກຕ້ອງຫຼັງຈາກ network-activate sitemeta write.
- ແກ້ໄຂ: custom domain ຖືກ auto-promote ເປັນ primary ໃນ DNS verification ສຳລັບ domain 3-parts.
- ແກ້ໄຂ: pending membership ຈະຖືກຍົກເລີກເມື່ອການຈ່າຍເງິນໝົດອາຍຸຖືກເຮັດຄວາມສະອາດແລ້ວ.
- ແກ້ໄຂ: password strength checker ຖືກ reset ເມື່ອ prompt ໃສ່ລະຫັດຜ່ານແບບ inline ຖືກປິດ.
- ແກ້ໄຂ: ການໂຫຼດໜ້າເພີ່ມເຕີມບໍ່ຈຳເປັນ (Infinite page reload) ຖືກຢຸດເມື່ອຢູ່ໃນ thank-you page ເວລາ site ຖືກສ້າງຂຶ້ນແລ້ວ.
- ແກ້ໄຂ: ຕົວເລືອກການลงทะเบียนຂອງ WP core ຈະຖືກ đồng bộເມື່ອ plugin ຖືກ activate ແລະ settings ຖືກບັນທຶກ.
- ແກ້ໄຂ: ເພີ່ມ null expiration guard ໃນ `calculate_expiration` ສຳລັບຄວາມເຂົ້າກັນໄດ້ກັບ PHP 8.4.
- ແກ້ໄຂ: ປ້ອງກັນການลงทะเบียนຊໍ້າ (Duplicate signups) ຈະຖືກບລັອກເມື່ອລູກຄ້າມີ membership ທີ່ເຄື່ອນໄຫວຢູ່ແລ້ວ.
- ແກ້ໄຂ: ເພີ່ມ null check ສຳລັບ `date_expiration` ໃນ checkout.
- ແກ້ໄຂ: ການຈັດຕັ້ງ site (Site provisioning) ຖືກເຮັດໃຫ້ເຂັ້ມງວດຂຶ້ນ — ຈຳກັດການໃຊ້ງານ, membership inference, ແລະ domain promotion.
- ແກ້ໄຂ: label ສະຖານະ pre-install check ຖືກແກ້ໄຂເປັນ NOT Activated ເມື່ອການກວດສອບລົ້ມເຫຼວ.
- ແກ້ໄຂ: checkout domain ຖືກນຳໃຊ້ສຳລັບ URL ການຢືນຢັນ email.
- ແກ້ໄຂ: auto-login ຫຼັງຈາກ checkout ເວລາບໍ່ມີ password field ແມ່ນບໍ່ໄດ້ເຮັດອີກ.
- ແກ້ໄຂ: membership ຟຣີ ຈະບໍ່ໝົດອາຍຸອີກ — ຖືວ່າເປັນ lifetime (ໃຊ້ຕະຫຼອດໄປ).

- แก้ไข: ประตูยืนยันอีเมล (Email verification gate) จะหยุดการเผยแพร่เว็บไซต์ จนกว่าลูกค้าจะยืนยันอีเมลเรียบร้อยแล้ว
- แก้ไข: เส้นทางพื้นฐานของ endpoint API SES v2 และเส้นทางตัวตน (identity route) ได้รับการแก้ไขแล้ว
- แก้ไข: hook ชื่อ `wu_inline_login_error` ถูกปล่อยออกมาในบล็อก catch ของ pre-submit
