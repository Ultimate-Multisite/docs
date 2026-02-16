---
title: Paglipat mula sa V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Paglipat mula sa V1

## Lumipat na ang Ultimate Multisite mula sa orihinal na 1.x na serye ng mga release patungo sa 2.x na serye ng mga release.

Ang Ultimate Multisite bersyon 2.0 pataas ay isang kumpletong pag-rewrite ng codebase, ibig sabihin ay halos walang pagkakapareho ang lumang bersyon at ang bago. Dahil dito, kapag nag-upgrade ka mula sa 1.x patungo sa 2.x, kailangan i-migrate ang iyong data sa isang format na maiintindihan ng mga bagong bersyon.

Mabuti na lang, ang Ultimate Multisite 2.0+ ay **may kasamang migrator** na bahagi ng core na kayang mag-detect ng data mula sa lumang bersyon at i-convert ito sa bagong format. Nangyayari ang migration na ito sa panahon ng **Setup Wizard** ng bersyon 2.0+.

Tatalakayin sa lesson na ito kung paano gumagana ang migrator, ano ang gagawin kung may problema, at paano i-troubleshoot ang mga isyu na maaaring lumabas sa prosesong ito.

_**MAHALAGA: Bago ka mag-upgrade mula sa bersyon 1.x patungo sa bersyon 2.0, siguraduhing gumawa ka ng backup ng database ng iyong site**_

## Mga unang hakbang

Ang unang hakbang ay i-download ang plugin .zip file at i-install ang bersyon 2.0 sa iyong network admin dashboard.

Pagkatapos mong [i-install at i-activate ang bersyon 2.0](../getting-started/installing-ultimate-multisite.md), awtomatikong made-detect ng system na gumagamit ng legacy version ang iyong Multisite at makikita mo ang mensaheng ito sa itaas ng plugin page.

_**PAALALA:** Kung naka-install ang Ultimate Multisite 1.x sa iyong Multisite, magkakaroon ka ng opsyon na palitan ang plugin ng bersyon na kaka-download mo lang. Sige lang at i-click ang **Replace current with uploaded**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

Ang susunod na page ay magpapakita kung anong mga legacy add-on ang naka-install kasama ng bersyon 1.x. Maglalaman ito ng mga tagubilin kung ang bersyon na ginagamit mo ay compatible sa bersyon 2.0 o kung kailangan mong mag-install ng upgraded na bersyon ng add-on pagkatapos ng migration.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Kapag handa ka nang magpatuloy, i-click mo ang button na nagsasabing **Visit the Installer to finish the upgrade**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Dadalhin ka nito sa page ng installation wizard na may mga welcome message. I-click mo lang ang **Get Started** para pumunta sa susunod na page.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Pagkatapos i-click ang **Get Started**, ire-redirect ka sa Pre-install Checks_._ Ipapakita nito ang iyong System Information at WordPress installation at sasabihin kung natutugunan nito ang **mga requirements ng Ultimate Multisite**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Ang susunod na hakbang ay ilagay ang iyong Ultimate Multisite license key at i-activate ang plugin. Sisiguraduhin nito na lahat ng features, kasama ang mga add-on, ay magiging available sa iyong site.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Pagkatapos ilagay ang iyong key, i-click ang **Agree & Activate**.

Pagkatapos ng license activation, maaari mo nang simulan ang aktwal na installation sa pamamagitan ng pag-click sa **Install** sa susunod na page. Awtomatiko nitong gagawin ang mga kinakailangang files at database para gumana ang bersyon 2.0.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## Ngayon, ang migration

May built-in na safety feature ang migrator kung saan susuriin nito ang iyong buong multisite para siguraduhing lahat ng iyong Ultimate Multisite data ay maaaring i-migrate nang walang problema. I-click ang **Run Check** button para simulan ang proseso.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

Pagkatapos patakbuhin ang check, may dalawang posibleng mangyari: ang resulta ay maaaring **may** error o **walang error**.

### May Error

Kung makakuha ka ng error message, kailangan mong makipag-ugnayan sa aming support team para matulungan ka nilang ayusin ang error. Siguraduhing **ibigay mo ang error log** kapag gumawa ka ng ticket. Maaari mong i-download ang log o i-click ang link na nagsasabing contact our support team. Magbubukas ito ng help widget sa kanang bahagi ng iyong page na may mga field na puno na para sa iyo, kasama ang error logs sa ilalim ng description.

_**Dahil nakakita ng error ang system, hindi ka makakapagpatuloy sa pag-migrate sa bersyon 2.0. Maaari mong i-roll back sa bersyon 1.x para patuloy na patakbuhin ang iyong network hanggang maayos ang error.**_

### Walang Error

Kung walang makitang error ang system, makakakita ka ng success message at isang **Migrate** button sa ibaba na magpapahintulot sa iyong magpatuloy sa migration. Sa page na ito, ipapaalala sa iyo na gumawa ng backup ng iyong database bago magpatuloy, na lubos naming inirerekomenda. I-click ang **Migrate** kung mayroon ka nang backup.

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

At iyan lang ang kailangan!

Maaari kang magpatuloy sa Wizard setup para i-update ang iyong logo at iba pang mga bagay sa iyong network o simulan nang i-navigate ang Ultimate Multisite bersyon 2.0 menu at ang bagong interface nito. Sige at mag-enjoy.
