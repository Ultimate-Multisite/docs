---
title: Pembangun & Kotak Pasir Plugin
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 memperkenalkan **Sistem Plugin Builder & Sandbox**, yang memungkinkan asisten AI menghasilkan, mengaktifkan, dan mengelola plugin WordPress di jaringan Anda — semuanya melalui lingkungan sandbox yang aman dan terisolasi.

## Gambaran Umum {#overview}

Plugin Builder memungkinkan asisten AI untuk menulis plugin WordPress kustom sebagai respons terhadap permintaan bahasa alami. Plugin yang dihasilkan akan divalidasi, disimpan, dan diaktifkan di dalam lapisan sandbox sebelum pernah memengaruhi fungsionalitas situs langsung.

Kasus penggunaannya meliputi:

- Menghasilkan plugin utilitas ringan tanpa perlu keterlibatan developer.
- Membuat prototipe fitur yang memerlukan *hook* WordPress atau *custom post types*.
- Membuat skrip otomatisasi jangka pendek untuk operasi *batch*.

## Menghasilkan Plugin melalui AI {#generating-a-plugin-via-ai}

Untuk menghasilkan plugin, buka antarmuka obrolan Gratis AI Agent dan jelaskan apa yang Anda butuhkan. Contohnya:

> "Buat plugin yang menambahkan pemberitahuan admin kustom di dashboard."

AI akan:

1. Menghasilkan kode PHP plugin menggunakan pembuatan kode terstruktur.
2. Memvalidasi output untuk kesalahan sintaks dan pola yang tidak aman.
3. Menyimpan plugin yang dihasilkan ke *sandbox store*.
4. Mengembalikan konfirmasi dengan *slug* plugin dan tombol **Activate in Sandbox**.

Anda dapat menyempurnakan hasilnya dengan menindaklanjuti di utas percakapan yang sama sebelum mengaktifkannya.

## Aktivasi Sandbox {#sandbox-activation}

Mengaktifkan plugin yang dihasilkan di sandbox berbeda dengan mengaktifkannya di jaringan langsung (*live network*). Sandbox:

- Menjalankan plugin dalam lingkungan WordPress yang terisolasi (*wp-env*).
- Menangkap setiap kesalahan PHP, peringatan, atau konflik *hook*.
- Melaporkan hasil aktivasi kembali di antarmuka obrolan.

Untuk mengaktifkan plugin di sandbox, klik tombol **Activate in Sandbox** di respons obrolan AI, atau gunakan perintah *slash*:

```
/activate-plugin <plugin-slug>
```

Pesan status akan mengonfirmasi apakah aktivasi berhasil atau gagal. Jika gagal, log kesalahan akan ditampilkan di utas obrolan.

## Mengelola Plugin yang Dihasilkan {#managing-generated-plugins}

Plugin yang dihasilkan terdaftar di **Gratis AI Agent → Plugin Builder → Manage Plugins**. Dari layar ini Anda dapat:

| Aksi | Deskripsi |
|---|---|
| **View source** | Meninjau seluruh kode PHP plugin. |
| **Re-activate in sandbox** | Menjalankan kembali pemeriksaan aktivasi sandbox. |
| **Install on network** | Menerapkan plugin ke jaringan langsung (memerlukan konfirmasi manual). |
| **Update** | Menyediakan versi baru melalui AI, menggantikan kode yang sudah ada. |
| **Delete** | Menghapus plugin dari *sandbox store*. Plugin akan dinonaktifkan dari semua situs terlebih dahulu. |

:::warning
**Install on network** menerapkan plugin yang dihasilkan ke multisite WordPress langsung Anda. Tinjau kode plugin sebelum melanjutkan. Gratis AI Agent akan meminta konfirmasi sebelum menyelesaikan instalasi langsung.
:::

## Menginstal Plugin yang Dihasilkan di Jaringan {#installing-a-generated-plugin-on-the-network}

Ketika Anda puas dengan plugin yang sudah diuji di sandbox, Anda dapat menginstalnya di jaringan langsung:

1. Buka **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Klik **Install on Network** di samping plugin yang ingin Anda terapkan.
3. Konfirmasi dialog. Plugin akan diinstal ke `wp-content/plugins/` dan diaktifkan di seluruh jaringan.

Sebagai alternatif, gunakan perintah *slash* di antarmuka obrolan:

```
/install-plugin <plugin-slug>
```

## Pembaruan Plugin {#plugin-updates}

Untuk memperbarui plugin yang dihasilkan, jelaskan perubahannya kepada asisten AI dalam percakapan baru:

> "Perbarui plugin dashboard-notice agar hanya menampilkan pemberitahuan kepada administrator."

AI akan menghasilkan versi baru, yang akan muncul di sandbox bersamaan dengan versi saat ini. Anda meninjau *diff* dan mengonfirmasi sebelum pembaruan diterapkan.

## Integrasi HookScanner {#hookscanner-integration}

Plugin Builder menggunakan **HookScanner** terintegrasi untuk menganalisis *hook* dan *filter* yang didaftarkan oleh setiap plugin yang dihasilkan. Output HookScanner ditampilkan di respons obrolan dan mencakup:

- *Action hooks* yang terdaftar (`add_action` calls).
- *Filter hooks* yang terdaftar (`add_filter` calls).
- *Hook* apa pun yang ditemukan dalam dependensi plugin (melewati direktori `vendor/` dan `node_modules/`).

Ini membantu Anda memahami perilaku plugin sebelum mengaktifkannya.

## Pertimbangan Keamanan {#security-considerations}

- Plugin yang dihasilkan disimpan secara terpisah dari plugin yang diinstal secara manual dan tidak dapat diakses melalui layar manajemen plugin WordPress standar sampai Anda secara eksplisit menginstalnya di jaringan.
- Sandbox menggunakan validasi jalur (*path validation*) untuk mencegah *directory traversal* saat menulis file plugin.
- Plugin dengan panggilan fungsi berbahaya (misalnya, `eval`, `exec`, `system`) akan ditandai selama validasi dan tidak akan diaktifkan.
