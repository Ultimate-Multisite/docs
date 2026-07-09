---
title: Dërgimi i emaileve dhe transmetimeve
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Dërgimi i emaileve dhe transmetimeve (v2) {#sending-emails-and-broadcasts-v2}

_**SHËNIM I RËNDËSISHËM: Ky artikull i referohet Ultimate Multisite versionit 2.x.**_

Ultimate Multisite vjen me një veçori që do t’ju lejojë të komunikoni me klientët tuaj duke dërguar një email te një përdorues i synuar ose te një grup përdoruesish, si edhe duke dërguar njoftime në dashboard-in e tyre të administrimit për të transmetuar lajmërime

## Shtoni njoftime administrimi në dashboard-in e klientëve tuaj me Broadcasts {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

Duke përdorur veçorinë e transmetimit të Ultimate Multisite, mund të shtoni **njoftime administrimi** në dashboard-in e administrimit të subsajtit të përdoruesit tuaj.

Kjo është jashtëzakonisht e dobishme nëse ju duhet të bëni një lajmërim, si mirëmbajtje sistemi ose ofertë produktesh apo shërbimesh të reja për përdoruesit tuaj ekzistues. Kështu do të duket njoftimi i administrimit në dashboard-in e përdoruesit tuaj.

<!-- Pamja e ekranit e padisponueshme: Transmetimi i njoftimit të administrimit i shfaqur në dashboard-in e subsajtit të një klienti -->

Për të nisur një njoftim administrimi, shkoni te dashboard-i i administrimit të rrjetit tuaj dhe nën menunë **Ultimate Multisite**, do të gjeni opsionin **Broadcasts**.

![Faqja e listës së Broadcasts në administrimin e Ultimate Multisite](/img/admin/broadcasts-list.png)

Mund të redaktoni gjithashtu transmetimet ekzistuese:

![Ndërfaqja e redaktimit të transmetimit](/img/admin/broadcast-edit.png)

Nga kjo faqe, klikoni butonin **Add Broadcast** në krye.

Kjo do të hapë dritaren modale Add broadcast ku mund të zgjidhni çfarë lloji transmetimi dëshironi të dërgoni.

Vazhdoni dhe zgjidhni **Message**, pastaj klikoni butonin **Next Step**.

![Modalja Add broadcast me opsionin Message të zgjedhur](/img/admin/broadcast-add-message.png)

Dritarja tjetër do t’ju kërkojë ose **Klientin e synuar** ose **Produktin e synuar**. Vini re se mund të zgjidhni më shumë se një përdorues ose më shumë se një produkt.

Për të kërkuar qoftë një account përdoruesi ose produkt, duhet të filloni të shkruani fjalën kyçe brenda fushës.

Nën fushën **Lloji i mesazhit**, mund të zgjidhni ngjyrën e njoftimit. Kjo do të theksojë urgjencën e mesazhit tuaj.

Pastaj mund të klikoni **Next Step**.

![Fushat e klientëve të synuar, produktit të synuar dhe llojit të mesazhit për një transmetim Message](/img/admin/broadcast-message-targets.png)

Dritarja tjetër është vendi ku mund të filloni të kompozoni mesazhin tuaj duke futur subjektin dhe përmbajtjen/mesazhin që dëshironi t’u transmetoni përdoruesve.

![Subjekti i mesazhit të transmetimit dhe redaktori i përmbajtjes në hapin e kompozimit](/img/admin/broadcast-edit.png)

Pasi të krijoni mesazhin tuaj, mund të shtypni butonin **Send**.

Dhe kaq. Njoftimi i administrimit duhet të shfaqet menjëherë në dashboard-in e përdoruesit tuaj.

## Dërgoni emaile klientëve tuaj {#send-emails-to-your-customers}

Duke përdorur veçorinë e transmetimit të Ultimate Multisite, mund t’u dërgoni një email përdoruesve tuaj. Keni një opsion për ta dërguar emailin vetëm te përdorues specifikë ose për të synuar një grup specifik përdoruesish bazuar në produktin ose planin nën të cilin janë abonuar.

Për të nisur një transmetim emaili, shkoni te dashboard-i i administrimit të rrjetit tuaj dhe nën menunë Ultimate Multisite, do të gjeni opsionin Broadcast.

![Faqja e listës së Broadcasts e përdorur si pika e nisjes për një transmetim emaili](/img/admin/broadcasts-list.png)

Nga kjo faqe, klikoni butonin **Add broadcast** në krye.

Kjo do të hapë dritaren modale Add broadcast ku mund të zgjidhni çfarë lloji transmetimi dëshironi të dërgoni. Vazhdoni dhe zgjidhni **Email**, pastaj klikoni butonin **Next Step**.

![Modalja Add broadcast me opsionin Email të zgjedhur](/img/admin/broadcast-add-email.png)

Dritarja tjetër do t’ju kërkojë ose **Klientin e synuar** ose **Produktin e synuar**. Vini re se mund të zgjidhni më shumë se një përdorues ose më shumë se një produkt.

Për të kërkuar qoftë një account përdoruesi ose produkt, duhet të filloni të shkruani fjalën kyçe brenda fushës.

Pasi audienca juaj e synuar të zgjidhet, mund të klikoni **Next Step**.

![Zgjedhja e klientëve të synuar dhe produktit të synuar për një transmetim Email](/img/admin/broadcast-email-targets.png)

Dritarja tjetër është vendi ku mund të filloni të kompozoni emailin tuaj duke futur subjektin dhe përmbajtjen/mesazhin që dëshironi t’u dërgoni përdoruesve.

<!-- Pamja e ekranit e padisponueshme: Subjekti i transmetimit Email dhe redaktori i përmbajtjes në hapin e kompozimit -->

Pasi të krijoni mesazhin tuaj, mund të shtypni butonin **Send**.

Dhe kaq e lehtë është të dërgoni një email te përdoruesit tuaj fundorë duke përdorur veçorinë e transmetimit.

## Emailet e sistemit {#system-emails}

Emailet e sistemit në Ultimate Multisite janë ato **njoftime automatike** që dërgohen nga sistemi pas veprimeve të caktuara si regjistrimi, pagesa, lidhja e domain-it, etj. Këto emaile mund të redaktohen ose modifikohen nga cilësimet e Ultimate Multisite. Ai vjen gjithashtu me një veçori që do t’ju lejojë të rivendosni dhe importoni cilësimet ekzistuese nga një instalim tjetër i Ultimate Multisite.

### Rivendosja & Importimi {#resetting--importing}

Versionet e reja të Ultimate Multisite, si edhe shtesat, mund të regjistrojnë dhe do të regjistrojnë emaile të reja herë pas here.

Për të parandaluar konflikte dhe probleme të tjera, **ne nuk do t’i shtojmë automatikisht modelet e reja të emaileve si Emaile Sistemi në instalimin tuaj** , përveç nëse ato janë thelbësore për funksionimin e saktë të një veçorie të caktuar.

Megjithatë, super administratorët dhe agjentët mund t’i importojnë këto emaile të regjistruara rishtazi përmes mjetit të importuesit. Ky proces do të krijojë një email të ri sistemi me përmbajtjen dhe konfigurimin e modelit të ri të emailit, duke i lejuar super administratorit të bëjë çfarëdo modifikimesh që dëshiron ose t’i mbajë ashtu siç janë.

#### Si të importoni emailet e sistemit {#how-to-import-system-emails}

Shkoni te faqja juaj e Cilësimeve të Ultimate Multisite dhe kaloni te skeda **Emails**.

![Skeda Emails në cilësimet e Ultimate Multisite që shfaq seksionin System Emails](/img/config/settings-emails-tab.png)

Pastaj, në shiritin anësor, klikoni butonin **Customize System Emails**.

<!-- Pamja e ekranit e padisponueshme: Butoni Customize System Emails në panelin anësor System Emails -->

Në faqen System Emails, do të shihni butonin e veprimit **Reset & Import** në krye. Klikimi i atij butoni duhet të hapë dritaren modale të importimit dhe rivendosjes.

![Butoni i veprimit Reset or Import në faqen e administrimit System Emails](/img/admin/system-emails-reset-import.png)

Pastaj, mund të aktivizoni ose çaktivizoni opsionet Import Emails për të parë se cilat emaile sistemi janë të disponueshme për t’u importuar.

<!-- Screenshot unavailable: Modaliteti Reset and Import me opsionet Import Emails të zgjeruara -->

#### Rivendosja e email-eve të sistemit {#reseting-system-emails}

Herë të tjera, do të kuptoni se ndryshimet që keni bërë në një shabllon të caktuar email-i nuk po funksionojnë më për ju dhe dëshironi ta rivendosni në **gjendjen e tij të parazgjedhur**.

Në këto raste, keni dy opsione: thjesht mund ta fshini email-in e sistemit dhe ta importoni përsëri (duke përdorur udhëzimet më sipër) - gjë që do të fshijë metrikat e dërgimit dhe gjëra të tjera, çka e bën këtë metodë më pak të preferuar.

Ose mund të përdorni **tool-in Reset & Import** për ta rivendosur atë shabllon email-i.

Për të rivendosur një shabllon email-i, mund të ndiqni hapat më sipër derisa të arrini te tool-i Reset & Import dhe pastaj të aktivizoni opsionin **Reset** dhe të zgjidhni email-et që dëshironi t’i rivendosni në përmbajtjen e tyre të parazgjedhur.

<!-- Screenshot unavailable: Modaliteti Reset and Import me opsionet Reset Emails të zgjeruara -->
