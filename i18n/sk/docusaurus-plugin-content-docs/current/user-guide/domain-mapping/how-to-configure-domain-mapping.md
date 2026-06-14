---
title: Ako nakonfigurovať mapovanie domény
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Ako skonfigurovať mapovanie domén (v2)

_**DÔLEŽITÉU POZNÁTE: Tento článok sa týka Ultimate Multisite verzie 2.x.**_

Jednou z najsilnejších vlastností premium siete je schopnosť ponúknuť našim klientom možnosť pridať si top-level domén k svojim webovým stránkam. Počiatku, čo vyzerá profesionálnejšie: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) alebo [_**joesbikeshop.com**_](http://joesbikeshop.com)? Preto ponúka Ultimate Multisite túto funkciu ako v zabudovanom, bez potreby používať externé pluginy.

## Čo je mapovanie domén?

Ako naznačuje názov, mapovanie domén je schopnosť, ktorú Ultimate Multisite ponúka, aby si prijal požiadavku na prispôsobený domén a pripísal túto požiadavku odpovedajúcej webovej stránke v sieti s týmto konkrétnym doménom.

### Ako skonfigurovať mapovanie domén na vašej sieti Ultimate Multisite

Mapovanie domén vyžaduje niektoré nastavenia zo strany používateľa, aby fungovalo. Našťastie automatizuje ho Ultimate Multisite za vás, takže môžete ľahko splniť požiadavky.

Po instalácii Ultimate Multisite vám poradce (wizard) automaticky zkopíruje a nainštaluje **sunrise.php** do určeného adresára. **Poradca vám nepošle ďalej, kým tento krok nebol dokončený**.

<!-- Screenshot unavailable: Instalačný poradca Ultimate Multisite s krokom sunrise.php -->

To znamená, že ak si instalácia Ultimate Multisite skončí s nastavením vašej siete, môžete mapovať prispôsobený domén okamžite.

Pozrite, že mapovanie domén v Ultimate Multisite nie je povinné. Máte možnosť použiť štandardnú funkciu mapovania domén WordPress Multisite alebo akýkoľvek iný riešenie mapovania domén.

Ak chcete deaktivovať mapovanie domén v Ultimate Multisite a urobiť miesto pre iné riešenia mapovania domén, môžete túto funkciu vypnúť pod **Ultimate Multisite > Settings > Domain Mapping**.

![Stránka nastavení mapovania domén zobrazujúca admin presmerovanie, správu mapovania a DNS možnosti](/img/config/domain-mapping-settings.png)

Priamo pod toutou možnosť môžete vidieť aj možnosť **Force Admin Redirect** (Nezodpovedné zmeny pre admin). Táto možnosť vám umožňuje ovládať, či budú môcť zákazníci prístupť k svojmu admin dashboardu buď na ich prispôsobenom domaine a poddomene, alebo len na jeden z nich.

Ak vyberiete **Force redirect to mapped domain** (Nezodpovedné zmeny na mapovanú doménu), zákazníci budú môcť prístupť k svojmu admin dashboardu iba na ich prispôsobených domenach.

Možnosť **Force redirect to network domain** (Nezodpovedné zmeny na sieti doménu) bude robiť úplne opačné – zákazníci budú povolení prístupť len k svojim dashboardom na poddomene, aj keď sa pokúšajú prihlásiť na svojich prispôsobených domenoch.

A možnosť **Allow access to the admin by both mapped domain domain and network domain** (Povoliť prístup k adminu buď z mapovanej domény, tak z sieti domény) im umožní prístupť k svojim admin dashboardom ako na poddomene, tak na prispôsobenom domaine.

![Rozbalená rozbaľovacia zmena pre admin presmerovanie zobrazujúca tri možnosti presmerovania](/img/config/domain-mapping-redirect-options.png)

Existujú dva spôsoby mapovania prispôsobeného domény. Prvý je mapovanie názvu domény z vášho sieti admin dashboardu ako superadmin, a druhý je cez admin dashboard poddomény v sekcii účet (account page).

Ale pred tým, než začnete mapovať prispôsobenú doménu na jednu z poddomén v sieti, musíte si uistiť, že **DNS nastavenia** názvu domény sú správne nakonfigurované.

###

### Uistenie, že DNS nastavenia domény sú správne nakonfigurované

Aby mapovanie fungovalo, musíte si uistiť sa, že doména, ktorú plánujete mapovať, ukazuje na IP adresu vašej siete. Dôležité je, že potrebujete si IP adresu siete – teda IP adresu domény, kde je nainštalovaný Ultimate Multisite – nie IP adresu prispôsobeného doménu, ktorý chcete mapovať. Hľadaní IP adresy konkrétnej domény odporúčame zamerať na [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), napríklad.

Aby ste správne mapovali doménu, musíte pridať **A RECORD** v nastavení **DNS**, ktorý ukazuje na danú **IP adresu**. Správa DNS sa výrazne líši v závislosti od toho, aký máte registrára domény, ale je veľa tutorialov online, ktoré to pokrývajú, ak hľadáte " _Vytvorenie A Recordu na XXXX_ ", kde XXXX je váš registraren (napr. " _Vytvorenie A Recordu na_ _GoDaddy_ ").

Ak máte problémy s tým, aby to fungovalo, **kontaktujte podporu svojho registrarenu domény** a oni vám pomôžu s touto časťou.

Ak plánujete umožniť svojim klientom mapovať vlastné domény, budú musieť sami urobiť túto prácu. Ukonajte ich smerovanie k ich systému podpory registrarená, ak si zistia, že nemôžu vytvoriť A Record.

### Mapovanie prispôsobeného doménového mena ako Super Admin

Keď ste prihlásení ako super admin na vašej sieti, môžete prispôsobené doménové mená ľahko pridávať a spravovať pomocou sekcie **Ultimate Multisite > Domains**.

![Strana s zoznamom domén v Ultimate Multisite](/img/admin/domains-list.png)

Podľa tejto stránky môžete kliknúť na tlačidlo **Pridať doménu** v hornej časti, ktoré otvorí modálne okno, kde si môžete nastaviť a vyplniť **pranú doménu**, **subdoménu**, na ktorú chcete pridať pranu doménu, a rozhodnúť sa, či chcete nastaviť ju ako **primárnu doménu** alebo nie (pozrite, že môžete mapovať **viaceré domény na jednu subdoménu**).

![Modálne okno Pridanie domény s názvom domény, výberom stránky a prepínačom primárnej domény](/img/admin/domain-add-modal.png)

Po vyplnení všetkých informácií môžete kliknúť na tlačidlo **Pridať existujúcu doménu** v spodnej časti.

Toto zahraje proces ovierkania a načítania informácií DNS pre pranu doménu. Na dole stránky uvidíte aj log, kde si môžete sledovať postup, ktorý sa vykonáva. Tento proces môže trvať niekoľko minút.

Ultimate Multisite v2.13.0 automaticky vytvára interný záznam domény, keď je vytvorená nová stránka na hoste, ktorý by mal byť traktovaný ako doména pre každú stránku. Ak je host doménou siete alebo jednou z základných domén pre formulár objednávky nakonfigurovaných v poli **Site URL**, automatický mapovaný záznam domény sa vyhne, aby bol základný doména k dispozícii pre každú stránku, ktorá ho používa.

**Stav** alebo stav by sa mal zmeniť z **Kontrola DNS** na **Pripravený**, ak je všetko správne nastavené.

<!-- Screenshot unavailable: Riadok domény zobrazujúci stav Kontrola DNS v zliastej zliaste -->

<!-- Screenshot unavailable: Riadok domény zobrazujúci stav Pripravený s zeleným indikátorom stavu -->

Ak kliknete na názov domény, budete môcť vidieť v nej niektoré možnosti. Pozrite si ich rýchly prehľad:

![Stránka s detailmi domény so stavom, stránkou, aktivným, primárnym a prepínačmi SSL](/img/admin/domain-edit.png)

**Fáza:** Toto je fáza, na ktorej sa nachádza váš domén. Keď pridal domén prvýkrát, pravdepodobne bude na fáze **Kontrola DNS**. Proces skontroluje záznamy v DNS a potvrdí ich správnosť. Potom bude domén presunutá na fázu **Kontrola SSL**. Ultimate Multisite skontroluje, či váš domén má SSL alebo nie, a zaškrtne vašu doménu ako **Pripravenú** alebo **Pripravenú (bez SSL)**.

**Strana:** Poddoména, ktorá je spojená s týmto doménom. Mapovaný domén zobrazí obsah tejto konkrétnej strany.

**Aktívny:** Môžete toto prepínať vo vypnutom/vypnutom režime na aktiváciu alebo deaktiváciu domény.

**Je primárny domén?:** Vaši zákazníci môžu mať viac ako jeden mapovaný domén pre každú stranu. Použite túto možnosť, aby ste si vybrali, či je to primárny domén pre danú stranu.

**Je zabezpečený?:** Hoci Ultimate Multisite skontroluje, či váš domén má SSL alebo nie, pred jeho aktiváciou, môžete manuálne vybrať načítanie domény s alebo bez SSL certifikátu. Poznámka: ak webová stránka nemá SSL certifikát a si pokúsíte vynúsiť načítanie s SSL, môže to spôsobiť chyby.

### Mapovanie prispôsobeného doménového mena ako poddoména používateľom
Administrátori poddomén môžu tiež mapovať prispôsobené doménové mená z ich admin panela poddomény.

Prst, musíte si uistiť, že ste tento možnosť aktivovali v nastaveniach **Mapovanie domén**. Vidíte obrázok nižšie.

<!-- Screenshot unavailable: Nastavenia mapovania domén umožňujú používateľom poddomény mapovať domény pomocou prepínaču Správa zákazníckych DNS -->

Môžete túto možnosť tiež nastaviť alebo skonfigurovať v úrovni **Plán** alebo v optionách produktu na **Ultimate Multisite > Produkty**.

![Sekcia prispôsobených domén na stránke úpravy produktu](/img/config/product-custom-domains.png)

Keď je akékoľvek z týchto možností zapnuté a používateľ subsite má povolenie mapovať vlastné doménové mená, u subsite používateľa sa zobrazí v sekcii **Account** (Účet) metabox s názvom **Domains** (Domény).

<!-- Screenshot unavailable: Metabox Domény na stránke Účet subsite s tlačidlom Pridať doménu -->

Používateľ môže kliknúť na tlačidlo **Add Domain** (Pridať doménu), ktoré otvorí modálne okno s niektorými inštrukciami.

<!-- Screenshot unavailable: Modálne okno Pridanie domény zobrazujúce inštrukcie pre DNS A-record používateľov subsite -->

Používateľ potom môže kliknúť na **Next Step** (Ďalý krok) a pokračovať v pridávaní vlastného doménového mena. Môže tiež vybrať, či bude to primárna doména alebo nie.

<!-- Screenshot unavailable: Forma Pridania domény s polom pre vlastné doménové meno a prepínačom primárnej domény -->

<!-- Screenshot unavailable: Krok potvrdenia pridania domény, ktorý spúšťa verifikáciu DNS -->

Kliknutím na **Add Domain** (Pridať doménu) sa spustí proces verifikácie a načítavania informácií o DNS pre vlastné doménové meno.

### O synchronizácii domén
Synchronizácia domén (Domain Syncing) je proces, pri ktorom Ultimate Multisite prida vlastné doménové meno do vášho účtu na hostovaní ako doplnkovú doménu **pre to, aby mohla mapovanie domén fungovať**.

Synchronizácia domén sa automaticky vykonáva, ak váš poskytovateľ hostingu má integráciu s funkciou mapovania domén Ultimate Multisite. Naďalej sú tieto poskytovatelia hostingu _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways_ a _Cpanel._

Keď je aktivá integrácia s poskytovateľom hostingu, Ultimate Multisite môže tiež vriadiť (enqueue) úlohu vytvárania DNS alebo poddomény zo strany poskytovateľa pre nová vytvorená sitios. Ak žiadna integrácia nepočúva túto úlohu, pozadový prácu sa vyhne, aby sa unikli záznamy do kolejky no-op. Kontrola DNS a SSL pre mapované domény sa pokračuje v bežnom procese fázy domény (domain-stage process).

Musíte si toto integračné nastavenie v Ultimate Multisite nastaveniach aktivovať vo záľube záložky **Integration**.

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Poznajte, že ak váš poskytovateľ hostingu nie je jeden z uvedených v tomto zozname, **budete musieť manuálne synchronizovať alebo pridať doménu** do vášho účtu na hosting._
