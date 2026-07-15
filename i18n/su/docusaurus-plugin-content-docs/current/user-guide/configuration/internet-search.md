---
title: Pencarian Internet
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Pencarian Internet

Gratis AI Agent v1.5.0 nambahan kemampuan **Internet Search** anu ngidinan asisten AI pikeun nyokot inpormasi panganyar ti dunya (web) nalika keur ngobrol. Ieu dipasihan tenaga ku [Brave Search API](https://brave.com/search/api/) atawa [Tavily API](https://tavily.com/).

## Kumaha Cara Ngagunakeunana {#how-it-works}

Lamun pencarian internet diaktifkeun, asisten bisa otomatis nanya ka penyedia pencarian anu geus dikonfigurasi lamun anjeunna ngitung yén hiji patarosan butuh inpormasi anyar atawa ti luar (external) — conto berita anyar, harga *live*, atawa dokumentasi anu mungkin geus robah ti waktu pelatihan model.

Hasilna bakal dicokot sacara *real time* sarta diselipkeun ka konteks asisten saméméh anjeunna ngajawab patarosan. Asisten bakal nunjukkeun lamun anjeunna geus ngagunakeun hasil pencarian pikeun ngajawab hiji patarosan.

## Ngaktifkeun Internet Search {#enabling-internet-search}

Internet search butuh *API key* ti penyedia pencarian anu dipilih ku anjeun. Pikeun ngaturana:

1. Pergi ka **Gratis AI Agent → Settings → Advanced**.
2. Cari menu *dropdown* **Internet Search Provider** sarta pilih antara **Brave Search** atawa **Tavily**.
3. Masukkan *API key* anjeun dina kolom anu bersesuaian. Link pendaftaran bakal ditunjukeun di sisi unggal kolom.
4. Klik **Save Settings**.

Sakali kunci geus disimpen, kemampuan Internet Search otomatis bisa dipaké ku asisten.

## Brave Search {#brave-search}

### Ngahasilkeun Brave Search API Key {#obtaining-a-brave-search-api-key}

1. Kunjungi [Brave Search API page](https://brave.com/search/api/).
2. Daftar akun pikeun *plan*. Aya tingkatan gratis kalayan batasan permintaan per bulan.
3. Salin *API key* anjeun ti *developer dashboard* Brave Search.
4. Tempelkeun éta kana kolom **Brave Search API Key** dina pengaturan Gratis AI Agent.

### Batasan Panggunaan {#usage-limits}

Pemanfaatan dihitung berdasarkan jumlah kueri yang dibuat oleh Brave Search. Setiap respons AI yang memicu pencarian dihitung sebagai satu kueri. Pantau penggunaan Anda di [dashboard developer Brave Search](https://brave.com/search/api/) untuk menghindari biaya tak terduga.

## Tavily {#tavily}

Superdav AI Agent v1.10.0 menambahkan **Tavily** sebagai penyedia pencarian internet alternatif, yang menawarkan hasil pencarian lebih kaya dan kemampuan riset yang canggih.

### Mendapatkan Kunci API Tavily {#obtaining-a-tavily-api-key}

1. Kunjungi [halaman API Tavily](https://tavily.com/).
2. Daftar untuk akun. Ada tingkatan gratis dengan batas permintaan bulanan.
3. Salin kunci API Anda dari dashboard Tavily.
4. Tempelkan ke kolom **Tavily API Key** di pengaturan Gratis AI Agent.

### Batas Penggunaan {#usage-limits-1}

Penggunaan dihitung berdasarkan jumlah panggilan API yang dibuat oleh Tavily. Setiap respons AI yang memicu pencarian dihitung sebagai satu panggilan. Pantau penggunaan Anda di [dashboard Tavily](https://tavily.com/) untuk menghindari biaya tak terduga.

## Menonaktifkan Pencarian Internet {#disabling-internet-search}

Hapus kunci API dari kolom penyedia pencarian aktif dan simpan. Kemampuan Pencarian Internet tidak akan lagi ditawarkan kepada asisten.

:::note
Pencarian internet menambah waktu tunggu (latency) pada respons karena asisten harus menunggu hasil pencarian sebelum menghasilkan jawaban. Untuk kasus penggunaan yang sensitif terhadap waktu, pertimbangkan apakah pencarian *real-time* diperlukan atau apakah pengetahuan bawaan asisten sudah cukup.
:::
