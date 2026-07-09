---
title: Paguna e Llogarisë së Klientit
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Faqja e Llogarisë së Klientit (v2) {#your-clients-account-page-v2}

_**SHËNJE E RËNDË: Ky artikull i referohet Ultimate Multisite version 2.x.**_

Kur klientët abonojnë një plan në rrjetin tuaj, ata kanë akses në një faqe interneti dhe dashboard-in e saj me informacion të rëndësishëm lidhur me pagesat, anëtarësimet, domenët, kufizimet e planit, etj...

Në këtë tutorial, ju do t'ju udhëzoni përmes faqes së llogarisë së klientit dhe do të shihni se çfarë mund të bëjnë klientët brenda saj.

## Faqja e Llogarisë {#the-account-page}

Faqja e llogarisë mund të akseshohet duke klikuar në **Account** (Llogari) brenda dashboard-it të klientit tuaj.

![Menyja e llogarisë në dashboard-in e klientit](/img/account-page/account-menu.png)

Në rrjetet me tenant sovran, Ultimate Multisite v2.13.0 mban këtë përvojë menaxhimi të klientëve në faqe kryesore. Nëse një klient hap llogarinë, checkout (dhënia), faturimin, fakturën, menaxhimin e faqes, ndryshimin e template-ve ose mapimit të domenit nga një tenant sovran, veprimet kthehen në panelin kryesor të klientit të rrjetit, kështu që regjistrat e faturimit dhe anëtarësimit të rrjetit ruhen si autoritative.

Kur klienti vjen nga një tenant sovran, paneli i klientit të faqes kryesore mund të përfshijë një link kthimi në faqe të tenantit. Linku i kthimit shfaqet vetëm kur Ultimate Multisite mund të vërtetojë që synimi i kthimit është një nga faqet e klientit, gjë që pengon redaktimet arbitrarily (pa arsye) duke ruajtur ndarjen e punës së tenantit.

![Përmbledhje e faqes së llogarisë së klientit](/img/account-page/overview.png)

Pas kur klienti klikon, ata do të shohin një përmbledhje të anëtarësimit të tyre, adresës së faturimit, fakturave, domenëve, kufizimeve të faqes dhe gjithashtu do të mund të ndryshojnë **Site Template** (Template-n e Faqes) (nëse është i lejuar në rrjetin tuaj).

Ata mund të ndryshojnë edhe anëtarësimin në një plan tjetër, ose të blin një paketë apo shërbim tjetër që ofroni. Le të shikojmë secilën seksion posaçërisht.

### Përmbledhja e Aplikimit Tuaj: {#your-membership-overview}

Bloku i parë poshtë emrit të faqes së klientëve tona tregon një përmbledhje të planit dhe shërbimeve/paketave që janë blerë me atë. Bloku gjithashtu tregon numrin e aplikimit, shumën fillestare e paguar për të, sa kushton plani dhe çdo shërbim/paketë dhe sa herë është llogaritur (billed) për këtë aplikim. Ata mund të shohin edhe nëse aplikimi është **I Aktiv** , **I Skaduar** ose **I Ndaluar**.

![Përmbledhja e aplikimit që tregon planin, shumën dhe detajet e llogaridhënies](/img/account-page/membership-card.png)

Poshtë këtij bloku, klientët mund të shohin blokat **Rreth Kësaj Faqeje** (About This Site) dhe **Limitet e Faqes** (Site Limits). Këto bloka tregojnë të gjitha kufizimet që vijnë me planin tuaj: hapësira disku, postimet, faqet, vizitat, etj... Këto kufizime mund të konfigurohen në çdo faqe plani në **Ultimate Multisite > Products**.

![Bloket Rreth Kësaj Faqeje dhe Limitet e Faqes që tregojnë kufizimet e planit](/img/account-page/site-limits.png)

Nën anën e djathtë të **Aplikimit Tuaj**, klientët mund të klikojnë në **Ndërrim** (Change). Kjo do t'u shfaqë të gjitha planet dhe paketat/shërbimet e disponueshme. Nëse zgjedhni një plan tjetër, kufizimet për atë plan do të marrin vend në vend të kufizimeve të aplikimit aktual - nuk ka rëndësi nëse po ndryshoni (downgrade) apo ngriheni (upgrade).

Tani, nëse klientët zgjedhin të bllojnë paketa ose shërbime për këtë aplikim aktual - si më shumë hapësirë disku ose vizita - aplikimi aktual nuk do të ndryhet, por vetëm paketat e reja do të shtojnë tek ai.

Vëreni se kodet kuponi nuk mund të shtojnë në faqen e ndryshimit të aplikimit këtij moment. Nëse klienti ka përdorur një kod kuponi në blerjen e parë të aplikimit, kodi do të aparë edhe për këtë aplikim të ri.

### Përditësimi i Adresës së Llogarisë: {#updating-the-billing-address}

N në faqen e kontos, klientët mund të përditësojnë edhe adresën e fakturimit. Ata thjesht duhet të klikojnë në **Update** pranë _Billing Address_.

![Billing Address section with Update button](/img/account-page/billing-address.png)

Do të hapet një dritare e re për klientin tuaj. Gjithçka që duhet të bëni është të plotësoni adresën e re dhe të klikoni në _Save Changes_.

![Update billing address form](/img/account-page/billing-address-form.png)

### Ndryshimi i Shkemit të Saktë (Site Template): {#changing-the-site-template}

Për të lejuar klientët tuaj të ndryshojnë shkemet e tyre të saj, duhet të shkoni te **Ultimate Multisite > Settings > Sites** dhe të aktivizoni opsionin **Allow Template Switching**.

Gjithashtu, në **Ultimate Multisite > Products**, zgjidhni planet tuaj dhe shkoni te tab-i **Site Templates**. Sigurohuni që opsioni **Allow Site Templates** të jetë i aktivizuar dhe në **Site Template Selection Mode**, opsioni **Choose Available Site Templates** duhet të jetë i zgjedhur.

![Product site templates tab with template selection mode](/img/config/product-site-templates.png)

Do të mund të shihni të gjitha shkemet e disponueshme të saj në faqe internetin tuaj. Zgjidhni cilat dëshironi të bëni të disponueshme dhe cilat nuk dëshironi që klientët që janë të abonuar me këtë plan të kenë akses. Vëreni se këto opsione ndikojnë edhe në formularin e checkout-it, kështu që çdo shkemat i zgjedhur si **Not Available** nuk do të duket në faqen e regjistrimit për këtë plan.

Tani klientët tuaj mund të klikojnë në **Change Site Template** brenda faqes së kontos së tyre.

![Change Site Template button on account page](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 tregon një panel të ri për ndryshimin e shkemit. Paneli fillon me një **current-template card** (kartë e shkemit aktual) që klientët mund të shohin cilin shkemat është aktiv para se të zgjedhin një zëvendësim.

Një rrjetë e qëndrueshme e shablloneve të disponueshme të saj mbetet e dukshme ndërsa klientët vëzhgojnë opsionet e tyre. Kjo i ndihmon ata të krahasojnë shabllonet e lejuara për planin tuaj pa humbur pamjen e zgjedhjes aktuale.

![Lista e shablloneve të disponueshme të saj për planin](/img/config/site-templates-list.png)

Pas se zgjedhin atë që dëshironi të ndryshoni, do t'ju kërkohet të konfirmojënditë ndryshimin.

![Dialog konfirmimi i ndryshimit të shabllonit të saj](/img/account-page/template-switch-confirm.png)

Pas se aktivizoni konfirmimin dhe klikoni në **Process Switch** (Procesi i Ndryshimit), shablloni i ri do të përdoret në faquin e klientit tuaj.

Klientët gjithashtu mund të përdorin **Reset current template** (Rikthesh shabllonin aktual) nga ky panel kur duhet të rikthejnë faqen te shablloni i caktuar aktualisht. Si ndryshimi në një shabllon tjetër, rikuptimi i një shablloni mund të sovrasojë përmbajtjen e faquin; kështu që klientët duhet ta konfirmojnë vetëm kur kuptojnë veprimin e rikthimit.

### Shtimi i Domenive Tuarë (Custom Domains): {#adding-custom-domains}

Klientët tuaj do të kenë gjithashtu opsionin për të shtuar një domen tjetër personal për këtë plan në faqen e tyre të llogarisë. Për të lejuar klientët tuaj të përdorin domenime tuaja, shkoni te **Ultimate Multisite > Settings > Domain Mapping** (Mapele Domenet).

Aktivizoni opsionin **Enable Domain Mapping** (Aktivizo Mapelimin e Domenive). Kjo do t'i lejojë klientët tuaj të përdorin domenime personale në nivel rrjeti.

Mos harroni të kontrolloni gjithashtu nëse mapelimi i domenve është i aktivizuar bazuar në produkt – sepse mund ta kufizoni një produkt që nuk lejon klientëve tuaj të përdorin domenime personale.

Shkoni te **Ultimate Multisite > Products** (Produkte). Zgjidhni planin tuaj dhe shkoni te tab-i **Custom Domains** (Domenet Tuarë). Aktivizoni opsionin **Allow Custom Domains** (Lejo Domenime Tuarë).

![Tabi i Domenive Tuarë me ndërrim të Allow Custom Domains](/img/config/product-custom-domains.png)

Kjo do le leju të gjithë klientët që janë abonentë të kësaj plane t'u mundojnë të përdorin domene të personalizuara. Tani, në faqen e Kontos (Account page), klientët tu mund të shtojnë një domen të personalizuar duke klikuar te **Add Domain**.

![Butoni Add Domain në faqen e kontos](/img/account-page/add-domain-button.png)

Vindaja e parë që hapet do t'u tregojë klientëve tu një mesazh që i udhëzoi se si të përditësojnë regjistrat DNS për të bërë të funksionojë ky domen i personalizuar në rrjetin tuaj.

![Instruccionalet e DNS-it treguara kur shtoni një domen të personalizuar](/img/account-page/add-domain-dns.png)

Ky mesazh mund të redaktohet (nga ju) në **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Konfigurimi i settings së Add New Domain Instructions në Domain Mapping](/img/config/settings-domain-mapping.png)

Këtu është një pamje e plotë e faqes së konfigurimit të maperimit të domenve (domain mapping):

![Faqja e plotë e konfigurimit të maperimit të domenve](/img/config/settings-domain-mapping-full.png)

Pas klikimit te **Next Step**, klientët tu mund të shtojnë emrin e domeneve të tyre të personalizuara dhe të zgjedhin nëse ky domen i personalizuar do të jetë i parë (primary). Vëreni se klientët tu mund të përdorin më shumë se një domen të personalizuar për faqeve të tyre, kështu që mund të zgjedhin cilin do të jetë i parë.

![Hyrja e emrit të domeneve të personalizuara me opsionin e domeneve primare](/img/account-page/add-domain-primary.png)

Pas klikimit te **Add Domain**, domeni do të shtohet në konton e klientit tuaj. Të gjitha që duhet të bëni tani është të ndryshoni regjistrat DNS të këtij domeni të personalizuar tek registri i domenit (domain registrar) i tyre.

### Ndryshimi i Fjalëkalimit: {#changing-password}

Brenda dashboard-it të kontos, klientët tu gjithashtu mund të ndryshojnë fjalëkalimin duke klikuar te **Change Password**.

![Butoni Change Password në faqen e kontos](/img/account-page/change-password-button.png)

Kjo do tregon një dritare të re ku klientët do të duhet të plotësojnë fjalëkalimin e tyre aktual dhe më pas fjalën e re që dëshirojnë të përdorin.

![Forma e ndryshimit të fjalëkalimit me fushat për fjalën e vjetër dhe fjalën e re](/img/account-page/change-password-form.png)

### Zonë e Rrezikut: {#danger-zone}

Kemi edhe dy opsione që janë të tregues në pjesën **Danger Zone**: **Fshi Siti** dhe **Fshi Llogarinë**. Këto dy veprime janë në zonën e rrezikut sepse këto dy veprime nuk mund të kthehen. Nëse klientët fshin faqen e tyre të internetit ose llogarinë, ata nuk mund ta kthejnë ato prapa.

![Zona e Rrezikut me opsionet Fshi Siti dhe Fshi Llogarinë](/img/account-page/danger-zone.png)

Nëse klientët klikojnë në ndonjë nga këto dy opsione, do t'u shfaqet një dritare ku duhet të aktivizojnë opsionin për heqjen e faqes së internetit ose llogarisë dhe do t'u paralajmërohen se ky veprim nuk mund ta kthehet.

![Dialog konfirmimi i fshirjes së situsës](/img/account-page/delete-site-confirm.png)

![Dialog konfirmimi i fshirjes së llogarisë](/img/account-page/delete-account-confirm.png)

Nëse ata fshin faqen e tyre të internetit, llogaria dhe anëtarësia e tyre do të mbeten pa ndryshuar. Ata thjesht do humbasin të gjithë përmbajtjen në faquin e tyre. Nëse fshin llogarinë, do humbasin të gjitha faqet e internetit, anëtarësitë dhe informacionin që lidhet me këtë llogari.
