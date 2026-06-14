---
title: Kako konfigurirati mapiranje domena
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Kako konfigurirati mapiranje domena (v2)

_**POMEMBNO NAPOMENA: Ovaj članak se nana na Ultimate Multisite verzijo 2.x.**_

Jedna od najmočnijih značajki premium mreže je sposobnost ponuditi našim klijentima priliku da prilože vrhunski domen svojim stranicama. Na kraju, što izgleda profesionalnije: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) ili [_**joesbikeshop.com**_](http://joesbikeshop.com)? Zato Ultimate Multisite nudi tu značilnost ugrađenu, bez potrebe za korištenjem trećih stranih pluginova.

## Šta je mapiranje domena?

Kao što ime kaže, mapiranje domena je sposobnost koju Ultimate Multisite nudi da prihvati zahtjev za prilagođen domen i poveže taj zahtjev s odgovarajućom stranicom u mreži sa tim specifičnim domenom.

### Kako postaviti mapiranje domena na svojoj Ultimate Multisite Mreži

Mapiranje domena zahtijeva određeno podešavanje sa vaše strane da bi funkcioniralo. Srećom, Ultimate Multisite automatski obavlja teške radove za vas tako da možete lako ispuniti zahtjeve.

Tokom instalacije Ultimate Multisite-a, vodič će automatski kopirati i instalirati **sunrise.php** u odabrano direktorij. **Vodič neće dozvoliti nastavak dok ovaj korak ne bude završen**.

<!-- Screenshot unavailable: Ultimate Multisite instalacijski vodič s sunrise.php korak -->

To znači da, nakon što Ultimate Multisite instalacijski vodič završi postavljanje vaše mreže, možete odmah početi mapirati prilagođeni domen.

Napomena: Mapiranje domena u Ultimate Multisite nije obavezno. Imate opciju koristiti nativnu funkciju mapiranja domena WordPress Multisite-a ili bilo koje drugo rješenje za mapiranje domena.

Če želite onemogočiti mapiranje domena Ultimate Multisite, da bi lahko uporabili druge rešitve za mapiranje domen, lahko to storite v nastavitvah **Ultimate Multisite > Settings > Domain Mapping**.

![Stranica nastavitev mapiranja domen prikazuje admin preusmerjanje, sporočilo o mapiranju in DNS opcije](/img/config/domain-mapping-settings.png)

Takoj pod tą opcjo vidite tudi opcijo **Force Admin Redirect** (Natisno preusmerjanje admina). Ta opcija vam omogoča kontrolirati, ali bodo vaši uporabniki lahko dostopali svoj admin dashboard tako na svojem prilagojenem domenu in poddomenu ali le na enega od njih.

Če izberete **Force redirect to mapped domain** (Natisno preusmerjanje na mapiran domen), bodo vaši uporabniki lahko dostopali svoj admin dashboard samo na svojih prilagojenih domenah.

Opcija **Force redirect to network domain** (Natisno preusmerjanje na omrežni domen) bo delovala popolnoma nasprotno – vaši uporabniki bodo dobesedno dovoljeni dostopati svojim dashboardom le na poddomeni, tudi če poskušajo se prijaviti na svojih prilagojenih domenah.

In opcija **Allow access to the admin by both mapped domain domain and network domain** (Dovolite dostop admina tako z mapiranega domena kot omrežnega domena) jim omogoča dostop do svojih admin dashboardov tako na poddomeni kot na prilagojenem domenu.

![Spuščana spletna stran za preusmerjanje admina prikazuje tri opcije preusmerjanja](/img/config/domain-mapping-redirect-options.png)

Obstaja dve načinu mapiranja prilagojenega domena. Prvi je mapiranje imena domena iz vaše omrežne admin dashboard kot superadmin, in drugi je preko admin dashboarda podpoddomene na strani računa.

Toda pred tem, ko začnete mapirati prilagojen domen na eno od podpoddomen v svoji mreži, morate zagotoviti, da so **DNS nastavitve** imena domena pravilno konfigurirane.

### Zagotavljanje pravilne konfiguracije DNS nastavitev domena

Za obstavljanje mape morate zagotoviti, da domen, ki ga načrtujete za mapiranje, usmerja na IP naslov vaše mreže. Opazite, da potrebujete IP naslov mreže – IP naslov domena, kjer je nameščen Ultimate Multisite – ne IP naslov prilagojenega domena, ki ga želite mapirati. Za iskanje IP naslova določenega domena vam predlagamo, da obiščete [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), na primer.

Za pravilno mapiranje domena morate dodati **A RECORD** v vašo konfiguracijo **DNS**, ki usmerja na ta **IP naslov**. Upravljanje DNS se močno razlikuje med različnimi registratorji domen, vendar je veliko tutorialov na spletu, ki to pokrivajo, če iskanjete " _Creating A Record on XXXX_ ", kjer je XXXX vaš registrator domena (npr. " _Creating A Record on_ _GoDaddy_ ").

Če boste imeli težave z uporabo tega, **kontaktirajte podporo svojega registratorja domen**, saj bodo vam lahko pomagali z tem delom.

Če načrtujete, da dovolite svojim strankam, da mapirajo lastna domena, bodo morali sami opraviti to del. Usmerite jih na sistem podpore svojega registratorja, če ne uspejo ustvariti A Record.

### Mapiranje prilagojenega domena kot Super Admin

Ko ste prijavljeni kot super admin na svoji mreži, lahko enostavno dodate in upravljate prilagojena domena, idite pod **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Pod tem stranjo lahko na vrhu kliknete na gumb **Dodaj domen**, ki se odpre in vam omogoča nastavitve za **prilagočen naziv domena** (custom domain name), **subsite**, na katere želite primeti prilagojen naziv domena, ter določite, ali ga želite postaviti kot **glavni naziv domena** ali ne. (opozorilo: lahko pripisate **vsakemu subsite-u več nazivov domen**).

![Modal za dodajanje domena z imenom domena, izberovalcem strani in preklopnikom glavnega domena](/img/admin/domain-add-modal.png)

Po vnosu vsa informacij lahko na dnu kliknete na gumb **Dodaj obstoječi domen**.

To začne proces preverjanja in pridobivanja DNS informacij za prilagojen domen. Na dnu strani boste videli tudi log, ki vam bo omogočil slediti procesu, ker se odvija. Ta proces lahko potraja nekaj minut.

Ultimate Multisite v2.13.0 samodejno ustvarja intern zapis domena, ko je na hostu ustvarjen novi site, ki bi morali biti obravnavan kot domen za vsako stran (per-site domain). Če je host primarni domen mreže ali eden od osnovnih domen za bazni obrazec za plačilo, konfiguriranega v polju **Site URL**, se samodejno mapirani zapis domena izklopi, tako da ostane dostopen za vsak site, ki ga uporablja.

**Stanje** (Stage) ali status se bo spremenil z **Preverjanje DNS-a** (Checking DNS) v **Sprejden** (Ready), če je vse pravilno nastavljeno.

<!-- Screenshot unavailable: Red domena, ki prikazuje stanje Preverjanje DNS-a na seznamu domen -->

![Red domena, ki prikazuje stanje Sprejden z zelenim indikatorjem](https://example.com/img/admin/domain-stage-ready.png)

Če kliknete na naziv domena boste lahko videli nekaj možnosti v njem. Pojdite ga skozi:

![Stranjo podrobnosti domena z preklopniki stanja, site, aktivnega, glavnega in SSL](https://example.com/img/admin/domain-edit.png)

**Faza:** To je faza, na katero se domain nahaja. Ko prvič dodate domain, naj bo verjetno na fazi **Preverjanje DNS**. Proces preverja vpis za DNS in potrjuje, da so pravilni. Nato bo domain postavljen na fazo **Preverjanje SSL**. Ultimate Multisite bo preveril, ali ima domain SSL certificate ali ne, in kategoriziral vaš domain kot **Ready** (Sprejen) ali **Ready (without SSL)** (Sprejen brez SSL).

**Site:** Poddomena, ki je povezana z tem domainom. Mapiran domain bo prikazoval vsebino tega specifične site.

**Active:** Lahko boste ta opcijo vklopite ali isključite, da aktivirate ali deaktivirate domain.

**Is Primary Domain?:** Vaši uporabniki lahko imajo več mapiranih domen za vsako sito. Uporabite to opcijo, da izberete, ali je to primarni domain za določeno sito.

**Is Secure?:** Čeprav Ultimate Multisite preverja, ali ima domain SSL certificate ali ne pred vključenjem, lahko ručno izberete, da nahajate domain z SSL certificate ali brez. Opazite, da če spletna stran ni z SSL certificate in poskušate prisiliti naložbo s SSL, vam lahko povrne napake.

### Mapiranje prilagojenega imena domena kot podpododobe uporabnika

Podpododobni administratorji lahko mapirajo tudi prilagojena imena domen iz svoje podpododobne admin dashboard.

Preden začnete, morate zagotoviti, da je ta možnost vklopljena pod nastavitvami **Domain mapping**. Predvidevanje spodaj.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Lahko lahko tudi nastavite ali konfigurirate to opcijo na ravni **Plan** ali možnosti izdelka v **Ultimate Multisite > Products**.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Ko če od teh opcij, ki so vključene in uporabniku podpoddome (subsite) je dovoljeno mapirati lastne domene, bi should uporabnik na strani **Account** videl metabox z imenom **Domains**.

<!-- Screenshot unavailable: Metabox Domains na strani Account podpoddome z gumbom Dodaj domen -->

Uporabnik lahko klikne na gumb **Add Domain**, ki bo prikazal modalno okno z nekaj navodilami.

<!-- Screenshot unavailable: Modal za dodaj domen, ki prikazuje navodila za DNS A-record za uporabnike podpoddome -->

Potem lahko uporabnik klikne na **Next Step** in nadaljuje s dodajanjem lastne domene. Lahko tudi izbere, ali bo to primarna domena ali ne.

<!-- Screenshot unavailable: Obraz dodajanja domene z poljem za ime lastne domene in preklopnikom za primarno domeno -->

<!-- Screenshot unavailable: Potrditveni korak dodajanja domene, ki sproži verifikacijo DNS -->

Klik na **Add Domain** bo začel proces preverjanja in pridobivanja informacij o DNS lastne domene.

### O Domen Syncingu (Domain Syncing)

Domain Syncing je proces, kjer Ultimate Multisite dodaja ime lastne domene v vaš račun za hosting kot dodatno domenino **da bi delovanje mapiranja domen delovalo**.

Domain syncing se samodejno zgodi, če vaš dostavitelj hostinga ima integracijo z funkcijo mapiranja domen Ultimate Multisite. Trenutno so ti dostavitelji hostinga _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways_ in _Cpanel_.

Ko je aktivna integracija s dostaviteljem hostinga, lahko Ultimate Multisite tudi vključi zadano nalogo za ustvarjanje DNS ali poddomene strani dostavitelja za nov ustvarjene domene. Če se ta naloga ne sluša noben integracija, se spremenjena naloga v pozadju preskoči, da bi se izognilo vpisom na vrstni seznam (queue entries) brez učinka (no-op). Preverjanja DNS in SSL za mapirane domene nadaljujejo delovanje skozi običajni proces faze domene.

Moratevajte na aktiviranje te integracije v nastavitvah Ultimate Multisite pod tabom **Integration**.

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Opazite, če je vaš host ne ena od navedenih dostavcev, **boste morali sam ručno sinhronsati ali dodati domen** v svoj račun za hosting._
