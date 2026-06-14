---
title: Pencarian Internet
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Pencarian Internet

Gratis AI Agent v1.5.0 nambah kemampuan **Internet Search** sing ngidini asisten AI njupuk informasi anyar saka web nalika lagi ngobrol karo kowe. Iki diwujudake nganggo [Brave Search API](https://brave.com/search/api/) utawa [Tavily API](https://tavily.com/).

## Cara Kerjane

Nalika internet search diaktifake, asisten bisa otomatis nanya marang penyedia pencarian sing wis dikonfigurasi nalika dhewe ngerti yen sawijining pitakonan butuh informasi anyar utawa saka njaba — contone berita anyar, harga langsung (live pricing), utawa dokumentasi sing mungkin wis owah wiwit model kasebut dilatih.

Hasil bakal dijangkau wektu nyata lan dimasukkan menyang konteks asisten sadurunge dhewe nggawe balesan. Asisten bakal nuduhake kapan dhewe wis nggunakake hasil pencarian kanggo mangsuli pitakonan.

## Ngaktifake Internet Search

Internet search mbutuh kunci API saka penyedia pencarian sing dipilih. Kanggo ngatur iki:

1. Tindakake **Gratis AI Agent → Settings → Advanced**.
2. Temokake dropdown **Internet Search Provider** lan pilih salah siji, yaiku **Brave Search** utawa **Tavily**.
3. Masukkan kunci API-mu ing kolom sing pas. Tautan pendaftaran bakal ditampilake ing sisih saben kolom.
4. Klik **Save Settings**.

Sawise kunci wis disimpan, kemampuan Internet Search otomatis wis bisa diakses dening asisten.

## Brave Search

### Nggoleki Kunci API Brave Search

1. Tindakake [Brave Search API page](https://brave.com/search/api/).
2. Daftar kanggo paket. Ana tingkatan gratis sing duwe batas permintaan saben sasi.
3. Salin kunci API-mu saka developer dashboard Brave Search.
4. Tempelake ing kolom **Brave Search API Key** ing pengaturan Gratis AI Agent.

### Batasan Penggunaan

Penggunaan dihitung berdasarkan jumlah kueri yang dibuat oleh Brave Search. Setiap respons AI yang memicu pencarian akan dihitung sebagai satu kueri. Pantau penggunaan Anda di [dashboard pengembang Brave Search](https://brave.com/search/api/) untuk menghindari biaya tak terduga.

## Tavily

Superdav AI Agent v1.10.0 menambahkan **Tavily** sebagai penyedia pencarian internet alternatif, yang menawarkan hasil pencarian lebih kaya dan kemampuan riset yang lebih canggih.

### Mendapatkan Kunci API Tavily

1. Kunjungi [halaman API Tavily](https://tavily.com/).
2. Daftar untuk akun. Ada tingkatan gratis dengan batas permintaan bulanan.
3. Salin kunci API Anda dari dashboard Tavily.
4. Tempelkan ke kolom **Tavily API Key** di pengaturan Gratis AI Agent.

### Batas Penggunaan

Penggunaan dihitung berdasarkan jumlah panggilan API yang dibuat oleh Tavily. Setiap respons AI yang memicu pencarian akan dihitung sebagai satu panggilan. Pantau penggunaan Anda di [dashboard Tavily](https://tavily.com/) untuk menghindari biaya tak terduga.

## Menonaktifkan Pencarian Internet

Hapus kunci API dari kolom penyedia pencarian aktif dan simpan. Kemampuan Pencarian Internet tidak akan lagi ditawarkan kepada asisten.

:::note
Pencarian internet menambah waktu tunggu pada respons karena asisten harus menunggu hasil pencarian sebelum menghasilkan jawaban. Untuk kasus penggunaan yang sensitif terhadap waktu, pertimbangkan apakah pencarian *real-time* diperlukan atau apakah pengetahuan bawaan asisten sudah cukup.
:::
