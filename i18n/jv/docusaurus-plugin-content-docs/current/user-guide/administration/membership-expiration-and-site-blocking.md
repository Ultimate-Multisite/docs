---
title: Kadaluwarsa Keanggotaan lan Pemblokiran Situs
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Kedaluwarsa Keanggotaan dan Pemblokiran Situs

Panduan ini menjelaskan bagaimana Ultimate Multisite menangani kedaluwarsa keanggotaan, berakhirnya masa percobaan (trial), dan pemblokiran situs di bagian depan (frontend). Ini mencakup siklus hidup sebuah keanggotaan dari aktif sampai kedaluwarsa, pengaturan yang mengontrol apakah situs diblokir atau tidak, dan apa yang harus diperiksa jika situs masih bisa diakses setelah keanggotaan kedaluwarsa.

## Siklus Hidup Status Keanggotaan

Setiap keanggotaan di Ultimate Multisite punya salah satu status berikut:

:::note Keanggotaan gratis bersifat seumur hidup
Keanggotaan gratis tidak akan kedaluwarsa secara otomatis. Ultimate Multisite menganggapnya sebagai akses seumur hidup, jadi mereka tidak termasuk dalam pemeriksaan kedaluwarsa kecuali administrator mengubah statusnya atau memindahkan pelanggan ke produk lain.
:::

| Status | Artinya |
|---|---|
| **Pending** | Menunggu pembayaran pertama atau verifikasi email |
| **Trialing** | Masa percobaan aktif, belum ada pembayaran yang dikumpulkan |
| **Active** | Sudah dibayar dan masih berlaku |
| **On Hold** | Pembayaran perpanjangan sedang menunggu (invoice sudah dibuat, menunggu pembayaran) |
| **Expired** | Sudah melewati tanggal kedaluwarsa dan masa tenggang tanpa perpanjangan |
| **Cancelled** | Dibatalkan secara eksplisit oleh pelanggan atau admin |

### Bagaimana Keanggotaan Berubah Menjadi Kedaluwarsa

Ultimate Multisite melakukan pengecekan latar belakang **setiap jam** untuk mencari keanggotaan yang seharusnya ditandai sebagai kedaluwarsa. Pengecekan ini menggunakan [Action Scheduler](https://actionscheduler.org/) (bukan WP-Cron langsung) dan berjalan sebagai scheduled action `wu_membership_check`.

Pengecekan kedaluwarsa punya **masa tenggang bawaan selama 3 hari** secara default. Sebuah keanggotaan tidak akan ditandai sebagai `expired` sampai 3 hari setelah `date_expiration`-nya lewat. Ini memberi pelanggan waktu untuk menyelesaikan pembayaran yang terlambat sebelum status mereka berubah.

:::info
Masa tenggang kedaluwarsa 3 hari itu beda karo pengaturan Grace Period Blok Frontend yang dijelaskan di bawah ini. Masa tenggang kedaluwarsa ngontrol kapan **status berubah** saka aktif/on-hold dadi kadaluwarsa. Grace period blok frontend ngontrol kapan **situs diblokir** sawise status wis owah.
:::

#### Keanggotaan Otomatis Perpanjangan vs. Non-Otomatis Perpanjangan

Beda iki penting banget kanggo ngerti perilaku kedaluwarsa:

- **Keanggotaan non-otomatis perpanjangan** (`auto_renew = false`): Cron job saben jam ngurus siklus utuh -- dia nggawe pembayaran perpanjangan, ngalihake keanggotaan dadi on-hold, lan akhire tandha kadaluwarsa yen pembayaran ora ditampa.

- **Keanggotaan otomatis perpanjangan** (`auto_renew = true`): Cek kedaluwarsa cron **ngabaikake kabeh iki**. Payment gateway (Stripe, PayPal, lsp) dikarepake ngirimi kabar marang Ultimate Multisite liwat webhook nalika langganan gagal utawa dibatal. Yen webhook ora ditampa -- amarga endpoint salah konfigurasi, gangguan gateway, utawa langganan dibatal di luar sistem -- keanggotaan bisa tetep `active` tanpa wates sawise tanggal kedaluwarsa wis lewat.

### Kepiye Ujian Coba (Trials) Rampung

Nalika masa uji coba keanggotaan trialing rampung, sistem bakal:

1. Nggawe pembayaran perpanjangan pending karo jumlah langganan utuh
2. Ngalihake status keanggotaan saka `trialing` dadi `on-hold`
3. Ngirim email notifikasi pembayaran perpanjangan marang pelanggan

Proses iki jalan ing jadwal saben jam kaya pengecekan kedaluwarsa biasa, nanging **mung kanggo keanggotaan non-otomatis perpanjangan**. Kanggo uji coba otomatis perpanjangan, payment gateway sing ngurus alih saka trial dadi langganan berbayar.

## Blok Akses Frontend

Secara *default*, pas keanggotaan (membership) kedaluwarsa atau di-hold, **hanya dashboard wp-admin yang dibatasi**. Bagian depan situs (frontend) publik tetap bisa diakses oleh pengunjung. Untuk memblokir akses publik juga, kamu harus mengaktifkan pengaturan **Block Frontend Access**.

### Mengatur Pengaturan

Buka **Ultimate Multisite > Settings > Memberships** dan aktifkan **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Ini adalah tampilan lengkap halaman pengaturan keanggotaan:

![Membership settings full page](/img/config/settings-membership-full.png)

Ada tiga pengaturan terkait yang mengontrol perilaku ini:

| Pengaturan | Deskripsi | Default |
|---|---|---|
| **Block Frontend Access** | Tombol utama (master toggle). Saat diaktifkan, memblokir bagian depan publik jaringan situs ketika keanggotaannya tidak lagi aktif. | Off |
| **Frontend Block Grace Period** | Jumlah hari yang harus ditunggu setelah keanggotaan tidak aktif sebelum diblokir. Atur ke `0` untuk memblokir segera. | 0 |
| **Frontend Block Page** | Halaman di situs utama tempat pengunjung akan diarahkan ketika sebuah situs diblokir. Jika tidak diatur, pengunjung akan melihat pesan umum "Situs ini tidak tersedia saat ini" beserta tautan ke halaman login admin situs. | None |

### Apa yang Dilihat Pengunjung Saat Situs Diblokir

Ketika akses frontend diblokir, pengunjung situs akan:

1. **Dialihkan** ke halaman yang kamu pilih di **Frontend Block Page** (jika sudah dikonfigurasi), atau
2. **Melihat pesan *default***: "Situs ini tidak tersedia saat ini," beserta tautan ke halaman login untuk admin situs tersebut.

Admin situs masih bisa masuk -- halaman login tidak pernah diblokir.

### Apa yang Diblokir dan Kapan

Perilaku pemblokiran tergantung pada status keanggotaan:

| Status Keanggotaan | Frontend Diblokir? | Masa Tenggang Diterapkan? |
|---|---|---|
| Aktif | Tidak | -- |
| Trialing | **Tidak** (lihat catatan di bawah) | -- |
| On Hold | Dianggap aktif -- tidak diblokir | -- |
| Expired | **Ya**, jika Block Frontend Access menyala | Ya |
| Cancelled | **Ya**, selalu (terlepas dari pengaturan) | **Tidak** -- langsung diblokir |
| Pending | Tidak diblokir melalui pengecekan keanggotaan | -- |

:::warning Keanggotaan Trial tidak diblokir
Bahkan jika masa percobaan sudah berakhir, keanggotaan dengan status `trialing` **tidak akan** diblokir di frontend. Masa percobaan harus berubah status terlebih dahulu (biasanya menjadi `on-hold` melalui cron job, lalu `expired` jika belum dibayar). Jika Anda melihat keanggotaan trialing yang belum berubah status, periksa bagian pemecahan masalah di bawah ini.
:::

:::note Keanggotaan Cancelled melewati masa tenggang
Keanggotaan yang dibatalkan akan selalu diblokir setelah tanggal kedaluwarsa terlewati, tidak peduli apakah Block Frontend Access aktif atau tidak. Masa Tenggang Blok Frontend **tidak** berlaku untuk keanggotaan yang dibatalkan.
:::

## Pemecahan Masalah: Situs Tetap Bisa Diakses Setelah Kedaluwarsa

Jika situs masih bisa diakses publik setelah masa keanggotaan berakhir, lakukan pemeriksaan ini secara berurutan:

### 1. Verifikasi Pengaturan Block Frontend Access Sudah Aktif

Buka **Ultimate Multisite > Settings > Memberships** dan pastikan tombol **Block Frontend Access** sudah menyala (on). Pengaturan ini **secara default mati**, artinya hanya wp-admin yang dibatasi ketika keanggotaan menjadi tidak aktif.

### 2. Periksa Masa Tenggang Blok Frontend

Ing halaman pengaturan yang sama, periksa nilai **Frontend Block Grace Period**. Kalau ini diatur ke 7 hari, misalnya, frontend tidak akan diblokir sampai 7 hari setelah tanggal kedaluwarsa keanggotaan -- meskipun status keanggotaannya sudah `expired`.

Atur ini ke `0` kalau kamu mau pemblokiran langsung setelah keanggotaan jadi tidak aktif.

### 3. Pastikan Status Keanggotaan Sudah Berubah Sungguh-sungguh

Buka **Ultimate Multisite > Memberships** dan periksa status keanggotaan yang terkena dampak. Kalau masih menunjukkan `active` padahal tanggal kedaluwarsa sudah lewat, berarti perubahan statusnya belum terjadi. Penyebab umum:

- **Keanggotaannya diperpanjang otomatis**: Cek kolom `auto_renew` di halaman edit keanggotaan. Kalau perpanjangan otomatis aktif, cron job kedaluwarsa akan melewati keanggotaan ini -- dia bergantung pada payment gateway untuk melaporkan kegagalan. Cek dashboard gateway kamu (Stripe, PayPal) untuk memastikan status langganan sesuai dengan yang ditunjukkan oleh Ultimate Multisite.

- **cron job belum berjalan**: Lihat langkah berikutnya.

### 4. Verifikasi Action Scheduler Berjalan

Ultimate Multisite menggunakan Action Scheduler untuk cron jobnya. Buka **Tools > Scheduled Actions** di admin jaringan dan cari:

- **`wu_membership_check`** -- Ini seharusnya muncul sebagai aksi berulang yang berjalan setiap jam. Kalau tidak ada, pengecekan keanggotaan tidak dijadwalkan.
- **`wu_async_mark_membership_as_expired`** -- Ini adalah tugas individual untuk menandai keanggotaan tertentu sebagai kedaluwarsa. Kalau kamu melihat aksi gagal di sini, mungkin isinya ada pesan error yang menjelaskan kenapa.

Kalau kamu melihat aksi yang macet atau gagal, mungkin ada masalah di Action Scheduler. Penyebab umum:

- **`DISABLE_WP_CRON` diatur ke `true`** di `wp-config.php` tanpa pengganti cron tingkat sistem
- **Lalu lintas situs rendah** -- WP-Cron cuma jalan pas ada yang buka situs

Supaya cron bisa jalan dengan lancar, atur saja job cron sistem:

```bash
# Jalankan setiap 5 menit pakai wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Atau lewat WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Cek Masalah Gateway Webhook (Keanggotaan Otomatis Perpanjangan)

Kalau keanggotaannya otomatis diperpanjang tapi langganan gateway sudah dibatalkan atau gagal, tapi Ultimate Multisite masih nunjukkin statusnya `active`:

- **Stripe**: Buka Stripe Dashboard > Customers dan cek status langganannya. Terus pastikan endpoint webhook aktif di Developers > Webhooks. Endpoint itu harus mengarah ke situs kamu dan menunjukkan pengiriman yang berhasil.
- **PayPal**: Cek status langganan di akun bisnis PayPal kamu dan pastikan IPN/webhook-nya sampai.

Kalau gateway nunjukkin langganannya dibatalkan tapi Ultimate Multisite tidak, kemungkinan notifikasi webhook sudah hilang. Kamu bisa ubah status keanggotaan secara manual di **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Cek Masa Tenggang Kedaluwarsa (Tingkat Cron)

Cek cron punya masa tenggangnya sendiri (default: 3 hari) sebelum menandai keanggotaan sebagai kedaluwarsa. Ini beda sama masa tenggang blok di bagian depan (frontend). Total waktu sebelum situs diblokir bisa jadi:

**Masa tenggang kedaluwarsa (3 hari)** + **Masa tenggang blok frontend (pengaturan kamu)** = Total penundaan

Contohnya, dengan pengaturan default dan masa tenggang *frontend* selama 7 hari, butuh waktu sampai 10 hari setelah `date_expiration` baru situs benar-benar diblokir.

### 7. Membatalkan Keanggotaan Secara Manual

Yen sampeyan perlu langsung memblokir situs tanpa nunggu siklus cron, sampeyan bisa ganti status keanggotaannya secara manual:

1. Go menyang **Ultimate Multisite > Memberships**
2. Klik pada keanggotaan yang kena dampaknya
3. Ganti statusnya jadi **Expired** (Kedaluwarsa) atau **Cancelled** (Dibatalkan)
4. Klik **Save** (Simpan)

Blokir *frontend* bakal mulai berlaku pas halaman itu di-load lagi (tergantung Masa Tenggang Blok Frontend untuk keanggotaan yang kedaluwarsa, atau langsung kalau dibatalkan).

## Ringkasan

Timeline lengkap dari tanggal kedaluwarsa sampai situs diblokir:

```text
date_expiration lewat
       |
       v
  [Masa tenggang cron 3 hari]     <-- keanggotaan masih kelihatan aktif/ditahan
       |
       v
  Cron menandai keanggotaan sebagai "expired" (kedaluwarsa)
       |
       v
  [Masa Tenggang Blok Frontend]  <-- diatur di Settings > Memberships
       |
       v
  Frontend situs diblokir
```

Untuk keanggotaan yang dibatalkan, jalurnya lebih pendek:

```text
  Membership cancelled (Keanggotaan dibatalkan)
       |
       v
  date_expiration lewat (tanpa masa tenggang)
       |
       v
  Frontend situs langsung diblokir
```

## Referensi Developer

*hook* dan *filter* berikut memungkinkan sampeyan ngubah perilaku kedaluwarsa dan pemblokiran:

| Hook/Filter | Deskripsi |
|---|---|
| `wu_membership_grace_period_days` | Filter jumlah hari masa tenggang sebelum keanggotaan ditandai kedaluwarsa (default: 3) |
| `wu_schedule_membership_check_interval` | Filter interval antara pengecekan keanggotaan (default: 1 jam) |
| `wu_membership_renewal_days_before_expiring` | Filter berapa hari sebelum kedaluwarsa untuk membuat pembayaran perpanjangan (default: 3) |
| `wu_blocked_site_reactivation_url` | Filter untuk memberikan URL aktivasi kustom ketika situs diblokir |
| `wu_membership_is_active` | Filter apakah keanggotaan dianggap aktif |
| `wu_membership_expired_check_query_params` | Filter parameter query yang digunakan untuk mencari keanggotaan kedaluwarsa |
| `wu_membership_trial_check_query_params` | Filter parameter query yang digunakan untuk mencari uji coba yang kedaluwarsa |
