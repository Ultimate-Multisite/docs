---
title: Menerima Bayaran
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Menerima Bayaran (v2)

_**NOTA PENTING: Artikel ini merujuk kepada Ultimate Multisite versi 2.x.**_

Ultimate Multisite mempunyai sistem keahlian dan pengebilan terbina dalam. Untuk sistem pengebilan kami berfungsi, kami telah mengintegrasikan gateway pembayaran yang paling biasa digunakan dalam e-dagang. Gateway pembayaran lalai dalam Ultimate Multisite ialah _Stripe_ , _PayPal_ , dan Pembayaran Manual. Anda juga boleh menggunakan _WooCommerce_ , _GoCardless_ dan _Payfast_ untuk menerima bayaran dengan memasang add-on masing-masing.

## Tetapan Asas

Anda boleh mengkonfigurasi mana-mana gateway pembayaran ini di bawah tetapan pembayaran Ultimate Multisite. Anda boleh menemuinya dengan pergi ke **menu Ultimate Multisite > Tetapan > Pembayaran.**

![Halaman tetapan Pembayaran dalam Ultimate Multisite yang menunjukkan panel Pembayaran](/img/config/payments-settings-page.png)

Sebelum anda menyediakan gateway pembayaran anda, sila lihat tetapan pembayaran asas yang boleh anda konfigurasi:

**Paksa pembaharuan auto** **matik:** Ini akan memastikan bahawa pembayaran akan berulang secara automatik pada akhir setiap kitaran pengebilan bergantung pada kekerapan pengebilan yang dipilih oleh pengguna.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 menyemak sama ada gateway aktif mempunyai kelayakan pembaharuan boleh guna semula sebelum menyimpan keahlian berulang dengan pembaharuan automatik diaktifkan. Kelayakan pembaharuan boleh berupa langganan gateway, perjanjian pengebilan, token vault yang disimpan, atau kaedah pembayaran boleh guna semula yang setara. Jika gateway melaporkan bahawa tiada kelayakan boleh guna wujud, Ultimate Multisite menyimpan keahlian tetapi mematikan pembaharuan automatik dan merekodkan keadaan kelayakan hilang supaya pentadbir atau aliran sokongan boleh meminta pelanggan untuk memberi kebenaran semula pembayaran sebelum tarikh pembaharuan.

Ini menghalang keahlian daripada kelihatan seperti akan diperbaharui secara automatik apabila gateway hanya boleh mengutip pembayaran sekali sahaja. Add-on gateway harus mengesahkan bahawa checkout berulang menyimpan kelayakan boleh guna semula, terutamanya apabila gateway menyokong kedua-dua mod pembayaran tangkapan sekali sahaja dan vaulted/langganan.

**Benarkan percubaan tanpa kaedah pembayaran** **:** Dengan pilihan ini diaktifkan, pelanggan anda tidak perlu menambah sebarang maklumat kewangan semasa proses pendaftaran. Ini hanya akan diperlukan setelah tempoh percubaan tamat.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Hantar invois semasa pengesahan pembayaran:** Ini memberi anda pilihan sama ada untuk menghantar invois selepas pembayaran atau tidak. Perhatikan bahawa pengguna akan mempunyai akses kepada sejarah pembayaran mereka di bawah dashboard subsite mereka. Pilihan ini tidak terpakai kepada Gateway Manual.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Skim penomboran invois:** Di sini, anda boleh memilih sama ada kod rujukan pembayaran atau skim nombor berjujukan. Jika anda memilih untuk menggunakan kod rujukan pembayaran untuk invois anda, anda tidak perlu mengkonfigurasi apa-apa. Jika anda memilih untuk menggunakan skim nombor berjujukan, anda perlu mengkonfigurasi **nombor invois seterusnya** (Nombor ini akan digunakan sebagai nombor invois untuk invois seterusnya yang dijana pada sistem. Ia ditambah satu setiap kali invois baharu dicipta. Anda boleh mengubahnya dan menyimpannya untuk menetapkan semula nombor berjujukan invois kepada nilai tertentu) dan **awalan nombor invois.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Di mana mencari gateway:

Anda boleh menyediakan gateway pembayaran pada halaman yang sama ( **Ultimate Multisite > Tetapan > Pembayaran**). Tepat di bawah **gateway pembayaran aktif** , anda akan dapat melihat: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ dan _Manual_.

![Bahagian Gateway Pembayaran Aktif yang menyenaraikan Stripe, Stripe Checkout, PayPal dan Manual](/img/config/payments-active-gateways.png)

Kami mempunyai artikel khusus untuk setiap gateway pembayaran yang akan membimbing anda melalui langkah-langkah menyediakannya, yang boleh anda temui pada pautan di bawah.

Anda boleh melihat dan mengedit butiran pembayaran:

![Antara muka edit pembayaran](/img/admin/payment-edit.png)

Berikut ialah paparan penuh halaman edit pembayaran:

![Antara muka penuh edit pembayaran](/img/admin/payment-edit-full.png)

Berikut juga paparan penuh tetapan gateway pembayaran:

![Halaman penuh tetapan gateway pembayaran](/img/config/settings-payments-gateways-full.png)

**Menyediakan gateway Stripe**

**Menyediakan gateway PayPal**** **

**Menyediakan pembayaran manual**

Sekarang, jika anda mahu menggunakan _WooCommerce_ , _GoCardless_ atau _Payfast_ sebagai gateway pembayaran anda, anda perlu **memasang dan mengkonfigurasi add-on mereka**.

### Cara memasang add-on WooCommerce:

Kami faham bahawa _Stripe_ dan _PayPal_ tidak tersedia di sesetengah negara, yang mengehadkan atau menghalang pengguna Ultimate Multisite daripada menggunakan plugin kami dengan berkesan. Jadi kami mencipta add-on untuk mengintegrasikan _WooCommerce,_ iaitu plugin e-dagang yang sangat popular. Pembangun di seluruh dunia mencipta add-on untuk mengintegrasikan gateway pembayaran yang berbeza kepadanya. Kami memanfaatkan perkara ini untuk memperluas gateway pembayaran yang boleh anda gunakan dengan sistem pengebilan Ultimate Multisite.

_**PENTING:** Ultimate Multisite: WooCommerce Integration memerlukan WooCommerce diaktifkan sekurang-kurangnya pada site utama anda._

Pertama, sila pergi ke halaman add-on. Anda boleh menemuinya dengan pergi ke **Ultimate Multisite > Tetapan**. Anda sepatutnya melihat jadual **Add-on**. Klik pada **Semak Add-on kami**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Selepas mengklik pada **Semak Add-on kami** , anda akan diarahkan semula ke halaman add-on. Di sini anda boleh menemui semua add-on Ultimate Multisite. Klik pada add-on **Ultimate Multisite: WooCommerce Integration**.

![Halaman add-on yang menyenaraikan add-on Ultimate Multisite termasuk WooCommerce Integration](/img/addons/addons-page.png)

Tetingkap akan muncul dengan butiran tambahan. Hanya klik pada **Pasang Sekarang**.

<!-- Tangkapan skrin tidak tersedia: dialog butiran tambahan Ultimate Multisite WooCommerce Integration dengan butang Pasang Sekarang -->

Selepas pemasangan selesai, anda akan dialihkan ke halaman pemalam. Di sini, hanya klik pada **Aktifkan Rangkaian** dan tambahan WooCommerce akan diaktifkan pada rangkaian anda.

<!-- Tangkapan skrin tidak tersedia: Halaman pemalam dengan pautan Aktifkan Rangkaian untuk tambahan WooCommerce Integration -->

Selepas mengaktifkannya, jika anda masih belum memasang dan mengaktifkan pemalam WooCommerce pada laman web anda, anda akan menerima peringatan.

<!-- Tangkapan skrin tidak tersedia: Notis pentadbir yang mengingatkan pentadbir untuk memasang dan mengaktifkan pemalam WooCommerce -->

Untuk membaca lebih lanjut tentang tambahan WooCommerce Integration, **klik di sini**.

### Cara memasang tambahan GoCardless:

Langkah-langkah untuk memasang tambahan _GoCardless_ hampir sama seperti tambahan _WooCommerce_. Sila pergi ke halaman tambahan dan pilih tambahan **Ultimate Multisite: GoCardless Gateway**.

<!-- Tangkapan skrin tidak tersedia: Halaman tambahan dengan tambahan Ultimate Multisite GoCardless Gateway diserlahkan -->

Tetingkap tambahan akan muncul. Klik pada **Pasang Sekarang**.

<!-- Tangkapan skrin tidak tersedia: dialog butiran tambahan Ultimate Multisite GoCardless Gateway dengan butang Pasang Sekarang -->

Selepas pemasangan selesai, anda akan dialihkan ke halaman pemalam. Di sini, hanya klik pada **Aktifkan Rangkaian** dan tambahan _GoCardless_ akan diaktifkan pada rangkaian anda.

<!-- Tangkapan skrin tidak tersedia: Halaman pemalam dengan pautan Aktifkan Rangkaian untuk tambahan GoCardless Gateway -->

Untuk mengetahui cara bermula dengan gerbang _GoCardless_, **baca artikel ini**.

### Cara memasang tambahan Payfast:

Pergi ke halaman tambahan dan pilih tambahan **Ultimate Multisite: Payfast Gateway**.

<!-- Tangkapan skrin tidak tersedia: Halaman tambahan dengan tambahan Ultimate Multisite Payfast Gateway diserlahkan -->

Tetingkap tambahan akan muncul. Klik pada **Pasang Sekarang.**

<!-- Tangkapan skrin tidak tersedia: dialog butiran tambahan Ultimate Multisite Payfast Gateway dengan butang Pasang Sekarang -->

Selepas pemasangan selesai, anda akan dialihkan ke halaman pemalam. Di sini, hanya klik pada **Aktifkan Rangkaian** dan tambahan _Payfast_ akan diaktifkan pada rangkaian anda.

<!-- Tangkapan skrin tidak tersedia: Halaman pemalam dengan pautan Aktifkan Rangkaian untuk tambahan Payfast Gateway -->
