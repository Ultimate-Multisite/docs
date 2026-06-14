---
title: Dërgimi i emaileve dhe shpërndarjet
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# Dërgimi i Email-eve dhe Transmetimet (v2)

_**SHËNIM I RËTHMË: Ky artikull i referohet Ultimate Multisite version 2.x.**_

Ultimate Multisite vjen me një veçori që ju lejon të komunikoni me klientët duke dërguar email-e në një përdorues specifik ose një grup përdoruesish, si dhe duke dërguar njoftime në dashboardin e tyre administrator për transmetime.

## Shtimi i njoftimeve administrative në dashboardin e klientëve me Transmetimet (Broadcasts)

Duke përdorur veçorin e broadcast-it të Ultimate Multisite, mund të shtoni **njoftime administrative** në dashboardin e admin të subsite-it tuaj të përdoruesit.

Kjo është shumë e dobishme nëse keni nevojë të bëni një njoftim si mirëmbajtje sistemore ose për ofrimin e produkteve/shërbimeve të reja ndaj përdoruesve tuaj ekzistues. Kështu do të duket njoftimi i administratës në dashboardin e përdoruesit tuaj.

<!-- Screenshot unavailable: Njoftimi i admini i transmetuar në dashboardin e subsite-it të klientit -->

Për të nisur një njoftim administratif, shkoni te dashboardi i adminit të rrjetit tuaj dhe në menynë **Ultimate Multisite**, do të gjeni opsionin **Broadcasts**.

![Karta e listës së transmetimeve në adminin Ultimate Multisite](/img/admin/broadcasts-list.png)

Ndonjëherë mund të redaktoni edhe transmetimet ekzistuese:

![Interfsi i redaktimit të transmetimit](/img/admin/broadcast-edit.png)

Nga kësaj faqeje, klikoni butonin **Add Broadcast** (Shtoni Transmetim) në krye.

Kjo do t'ju hapë dritaren modale Add broadcast ku mund të zgjidhni çfarë lloji transmeti dëshironi të dërgoni.

Shkoni dhe zgjidhni **Message** (Mesazh) pastaj klikoni butonin **Next Step** (Hapi i hapi).

![Dritara modale e shtimit të transmetimit me opsionin Message të zgjedhur](/img/admin/broadcast-add-message.png)

Drita e ardhshme do ju kërkojë ose **Target customer** (Klienti i synuar) ose **Target product** (Produkti i synuar). Vëreni se mund të zgjidhni më shumë se një përdorues ose më shumë se një produkt.

Për të kërkuar ndonjë përdorues ose produkt, duhet të filloni të shkruani fjalën kyçe brenda fushës.

Nën fushën **Message type** (Lloji i mesazhit), mund të zgjidhni ngjyrën e njoftimit. Kjo do të theksojë urgjencën e mesazhit tuaj.

Marrë më pas klikoni në **Next Step** (Hapi i mëtej).

![Target customers, target product and message type fields for a Message broadcast](/img/admin/broadcast-message-targets.png)

Duket se dita tjetër është ku mund të filloni të ndërtoni mesazhin duke futur subjektin dhe përmbajtjen/mesazhin që dëshironi të dërgoni në përdorues.

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

Pas krijimit të mesazhit, mund të shtypni butonin **Send** (Dërgoni).

Dhe kjo është gjithçka. Njoftimi i adminit duhet të shfaqet menjëherë në dashboardin e përdoruesve tuaj.

## Dërgoni email-e për klientët tuaj

Duke përdorur funksionin e broadcast-it Ultimate Multisite, mund të dërgoni një email të përdoruesve tuaj. Keni opsionin të dërgoni emailin vetëm në përdorues specifikë ose të synoni një grup specifike të përdoruesve bazuar në produktin ose planin në të cilin janë abone.

Për të filluar një broadcast email, shkoni te dashboardi i adminit tuaj të rrjetit dhe në menynë Ultimate Multisite, do të gjeni opsionin Broadcast.

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

Nga kësaj faqeje, klikoni butonin **Add broadcast** (Shto broadcast).

Kjo do të hapë dritaren modale Add broadcast ku mund të zgjidhni llojin e broadcast-it që dëshironi të dërgoni. Vazhdoni dhe zgjidhni **Email**, pastaj klikoni butonin **Next Step** (Hapi i mëtej).

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

Drita tjetër do ju pyetë për **Target customer** (Klienti i synuar) ose **Target product** (Produkti i synuar). Vëreni se mund të zgjidhni më shumë se një përdorues ose më shumë se një produkt.

Për të kërkuar një llogari përdoruesi ose një produkt, duhet të filloni të shkruani fjalën kyçe brenda fushës.

Pasi të zgjidhni audiencën tuaj synim, mund të klikoni **Next Step** (Hapi i Ardhshëm).

![Target customers and target product selection for an Email broadcast](/img/admin/broadcast-email-targets.png)

Dita tjetër është ku mund të filloni të ndërtoni emailin duke futur subjektin dhe përmbajtjen/mesazhin që dëshironi të dërgoni përdoruesve.

<!-- Screenshot unavailable: Email broadcast subject and content editor on the compose step -->

Pas krijimit të mesazhit tuaj, mund të shtypni butonin **Send** (Dërgo).

Dhe kështu është sa e lehtë të dërgoni një email tek përdoruesit tuaj përfundimshëm duke përdorur funksionalitetin e broadcast-it.

## Emailet sistemeve (System emails)

Emailet sistemeve në Ultimate Multisite janë **njoftimet automatike** që dërgonen nga sistemi pas veprime të caktuara si regjistrimi, pagesa, mapi i domenit, etj. Këto emailet mund të redaktohen ose modifikohen nga cilësimet e Ultimate Multisite. Ato vijnë gjithashtu me një funksionalitet që ju lejon të rilexoni dhe importoni cilësimet ekzistuese nga një instalim tjetër i Ultimate Multisite.

### Rileximi & Importimi (Resetting & Importing)

Versionet e reja të Ultimate Multisite, si dhe add-on-ët, mund të regjistrojnë emaila të rinj me kohë në kohë.

Për të parandaluar konflikte dhe probleme të tjera, **ne nuk do të shtojmë shabllonet e emailit të rinj si Emailet Sisteme në instalimin tuaj automatikisht**, përveçse ato janë thelbësore për funksionimin e një veçorie të caktuar.

Megjithatë, super adminët dhe agjentët mund të importojnë këto emaila të regjistruara me mjetin e importit (importer tool). Ky proces do të krijojë një email sisteme të ri me përmbajtjen dhe konfigurimin e shabllonit të ri të emailit, duke lejuar super adminin të bëjë çdo ndryshim që dëshiron ose t'i mbajë siç janë.

#### Si të importoni emailet sistemeve (How to import system emails)

Shkoni faqen e cilësimeve të Ultimate Multisite dhe shko te tabu **Emails**.

![Emails tab in Ultimate Multisite settings showing the System Emails section](/img/config/settings-emails-tab.png)

Pastaj, në paneli anësor (sidebar), kliko te butoni **Customize System Emails**.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

N faqen e System Emails do të shohësh butonin **Reset & Import** në krye. Klikimi në atë buton duhet të hapë dritaren modale për import dhe rikuperim (reset).

![Reset or Import action button on the System Emails admin page](/img/admin/system-emails-reset-import.png)

Pastaj, mund të ndryshosh opsionet e Import Email-eve për të parë cilat email-e sistimike janë të disponueshme për import.

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### Rikuperimi i System Emails

N këtë rast, mund të vëreni se ndryshimet që bëni në një template email specifik nuk po funksionojnë më për ju dhe dëshironi ta kthejeni në **statusin e tyre fillestar (default)**.

N këto raste, keni dy opsione: mund thjesht të fshini email-in sistimik dhe ta importoni përsëri (duke përdorur udhëzimet e mësipërme) - gjë që do të fshijë metrikën e dërguar dhe gjë tjetër, kështu që ky metod është më pak i preferuar.

Ose mund të përdorni **Reset & Import tool** për të rikuperuar atë template email.

Për të rikuperuar një template email, mund të ndiqni hapat e mësipërm deri në mjetin Reset & Import, dhe pastaj, aktivizoni opsionin **Reset** dhe zgjidhni email-et që dëshironi ta kthehni në përmbajtjen e tyre fillestare.

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
