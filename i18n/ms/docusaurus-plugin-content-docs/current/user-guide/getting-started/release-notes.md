---
title: Nota Keluaran
sidebar_position: 9
_i18n_hash: e9f9d20e55608b81945ab7dfcf495fcb
---
# Nota Keluaran

## Versi 2.12.0 — Dikeluarkan pada 2026-05-15

- Baharu: Menambah Hostinger (hPanel) sebagai penyedia hos yang disokong dengan integrasi pemetaan domain
- Baharu: Site Exporter kini mengendalikan pakej import rangkaian untuk pemulihan tapak seluruh rangkaian yang lebih lancar
- Pembaikan: E-mel siaran BCC kini menggunakan header `undisclosed-recipients` untuk menghalang pendedahan alamat penerima
- Pembaikan: Tarikh luput keahlian tidak lagi rosak apabila disimpan dengan nilai bukan tarikh
- Pembaikan: Kemas kini keahlian Stripe kini membersihkan diskaun dengan betul tanpa memanggil API `deleteDiscount` yang telah dipadamkan
- Pembaikan: Pengalihan SSO pada tapak yang dipetakan domain kini dihadkan untuk menghalang gelung pengalihan tanpa henti
- Pembaikan: Pemilihan pemilih imej wizard persediaan kini mengemas kini model data asas dengan betul
- Pembaikan: Site Exporter CLI kini mengekalkan pemilihan tapak rangkaian lalai yang betul
- Peningkatan: Membuang `wp-cli` berpaket daripada pakej plugin, mengurangkan saiz plugin

## Versi 2.11.0 — Dikeluarkan pada 2026-05-11

- Baharu: Eksport tapak kini membungkus `index.php` yang boleh but semula sendiri supaya fail ZIP boleh dipasang pada hos baharu tanpa pemasangan plugin berasingan.
- Baharu: Eksport rangkaian membenarkan pentadbir mengeksport semua subsites dalam satu arkib dari halaman pentadbir Site Export.
- Baharu: Toggle Plan Site Templates kini dikuatkuasakan melalui rantaian sandaran, mengehadkan ketersediaan templat dengan betul mengikut had plan.
- Baharu: Editor borang checkout memberi amaran apabila produk ditambah tanpa medan wajib yang dikonfigurasi.
- Baharu: Tab tetapan Import/Eksport kini menerangkan skopnya dengan jelas dan pautan terus ke alat Site Export.

## Versi 2.10.0 — Dikeluarkan pada 2026-05-05

- Baharu: Wizard persediaan berpandu PayPal untuk kemasukan kredensial manual dengan gerbang bendera OAuth untuk konfigurasi gateway yang lancar.
- Baharu: Panel pelanggan suis templat direka semula dengan kad templat semasa, grid kekal, dan butang **Reset current template**.
- Pembaikan: Penukaran templat tidak lagi menyebabkan UI tergantung apabila kegagalan AJAX.
- Pembaikan: Status kebenaran penukaran templat diperkukuh terhadap akses tanpa kebenaran.
- Pembaikan: Input override tapak divalidasi sebelum disimpan.
- Pembaikan: Prompt alamat bil kini dipaparkan apabila alamat kosong.
- Pembaikan: Notis deprecation null-ke-string PHP 8.1 diselesaikan.
- Pembaikan: Currents dimuatkan secara malas sebelum hook `init` untuk menghalang isu masa.
- Pembaikan: Laluan SSO yang ditapis dihormati merentasi semua aliran log masuk.
- Pembaikan: Pilihan identiti tapak kosong dikekalkan semasa simpan.

## Versi 2.9.0 — Dikeluarkan pada 2026-04-30

- Baharu: Eksport dan import tapak tunggal ditambah di bawah **Tools > Export & Import**.
- Pembaikan: Fail ZIP eksport kini disajikan melalui endpoint muat turun yang disahkan.
- Pembaikan: Risiko suntikan SQL dan isu kueri dalam kueri eksport/import tertangguh diperbetulkan.
- Pembaikan: Tapak tertangguh tidak diterbitkan apabila pentadbir mengesahkan e-mel pelanggan secara manual.
- Pembaikan: Rekod `pending_site` yatim dibersihkan apabila keahlian tiada.
- Pembaikan: Padding navigasi tetapan dan navigasi sauh carian diperbetulkan.
- Pembaikan: Tapak tertangguh kini dipaparkan dahulu dalam paparan All Sites.
- Pembaikan: Header User-Agent penyedia tangkapan skrin (mShots) ditambah untuk menghalang ralat 403.
- Pembaikan: Ketergantungan kitaran jadual cron import dibetulkan.
- Pembaikan: ID Tur normalisasi kepada garis bawah dalam kunci tetapan pengguna.
- Peningkatan: ZipArchive kini digunakan menggantikan Alchemy/Zippy untuk keserasian yang lebih baik.

## Versi 2.8.0 — Dikeluarkan pada 2026-04-29

- Baharu: Toggle Enable Jumper ditambah ke UI tetapan Other Options.
- Baharu: Kolum Status ditambah ke jadual senarai borang checkout.
- Baharu: Pemuat fail sunrise addon untuk sambungan sunrise MU-plugin tersuai.
- Peningkatan: Tetapan opt-in pelaporan ralat dikeluarkan dari halaman tetapan.
- Pembaikan: Kad tapak halaman terima kasih — imej kini dihadkan dan pautan distailkan dengan betul.
- Pembaikan: Penyedia tangkapan skrin ditukar dari thum.io kepada WordPress.com mShots.
- Pembaikan: Enable Registration dan Default Role kini menetapkan nilai lalai yang betul pada pemasangan baharu.
- Pembaikan: `get_site_url()` tidak lagi mengembalikan kosong apabila domain termasuk port.
- Pembaikan: Fail media klon kini disalin dengan betul apabila tetapan `copy_media` kosong.
- Pembaikan: Cache objek dibatalkan dengan betul selepas penulisan sitemeta `network-activate`.
- Pembaikan: Domain tersuai dinaikkan secara automatik kepada utama pada pengesahan DNS untuk domain 3 bahagian.
- Pembaikan: Keahlian tertangguh dibatalkan apabila pembayaran luput dibersihkan.
- Pembaikan: Pemeriksa kekuatan kata laluan dipasang semula selepas prompt log masuk dalam talian ditutup.
- Pembaikan: Muat semula halaman tanpa henti dihentikan pada halaman terima kasih apabila tapak sudah dicipta.
- Pembaikan: Pilihan pendaftaran WP core disegerakkan semasa pengaktifan plugin dan simpan tetapan.
- Pembaikan: Pelindung luput null ditambah dalam `calculate_expiration` untuk keserasian PHP 8.4.
- Pembaikan: Pendaftaran berganda disekat apabila pelanggan sudah mempunyai keahlian aktif.
- Pembaikan: Semakan null ditambah untuk `date_expiration` dalam checkout.
- Pembaikan: Penyediaan tapak diperkukuh — had, inferens keahlian, promosi domain.
- Pembaikan: Label status semakan pra-pasang diperbetulkan kepada NOT Activated apabila semakan gagal.
- Pembaikan: Domain checkout digunakan untuk URL pengesahan e-mel.
- Pembaikan: Log masuk automatik selepas checkout apabila tiada medan kata laluan.
- Pembaikan: Keahlian percuma tidak luput lagi — dianggap seumur hidup.
- Pembaikan: Gerbang pengesahan e-mel menahan penerbitan tapak sehingga pelanggan mengesahkan e-mel.
- Pembaikan: Base path endpoint API SES v2 dan laluan identiti diperbetulkan.
- Pembaikan: Hook `wu_inline_login_error` dikeluarkan dalam blok tangkapan pra-hantar.
