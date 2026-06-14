---
title: Ngatur PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Ngatur Gateway PayPal (v2)

_**CATATAN PENTING: Artikel iki merujuk pada Ultimate Multisite versi 2.x.**_

Sampeyan bisa ngaktifake nganti papat cara pembayaran ing halaman pengaturan pembayaran kita: Stripe, Stripe Checkout, PayPal, lan Manual. Ing artikel iki, kita bakal deleng kepiye carane nggabungake karo **PayPal**.

Padha kaya Stripe, PayPal kerep digunakake kanggo pembayaran online, utamane ing website WordPress. Artikel iki bakal ngandhani sampeyan kepiye nggunakake PayPal minangka cara pembayaran sing bisa diakses ing jaringan sampeyan.

Cathet yen sampeyan kudu duwe **akun PayPal Business** supaya bisa nggoleki API credential sing dibutuhake kanggo integrasi iki.

## Ngaktifake PayPal ing jaringan sampeyan

Kanggo ngaktifake PayPal minangka cara pembayaran sing bisa diakses ing jaringan sampeyan, tindakna menyang **Ultimate Multisite > Settings > Payments** lan centang kotak sebelah PayPal.

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## Nggunakake guided setup wizard

Ultimate Multisite 2.10.0 nambah panduan pengaturan (setup wizard) PayPal ing pengaturan gateway pembayaran. Sawise sampeyan ngaktifake PayPal, gunakake wizard ing **Ultimate Multisite > Settings > Payments** kanggo milih kepiye carane sampeyan arep nyambungake gateway lan konfirmasi credential endi sing isih dibutuhake sadurunge disimpen.

Wizard iki ndukung rong dalan pengaturan:

* **Input kredensial manual**: Gunakna jalur iki nek sampeyan wis duwe kredensial API PayPal, nalika pengaturan OAuth ora ana kanggo akunmu, utawa nalika sampeyan luwih seneng nyalin kredensial saka PayPal dhewe. Masukkan API Username, API Password, lan API Signature ing kolom PayPal, banjur simpen pengaturan pembayaran.
* **Gerbang koneksi OAuth**: Gunakna jalur iki mung nalika opsi OAuth kersa ana lan aktif kanggo instalasi sampeyan. Wizard nuduhake alur OAuth ing mburi fitur flag, mula jaringan tanpa flag bakal terus nggunakake kolom input kredensial manual.

Yen sampeyan ora weruh opsi OAuth ing wizard, selesaikan alur input kredensial manual ing ngisor iki. Gateway iki kerja nganggo kredensial PayPal Business API sing padha karo rilis Ultimate Multisite 2.x sadurunge.

## Nggolek kredensial PayPal API

Sawise PayPal aktif minangka payment gateway, sampeyan bakal perlu ngisi kolom kanggo **Username** API PayPal , **Password** API PayPal lan **Signature** API PayPal.

Sampeyan bisa nggoleke iki kanthi mlebu akun [Live](https://www.paypal.com/home) utawa [Sandbox](https://www.sandbox.paypal.com/home) sampeyan.

(Ingat yen sampeyan bisa nggunakake **mode sandbox** kanggo nguji pembayaran lan ndelok apa gateway-e wis diatur kanthi bener. Cukup aktifkan bagian sing cocog.)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Kanggo njaluk API Signature utawa kredensial Sertifikat kanggo akun PayPal sampeyan:

  1. Tindakake [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) panjenengan.

  2. Ing bagian **API access**, klik **Update**.

3. Ing bawah **NVP/SOAP API integration (Classic)**, klik **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Yen sampeyan wis nggawe API Signature utawa Certificate, sampeyan bakal diarahkan menyang halaman kanggo nemokake kredensialmu.

     * _**Cathetan:** Yen sampeyan ditanya kanggo verifikasi akun PayPal, banjur ikuti instruksi ing layar._

  4. Pilih _salah siji_ saka pilihan ing ngisor iki, banjur klik **Agree and Submit**.

     * **Request API Signature** – Pilih kanggo otentikasi API Signature.

     * **Request API Certificate** – Pilih kanggo otentikasi API Certificate.

  5. PayPal bakal nggawe kredensial API sampeyan kaya mangkene:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** kalebu API Username, API Password, lan Signature, sing ora bakal kedaluwarsa. Nilai-nilai iki biasane disembunyikake kanggo keamanan tambahan. Klik **Show/Hide** kanggo ngaktifake utawa matike. Nalika wis rampung, klik **Done**.

     * **API Certificate credentials** kalebu API Username, API Password, lan Certificate, sing bakal kedaluwarsa otomatis sawise telung taun. Klik **Download Certificate** kanggo nyimpen API Certificate ing desktop sampeyan.

Wis, integrasi pembayaran PayPal sampeyan wis rampung!

Yen sampeyan duwe pitakonan babagan pengaturan PayPal, sampeyan bisa merujuk menyang [Help Center](https://www.paypal.com/br/smarthelp/home) saka PayPal.
