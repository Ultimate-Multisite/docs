---
title: Menurunkan Taraf Pelan
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Menurunkan taraf pelan (v2) {#downgrading-a-plan-v2}

_**NOTA PENTING: Artikel ini merujuk kepada Ultimate Multisite versi 2.x.**_

Menurunkan taraf pelan atau langganan ialah tindakan biasa yang mungkin dilakukan oleh klien anda jika mereka mempunyai bajet terhad atau mereka memutuskan bahawa mereka tidak memerlukan banyak sumber untuk menjalankan subsite mereka.

## Cara menurunkan taraf pelan {#how-to-downgrade-a-plan}

Klien anda boleh menurunkan taraf pelan mereka pada bila-bila masa dengan log masuk ke dashboard pentadbir subsite mereka dan mengklik **Change** di bawah halaman Account mereka.

![Halaman Account pelanggan dengan kad Your Membership dan butang Change](/img/account-page/membership-change-button.png)

Apabila mengklik butang **Change**, pengguna/klien akan dialihkan ke halaman checkout di mana mereka boleh memilih pelan yang mereka mahu tukarkan langganan mereka kepadanya.

![Halaman pilihan turun taraf pelan di pihak pelanggan](/img/account-page/downgrade-picker.png)

Dalam contoh ini, kami sedang menurunkan taraf pelan daripada **Premium** kepada **Free**.

Untuk meneruskan, pengguna hanya perlu mengklik butang **Complete Checkout**. Ia kemudian akan membawa mereka kembali ke halaman Account yang memaparkan mesej tentang perubahan tertunda untuk keahlian tersebut. Perubahan akan berkuat kuasa pada **kitaran bil seterusnya** pelanggan.

![Halaman Account yang menunjukkan sepanduk perubahan keahlian tertunda](/img/account-page/pending-change.png)

### Apa yang berlaku apabila pengguna menurunkan taraf pelan mereka {#what-happens-when-a-user-downgrades-their-plan}

Penting untuk diingat bahawa menurunkan taraf pelan tidak mengubah konfigurasi sedia ada dalam subsite pengguna.

Ia tidak menukar templat laman secara automatik kerana menukar templat laman akan memadam dan menetapkan semula subsite sepenuhnya. Ini adalah untuk mengelakkan kehilangan data yang tidak perlu. Jadi ruang cakera, tema, plugin dan sebagainya akan kekal utuh kecuali untuk siaran.

Kami faham bahawa kebimbangan utama anda ialah had dan kuota yang anda tetapkan di bawah setiap pelan, tetapi kami perlu mempertimbangkan kerosakan yang mungkin berlaku pada subsite pengguna sekiranya kami memadam atau mengubah mana-mana konfigurasinya.

Untuk siaran yang melebihi had yang ditetapkan pada pelan, anda mempunyai 3 pilihan berbeza: **Keep the posts as it** *,* **Move the posts to trash** *,* atau **Move the posts to draft** *.* Anda boleh mengkonfigurasi ini di bawah tetapan Ultimate Multisite.

![Halaman Network Admin Settings Sites yang menunjukkan pilihan tingkah laku post-limit-exceeded](/img/account-page/settings-sites-post-limit.png)

### Apa yang berlaku kepada pembayaran {#what-happens-to-the-payment}

Dalam versi 2.0, ia tidak lagi memerlukan sebarang pelarasan pada pembayaran dari segi prorata.

Ini kerana sistem akan menunggu keahlian sedia ada untuk **melengkapkan kitaran bilnya sebelum** pelan/keahlian baharu berkuat kuasa. Jumlah bil baharu untuk keahlian baharu akan digunakan secara automatik dan dicaj pada kitaran bil seterusnya.
