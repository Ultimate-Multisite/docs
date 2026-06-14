---
title: Paglipat mula sa V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Paglipat mula sa V1

## Lumipat ang Ultimate Multisite mula sa orihinal nitong 1.x family ng mga release patungo sa 2.x family ng mga release.

Ang Ultimate Multisite version 2.0 at pataas ay isang kumpletong muling pagsulat (complete rewrite) ng codebase, ibig sabihin, halos wala nang magkakapareho ang lumang bersyon at ang bago. Dahil dito, kapag nag-upgrade ka mula sa 1.x patungong 2.x, kailangan mong ilipat ang iyong data sa format na maiintindihan ng mga bagong bersyon.

Sa kabutihang palad, ang Ultimate Multisite 2.0+ ay **may kasamang migrator** na nakabuo sa core nito na kayang tumukoy ng data mula sa lumang bersyon at i-convert ito sa bagong format. Ang paglipat na ito ay nangyayari habang ginagawa mo ang **Setup Wizard** ng version 2.0+.

Ang araling ito ay tatalakayin kung paano gumagana ang migrator, kung ano ang gagawin kapag nagkaroon ng problema (failure), at kung paano mag-troubleshoot ng mga isyu na maaaring lumitaw sa prosesong ito.

_**MAHALAGA: Bago ka magsimulang mag-upgrade mula version 1.x patungong version 2.0, siguraduhin mong gumawa ng backup ng database ng iyong site**_

## Mga Unang Hakbang

Ang unang hakbang ay i-download ang plugin .zip file at i-install ang version 2.0 sa dashboard ng network admin mo.

Pagkatapos mong [i-install at i-activate ang version 2.0](../getting-started/installing-ultimate-multisite.md), awtomatikong matutukoy ng system na tumatakbo ang iyong Multisite sa legacy version, at makikita mo ang mensaheng ito sa itaas ng plugin page.

_**PAUNAWA:** Kung mayroon kang Ultimate Multisite 1.x na naka-install sa iyong Multisite, magkakaroon ka ng opsyon na palitan ang plugin gamit ang bersyong kakatuklasin mo. Pakisundan at i-click ang **Replace current with uploaded**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

Ang susunod na pahina ay magpapakita sa iyo kung anong mga legacy add-on ang naka-install mo kasama ng bersyon 1.x. Magbibigay din ito ng mga tagubilin kung ang bersyong ginagamit mo ba ay compatible sa bersyon 2.0 o kung kailangan mo pang mag-install ng mas updated na bersyon ng add-on pagkatapos ng migration.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Kapag handa ka nang magpatuloy, maaari mong i-click ang button na nagsasabing **Visit the Installer para tapusin ang upgrade**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Doon ka na rin dadalhin sa installation wizard page na may mga welcome messages. Kailangan mo lang i-click ang **Get Started** para lumipat sa susunod na pahina.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Pagkatapos mag-click ng **Get Started**, ire-redirect ka nito sa Pre-install Checks_._ Ipinapakita nito sa iyo ang iyong System Information at WordPress installation at sasabihin kung nakakatugma ba ito sa mga kinakailangan ng **Ultimate Multisite**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Ang susunod na hakbang ay ilagay ang iyong Ultimate Multisite license key at i-activate ang plugin. Titiyakin nito na lahat ng features, kasama ang add-ons, ay magagamit sa iyong site.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Pagkatapos mong ilagay ang iyong key, i-click ang **Agree & Activate**.

Matapos ma-activate ang lisensya, maaari ka nang magsimula sa aktwal na installation sa pamamagitan ng pag-click sa **Install** sa susunod na pahina. Awtomatikong gagawin nito ang mga kinakailangang files at database para gumana ang bersyon 2.0.

## Ngayon, ang migration

May built-in na safety feature ang migrator na magche-check sa buong multisite mo para masiguradong lahat ng data ng Ultimate Multisite mo ay maililipat nang walang problema. I-click ang **Run Check** button para simulan ang proseso.

Pagkatapos mong patakbuhin ang check, may dalawang posibilidad ka: ang resulta ay maaaring **may error** o **walang error**.

### May Error

Kung makakuha ka ng mensahe ng error, kailangan mong makipag-ugnayan sa aming support team para matulungan ka nilang ayusin ang error. Siguraduhin na **magbigay ka ng error log** kapag gumagawa ka ng ticket. Maaari mong i-download ang log o i-click ang link na nagsasabing contact our support team. Magbubukas ito ng help widget sa kanang bahagi ng iyong page na may mga fields na naka-populate na para sa iyo, kabilang ang error logs sa ilalim ng description.

_**Dahil nakakita ang sistema ng error, hindi ka makakapag-proceed sa migration patungong version 2.0. Maaari kang mag-roll back sa version 1.x para maipagpapatuloy mo ang pagpapatakbo ng iyong network hanggang maayos ang error.**_

### Walang Error

Kung hindi nakakita ng system na may error, makikita mo ang success message at isang **Migrate** button sa ibaba na magpapahintulot sa iyo na ituloy ang migration. Sa pahinang ito, maaalaala ka na gumawa ng backup ng iyong database bago magpatuloy, na lubos naming inirerekomenda. Pindutin ang **Migrate** kung mayroon ka nang backup.

At iyan lang!

Maaari kang magpatuloy sa paggamit ng Wizard setup para ma-update ang iyong logo at iba pang bagay sa network mo, o maaari ka ring magsimula na lumikha ng sarili mong adventure sa Ultimate Multisite version 2.0 menu at sa bagong interface nito. Go ahead and have some fun!
