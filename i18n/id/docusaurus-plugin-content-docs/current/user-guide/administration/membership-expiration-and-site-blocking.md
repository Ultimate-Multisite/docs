---
title: Kedaluwarsa Keanggotaan dan Pemblokiran Situs
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Kedaluwarsa Keanggotaan dan Pemblokiran Situs

Panduan ini menjelaskan cara Ultimate Multisite menangani kedaluwarsa keanggotaan, berakhirnya masa uji coba, dan pemblokiran situs di *frontend*. Ini mencakup siklus hidup keanggotaan, mulai dari aktif hingga kedaluwarsa, pengaturan yang mengontrol apakah situs diblokir, dan apa yang harus diperiksa jika situs tetap dapat diakses setelah keanggotaan kedaluwarsa.

## Siklus Hidup Status Keanggotaan {#membership-status-lifecycle}

Setiap keanggotaan di Ultimate Multisite memiliki salah satu status berikut:

:::note Keanggotaan Gratis bersifat seumur hidup
Keanggotaan gratis tidak kedaluwarsa secara otomatis. Ultimate Multisite memperlakukannya sebagai akses seumur hidup, jadi keanggotaan ini tidak termasuk dalam pemeriksaan kedaluwarsa kecuali administrator mengubah statusnya atau memindahkan pelanggan ke produk lain.
:::

| Status | Arti |
|---|---|
| **Pending** | Menunggu pembayaran pertama atau verifikasi email |
| **Trialing** | Masa uji coba aktif, belum ada pembayaran yang dikumpulkan |
| **Active** | Sudah dibayar dan masih berlaku |
| **On Hold** | Pembayaran perpanjangan tertunda (faktur dibuat, menunggu pembayaran) |
| **Expired** | Melewati tanggal kedaluwarsa dan masa tenggang tanpa perpanjangan |
| **Cancelled** | Dibatalkan secara eksplisit oleh pelanggan atau admin |

### Bagaimana Keanggotaan Berubah Menjadi Kedaluwarsa {#how-memberships-transition-to-expired}

Ultimate Multisite menjalankan pemeriksaan latar belakang **setiap jam** untuk mencari keanggotaan yang seharusnya ditandai sebagai kedaluwarsa. Pemeriksaan ini menggunakan [Action Scheduler](https://actionscheduler.org/) (bukan WP-Cron secara langsung) dan berjalan sebagai tindakan terjadwal `wu_membership_check`.

Pemeriksaan kedaluwarsa memiliki **masa tenggang bawaan selama 3 hari** secara *default*. Keanggotaan tidak akan ditandai sebagai `expired` sampai 3 hari setelah `date_expiration`-nya terlewati. Ini memberi waktu kepada pelanggan untuk menyelesaikan pembayaran yang terlambat sebelum status mereka berubah.

:::info
Masa tenggang kedaluwarsa 3 hari ini terpisah dari pengaturan Masa Tenggang Pemblokiran *Frontend* yang dijelaskan di bawah. Masa tenggang kedaluwarsa mengontrol kapan **status berubah** dari aktif/on-hold menjadi kedaluwarsa. Masa tenggang pemblokiran *frontend* mengontrol kapan **situs diblokir** setelah statusnya sudah berubah.
:::

#### Keanggotaan yang Diperbarui Otomatis vs. Non-Otomatis {#auto-renewing-vs-non-auto-renewing-memberships}

Perbedaan ini sangat penting untuk memahami perilaku kedaluwarsa:

- **Keanggotaan non-otomatis diperbarui** (`auto_renew = false`): *Cron job* per jam menangani seluruh siklus hidup—ia membuat pembayaran perpanjangan, mengubah keanggotaan menjadi *on-hold*, dan akhirnya menandainya sebagai kedaluwarsa jika pembayaran tidak diterima.

- **Keanggotaan otomatis diperbarui** (`auto_renew = true`): Pemeriksaan kedaluwarsa *cron* **melewatkan keanggotaan ini sepenuhnya**. *Payment gateway* (Stripe, PayPal, dll.) diharapkan untuk memberi tahu Ultimate Multisite melalui *webhook* ketika langganan gagal atau dibatalkan. Jika *webhook* tidak diterima—karena *endpoint* yang salah konfigurasi, gangguan *gateway*, atau langganan dibatalkan di luar sistem—keanggotaan mungkin tetap `active` tanpa batas waktu meskipun tanggal kedaluwarsa sudah terlewati.

### Bagaimana Masa Uji Coba Berakhir {#how-trials-end}

Ketika masa uji coba keanggotaan berakhir, sistem:

1. Membuat pembayaran perpanjangan tertunda dengan jumlah langganan penuh
2. Mengubah status keanggotaan dari `trialing` menjadi `on-hold`
3. Mengirim email notifikasi pembayaran perpanjangan kepada pelanggan

Proses ini berjalan pada jadwal per jam yang sama dengan pemeriksaan kedaluwarsa reguler, tetapi **hanya untuk keanggotaan non-otomatis diperbarui**. Untuk uji coba otomatis diperbarui, *payment gateway* yang menangani transisi dari uji coba ke langganan berbayar.

## Memblokir Akses *Frontend* {#block-frontend-access}

Secara *default*, ketika keanggotaan kedaluwarsa atau menjadi *on hold*, **hanya *dashboard* wp-admin yang dibatasi**. *Frontend* publik situs tetap dapat diakses oleh pengunjung. Untuk juga memblokir akses publik, Anda harus mengaktifkan pengaturan **Block Frontend Access**.

### Mengonfigurasi Pengaturan {#configuring-the-setting}

Arahkan ke **Ultimate Multisite > Settings > Memberships** dan aktifkan **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Berikut adalah tampilan lengkap halaman pengaturan keanggotaan:

![Membership settings full page](/img/config/settings-membership-full.png)

Tiga pengaturan terkait mengontrol perilaku ini:

| Setting | Deskripsi | Default |
|---|---|---|
| **Block Frontend Access** | Tombol utama. Ketika diaktifkan, memblokir *frontend* publik situs jaringan ketika keanggotaan mereka tidak lagi aktif. | Off |
| **Frontend Block Grace Period** | Jumlah hari untuk menunggu setelah keanggotaan tidak aktif sebelum diblokir. Atur ke `0` untuk memblokir segera. | 0 |
| **Frontend Block Page** | Halaman di situs utama untuk mengarahkan pengunjung ketika situs diblokir. Jika tidak diatur, pengunjung akan melihat pesan "Situs tidak tersedia" generik. | None |

### Apa yang Dilihat Pengunjung Saat Situs Diblokir {#what-visitors-see-when-a-site-is-blocked}

Ketika akses *frontend* diblokir, pengunjung situs akan:

1. **Diarahkan ulang** ke halaman yang Anda pilih di **Frontend Block Page** (jika dikonfigurasi), atau
2. **Melihat pesan *default***: "Situs ini tidak tersedia saat ini." dengan tautan ke halaman *login* untuk admin situs.

Admin situs masih dapat *login*—halaman *login* tidak pernah diblokir.

### Apa yang Diblokir dan Kapan {#what-gets-blocked-and-when}

Perilaku pemblokiran tergantung pada status keanggotaan:

| Membership Status | Frontend Diblokir? | Masa Tenggang Diterapkan? |
|---|---|---|
| Active | Tidak | -- |
| Trialing | **Tidak** (lihat catatan di bawah) | -- |
| On Hold | Dianggap aktif -- tidak diblokir | -- |
| Expired | **Ya**, jika Block Frontend Access aktif | Ya |
| Cancelled | **Ya**, selalu (terlepas dari pengaturan) | **Tidak** -- diblokir segera |
| Pending | Tidak diblokir melalui pemeriksaan keanggotaan | -- |

:::warning Keanggotaan *Trialing* tidak diblokir
Bahkan jika masa uji coba telah berakhir, keanggotaan dengan status `trialing` **tidak akan** diblokir di *frontend*. Uji coba harus terlebih dahulu beralih ke status lain (biasanya `on-hold` melalui *cron job*, lalu `expired` jika tidak dibayar). Jika Anda melihat keanggotaan *trialing* yang belum beralih, periksa bagian pemecahan masalah di bawah.
:::

:::note Keanggotaan yang Dibatalkan melewati masa tenggang
Keanggotaan yang dibatalkan selalu diblokir setelah tanggal kedaluwarsa terlewati, terlepas dari apakah Block Frontend Access diaktifkan. Masa Tenggang Pemblokiran *Frontend* **tidak** berlaku untuk keanggotaan yang dibatalkan.
:::

## Pemecahan Masalah: Situs Tetap Dapat Diakses Setelah Kedaluwarsa {#troubleshooting-sites-remaining-accessible-after-expiration}

Jika situs tetap dapat diakses publik setelah keanggotaan kedaluwarsa, kerjakan pemeriksaan ini secara berurutan:

### 1. Verifikasi Pengaturan Block Frontend Access Sudah Diaktifkan {#1-verify-the-block-frontend-access-setting-is-enabled}

Buka **Ultimate Multisite > Settings > Memberships** dan konfirmasi bahwa *toggle* **Block Frontend Access** dalam posisi *on*. Pengaturan ini **mati secara *default***, yang berarti hanya wp-admin yang dibatasi ketika keanggotaan menjadi tidak aktif.

### 2. Periksa Frontend Block Grace Period {#2-check-the-frontend-block-grace-period}

Di halaman pengaturan yang sama, periksa nilai **Frontend Block Grace Period**. Jika ini diatur ke 7 hari, misalnya, *frontend* tidak akan diblokir sampai 7 hari setelah tanggal kedaluwarsa keanggotaan—bahkan jika status keanggotaan sudah `expired`.

Atur ini ke `0` jika Anda ingin pemblokiran segera setelah keanggotaan menjadi tidak aktif.

### 3. Konfirmasi Status Keanggotaan Benar-benar Berubah {#3-confirm-the-membership-status-has-actually-changed}

Buka **Ultimate Multisite > Memberships** dan periksa status keanggotaan yang terpengaruh. Jika statusnya masih menunjukkan `active` meskipun tanggal kedaluwarsa sudah terlewati, transisi status belum terjadi. Penyebab umum:

- **Keanggotaan otomatis diperbarui**: Periksa *field* `auto_renew` pada halaman edit keanggotaan. Jika perpanjangan otomatis diaktifkan, *cron* kedaluwarsa akan melewati keanggotaan ini—ia mengandalkan *payment gateway* untuk melaporkan kegagalan. Periksa *dashboard gateway* Anda (Stripe, PayPal) untuk memastikan status langganan cocok dengan yang ditampilkan Ultimate Multisite.

- ***Cron job* belum berjalan**: Lihat langkah berikutnya.

### 4. Verifikasi Action Scheduler Berjalan {#4-verify-action-scheduler-is-running}

Ultimate Multisite menggunakan Action Scheduler untuk *cron job*-nya. Buka **Tools > Scheduled Actions** di admin jaringan dan cari:

- **`wu_membership_check`** -- Ini seharusnya muncul sebagai tindakan berulang yang berjalan setiap jam. Jika hilang, pemeriksaan keanggotaan tidak dijadwalkan.
- **`wu_async_mark_membership_as_expired`** -- Ini adalah tugas individual untuk menandai keanggotaan tertentu sebagai kedaluwarsa. Jika Anda melihat tindakan gagal di sini, mungkin berisi pesan kesalahan yang menjelaskan alasannya.

Jika Anda melihat tindakan yang macet atau gagal, Anda mungkin mengalami masalah Action Scheduler. Penyebab umum:

- **`DISABLE_WP_CRON` diatur ke `true`** di `wp-config.php` tanpa pengganti *cron* tingkat sistem
- **Lalu lintas situs rendah** -- WP-Cron hanya berjalan ketika seseorang mengunjungi situs

Untuk memastikan eksekusi *cron* yang andal, atur *cron job* sistem:

```bash
# Jalankan setiap 5 menit melalui wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Atau melalui WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Periksa Masalah Webhook Gateway (Keanggotaan Otomatis Diperbarui) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Jika keanggotaan otomatis diperbarui dan langganan *gateway* telah dibatalkan atau gagal, tetapi Ultimate Multisite masih menampilkannya sebagai `active`:

- **Stripe**: Buka Stripe Dashboard > Customers dan periksa status langganan. Kemudian verifikasi *endpoint* *webhook* aktif di Developers > Webhooks. *Endpoint* harus menunjuk ke situs Anda dan menunjukkan pengiriman yang berhasil.
- **PayPal**: Periksa status langganan di akun bisnis PayPal Anda dan verifikasi pengiriman IPN/webhook.

Jika *gateway* menunjukkan langganan dibatalkan tetapi Ultimate Multisite tidak, kemungkinan notifikasi *webhook* hilang. Anda dapat mengubah status keanggotaan secara manual di **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Periksa Masa Tenggang Kedaluwarsa (Tingkat Cron) {#6-check-the-expiration-grace-period-cron-level}

Pemeriksaan *cron* memiliki masa tenggangnya sendiri (default: 3 hari) sebelum menandai keanggotaan sebagai kedaluwarsa. Ini terpisah dari masa tenggang pemblokiran *frontend*. Total waktu sebelum situs diblokir bisa jadi:

**Masa tenggang kedaluwarsa (3 hari)** + **Masa tenggang blok *frontend* (pengaturan Anda)** = Total penundaan

Contoh, dengan pengaturan *default* dan masa tenggang *frontend* 7 hari, bisa memakan waktu hingga 10 hari setelah `date_expiration` sebelum situs benar-benar diblokir.

### 7. Secara Manual Mengakhiri Keanggotaan {#7-manually-expire-a-membership}

Jika Anda perlu segera memblokir situs tanpa menunggu siklus *cron*, Anda dapat mengubah status keanggotaan secara manual:

1. Buka **Ultimate Multisite > Memberships**
2. Klik pada keanggotaan yang terpengaruh
3. Ubah status menjadi **Expired** atau **Cancelled**
4. Klik **Save**

Pemblokiran *frontend* akan berlaku pada pemuatan halaman berikutnya (tergantung pada Masa Tenggang Pemblokiran *Frontend* untuk keanggotaan kedaluwarsa, atau segera untuk keanggotaan yang dibatalkan).

## Ringkasan {#summary}

Garis waktu lengkap dari tanggal kedaluwarsa hingga pemblokiran situs:

```text
date_expiration terlewati
       |
       v
  [masa tenggang cron 3 hari]     <-- keanggotaan masih menunjukkan aktif/on-hold
       |
       v
  Cron menandai keanggotaan sebagai "expired"
       |
       v
  [Masa Tenggang Blok Frontend]  <-- dikonfigurasi di Settings > Memberships
       |
       v
  Frontend situs diblokir
```

Untuk keanggotaan yang dibatalkan, jalurnya lebih pendek:

```text
  Keanggotaan dibatalkan
       |
       v
  date_expiration terlewati (tanpa masa tenggang)
       |
       v
  Frontend situs diblokir segera
```

## Referensi Pengembang {#developer-reference}

*Hook* dan *filter* berikut memungkinkan Anda menyesuaikan perilaku kedaluwarsa dan pemblokiran:

| Hook/Filter | Deskripsi |
|---|---|
| `wu_membership_grace_period_days` | Filter jumlah hari masa tenggang sebelum menandai keanggotaan sebagai kedaluwarsa (default: 3) |
| `wu_schedule_membership_check_interval` | Filter interval antara pemeriksaan keanggotaan (default: 1 jam) |
| `wu_membership_renewal_days_before_expiring` | Filter berapa hari sebelum kedaluwarsa untuk membuat pembayaran perpanjangan (default: 3) |
| `wu_blocked_site_reactivation_url` | Filter untuk menyediakan URL aktivasi kustom ketika situs diblokir |
| `wu_membership_is_active` | Filter apakah keanggotaan dianggap aktif |
| `wu_membership_expired_check_query_params` | Filter parameter kueri yang digunakan untuk menemukan keanggotaan kedaluwarsa |
| `wu_membership_trial_check_query_params` | Filter parameter kueri yang digunakan untuk menemukan uji coba kedaluwarsa |
