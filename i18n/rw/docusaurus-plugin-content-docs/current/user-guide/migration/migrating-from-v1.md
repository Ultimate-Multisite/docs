---
title: Kugera ku V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Kumenya ku V1

## Ultimate Multisite yagize ku uburyo bwo guhindura (Migrating) {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite yagize ku uburyo bwo guhindura ku gice cy'umwihariko 1.x ya byerekezo zayo ku byerekezo 2.x.

Ultimate Multisite version 2.0 na hari, ni uburyo bwo gutunganya cyane (complete rewrite) bw'uburyo bw'ubwoko (codebase), bitewe niyo, hari ibyo yashyize mu gihe cyose hagati y'umwe n'umwe. Icyo ni ngo, mu gihe uhindura ku 1.x ku 2.x, uza kuba ufite ubushobozi bwo guhindura (migrate) data yawe ku buryo uburyo bwo gukoreshwa na byerekezo by'umwe n'umwe.

Urugero, Ultimate Multisite 2.0+ **yagize migrator** (migrator) yashyizwe mu gihe cyose (core) kandi igaragaza ibyo data ya byerekezo bya mbere kandi igire umubare w'ibyo gishobora guhindura ku buryo bwo mu gihe. Icyo kigira ku gice cy'Umuco wa 2.0+.

Iyi inyandiko iragaragaza uburyo migrator yikorera, ibyo ugomba gukora mu gihe hari ubunyangamugayo (failure), kandi uburyo bwo guhindura ibyo gishobora kwitwa mu gihe cyose.

_**UBUKA: Icyiza cyane: Iki ni igice cyo gukora mbere y'ubwoko ku 1.x ku byerekezo 2.0, ugomba kumenya ko wumva uburyo bwo guhindura (backup) database yawe ya site.**_

## Inshingano ya mbere {#first-steps}

Inshingano ya mbere ni gukoresha (download) file .zip y'plugin kandi gukoresha version 2.0 ku dashboard ya admin yawe ya network.

Nyuma yo [gukora install cyangwa gukoresha version 2.0](../getting-started/installing-ultimate-multisite.md), umusaruro uzabona ko Multisite yawe yari ikoresheje byerekezo bya mbere kandi uza kubona iyo nyandiko ku gice cy'plugin.

_**Umuco: Hejya hari Ultimate Multisite 1.x kuri Multisite yawe, uza kuba ufite ubushobozi bwo guhindura plugin yose n'iyo wari utagizeye. Niba hari, ugomba kwishyira mu gihe cyo gukora.**_

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

Icyo uwezi kumenya ibyo uza kuba ufite add-ons z'umukono (legacy) ugiye kuho n'urugero rwa 1.x. Uza kuba ufite inama ku bijyanye n'uko version ugiye gukoreshwa irafite uburenganzira n'version 2.0 cyangwa uza kubona ko ugomba gukoresha version y'umukono itandukanye nyuma y'ibyo gukora (migration).

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Iyo uza kuba wumva ko uri mwumva gukora, uza kubona uburyo bwo gukoresha ubutumwa (button) ukuriye kuvuga **Visit the Installer to finish the upgrade**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Iyo, uzabona umuganda w'ibyo gukora (installation wizard page) n'ibyo bishobora kuba byumva. Uza kubona ubutumwa ukuriye kuvuga **Get Started** kugira ngo utangire ku myenda itandukanye.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Nyuma yuko uza kubona ubutumwa ukuriye kuvuga **Get Started**, uzabone uburyo bwo gukoresha ibyo gukora (redirected) ku myenda ya Pre-install Checks_._ Iyi nshya izakubwira ibyo ugiye mu gihe cy'Umuco wawe (System Information) n'uko WordPress yagize kandi izakubwira niba irafite uburenganzira bwa **Ultimate Multisite**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Icyo cyo gukora ni ukuriye gukoresha ubutumwa (key) rwa Ultimate Multisite kandi ugabone ubutumwa. Ibi bituma ko nta feature zose, zeza n'ibyo mu add-ons, zizaba hari ku site yawe.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Nyuma yuko uza kubyara ubutumwa rwawe, uzabona ubutumwa ukuriye kuvuga **Install** ku myenda itandukanye. Ibi bituma ko zizaba gukora mu buryo bw'ibyo bishobora kuba byumva (automatically) ibyerekeye amabwiriza n'database yuzabaye kugira ngo version 2.0 ifite uburenganzira bwa gukora.

## Icyo, uyu mwanya {#now-the-migration}

Umuvugizi (migrator) wariwe n'ubwumvikane bwo gukora uburyo bw'ubwumvikane bwawe. Urugerere rishobora gufata uburyo bwose bwa Ultimate Multisite kugira ngo umwe wese w'Ultimate Multisite yashobore gukorwa nta magambo. Gukoresha ubutumvikane **Run Check** kugira ngo utangire uburyo.

Nyata ku gikorwa cyo gufata, hari iki cyangwa iki: uburyo bishobora kuba **n'ikibazo** cyangwa **nt'ikibazo**.

### N'ikibazo {#with-error}

Niba wumva ikibazo, ugomba kwerekana ku muco wacu kugira ngo bashobore kukugira ubushobozi bwo gukora uburyo. Kugira ngo bashobore kukugira ubushobozi bwo gukora uburyo, ugomba kubyara ku muco wacu kugira ngo bashobore kukugira ubushobozi bwo gukora uburyo. Kugira ngo bashobore kukugira ubushobozi bwo gukora uburyo, ugomba kubyara ku muco wacu kugira ngo bashobore kukugira ubushobozi bwo gukora uburyo. Kugira ngo bashobore kukugira ubushobozi bwo gukora uburyo, ugomba kubyara ku muco wacu kugira ngo bashobore kukugira ubushobozi bwo gukora uburyo.

Niba umwe wese yashobora gukora uburyo, uza kura ibyerekezo cy'ubwumvikane kandi **Migrate** button ku mwera wewe kugira ngo utangire uburyo. Ku gihe cyo, uza kubyitwa gukora backup yawe y'database mbere yemeza, ariko twagufasha cyane. Hit **Migrate** niba wari uri umwe mu backup.

Niyo ni ibyo!

Ushobora gukomeza gukora Wizard setup kugira ngo ushageze logo n'ibindi byo ku rugendo rwawe cyangwa ugomba guhuza menu ya Ultimate Multisite version 2.0 kandi ifite uburyo bwo gukoresha gishya. Urahindura, yaba ukarinda umwanya wowe.
