---
title: Planı ýokarlandyrmak
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Planyňy Güncellendirmek (v2)

_**ÖNEMLİ HABER: Bu makale Ultimate Multisite 2.x versiyasyna aýdylýar.**_

Müşderileriniz her wagt planlaryny güncelleşdirip bilýärler. Olar başga bir plana geçip bilerler ýa-da ulgamanyzda teklip edýän başga hyzmatlary we paketleri satyp bilýärler.

Bu tutorialynda olaryň planlaryny nähili güncelleşdirip biljekdigini we güncelleme prosesinden soň näme boljakdygyny görkezeli.

Planlaryny güncellemek üçin, müşterileriniz öz dashboard-una girip **Account** (Hasaba) sagatyna gitmeli.

![Müşder subsite dashboardynda Account menýu linki görünýär](/img/account-page/account-menu.png)

Account sagatyna girende olaryň mövcud üyeliği we ol bilen baglanyşykly plan görkezilip biler. Başga bir plana geçmek üçin, **Your Membership** (Siziň Üyeliğiniz) bölüminiň üst sagatyna ýerleşen **Change** (Üzgertmek) düwümini basmaly bolýarlar.

![Account sagatyna Your Membership kartasy we Change düwmesi](/img/account-page/membership-change-button.png)

Olar ähli bar bolan planlary görkezilýän checkout formasına yöneltilendirilýärler.

Olaryň mövcud planlary üçin **available services and packages** (has bolan hyzmatlar we paketler) hem görüp biljekdir, eger ol diňe belli bir hyzmaty ýa-da paketi satmak islese (mysal üçin, bizde bu mysalda sınırsyz zynjyry ýa-da disk ulanyşygy), planı güncellemek islemezse.

![Upgrade picker müşteri tarapyndan bar bolan planlar we paketleri görkezýär](/img/account-page/upgrade-picker.png)

Satmak isleýän maglumatlary saýladan soň, olaryň şu wagt näçe tölemek gerekdigini (mövcud kreditler hariç) we gelecek hasaplaýan wagty näçe boljakdygyny görkezeli.

Adatça, eger produkt başga bir plan bolsa we tölemek üyelik ýygnagy bilen baglanyşykly bolsa, ol ilkinji plan üçin tölen meblägiň kreditini alar.

![Credit applied and next billing amount showing upgrade payment summary](/img/account-page/upgrade-summary.png)

Eger olary bir paket ýa-da plan saýlaýarsyňyz we bu, mövcir subskripsiýadan hiç zat üýtgetmese, size şeýleje düşen mesaga görkezilip biler.

![Saýlanan plan subskripsiýany üýtgetmeýändigini habar etmek](/img/account-page/upgrade-no-change.png)

Checkout tamamlanandan soň, täze produkt(lar) müşderi hasabyňyza goşuladyryp, olaryň ähli cheklendirmeleri ýa-da funksiýalary (ziyaratlar, disk ulanylyşy, postlar we ş.m.) anlylyk bilen olara goşdirýär:

##

##

## Upgrade we Downgrade Ýollary

Her bir produkt üçin size **Up & Downgrades** tabyny taparsyňyz. Bu tabynyň ilkinji opsiyasynda **Plan Group** diýlip atlandyrylýan bir ulanylyş ýerine ýetirilir.

**Plan gruplary** — bu, Ultimate Multisite-a belli planlary bir "aýlyp" degişli boljakdygyny we şonuň üçin olary upgrade/downgrade ýoluny döretmek üçin ulanyp biljekdigini bilmegi üpjün edýär.

![Plan Group bilen Product edit Up and Downgrades tabyny](/img/config/product-upgrades-plan-group.png)

Meselem, size **Free plan**, **Basic Plan** we **Premium Plan** bar. Siz Free Plan aşagynda subskripsiýa ediji ulary diňe Premium Plan bilen upgrade etmäge mümkinçilik bermek isleýärsiňiz we olara "Basic Plan"y upgrade opsiyasy hökmünde görmegini islemeýärsiňiz. Bu üçin size gerek bolan zat, Free Plan we Premium Planlar üçin birme-bir aynı plan gruplaryny laýynlamakdyr, bu aşakdaky skrinshotlarda görkezilýär:

![High End plan group bilen Free Plan produkt sayty](/img/config/product-upgrades-free.png)

![High End plan group bilen Premium Plan produkt sayty](/img/config/product-upgrades-premium.png)

Bu nimenin etmeli wezipesi Ultimate Multisite-a ulgamlaryň ağynda **High End** ady bilen bir "aile" bar olduğunu aýtdyrmakdir. Güncellemek ýa-da aşaklanmak teklip edilende, diňe aynı ailedenki planlar hakykatdan ulgam üçin opsional hökmanda görkezilmelidir.
