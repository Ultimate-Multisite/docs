---
title: Nota Keluaran
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Nota Keluaran

## Versi 2.13.0 — Dikeluarkan pada 2026-06-05

- Baharu: Menambah sokongan penyewa berdaulat untuk aliran Account pelanggan, checkout, pengebilan, tapak, invois, pertukaran templat, dan pemetaan domain supaya rangkaian penyewa boleh mengarahkan pelanggan kembali ke tapak utama untuk tindakan terurus.
- Baharu: Menambah semakan kelayakan pembaharuan untuk keahlian berulang supaya gateway boleh melumpuhkan pembaharuan automatik apabila perjanjian pengebilan tersimpan, langganan, atau token vault tiada.
- Baharu: Menambah penerbitan loopback yang disahkan HMAC untuk penciptaan tapak tertunda bagi menjadikan penyediaan checkout-ke-tapak lebih boleh dipercayai pada host yang tugas latar belakangnya tertangguh.
- Baharu: Menambah titik sambungan pembangun untuk URL SSO, domain asas borang checkout, dan penciptaan rekod domain automatik.
- Baiki: SSO lebih boleh dipercayai merentas domain dipetakan, lawatan broker tanpa nama, log keluar, dan konflik kebergantungan merentas plugin.
- Baiki: Penciptaan tapak tertunda kini pulih daripada bendera penerbitan lapuk dan mengelakkan pelanggan tersekat pada skrin penciptaan tapak.
- Baiki: Rekod domain tidak lagi dicipta untuk domain asas borang checkout dikongsi, dan tugas latar belakang penyedia host yang tidak digunakan dilangkau apabila tiada integrasi aktif.
- Baiki: Kes pinggir checkout, alamat pengebilan, tetapan semula kata laluan, pengesahan e-mel, pertukaran templat, lawatan, dan Dashboard pelanggan tidak lagi menyekat aliran pelanggan biasa.
- Baiki: E-mel siaran kini mengekalkan penerima secara peribadi sambil mengelakkan ralat fatal SMTP/plugin apabila senarai penerima atau pengangkutan mel gagal.
- Baiki: Pembaharuan keahlian, paparan tamat tempoh, dan kes pinggir kutipan bayaran kini mengelakkan tamat tempoh serta-merta, ranap, atau bayaran wajib yang terlepas.
- Dipertingkat: Keserasian WordPress diuji sehingga 7.0, aset Vue produksi dibina semula daripada sumber npm, dan liputan hujung-ke-hujung Cypress kini menguji lebih banyak aliran checkout, persediaan, SSO, dan gateway.

## Versi 2.12.0 — Dikeluarkan pada 2026-05-15

- Baharu: Menambah Hostinger (hPanel) sebagai penyedia host yang disokong dengan integrasi pemetaan domain
- Baharu: Site Exporter kini mengendalikan berkas import rangkaian untuk pemulihan tapak seluruh rangkaian yang diperkemas
- Baiki: E-mel siaran BCC kini menggunakan header undisclosed-recipients untuk mengelakkan pendedahan alamat penerima
- Baiki: Tarikh tamat tempoh keahlian tidak lagi rosak apabila disimpan dengan nilai bukan tarikh
- Baiki: Kemas kini keahlian Stripe kini mengosongkan diskaun dengan betul tanpa memanggil API deleteDiscount yang lapuk
- Baiki: Lencongan SSO pada tapak yang dipetakan domain kini dihadkan untuk mengelakkan gelung lencongan tak terhingga
- Baiki: Pemilihan pemilih imej wizard persediaan kini mengemas kini model data asas dengan betul
- Baiki: CLI Site Exporter kini mengekalkan pemilihan tapak rangkaian lalai yang betul
- Dipertingkat: Mengalih keluar wp-cli yang dibundel daripada pakej plugin, mengurangkan saiz plugin

## Versi 2.11.0 — Dikeluarkan pada 2026-05-11

- Baharu: Eksport tapak kini membundel `index.php` yang boleh but sendiri supaya ZIP boleh dipasang pada host baharu tanpa pemasangan plugin berasingan.
- Baharu: Eksport rangkaian membolehkan pentadbir mengeksport semua subtapak dalam satu arkib daripada halaman pentadbir Site Export.
- Baharu: Togol pelan Allow Site Templates kini dikuatkuasakan melalui rantaian sandaran, mengehadkan ketersediaan templat dengan betul mengikut had pelan.
- Baharu: Editor borang checkout memberi amaran apabila produk ditambah tanpa medan wajib dikonfigurasikan.
- Baharu: Tab tetapan Import/Export kini menerangkan skopnya dengan jelas dan memaut terus ke alat Site Export.

## Versi 2.10.0 — Dikeluarkan pada 2026-05-05

- Baharu: Wizard persediaan berpandu PayPal untuk kemasukan kelayakan manual dengan gerbang bendera OAuth untuk konfigurasi gateway yang lancar.
- Baharu: Panel pelanggan pertukaran templat direka bentuk semula dengan kad templat semasa, grid berterusan, dan butang **Tetapkan semula templat semasa**.
- Baiki: Pertukaran templat tidak lagi menyebabkan UI tergantung apabila AJAX gagal.
- Baiki: Keadaan kebenaran pertukaran templat dilindungi daripada akses tanpa kebenaran.
- Baiki: Input penggantian tapak disahkan sebelum disimpan.
- Baiki: Gesaan alamat pengebilan kini ditunjukkan apabila alamat kosong.
- Baiki: Notis penamatan null-ke-string PHP 8.1 diselesaikan.
- Baiki: Currents dimuat secara malas sebelum hook init untuk mengelakkan isu pemasaan.
- Baiki: Laluan SSO ditapis dihormati merentas semua aliran log masuk.
- Baiki: Pilihan identiti tapak kosong dikekalkan semasa simpan.

## Versi 2.9.0 — Dikeluarkan pada 2026-04-30

- Baharu: Eksport dan import tapak tunggal ditambah di bawah **Tools > Export & Import**.
- Baiki: Fail ZIP eksport kini disajikan melalui endpoint muat turun yang disahkan.
- Baiki: Risiko suntikan SQL dan isu pertanyaan dalam pertanyaan eksport/import tertunda dibetulkan.
- Baiki: Tapak tertunda tidak diterbitkan apabila pentadbir mengesahkan e-mel pelanggan secara manual.
- Baiki: Rekod pending_site yatim dibersihkan apabila keahlian tiada.
- Baiki: Padding nav tetapan dan navigasi anchor carian dibetulkan.
- Baiki: Tapak tertunda kini ditunjukkan dahulu dalam paparan All Sites.
- Baiki: Header User-Agent penyedia tangkapan skrin (mShots) ditambah untuk mengelakkan ralat 403.
- Baiki: Kebergantungan bulat jadual cron import diselesaikan.
- Baiki: ID lawatan dinormalkan kepada garis bawah dalam kunci tetapan pengguna.
- Dipertingkat: ZipArchive kini digunakan dan bukannya Alchemy/Zippy untuk keserasian yang lebih baik.

## Versi 2.8.0 — Dikeluarkan pada 2026-04-29

- Baharu: Toggle Enable Jumper ditambah pada UI tetapan Other Options.
- Baharu: Lajur status ditambah pada jadual senarai borang checkout.
- Baharu: Pemuat fail sunrise Addon untuk sambungan sunrise MU-plugin tersuai.
- Dipertingkat: Tetapan ikut serta pelaporan ralat dialih keluar daripada halaman tetapan.
- Pembetulan: Kad laman halaman terima kasih — imej kini dihadkan dan pautan digayakan dengan betul.
- Pembetulan: Penyedia screenshot ditukar daripada thum.io kepada WordPress.com mShots.
- Pembetulan: Enable Registration dan Default Role kini menetapkan lalai yang betul pada pemasangan baharu.
- Pembetulan: `get_site_url()` tidak lagi mengembalikan kosong apabila domain termasuk port.
- Pembetulan: Fail media klon kini disalin dengan betul apabila tetapan `copy_media` kosong.
- Pembetulan: Cache objek dibatalkan dengan betul selepas penulisan sitemeta network-activate.
- Pembetulan: Domain tersuai dinaikkan secara automatik kepada utama semasa pengesahan DNS untuk domain 3 bahagian.
- Pembetulan: Membership tertunda dibatalkan apabila pembayaran tamat tempoh dibersihkan.
- Pembetulan: Penyemak kekuatan kata laluan diikat semula selepas gesaan log masuk sebaris ditutup.
- Pembetulan: Muat semula halaman tanpa henti dihentikan pada halaman terima kasih apabila laman sudah dibuat.
- Pembetulan: Pilihan pendaftaran teras WP disegerakkan semasa pengaktifan plugin dan simpan tetapan.
- Pembetulan: Pengawal tamat tempoh null ditambah dalam `calculate_expiration` untuk keserasian PHP 8.4.
- Pembetulan: Pendaftaran pendua disekat apabila pelanggan sudah mempunyai membership aktif.
- Pembetulan: Semakan null ditambah untuk `date_expiration` dalam checkout.
- Pembetulan: Penyediaan laman diperkukuh — had, inferens membership, promosi domain.
- Pembetulan: Label status semakan pra-pemasangan dibetulkan kepada NOT Activated apabila semakan gagal.
- Pembetulan: Domain checkout digunakan untuk URL pengesahan e-mel.
- Pembetulan: Log masuk automatik selepas checkout apabila tiada medan kata laluan hadir.
- Pembetulan: Membership percuma tidak lagi tamat tempoh — dianggap seumur hidup.
- Pembetulan: Gerbang pengesahan e-mel menahan penerbitan laman sehingga pelanggan mengesahkan e-mel.
- Pembetulan: Laluan asas endpoint API SES v2 dan laluan identiti dibetulkan.
- Pembetulan: Hook `wu_inline_login_error` dikeluarkan dalam blok tangkap pra-serah.
