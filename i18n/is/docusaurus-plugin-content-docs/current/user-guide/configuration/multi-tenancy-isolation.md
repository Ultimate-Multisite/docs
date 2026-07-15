---
title: Múta-tenancy ábyrgð
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Samræmi milli tenenta (Multi-Tenancy Isolation)

Ultimate Multisite: Multi-Tenancy 1.2.0 stendurð þýðir að við getum notað skýr samræmi fyrir hverja subsite í eiga database og kerfismiðli (filesystem) til að tryggja að tenentar sé séra. Þetta heldur data tenenta sé séra, en við haldum við nýtingu netverkans, reikninga og stjórnunarferlis áfram.

## Samræmisstrategía (Isolation strategy) {#isolation-strategy}

Brugðu samræmi fyrir þá viðskiptavini sem þurfa sterkara aðskilingu data, sérstaklega skýr kerfismiðli til lagringars, eða sérstaka viðkvæmni í netverkinu.

Hver sérstaktenent þarf:

- Eina sérstaka database eða stefnu með prefix fyrir database sem er staðfest fyrir hostinn.
- Eina sérstaka kerfismiðli root (filesystem root) fyrir tenenta.
- Inngangskennslu í registry fyrir tenenta sem tengir site-inn við database, root path, hostname og samræmisforma.
- Niðurstöðu migrasjónsins (migration verification result) áður en tenent er rekinn live.

## Binding hostar databaseins (Database host binding) {#database-host-binding}

Í útgáfu 1.2.0 breytist almenn það hvernig hostar eru bindingar fyrir sérstaktenenta sem eru installað á sama kerfi. Verðir eins og `localhost` eru normlugarðar svo að Bedrock, FrankenPHP og containerized WordPress installations geti gefið og staðfesta réttindi gegn því host string MySQL í raun sé að sjá.

Þegar þú setur upp sérstaktenent:

1. Set database hostinn á það gildi sem er nauðsynlegt fyrir tenent runtime-inn.
2. Notaðu `localhost` fyrir lokala socket installations þegar hostinn bíður um lokala tengingar.
3. Notaðu `127.0.0.1` eða einn þjónustu-hostname aðeins þegar database serverin gefur réttindi þessum hosti.
4. Kjarrar migrasjónsinn eftir að hafa breytt binding hostar.

Ef staðfestingarskýrðir gefa fyrir vöndum (failures), samanbeina réttindi notandans í tenent DB-inni með því sem er sett binding hostar. Notandinn sem er gefurréttindi fyrir `user@localhost` er annleiki en `user@127.0.0.1` eða `user@%`.

## Kerfismiðli root (Filesystem root) {#filesystem-root}

Root-stadir le leigandi skal vara stabil vid omstart och driftsättning. Undvik tillfälliga monteringsvägar. För installationer i Bedrock-stil, bekräfta att root-stadir pekar på WordPress web root som förväntas av tenant bootstrap, inte bara projektroot.

## Ordning för provisionering {#provisioning-order}

För nya suveräna tenants använd denna ordning:

1. Skapa registry-post för tenant.
2. Skapa tenant databas och databasuser.
3. Bootstrapa tenant schema.
4. Provisionera tenant användare.
5. Konfigurera tenant filsystemsvägar.
6. Kör migrationsverifiering.
7. Växla routing eller DNS efter att verifieringen har lyckats.

Denna ordning förhindrar att delvis isolerade tenants får trafik innan databasförfattaren, användarna och filsystemet är redo.

## Flöden för hantering av suveräna kunder {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 håller kundhanteringsåtgärder på huvudsiten när suverän läge är aktiverat. En tenant kan fortfarande köras som en isolerad WordPress-installation, men kundvända åtgärder som beror på nätverksfakturering, medlemskap eller delade kontodata bör skicka tillbaka kunden till huvudsiten istället för att försöka slutföra åtgärden inuti tenant runtime.

Huvudsidans flöde gäller:

- Kassa och planerändringar.
- Översikt över konto och åtgärder för kundprofiler.
- Uppdateringar av faktureringsadress och skärmar för betalhantering.
- Vy för fakturor och betalhistorik.
- Sidhanteringsåtgärder som att lägga till eller ta bort sidor.
- Växla mallar (Template switching).
- Domänmappning och ändringar av primärdomän.

Þegar viðskiptavinur byrjar að gera nannast þessar aðgerðir í eina eigandi (sovereign) tengil, byggir Ultimate Multisite til viðkomandi hlutina á hlutina fyrir hlutina sem eru á hlutina og heldur upphaflega tengilinn sem vönduðan stað til að komast aftur þegar það er trygt. Þetta leyfir viðskiptavinum að fullfölja stýrt aðgerð í nálgunstökum netréskum, síðan koma aftur í tengilinn sem vönduðan stað án þess að upplýsingar um reikning eða lánning (membership state) að upphaflega hlutina skal uppreyna.

Fyrir aðila er praktískari reglur: halda reikninga-, reikninga-, skráninga-, faktu- og temblingsskipti- og domænsstjórnunarsíðum til viðkomandi eigandi netanna á hlutina sem eru á hlutina. Tengslir í tengilinn (tenant dashboards) geta leiða að þessum síðum, en hlutinn sem er á hlutina skal halda fram sem upphaflega sannleikur fyrir aðgerðina.
