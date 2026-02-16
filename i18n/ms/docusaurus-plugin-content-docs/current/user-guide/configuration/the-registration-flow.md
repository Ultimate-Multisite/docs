---
title: Aliran Pendaftaran
sidebar_position: 3
_i18n_hash: 73484be47ec750747cb9d94ea874d97f
---
# Aliran Pendaftaran (v2)

_**NOTA PENTING: Artikel ini merujuk kepada Ultimate Multisite versi 2.x.**_

Pengguna boleh mendaftar ke rangkaian anda melalui pelbagai cara. Mereka boleh menggunakan borang pendaftaran anda atau pautan yang boleh dikongsi untuk pelan yang telah dipilih. Di sini kami akan tunjukkan bagaimana pelanggan anda boleh mendaftar di rangkaian anda menggunakan laluan yang tersedia dan apa yang berlaku selepas mereka mendaftar.

## Menggunakan Borang Pendaftaran:

Ini adalah proses pendaftaran standard. Anda mencipta halaman pendaftaran dengan **borang checkout** dan di sinilah pelanggan anda akan pergi untuk mendaftar di rangkaian anda dan melanggan pelan. Anda boleh mempunyai beberapa halaman pendaftaran, setiap satu dengan borang pendaftaran yang berbeza jika anda mahu.

Halaman lalai untuk pendaftaran adalah [_**yourdomain.com/register**_](http://yourdomain.com/register), tetapi anda boleh menukar ini pada bila-bila masa di **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Selepas pengguna sampai ke halaman pendaftaran anda (biasanya dengan mengklik butang **Sign in** atau **Buy now**), mereka akan melihat borang pendaftaran anda di sana.

![Borang pendaftaran dipaparkan di halaman pendaftaran](/img/config/checkout-forms-list.png)

Apa yang perlu mereka lakukan hanyalah mengisi semua medan wajib - emel, nama pengguna, kata laluan, dan sebagainya... - dan membayar untuk pelan tersebut atau mengesahkan alamat emel mereka jika mereka mendaftar untuk pelan percuma atau pelan berbayar dengan tempoh percubaan tanpa maklumat pembayaran.

Di halaman "Thank you", mereka akan melihat mesej yang memberitahu sama ada mereka perlu mengesahkan alamat emel mereka atau laman web mereka sudah diaktifkan dan mereka boleh mula menggunakannya.

![Halaman Thank You selepas pendaftaran](/img/config/checkout-form-editor.png)

Jika pengesahan alamat emel diperlukan, mereka perlu pergi ke peti masuk emel mereka dan klik pada pautan pengesahan. Laman web mereka tidak akan diaktifkan jika alamat emel mereka tidak disahkan.

Jika mereka telah mendaftar pada pelan berbayar atau pengesahan emel tidak wajib di rangkaian anda, laman web mereka akan diaktifkan serta-merta selepas checkout dan mereka akan ditunjukkan pautan untuk log masuk ke dashboard mereka.

![Laman diaktifkan dengan pautan untuk log masuk ke dashboard](/img/config/checkout-form-editor.png)

## Menggunakan Pautan Boleh Dikongsi:

Proses mendaftar menggunakan pautan boleh dikongsi pada dasarnya sama seperti borang pendaftaran, satu-satunya perbezaan adalah dengan menggunakan pautan boleh dikongsi, pelanggan anda boleh mempunyai produk atau templat laman web yang telah dipilih terlebih dahulu pada borang checkout (rujuk bahagian Pre-selecting products and templates via URL parameters) atau mungkin kod kupon yang ditambah (rujuk bahagian Using URL Parameters).

Proses pendaftaran akan sama: mereka perlu mengisi nama, nama pengguna, alamat emel, nama dan tajuk laman web, dan sebagainya... tetapi pelan atau templat laman akan sudah dipilih terlebih dahulu untuk mereka.

### Mendaftar Menggunakan Pembayaran Manual:

Jika anda tidak mahu menggunakan PayPal, Stripe atau mana-mana payment gateway lain yang ditawarkan oleh Ultimate Multisite atau integrasi add-on-nya, anda boleh menggunakan pembayaran manual untuk pelanggan anda. Dengan cara ini, anda boleh menjana invois untuk mereka bayar di pemproses pembayaran pilihan anda selepas mereka mendaftar di rangkaian anda.

Proses pendaftaran akan sama seperti di atas, tetapi di halaman pendaftaran pelanggan anda akan melihat mesej yang menyatakan mereka akan menerima emel dengan arahan lanjut untuk melengkapkan pembayaran.

![Mesej pembayaran manual semasa pendaftaran](/img/config/settings-payment-gateways.png)

Dan selepas pendaftaran selesai, mereka akan melihat arahan pembayaran yang anda tetapkan (dan juga menerimanya melalui emel mereka).

![Arahan pembayaran ditunjukkan selepas pendaftaran](/img/config/settings-payment-gateways.png)

Arahan pembayaran boleh ditukar di **Ultimate Multisite > Settings > Payments** selepas menghidupkan pilihan pembayaran **Manual**:

![Toggle pembayaran manual dengan medan arahan pembayaran](/img/config/settings-payment-gateways.png)

Selepas pelanggan anda melengkapkan pembayaran manual dan menghantar pengesahan kepada anda, anda perlu **mengesahkan pembayaran secara manual** untuk mengaktifkan keahlian dan laman web pelanggan.

Untuk melakukan ini, pergi ke **Ultimate Multisite > Payments** dan cari pembayaran pelanggan tersebut. Ia sepatutnya masih menunjukkan status **Pending**.

![Senarai pembayaran dengan pembayaran manual yang belum selesai](/img/admin/payments-list.png)

Klik pada nombor pembayaran dan anda akan dapat menukar statusnya kepada **Completed**.

![Halaman butiran pembayaran](/img/admin/payments-list.png)

![Menukar status pembayaran kepada Completed](/img/admin/payments-list.png)

Selepas menukar statusnya kepada **Completed**, anda sepatutnya melihat mesej **Activate membership**. Hidupkan pilihan ini untuk mengaktifkan keahlian dan laman web yang dikaitkan dengan pelanggan ini. Kemudian, klik **Save Payment**.

![Toggle Activate membership dan butang Save Payment](/img/admin/payments-list.png)

Pelanggan anda kini sepatutnya boleh mengakses dashboard dan semua ciri yang mereka langgan.
