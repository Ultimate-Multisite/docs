---
title: Kadaluwarsa Keanggotaan jeung Pemblokiran Situs
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Kedaluwarsa Keanggotaan dan Pemblokiran Situs {#membership-expiration-and-site-blocking}

Panduan ini menjelaskan bagaimana Ultimate Multisite menangani kedaluwarsa keanggotaan, berakhirnya masa percobaan (trial), dan pemblokiran situs di bagian depan (frontend). Ini mencakup siklus hidup keanggotaan dari aktif sampai kedaluwarsa, pengaturan yang mengontrol apakah situs diblokir atau tidak, dan apa yang harus diperiksa jika situs masih bisa diakses setelah keanggotaan kedaluwarsa.

## Siklus Hidup Status Keanggotaan {#membership-status-lifecycle}

Setiap keanggotaan di Ultimate Multisite punya salah satu status berikut:

:::note Keanggotaan gratis bersifat seumur hidup
Keanggotaan gratis tidak akan kedaluwarsa secara otomatis. Ultimate Multisite menganggapnya sebagai akses seumur hidup, jadi mereka tidak termasuk dalam pemeriksaan kedaluwarsa kecuali admin mengubah statusnya atau memindahkan pelanggan ke produk lain.
:::

| Status | Artinya |
|---|---|
| **Pending** | Menunggu pembayaran pertama atau verifikasi email |
| **Trialing** | Masa percobaan aktif, belum ada pembayaran yang dikumpulkan |
| **Active** | Sudah dibayar dan masih berlaku |
| **On Hold** | Pembayaran perpanjangan sedang menunggu (invoice sudah dibuat, menunggu pembayaran) |
| **Expired** | Sudah melewati tanggal kedaluwarsa dan masa tenggang tanpa perpanjangan |
| **Cancelled** | Dibatalkan secara eksplisit oleh pelanggan atau admin |

### Bagaimana Keanggotaan Berubah Menjadi Kedaluwarsa {#how-memberships-transition-to-expired}

Ultimate Multisite melakukan pengecekan latar belakang **setiap jam** untuk mencari keanggotaan yang seharusnya ditandai sebagai kedaluwarsa. Pengecekan ini menggunakan [Action Scheduler](https://actionscheduler.org/) (bukan WP-Cron langsung) dan berjalan sebagai scheduled action `wu_membership_check`.

Pengecekan kedaluwarsa punya **masa tenggang bawaan selama 3 hari** secara default. Sebuah keanggotaan tidak akan ditandai sebagai `expired` sampai 3 hari setelah `date_expiration`-nya lewat. Ini memberi pelanggan waktu untuk menyelesaikan pembayaran yang terlambat sebelum status mereka berubah.

:::info
Masa tenggang kedaluwarsa 3 hari itu beda jeung pengaturan Masa Tenggang Blok Frontend anu dijelaskeun di handap ieu. Masa tenggang kedaluwarsa ngontrol kapan **status robah** tina aktif/on-hold jadi kadaluwarsa. Masa tenggang blok frontend ngontrol kapan **situs diblokir** sanggeus status geus robah.
:::

#### Keanggotaan Auto-Renewing vs. Non-Auto-Renewing {#auto-renewing-vs-non-auto-renewing-memberships}

Pangbedaan ieu penting pisan pikeun ngarti perilaku kedaluwarsa:

- **Keanggotaan non-auto-renewing** (`auto_renew = false`): Cron job per jam ngurus siklus leuwih panjangna -- éta nyiptake pembayaran renewal, ngalamparkeun keanggotaan jadi on-hold, jeung ahirna nandaan jadi kadaluwarsa lamun pembayaran teu kapanggih.

- **Keanggotaan auto-renewing** (`auto_renew = true`): Pengecekan kedaluwarsa cron **ngalangkungan éta sacara total**. Payment gateway (Stripe, PayPal, jsb) dipikahoyong ngabéjaan Ultimate Multisite lewat webhook lamun langganan gagal atawa dibatalkan. Lamun webhook teu kapanggih -- alatan endpoint salah konfigurasi, gangguan gateway, atawa langganan dibatalkan di luar sistem -- keanggotaan bisa tetep jadi `active` nepi ka tanggal kedaluwarsa ngalampau.

### Kumaha Cara Ujian Coba (Trials) Berakhir {#how-trials-end}

Lamun mangsa uji coba keanggotaan trialing réngsé, sistem bakal:

1. Nyiptake pembayaran renewal anu masih loba jeung jumlah langganan sakabéhna
2. Ngalamparkeun status keanggotaan tina `trialing` jadi `on-hold`
3. Ngirim email notifikasi pembayaran renewal ka pelanggan

Proses ieu lumangsung dina jadwal jam anu sarua jeung pengecekan kedaluwarsa biasa, tapi **hanya pikeun keanggotaan non-auto-renewing**. Pikeun uji coba auto-renewing, payment gateway anu ngurus peralihan tina trial jadi langganan berbayar.

## Blokir Akses Frontend {#block-frontend-access}

Secara *default*, lamun keanggotaan kedaluwarsa atawa di-hold, **hanya dashboard wp-admin anu dibatasi**. Frontend situsna kanggo pengunjung tetep bisa diakses. Pikeun ngablokir akses publik ogé, anjeun kudu ngaktifkeun pengaturan **Block Frontend Access**.

### Ngatur Pengaturan {#configuring-the-setting}

Pindah ka **Ultimate Multisite > Settings > Memberships** teras aktifkeun **Block Frontend Access**.

![Pengaturan Block Frontend Access nunjukkeun toggle diaktifkeun, periode tenggang 7 poé, jeung pilihan Halaman Blok Frontend](/img/config/settings-membership-block-frontend.png)

Ieu pandangan lengkapna halaman pengaturan keanggotaan:

![Halaman pengaturan keanggotaan penuh](/img/config/settings-membership-full.png)

Tiluna pengaturan patali ngontrol perilaku ieu:

| Pengaturan | Deskripsi | *Default* |
|---|---|---|
| **Block Frontend Access** | Toggle utama. Lamun diaktifkeun, bakal ngablokir frontend publik situs jaringan lamun keanggotaanna teu aktif deui. | Off |
| **Frontend Block Grace Period** | Jumlah poé anu kudu ditunggu sanggeus keanggotaan jadi teu aktif saméméh diblokir. Atur ka `0` pikeun diblokir langsung. | 0 |
| **Frontend Block Page** | Halaman dina situs utama pikeun ngarujuk pengunjung lamun hiji situs diblokir. Lamun teu diatur, pengunjung bakal ningali pesan umum "Situs ieu teu tersedia ayeuna" jeung tautan ka halaman *login* admin situs. | None |

### Naon anu Dipandang Kuah Pengunjung Nalika Situs Diblokir {#what-visitors-see-when-a-site-is-blocked}

Lamun akses frontend diblokir, pengunjung situs bakal:

1. **Diarujuk** ka halaman anu anjeun pilih dina **Frontend Block Page** (lamun diatur), atawa
2. **Ningali pesan *default***: "Situs ieu teu tersedia ayeuna" jeung tautan ka halaman *login* admin situs.

Admin situs masih bisa *login* -- halaman *login*-na teu pernah diblokir.

### Naon anu Diblokir Jeung Imahna {#what-gets-blocked-and-when}

Perilaku blokir gumantung kana status keanggotaan:

| Status Keanggotaan | Frontend Diblokir? | Masa Tenggang Diterapkan? |
|---|---|---|
| Aktif | Tidak | -- |
| Trialing | **Tidak** (lihat catatan di bawah) | -- |
| On Hold | Dianggap aktif -- tidak diblokir | -- |
| Expired | **Ya**, jika Block Frontend Access menyala | Ya |
| Cancelled | **Ya**, selalu (terlepas dari pengaturan) | **Tidak** -- langsung diblokir |
| Pending | Tidak diblokir melalui pengecekan keanggotaan | -- |

:::warning Keanggotaan Trialing tidak diblokir
Bahkan jika masa percobaan sudah berakhir, keanggotaan dengan status `trialing` **tidak akan** diblokir di frontend. Masa percobaan harus berubah status terlebih dahulu (biasanya menjadi `on-hold` melalui cron job, lalu `expired` jika belum dibayar). Jika Anda melihat keanggotaan trialing yang belum berubah status, periksa bagian pemecahan masalah di bawah ini.
:::

:::note Keanggotaan Cancelled melewati masa tenggang
Keanggotaan yang dibatalkan selalu diblokir setelah tanggal kedaluwarsa terlewati, tidak peduli apakah Block Frontend Access aktif atau tidak. Masa Tenggang Blok Frontend **tidak** berlaku untuk keanggotaan yang dibatalkan.
:::

## Pemecahan Masalah: Situs Tetap Bisa Diakses Setelah Kedaluwarsa {#troubleshooting-sites-remaining-accessible-after-expiration}

Jika situs masih bisa diakses publik setelah masa keanggotaan kedaluwarsa, lakukan pemeriksaan ini secara berurutan:

### 1. Verifikasi Pengaturan Block Frontend Access Sudah Aktif {#1-verify-the-block-frontend-access-setting-is-enabled}

Buka **Ultimate Multisite > Settings > Memberships** dan pastikan tombol **Block Frontend Access** sudah menyala (on). Pengaturan ini **secara default mati**, artinya hanya wp-admin yang dibatasi ketika keanggotaan menjadi tidak aktif.

### 2. Periksa Masa Tenggang Blok Frontend {#2-check-the-frontend-block-grace-period}

Di halaman pengaturan yang sama, periksa nilai **Frontend Block Grace Period**. Kalau ini diatur ke 7 hari misalnya, frontend tidak akan diblokir sampai 7 hari setelah tanggal kedaluwarsa keanggotaan -- meskipun status keanggotaannya sudah `expired`.

Atur ini ke `0` kalau kamu mau pemblokiran langsung setelah keanggotaan jadi tidak aktif.

### 3. Pastikan Status Keanggotaan Sudah Berubah Sungguh-sungguh {#3-confirm-the-membership-status-has-actually-changed}

Pergi ke **Ultimate Multisite > Memberships** dan periksa status keanggotaan yang terpengaruh. Kalau masih menunjukkan `active` meskipun tanggal kedaluwarsa sudah lewat, berarti perubahan statusnya belum terjadi. Penyebab umum:

- **Keanggotaan diperbarui otomatis**: Periksa kolom `auto_renew` di halaman edit keanggotaan. Kalau auto-renew aktif, cron job kedaluwarsa akan melewati keanggotaan ini -- ia bergantung pada payment gateway untuk melaporkan kegagalan. Cek dashboard gateway kamu (Stripe, PayPal) untuk memastikan status langganan cocok dengan yang ditunjukkan Ultimate Multisite.

- **cron job belum berjalan**: Lihat langkah berikutnya.

### 4. Verifikasi Action Scheduler Berjalan {#4-verify-action-scheduler-is-running}

Ultimate Multisite menggunakan Action Scheduler untuk cron jobnya. Pergi ke **Tools > Scheduled Actions** di admin jaringan dan cari:

- **`wu_membership_check`** -- Ini seharusnya muncul sebagai aksi berulang yang berjalan setiap jam. Kalau tidak ada, pengecekan keanggotaan tidak dijadwalkan.
- **`wu_async_mark_membership_as_expired`** -- Ini adalah tugas individual untuk menandai keanggotaan tertentu sebagai kedaluwarsa. Kalau kamu melihat aksi gagal di sini, mungkin berisi pesan error yang menjelaskan alasannya.

Kalau kamu melihat aksi yang macet atau gagal, mungkin ada masalah di Action Scheduler. Penyebab umumnya:

- **`DISABLE_WP_CRON` diatur ke `true`** di `wp-config.php` tanpa pengganti cron tingkat sistem
- **Lalu lintas situs rendah** -- WP-Cron ngan ukur lamun aya nu ngunjungkeun situs

Supaya eksekusi cron bisa dipercaya, atur jadwal cron sistem:

```bash
# Jalankan sabaraha menit sakali via wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Atanapi WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Periksa Masalah Gateway Webhook (Auto-Renewing Memberships) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Lamun keanggotaan auto-renew jeung langganan gateway geus dibatalkan atawa gagal, tapi Ultimate Multisite masih nunjukkeun éta salaku `active`:

- **Stripe**: Ka Stripe Dashboard > Customers terus periksa status langganan. Terus verifikasi endpoint webhook aktif di bawah Developers > Webhooks. Endpoint téh kudu nunjuk ka situs anjeun jeung nunjukkeun pengiriman sukses.
- **PayPal**: Periksa status langganan dina akun bisnis PayPal anjeun jeung verifikasi pengiriman IPN/webhook.

Lamun gateway nunjukkeun langganan dibatalkan tapi Ultimate Multisite teu nunjukkeun kitu, kemungkinan notifikasi webhook geus ilang. Anjeun bisa ngarobah status keanggotaan sacara manual di **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Periksa Masa Tenggang Kedaluwarsa (Tingkat Cron) {#6-check-the-expiration-grace-period-cron-level}

Pengecekan cron miboga masa tenggangna sorangan (default: 3 poé) saméméngkeun keanggotaan salaku kedaluwarsa. Ieu béda jeung masa tenggang blok frontend. Total waktu saméméh situs diblokir bisa jadi:

**Masa tenggang kedaluwarsa (3 poé)** + **Masa tenggang blok frontend (aturan anjeun)** = Total kagagalan

Contohna, dengan pengaturan default jeung masa tenggang 7 hari di bagian depan (frontend), bisa butuh nepi ka 10 poé sanggeus `date_expiration` mun situsna beneran diblokir.

### 7. Manually Expire a Membership {#7-manually-expire-a-membership}

Mun anjeun perlu langsung blokir situs tanpa ngantosan siklus cron, anjeun bisa ganti status keanggotaan (membership) sacara manual:

1. Pergi ka **Ultimate Multisite > Memberships**
2. Klik kana membership anu dipengaruhi éta
3. Ganti statusna jadi **Expired** atawa **Cancelled**
4. Klik **Save**

Blokir di bagian depan bakal mangnaik efekna dina loading halaman salajengna (tergantung Masa Tenggang Blokir Frontend pikeun keanggotaan nu kadaluwarsa, atawa langsung lamun dibatalkan).

## Summary {#summary}

Timeline sakabéh waktu ti tanggal kedaluwarsa nepi ka blokir situs:

```text
date_expiration lewat
       |
       v
  [masa tenggang cron 3 poé]     <-- keanggotaan masih nunjukkeun aktif/ditahan
       |
       v
  Cron menandai keanggotaan jadi "expired"
       |
       v
  [Masa Tenggang Blokir Frontend]  <-- diatur dina Settings > Memberships
       |
       v
  Frontend situs diblokir
```

Mun keanggotaan nu dibatalkan (cancelled), jalanna leuwih singget:

```text
  Membership dibatalkan
       |
       v
  date_expiration lewat (tanpa masa tenggang)
       |
       v
  Frontend situs diblokir langsung
```

## Developer Reference {#developer-reference}

Hook jeung filter di handap bisa ngajadikeun perilaku kedaluwarsa jeung blokir jadi leuwih disesuaikan:

| Hook/Filter | Deskripsi |
|---|---|
| `wu_membership_grace_period_days` | Filter jumlah hari masa tenggang sebelum keanggotaan ditandai kedaluwarsa (default: 3) |
| `wu_schedule_membership_check_interval` | Filter interval antara pengecekan keanggotaan (default: 1 jam) |
| `wu_membership_renewal_days_before_expiring` | Filter berapa hari sebelum kedaluwarsa untuk membuat pembayaran perpanjangan (default: 3) |
| `wu_blocked_site_reactivation_url` | Filter untuk memberikan URL aktivasi kustom ketika situs diblokir |
| `wu_membership_is_active` | Filter apakah keanggotaan dianggap aktif |
| `wu_membership_expired_check_query_params` | Filter parameter kueri yang digunakan untuk mencari keanggotaan kedaluwarsa |
| `wu_membership_trial_check_query_params` | Filter parameter kueri yang digunakan untuk mencari uji coba yang kedaluwarsa |
