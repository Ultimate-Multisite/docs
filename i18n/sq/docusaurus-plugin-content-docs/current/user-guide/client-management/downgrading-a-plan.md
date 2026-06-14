---
title: Zgjidhja e një planit në vijim
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Downgradhja një plan (v2)

_**SHËNJSË E RËNDË: Ky artikull i referohet Ultimate Multisite version 2.x.**_

Downgradhja e një plani ose abonimi është një veprim i zakonshëm që klientët tuaj mund të bëjnë nëse kanë buxhet të kufizuar ose vendoset se nuk do të keni nevojë për shumë burime për të menaxhu subsite-in e tyre.

## Si të downgradhoni një plan

Klientët mund të downgradhrojnë planin çdo kohë duke hyrë në dashboardin e adminit të subsite-it të tyre dhe duke klikuar **Change** (Ndrysho) në seksionin e llogarisë.

![Paga e llogarisë me Kartën tuaj të anëtarisë dhe butonin Ndrysho](/img/account-page/membership-change-button.png)

Pas klikimit te butoni **Change**, përdoruesi/klienti do të drejtohet në faqen e pagesës së pagesës (checkout page) ku mund të zgjedhë planin që dëshironi të ndryshoni abonimin tuaj.

![Faqja me opsionet e planit për downgradhje nga pala e klientit](/img/account-page/downgrade-picker.png)

Në këtë shembull, ne po downgradhoni planin nga **Premium** në **Free**.

Për të vazhduar, përdoruesi thjesht duhet të klikojë butonin **Complete Checkout** (Përfundoni Pagesën e Pagesës). Ajo më pas do t'i kthejë te faqja e llogarisë duke treguar një mesazh rreth ndryshimit të nëndetjes për anëtarin. Ndryshimet do të hynë në fuqi gjatë **cyklit të ardhshëm të pagesës** të klientit.

![Paga e llogarisë që tregon bannernd ndryshimi të nëndetjes të merrufes](/img/account-page/pending-change.png)

### Çfarë ndodh kur një përdorues downgradhoni planin e tij

Është e rëndësishme të vërehet se downgradhja e planit nuk ndryshon konfiguratën ekzistuese në subsite-in e përdoruesit.

Ajo nuk ndryshon automatikisht shablonin e faqes (site template) sepse ndryshimi i shablonit të faqes do të fshijë dhe rikuperojë plotësisht subsite-in. Kjo është për të shmangur humbjen e panevojshme të të dhënave. Prandaj hapësira disku, temat (themes), pluginet etj do të mbeten të integruar, përveç postrave.

Kemi kuptuar se shqetesa kryesore ju është kufizimet dhe quota që vendosni nën çdo plan, por duhet të marrim parasysh dëmin që mund të shkaktojë përdoruesit subsite-s kur fshim ose ndryshojim ndonjë konfigurim të tij.

Për postimet që tejkalojnë kufirin e vendosur në plan, keni 3 opsione: **Ruani postimet si janë** *,* **Lani postimet në lëndë** *,* ose **Lani postimet në draft** *. Kjo mund ta konfigurosh nësemente të Ultimate Multisite.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### Çfarë ndodh me pagesën

Në versionin 2.0, nuk kërkon më asnjë rregullim në pagesë në lidhje me proration (ndarja e pagës).

Kjo është sepse sistemi do të presë që anëtariteti ekzistues të **përfundojë ciklin e tij të pagesës para se** plani/anëtariteti i ri të hyn në fuqi. Shuma e re e pagesës për anëtaritetin e ri do të aplikohet dhe do të chargesh automatikisht në ciklin tjetër të pagesës.
