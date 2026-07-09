---
title: Ako nakonfigurovať mapovanie domén
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Ako nakonfigurovať mapovanie domén (v2) {#how-to-configure-domain-mapping-v2}

_**DÔLEŽITÁ POZNÁMKA: Tento článok sa týka Ultimate Multisite verzie 2.x.**_

Jednou z najsilnejších funkcií prémiovej siete je možnosť ponúknuť našim klientom príležitosť pripojiť k ich stránkam doménu najvyššej úrovne. Napokon, čo vyzerá profesionálnejšie: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) alebo [_**joesbikeshop.com**_](http://joesbikeshop.com)? Preto Ultimate Multisite ponúka túto funkciu vstavanú, bez potreby používať pluginy tretích strán.

## Čo je mapovanie domén? {#whats-domain-mapping}

Ako už názov napovedá, mapovanie domén je schopnosť, ktorú ponúka Ultimate Multisite, prijať požiadavku na vlastnú doménu a namapovať túto požiadavku na zodpovedajúcu stránku v sieti, ku ktorej je daná doména pripojená.

### Ako nastaviť mapovanie domén vo vašej sieti Ultimate Multisite {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Mapovanie domén vyžaduje z vašej strany určité nastavenie, aby fungovalo. Našťastie Ultimate Multisite za vás automatizuje náročnú prácu, takže môžete požiadavky splniť jednoducho.

Počas inštalácie Ultimate Multisite sprievodca automaticky skopíruje a nainštaluje **sunrise.php** do určenej zložky. **Sprievodca vám nedovolí pokračovať, kým tento krok nebude dokončený**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

To znamená, že keď sprievodca inštaláciou Ultimate Multisite dokončí nastavenie vašej siete, môžete vlastnú doménu začať mapovať okamžite.

Upozorňujeme, že mapovanie domén v Ultimate Multisite nie je povinné. Máte možnosť použiť natívnu funkciu mapovania domén WordPress Multisite alebo akékoľvek iné riešenie mapovania domén.

Ak potrebujete vypnúť mapovanie domén Ultimate Multisite, aby ste uvoľnili miesto iným riešeniam mapovania domén, môžete túto funkciu vypnúť v časti **Ultimate Multisite > Nastavenia > Mapovanie domén**.

![Stránka nastavení mapovania domén zobrazujúca presmerovanie administrátora, správu mapovania a možnosti DNS](/img/config/domain-mapping-settings.png)

Hneď pod touto možnosťou môžete vidieť aj možnosť **Vynútiť presmerovanie administrátora**. Táto možnosť vám umožňuje ovládať, či vaši zákazníci budú mať prístup k svojmu admin Dashboardu na svojej vlastnej doméne aj subdoméne, alebo iba na jednej z nich.

Ak vyberiete možnosť **Vynútiť presmerovanie na namapovanú doménu** , vaši zákazníci budú mať prístup k svojmu admin Dashboardu iba na svojich vlastných doménach.

Možnosť **Vynútiť presmerovanie na** **doménu siete** urobí presný opak – vašim zákazníkom bude povolený prístup k ich Dashboardom iba na ich subdoméne, aj keď sa budú pokúšať prihlásiť na svojich vlastných doménach.

A možnosť **Povoliť prístup k administrácii cez namapovanú doménu aj doménu siete** im umožňuje prístup k ich admin Dashboardom na subdoméne aj vlastnej doméne.

![Rozbalená ponuka presmerovania administrátora zobrazujúca tri možnosti presmerovania](/img/config/domain-mapping-redirect-options.png)

Existujú dva spôsoby, ako namapovať vlastnú doménu. Prvý je namapovaním názvu domény z admin Dashboardu vašej siete ako super admin a druhý cez admin Dashboard podstránky na stránke účtu.

Skôr než však začnete mapovať vlastnú doménu na jednu z podstránok vo vašej sieti, musíte sa uistiť, že **nastavenia DNS** názvu domény sú správne nakonfigurované.

###

### Uistenie sa, že nastavenia DNS domény sú správne nakonfigurované {#making-sure-the-domain-dns-settings-are-properly-configured}

Aby mapovanie fungovalo, musíte sa uistiť, že doména, ktorú plánujete mapovať, smeruje na IP adresu vašej siete. Upozorňujeme, že potrebujete IP adresu siete – IP adresu domény, kde je nainštalovaný Ultimate Multisite – nie IP adresu vlastnej domény, ktorú chcete mapovať. Na vyhľadanie IP adresy konkrétnej domény odporúčame napríklad prejsť na [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html).

Na správne namapovanie domény musíte do svojej konfigurácie **DNS** pridať **A RECORD**, ktorý smeruje na túto **IP adresu**. Správa DNS sa medzi rôznymi registrátormi domén výrazne líši, ale online existuje množstvo návodov, ktoré to pokrývajú, ak vyhľadáte „ _Creating A Record on XXXX_ “, kde XXXX je váš registrátor domény (napr.: „ _Creating A Record on_ _GoDaddy_ “).

Ak máte problém to sprevádzkovať, **kontaktujte podporu svojho registrátora domény** a v tejto časti vám budú vedieť pomôcť.

Ak plánujete umožniť svojim klientom mapovať si vlastné domény, budú musieť túto časť vykonať sami. Ak nebudú vedieť vytvoriť A Record, nasmerujte ich na systém podpory ich registrátora.

### Mapovanie vlastného názvu domény ako Super Admin {#mapping-custom-domain-name-as-super-admin}

Keď ste vo svojej sieti prihlásení ako super admin, môžete jednoducho pridávať a spravovať vlastné názvy domén tak, že prejdete do časti **Ultimate Multisite > Domény**.

![Stránka zoznamu domén v Ultimate Multisite](/img/admin/domains-list.png)

Na tejto stránke môžete hore kliknúť na tlačidlo **Pridať doménu** a otvorí sa modálne okno, kde môžete nastaviť a vyplniť **vlastný názov domény** , **podstránku**, na ktorú chcete vlastný názov domény použiť, a rozhodnúť sa, či ho chcete nastaviť ako **primárny názov domény** alebo nie (uvedomte si, že môžete namapovať **viacero názvov domén na jednu podstránku**).

![Modálne okno Pridať doménu s názvom domény, výberom stránky a prepínačom primárnej domény](/img/admin/domain-add-modal.png)

Po zadaní všetkých informácií môžete potom dole kliknúť na tlačidlo **Pridať existujúcu doménu**.

Tým sa spustí proces overovania a načítavania informácií DNS vlastnej domény. V spodnej časti stránky uvidíte aj záznam, aby ste mohli sledovať proces, ktorým prechádza. Dokončenie tohto procesu môže trvať niekoľko minút.

Ultimate Multisite v2.13.0 tiež automaticky vytvára interný záznam domény, keď sa vytvorí nová lokalita na hostiteľovi, ktorý sa má považovať za doménu pre konkrétnu lokalitu. Ak je hostiteľ primárnou doménou siete alebo jednou zo zdieľaných základných domén pokladničného formulára nakonfigurovaných v poli **URL lokality**, automatický záznam mapovanej domény sa preskočí, aby táto zdieľaná základná doména zostala dostupná pre každú lokalitu, ktorá ju používa.

Keď si zákazník zaregistruje novú doménu cez Domain Seller v1.3.0 alebo novší, Ultimate Multisite predvolene automaticky namapuje zaregistrovanú doménu na sieťovú lokalitu zákazníka. Administrátori už po úspešnej registrácii nemusia pridávať samostatný záznam mapovanej domény, pokiaľ nechcú upraviť možnosti, ako je príznak primárnej domény, stav aktivácie alebo spracovanie SSL.

**Fáza** alebo stav by sa mali zmeniť z **Kontrola DNS** na **Pripravené**, ak je všetko správne nastavené.

<!-- Snímka obrazovky nedostupná: Riadok domény zobrazujúci fázu Kontrola DNS v zozname domén -->

<!-- Snímka obrazovky nedostupná: Riadok domény zobrazujúci fázu Pripravené so zeleným indikátorom stavu -->

Ak kliknete na názov domény, budete môcť vidieť niektoré možnosti v jej vnútri. Pozrime sa na ne v skratke:

![Stránka detailu domény s prepínačmi fázy, lokality, aktivity, primárnosti a SSL](/img/admin/domain-edit.png)

**Fáza:** Toto je fáza, v ktorej sa doména nachádza. Keď doménu pridáte prvýkrát, pravdepodobne bude vo fáze **Kontrola DNS**. Proces skontroluje záznamy DNS a potvrdí, že sú správne. Potom sa doména presunie do fázy **Kontrola SSL**. Ultimate Multisite skontroluje, či doména má SSL alebo nie, a zaradí vašu doménu ako **Pripravené** alebo **Pripravené (bez SSL)**.

**Lokalita:** Subdoména, ktorá je priradená k tejto doméne. Mapovaná doména zobrazí obsah tejto konkrétnej lokality.

**Aktívne:** Túto možnosť môžete zapnúť alebo vypnúť, aby ste doménu aktivovali alebo deaktivovali.

**Je primárna doména?:** Vaši zákazníci môžu mať pre každú lokalitu viac než jednu mapovanú doménu. Pomocou tejto možnosti vyberte, či je toto primárna doména pre konkrétnu lokalitu.

**Je zabezpečená?:** Aj keď Ultimate Multisite pred jej povolením kontroluje, či doména má certifikát SSL alebo nie, môžete manuálne vybrať, či sa má doména načítať s certifikátom SSL alebo bez neho. Upozorňujeme, že ak webová lokalita nemá certifikát SSL a pokúsite sa vynútiť jej načítanie cez SSL, môže to spôsobiť chyby.

### Mapovanie vlastného názvu domény ako používateľ podlokality {#mapping-custom-domain-name-as-subsite-user}

Administrátori podlokalít môžu tiež mapovať vlastné názvy domén zo svojho administračného Dashboard podlokality.

Najprv sa musíte uistiť, že túto možnosť povolíte v nastaveniach **Mapovanie domén**. Pozrite si snímku obrazovky nižšie.

<!-- Snímka obrazovky nedostupná: Nastavenia mapovania domén umožňujúce používateľom podlokalít mapovať domény cez prepínač Správa DNS zákazníkom -->

Túto možnosť môžete nastaviť alebo nakonfigurovať aj na úrovni **Plánu** alebo v možnostiach produktu v časti **Ultimate Multisite > Produkty**.

![Sekcia Vlastné domény na stránke úpravy produktu](/img/config/product-custom-domains.png)

Keď je ktorákoľvek z týchto možností povolená a používateľ podlokality má povolené mapovať vlastné názvy domén, používateľ podlokality by mal na stránke **Account** vidieť metabox s názvom **Domény**.

<!-- Snímka obrazovky nedostupná: Metabox Domény na stránke Account podlokality s tlačidlom Pridať doménu -->

Používateľ môže kliknúť na tlačidlo **Pridať doménu** a otvorí sa modálne okno s niekoľkými pokynmi.

<!-- Snímka obrazovky nedostupná: Modálne okno Pridať doménu zobrazujúce pokyny k DNS A záznamu pre používateľov podlokality -->

Používateľ potom môže kliknúť na **Ďalší krok** a pokračovať v pridávaní vlastného názvu domény. Môže si tiež vybrať, či to bude primárna doména alebo nie.

<!-- Snímka obrazovky nedostupná: Formulár Pridať doménu s poľom vlastného názvu domény a prepínačom primárnej domény -->

<!-- Snímka obrazovky nedostupná: Potvrdzovací krok Pridať doménu, ktorý spúšťa overenie DNS -->

Kliknutím na **Pridať doménu** sa spustí proces overovania a získavania informácií DNS vlastnej domény.

### O synchronizácii domén {#about-domain-syncing}

Synchronizácia domén je proces, pri ktorom Ultimate Multisite pridá vlastný názov domény do vášho hostingového Account ako doplnkovú doménu **aby mapovanie domén fungovalo**.

Synchronizácia domén prebieha automaticky, ak má váš poskytovateľ hostingu integráciu s funkciou mapovania domén Ultimate Multisite. Aktuálne sú týmito poskytovateľmi hostingu _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ a _Cpanel._

Keď je integrácia poskytovateľa hostingu aktívna, Ultimate Multisite môže tiež zaradiť do frontu úlohu vytvorenia DNS alebo subdomény na strane poskytovateľa pre novovytvorené lokality. Ak žiadna integrácia túto úlohu nespracúva, úloha na pozadí sa preskočí, aby sa predišlo položkám vo fronte, ktoré nič nevykonajú. Kontroly DNS a SSL pre mapované domény naďalej prebiehajú cez bežný proces fáz domény.

Túto integráciu budete musieť aktivovať v nastaveniach Ultimate Multisite na karte **Integrácia**.

![Karta Integrácie v nastaveniach Ultimate Multisite zobrazujúca poskytovateľov hostingu](/img/config/integrations-tab.png)

<!-- Snímka obrazovky nedostupná: Odkazy Konfigurácia poskytovateľa hostingu na karte nastavení Integrácie -->

_Upozorňujeme, že ak váš poskytovateľ hostingu nie je jedným z vyššie uvedených poskytovateľov, **budete musieť názov domény manuálne synchronizovať alebo pridať** do svojho hostingového Account._
