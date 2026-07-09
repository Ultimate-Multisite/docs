---
title: V1-etik migrazioa egin
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migrazioa V1-etik {#migrating-from-v1}

## Ultimate Multisite-ak bere orihila 1.x familia-tik bere orihila 2.x familia-ra hasi du. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite bertsio 2.0 eta berriagoak kodearen guztiz berri itxiltzea da, zehandritzen ez da ulertzeko irrizoa oso txiki dago eskuaren artean. Horrek, 1.x-etik 2.x-ra aukeratzen duenean, datuak berri bertsioek erantzute eta ulertzeko formatu bat daiteke itxiltzea behar izango duzu.

Ez baina, Ultimate Multisite 2.0+ **core-aren besteak** (migrator) dago, zehandritzen ez da ulertzeko irrizoa oldi datuak bere formatura berri bertsioekin erantzute eta konvertatu dezake. Migrazio horrek 2.0+-ren **Setup Wizard** (Konfigurazioa-gailua) eskoldearen parte batean egiten da.

Hauko lekurri honek migratorra ondo jakosteko, ezberdinetan zer egin behar duzu eta horrela prozesuaren ondorioz sortuedun problemetak nola iruditzen duzu, ikusi du.

_**GARRDIRDI: Bertsio 1.x-etik bertsio 2.0-ra aukeratzen hasten den beti, site datuak backup egin duzu eta hori seguru egin duzu.**_

## Lehen urrunak {#first-steps}

Lehen urruna da plugin .zip filea aldatu eta berriagoa (version 2.0) network admin dashboardan instalatu.

[install and activate version 2.0](../getting-started/installing-ultimate-multisite.md) egin ondoren, sistema automaticoki ikusi du ze Multisite-ak legacy bertsioan dagoela eta pluginaren lapen üstoan iragatik emateko da.

_**NOTIZIA:** Zer Multisitean Ultimate Multisite 1.x instalatu duzu, pluginaren berriagoa aldatzeko aukera izango duzu. Mesedez, **Replace current with uploaded** (Aktualarekin aldatu) irudiari klik egin._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

Hau daura lapena ir informazioa emateko da, zer add-ons bat instalatu duzu version 1.x-arekin berdatzen. Zerren duen ere, abibidea izango da zerren dela versiona erabiltzen ari zete 2.0-re erabiliz beste, edo migrazioaren ondoren add-on bat upgradeatuta instalatzen behar duzu.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Zerren daude gehiago irakurri eta geia dagoen dela, horrek **Visit the Installer to finish the upgrade** (Installatzailean joan eta upgradea amaitu) den botontik klik egin dezakezu.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Horrek sizkiartu duzu instalazioa (installation wizard) eskuratu, nolaren informazioak emateko testu batzuk izango dira. Zerren daude **Get Started** (Lehen urtsua hasten) den botontik klik egin behar duzu irrendituko.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

**Get Started**-ra klik egin ondoren, sistemak sortzeko prozesuaren lehen fasea izango da. Horrek sistema informazioa eta WordPress instalazioa erakusten du, eta Ultimate Multisite-ren eskakizkatzen ondo dagoela edo ez dagoela emateko informazioa ere ematen du.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Hau da irrendituko lehen irudi: Ultimate Multisite-ren lisentzia key (license key) eta plugin-a aktibatu behar duzu. Horrek sitean add-ons, beste guztietara, funtzioak gisa erabilera egonbatzen duela seguratu du.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Key-a ibiltu ondoren, **Agree & Activate** (Erenbegitu eta aktibatu) den botontik klik egin behar duzu.

Lisentzia aktibatu ondoren, instalazioa jartzeko prozesua hasi daiteke: lehen irudian **Install** (Instaluatu) den botontik klik egin behar duzu. Horrek version 2.0-re funtzionatzeko beharrezko file eta database-ak automatikoki sortuko dira.

## Arrate, migrazioa {#now-the-migration}

Migrator-ek funtsezko segurtasun aukera dago, zein da Ultimate Multisite datu guztia ez dute problema edo errazi gabe migra dezake. Prozesua hasten artean **Run Check** botoia klikatu.

Migrazioa jartzen ondoren, bi aukera duzu: errazi **besteko** edo **errazi gabe**.

### Errazdian {#with-error}

Errazi bat lortu dutenean, erraza bat bat emandute (support team) ere, errazaa bat arreglatzeko laguntzeko. Ticket bat emanez gero, **errazi logua** ematu behar duzu. Logua download dezakezu edo "contact our support team" den linkuare klik egin dezakezu. Horrek irudiaren hakutik esku-handiari (right-hand side) beharko dituzten espazioak emanez widgeta ofizioko aukera da, errazi loguak deskribapenailean dagoen.

_**Sistema errazi bat aurkitu duela, 2.0 bertsioan migra dezake ez duzu. Horrek errazi arregla denean, errazte irudien networka jarraitzea lortzeko 1.x bertsioan itzale dezakezu.**_

### Errazi gabe {#without-error}

Sistema bat errazi ez aurkitu duela, suksesko mensajua eta migrazioa jartzen dituzten botoia lekuan (bottom) ikusten duzu. Horren aldeko, irudien database-ak backup egitea emateko aldatzeko eskatzen da, zein da garrantzitsua. Backup bat duela, **Migrate** botoia klikatu.

Horrek dugu!

Ez baduzu, ez duzu nahi duen jarduera egin dezakezu: konputilua sortzeko Wizard-a jarraitu eta network-eko logo eta beste batzuk update egin dezakezu edo Ultimate Multisite 2.0 menua eta bere interface berriaren bidez navigatu dezakezu. Joera egin!
