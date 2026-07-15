---
title: Carian Internet
sidebar_position: 26
_i18n_hash: e0c88931760a1b490767e39aad86c70f
---
# Carian Internet

Gratis AI Agent v1.5.0 menambah keupayaan **Carian Internet** yang membolehkan pembantu AI mendapatkan maklumat terkini dari web semasa perbualan. Ini dikuasakan oleh [Brave Search API](https://brave.com/search/api/) atau [Tavily API](https://tavily.com/).

## Cara Ia Berfungsi {#how-it-works}

Apabila carian internet diaktifkan, pembantu boleh secara automatik membuat pertanyaan kepada penyedia carian yang telah anda konfigurasikan apabila ia menentukan bahawa sesuatu soalan memerlukan maklumat semasa atau luaran — contohnya, berita terkini, harga langsung, atau dokumentasi yang mungkin telah berubah sejak tarikh potong latihan model.

Keputusan diperoleh dalam masa nyata dan dimasukkan ke dalam konteks pembantu sebelum ia menjana respons. Pembantu akan menunjukkan apabila ia telah menggunakan hasil carian untuk menjawab soalan.

## Mengaktifkan Carian Internet {#enabling-internet-search}

Carian internet memerlukan kunci API daripada penyedia carian pilihan anda. Untuk mengkonfigurasikannya:

1. Pergi ke **Gratis AI Agent → Settings → Advanced**.
2. Cari menu lungsur **Internet Search Provider** dan pilih sama ada **Brave Search** atau **Tavily**.
3. Masukkan kunci API anda dalam medan yang sepadan. Pautan pendaftaran dipaparkan di sebelah setiap medan.
4. Klik **Save Settings**.

Setelah kunci disimpan, keupayaan Carian Internet akan tersedia secara automatik untuk pembantu.

## Brave Search {#brave-search}

### Mendapatkan Kunci API Brave Search {#obtaining-a-brave-search-api-key}

1. Lawati [Brave Search API page](https://brave.com/search/api/).
2. Daftar untuk pelan. Tahap percuma tersedia dengan had permintaan bulanan.
3. Salin kunci API anda daripada papan pemuka pembangun Brave Search.
4. Tampalnya ke dalam medan **Brave Search API Key** dalam tetapan Gratis AI Agent.

### Had Penggunaan {#usage-limits}

Penggunaan dikenakan caj oleh Brave Search berdasarkan bilangan pertanyaan yang dibuat. Setiap respons AI yang mencetuskan carian dikira sebagai satu pertanyaan. Pantau penggunaan anda dalam [Brave Search developer dashboard](https://brave.com/search/api/) untuk mengelakkan caj yang tidak dijangka.

## Tavily {#tavily}

Superdav AI Agent v1.10.0 menambah **Tavily** sebagai penyedia carian internet alternatif, menawarkan hasil carian yang lebih kaya dan keupayaan penyelidikan lanjutan.

### Mendapatkan Kunci API Tavily {#obtaining-a-tavily-api-key}

1. Lawati [Tavily API page](https://tavily.com/).
2. Daftar untuk akaun. Tahap percuma tersedia dengan had permintaan bulanan.
3. Salin kunci API anda daripada papan pemuka Tavily.
4. Tampalnya ke dalam medan **Tavily API Key** dalam tetapan Gratis AI Agent.

### Had Penggunaan {#usage-limits-1}

Penggunaan dikenakan caj oleh Tavily berdasarkan bilangan panggilan API yang dibuat. Setiap respons AI yang mencetuskan carian dikira sebagai satu panggilan. Pantau penggunaan anda dalam [Tavily dashboard](https://tavily.com/) untuk mengelakkan caj yang tidak dijangka.

## Melumpuhkan Carian Internet {#disabling-internet-search}

Keluarkan kunci API daripada medan penyedia carian aktif dan simpan. Keupayaan Carian Internet tidak akan ditawarkan kepada pembantu lagi.

:::note
Carian internet menambah kelewatan pada respons kerana pembantu mesti menunggu hasil carian sebelum menjana jawapan. Untuk kes penggunaan yang sensitif masa, pertimbangkan sama ada carian masa nyata diperlukan atau sama ada pengetahuan terbina dalam pembantu sudah mencukupi.
:::
