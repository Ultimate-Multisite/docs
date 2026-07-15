---
title: Paglipat gikan sa V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migrating gikan sa V1

## Ang Ultimate Multisite nag-usab na gikan sa iyang orihinal nga 1.x family sa mga release ngadto sa 2.x family sa mga release. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ang Ultimate Multisite version 2.0 ug pataas usa ka kompleto nga pag-rewrite sa codebase, ang pasabot kay gamay ra gyud ang magka-share tali sa daan nga bersyon ug sa bag-ong bersyon. Tungod niini, kung mag-upgrade ka gikan sa 1.x ngadto sa 2.x, kinahanglan nimo i-migrate ang imong data ngadto sa format nga masabtanon sa mga bag-ong bersyon.

Malipayon nga, ang Ultimate Multisite 2.0+ **may kasaligan (migrator)** nga gi-build na sa core nga makadiskubre sa data gikan sa daan nga bersyon ug mahimong i-convert kini ngadto sa bag-ong format. Kini nga pag-migrate mahitabo atol sa **Setup Wizard** sa version 2.0+.

Kini nga lesson naghisgot kung unsaon pagtrabaho ang migrator, unsa ang buhaton kung adunay kapakyasan, ug unsaon pag-troubleshoot sa mga problema nga mahimong mosulod niining proseso.

_**MAHINUNGDAN: Sa dili pa ka magsugod sa pag-upgrade gikan sa version 1.x ngadto sa version 2.0 palihog siguroa nga naghimo ka og backup sa database sa imong site**_

## Unang mga lakang {#first-steps}

Ang unang lakang mao ang pag-download sa plugin .zip file ug pag-install sa version 2.0 sa imong network admin dashboard.

Human nimo [i-install ug i-activate ang version 2.0](../getting-started/installing-ultimate-multisite.md), awtomatikong madiskubre sa sistema nga ang imong Multisite nag-run sa legacy version ug makakita ka niining mensahe sa ibabaw sa plugin page.

_**PAHINUMANG: Kung naa kay Ultimate Multisite 1.x nga gi-install sa imong Multisite, adunay opsyon kang mapulihan sa plugin gamit ang bersyon nga imong gi-download. Palihog, padayon ug i-click aron **Replace current with uploaded**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

Ang sunod nga pahina magpakita kanimo kung unsa ang mga legacy add-ons nga imong gi-install uban sa bersyon 1.x. Maghatag kini og mga instruksyon kung ang bersyon nga imong gigamit compatible ba sa bersyon 2.0 o kung kinahanglan nimo i-install ang upgraded version sa add-on human sa migration.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Kung andam ka na magpadayon, pwede nimong i-click ang button nga nag-ingon og **Visit the Installer to finish the upgrade**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Dunay dad-on kini kanimo sa installation wizard page uban ang pipila ka welcome messages. Kinahanglan lang nimo i-click ang **Get Started** para molihok sa sunod nga pahina.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Human sa pag-click og **Get Started**, dad-on kini kanimo sa Pre-install Checks_._ Gipakita ni ang System Information ug WordPress installation nimo ug isulti kung nakatubag ba kini sa mga requirement sa **Ultimate Multisite**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Ang sunod nga lakang mao ang pag-type sa imong Ultimate Multisite license key ug pag-activate sa plugin. Kini mosiguro nga tanan nga features, lakip na ang add-ons, magamit sa imong site.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Human sa pagbutang sa imong key, i-click ang **Agree & Activate**.

Human ma-activate ang lisensya, pwede ka na magsugod sa aktuwal nga installation pinaagi sa pag-click og **Install** sa sunod nga pahina. Kini awtomatikong maghimo sa mga kinahanglanon nga files ug database nga gikinahanglan para molihok ang bersyon 2.0.

## Karon, ang migration {#now-the-migration}

Ang migrator naa'y built-in nga safety feature diin i-check ni nimo ang tibuok multisite para masiguro nga mahimong ma-migrate tanan nimong Ultimate Multisite data nga walay problema. I-click ang **Run Check** button para magsugod sa proseso.

Pagkahuman sa pag-run sa check, naa kay duha ka posibilidad: ang resulta pwede **naa'y error** o **walay error**.

### Naa'y Error {#with-error}

Kung makakuha ka og mensahe nga adunay error, kinahanglan nimo nga kontaka ang among support team para matabangan sila nimo sa pag-ayo sa error. Siguraduhon nga **maghatag ka og error log** kung maghimo ka og ticket. Mahimo nimong i-download ang log o i-click ang link nga nag-ingon "contact our support team". Magbukas kini og help widget sa tuo nga bahin sa imong page nga na-prepopulate na para nimo, nga naglakip sa error logs ubos sa description.

_**Tungod kay nakit-an sa sistema ang error, dili ka makapadayon sa pag-migrate ngadto sa version 2.0. Mahimo nimong i-roll back pa ngadto sa version 1.x para magpadayon sa pag-run sa imong network hangtod nga maayo na ang error.**_

### Walay Error {#without-error}

Kung wala makit-an sa sistema ang bisan unsang error, makakita ka og success message ug usa ka **Migrate** button sa ubos nga magtugot kanimo sa pagpadayon sa migration. Sa pahinong niini, imong mahinumdohan nga maghimo og backup sa imong database sa dili pa molihok, nga among gipaka-rekomenda. I-hit ang **Migrate** kung naa ka na'y backup.

Ug mao na lang 'na!

Pwede ka magpadayon sa pag-run sa Wizard setup para i-update ang imong logo ug uban pa sa imong network, o pwede na pud magsugod sa pag-navigate sa imong Ultimate Multisite version 2.0 menu ug sa bag-ong interface niini. Padayon lang ug maglingaw!
