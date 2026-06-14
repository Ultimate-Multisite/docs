---
title: Ngranggepake Paket
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Turunkan paket (v2)

_**CATATAN PENTING: Artikel iki merujuk pada Ultimate Multisite versi 2.x.**_

Turunkan paket atau langganan iku tindakan sing lumrah ditindakake dening klienmu yen duwe anggaran terbatas utawa wis mutusake yen ora butuh akeh sumber daya kanggo ngoperasik subsite-e.

## Cara menurunkan paket

Klienmu bisa ngrusak (downgrade) paket kapan wae kanthi mlebu akun admin subsite-e lan klik **Change** ing bawah halaman akuné.

![Halaman akun pelanggan karo Kartu Keanggotaan Sampeyan lan tombol Change](/img/account-page/membership-change-button.png)

Sawise klik tombol **Change**, user/klien bakal diarahkan menyang halaman checkout sing bisa milih paket sing arep diowahi langganane.

![Halaman pilihan opsi downgrade paket ing sisi pelanggan](/img/account-page/downgrade-picker.png)

Ing conto iki, kita lagi ngrusak paket saka **Premium** dadi **Free**.

Kanggo lanjut, user mung perlu klik tombol **Complete Checkout**. Banjur bakal diarahkan maneh menyang halaman akun sing nuduh pesan babagan perubahan sing arep ditindakake kanggo keanggotaan. Perubahan iku bakal efektif ing **siklus penagihan sabanjure** saka pelanggan.

![Halaman akun sing nuduh banner perubahan keanggotaan tertunda](/img/account-page/pending-change.png)

### Apa sing kedadeyan nalika user ngrusak paketé

Penting kanggo dicatat yen ngrusak paket ora ngowahi konfigurasi sing wis ana ing subsite user.

Iku ora otomatis ngowahi template situs amarga ngowahi template situs bakal ngapus lan ngatur ulang subsite kabeh. Iki supaya ora ana ilang data sing ora perlu. Dadi, ruang disk, tema, plugin lsp bakal tetep utuh kajaba postingan-postingan.

Kami ngerti kalau kekhawatiran utama sampeyan ya babagan batasan dan kuota sing diatur ing saben paket, nanging kita kudu mikir dampak apa sing bakal ditimbul marang subsite pengguna yen kita ngapus utawa ngowahi konfigurasi-konfigurasi kasebut.

Kanggo postingan sing luwih akeh tinimbang batas sing diatur ing paket, sampeyan duwe 3 pilihan: **Nggolek postingan kaya saiki** *,* **Pindah postingan menyang sampah (trash)** *,* utawa **Pindah postingan menyang draf (draft)** *.* Sampeyan bisa ngatur iki ing pengaturan Ultimate Multisite.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### Apa sing kedadeyan karo pembayaran

Ing versi 2.0, ora perlu maneh diatur babagan proration (penyesuaian tarif) ing pembayaran.

Iki amarga sistem bakal nunggu keanggotaan sing wis ana **rampung siklus penagihané sadurunge** paket/keanggotaan anyar mulai efektif. Jumlah tagihan anyar kanggo keanggotaan anyar bakal otomatis diterapkan lan ditagih ing siklus penagihan sabanjure.
