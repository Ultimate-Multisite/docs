---
title: Pembina & Kotak Pasir Plugin
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Pembina Plugin & Sandbox {#plugin-builder--sandbox}

Gratis AI Agent v1.5.0 memperkenalkan **Sistem Pembina Plugin & Sandbox**, yang membolehkan pembantu AI menjana, mengaktifkan, dan mengurus plugin WordPress pada jaringan anda — semuanya melalui persekitaran sandbox yang selamat dan terasing.

## Gambaran Keseluruhan {#overview}

Pembina Plugin membolehkan pembantu AI menulis plugin WordPress tersuai sebagai tindak balas kepada permintaan bahasa semula jadi. Plugin yang dijana akan disahkan, disimpan, dan diaktifkan di dalam lapisan sandbox sebelum ia memberi kesan kepada fungsi tapak web sebenar.

Penggunaan kes termasuk:

- Menjana plugin utiliti ringan tanpa penglibatan pembangun.
- Membuat prototaip ciri yang memerlukan *hook* WordPress atau jenis pos tersuai (*custom post types*).
- Mencipta skrip automasi jangka pendek untuk operasi kelompok (*batch operations*).

## Menjana Plugin melalui AI {#generating-a-plugin-via-ai}

Untuk menjana plugin, buka antara muka sembang Gratis AI Agent dan terangkan apa yang anda perlukan. Contohnya:

> "Cipta plugin yang menambah notis admin tersuai pada dashboard."

AI akan:

1. Menghasilkan kod PHP plugin menggunakan penjanaan kod berstruktur.
2. Menyahkan output untuk ralat sintaks dan corak yang tidak selamat.
3. Menyimpan plugin yang dijana ke dalam stor sandbox.
4. Mengembalikan pengesahan dengan *slug* plugin dan butang **Activate in Sandbox**.

Anda boleh memperhalusi hasilnya dengan bertanya semula dalam utas perbualan yang sama sebelum mengaktifkannya.

## Pengaktifan Sandbox {#sandbox-activation}

Mengaktifkan plugin yang dijana dalam sandbox adalah berbeza daripada mengaktifkannya pada jaringan sebenar. Sandbox:

- Menjalankan plugin dalam persekitaran WordPress yang terasing (*wp-env*).
- Menangkap sebarang ralat PHP, amaran, atau konflik *hook*.
- Melaporkan hasil pengaktifan kembali dalam antara muka sembang.

Untuk mengaktifkan plugin dalam sandbox, klik butang **Activate in Sandbox** dalam respons sembang AI, atau gunakan arahan garis condong (*slash command*):

```
/activate-plugin <plugin-slug>
```

Mesej status akan mengesahkan sama ada pengaktifan berjaya atau gagal. Jika gagal, log ralat akan dipaparkan dalam utas sembang.

## Mengurus Plugin yang Dijana {#managing-generated-plugins}

Plugin yang dijana disenaraikan di **Gratis AI Agent → Plugin Builder → Manage Plugins**. Dari skrin ini anda boleh:

| Tindakan | Penerangan |
|---|---|
| **View source** | Semak kod PHP plugin sepenuhnya. |
| **Re-activate in sandbox** | Jalankan semula semakan pengaktifan sandbox. |
| **Install on network** | Menggunakan plugin ke jaringan sebenar (memerlukan pengesahan manual). |
| **Update** | Sediakan versi baharu melalui AI, menggantikan kod sedia ada. |
| **Delete** | Membuang plugin dari stor sandbox. Ia akan dinyahaktifkan dari semua tapak terlebih dahulu. |

:::warning
**Install on network** akan menggunakan plugin yang dijana ke jaringan WordPress multisite anda yang sebenar. Semak kod plugin sebelum meneruskan. Gratis AI Agent akan meminta pengesahan sebelum melengkapkan pemasangan langsung.
:::

## Memasang Plugin yang Dijana pada Jaringan {#installing-a-generated-plugin-on-the-network}

Apabila anda berpuas hati dengan plugin yang berada dalam sandbox, anda boleh memasangnya pada jaringan sebenar:

1. Pergi ke **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Klik **Install on Network** di sebelah plugin yang ingin anda gunakan.
3. Sahkan dialog. Plugin dipasang ke `wp-content/plugins/` dan diaktifkan pada peringkat jaringan.

Atau, gunakan arahan garis condong dalam antara muka sembang:

```
/install-plugin <plugin-slug>
```

## Kemas Kini Plugin {#plugin-updates}

Untuk mengemas kini plugin yang dijana, terangkan perubahan itu kepada pembantu AI dalam perbualan baharu:

> "Kemas kini plugin dashboard-notice supaya notis itu hanya dipaparkan kepada pentadbir."

AI akan menjana versi baharu, yang akan muncul dalam sandbox bersama versi semasa. Anda menyemak perbezaan (*diff*) dan mengesahkan sebelum kemas kini itu digunakan.

## Integrasi HookScanner {#hookscanner-integration}

Pembina Plugin menggunakan **HookScanner** bersepadu untuk menganalisis *hook* dan *filter* yang didaftarkan oleh setiap plugin yang dijana. Output HookScanner ditunjukkan dalam respons sembang dan merangkumi:

- *Action hooks* yang didaftarkan (`add_action` panggilan).
- *Filter hooks* yang didaftarkan (`add_filter` panggilan).
- Sebarang *hook* yang ditemui dalam kebergantungan plugin (melangkau direktori `vendor/` dan `node_modules/`).

Ini membantu anda memahami tingkah laku plugin sebelum mengaktifkannya.

## Pertimbangan Keselamatan {#security-considerations}

- Plugin yang dijana disimpan secara berasingan daripada plugin yang dipasang secara manual dan tidak boleh diakses melalui skrin pengurusan plugin WordPress standard sehingga anda memasangnya secara eksplisit pada jaringan.
- Sandbox menggunakan pengesahan laluan (*path validation*) untuk menghalang penjelajahan direktori apabila menulis fail plugin.
- Plugin dengan panggilan fungsi berbahaya (cth., `eval`, `exec`, `system`) akan ditandakan semasa pengesahan dan tidak akan diaktifkan.
