---
title: Tamat Tempoh Keahlian dan Pemblokiran Laman
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Tamat Tempoh Keahlian dan Pemblokiran Laman {#membership-expiration-and-site-blocking}

Panduan ini menerangkan cara Ultimate Multisite mengendalikan tamat tempoh keahlian, tamat tempoh percubaan, dan pemblokiran laman di bahagian hadapan (frontend). Ia meliputi kitaran hayat keahlian dari aktif hingga tamat tempoh, tetapan yang mengawal sama ada laman akan diblokir, dan perkara yang perlu diperiksa apabila laman masih boleh diakses selepas keahlian tamat tempoh.

## Kitaran Hayat Status Keahlian {#membership-status-lifecycle}

Setiap keahlian dalam Ultimate Multisite mempunyai salah satu status berikut:

:::note Keahlian Percuma adalah Sepanjang Hayat
Keahlian percuma tidak tamat tempoh secara automatik. Ultimate Multisite menganggapnya sebagai akses sepanjang hayat, jadi ia tidak termasuk dalam semakan tamat tempoh melainkan pentadbir mengubah statusnya atau memindahkan pelanggan ke produk lain.
:::

| Status | Maksud |
|---|---|
| **Pending** | Menunggu bayaran pertama atau pengesahan e-mel |
| **Trialing** | Tempoh percubaan aktif, belum mengutip bayaran |
| **Active** | Berbayar dan semasa |
| **On Hold** | Pembayaran pembaharuan tertangguh (invois dicipta, menunggu pembayaran) |
| **Expired** | Melepasi tarikh tamat tempoh dan tempoh kelonggaran tanpa pembaharuan |
| **Cancelled** | Dibatalkan secara eksplisit oleh pelanggan atau pentadbir |

### Bagaimana Keahlian Beralih ke Status Tamat Tempoh {#how-memberships-transition-to-expired}

Ultimate Multisite menjalankan semakan latar belakang **setiap jam** yang mencari keahlian yang sepatutnya ditandakan sebagai tamat tempoh. Semakan ini menggunakan [Action Scheduler](https://actionscheduler.org/) (bukan WP-Cron secara langsung) dan berjalan sebagai tindakan terjadual `wu_membership_check`.

Semakan tamat tempoh mempunyai **tempoh kelonggaran terbina dalam selama 3 hari** secara lalai. Keahlian tidak akan ditandakan sebagai `expired` sehingga 3 hari selepas `date_expiration` berlalu. Ini memberi masa kepada pelanggan untuk menyelesaikan pembayaran lewat sebelum status mereka berubah.

:::info
Tempoh kelonggaran tamat tempoh 3 hari ini berbeza daripada tetapan Tempoh Kelonggaran Pemblokiran Frontend yang diterangkan di bawah. Tempoh kelonggaran tamat tempoh mengawal bila **status berubah** dari aktif/on-hold kepada expired. Tempoh kelonggaran pemblokiran frontend mengawal bila **laman diblokir** selepas status telah berubah.
:::

#### Keahlian Pembaharuan Automatik vs. Bukan Pembaharuan Automatik {#auto-renewing-vs-non-auto-renewing-memberships}

Perbezaan ini sangat penting untuk memahami tingkah laku tamat tempoh:

- **Keahlian bukan pembaharuan automatik** (`auto_renew = false`): Tugas cron setiap jam mengendalikan kitaran hayat penuh — ia mencipta pembayaran pembaharuan, mengubah keahlian kepada on-hold, dan akhirnya menandakannya sebagai expired jika pembayaran tidak diterima.

- **Keahlian pembaharuan automatik** (`auto_renew = true`): Semakan tamat tempoh cron **mengabaikan ini sepenuhnya**. Pintu gerbang pembayaran (Stripe, PayPal, dsb.) dijangka memberitahu Ultimate Multisite melalui webhooks apabila langganan gagal atau dibatalkan. Jika webhook tidak diterima — disebabkan oleh titik akhir yang salah konfigurasi, gangguan gerbang, atau langganan dibatalkan di luar sistem — keahlian mungkin kekal `active` tanpa had walaupun selepas tarikh tamat tempoh berlalu.

### Bagaimana Percubaan Tamat {#how-trials-end}

Apabila tempoh percubaan keahlian tamat, sistem:

1. Mencipta pembayaran pembaharuan tertangguh dengan jumlah langganan penuh
2. Mengubah status keahlian dari `trialing` kepada `on-hold`
3. Menghantar e-mel pemberitahuan pembayaran pembaharuan kepada pelanggan

Proses ini berjalan pada jadual setiap jam yang sama seperti semakan tamat tempoh biasa, tetapi **hanya untuk keahlian bukan pembaharuan automatik**. Untuk percubaan pembaharuan automatik, pintu gerbang pembayaran mengendalikan peralihan dari percubaan ke langganan berbayar.

## Blok Akses Frontend {#block-frontend-access}

Secara lalai, apabila keahlian tamat tempoh atau berada dalam status on-hold, **hanya dashboard wp-admin yang dihadkan**. Bahagian hadapan awam laman masih boleh diakses oleh pelawat. Untuk menyekat akses awam juga, anda mesti mengaktifkan tetapan **Block Frontend Access**.

### Mengkonfigurasi Tetapan {#configuring-the-setting}

Pergi ke **Ultimate Multisite > Settings > Memberships** dan aktifkan **Block Frontend Access**.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Berikut adalah paparan penuh halaman tetapan keahlian:

![Membership settings full page](/img/config/settings-membership-full.png)

Tiga tetapan berkaitan mengawal tingkah laku ini:

| Setting | Description | Default |
|---|---|---|
| **Block Frontend Access** | Toggle utama. Apabila diaktifkan, ia menyekat bahagian hadapan awam laman rangkaian apabila keahlian mereka tidak lagi aktif. | Off |
| **Frontend Block Grace Period** | Bilangan hari untuk menunggu selepas keahlian tidak aktif sebelum menyekat. Tetapkan kepada `0` untuk menyekat serta-merta. | 0 |
| **Frontend Block Page** | Halaman pada laman utama untuk mengalihkan pelawat apabila laman diblokir. Jika tidak ditetapkan, pelawat akan melihat mesej "Site not available" generik. | None |

### Apa yang Dilihat Pelawat Apabila Laman Diblokir {#what-visitors-see-when-a-site-is-blocked}

Apabila akses frontend diblokir, pelawat ke laman tersebut akan sama ada:

1. **Dialihkan** ke halaman yang anda pilih dalam **Frontend Block Page** (jika dikonfigurasi), atau
2. **Melihat mesej lalai**: "This site is not available at the moment." dengan pautan ke halaman log masuk untuk pentadbir laman.

Pentadbir laman masih boleh log masuk — halaman log masuk tidak pernah diblokir.

### Apa yang Diblokir dan Bila {#what-gets-blocked-and-when}

Tingkah laku pemblokiran bergantung pada status keahlian:

| Membership Status | Frontend Blocked? | Grace Period Applied? |
|---|---|---|
| Active | Tidak | -- |
| Trialing | **Tidak** (lihat nota di bawah) | -- |
| On Hold | Dianggap aktif -- tidak diblokir | -- |
| Expired | **Ya**, jika Block Frontend Access dihidupkan | Ya |
| Cancelled | **Ya**, sentiasa (tanpa mengira tetapan) | **Tidak** -- diblokir serta-merta |
| Pending | Tidak diblokir melalui semakan keahlian | -- |

:::warning Keahlian Trialing tidak diblokir
Walaupun tempoh percubaan telah tamat, keahlian dengan status `trialing` **tidak akan** diblokir di bahagian hadapan. Percubaan mesti beralih ke status lain (biasanya `on-hold` melalui tugas cron, kemudian `expired` jika tidak dibayar). Jika anda melihat keahlian *trialing* yang belum beralih, semak bahagian penyelesaian masalah di bawah.
:::

:::note Keahlian Dibatalkan mengabaikan tempoh kelonggaran
Keahlian yang dibatalkan sentiasa diblokir sebaik sahaja tarikh tamat tempoh berlalu, tanpa mengira sama ada Block Frontend Access dihidupkan. Tempoh Kelonggaran Pemblokiran Frontend **tidak** terpakai kepada keahlian yang dibatalkan.
:::

## Penyelesaian Masalah: Laman Kekal Boleh Diakses Selepas Tamat Tempoh {#troubleshooting-sites-remaining-accessible-after-expiration}

Jika laman kekal boleh diakses secara awam selepas keahlian tamat tempoh, ikuti semakan ini mengikut urutan:

### 1. Sahkan Tetapan Block Frontend Access Diaktifkan {#1-verify-the-block-frontend-access-setting-is-enabled}

Pergi ke **Ultimate Multisite > Settings > Memberships** dan sahkan toggle **Block Frontend Access** dihidupkan. Tetapan ini **mati secara lalai**, bermakna hanya wp-admin yang dihadkan apabila keahlian menjadi tidak aktif.

### 2. Semak Tempoh Kelonggaran Pemblokiran Frontend {#2-check-the-frontend-block-grace-period}

Pada halaman tetapan yang sama, semak nilai **Frontend Block Grace Period**. Jika ini ditetapkan kepada 7 hari, contohnya, bahagian hadapan tidak akan diblokir sehingga 7 hari selepas tarikh tamat tempoh keahlian — walaupun status keahlian sudah `expired`.

Tetapkan ini kepada `0` jika anda mahu pemblokiran serta-merta selepas keahlian menjadi tidak aktif.

### 3. Sahkan Status Keahlian Benar-benar Berubah {#3-confirm-the-membership-status-has-actually-changed}

Pergi ke **Ultimate Multisite > Memberships** dan semak status keahlian yang terjejas. Jika ia masih menunjukkan `active` walaupun tarikh tamat tempoh telah berlalu, peralihan status belum berlaku. Punca biasa:

- **Keahlian itu pembaharuan automatik**: Semak medan `auto_renew` pada halaman suntingan keahlian. Jika pembaharuan automatik dihidupkan, cron tamat tempoh akan mengabaikan keahlian ini -- ia bergantung pada pintu gerbang pembayaran untuk melaporkan kegagalan. Semak dashboard gerbang anda (Stripe, PayPal) untuk mengesahkan status langganan sepadan dengan apa yang ditunjukkan oleh Ultimate Multisite.

- **Tugas cron belum berjalan**: Lihat langkah seterusnya.

### 4. Sahkan Action Scheduler Berjalan {#4-verify-action-scheduler-is-running}

Ultimate Multisite menggunakan Action Scheduler untuk tugas cronnya. Pergi ke **Tools > Scheduled Actions** dalam pentadbir rangkaian dan cari:

- **`wu_membership_check`** -- Ini sepatutnya muncul sebagai tindakan berulang yang berjalan setiap jam. Jika ia hilang, semakan keahlian tidak dijadualkan.
- **`wu_async_mark_membership_as_expired`** -- Ini adalah tugas individu untuk menandakan keahlian tertentu sebagai tamat tempoh. Jika anda melihat tindakan gagal di sini, ia mungkin mengandungi mesej ralat yang menjelaskan mengapa.

Jika anda melihat tindakan yang tersekat atau gagal, anda mungkin mempunyai isu Action Scheduler. Punca biasa:

- **`DISABLE_WP_CRON` ditetapkan kepada `true`** dalam `wp-config.php` tanpa pengganti cron peringkat sistem
- **Laluan trafik laman rendah** -- WP-Cron hanya berjalan apabila seseorang melawat laman

Untuk memastikan pelaksanaan cron yang boleh dipercayai, sediakan tugas cron sistem:

```bash
# Jalankan setiap 5 minit melalui wget
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Atau melalui WP-CLI
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Semak Isu Webhook Gerbang (Keahlian Pembaharuan Automatik) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}

Jika keahlian itu pembaharuan automatik dan langganan gerbang telah dibatalkan atau gagal, tetapi Ultimate Multisite masih menunjukkannya sebagai `active`:

- **Stripe**: Pergi ke Dashboard Stripe > Customers dan semak status langganan. Kemudian sahkan titik akhir webhook aktif di bawah Developers > Webhooks. Titik akhir sepatutnya merujuk kepada laman anda dan menunjukkan penghantaran yang berjaya.
- **PayPal**: Semak status langganan dalam akaun perniagaan PayPal anda dan sahkan penghantaran IPN/webhook.

Jika gerbang menunjukkan langganan dibatalkan tetapi Ultimate Multisite tidak, kemungkinan besar pemberitahuan webhook telah hilang. Anda boleh menukar status keahlian secara manual dalam **Ultimate Multisite > Memberships > [Edit Membership]**.

### 6. Semak Tempoh Kelonggaran Tamat Tempoh (Peringkat Cron) {#6-check-the-expiration-grace-period-cron-level}

Semakan cron mempunyai tempoh kelonggaran sendiri (lalai: 3 hari) sebelum menandakan keahlian sebagai tamat tempoh. Ini berbeza daripada tempoh kelonggaran pemblokiran frontend. Jumlah masa sebelum laman diblokir boleh jadi:

**Tempoh kelonggaran tamat tempoh (3 hari)** + **Tempoh kelonggaran blok frontend (tetapan anda)** = Jumlah kelewatan

Contohnya, dengan tetapan lalai dan tempoh kelonggaran frontend 7 hari, ia boleh mengambil masa sehingga 10 hari selepas `date_expiration` sebelum laman itu benar-benar diblokir.

### 7. Tamatkan Tempoh Keahlian Secara Manual {#7-manually-expire-a-membership}

Jika anda perlu menyekat laman dengan serta-merta tanpa menunggu kitaran cron, anda boleh menukar status keahlian secara manual:

1. Pergi ke **Ultimate Multisite > Memberships**
2. Klik pada keahlian yang terjejas
3. Tukar status kepada **Expired** atau **Cancelled**
4. Klik **Save**

Pemblokiran frontend akan berkuat kuasa pada muat halaman seterusnya (tertakluk kepada Tempoh Kelonggaran Pemblokiran Frontend untuk keahlian tamat tempoh, atau serta-merta untuk keahlian yang dibatalkan).

## Ringkasan {#summary}

Garis masa penuh dari tarikh tamat tempoh hingga pemblokiran laman:

```text
date_expiration berlalu
       |
       v
  [tempoh kelonggaran cron 3 hari]     <-- keahlian masih menunjukkan aktif/on-hold
       |
       v
  Cron menandakan keahlian sebagai "expired"
       |
       v
  [Tempoh Kelonggaran Blok Frontend]  <-- dikonfigurasi dalam Settings > Memberships
       |
       v
  Frontend laman diblokir
```

Untuk keahlian yang dibatalkan, laluan adalah lebih pendek:

```text
  Keahlian dibatalkan
       |
       v
  date_expiration berlalu (tiada tempoh kelonggaran)
       |
       v
  Frontend laman diblokir serta-merta
```

## Rujukan Pembangun {#developer-reference}

Hook dan filter berikut membolehkan anda menyesuaikan tingkah laku tamat tempoh dan pemblokiran:

| Hook/Filter | Description |
|---|---|
| `wu_membership_grace_period_days` | Filter bilangan hari tempoh kelonggaran sebelum menandakan keahlian sebagai tamat tempoh (lalai: 3) |
| `wu_schedule_membership_check_interval` | Filter selang masa antara semakan keahlian (lalai: 1 jam) |
| `wu_membership_renewal_days_before_expiring` | Filter berapa hari sebelum tamat tempoh untuk mencipta pembayaran pembaharuan (lalai: 3) |
| `wu_blocked_site_reactivation_url` | Filter untuk menyediakan URL pengaktifan tersuai apabila laman diblokir |
| `wu_membership_is_active` | Filter sama ada keahlian dianggap aktif |
| `wu_membership_expired_check_query_params` | Filter parameter pertanyaan yang digunakan untuk mencari keahlian tamat tempoh |
| `wu_membership_trial_check_query_params` | Filter parameter pertanyaan yang digunakan untuk mencari percubaan tamat tempoh |
