---
title: Ho lula ho a tloha ka V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Ho fihla ho V1 lo {#migrating-from-v1}

## Ultimate Multisite e ile a fetileng ho tsela la 2.x. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite le version 2.0 le lefetse ka re-write (re-code) lehle, e ne e le ntlha sefalo sa 1.x. Ho feta ho tsela la 1.x ho 2.x, data ea hau e hloka e fetolwa ka fomat e le botse a lebotse ka version e ntlha.

Ho bohloko, Ultimate Multisite 2.0+ **e na migrator** (migrator) e fetileng ka core e ntse e ba nang le bohlokoa ho hlalosa data ea version e ntlha le e fetola ka fomat e ntlha. Ho feta ke tlaqofela ka **Setup Wizard** ea version 2.0+.

Lekgetlo ena e tla re bontša hore na migrator e ba etse, eng e tla ba le ho etsa ha e le sefetse, le ho hlalosa matlhaloso a tsela la hau.

_**BOHLOKO: Ho feta ka version 1.x ho version 2.0, ho hloka ho fetola backup ea database ea hau**_

## Setso sa ho fetola {#first-steps}

Setso sa ho fetola ke ho lefetse .zip file ea plugin le ho ba le version 2.0 ka dashboard ea admin ea hau ea network.

Ha o [ba lefetse le ba lefetse version 2.0](../getting-started/installing-ultimate-multisite.md), setso se tla hlalosa ka ho e le thata sa version e ntlha, le o tla bona litsela tse fapaneng ka tsela la plugin.

_**LIPOTSO:** Ha u na Ultimate Multisite 1.x e fetileng ka Multisite ea hau, u tla ba le bohlokoa ho fetola plugin le version e fetileng seo u se fetse. Ho ba lebohloko, u leba le ho **Replace current with uploaded**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

Pape le faipā mo fapaipa ea legacy add-ons a u fana'a ka version 1.x. Ho fana'a le tsela e tla fana'a ka hore na le version o o sebelisang e fana'a le version 2.0, kapa na o tla hloka ho fana'a version e fetileng ea add-on haholo ho feta ho fihla.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Ha u le le fetogolo ho fihla, u ka tsamaea sebope seo se bolelang **Visit the Installer to finish the upgrade**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Ho tla u fana'a le sebope sa setso (installation wizard) sefanaeng le litšomo tsa ho fihla. U tla hloka ho tsamaea **Get Started** ho fihla sebope sa tsela e fetileng.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Ha u tsamaea **Get Started**, ho tla u fana'a le sebope seo se bolelang Pre-install Checks_._ Sena se tla u fana'a le litsela tsa hau tsa System Information le WordPress installation, le ho re ka na hore e fihla **Ultimate Multisite's requirements**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Tsela e fetileng ke ho tsamaea license key ea Ultimate Multisite ea hau le ho fana'a plugin. Sena se tla fana'a hore litšomo le tsela hlalosang, ho fihla ka site ea hau.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Ha u fana'a key ea hau, tsamaea **Agree & Activate**.

Ha u fihla license activation, u ka haholo ho fihla installation e fihla ka ho tsamaea **Install** sebope sa tsela e fetileng. Sena se tla fana'a le ho fana'a files le database ea hau e hloka ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le ho ba le

## Le migrasio {#now-the-migration}

Le migrator o na le fa'aiga fa'aiga (safety feature) a fanoa mo e fa'aiga sa'o le multisite o lona fanoa, mo e fa'aiga se ka ho na le fa'aiga. Ho feta la **Run Check** mo fa'aiga le proseso.

Ho feta le check, u na fa'aiga fa'aiga fa'aiga: e ka na le fa'aiga **ho na le fa'aiga** a fanoa ho **ho na le fa'aiga**.

### Ho na le fa'aiga {#with-error}

Ho na le fa'aiga o le fa'aiga, u na fa'aiga mo fa'aiga le fa'aiga mo e fa'aiga sa'o le fa'aiga. A re fa'aiga **fa'aiga log** lea o le fa'aiga pe o ua fa'aiga se ticket. O le fa'aiga, u na fa'aiga fa'aiga log ho fa'aiga i le link e fa'aiga mo fa'aiga support o tatou. E ka fa'aiga ai le help widget o lona fanoa i le tasi o le fa'aiga ma fa'aiga a fa'aiga (fields) ua fa'aiga mo oe, ae o le fa'aiga log e na fa'aiga i le description.

_**Ua fa'aiga se fa'aiga, u na fa'aiga mo fa'aiga sa'o ho version 2.0. O le fa'aiga, u na fa'aiga mo fa'aiga fa'aiga (roll back) i le version 1.x mo e fa'aiga fa'aiga o lona network mo e fa'aiga se ka ua fa'aiga.**_

### Ho na le fa'aiga {#without-error}

Ua fa'aiga se fa'aiga, u na fa'aiga se success message ma se button **Migrate** i le tasi o le fa'aiga mo e fa'aiga sa'o. I le fa'aiga lenei, u na fa'aiga mo fa'aiga fa'aiga (backup) o lona database i le fa'aiga mo e fa'aiga se ka ua fa'aiga, ae o lo tatou fa'aiga, o lo tatou fa'aiga fa'aiga (backup) o lona database o lo tatou fa'aiga. Fa'aiga **Migrate** mo le a u na fa'aiga se backup i le fa'aiga.

_**O lea ua fa'aiga!**_

Ho ka tšhelo ea ho tsara le ho ba le ntlha, ke ho ba le maikutlo a hau a lehleho le ho laola haholo ho faka mokhoa oa Wizard setup ho leka ho fa ntlha le litse tse ling tsa hau. Ho tla fihla ka tšhelo ea ho tsara le ho ba le ntlha, mme u leka ho leka lekhotso le maikutlo a hau a lehleho le ho laola haholo ho faka mokhoa oa Ultimate Multisite version 2.0 menu le sehlopha se sehle. Ho tla fihla ka tšhelo ea ho tsara le ho ba le ntlha, mme u leka ho leka lekhotso le maikutlo a hau a lehleho le ho laola haholo ho faka mokhoa oa Ultimate Multisite version 2.0 menu le sehlopha se sehle. Ho tla fihla ka tšhelo ea ho tsara le ho ba le ntlha, mme u leka ho leka lekhotso le maikutlo a hau a lehleho le ho laola haholo ho faka mokhoa oa Ultimate Multisite version 2.0 menu le sehlopha se sehle.
