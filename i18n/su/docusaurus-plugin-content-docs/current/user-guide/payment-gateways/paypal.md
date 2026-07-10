---
title: Ngajantenkeun PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Ngaturkeun Gateway PayPal (v2) {#setting-up-the-paypal-gateway-v2}

_**CATATAN PENTING: Artikel ieu merujuk kana Ultimate Multisite versi 2.x.**_

Anjeun bisa ngaktifkeun nepi ka opat cara pembayaran dina halaman pengaturan pembayaran urang: Stripe, Stripe Checkout, PayPal, sareng Manual. Dina artikel ieu, urang bakal tunjukkeun kumaha cara integrasi jeung **PayPal**.

Sapertos Stripe, PayPal ogé dipaké pisan pikeun pembayaran online, utamana dina website WordPress. Artikel ieu bakal ngajarkeun anjeun kumaha ngagunakeun PayPal salaku metode pembayaran anu aya di jaringan anjeun.

Perlu diperhatikeun yén anjeun kudu boga **akun PayPal Business** pikeun meunang kredensial API anu dibutuhkeun pikeun integrasi ieu.

## Ngaktifkeun PayPal dina jaringan anjeun {#enabling-paypal-on-your-network}

Supaya ngaktifkeun PayPal salaku metode pembayaran anu aya di jaringan anjeun, mindah ka **Ultimate Multisite > Settings > Payments** tab sareng centang kotak di sebelah PayPal.

![Ngaktifkeun PayPal dina payment gateway aktif](/img/config/settings-payment-gateways.png)

## Ngagunakeun panduan setup wizard {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 nambahan panduan *setup wizard* PayPal dina pengaturan *payment gateway*. Sanggeus anjeun ngaktifkeun PayPal, anggo *wizard* éta dina **Ultimate Multisite > Settings > Payments** pikeun milih kumaha cara anjeun hayang nyambungkeun *gateway* jeung ngabuktian kredensial mana anu masih dibutuhkeun saméméngan disimpen.

Panduan *wizard* éta ngadukung dua jalur *setup*:

* **Input kredensial manual**: Gunakan jalur (path) ieu lamun anjeun geus gaduh kredensial API PayPal, lamun pengaturan OAuth teu aya pikeun akun anjeun, atawa lamun anjeun milih nyalin kredensial ti PayPal sorangan. Lengkapi Username API, Password API, jeung Signature API di kolom PayPal, tuluy simpan pengaturan pembayaran.
* **Pintu koneksi OAuth**: Gunakan jalur ieu ngan ukur lamun pilihan OAuth aya sareng diaktifkeun pikeun instalasi anjeun. Wizard nunjukkeun alur OAuth di balik feature flag, jadi jaringan anu teu gaduh flag éta bakal terus ngagunake kolom input kredensial manual.

Lamun anjeun teu ningali pilihan OAuth dina wizard, lengkapi alur input kredensial manual di handap ieu. Gateway ieu mangoperas sareng kredensial PayPal Business API anu sarua jeung rilis Ultimate Multisite 2.x saméméhna.

## Ngajak Kredensial PayPal API {#getting-the-paypal-api-credentials}

Salaku anjeun geus ngaktifkeun PayPal salaku payment gateway, anjeun bakal kedah ngisi kolom pikeun **Username** API PayPal, **Password** API PayPal, jeung **Signature** API PayPal.

Anjeun bisa ngahasilkeun éta ku cara *login* ka akun [Live](https://www.paypal.com/home) atawa [Sandbox](https://www.sandbox.paypal.com/home) anjeun di PayPal.

(Éling yén anjeun bisa ngagunake **mode sandbox** pikeun nguji pembayaran jeung ningali upami gateway geus diatur kalayan bener. Cukup nyalikekeun bagian anu bersesuaian.)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Kanggo ménta API Signature atawa kredensial Sertifikat pikeun akun PayPal anjeun:

  1. Pergi ka [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) anjeun.

  2. Di bagian **API access**, klik **Update**.

3. Di bawah **NVP/SOAP API integration (Classic)**, klik **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Lamun anjeun geus ngajadikeun API Signature atawa Certificate, anjeun bakal diarahkeun ka hiji halaman di mana anjeun bisa manggihan kridensia anjeun.

     * _**Catatan:** Lamun anjeun ditanya pikeun verifikasi akun PayPal anjeun, tuluy tindak-tindak jalanna.*

  4. Pilih _satu_ tina pilihan di handap ieu, tuluy klik **Agree and Submit**.

     * **Request API Signature** – Pilih lamun anjeun hoyong otentikasi ku API Signature.

     * **Request API Certificate** – Pilih lamun anjeun hoyong otentikasi ku API Certificate.

  5. PayPal bakal ngahasilkeun kridensia API anjeun saperti kieu:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** kaasup API Username, API Password, jeung Signature, anu teu kedaluwarsa. Nilai-nilai ieu biasana disumputkeun pikeun keamanan tambahan. Klik **Show/Hide** pikeun ngaktifan atawa ngalincirkirkeun éta. Lamun geus réngsé, klik **Done**.

     * **API Certificate credentials** kaasup API Username, API Password, jeung Certificate, anu bakal kedaluwarsa otomatis sanggeus tilu taun. Klik **Download Certificate** pikeun nyimpen API Certificate ka desktop anjeun.

Sakitu waé, integrasi pembayaran PayPal anjeun geus réngsé!

Lamun anjeun boga patarosan ngeunaan pengaturan PayPal, anjeun bisa merujuk kana [Help Center](https://www.paypal.com/br/smarthelp/home) PayPal.
