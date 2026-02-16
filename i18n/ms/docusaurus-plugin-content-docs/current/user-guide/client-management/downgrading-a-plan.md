---
title: Menurunkan Taraf Pelan
sidebar_position: 7
_i18n_hash: dc3ac67048002b04bfb952a01cf289c9
---
# Menurunkan taraf pelan (v2)

_**NOTA PENTING: Artikel ini merujuk kepada Ultimate Multisite versi 2.x.**_

Menurunkan taraf pelan atau langganan adalah tindakan biasa yang mungkin dilakukan oleh pelanggan anda jika mereka mempunyai bajet terhad atau telah memutuskan bahawa mereka tidak memerlukan banyak sumber untuk menjalankan subsite mereka.

## Cara menurunkan taraf pelan

Pelanggan anda boleh menurunkan taraf pelan mereka pada bila-bila masa dengan log masuk ke dashboard admin subsite mereka dan klik **Change** di bawah halaman akaun mereka.

![Halaman akaun dengan butang Change di bawah keahlian](/img/admin/memberships-list.png)

Selepas mengklik butang **Change**, pengguna/pelanggan akan dibawa ke halaman checkout di mana mereka boleh memilih pelan yang ingin mereka tukar untuk langganan mereka.

![Halaman checkout menunjukkan pilihan pelan untuk penurunan taraf](/img/admin/memberships-list.png)

Dalam contoh ini, kami menurunkan taraf pelan daripada **Premium** kepada **Free**.

Untuk meneruskan, pengguna hanya perlu klik butang **Complete Checkout**. Mereka kemudian akan dibawa kembali ke halaman akaun yang menunjukkan mesej tentang perubahan yang belum berkuat kuasa untuk keahlian tersebut. Perubahan akan berkuat kuasa pada **kitaran bil seterusnya** pelanggan.

![Halaman akaun menunjukkan mesej perubahan keahlian yang belum berkuat kuasa](/img/admin/memberships-list.png)

### Apa yang berlaku apabila pengguna menurunkan taraf pelan mereka

Penting untuk diambil perhatian bahawa menurunkan taraf pelan tidak mengubah konfigurasi sedia ada dalam subsite pengguna.

Ia tidak menukar template laman secara automatik kerana menukar template laman akan memadam dan menetapkan semula subsite sepenuhnya. Ini adalah untuk mengelakkan kehilangan data yang tidak perlu. Jadi ruang cakera, tema, plugin dan sebagainya akan kekal utuh kecuali untuk pos.

Kami faham bahawa kebimbangan utama anda adalah had dan kuota yang anda tetapkan di bawah setiap pelan tetapi kami perlu mempertimbangkan kerosakan yang akan berlaku kepada subsite pengguna sekiranya kami memadam atau mengubah mana-mana konfigurasinya.

Untuk pos yang melebihi had yang ditetapkan pada pelan, anda mempunyai 3 pilihan berbeza: **Keep the posts as it** *,* **Move the posts to trash** *,* atau **Move the posts to draft** *.* Anda boleh mengkonfigurasi ini di bawah tetapan Ultimate Multisite.

![Pilihan had pos melebihi dalam tetapan Ultimate Multisite](/img/config/settings-sites.png)

### Apa yang berlaku kepada pembayaran

Dalam versi 2.0, ia tidak lagi memerlukan sebarang pelarasan pada pembayaran dari segi proration.

Ini kerana sistem akan menunggu keahlian sedia ada untuk **melengkapkan kitaran bilnya sebelum** pelan/keahlian baharu berkuat kuasa. Jumlah bil baharu untuk keahlian baharu akan digunakan dan dicaj secara automatik pada kitaran bil seterusnya.
