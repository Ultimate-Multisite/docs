---
title: Kako konfigurirati preslikavo domen
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Kako konfigurirati preslikavo domen (v2)

_**POMEMBNA OPOMBA: Ta članek se nanaša na Ultimate Multisite različice 2.x.**_

Ena najzmogljivejših funkcij premium omrežja je možnost, da našim strankam ponudimo priložnost, da svojim spletnim mestom pripnejo vrhnjo domeno. Navsezadnje, kaj je videti bolj profesionalno: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) ali [_**joesbikeshop.com**_](http://joesbikeshop.com)? Zato Ultimate Multisite ponuja to funkcijo vgrajeno, brez potrebe po uporabi vtičnikov tretjih oseb.

## Kaj je preslikava domen?

Kot pove že ime, je preslikava domen možnost, ki jo ponuja Ultimate Multisite, da sprejme zahtevo za domeno po meri in to zahtevo preslika na ustrezno spletno mesto v omrežju, ki ima pripeto to določeno domeno.

### Kako nastaviti preslikavo domen v vašem Ultimate Multisite omrežju

Preslikava domen zahteva nekaj nastavitev z vaše strani, da deluje. Na srečo Ultimate Multisite avtomatizira težko delo namesto vas, tako da lahko preprosto izpolnite zahteve.

Med namestitvijo Ultimate Multisite bo čarovnik samodejno kopiral in namestil **sunrise.php** v določeno mapo. **Čarovnik vam ne bo dovolil nadaljevanja, dokler ta korak ni dokončan**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

To pomeni, da lahko začnete preslikavati domeno po meri takoj, ko čarovnik za namestitev Ultimate Multisite dokonča nastavitev vašega omrežja.

Upoštevajte, da preslikava domen v Ultimate Multisite ni obvezna. Imate možnost uporabiti izvorno funkcijo preslikave domen WordPress Multisite ali katero koli drugo rešitev za preslikavo domen.

Če morate onemogočiti preslikavo domen Ultimate Multisite, da omogočite uporabo drugih rešitev za preslikavo domen, lahko to funkcijo onemogočite pod **Ultimate Multisite > Nastavitve > Preslikava domen**.

![Stran z nastavitvami preslikave domen, ki prikazuje preusmeritev skrbnika, sporočilo preslikave in možnosti DNS](/img/config/domain-mapping-settings.png)

Tik pod to možnostjo lahko vidite tudi možnost **Vsili preusmeritev skrbnika**. Ta možnost vam omogoča nadzor nad tem, ali bodo vaše stranke lahko dostopale do svoje skrbniške nadzorne plošče tako na svoji domeni po meri kot na poddomeni ali samo na eni od njiju.

Če izberete **Vsili preusmeritev na preslikano domeno** , bodo vaše stranke lahko dostopale do svoje skrbniške nadzorne plošče samo na svojih domenah po meri.

Možnost **Vsili preusmeritev na** **omrežno domeno** bo naredila ravno nasprotno – vašim strankam bo dovoljen dostop do njihovih nadzornih plošč samo na njihovi poddomeni, tudi če se poskušajo prijaviti na svojih domenah po meri.

Možnost **Dovoli dostop do skrbništva tako prek preslikane domene kot prek omrežne domene** pa jim omogoča dostop do njihovih skrbniških nadzornih plošč tako na poddomeni kot na domeni po meri.

![Razširjen spustni seznam Preusmeritev skrbnika, ki prikazuje tri možnosti preusmeritve](/img/config/domain-mapping-redirect-options.png)

Obstajata dva načina za preslikavo domene po meri. Prvi je preslikava imena domene iz skrbniške nadzorne plošče vašega omrežja kot super skrbnik, drugi pa prek skrbniške nadzorne plošče podmesta na strani računa.

Preden pa začnete preslikavati domeno po meri na eno od podmest v vašem omrežju, se morate prepričati, da so **nastavitve DNS** imena domene pravilno konfigurirane.

###

### Preverjanje, ali so nastavitve DNS domene pravilno konfigurirane

Da preslikava deluje, se morate prepričati, da domena, ki jo nameravate preslikati, kaže na IP-naslov vašega omrežja. Upoštevajte, da potrebujete IP-naslov omrežja – IP-naslov domene, kjer je nameščen Ultimate Multisite – ne IP-naslova domene po meri, ki jo želite preslikati. Za iskanje IP-naslova določene domene na primer predlagamo obisk [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html).

Za pravilno preslikavo domene morate v svoji konfiguraciji **DNS** dodati **A RECORD**, ki kaže na ta **IP-naslov**. Upravljanje DNS se med različnimi registratorji domen zelo razlikuje, vendar je na spletu veliko vodičev, ki to obravnavajo, če poiščete " _Ustvarjanje A Record pri XXXX_ ", kjer je XXXX vaš registrator domen (npr.: " _Ustvarjanje A Record pri_ _GoDaddy_ ").

Če imate težave pri vzpostavljanju delovanja tega postopka, **se obrnite na podporo svojega registratorja domen** in pri tem delu vam bodo lahko pomagali.

Če nameravate svojim strankam dovoliti preslikavo lastnih domen, bodo morale ta del opraviti same. Če ne bodo mogle ustvariti A Record, jih usmerite na podporni sistem njihovega registratorja.

### Preslikava imena domene po meri kot Super Admin

Ko ste v svojem omrežju prijavljeni kot super skrbnik, lahko preprosto dodajate in upravljate imena domen po meri tako, da odprete **Ultimate Multisite > Domene**.

![Stran s seznamom domen v Ultimate Multisite](/img/admin/domains-list.png)

Na tej strani lahko na vrhu kliknete gumb **Dodaj domeno**, kar odpre modalno okno, kjer lahko nastavite in vnesete **ime domene po meri** , **podmesto**, za katero želite uporabiti ime domene po meri, ter se odločite, ali ga želite nastaviti kot **primarno domeno** ali ne (upoštevajte, da lahko **več imen domen preslikate na eno podmesto**).

![Modalno okno Dodaj domeno z imenom domene, izbirnikom spletnega mesta in preklopom primarne domene](/img/admin/domain-add-modal.png)

Ko vnesete vse informacije, lahko nato kliknete gumb **Dodaj obstoječo domeno** na dnu.

To bo začelo postopek preverjanja in pridobivanja informacij DNS domene po meri. Na dnu strani boste videli tudi dnevnik, s katerim lahko spremljate postopek, ki se izvaja. Ta postopek lahko traja nekaj minut.

Ultimate Multisite v2.13.0 prav tako samodejno ustvari interni zapis domene, ko je novo spletno mesto ustvarjeno na gostitelju, ki ga je treba obravnavati kot domeno za posamezno spletno mesto. Če je gostitelj primarna domena omrežja ali ena od skupnih osnovnih domen obrazca za zaključek nakupa, konfiguriranih v polju **Site URL**, se samodejni zapis preslikane domene preskoči, tako da ta skupna osnovna domena ostane na voljo vsakemu spletnemu mestu, ki jo uporablja.

Ko stranka registrira novo domeno prek Domain Seller v1.3.0 ali novejše različice, Ultimate Multisite privzeto samodejno preslika registrirano domeno na strankino omrežno spletno mesto. Skrbnikom po uspešni registraciji ni več treba dodati ločenega zapisa preslikane domene, razen če želijo prilagoditi možnosti, kot so oznaka primarne domene, stanje aktivacije ali obravnava SSL.

**Stage** ali stanje bi se moralo spremeniti iz **Checking DNS** v **Ready**, če je vse pravilno nastavljeno.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Če kliknete ime domene, boste lahko videli nekaj možnosti znotraj nje. Na hitro si jih oglejmo:

![Stran s podrobnostmi domene s preklopi za stage, spletno mesto, aktivno, primarno in SSL](/img/admin/domain-edit.png)

**Stage:** To je faza, v kateri je domena. Ko domeno prvič dodate, bo verjetno v fazi **Checking DNS**. Postopek bo preveril vnose DNS in potrdil, da so pravilni. Nato bo domena postavljena v fazo **Checking SSL**. Ultimate Multisite bo preveril, ali domena ima SSL ali ne, in vašo domeno razvrstil kot **Ready** ali **Ready (without SSL)**.

**Site:** Poddomena, ki je povezana s to domeno. Preslikana domena bo prikazala vsebino tega določenega spletnega mesta.

**Active:** To možnost lahko vklopite ali izklopite, da domeno aktivirate ali deaktivirate.

**Is Primary Domain?:** Vaše stranke imajo lahko za vsako spletno mesto več kot eno preslikano domeno. Uporabite to možnost, da izberete, ali je to primarna domena za določeno spletno mesto.

**Is Secure?:** Čeprav Ultimate Multisite pred omogočanjem preveri, ali domena ima SSL certifikat ali ne, lahko ročno izberete, ali naj se domena naloži z SSL certifikatom ali brez njega. Upoštevajte, da lahko pride do napak, če spletno mesto nima SSL certifikata in ga poskusite prisilno naložiti z SSL.

### Preslikava imena domene po meri kot uporabnik podmesta

Skrbniki podmest lahko imena domen po meri preslikajo tudi iz skrbniške nadzorne plošče svojega podmesta.

Najprej morate zagotoviti, da to možnost omogočite v nastavitvah **Domain mapping**. Oglejte si spodnji posnetek zaslona.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

To možnost lahko nastavite ali konfigurirate tudi na ravni **Plan** ali v možnostih izdelka v **Ultimate Multisite > Products**.

![Razdelek Domene po meri na strani za urejanje izdelka](/img/config/product-custom-domains.png)

Ko je katera koli od teh možnosti omogočena in je uporabniku podmesta dovoljeno preslikati imena domen po meri, bi moral uporabnik podmesta videti metapolje na strani **Account** z imenom **Domains**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Uporabnik lahko klikne gumb **Add Domain**, kar odpre modalno okno z nekaj navodili.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Uporabnik lahko nato klikne **Next Step** in nadaljuje z dodajanjem imena domene po meri. Izbere lahko tudi, ali bo to primarna domena ali ne.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Klik na **Add Domain** bo začel postopek preverjanja in pridobivanja informacij DNS za domeno po meri.

### O sinhronizaciji domen

Sinhronizacija domen je postopek, pri katerem Ultimate Multisite doda ime domene po meri v vaš gostiteljski račun kot dodatno domeno **da preslikava domene deluje**.

Sinhronizacija domen se zgodi samodejno, če ima vaš ponudnik gostovanja integracijo s funkcijo preslikave domen Ultimate Multisite. Trenutno so ti ponudniki gostovanja _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ in _Cpanel._

Ko je integracija s ponudnikom gostovanja aktivna, lahko Ultimate Multisite v čakalno vrsto doda tudi nalogo ustvarjanja DNS ali poddomene na strani ponudnika za novo ustvarjena spletna mesta. Če nobena integracija ne posluša te naloge, se opravilo v ozadju preskoči, da se izogne vnosom v čakalni vrsti brez učinka. Preverjanja DNS in SSL za preslikane domene se še naprej izvajajo prek običajnega postopka faz domen.

To integracijo boste morali aktivirati v nastavitvah Ultimate Multisite pod zavihkom **Integration**.

![Zavihek Integracije v nastavitvah Ultimate Multisite, ki prikazuje ponudnike gostovanja](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Upoštevajte, da če vaš ponudnik gostovanja ni eden od zgoraj navedenih ponudnikov, **boste morali ime domene ročno sinhronizirati ali dodati** v svoj gostiteljski račun._
