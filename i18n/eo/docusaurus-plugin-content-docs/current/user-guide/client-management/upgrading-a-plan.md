---
title: Plano modernigo
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Plan Aktualizari (v2) {#upgrading-a-plan-v2}

_**IMPORTANTE NOTA: Ĉi tiu artikolo referas al Ultimate Multisite versio 2.x.**_

Via klientoj povas aktualizi ilian planiron ĉiam. Ili povas aŭ aktualizi al alia planiro aŭ aĉeti iu ajn pliajn servojn aŭ paketojn, kiujn vi oferas sur via reron.

En ĉi tiu tutoro ni esploros, kiel ili povas aktualizi sian planiron kaj kio okazas post la aktualizigo proceso.

Por aktualizi ilian planiron, via klientoj devas akcesi al sia dashboardo kaj iri al la paĝo **Account** (Kontkonto).

![Klient subsite dashboard kun linko al menuan Account](/img/account-page/account-menu.png)

Sur la paĝo Account ili wirdos montri sian nunan membrespon kaj la planiron, kiun ĝi asocias. Por aktualizi al alia planiro, ili devas kliki sur **Change** (Mangi) en la malalta destra de la seksio **Your Membership** (Via Membro).

![Paĝo Account Via Membership karto kun butono Change](/img/account-page/membership-change-button.png)

Ili wirdos redirekti al formo de pagado kie ĉiuj disponibles planiro montriĝos.

Ili ankaŭ povas vidi la **servojn kaj paketojn, kiuj estas disponibles por ilia nunan planiro**, en kazo se ili volas nur aĉeti specifan servon aŭ paketon (tiel kiel nefinita vizitoj aŭ diskaj espacios en nia ekzemplo ĉi tie), kaj ne aktualizi la planiron.

![Upgrade picker montranta disponibles planiro kaj paketojn de la kliento](/img/account-page/upgrade-picker.png)

Post kiam ili elektas la produkton, kiun ili volas aĉeti, ili vidos, kuaj montoj ili bezonas pagui nun – ekskludante ĉilian krediton – kaj kuaj montoj ili wirdus plati al la sekva fakturdata.

Normalaj bone, se la produkto estas alia planiro kaj la pagado farit inter membrigo-fakturoj, ili ricevas krediton por la monton pagita sur la unua planiro.

![Upgrade payment summary showing credit applied and next billing amount](/img/account-page/upgrade-summary.png)

Se ili sila një plan ose paketë që nuk do të ndryshojë asgjë nga abonimi aktual, ata do të shohin një mesazh që i shpjegon këtë.

![Shënim kur plani i zgjedhur nuk ndryshon abonimin](/img/account-page/upgrade-no-change.png)

Pas përfundimit të pagesës, produktet e reja do të shtojnë në llogaritjen e klientëve tuaj dhe të gjitha kufizimet ose veçoritë e produktit të ri do të shtohen menjëherë atij: vizitat, hapësira disk, postimet, etj...

##

## Rrugët për Ngritje dhe Ulje (Upgrade and Downgrade Paths) {#upgrade-and-downgrade-paths}

Në çdo produkti, do të keni një tab **Up & Downgrades**. Opsioni i parë në atë tab është një fushë e quajtur **Plan Group**.

**Plan grupet** janë ajo që ju lejon t'i thoni Ultimate Multisite se disa plane i përkasin të njëjtës "familje", dhe prandaj duhet të përdoren për të ndërtuar opsione rrugës së ngritjes/uljes.

![Tabi i redaktimit të produktit Up and Downgrades me fushën Plan Group](/img/config/product-upgrades-plan-group.png)

Për shembull, keni një **Plan të Lirë (Free plan)**, një **Plan Bazik (Basic Plan)** dhe një **Plan Premium (Premium Plan)** në dispozicion. Dëshironi që përdoruesit e abonuar në **Planin e Lirë** të mund të ngriten vetëm në **Planin Premium** dhe nuk dëshironi që ata të shohin "Planin Bazik" si opsion ngritjeje. Gjithçka që duhet bëni është t'i dhani të njëjtin emër plan grupi për të dy plane, siç tregohet në skenat e mëposhtme.

![Karta produkti Free Plan me plan grup High End i asignuar](/img/config/product-upgrades-free.png)

![Karta produkti Premium Plan me plan grup High End i asignuar](/img/config/product-upgrades-premium.png)

Ĉi tio devobligas informi la Ultima Multistado pri la "familio" de planekonstrua en la ramo: **Alta Nivelo** (High End). Kiam vi ofertas ŝanĝon aŭ submendon, nur planekonstruoj el la samej familio venos prezentata kiel opcio por la uzanto.
