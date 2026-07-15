---
title: Nkwado Ọrụ
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Ghi Ché Opụrụ (Release Notes)

## Versi 2.13.0 — A nwereike na 2026-06-05 {#version-2130--released-on-2026-06-05}

- Baru: Thêm hỗ trợ sovereign-tenant cho tài khoản khách hàng, thanh toán, hóa đơn, trang web, chuyển đổi mẫu (template switching) và ánh xạ tên miền để các mạng lưới tenant có thể hướng khách hàng quay lại trang chính cho các thao tác được quản lý.
- Mới: Thêm kiểm tra thông tin gia hạn cho các gói thành viên định kỳ để các gateway có thể vô hiệu hóa tự động gia hạn khi thiếu thỏa thuận thanh toán, đăng ký hoặc mã kho (vault token) đã lưu.
- Mới: Thêm xuất bản loopback được xác minh bằng HMAC cho việc tạo trang web đang chờ xử lý để việc cấp phát trang web từ thanh toán trở nên đáng tin cậy hơn trên các host mà công việc nền bị chậm trễ.
- Mới: Thêm các điểm mở rộng (extension points) dành cho nhà phát triển cho các URL SSO, tên miền cơ sở của form thanh toán và tạo bản ghi tên miền tự động.
- Sửa lỗi: SSO giờ đây đáng tin cậy hơn trên các tên miền đã được ánh xạ, các lần truy cập qua trình trung gian ẩn danh, đăng xuất và xung đột giữa các plugin.
- Sửa lỗi: Việc tạo trang web đang chờ xử lý hiện sẽ phục hồi từ các cờ xuất bản cũ và tránh việc khách hàng bị kẹt ở màn hình tạo trang web.
- Sửa lỗi: Các bản ghi tên miền không còn được tạo cho các tên miền cơ sở của form thanh toán dùng chung, và các công việc nền của nhà cung cấp host không được sử dụng sẽ bị bỏ qua khi không có tích hợp nào đang hoạt động.
- Sửa lỗi: Các trường hợp biên (edge cases) như thanh toán, địa chỉ thanh toán, đặt lại mật khẩu, xác minh email, chuyển đổi mẫu, tour và bảng điều khiển khách hàng không còn chặn các luồng khách hàng thông thường nữa.
- Sửa lỗi: Email gửi hàng loạt giờ sẽ giữ quyền riêng tư cho người nhận trong khi tránh các lỗi nghiêm trọng của SMTP/plugin khi danh sách người nhận hoặc truyền thư bị lỗi.
- Sửa lỗi: Các trường hợp biên như gia hạn thành viên, hiển thị ngày hết hạn và thu tiền thanh toán hiện tránh được việc hết hạn ngay lập tức, sập hệ thống hoặc bỏ lỡ các khoản thanh toán bắt buộc.
- Cải tiến: Khả năng tương thích với WordPress đã được kiểm tra đến phiên bản 7.0, tài sản Vue cho môi trường production được xây dựng lại từ nguồn npm, và phạm vi kiểm thử end-to-end của Cypress hiện thực hiện nhiều luồng thanh toán, thiết lập, SSO và gateway hơn.

## Versi 2.12.0 — Phát hành vào ngày 15-05-2026 {#version-2120--released-on-2026-05-15}

- Mới: Đã thêm Hostinger (hPanel) làm nhà cung cấp host được hỗ trợ với tích hợp ánh xạ tên miền.
- Mới: Site Exporter giờ xử lý các gói nhập mạng để khôi phục trang web trên toàn mạng một cách thuận tiện hơn.
- Sửa lỗi: Các email broadcast BCC hiện sử dụng tiêu đề người nhận không công khai để ngăn lộ địa chỉ người nhận.
- Sửa lỗi: Ngày hết hạn thành viên không còn bị hỏng khi lưu với giá trị không phải là ngày tháng.
- Sửa lỗi: Cập nhật thành viên Stripe giờ xóa đúng các chiết khấu mà không cần gọi API deleteDiscount đã lỗi thời.
- Sửa lỗi: Chuyển hướng SSO trên các trang web được ánh xạ tên miền hiện bị giới hạn để ngăn chặn vòng lặp chuyển hướng vô tận.
- Sửa lỗi: Lựa chọn ảnh trong trình tạo thiết lập giờ cập nhật đúng mô hình dữ liệu cơ bản.
- Sửa lỗi: CLI của Site Exporter giờ giữ lại lựa chọn mạng trang web mặc định chính xác.
- Cải tiến: Đã loại bỏ wp-cli được đóng gói khỏi gói plugin, giúp giảm kích thước plugin.

## Versi 2.11.0 — Phát hành vào ngày 11-05-2026 {#version-2110--released-on-2026-05-11}

- Mới: Các bản xuất trang web giờ sẽ đóng gói một file `index.php` tự khởi động để ZIP có thể được cài đặt trên host mới mà không cần cài đặt plugin riêng biệt.
- Mới: Xuất mạng cho phép quản trị viên xuất tất cả các trang con trong một tệp lưu trữ duy nhất từ trang admin Site Export.
- Mới: Cho phép công tắc gói Site Templates giờ được thực thi thông qua chuỗi dự phòng, giới hạn đúng tính khả dụng của mẫu (template) theo giới hạn gói.
- Mới: Trình chỉnh sửa biểu mẫu thanh toán sẽ cảnh báo khi thêm sản phẩm mà không cấu hình trường bắt buộc nào.
- Mới: Tab cài đặt Nhập/Xuất giờ mô tả rõ phạm vi hoạt động và liên kết trực tiếp đến công cụ Site Export.

## Versi 2.10.0 — Phát hành vào ngày 05-05-2026 {#version-2100--released-on-2026-05-05}

- Baru: Wizard setup PayPal manual credential entry na-with OAuth flag gate pour configuration gateway yang mulus.
- Baru: Panel pelanggan ganti template didesain ulang dengan kartu current-template, grid yang tetap (persistent grid), dan tombol **Reset current template**.
- Perbaikan: Ganti template tidak lagi membuat UI macet karena AJAX gagal.
- Perbaikan: Status izin ganti template diamankan dari akses tidak sah.
- Perbaikan: Input override situs divalidasi sebelum disimpan.
- Perbaikan: Prompt alamat penagihan sekarang ditampilkan ketika alamat kosong.
- Perbaikan: Pemberitahuan deprecation null-to-string PHP 8.1 sudah diperbaiki.
- Perbaikan: Current lazy-loaded sebelum init hook untuk mencegah masalah waktu (timing issues).
- Perbaikan: SSO path yang difilter dihormati di semua alur login.
- Perbaikan: Opsi identitas situs kosong tetap dipertahankan saat menyimpan.

## Versi 2.9.0 — Dirilis pada 2026-04-30 {#version-290--released-on-2026-04-30}

- Baru: Ekspor dan impor satu situs ditambahkan di bawah **Tools > Export & Import**.
- Perbaikan: File ZIP ekspor sekarang disajikan melalui endpoint unduhan yang terautentikasi.
- Perbaikan: Risiko SQL injection dan masalah query pada kueri ekspor/impor tertunda sudah diperbaiki.
- Perbaikan: Situs tertunda tidak dipublikasikan ketika admin memverifikasi email pelanggan secara manual.
- Perbaikan: Catatan pending_site yang terpisah dibersihkan ketika keanggotaan hilang.
- Perbaikan: Padding navigasi pengaturan dan navigasi jangkar pencarian sudah diperbaiki.
- Perbaikan: Situs tertunda sekarang ditampilkan pertama di tampilan All Sites.
- Perbaikan: Header User-Agent penyedia tangkapan layar (mShots) ditambahkan untuk mencegah error 403.
- Perbaikan: Ketergantungan sirkular jadwal cron impor sudah diselesaikan.
- Perbaikan: Tour IDs dinormalisasi menjadi garis bawah dalam kunci pengaturan pengguna.
- Peningkatan: ZipArchive sekarang digunakan alih-alih Alchemy/Zippy untuk kompatibilitas yang lebih baik.

## Versi 2.8.0 — Dirilis pada 2026-04-29 {#version-280--released-on-2026-04-29}

- Baru: Enable Jumper toggle added to Other Options settings UI.
- Baru: Status column added to checkout forms list table.
- Baru: Addon sunrise file loader for custom MU-plugin sunrise extensions.
- Improved: Removed error-reporting opt-in setting from settings page.
- Fix: Thank-you page site card — image now constrained and links styled correctly.
- Fix: Screenshot provider switched from thum.io to WordPress.com mShots.
- Fix: Enable Registration and Default Role now set correct defaults on fresh install.
- Fix: `get_site_url()` no longer returns empty when domain includes a port.
- Fix: Clone media files now copied correctly when `copy_media` setting was empty.
- Fix: Object cache invalidated correctly after network-activate sitemeta write.
- Fix: Custom domain auto-promoted to primary on DNS verification for 3-part domains.
- Fix: Pending membership cancelled when expired payment is cleaned up.
- Fix: Password strength checker rebound after inline login prompt dismissed.
- Fix: Infinite page reload stopped on thank-you page when site already created.
- Fix: WP core registration option synced on plugin activation and settings save.
- Fix: Null expiration guard added in `calculate_expiration` for PHP 8.4 compatibility.
- Fix: Duplicate signups blocked when customer already has an active membership.
- Fix: Null check added for `date_expiration` in checkout.
- Fix: Site provisioning hardened — limitations, membership inference, domain promotion.
- Fix: Pre-install check status label corrected to NOT Activated when check fails.
- Fix: Checkout domain used for email verification URLs.
- Fix: Auto-login after checkout when no password field is present.
- Fix: Free memberships no longer expire — treated as lifetime.

- Fia: Gate xác minh email giữ cho trang không được xuất bản cho đến khi khách hàng xác nhận email.
- Fia: Đường cơ sở API SES v2 và tuyến đường định danh đã được sửa chữa.
- Fia: Hook `wu_inline_login_error` được phát ra trong khối bắt lỗi trước khi gửi đi (pre-submit catch block).
