---
title: Përditësim i një plani
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Përditësim i Planit (v2) {#upgrading-a-plan-v2}

_**SHËNJE E RËNDË: Ky artikull i referohet Ultimate Multisite version 2.x.**_

Klientët tuaj mund të ngrihin planin e tyre në çdo kohë. Ata mund të ngrihen në një plan tjetër ose të nisë ndonjë shërbim apo paketë shtesë që ofroni në rrjetin tuaj.

Në këtë tutorial do të shpjegojmë si ata mund të ngrihin planin e tyre dhe çfarë ndodh pas procesit të përditësimit.

Për të ngritur planin, klientët tuaj duhet të hyjnë në dashboard-in e tyre dhe të shkojnë te faqja **Account** (Llogaria).

![Dashboard i subsite-it të klientit me link menyshi Account i dukshëm](/img/account-page/account-menu.png)

Në faqen e Account, do t'i tregohet anëtarësia juaj aktuale dhe plani që i përket asaj. Për të ngritur në një plan tjetër, duhet të klikojnë te **Change** (Ndërro) në këndin e djathtë të sipërm të seksionit **Your Membership** (Anëtarësia Juaj).

![Faqja Account Karton e Anëtarësive Juaja me butonin Change](/img/account-page/membership-change-button.png)

Do të drejtohen te një formular pagese ku do të shfaqen të gjithë planat e disponueshme.

Ata gjithashtu do të mund të shohin **shërbimet dhe paketat e disponueshme për planin tuaj aktual**, në rast se dëshirojnë vetëm të nisë një shërbim ose paketë specifike (si p.sh. vizita të pa kufizuara apo hapësirë disku në shembullin tonë këtu), dhe jo të ngrihin planin.

![Zgjues i përditësimit që tregon planat dhe paketat e disponueshme nga sisi e klientit](/img/account-page/upgrade-picker.png)

Pas kur zgjedhin produktin që duan të nisë, do të shohin sa do të duhet të paguheni tani - duke përjashtuar çdo krediti ekzistues - dhe sa do të bëhet pagesa në datën e ardhshme të fakturimit.

Në përgjithësi, nëse produkti është një plan tjetër dhe pagesa do të bëhet midis një karaje anëtarësie, ju do të merrni një krediti për shumën e paguar në planin e parë.

![Upgrade payment summary showing credit applied and next billing amount](/img/account-page/upgrade-summary.png)

Nëse zgjedhni një plan ose paketë që nuk do të ndryshojë asgjë nga abonimi i aktual, ju do të shihni një mesazh që e shpjegon këtë.

![Shënim kur plani i zgjedhur nuk ndryshon abonimin](/img/account-page/upgrade-no-change.png)

Pas përfundimit të pagesës (checkout), produktet e reja do të shtojnë në llogarinë e klientëve tuaj dhe të gjitha kufizimet ose funksionet e produktit të ri do të vendosen menjëherë: vizitat, hapësira disku, postimet, etj...

##

##

## Rrugët për Ngritje dhe Ulje (Upgrade and Downgrade Paths) {#upgrade-and-downgrade-paths}

Në çdo produkt, ju do të keni një tab të quajtur **Up & Downgrades**. Opsioni i parë në atë tab është një fushë e quajtur **Plan Group**.

**Plan grupet** janë ajo që lejon Ultimate Multisite të dijë se disa plane i përkojnë të njëjtës "familje", dhe prandaj duhet të përdoren për të ndërtuar opsione rrugës së ngritjes/uljes.

![Tabi Up and Downgrades i produktit me fushën Plan Group](/img/config/product-upgrades-plan-group.png)

Për shembull, keni një **Plan të lirë (Free plan)**, një **Plan Bazë (Basic Plan)** dhe një **Plan Premium (Premium Plan)** në dispozicion. Ju dëshironi që përdoruesit e abonuar në **Planin e lirë** të mund të ngriten vetëm në **Planin Premium** dhe nuk dëshironi që ata të shohin "Planin Bazë" si opsion ngritjeje. Gjithçka që duhet bërt është të vendosni të njëjtin emër plan grupi për të dy plane, siç tregohet në skedarët më poshtë.

![Paguna e produktit Free Plan me plan grup High End të përcaktuar](/img/config/product-upgrades-free.png)

![Paguna e produktit Premium Plan me plan grup High End të përcaktuar](/img/config/product-upgrades-premium.png)

Kjo duhet t'i thotë Ultimate Multisite se ka një "familje" pakshish në rrjet që quhet **High End**. Kur ofroni përditësime ose zhveshje, vetëm pakshimet nga e njëjta familje do të paraqiten si opsion për përdoruesin.
