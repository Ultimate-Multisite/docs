---
title: Menerima Bayaran
sidebar_position: 15
_i18n_hash: 8d591eda27cdf7dcd856d9b3c806db00
---
# Menerima Bayaran (v2)

_**NOTA PENTING: Artikel ini merujuk kepada Ultimate Multisite versi 2.x.**_

Ultimate Multisite mempunyai sistem keahlian dan pengebilan terbina dalam. Untuk memastikan sistem pengebilan kami berfungsi, kami telah mengintegrasikan gerbang pembayaran yang paling biasa digunakan dalam e-dagang. Gerbang pembayaran lalai dalam Ultimate Multisite ialah _Stripe_, _PayPal_, dan Pembayaran Manual. Anda juga boleh menggunakan _WooCommerce_, _GoCardless_ dan _Payfast_ untuk menerima bayaran dengan memasang add-on masing-masing.

## Tetapan Asas

Anda boleh mengkonfigurasi mana-mana gerbang pembayaran ini di bawah tetapan pembayaran Ultimate Multisite. Anda boleh menemuinya dengan pergi ke **menu Ultimate Multisite > Settings > Payments.**

![Halaman tetapan pembayaran dalam Ultimate Multisite](/img/config/settings-payment-gateways.png)

Sebelum anda menyediakan gerbang pembayaran anda, sila lihat tetapan pembayaran asas yang boleh anda konfigurasikan:

**Force auto-renew:** Ini akan memastikan pembayaran akan berulang secara automatik pada akhir setiap kitaran pengebilan bergantung kepada kekerapan pengebilan yang dipilih oleh pengguna.

![Tetapan togol Force auto-renew](/img/config/settings-payment-gateways.png)

**Allow trials without payment method:** Dengan pilihan ini diaktifkan, pelanggan anda tidak perlu menambah sebarang maklumat kewangan semasa proses pendaftaran. Ini hanya diperlukan setelah tempoh percubaan tamat.

![Togol Allow trials without payment method](/img/config/settings-payment-gateways.png)

**Send invoice on payment confirmation:** Ini memberi anda pilihan sama ada untuk menghantar invois selepas pembayaran atau tidak. Ambil perhatian bahawa pengguna akan mempunyai akses kepada sejarah pembayaran mereka di bawah dashboard subsite mereka. Pilihan ini tidak terpakai untuk Manual Gateway.

![Togol Send invoice on payment confirmation](/img/config/settings-payment-gateways.png)

**Invoice numbering scheme:** Di sini, anda boleh memilih sama ada kod rujukan pembayaran atau skema nombor berurutan. Jika anda memilih untuk menggunakan kod rujukan pembayaran untuk invois anda, anda tidak perlu mengkonfigurasi apa-apa. Jika anda memilih untuk menggunakan skema nombor berurutan, anda perlu mengkonfigurasi **next invoice number** (Nombor ini akan digunakan sebagai nombor invois untuk invois seterusnya yang dijana dalam sistem. Ia akan ditambah satu setiap kali invois baharu dicipta. Anda boleh mengubahnya dan menyimpannya untuk menetapkan semula nombor urutan invois kepada nilai tertentu) dan **invoice number prefix.**

![Pemilihan skema penomboran invois](/img/config/settings-payment-gateways.png)

![Tetapan nombor invois berurutan dan awalan](/img/config/settings-payment-gateways.png)

## Di mana untuk mencari gerbang pembayaran:

Anda boleh menyediakan gerbang pembayaran di halaman yang sama (**Ultimate Multisite > Settings > Payments**). Tepat di bawah **active payment gateways**, anda akan dapat melihat: _Stripe_, _Stripe Checkout_, _PayPal_ dan _Manual_.

![Senarai gerbang pembayaran aktif](/img/config/settings-payment-gateways.png)

Kami mempunyai artikel khusus untuk setiap gerbang pembayaran yang akan membimbing anda melalui langkah-langkah penyediaannya yang boleh anda temui pada pautan di bawah.

**Menyediakan gerbang Stripe**

**Menyediakan gerbang PayPal**

**Menyediakan pembayaran manual**

Sekarang, jika anda ingin menggunakan _WooCommerce_, _GoCardless_ atau _Payfast_ sebagai gerbang pembayaran anda, anda perlu **memasang dan mengkonfigurasi add-on mereka**.

### Cara memasang add-on WooCommerce:

Kami faham bahawa _Stripe_ dan _PayPal_ tidak tersedia di sesetengah negara yang mengehadkan atau menghalang pengguna Ultimate Multisite daripada menggunakan plugin kami dengan berkesan. Jadi kami mencipta add-on untuk mengintegrasikan _WooCommerce_, iaitu plugin e-dagang yang sangat popular. Pembangun di seluruh dunia telah mencipta add-on untuk mengintegrasikan pelbagai gerbang pembayaran kepadanya. Kami mengambil peluang ini untuk memperluaskan gerbang pembayaran yang boleh anda gunakan dengan sistem pengebilan Ultimate Multisite.

_**PENTING:** Ultimate Multisite: WooCommerce Integration memerlukan WooCommerce diaktifkan sekurang-kurangnya di laman utama anda._

Pertama, sila pergi ke halaman add-on. Anda boleh menemuinya dengan pergi ke **Ultimate Multisite > Settings**. Anda sepatutnya melihat jadual **Add-ons**. Klik pada **Check our Add-ons**.

![Halaman tetapan dengan bahagian add-on](/img/config/settings-general.png)

Selepas mengklik pada **Check our Add-ons**, anda akan dialihkan ke halaman add-on. Di sini anda boleh menemui semua add-on Ultimate Multisite. Klik pada add-on **Ultimate Multisite: WooCommerce Integration**.

![Halaman add-on yang menyenaraikan add-on yang tersedia](/img/config/settings-general.png)

Tetingkap akan muncul dengan butiran add-on. Cuma klik pada **Install Now**.

![Dialog pemasangan add-on WooCommerce](/img/config/settings-general.png)

Selepas pemasangan selesai, anda akan dialihkan ke halaman plugin. Di sini, cuma klik pada **Network Activate** dan add-on WooCommerce akan diaktifkan pada rangkaian anda.

![Network Activate add-on WooCommerce](/img/config/settings-general.png)

Selepas mengaktifkannya, jika anda masih belum memasang dan mengaktifkan plugin WooCommerce di laman web anda, anda akan menerima peringatan.

![Notis peringatan pengaktifan WooCommerce](/img/config/settings-general.png)

Untuk membaca lebih lanjut mengenai add-on WooCommerce Integration, **klik di sini**.

### Cara memasang add-on GoCardless:

Langkah-langkah untuk memasang add-on _GoCardless_ adalah hampir sama dengan add-on _WooCommerce_. Sila pergi ke halaman add-on dan pilih add-on **Ultimate Multisite: GoCardless Gateway**.

![Halaman add-on yang menyenaraikan add-on yang tersedia](/img/config/settings-general.png)

Tetingkap add-on akan muncul. Klik pada **Install Now**.

![Dialog pemasangan add-on GoCardless](/img/config/settings-general.png)

Selepas pemasangan selesai, anda akan dialihkan ke halaman plugin. Di sini, cuma klik pada **Network Activate** dan add-on _GoCardless_ akan diaktifkan pada rangkaian anda.

![Network Activate add-on GoCardless](/img/config/settings-general.png)

Untuk mengetahui cara bermula dengan gerbang _GoCardless_, **baca artikel ini**.

### Cara memasang add-on Payfast:

Pergi ke halaman add-on dan pilih add-on **Ultimate Multisite: Payfast Gateway**.

![Halaman add-on yang menyenaraikan add-on yang tersedia](/img/config/settings-general.png)

Tetingkap add-on akan muncul. Klik pada **Install Now.**

![Dialog pemasangan add-on Payfast](/img/config/settings-general.png)

Selepas pemasangan selesai, anda akan dialihkan ke halaman plugin. Di sini, cuma klik pada **Network Activate** dan add-on _Payfast_ akan diaktifkan pada rangkaian anda.

![Network Activate add-on Payfast](/img/config/settings-general.png)
