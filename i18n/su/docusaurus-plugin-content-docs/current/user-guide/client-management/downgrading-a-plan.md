---
title: Ngabagi Rencana
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Ngubah Rencana (v2)

_**CATATAN PENTING: Artikel ini merujuk pada Ultimate Multisite versi 2.x.**_

Ngubah rencana atau langganan itu hal biasa yang bisa dilakukan klien Anda kalau mereka punya anggaran terbatas atau memutuskan bahwa mereka tidak butuh banyak sumber daya untuk menjalankan subsite mereka.

## Cara ngubah rencana

Klien Anda bisa mengubah rencana kapan saja dengan *login* ke *admin dashboard* subsite mereka dan mengklik **Change** di bawah halaman akun mereka.

![Halaman akun pelanggan dengan Kartu Keanggotaan Anda dan tombol Change](/img/account-page/membership-change-button.png)

Setelah menekan tombol **Change**, pengguna/klien akan diarahkan ke halaman *checkout* tempat mereka bisa memilih rencana yang ingin diubah untuk langganannya.

![Halaman pilihan opsi downgrade rencana di sisi pelanggan](/img/account-page/downgrade-picker.png)

Dalam contoh ini, kita sedang menurunkan rencana dari **Premium** menjadi **Free**.

Untuk melanjutkan, pengguna hanya perlu mengklik tombol **Complete Checkout**. Setelah itu, mereka akan kembali ke halaman akun yang menampilkan pesan tentang perubahan yang tertunda untuk keanggotaan tersebut. Perubahan akan berlaku pada **siklus penagihan berikutnya** pelanggan.

![Halaman akun yang menunjukkan banner perubahan keanggotaan yang tertunda](/img/account-page/pending-change.png)

### Apa yang terjadi ketika pengguna menurunkan rencana mereka

Penting untuk diingat bahwa menurunkan rencana tidak mengubah konfigurasi yang sudah ada di subsite pengguna.

Ini tidak akan secara otomatis mengubah *site template* karena mengubah *site template* akan menghapus dan mengatur ulang seluruh subsite. Ini dilakukan untuk menghindari kehilangan data yang tidak perlu. Jadi, ruang disk, tema, plugin, dll akan tetap utuh kecuali postingan.

Kami ngarti yén perhatian utama anjeun nyaéta batasan je quota anu ditetepkeun dina unggal rencana, tapi urang kudu mikir dampakna ka subsite nu bisa kajadian lamun urang ngapus atawa ngarobah konfigurasiana.

Mun postingan leuwih ti batas anu ditetepkeun dina rencana, anjeun miboga 3 pilihan: **Ngajaga postingan saperti kieu** *,* **Ngirim postingan ka tempat sampah (trash)** *,* atawa **Ngirim postingan ka draf (draft)** *. Anjeun bisa ngatur éta di bawah pengaturan Ultimate Multisite.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### Naon kajadianna jeung pembayaran

Dina versi 2.0, teu perlu deui ngarobah hal naon dina pembayaran patalihan (proration).

Ieu sabab sistem bakal ngantosan keanggotaan anu geus aya **ngahampura siklus tagihanana saméméh** rencana/keanggotaan anyar jadi berlakuan. Jumlah tagihan anyar pikeun keanggotaan anyar bakal otomatis dipaké jeung ditagih dina siklus tagihan salajengna.
