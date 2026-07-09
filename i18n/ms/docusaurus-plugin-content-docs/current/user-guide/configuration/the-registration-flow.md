---
title: Aliran Pendaftaran
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Aliran Pendaftaran (v2) {#the-registration-flow-v2}

_**NOTA PENTING: Artikel ini merujuk kepada Ultimate Multisite versi 2.x.**_

Pengguna boleh mendaftar ke rangkaian anda dengan cara yang berbeza. Mereka boleh menggunakan borang pendaftaran anda atau pautan yang boleh dikongsi ke pelan yang telah dipilih terlebih dahulu. Di sini kami akan menunjukkan cara pelanggan anda boleh mendaftar di rangkaian anda menggunakan laluan yang tersedia dan apa yang berlaku selepas mereka mendaftar di rangkaian anda.

## Menggunakan Borang Pendaftaran: {#using-the-registration-form}

Ini ialah proses pendaftaran standard. Anda mencipta halaman pendaftaran dengan **borang pembayaran** dan di sinilah pelanggan anda akan pergi untuk mendaftar di rangkaian anda dan melanggan pelan. Anda boleh mempunyai berbilang halaman pendaftaran, setiap satu dengan borang pendaftaran yang berbeza jika anda mahu.

Halaman lalai untuk pendaftaran ialah [_**yourdomain.com/register**_](http://yourdomain.com/register), tetapi anda boleh mengubahnya pada bila-bila masa di **Ultimate Multisite > Tetapan > Log Masuk & Pendaftaran > Halaman Pendaftaran Lalai**.

Selepas pengguna tiba di halaman pendaftaran anda (biasanya dengan mengklik butang **Log masuk** atau **Beli sekarang**), mereka akan melihat borang pendaftaran anda di sana.

![Borang pendaftaran dipaparkan pada halaman pendaftaran](/img/frontend/registration-form.png)

Berikut ialah contoh borang pembayaran seperti yang muncul di frontend:

![Borang pendaftaran pembayaran frontend](/img/config/checkout-frontend-registration.png)

Apa yang perlu mereka lakukan hanyalah mengisi semua medan wajib - e-mel, nama pengguna, kata laluan, dll... - dan membayar pelan tersebut atau mengesahkan alamat e-mel mereka jika mereka mendaftar untuk pelan percuma atau pelan berbayar dengan tempoh percubaan tanpa maklumat pembayaran.

Pada halaman "Terima kasih", mereka akan melihat mesej yang memberitahu mereka sama ada mereka perlu mengesahkan alamat e-mel mereka atau jika laman web mereka sudah diaktifkan dan mereka boleh mula menggunakannya.

![Halaman Terima Kasih selepas pendaftaran](/img/frontend/registration-thank-you.png)

Jika pengesahan alamat e-mel diperlukan, mereka perlu pergi ke peti masuk e-mel mereka dan mengklik pautan pengesahan. Laman web mereka tidak akan diaktifkan jika alamat e-mel mereka tidak disahkan.

Jika mereka telah mendaftar pada pelan berbayar atau pengesahan e-mel tidak diwajibkan di rangkaian anda, laman web mereka akan diaktifkan sejurus selepas pembayaran dan mereka akan ditunjukkan pautan untuk log masuk ke Dashboard mereka.

![Laman diaktifkan dengan pautan untuk log masuk ke Dashboard](/img/frontend/site-activated.png)

## Menggunakan Pautan yang Boleh Dikongsi: {#using-a-shareable-link}

Proses mendaftar menggunakan pautan yang boleh dikongsi pada asasnya sama seperti borang pendaftaran, satu-satunya perbezaan ialah dengan menggunakan pautan yang boleh dikongsi, pelanggan anda boleh mempunyai produk atau templat laman web yang dipilih terlebih dahulu pada borang pembayaran (rujuk bahagian Memilih produk dan templat terlebih dahulu melalui parameter URL) atau mungkin kod kupon ditambah (rujuk bahagian Menggunakan Parameter URL).

Proses pendaftaran akan sama: mereka perlu mengisi nama, nama pengguna, alamat e-mel, nama dan tajuk laman web, dll... tetapi pelan atau templat laman sudah pun dipilih terlebih dahulu untuk mereka.

### Mendaftar Menggunakan Pembayaran Manual: {#registering-using-manual-payments}

Jika anda tidak mahu menggunakan PayPal, Stripe atau mana-mana gerbang pembayaran lain yang ditawarkan oleh Ultimate Multisite atau integrasi add-onnya, anda boleh menggunakan pembayaran manual untuk pelanggan anda. Dengan cara ini, anda boleh menjana invois untuk mereka bayar pada pemproses pembayaran pilihan anda selepas mereka mendaftar di rangkaian anda.

Proses pendaftaran akan sama seperti di atas, tetapi pada halaman pendaftaran pelanggan anda akan melihat mesej yang menyatakan bahawa mereka akan menerima e-mel dengan arahan lanjut untuk melengkapkan pembayaran.

![Mesej pembayaran manual semasa pendaftaran](/img/frontend/registration-manual-notice.png)

Dan selepas pendaftaran selesai, mereka akan melihat arahan pembayaran yang anda tetapkan (dan juga menerimanya dalam e-mel mereka).

![Arahan pembayaran yang ditunjukkan selepas pendaftaran](/img/frontend/registration-payment-instructions.png)

Arahan pembayaran boleh diubah di **Ultimate Multisite > Tetapan > Pembayaran** selepas menghidupkan pilihan pembayaran **Manual**:

![Togol pembayaran manual dengan medan arahan pembayaran](/img/config/manual-gateway-settings.png)

Selepas pelanggan anda melengkapkan pembayaran manual dan menghantar pengesahan kepada anda, anda perlu **mengesahkan pembayaran secara manual** untuk mengaktifkan keahlian dan laman web pelanggan.

Untuk melakukan ini, pergi ke **Ultimate Multisite > Pembayaran** dan cari pembayaran pelanggan. Ia sepatutnya masih menunjukkan status **Belum selesai**.

![Senarai pembayaran dengan pembayaran manual belum selesai](/img/admin/payments-list.png)

Klik pada nombor pembayaran dan anda akan dapat menukar statusnya kepada **Selesai**.

![Halaman butiran pembayaran](/img/admin/payment-edit.png)

![Menukar status pembayaran kepada Selesai](/img/admin/payment-status-completed.png)

Selepas menukar statusnya kepada **Selesai** , anda sepatutnya melihat mesej **Aktifkan keahlian**. Togol pilihan ini kepada **hidup** untuk mengaktifkan keahlian dan laman web yang dikaitkan dengan pelanggan ini. Kemudian, klik **Simpan Pembayaran**.

![Togol Aktifkan keahlian dan butang Simpan Pembayaran](/img/admin/payment-activate-membership.png)

Pelanggan anda kini sepatutnya boleh mengakses Dashboard dan semua ciri yang mereka langgan.
