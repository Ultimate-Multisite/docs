---
title: Migri de V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migriĝo de V1

## Ultimate Multisite ŝanĝis de sia originale 1.x familio de riliso al la 2.x familio de riliso. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite versio 2.0 kaj pli nova estas kompleta reekonstruo de la kodo, tio signifas, ke ebleti malmulta estas entre la veta versio kaj la nova. Pro tiu kialo, ĉiam pri moderniziĝi de 1.x al 2.x, via data devas esti migritita en formaton, kiun la novaj versio povas kompreni.

Felĉe, Ultimate Multisite 2.0+ **inclus migratoron** konstruitan en la koro, kiu estas capable de detekti datum apartenajn al la veta versio kaj konversi ilin al la nova formato. Ĉi tiu migraĝo okazas dum la **Setup Wizard** de versio 2.0+.

Tiu lektoro provizas informojn pri kiel funkcias la migratora, kion fari en caso de malsukceso, kaj kiel diagnostiki problemojn, kiuj povas diri sur ĉi tiu proceso.

_**IMPORTAN: Antaŭ ol vi komencas moderniziĝi de versio 1.x al versio 2.0, certigu, ke vi kreis rezervon de la bazda databazo de via sitio.**_

## Unaj paŝoj {#first-steps}

La unua paŝo estas teleĉi la plugin .zip filon kaj instali la version 2.0 sur via administrado de la retano (network admin dashboard).

Post kiam vi [instali kaj aktivi la version 2.0](../getting-started/installing-ultimate-multisite.md), la sistema aŭtomate detektos, ke via Multisite funkcias per la veta versio, kaj vi vidus ĉi tiun mesaĝon en la superulo de la plugin paĝo.

_**NOTO:** Se vi havas Ultimate Multisite 1.x instalitan sur via Multisite, vi havis la opcion substitui la plugin per la version, kiun vi jarvis teleĉi. Plie, fari kaj kliki al **Substituci nunaj per plibordita**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

La proks paĝo informas掂e ki la senvo de vobla (legacy) add-ons ki vi instalis kun versio 1.x. Li ha instruktado pri ĉu la versio, ki vi uzas, estas kompatproba kun versio 2.0 aŭ se vi bezonas instali modernan version de la add-on post la migrado.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Kiam vi estas revena al procedi, vi povas kliki sur butonon ki diri **Visit the Installer to finish the upgrade** (Viziti la Instaladon por fini la modernizadon).

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Tamen ĝi donos al vi la paĝon de la instalita wizard kun malsamaj benvenindaj mesaĝoj. Vi nur bezonas kliki sur **Get Started** (Keti Komencon) por pasigi al la sekva paĝo.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Post kliki sur **Get Started**, ĝi redirekti vi al Pre-install Checks_._ Ĝi montros al vi vian Sistemo Informadon kaj WordPress instaladon kaj diros al vi ĉu ĝi plenumi la **Ultimate Multisite's requirements** (la bezonoj de Ultimate Multisite).

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

La sekva paŝo estas in skirib vian licencon klavon de Ultimate Multisite kaj aktivi la pluginon. Tio garantias, ke ĉiuj funkcioj, inkluzive add-ons, estu disponibile sur via sitio.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Post enmeti vian klavon, kliku sur **Agree & Activate** (Acordas kaj Aktivas).

Post licencon aktiva, vi povas komenci la realan instaladon per kliki sur **Install** (Instali) sur la sekva paĝo. Tio automatike kreos la necesajn filojn kaj bazdon datuman kiuj estas necesaj por versio 2.0 funkcii.

## Nun, la migracio {#now-the-migration}

La migrator havas funkcionon de seguridade interna kie kontrolas tut vaš multisite por certu ar ĉiuj viaj de Ultimate Multisite datum povas esti migrit sen iu problemo. Klikas sur butonon **Run Check** por komenci la proceson.

Post kiam vi faras la kontrolon, vi havas du opcio: rezulto povas esti **kun** eraro aŭ **sen** eraro.

### Kun Eraro {#with-error}

Se vi ricevas mesaĝon de eraro, vi bezonas kontakti la nia suporta ekipo por ke ili vi helpi en ŝanĝi lian. Assureĝuĝu vi **donas la logoj de eraro** kiam vi kreas tiketon. Vi povas teleŝuti la logojn aŭ kliki sur la linkon kiu diras kontakti la nia suporta ekipo. Ĝi aldonos la help-widget sur la dreta flanbo de via paĝo kun la kampoj antaŭplenpliita por vi, kiuj inkluzivas la logojn de eraro sub la deskribonio.

_**Ĉar la sistema trovis eraron, vi ne bone procedi migri al versio 2.0. Vi povas tiam reveni al versio 1.x por plenumi rian reton ĝis ke la eraro estas ŝanĝita.**_

### Sen Eraro {#without-error}

Se la sistema ne trovas nin erarojn, vi vidus sukcesajn mesaĝon kaj butonon **Migrate** en la bazaltio kiu permesas vi procedi kun la migrado. Sur ĉi tiu paĝo vi permiĝos al krei kopion de via bazdatado antaŭe, kion ni forte rekomendas. Firnu **Migrate**, se vi 이미 havas kopion.

Ici finas!

Puŝi la aŭtomatiĝa ŝajon (Wizard) montri vian novan logon kaj aliaj thing'ojn en via retoj, aŭ komencu navigon en menuan interfaco de via Ultimate Multisite versio 2.0. Fari pli amusante!
