---
title: Pencarian Internet
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Pencarian Internet

Gratis AI Agent v1.5.0 menambahkan kemampuan **Pencarian Internet** yang memungkinkan asisten AI mengambil informasi terkini dari web selama percakapan. Fitur ini didukung oleh [Brave Search API](https://brave.com/search/api/) atau [Tavily API](https://tavily.com/).

## Cara Kerjanya {#how-it-works}

Ketika pencarian internet diaktifkan, asisten dapat secara otomatis mengakses penyedia pencarian yang telah Anda konfigurasikan ketika ia menentukan bahwa sebuah pertanyaan memerlukan informasi terkini atau eksternal — misalnya, berita terbaru, harga langsung, atau dokumentasi yang mungkin telah berubah sejak batas waktu pelatihan model.

Hasilnya diambil secara *real time* dan dimasukkan ke dalam konteks asisten sebelum ia menghasilkan respons. Asisten akan menunjukkan kapan ia telah menggunakan hasil pencarian untuk menjawab suatu pertanyaan.

## Mengaktifkan Pencarian Internet {#enabling-internet-search}

Pencarian internet memerlukan *API key* dari penyedia pencarian pilihan Anda. Untuk mengkonfigurasikannya:

1. Pergi ke **Gratis AI Agent → Settings → Advanced**.
2. Temukan *dropdown* **Internet Search Provider** dan pilih **Brave Search** atau **Tavily**.
3. Masukkan *API key* Anda di kolom yang sesuai. Tautan pendaftaran ditampilkan di sebelah setiap kolom.
4. Klik **Save Settings**.

Setelah kunci disimpan, kemampuan Pencarian Internet akan otomatis tersedia untuk asisten.

## Brave Search {#brave-search}

### Mendapatkan API Key Brave Search {#obtaining-a-brave-search-api-key}

1. Kunjungi [Brave Search API page](https://brave.com/search/api/).
2. Daftar untuk sebuah *plan*. Tingkat gratis tersedia dengan batas permintaan bulanan.
3. Salin *API key* Anda dari *dashboard* pengembang Brave Search.
4. Tempelkan ke kolom **Brave Search API Key** di pengaturan Gratis AI Agent.

### Batasan Penggunaan {#usage-limits}

Penggunaan ditagih oleh Brave Search berdasarkan jumlah *query* yang dibuat. Setiap respons AI yang memicu pencarian dihitung sebagai satu *query*. Pantau penggunaan Anda di [Brave Search developer dashboard](https://brave.com/search/api/) untuk menghindari biaya tak terduga.

## Tavily {#tavily}

Superdav AI Agent v1.10.0 menambahkan **Tavily** sebagai penyedia pencarian internet alternatif, menawarkan hasil pencarian yang lebih kaya dan kemampuan riset tingkat lanjut.

### Mendapatkan API Key Tavily {#obtaining-a-tavily-api-key}

1. Kunjungi [Tavily API page](https://tavily.com/).
2. Daftar untuk sebuah akun. Tingkat gratis tersedia dengan batas permintaan bulanan.
3. Salin *API key* Anda dari *dashboard* Tavily.
4. Tempelkan ke kolom **Tavily API Key** di pengaturan Gratis AI Agent.

### Batasan Penggunaan {#usage-limits-1}

Penggunaan ditagih oleh Tavily berdasarkan jumlah panggilan API yang dibuat. Setiap respons AI yang memicu pencarian dihitung sebagai satu panggilan. Pantau penggunaan Anda di [Tavily dashboard](https://tavily.com/) untuk menghindari biaya tak terduga.

## Menonaktifkan Pencarian Internet {#disabling-internet-search}

Hapus *API key* dari kolom penyedia pencarian aktif dan simpan. Kemampuan Pencarian Internet tidak akan lagi ditawarkan kepada asisten.

:::note
Pencarian internet menambah latensi pada respons karena asisten harus menunggu hasil pencarian sebelum menghasilkan jawaban. Untuk kasus penggunaan yang sensitif terhadap waktu, pertimbangkan apakah pencarian *real-time* diperlukan atau apakah pengetahuan bawaan asisten sudah cukup.
:::
