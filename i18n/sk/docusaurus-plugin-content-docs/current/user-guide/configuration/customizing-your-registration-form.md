---
title: Prispôsobenie vášho registračného formulára
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Prispôsobenie vášho registračného formulára {#customizing-your-registration-form}

Aby vaša sieť vyzerala jedinečne oproti všetkým ostatným SaaS postaveným na platforme WordPress, Ultimate Multisite vám umožňuje prispôsobiť registračné a prihlasovacie stránky pomocou našej funkcie **Checkout Forms**.

Hoci sú jednoduchým a flexibilným spôsobom, ako experimentovať s rôznymi prístupmi pri snahe konvertovať nových zákazníkov, väčšinou sa používajú na vytváranie personalizovaných registračných formulárov. Cieľom tohto článku je ukázať vám, ako to môžete urobiť.

## Prihlasovacie a registračné stránky: {#login-and-registration-pages}

Po inštalácii Ultimate Multisite automaticky vytvorí vlastné prihlasovacie a registračné stránky na vašej hlavnej lokalite. Tieto predvolené stránky môžete kedykoľvek zmeniť tak, že prejdete na stránku **Ultimate Multisite > Settings > Login & Registration**.

![Stránka nastavení prihlásenia a registrácie](/img/config/settings-general.png)

Tu je úplný pohľad na stránku nastavení prihlásenia a registrácie:

![Úplná stránka nastavení prihlásenia a registrácie](/img/config/settings-login-registration-full.png)

Pozrime sa na každú z možností, ktoré môžete prispôsobiť na stránke **Login & Registration**:

  * **Enable registration:** Táto možnosť povolí alebo zakáže registráciu vo vašej sieti. Ak je vypnutá, vaši zákazníci sa nebudú môcť zaregistrovať a predplatiť si vaše produkty.

  * **Enable email verification:** Ak je táto možnosť zapnutá, zákazníci, ktorí si predplatia bezplatný plán alebo platený plán so skúšobným obdobím, dostanú overovací e-mail a budú musieť kliknúť na overovací odkaz, aby sa ich webové stránky vytvorili.

  * **Default registration page:** Toto je predvolená stránka pre registráciu. Táto stránka musí byť zverejnená na vašej webovej stránke a musí obsahovať registračný formulár (známy aj ako checkout formulár) – kde sa vaši klienti prihlásia na odber vašich produktov. Môžete vytvoriť toľko registračných stránok a checkout formulárov, koľko chcete, len nezabudnite vložiť shortcode checkout formulára na registračnú stránku, inak sa nezobrazí.

  * **Use custom login page:** Táto možnosť vám umožňuje použiť prispôsobenú prihlasovaciu stránku namiesto predvolenej stránky wp-login.php. Ak je táto možnosť zapnutá, môžete vybrať, ktorá stránka sa použije na prihlásenie v možnosti **Default login page** (hneď nižšie).

  * **Obfuscate the original login url (wp-login.php)** : Ak chcete skryť pôvodnú prihlasovaciu URL, môžete túto možnosť zapnúť. Je to užitočné na prevenciu útokov hrubou silou. Ak je táto možnosť povolená, Ultimate Multisite zobrazí chybu 404, keď sa používateľ pokúsi pristúpiť k pôvodnému odkazu wp-login.php

  * **Force synchronous site publication:** Keď si zákazník predplatí produkt v sieti, nová čakajúca lokalita sa musí skonvertovať na skutočnú sieťovú lokalitu. Proces zverejnenia prebieha cez Job Queue, asynchrónne. Povoľte túto možnosť, aby sa zverejnenie vynútilo v tej istej požiadavke ako registrácia.

Teraz sa pozrime na ďalšie možnosti, ktoré sú stále relevantné pre proces prihlásenia a registrácie. Nachádzajú sa hneď pod **Other options** na tej istej stránke Login & registration:

  * **Default role:** Toto je rola, ktorú budú mať vaši zákazníci na svojej webovej stránke po procese registrácie.

  * **Enable Jumper:** Povolí skratku Jumper v administračnej oblasti. Jumper umožňuje administrátorom rýchlo preskočiť na obrazovky Ultimate Multisite, sieťové objekty a ďalšie podporované ciele bez prechádzania každého menu. Vypnite ho, ak chcete tento nástroj rýchlej navigácie skryť z administračného rozhrania.

  * **Add users to the main site as well:** Povolením tejto možnosti sa používateľ po procese registrácie pridá aj na hlavnú lokalitu vašej siete. Ak túto možnosť povolíte, hneď nižšie sa zobrazí aj možnosť nastaviť **predvolenú rolu** týchto používateľov na vašej webovej stránke.

  * **Enable multiple accounts:** Umožnite používateľom mať účty na rôznych lokalitách vašej siete s rovnakou e-mailovou adresou. Ak je táto možnosť vypnutá, vaši zákazníci si nebudú môcť vytvoriť účet na iných webových stránkach bežiacich vo vašej sieti s rovnakou e-mailovou adresou.

A to sú všetky možnosti súvisiace s prihlásením a registráciou, ktoré môžete prispôsobiť! Po dokončení úprav nezabudnite uložiť svoje nastavenia.

## Používanie viacerých registračných formulárov: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 ponúka editor checkout formulárov, ktorý vám umožňuje vytvoriť toľko formulárov, koľko chcete, s rôznymi poľami, ponúkanými produktmi atď.

Prihlasovacia aj registračná stránka sú vložené pomocou shortcodes: **[wu_login_form]** na prihlasovacej stránke a**[wu_checkout]** pre registračnú stránku. Registračnú stránku môžete ďalej prispôsobiť vytvorením alebo zostavením checkout formulárov.

Ak chcete získať prístup k tejto funkcii, prejdite do menu **Checkout Forms** na ľavom bočnom paneli.

![Menu Checkout Forms v bočnom paneli](/img/config/checkout-forms-list.png)

Na tejto stránke môžete vidieť všetky checkout formuláre, ktoré máte.

Ak chcete vytvoriť nový, jednoducho kliknite na **Add Checkout Form** v hornej časti stránky.

Ako východiskový bod si môžete vybrať jednu z týchto troch možností: jeden krok, viac krokov alebo prázdny formulár. Potom kliknite na **Go to the Editor**.

![Pridanie Checkout Form s možnosťami jeden krok, viac krokov alebo prázdny formulár](/img/config/checkout-forms-list.png)

Prípadne môžete upraviť alebo duplikovať formuláre, ktoré už máte, kliknutím na možnosti pod ich názvom. Nájdete tam aj možnosti na skopírovanie shortcode formulára alebo na odstránenie formulára.

![Akcie pri prejdení kurzorom nad checkout formulár s úpravou, duplikovaním a odstránením](/img/config/checkout-form-hover-actions.png)

Ak vyberiete jeden krok alebo viac krokov, checkout formulár už bude vopred vyplnený základnými krokmi potrebnými na jeho fungovanie. Potom, ak chcete, doň môžete pridať ďalšie kroky.

### Úprava Checkout Form: {#editing-a-checkout-form}

Ako sme už spomenuli, checkout formuláre môžete vytvárať na rôzne účely. V tomto príklade budeme pracovať na registračnom formulári.

Po prechode do editora checkout formulára dajte svojmu formuláru názov (bude sa používať iba na internú referenciu) a slug (používaný napríklad na vytváranie shortcodes).

![Editor formulára pokladne s poľami názvu a slugu](/img/config/checkout-form-name-slug.png)

Formuláre sa skladajú z krokov a polí. Nový krok môžete pridať kliknutím na **Pridať nový krok pokladne**.

![Tlačidlo Pridať nový krok pokladne](/img/config/checkout-form-add-step.png)

Na prvej karte modálneho okna vyplňte obsah kroku svojho formulára. Zadajte mu ID, názov a popis. Tieto položky sa väčšinou používajú interne.

![Karta obsahu kroku pokladne s ID, názvom a popisom](/img/config/checkout-form-step-content.png)

Ďalej nastavte viditeľnosť kroku. Môžete si vybrať medzi **Vždy zobraziť** , **Zobraziť iba prihláseným používateľom** alebo **Zobraziť iba hosťom**.

![Možnosti viditeľnosti kroku pokladne](/img/config/checkout-form-step-visibility.png)

Nakoniec nakonfigurujte štýl kroku. Tieto polia sú voliteľné.

![Konfigurácia štýlu kroku pokladne](/img/config/checkout-form-step-style.png)

Teraz je čas pridať polia do nášho prvého kroku. Stačí kliknúť na **Pridať nové pole** a vybrať typ sekcie, ktorý chcete.

![Tlačidlo Pridať nové pole](/img/config/checkout-form-add-field-button.png)![Rozbaľovací zoznam výberu typu poľa](/img/config/checkout-form-field-type-dropdown.png)

Každé pole má rôzne parametre, ktoré je potrebné vyplniť. Pre tento prvý vstup vyberieme pole **Používateľské meno**.

![Konfigurácia poľa Používateľské meno](/img/config/checkout-form-username-content.png)![Parametre poľa Používateľské meno](/img/config/checkout-form-username-visibility.png)![Ďalšie nastavenia poľa Používateľské meno](/img/config/checkout-form-username-style.png)

Môžete pridať toľko krokov a polí, koľko potrebujete. Ak chcete zobraziť svoje produkty, aby si vaši zákazníci mohli jeden vybrať, použite pole Cenová tabuľka. Ak chcete nechať svojich klientov vybrať si šablónu, pridajte pole Výber šablóny. A tak ďalej.

![Editor formulára pokladne s poľom výberu šablóny](/img/config/checkout-form-with-template-field.png)

_**Poznámka:** Ak vytvoríte produkt po vytvorení formulára pokladne, budete musieť produkt pridať v sekcii Cenová tabuľka. Ak ho nepridáte, produkt sa vašim zákazníkom na registračnej stránke nezobrazí._

_**Poznámka 2:** používateľské meno, e-mail, heslo, názov webu, URL webu, súhrn objednávky, platba a tlačidlo odoslania sú povinné polia na vytvorenie formulára pokladne._

Počas práce na formulári pokladne môžete vždy použiť tlačidlo Náhľad a pozrieť si, ako budú formulár vidieť vaši klienti. Môžete tiež prepínať medzi zobrazením ako existujúci používateľ alebo návštevník.

![Tlačidlo Náhľad v editore formulára pokladne](/img/config/checkout-form-preview-button.png)![Náhľad formulára pokladne ako návštevník alebo existujúci používateľ](/img/config/checkout-form-preview-modal.png)

Nakoniec v časti **Pokročilé možnosti** môžete nakonfigurovať správu pre stránku **Ďakujeme**, pridať snippets na sledovanie konverzií, pridať vlastné CSS do formulára pokladne alebo ho obmedziť na určité krajiny.

![Pokročilé možnosti so stránkou Ďakujeme, sledovaním konverzií a vlastným CSS](/img/config/checkout-form-advanced.png)

Formulár pokladne môžete tiež manuálne povoliť alebo zakázať prepnutím tejto možnosti v pravom stĺpci, alebo formulár natrvalo odstrániť.

![Prepínač aktívneho stavu a možnosť odstránenia formulára pokladne](/img/config/checkout-form-active.png)

Nezabudnite uložiť svoj formulár pokladne!

![Tlačidlo Uložiť formulár pokladne](/img/config/checkout-form-save.png)

Ak chcete získať shortcode svojho formulára, kliknite na **Vygenerovať shortcode** a skopírujte výsledok zobrazený v modálnom okne.

![Modálne okno Vygenerovať shortcode so shortcode na skopírovanie](/img/config/checkout-form-editor.png)

_**Poznámka:** Tento shortcode budete musieť pridať na svoju registračnú stránku, aby sa do nej pridal tento formulár pokladne._

## Predvýber produktov a šablón pomocou URL parametrov: {#pre-selecting-products-and-templates-via-url-parameters}

Ak chcete vytvoriť prispôsobené cenové tabuľky pre svoje produkty a vo formulári pokladne predvybrať produkt alebo šablónu, ktorú si zákazník vyberie z vašej cenovej tabuľky alebo stránky so šablónami, môžete na to použiť URL parametre.

### **Pre plány:** {#for-plans}

Prejdite na **Ultimate Multisite > Produkty > Vybrať plán**. V hornej časti stránky by ste mali vidieť tlačidlo **Kliknutím skopírovať zdieľateľný odkaz**. Toto je odkaz, ktorý môžete použiť na predvýber tohto konkrétneho plánu vo svojom formulári pokladne.

![Stránka produktu s tlačidlom zdieľateľného odkazu](/img/config/products-list.png)

Upozorňujeme, že tento zdieľateľný odkaz je platný iba pre **Plány**. Zdieľateľné odkazy nemôžete používať pre balíky ani služby.

### Pre šablóny: {#for-templates}

Ak chcete vo formulári pokladne predvybrať šablóny webu, môžete na URL registračnej stránky použiť parameter: **?template_id=X**. „X“ je potrebné nahradiť **ID číslom šablóny webu**. Ak chcete získať toto číslo, prejdite na **Ultimate Multisite > Weby**.

Kliknite na **Spravovať** priamo pod šablónou webu, ktorú chcete použiť. Uvidíte číslo SITE ID. Stačí použiť toto číslo pre túto konkrétnu šablónu webu, aby bola predvybraná vo vašom formulári pokladne. V našom prípade tu bude URL parameter **?template_id=2**.

![Zoznam webov zobrazujúci ID šablóny webu](/img/config/site-templates-list.png)

Povedzme, že web našej siete je [**www.mynetwork.com**](http://www.mynetwork.com) a naša registračná stránka s formulárom pokladne sa nachádza na stránke **/register**. Celá URL s touto predvybranou šablónou webu bude vyzerať takto: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

A ak chcete, môžete vo svojom formulári pokladne predvybrať produkty aj šablóny. Stačí skopírovať zdieľateľný odkaz plánu a na koniec vložiť parameter šablóny. Bude to vyzerať takto: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
