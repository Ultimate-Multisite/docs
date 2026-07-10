---
title: Ýeňilendirme Akymy
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Kydaşylyk Prosesi (v2) {#the-registration-flow-v2}

_**ÖNEMLİ QAYDAMA: Bu makale Ultimate Multisite versiyasyny 2.x-e aýdylýar.**_

Userlar ulgamyza dürli usullar bilen ýa-da ulanyp biljekdir. Olar siziň döredip bilýän ýazgy formasyndan ýa-da önümçeli plan üçin paylaýan linkden (shareable link) ulyp biljekdir. Bu ýerde biz size, müşderileriniz ulgamyza nähili ulyp bilerler we olar ulyp bilerinden soň näme boljakdygyny görkezeli.

## Ulyp Bilen Formany Ulanmak: {#using-the-registration-form}

Bu standart ulyp bilmek prosesidir. Siz **checkout formasy** bilen bir ulyp bilmek üçin ulyp biljek bir sayty döredip, müşderileriniz ulgamyza ulyp we plan üçin ulyp bilerler. Islegsyz bolsa, her biri dürli ulyp bilmek üçin dürli ulyp formasy bilen köp ulyp bilmek mümkin.

Ulyp bilmek üçin standart sayt [_**yourdomain.com/register**_dyr_, ýöne siz **Ultimate Multisite > Settings > Login & Registration > Default Registration Page** boýunça her wagt bu adaty sayty üýtgedip bilersiňiz.

User siziň ulyp bilmek saytına (adatylykda **Sign in** ýa-da **Buy now** düwmenine basmak bilen) gelende, olar orda size ulyp formany görerler.

![Registration form displayed on the registration page](/img/frontend/registration-form.png)

Bu, frontendde görünýän checkout formasy üçin bir mysaldir:

![Frontend checkout registration form](/img/config/checkout-frontend-registration.png)

Olar diňe zerkalaşdyrylan ähli zatlary (email, username, parol we ş.m.) doldurmagy we plan üçin tölemek ýa-da tölemek maglumatlary bilen ulyp bilerler bolsa, bedava plan üçin ýa-da tölegsiz deneme dowamy bilen toplanýan plan üçin email adyny tassyklamak gerekdirler.

"Rahmat" saytynda olar size email adyny tassyklamak gerekmi diýen meselä görkezilip biljekdigini ýa-da olaryň web sahypasy hali işje basyp biljekdigini we ulanyp biljekdigini aýtdyryjy mesaj görkezilip biler.

![Registration sonu teşekkür sahah](/img/frontend/registration-thank-you.png)

Eger e-poçta adresini tasdik etmek gerekse, olaryň e-poçta kutubinasyna gitmeli we tasdik linkine basmaly bolarlar. Eger e-poçtasy tasdik edilmese, olaryň web sayty işlenip bilmez.

Eger olar toplanan plan üçin ýa-da ulgamanızdaky ağda e-poçta tasdik zat mazeratyny bermek zerur däl bolsa, olar tölemden soň web saytyny işlenip biler we olaryň dashboardynda giriş etmek üçin link görkezilýär.

![Dashboardyza girmezlik linki bilen işlenen web sahypasy](/img/frontend/site-activated.png)

## Paylaşylmadyk Linkden Ulanmak: {#using-a-shareable-link}

Paylaşylmadyk link arkaly goşylyp bilmek prosesi, goşylyp barlamak üçin görkezilen formanyň bilen esasanam birme-bir degişlidir. Diňe, paylaşylmadyk linkden ulanyp, müşderileriniz tölem formu üçin önüm ýa-da web sayty şablonyny önceden saýla biljekdigi (URL parametrlary arkaly önümleri we şablonlary önceden saýlamak barada bölümä seret) ýa-da belki hem kupon kody goşmak biler (URL parametrlary ulanyp barada bölümä seret).

Goşylyp barlamak prosesi birme-bir degişlidir: olar adlaryny, ulanyjylar adyny, e-poçta adresini, web saytynyň adyny we sanyny we ş.m. ýazmalydyr... ýöne plan ýa-da web sahypasy şablonu olary üçin önceden saýlan bolup biler.

### Manual Tolemden Goşylyp Barlamak: {#registering-using-manual-payments}

Eger siz Ultimate Multisite ýa-da onuň goşulmalaryny teklip edýän PayPal, Stripe ýa-da beýleki tölemek portalyny ulamak istemezse, müşderiňiz üçin manual tölemden peýdalanyp bilersiňiz. Bu ýagdaýda, olar ağyza goşulandan soň sizleriň üstünlikli tölemek işlenijinizde tölem etmek üçin olaryň üçin has howpsuzlygy we tölemi görkezmek üçin hisab (invoice) döredip bilersiňiz.

Goşylyp barlamak prosesi ýokarda ýaly birme-bir degişlidir, ýöne goşylyp barlamak sahypasynda müşderileriniz tölemi tamamlamak üçin has howpsuzlyk talaplary bilen bilelikdirilipdirilen e-poçta habar aljakdyklarini görerler.

![Qeydiyyat dowamynda manual töhleme mesaji](/img/frontend/registration-manual-notice.png)

We registratsiyadan soň, siz saýlan we size ýüklenen töhleme naryady görkezýärsiňiz (we ol olaryna e-poçta hem ýetirip bilerisiz).

![Qeydiyyatdan soň töhleme naryady görkezmek](/img/frontend/registration-payment-instructions.png)

Töhleme naryadyny **Ultimate Multisite > Settings > Payments** boýunça **Manual** töhleme opsiyasyny açyp geçip üýtgedip bilersiňiz:

![Töhleme naryady bilen manual töhleme düwmesi](/img/config/manual-gateway-settings.png)

Müşderileriniz manual töhlemi tamamlaýan we size tasdiq bermegi üçin, müşteri üyeliğini we web-saytyny işjeň etmek üçin **töhlemi manual tasdik etmeli**siňiz.

Bu üçin, **Ultimate Multisite > Payments** bilen gitdiň we müşderi töhlämesini tapyň. Ol halaý **Pending** (Bekläp duran) statusyny görkezmeli.

![Bekläp duran manual töhlemler bilen töhlemler listi](/img/admin/payments-list.png)

Töhleme nömrüne basyp, onu **Completed** (Tamamlandyrylan) statusyna üýtgedip bilersiňiz.

![Töhleme statussyny Completed ga üýtgetmek](/img/admin/payment-status-completed.png)

Statussyny **Completed** ga üýtgedikten soň, size **Activate membership** (Üyeliği işjeň etmek) mesaji görkezilmelidir. Bu opsiyany **on** (açyk) döredip bu müşderi bilen baglanyşykly üyeliği we web-saytny işjeň etmek üçin islendik ýerde basyp bilersiňiz. Soňra, **Save Payment** (Töhlämeni sakla) düwmenine basyň.

![Üyeliği işjeň etmek dörediji we Save Payment düwmesi](/img/admin/payment-activate-membership.png)

Sizi müşderiniz indi dashboarda we olar saýlan ähli funksiýalara girip biljekdigi görkezilmelidir.
