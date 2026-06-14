---
title: Migrimi nga V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migrimi nga V1

## Ultimate Multisite ka kalëso nga familja origjinale 1.x e lëshimeve në familjen 2.x të lëshimeve.

Ultimate Multisite version 2.0 dhe më sipërme është një ri-shkrim i plotë i kodit, që do të thotë se ka shumë pak gjë për t'u ndarë midis versionit të vjetër dhe të ri. Për këtë arsye, kur përdorni përditësim nga 1.x në 2.x, të dhënat tuaja duhet të migrohen në një format që versionet e reja mund t'i kuptojnë.

Mirë që Ultimate Multisite 2.0+ **vjen me një migrator** të ndërtuar brenda kodit që është i aftë të zbulojë të dhënat nga versioni i vjetër dhe t'i konvertojë në formatin e ri. Kjo migrim ndodh gjatë **Setup Wizard-it** të versionit 2.0+.

Ky mësim flet se si funksionon migratori, çfarë të bësh në rast dështimi dhe si të zgjidhësh probleme që mund të dalin gjatë kësaj proceesi.

_**ÇELUES: Para se të filloni përditësimin nga versioni 1.x në versionin 2.0, sigurohuni që të krijoni një kopje rezervë (backup) të bazës së të dhënave të saj.**_

## Hapat e para

Hapi i parë është të shkarkoni skurtin .zip dhe të instaloni versionin 2.0 në dashboard-in tuaj administrator të rrjetit.

Pas kur [installoni dhe aktivizoni versionin 2.0](../getting-started/installing-ultimate-multisite.md), sistemi do të zbulojë automatikisht se Multisite juajit po punon me versionin të vjetër dhe do të shihni këtë mesazh në krye të faqes së pluginit.

_**SHËNJE:** Nëse keni Ultimate Multisite 1.x të instaluar në Multisite tuaj, do të keni opsionin për të zëvendësuar pluginin me versionin që sapo e shkarkuat. Ju lutem, vazhdoni dhe klikoni për **Zëvendëso aktual me ngritur**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

Kjo faqe do ju tregon cilat add-on-ët e vjetër që keni instaluar së bashku me versionin 1.x. Do të ketë udhëzime se a versioni që po përdorni është i pajtueshëm me versionin 2.0 apo nëse keni nevojë ta instaloni një version të përditësuar të add-on-it pas migrimit.

<!-- Screenshot unavailable: Mesazhi në krye të faqes së plugin-ëve mbi përditësimin në v2.0, me listë e add-on-ëve që duhet të përditësohen -->

Kur jeni gati për të vazhduar, mund të klikoni butonin që thotë **Visit the Installer to finish the upgrade** (Vizitoni Instaluesin për të mbaruar përditësimin).

<!-- Screenshot unavailable: Butoni që thotë Visit the Installer to finish the upgrade -->

Marrat atë do t'ju çojë në faqen e wizard-it të instalimit me disa mesazhe mirëse. Ju duhet vetëm të klikoni **Get Started** (Filloni) për të kaluar te faqja tjetër.

<!-- Screenshot unavailable: Faqja mirëse e wizard-it të konfigurimit me butonin Get Started -->

Pas klikimit në **Get Started**, ju do të drejtohet te Pre-install Checks_._ Kjo do t'ju tregojë informacionin tuaj mbi Sistemin dhe instalimin WordPress dhe do t'ju thotë nëse i plotësohet kërkesat e **Ultimate Multisite**.

<!-- Screenshot unavailable: Faqja Pre-install Checks që tregon konfirmimin e kërkesave sistemike -->

Hapi i ardhshëm është të vendosni çelësin tuaj lisensie Ultimate Multisite dhe të aktivizoni plugin-in. Kjo do të sigurojë që të gjitha funksionet, përfshirë add-on-ët, do të jenë të disponueshme në faqen tuaj.

<!-- Screenshot unavailable: Faqja e aktivizimit të lisensës me input të çelësit dhe butonin Agree and Activate -->

Pas se vendosni çelësin tuaj, klikoni **Agree & Activate** (Pateqeni dhe Aktivizoni).

Pas aktivizimit të lisensës, mund të filloni instalimin aktual duke klikuar në **Install** (Instalo) te faqja tjetër. Kjo do të krijojë automatikisht skedarët dhe bazën e të dhënave të nevojshme për funksionimin e versionit 2.0.

## Tani, migrimi

Migratori ka ka një mjet sigurie të integruar që do të kontrollojë gjithë multisite tuaj për të siguruar se të gjitha të dhënat e Ultimate Multisite mund të migrohen pa asnjë problem. Klikoni butonin **Run Check** (Rrobri i Kontrollit) për të nisur procesin.

Pasi ta keni ekzekutuar kontrollin, keni dy opsione: rezultati mund të jetë **me** një gabim ose **pa** gabim.

### Me Gabim

Nëse merrni një mesazh gabimi, do t'ju duhet të kontaktoni ekipet tona mbështetëse që ato ju ndihmojnë në rregullimin e gabimit. Sigurohuni që të **ofroni logun e gabimit** kur krijoni një ticket (raporim). Mund ta shkarkoni logun ose mund të klikoni linkun që thotë "kontaktoni ekipet tona mbështetëse". Ai do të hapë widget-in e ndihmës në anën djathtore të faqes tuaj me fusha të plotësuara për ju, duke përfshirë logjet e gabimit në përshkrim.

_**Pasi sistemi gjeti një gabim, nuk do të mund të vazhdoni migrimin në version 2.0. Aty mund të ktheheni në version 1.x për të vazhduar ekzekutimin e rrjetit tuaj derisa që gabimi të rregullohet.**_

### Pa Gabim

Nëse sistemi nuk gjen asnjë gabim, do të shihni një mesazh sukses dhe një butonin **Migrate** (Migro) në fund që ju lejon të vazhdoni me migrimin. Në këtë faqe, do t'ju kujtohet të krijoni një kopje rezervë (backup) të bazës së të dhënave para se të vazhdoni, gjë që ne e rekomandojmë fort. Klikoni **Migrate** nëse tashmë keni një backup.

Dhe kjo është gjithçka që duhet!

Ju lutem, mund të vazhdojmë me përgatitjen e Wizard-it për të përditësuar logon dhe gjëra të tjera në rrjetin tuaj ose të filloni të navigoni menynë dhe ndërfaqen e versionit 2.0 të Ultimate Multisite. Shkoni dhe bëni disa kënaqësi!
