---
title: Stránka účtu klienta
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Stránok účtu vášho klienta (v2)

_**DÔLEŽITÉ UPOZORNENIE: Tento článok sa týka Ultimate Multisite verzie 2.x.**_

Keď si zákazníci na vašej sieti predplatia plán, dostávajú prístup k webovej stránke a jej dashboardu s dôležitými informáciami o svojich platbách, členstve, doménach, obmedzeniach plánu atď.

V tomto tutoriáli vás pop導iete cez stranu účtu klienta a uvidíte, čo si vaši zákazníci v nej môžu vidieť a robiť.

## Stránka účtu

Stránku účtu môžete použiť kliknutím na **Account** (Účet) v dashboarde vášho klienta.

![Menu účtu v dashboarde klienta](/img/account-page/account-menu.png)

Na sieťach suverénnych prepojenia Ultimate Multisite v2.13.0 zachová toto správanie správu zákazníkov na hlavnej sieti. Ak si zákazník otvorí účet, platbu, faktúru, správu sieti, prepínanie šablón a mapovanie domén z suverénneho prepojenia, akcia sa vráti na panel klienta na hlavnej sieti, aby boli záznamy o fakturácii a členstve siete autoritívnymi.

Keď zákazník prichádza z suverénneho prepojenia, panel klienta na hlavnej sieti môže obsahovať link späť na sitú prepojenia. Tento link sa zobrazí len vtedy, ak Ultimate Multisite môže potvrdiť cieľ spätného linku ako jednu z sit klientov, čo zabraňuje náhodným presmerovaniam a zároveň zachová pracovný postup prepojenia.

![Prehľad stránky účtu klienta](/img/account-page/overview.png)

Po kliknutí na nie uvidia prehľad svojho členstva, adresy fakturácie, faktúr, domén, obmedzení siete a budú môcť tiež zmeniť **Site Template** (Šablón sita) (ak je to povolené v vašej sieti).

Mogú tiež zmeniť členstvo na iný plán alebo kúpiť iný balík alebo službu, ktorú ponúkate. Podíväme sa na každý sekciu zvlášť.

### Prehľad o vašej členiteľskej karta:

Prvý blok pod názvom webovej stránky vášho zákazníka zobrazuje prehľad ich aktuálneho plánu a služieb/balíkov, ktoré s ním zakúpili. Blok tiež zobrazuje číslo členstva, počiatočnú zaplatenú sumu za nie, kolko stojí plán a aký balík/služba a kolko krát sa za to účtovali. Môžu vidieť aj, či je členstvo **Aktívne**, **Vypadlo** alebo **Zrušené**.

![Prehľad členstva zobrazujúci plán, sumu a detaily fakturácie](/img/account-page/membership-card.png)

Pod týmto blokom si môžu zákazníci zobraziť bloky **O tejto webovej stránke** a **Limitov webovej stránky**. Tieto bloky im ukazujú všetky obmedzenia, ktoré sú spojené s ich plánom: priestor na disku, príspevky, stránky, návštevy atď. Môžete tieto limity nakonfigurovať na každej stránke plánu v **Ultimate Multisite > Products**.

![Blok pre o tú webovú stránku a limity webovej stránky zobrazujúci obmedzenia plánu](/img/account-page/site-limits.png)

Na pravej strane sekcie **Vaše členstvo** si môžu zákazníci kliknúť na **Zmeniť**. To im zobrazí všetky dostupné plány a balíky/služby. Ak si vyberú iný plán, obmedzenia budú platnať pre ten nový plán namiesto aktuálnych obmedzení členstva – nezáleží na tom, či sa znížajú alebo zvýšia.

Teraz, ak si zákazníci vyberú kúpu balíkov alebo služieb pre toto aktuálne členstvo – napríklad viac priestoru na disku alebo návštevy – aktuálne členstvo sa nepremení, ale do nieho budú pridané len nové balíky.

Pozrite, že kódovacie kódy (coupon codes) sa nemôžu pridať na tejto stránke zmeny členstva. Ak si zákazník v prvom kúpe členstva použil kód, tento kód bude platnať aj pre toto nové členstvo.

### Aktualizácia fakturačného adresného údaje:

Na stránke účtu si môžu zákazníci aktualizovať aj adresu fakturačného účtu. Stať sa to dá len kliknutím na **Aktualizovať** vedľa _Billing Address_.

![Sekcia adresa faktura s tlačidlom Aktualizovať](/img/account-page/billing-address.png)

U zákazníka sa zobrazí nové okno. Všetko, čo mu treba, je vyplniť novú adresu a kliknúť na _Save Changes_ (Uložiť zmeny).

![Form pre aktualizáciu adresy faktura](/img/account-page/billing-address-form.png)

### Zmena šablóny webu:

Aby ste umožnili zákazníkom zmeniť šablóny svojho webu, musíte pójsti do **Ultimate Multisite > Settings > Sites** a zapnúť možnosť **Allow Template Switching** (Povoliť prepínanie šablón).

Priamo v **Ultimate Multisite > Products** vyberte svoje plány a prejdite na záložku **Site Templates**. Uistite sa, že je zapnutá možnosť **Allow Site Templates** (Povoliť šablóny webu) a pri **Site Template Selection Mode** (Režim výberov šablon webu) je vybraná možnosť **Choose Available Site Templates** (Vybrať dostupné šablóny webu).

![Záložka produktové šablóny webu s režimom výberov šablon](/img/config/product-site-templates.png)

Budete môcť vidieť všetky dostupné šablóny webu na vašej sieti. Vyberte, ktoré chcete urobiť dostupnými a ktoré nech chcete byť nedostupné pre zákazníkov pod týmto plánom. Dajte pozor, že tieto možnosti tiež ovplyvňujú formulár pre objednávku (checkout form), takže akúkoľvek šablónu vybranú ako **Not Available** (Nespôsobilá) sa nebude zobrazovať na registračnom formulári pre tento plán.

Teraz si zákazníci môžu kliknúť na **Change Site Template** (Zmeniť šablónu webu) v rámci svojho účtu.

![Tlačidlo Zmeniť šablónu webu na stránke účtu](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 zobrazuje prenovený panel prepínania šablón. Panel začína **current-template card** (karta aktuálnej šablóny), aby zákazníci videli, ktorá šablóna je aktívna, než si vyberú náhradu.

Trvá viditeľná siatka dostupných šablat cien, kým zákazníci prezerajú svoje možnosti. Pomáha im porovnať šablóny povolené pre ich plán bez toho, aby ztratili pohľad na aktuálne vybranú možnosť.

![Zoznam dostupných šablat cien pre plán](/img/config/site-templates-list.png)

Po vybraní toho, ktorý chcú zmeniť, budú požiadaní o potvrdenie zmeny.

![Dialog potvrdenia prepínania šablóny cien](/img/account-page/template-switch-confirm.png)

Po zapnutí potvrdenia a kliknutí na **Process Switch** sa nová šablóna cien bude používať na webovej stránke vášho zákazníka.

Zákazníci môžu tiež použiť možnosť **Reset current template** z tohto panela, ak potrebujú siť vrátiť späť na aktuálne priradenú šablónu. Ak sa prepínajú na novú šablónu, resetovanie šablóny môže prepisávať obsah webovej stránky, takže zákazníci by mali potvrdiť to len, ak pochopujú aký je efekt resetovacia akcia.

### Pridávanie prispôsobených domén:

Vaši zákazníci tiež budú mať možnosť pridať si prispôsobenú doménu pre tento plán na svoje účto. Aby umožnili vašim zákazníkom používať prispôsobené domény, prejdite do **Ultimate Multisite > Settings >** **Domain Mapping**.

Zapnite možnosť **Enable Domain Mapping**. Umožní to vašim zákazníkom používať prispôsobené domény na sieti.

Nezabudnite tiež skontrolovať, či je mapovanie domén vriadené podľa produktu – pretože môžete produkt obmedziť tak, aby váš zákazníci nemohli používať prispôsobené domény.

Prejdite do **Ultimate Multisite > Products**. Vyberte plán, ktorý si vyberiete a prejdite na záložku **Custom Domains**. Zapnite možnosť **Allow Custom Domains**.

![Záložka Prispôsobené domény s prepínačom Allow Custom Domains](/img/config/product-custom-domains.png)

Toto umožní všetkým zákazníkom, ktorí sa suscribujú na tento konkrétny plán, používať vlastné domény. Teraz na stránke účtu môžu vaši zákazníci pridať vlastnú doménu kliknutím na **Pridať doménu**.

![Tlačidlo Pridať doménu na stránke účtu](/img/account-page/add-domain-button.png)

Prvá okná, ktoré sa otvorí, zobrazí vašim zákazníkom správu s inštrukciami, ako aktualizovať svoje DNS záznamy, aby fungovala táto vlastná doména v vašej sieti.

![Instrukcie pre DNS pri pridávaní vlastnej domény](/img/account-page/add-domain-dns.png)

Táto správu môžete (vy) upraviť v **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Nastavenie Pridať novú doménu v Mapovaní domén](https://example.com/img/config/settings-domain-mapping.png)

Tu je kompletný prehľad nastavení mapovania domén:

![Kompletná stránka nastavení mapovania domén](/img/config/settings-domain-mapping-full.png)

Po kliknutí na **Ďalší krok** môžu vaši zákazníci pridať svoje vlastné doménové meno a vybrať, či bude táto vlastná doména primárna. Dôležité je si všimnúť, že zákazníci môžu používať viac ako jednu vlastnú doménu pre svoje webové stránky, takže môžu vybrať, ktorá z nich bude primárna.

![Zدخlo zadanie názvu vlastnej domény s možnosťou primárnej domény](/img/account-page/add-domain-primary.png)

Po kliknutí na **Pridať doménu** sa doména pridalá do účtu vášho zákazníka. Všetko, čo im teraz treba, je zmeniť DNS záznamy tejto vlastnej domény u svojho registra domén.

### Zmena hesla:

V dashboarde účtu môžu vaši zákazníci tiež zmeniť svoje heslo kliknutím na **Zmeniť heslo**.

![Tlačidlo Zmeniť heslo na stránke účtu](/img/account-page/change-password-button.png)

Toto zobrazí nové okno, kde si vaši zákazníci musia zadajúc svoje aktuálne heslo a potom nový heslo, ktoré chcú použiť.

![Forma zmeny hesla s polmi aktuálnym a novým heslem](/img/account-page/change-password-form.png)

### Zóna nebezpečenstva:

Máme tiež dve možnosti, ktoré sú v časti **Danger Zone** uvedené: **Vymazať web** a **Vymazať účet**. Obidve sú v Danger Zone, pretože tieto dve akcie sú nepovratné. Ak si váš zákazník vymaže svoj web alebo účet, nemôžu ho vrátiť späť.

![Danger Zone s možnosťami Vymazať web a Vymazať účet](/img/account-page/danger-zone.png)

Ak kliknú na akúkoľvek z týchto dvoch možností, zobrazí sa im okno, kde si musia zapnúť možnosť odstrániť web alebo účet a budú upozornení, že toto opatrenie nemôže byť vrátené späť.

![Potvrdenie vymazania webu](/img/account-page/delete-site-confirm.png)

![Potvrdenie vymazania účtu](/img/account-page/delete-account-confirm.png)

Ak si vymažu svoj web, ich účet a členstvo zostanú nepoškodené. Len strácajú všetko obsah na ich webe. Ak si vymažu svoj účet, všetky webové stránky, členstvá a informácie týkajúce sa tohto účtu budú ztratene.
