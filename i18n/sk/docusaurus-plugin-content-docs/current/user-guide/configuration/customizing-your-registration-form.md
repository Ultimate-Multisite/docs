---
title: Prispôsobenie vášho formulára registráции
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Prispôsobenie vášho formulára registrácii

Aby bol váš web unikátny vo vzťah k všetkým iným SaaS riešeniam na platforme WordPress, Ultimate Multisite vám umožňuje prispôsobiť vaše stránky pre prihlásenie a registrácia pomocou našej funkcie **Checkout Forms**.

Hoci sú to jednoduchý a flexibilný spôsob experimentovania s rôznymi prístupmi pri snahe konvertovať nových zákazníkov, používajú sa ich hlavne na vytvorenie personalizovaných formulárov registrácii. Tento článok má za cieľ ukázať vám, ako to urobiť.

## Stránky pre prihlásenie a registrácia:

Po nainštalovaní Ultimate Multisite automaticky vytvorí prispôsobené stránky pre prihlásenie a registrácia na vašej hlavnej sieti. Môžete tieto štandardné stránky v anytime zmeniť, navrhnutím do sekcie **Ultimate Multisite > Settings > Login & Registration**.

![Stránka nastavení prihlásenia a registrácie](/img/config/settings-general.png)

Tu je kompletný prehľad stránky nastavení pre prihlásenie a registrácia:

![Kompletná stránka nastavení prihlásenia a registrácie](/img/config/settings-login-registration-full.png)

Podime si pozrime každý z možností, ktoré môžete prispôsobiť na stránke **Login & Registration**:

  * **Enable registration (Umožniť registrácia):** Táto možnosť vojde alebo vypína registrácia v vašej sieti. Ak je vypnutá, zákazníci nemôžu sa zaregistrovať ani predpísabiť vaše produkty.

  * **Enable email verification (Umožniť overenie e-mailom):** Ak je táto možnosť zapnutá, zákazníci, ktorí sa predpísajú na bezplatný plán alebo plný plán s skúšobnou ležiakou, dostanú overený e-mail a budú musieť kliknúť na linku pre overenie, aby sa ich web vytvoril.

* **Predvolaná registračná stránka:** Toto je štandardná stránka pre registráciu. Musíte ju publikovať na vašom webu a musí obsahovať formulár pre registráciu (ktorý sa tiež nazýva formulár pre pokladňovanie) – kde si vaši zákazníci predpíšu vaše produkty. Môžete vytvoriť quantoskoľvek registračné stránky a formulárov pre pokladňovanie, ak si to chcete, ale pamätajte, že musíte do registračnej stránky pridať shortcode pre formulár pre pokladňovanie, inak sa nebude zobrazovať.

* **Použiť vlastnú login stránku:** Táto možnosť vám umožňuje použiť prispôsobenú login stránku, iná ako štandardná stránka wp-login.php. Ak si toto zapne, môžete vybrať, ktorá stránka bude používaná na prihlásenie v možnosti **Predvolaná login stránka** (priamo pod ňou).

* **Zmaskovať pôvodnú URL pre prihlásenie (wp-login.php):** Ak chcete skryť pôvodnú URL pre prihlásenie, môžete zapnúť túto možnosť. Toto je užitočné na zobrazenie brute-force útokov. Ak si túto možnosť aktivujete, Ultimate Multisite zobrazí chybu 404, keď používateľ skúsi prístup k pôvodnému linku wp-login.php.

* **Nezamerne vynútiť synchronizovanú publikáciu stránky:** Po tom, čo zákazník predpíše produkt v sieti, nová stránka v stavu "pending" musí byť zmenená na reálnu sietičku. Proces publikovania sa vykonáva via Job Queue, asynchronicne. Zapnite túto možnosť, aby ste vynútili publikáciu v tom istom požiadaniu ako registracie.

Teraz si podimeme iné možnosti, ktoré sú stále relevantné pre proces prihlásenia a registrácie. Sú tu nižšie u sekcie **Iné možnosti** na istej stránke Prihlásenie a registracie:

* **Predvolaná rola:** Toto je rola, ktorú si vaši zákazníci budú mať na svojej webovej stránke po dokončení procesu registráции.

* **Aktívajte Jumper:** Umožňuje prístup k šortkodu Jumper v adminom paneli. Jumper vám umožňuje administrátorom rýchlo prejsť na obrazovky Ultimate Multisite, sieťové objekty a iné podporované destinácie bez toho, aby museli prechádzať cez každý menu. Vypnite ho, ak preferujete skryť nástroj rýchleho navigovania z adminového rozhrania.

* **Pridajte používateľov aj na hlavnú sieti:** Aktivácia tejto možnosti prispôsobuje používateľa aj k hlavnej sieti vašej siete po procese registrácii. Ak aktivujete túto možnosť, pod ňou sa zobrazí aj možnosť nastaviť **domási rôľu** týchto používateľov na vašom webovej stránke.

* **Aktívajte viac účtov:** Umožňuje používateľom mať účty v rôznych sietiach vašej siete s rovnakým adresou e-mailu. Ak je táto možnosť vypnutá, vaši zákazníci nemôžu na iných webových stránkach bežiacich na vašej sieti vytvoriť účet s rovnakým adresou e-mailu.

A to sú všetky možnosti týkajúce sa prihlásenia a registrácii, ktoré môžete prispôsobiť! Nezabudnite uložiť svoje nastavenia po dokončení ich úpravy.

## Používanie viacerých formulárov registrácií:

Ultimate Multisite 2.0 ponúka editor formulára pre pokladňovanie (checkout form editor), ktorý vám umožňuje vytvárať quantoskoľvek formulárov, s rôznymi polmi, produktmi a inak.

Oba stránky prihlásenia a registrácii sú vložene s krátkymi kódmi: **[wu_login_form]** na stránke prihlásenia a **[wu_checkout]** pre stránku registrácii. Môžete si ďalej prispôsobiť stránku registrácií, vytvárajúc alebo upraviac formuláre pre pokladňovanie (checkout forms).

Aby ste sa dostali k tejto funkcii, prejdite do menu **Checkout Forms**, v ľavej lište.

![Menu Checkout Forms v lište](/img/config/checkout-forms-list.png)

Na tejto stránke vidíte všetky formuláre pre pokladňovanie, ktoré máte.

Ak chcete vytvoriť nový, kliknite просто na **Add Checkout Form** (Pridať formulár pre pokladňovanie) v hornej časti stránky.

Môžete si vybrať jednu z týchto troch možností ako bod na začiatok: jednorazový krok, viacstupňový alebo prázdny. Potom kliknite na **Prejsť do editoru**.

![Pridanie formulára pokladne s možnosťami jednorazového kroku, viacstupňového alebo prázdneho](/img/config/checkout-forms-list.png)

Alternatívne môžete upraviť alebo duplikovať formuláre, ktoré už máte, kliknutím na možnosti pod ich názvom. Tam nájdete aj možnosti, ako zkopírovať krátky kód (shortcode) formulára alebo ho odstrániť.

![Akcie pri prejeđaní formulára pokladne s úpravou, duplikáciou a odstránením](/img/config/checkout-form-hover-actions.png)

Ak si vyberiete jednorazový krok alebo viacstupňový, formulár pokladne bude už predpripravený s základnými krokvami pre jeho fungovanie. Potom, ak chcete, môžete pridať extra kroky.

### Upravovanie formulára pokladne:

Ako sme to už skôr spomenuli, môžete vytvárať formuláre pokladne na rôzne účely. V tomto príklade sa budeme pýtať si registračný formulár.

Po prejsť do editoru formulára pokladne mu dať názov (ktorý bude používať iba internú referenciu) a slug (používaný na vytvorenie krátkych kódov, napríklad).

![Editor formulára pokladne s polmi názvom a slugu](/img/config/checkout-form-editor.png)

Formuláre sú zložité krokov a polí. Nový krok môžete pridať kliknutím na **Pridať nový krok pokladne**.

![Tlačidlo Pridať nový krok pokladne](/img/config/checkout-form-add-step.png)

Na prvom záložke okna modálne formulujte obsah svojho kroku. Dať mu ID, názov a popis. Tieto položky sa väčšom najčastejšie používajú internom účelom.

![Záložka obsahu kroku pokladne s ID, názvom a popisom](/img/config/checkout-form-step-content.png)

Ďalej nastavte viditeľnosť kroku. Môžete si vybrať medzi **Vždy zobrazovať**, **Používať iba pre prihlásené používateľov** alebo **Používať iba pre hostov**.

![Možnosti viditeľnosti kroku pokladne](/img/config/checkout-form-step-visibility.png)

Nakoniec je čas skonfigurovať štýl kroku. Toto sú voliteľné polia.

![Konfigurácia štýlu kroku pokladne](/img/config/checkout-form-step-style.png)

Teraz je čas pridať polia k našemu prvomu kroku. Stačí kliknúť na **Pridať nové pole** a vybrať typ sekcie, ktorú chcete.

![Tlačidlo Pridať nové pole](/img/config/checkout-form-step-with-fields.png)![Výpadový menu výberu typu pola](/img/config/checkout-form-field-type-dropdown.png)

Každé pole má rôzne parametre, ktoré musíte vyplniť. Pre tento prvý vstup vyberieme pole **Username** (Používateľské meno).

![Konfigurácia pola Username](/img/config/checkout-form-username-content.png)![Parametre pola Username](/img/config/checkout-form-username-visibility.png)![Dodatkové nastavenia pola Username](/img/config/checkout-form-username-style.png)

Môžete pridať quantos krokov a polí, ktoré potrebujete. Aby ste mohli zobraziť svoje produkty na výber pre zákazníkov, použite pole **Pricing Table** (Tabuľka cien). Ak chcete umožniť svojim klientom vybrať šablón, pridajte pole **Template Selection**. A tak ďalej.

_**Poznámka:** Ak vytvoríte produkt po vytvorení formulára pokladne, budete musieť ten produkt pridať do sekcie Tabuľka cien. Ak ho nepridáte, produkt sa zákazníkom na stránke registráции neobjaví._

_**Poznámka 2:** username (používateľské meno), email, heslo, názov siete, URL siete, súhrn objednávky, platba a tlačidlo odoslať sú povinné polia pre vytvorenie formulára pokladne._

Kým pracujete na svojom formulári pokladne, môžete vždy použiť tlačidlo **Preview** (Predzobraziť), aby ste videli, ako to budú vziať vaši zákazníci. Môžete tiež prepínať medzi zobrazením ako existujúce používateľ alebo návštevca.

![Predpoveď tlačidlo v redktore formulára pokladne](/img/config/checkout-form-preview-button.png)![Predpoveď formulára pokladne ako návšteva alebo existujúci používateľ](/img/config/checkout-form-preview-modal.png)

Nakoniec, v **Pokročilých možnostiach** si môžete nastaviť správu pre stránku **Ďakujeme**, pridať kód (snippets) na sledovanie konverzií, pridať vlastný CSS na váš formulár pokladne alebo ho obmedziť na určité krajiny.

![Pokročilé možnosti s stránkou ďakujeme, sledovaním konverzie a vlastným CSS](/img/config/checkout-form-advanced.png)

Môžete tiež manuálne zapnúť alebo vypnúť svoj formulár pokladne, premiňujúc túto možnosť v pravom sloupku, alebo ho trvalo odstrániť.

![Aktívny prepínač a možnosť odstrániť formulár pokladne](/img/config/checkout-form-active.png)

Nezabudnite urobiť zálohu svojho formulára pokladne!

![Tlačidlo Uložiť formulár pokladne](/img/config/checkout-form-save.png)

Aby ste získali krátky kód (shortcode) vášho formulára, kliknite na **Generovať krátky kód** a skopírujte výsledok z okna modálneho okna.

![Modálne okno Generovanie krátkeho kódu s krátkim kódom na skopírovanie](/img/config/checkout-form-editor.png)

_**Poznámka:** Musíte tento krátky kód pridať na svoju registračnú stránku, aby sa tento formulár pokladne do nej dostal._

## Predvoliteľné produkty a šablóny pomocou parametrov URL:

Ak chcete vytvoriť prispôsobené tabuľky cien pre vaše produkty a predvoliť v formulári pokladne produkt alebo šablónu, ktorú zákazník vyberie z vašej tabuľky cien alebo stránky s šablónami, môžete použiť parametre URL.

### **Pre plány:**

Prejdite do **Ultimate Multisite > Products > Select a plan**. Mali by ste vidieť tlačidlo **Kliknutím na kopiť prenosný odkaz** v hornej časti stránky. Toto je odkaz, ktorý môžete použiť na predvolenie konkrétneho plánu v svojom formulári pokladne.

![Stránka produktu s tlačidlom prenosného odkazu](/img/config/products-list.png)

Poznajte, že tento zdieľaný odkaz platí len pre **Plány**. Od linkov na shareovanie nemôžete používať balíčky ani služby.

### Pre šablóny (templates):

Ak chcete predodlobiť si webové šablóny v formulári pri objednávke, môžete použiť parametre: **?template_id=X** na URL adresa vašej registračnej stránky. "X" musíte nahradiť **ID číslom šablóny**. Toto číslo nájdete v sekcii **Ultimate Multisite > Sites**.

Kliknite na **Manage** (Správa) pod šablónou webu, ktorú chcete použiť. Uvidíte ID URL. Použite toto číslo len pre túto konkrétnu šablónu webu, aby bola predodlobená v formulári pri objednávke. V našom prípade by parametre URL vyzerali takto: **?template_id=2**.

![Zoznam sítí zobrazujúci ID šablóny](/img/config/site-templates-list.png)

Predstavte si, že na našej sieti je web [**www.mynetwork.com**](http://www.mynetwork.com) a stránka registrácii s formulárom pri objednávke sa nachádza na stránke **/register**. Celý URL s predodlobenou šablónou webu bude vyzerať takto: [**www.mynetwork.com/register/?template_id=2**](http://www.mynetwork.com/register/?template)**_id=2**.

A ak chcete, môžete predodlobiť ako produkty aj šablóny v formulári pri objednávke. Všetko, čo musíte urobiť, je skopírovať odkaz na shareovanie plánu a na konci ho vložiť parametre šablóny. Budú vyzerať takto: [**www.mynetwork.com/register/premium-plan/?template_id=2**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
