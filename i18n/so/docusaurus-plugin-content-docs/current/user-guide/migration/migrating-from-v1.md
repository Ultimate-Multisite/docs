---
title: Uunidda ka guurista V1-ka
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Ku-dhafa ka V1-ka u beddelidda {#migrating-from-v1}

## Ultimate Multisite waxay ka guuraysay qoyska soo saarista (releases) ee asalka ah ee 1.x si ay u gudubto qoyska 2.x. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Nooca Ultimate Multisite 2.0 iyo kuwa ka dambeeya waa dib u qorista buuxda oo code-ka, taasoo macnaheedu yahay in la isku xirna wax badan oo ka jira nooca hore iyo kan cusub. Sababtan, marka aad ka gudbaysid 1.x ilaa 2.x, macluumaadkaaga (data) waa inaad u beddeshaa qaab uu noocan cusubka fahmi karo.

Waxaan ku faraxsanahay in Ultimate Multisite 2.0+ **waxa uu la socdaa migrator** oo ku dhex jira nidaamka asalka ah, kaas oo awood u leh inuu ogaado macluumaadka nooca hore isagoo beddelaya qaabkan cusub. Migreen (migration) kan wuxuu dhacaa inta lagu jiro **Setup Wizard** ee nooca 2.0+.

Casharkan wuxuu ka hadlayaa sida uu u shaqeeyo migrator-ka, waxa aad samaynaysaa haddii ay falcelin (failure) dhacdo, iyo sida loo hagaajiyo dhibaatooyinka laga horseedi karo inta lagu jiro habkan.

_**MUHIIM: Intaadan bilaabin upgrading-ga nooca 1.x ilaa nooca 2.0, fadlan hubi inaad samayso backup (nooc lahayd) database-ka website-kaaga**_

## Tallaabooyinka hore {#first-steps}

Tallaabada ugu horreysa waa in aad soo dejisid faylka .zip ee plugin-ka oo aad ku installay nooca 2.0 dashboard-ka maamulka shirkaddaada (network admin dashboard).

Marka aad [installay oo aad furatay nooca 2.0](../getting-started/installing-ultimate-multisite.md), nidaamku si toos ah ayaa loo oga in Multisite-kaaga uu ku shaqaynayo nooca hore, waxaadna arki doontaa fariin kan sare ee bogga plugin-ka.

_**Fadlan ogow:** Haddii aad haysato Ultimate Multisite 1.x oo ku taal Multisite-kaaga, waxaad heli doontaa fursad inaad isbeddelka (replace) plugin-ka nooca aad soo dejisay samayso. Fadlan, tag oo riix **Replace current with uploaded**._

<!-- Sawirka ma laha: Bogga plugin-ka oo muujinaya doorashada in la beddelo v1 ee la soo galiyay v2 ah -->

Bogga la soo socda wuxuu kuu sheegi doonaa add-ons-ka hore (legacy add-ons) ee aad ku haysato oo ay la socoto version 1.x. Waxay bixin doontaa tilmaamo ah in version-ka aad isticmaalayso uu la mid yahay version 2.0 mise inaad u baahan tahay inaad samayso nooc cusub oo add-on-ka ah ka dib markii aad guurto (migration).

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Marka aad diyaar u tahay inaad sii socoto, waxaad ku riix kartaa badhanka ah ee leh **Visit the Installer to finish the upgrade** (Tagalka Installerska si aad u dhammaystirto guurka).

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Markaas wuxuu kuu soo qaadi doonaa bogga wizard-ka install-ka oo leh warqado soo dhaweyn ah. Waxaad kaliya u baahan tahay inaad riixdo **Get Started** (Bilow) si aad u tagto bogga xigta.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Marka aad riixdo **Get Started**, wuxuu kuu soo dirayaa Pre-install Checks_._ Tani waxay ku muujin doontaa macluumaadka nidaamkaaga (System Information) iyo install-ka WordPress-kaaga, waxaana kuu sheegi doonaa inuu buuxinayo **Ultimate Multisite's requirements** (shuruudaha Ultimate Multisite).

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Tallaabada xigta waa inaad qorto furaha lisansigaaga Ultimate Multisite oo aad fuliso plugin-ka. Tani waxay hubinaysaa in dhammaan astaamaha, oo ay ka mid yihiin add-ons-ka, inay ku jiraan goobtaada (site).

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Marka aad ku qorto furahaaga, riix **Agree & Activate** (Aqbal oo Fuligo).

Ka dib markii la fuliyo lisansiga, waxaad bilaabi kartaa install-ka dhabta ah adigoo riixaya **Install** (Install) bogga xigta. Tani waxay si toos ah u samayn doontaa faylasha iyo database-ka loo baahan yahay version 2.0 si ay shaqeeyaan.

## Hadda, wareejinta (Migration) {#now-the-migration}

Migrator-ku wuxuu leeyahay hab ammaan ah oo uu hubiyo dhammaan multisite-kaaga Ultimate Multisite si uu u hubiyo in dhammaan xogtaada ay ku laaban karaan iyadoo aan wax dhibaato ah ka dhalan. Si aad u bilaaw nidaamka, riix badhanka **Run Check**.

Marka aad samayso hubinta, waxaa jira laba fursad: natiijadu waxay noqon kartaa **iyadoo la'aansan** ama **iyadoo la'aan qalad (without an error)**.

### Iyadoo la'aan qalad (With Error) {#with-error}

Haddii aad hesho fariin qalad ah, waxaad u baahan tahay inaad la xiriirto kooxda taageerada (support team) si ay ku caawiyaan hagaajinta qaladka. Hubi inaad **bixisid log-ga qaladka** marka aad samaynayso ticket. Waxaad soo dejin kartaa log-ga ama waxaad riixin kartaa xiriirka ah ee sheegaya "contact our support team". Wuxuu furayaa widget-ka caawinta (help widget) dhinaca midig ee boggaaga, kaas oo si diyaar ah ugu buuxin doona meelaha ay ku jiraan log-yada qaladka.

_**Maadaama nidaamku uu helay qalad, ma heli kartid in aad u sii socoto wareejinta (migrate) version 2.0. Markaas waxaad dib u soo celin kartaa version 1.x si aad dib ugu bilaaw shaqaynta shabakadahaaga ilaa la hagaajiyo qaladka.**_

### Iyadoo la'aan qalad (Without Error) {#without-error}

Haddii nidaamku aanu helin wax qalad ah, waxaad arki doontaa fariin guul leh (success message) iyo badhan **Migrate** oo ku yaalla hoose kaas oo kuu oggolaan doona inaad sii socoto wareejinta. Boggan, waxaa lagu xusuusin doonaa inaad samayso backup-ka database-kaaga ka hor intaadan sii socon, taasoo aan si xoog leh ugu talinayno. Haddii aad horey u lahayd backup, riix **Migrate**.

Waa kan oo dhan!

Waxaad u hixi kartaa inaad sii waddato habka "Wizard" si aad u cusboonysiiyaan qoraalkaaga iyo waxyaabaha kale ee shabarkaaga, ama aad bilowdo inaad la tirtirso menu-ga nooca 2.0 ee Ultimate Multisite iyo muuqaalkiisa cusub. Si fiican, ku bilaaw inaad kaftiro dhiirigelin badan!
