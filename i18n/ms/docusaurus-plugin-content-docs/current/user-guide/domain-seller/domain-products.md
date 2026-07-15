---
title: Produk Domain dan Harga
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Produk Domain dan Harga

Produk domain adalah cara anda mengawal penetapan harga, TLD, privasi WHOIS, dan pemilihan penyedia. Setiap produk domain adalah produk standar Ultimate Multisite dengan tab tambahan **Domain Settings**.

## Mencipta produk domain {#creating-a-domain-product}

1. Pergi ke **Network Admin › Ultimate Multisite › Products**
2. Klik **Add New**
3. Tetapkan jenis produk kepada **Domain**
4. Konfigurasikan tab **Domain Settings** (lihat di bawah)
5. Simpan

Produk domain akan muncul dengan lencana **Domain** berwarna ungu dalam senarai produk dan boleh ditapis menggunakan tab **Domain Products**.

## Tab tetapan domain {#domain-settings-tab}

### Provider {#provider}

Pilih pendaftar (registrar) mana yang menguruskan pendaftaran untuk produk ini. Secara lalai, ia akan menggunakan **Default provider** global yang ditetapkan dalam tetapan Domain Seller.

### TLD yang disokong {#supported-tlds}

Biarkan kosong untuk mencipta **produk tangkapan umum** yang terpakai kepada semua TLD yang tidak dipadankan oleh produk lain.

Masukkan senarai TLD yang dipisahkan koma (cth., `.com, .net, .org`) untuk mencipta **produk khusus TLD** yang hanya terpakai kepada sambungan tersebut.

**Cara padanan produk berfungsi:** Apabila pelanggan mencari domain, addon akan memilih produk padanan yang paling spesifik. Produk dengan `.com` dalam senarai TLDnya akan diutamakan berbanding produk tangkapan umum. Jika tiada produk khusus TLD yang padan, produk tangkapan umum akan digunakan. Jika tiada produk wujud, carian domain tidak akan dipaparkan.

### Jenis markup {#markup-type}

Tiga mod mengawal cara harga runcit anda dikira daripada kos borong:

| Mod | Cara ia berfungsi |
|---|---|
| **Percentage** | Menambah peratusan ke atas kos borong. Markup 20% ke atas domain borong $10 memberikan $12. |
| **Fixed markup** | Menambah jumlah dolar tetap. Markup $5 ke atas domain $10 memberikan $15. |
| **Fixed price** | Mengabaikan kos borong sepenuhnya. Sentiasa mengenakan jumlah yang anda masukkan. |

### Harga pengenalan {#introductory-pricing}

Aktifkan untuk menawarkan harga tahun pertama yang diskaun. Tetapkan **Introductory price** yang berasingan (harga tahun -1) bersama dengan **Renewal price** biasa (tahun 2+). Pelanggan akan melihat kedua-dua harga dipaparkan semasa pembayaran supaya mereka tahu apa yang perlu dijangkakan semasa pembaharuan.

### Privasi WHOIS {#whois-privacy}

Mengawal sama ada perlindungan privasi WHOIS ditawarkan untuk domain yang didaftarkan melalui produk ini.

| Tetapan | Tingkah laku |
|---|---|
| **Disabled** | Privasi WHOIS tidak pernah ditawarkan atau diaktifkan. |
| **Always Included** | Privasi WHOIS diaktifkan secara automatik semasa pendaftaran tanpa sebarang caj. |
| **Customer Choice** | Kotak semak akan muncul semasa pembayaran. Tetapkan **Privacy price** untuk mengenakan caj setiap tahun, atau biarkan pada $0 untuk menawarkannya secara percuma. |

Untuk Namecheap, privasi WHOIS menggunakan WhoisGuard (sentiasa percuma). Untuk OpenSRS, ia menggunakan perkhidmatan privasi OpenSRS (mungkin mempunyai kos pada peringkat borong).

---

## Import dan sinkronisasi TLD {#tld-import-and-sync}

Produk domain memaparkan harga borong masa nyata yang diambil daripada penyedia yang disambungkan. Untuk ini berfungsi, TLD mesti diimport.

- **Manual sync:** Settings › Domain Seller › Sync TLDs (mengikut penyedia)
- **Automatic sync:** Berjalan setiap hari melalui tugas cron terjadual merentasi semua penyedia yang dikonfigurasikan

Selepas sinkronisasi, pergi ke tab Domain Settings mana-mana produk domain dan gunakan pemilih TLD untuk melihat TLD yang tersedia bersama harga borong semasa mereka.

---

## Pembaharuan automatik {#auto-renewal}

Pembaharuan domain dikaitkan dengan status keahlian pelanggan:

- Apabila keahlian diperbaharui dan domain dipautkan, pembaharuan domain akan dikumpulkan secara automatik
- Percubaan pembaharuan menggunakan gateway pembayaran aktif pelanggan
- Pembaharuan yang gagal akan dicuba semula secara automatik dengan *exponential backoff*
- Pemberitahuan e-mel dihantar untuk pembaharuan yang berjaya, kegagalan, dan tamat tempoh yang akan datang

ID templat e-mel untuk acara kitaran hayat domain:

| Acara | ID Templat |
|---|---|
| Domain didaftarkan | `domain_registered` |
| Domain diperbaharui | `domain_renewed` |
| Pembaharuan gagal | `domain_renewal_failed` |
| Domain akan tamat tempoh | `domain_expiring_soon` |

---

## Admin: Pendaftaran domain manual {#admin-manual-domain-registration}

Untuk mendaftarkan domain bagi pihak pelanggan tanpa mereka melalui proses pembayaran:

1. Pergi ke **Network Admin › Ultimate Multisite › Register Domain**
2. Pilih pelanggan dan masukkan nama domain
3. Isi butiran hubungan pendaftar (nama, alamat, telefon)
4. Klik **Register**

Rekod domain akan dicipta dan dipautkan kepada akaun pelanggan.
