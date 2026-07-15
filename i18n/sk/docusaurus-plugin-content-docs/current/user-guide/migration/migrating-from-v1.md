---
title: Migrácia z V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migrovanie z V1

## Ultimate Multisite sa presielil z pôvodnej verzie 1.x na verzii 2.x. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite verzia 2.0 a vyššia je úplná prepracovanie kódu, čo znamená, že medzi staršou verziou a novou je veľmi málo spoločného. Preto pri aktualizácii z 1.x na 2.x budete musieť svoje dáta presiať do formátu, ktorý nové verzie pochopí.

Našťastne Ultimate Multisite 2.0+ **poskytuje migračnú nástroj** zabudovanú do jádra, ktorá je schopná zistiť dáta z novej verzie a premeniť ich na nový formát. Táto migrácia sa robí počas **Setup Wizard** verzie 2.0+.

Táto lekcia pokrýva, ako funguje migračný nástroj, čo robiť v prípade chyby a ako riešiť problémy, ktoré môžu vzniknúť počas tohto procesu.

_**DÔLEŽITÉ: Pred začiatkom aktualizácie z verzie 1.x na verziu 2.0 si uistite, že vytvoríte zálohu databázy vášho webu**_

## Prvky kroku {#first-steps}

Prvý krok je stiahnuť .zip súbor pluginu a nainštalovať verzii 2.0 na dashboard admina vašej siete.

Po [instalácii a aktivácii verzie 2.0](../getting-started/installing-ultimate-multisite.md) siстема automaticky zistí, že váš Multisite běží na staršej verzii, a uvidíte toto upozornenie na začiatku stránky pluginu.

_**POZNÁMKA:** Ak máte nainštalovanú Ultimate Multisite 1.x na svojom Multisite, budete mať možnosť nahradiť plugin verziou, ktorú si chceli stiahnuť. Prosím, kliknite a vyberte **Nahradiť aktuálny s načítaným**._

<!-- Zobrazenie snímky obrazovky nedostupné: Stránka pluginu zobrazujúca možnosť nahradiť v1 na načítanu v2 verziu -->

Nasledujú stránka vám ukáže, aké staršie doplnky máte nainštalované sเวอร์ziou 1.x. Budete tam nájsť pokyny, či je verzia, ktorú používate, kompatibilná s verziou 2.0 alebo či budete musieť nainštalovať aktualizovanú verziu doplnku po migracji.

<!-- Screenshot unavailable: Zobrazenie na vrchnej časti stránky s doplnkami o aktualizácii na v2.0 a zozname doplnkov, ktoré potrebujú aktualizáciu -->

Keď budete presvedčení, že ste pripravení pokračovať, môžete kliknúť na tlačidlo **Navštíviť instalátor, aby ste dokončili aktualizáciu**.

<!-- Screenshot unavailable: Tlačidlo s textom Navštíviť instalátor, aby ste dokončili aktualizáciu -->

Potom vás presmeruje na stránku asistenta instalácie so svietnymi správami. Musíte len kliknúť na **Začať**, aby ste prešli na nasledujúcu stránku.

<!-- Screenshot unavailable: Svietna stránka asistenta konfigurácie s tlačidlom Začať -->

Po kliknutí na **Začať** vás presmeruje na Pre-install Checks_._ Zobrazí vám to informácie o vašom systéme a nainštalovaní WordPressu a povie, či splňujete **požiadavky Ultimate Multisite**.

<!-- Screenshot unavailable: Stránka Pre-install Checks zobrazujúca potvrdenie požiadaviek na systém -->

Nasledujúci krok je zadanie svojho licenčného kľúča Ultimate Multisite a aktivácia doplnku. To zabezpečí, že všetky funkcie, vrátane doplnkov, budú prístupné na vašom svete.

<!-- Screenshot unavailable: Stránka aktivácie licencie s zadaniem licenčného kľúča a tlačidlom Súhlasím a aktivovať -->

Po zadaní svojho kľúča kliknite na **Súhlasím a aktivovať**.

Po aktivácii licence môžete začať s samotnou inštaláciou kliknutím na **Inštalovať** na nasledujúcej stránke. To automaticky vytvorí potrebné súbory a databázu, ktoré sú potrebné pre fungovanie verzie 2.0.

## Teraz migracja {#now-the-migration}

Migrátor má v sobie vbudovanú bezpečnostnú funkciu, ktorá skontroluje váš celý multisite a uistí sa, že všetky vaše dáta Ultimate Multisite môžu byť migrácia bez problémov. Kliknite na tlačidlo **Run Check** (Spustiť kontrolu), aby ste začali proces.

Po spustení kontroly máte dve možnosti: výsledok môže byť buď **s chybou**, alebo **bez chyby**.

### S chybou {#with-error}

Ak dostanete správu o chuke, budete musieť kontaktovať náš podporný tím, aby vám mohli pomôcť s opravou chyby. Uistite sa, že **poskytnete si log chyby** pri vytváraní tínetka (ticket). Môžete si log stiahnuť alebo kliknúť na odkaz, ktorý uvádza kontakt s našim podporným tímom. Otvorenie to otvorí pomocné okno vpravo na vašej stránke s polmi už vyplnenými polmi, ktoré obsahujú logy chýb pod popisom.

_**Keďže systém našiel chybu, nebudete môcť pokračovať v migracji na verziu 2.0. Môžete sa potom vrátiť na verziu 1.x a pokračovať v prácení vašej siete, kým chyba nebude opravená.**_

### Bez chyby {#without-error}

Ak systém chybu nepretrvá, uvidíte správu o úspechu a tlačidlo **Migrate** (Migrovať) v spodnej časti, ktoré vám umožní pokračovať v migracji. Na tejto stránke budete upozornení na vytvorenie zálohy vašej databázy pred pokračovaním, čo odporúčame. Kliknite na **Migrate**, ak máte už zálohu.

A to je všetko!

Môžete pokračovať v nastavovaní Wizažoru, aby ste aktualizovali váš logo a iné veci na sieti, alebo môžete začať navigovať po menu vašej verzie Ultimate Multisite 2.0 a jej novom rozhraní. Začnite sa zábava!
