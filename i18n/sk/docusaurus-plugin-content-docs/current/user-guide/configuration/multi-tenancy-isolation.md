---
title: Izolácia multi-tenancy
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Izolácia v rámci multi-tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 podporuje izoláciu databázy a dosierokového systému na úrovni podsubdomény pre suverénne klientov. To udržiavať údaje klienta oddelené, zároveň zachová sieťové konfigurácie, fakturáciu a administráciu.

## Strategia izolácie {#isolation-strategy}

Používajte suverénnu izoláciu pre zákazníkov, ktorí vyžadujú silšiu oddelenie dát, špecifické dosierkové ukladanie alebo osobnú hranicu hosta.

Každý suverénny klient by mal:

- Vlastnú dedikovanú databázu klienta alebo strategiu predfiksu databázy schválenú pre hosta.
- Dedikovaný kořen dosierokového systému klienta.
- Registračný záznam klienta, ktorý mapuje sitó na jeho databázu, kořenovú cestu, hostname a model izolácie.
- Výsledok verifikácie migrácie pred tým, aby klient bol považovaný za aktívny (live).

## Prijínavka databázy hosta (Database host binding) {#database-host-binding}

Verzia 1.2.0 zmenila štandardné správanie priprijínavky hosta na jednej masíve pre suverénne inštalácie. Hodnotia ako `localhost` sú normalizované tak, aby Bedrock, FrankenPHP a kontajnerizované inštalácie WordPress mohly concedovať a overiť prístup k hostu, ktorý MySQL skutočne vidí.

Pri konfigurácii suverénneho klienta:

1. Nastavte databázu host na hodnotu požadovanú runtime klientom.
2. Používajte `localhost` pre lokálne socket inštalácie, ak si host očakáva lokálne pripojenia.
3. Používajte `127.0.0.1` alebo hostname slúžiaceho servera iba vtedy, ak databázový server conceduje prístup tommu hostu.
4. Po zmeny prijínavky hosta spustite verifikáciu migrácie.

Ak výsledky verifikácie ukazujú na chyby concedovania, porovnate concedovanie používateľa v DB klienta s aktuálnou prijínavkou hosta. Používateľ concedovaný pre `user@localhost` je iný ako `user@127.0.0.1` alebo `user@%`.

## Kořen dosierokového systému (Filesystem root) {#filesystem-root}

Koreňový adresár (root) pre najemcu by mal byť stabilný pri restartoch a nasadení. Vyhnite sa dočasným cestovným cienmým cestám (mount paths). Pre inštalácie v štýle Bedrock potvrďte, že koreňový adresár ukazuje na webový koreň WordPressu, ktorý očakáva tenant bootstrap, nie len na projektový koreň.

## Poradie nasadenia {#provisioning-order}

Pre nové suverénne najemce použite toto poriadok:

1. Vytvoriť záznam v registri najemcov (tenant registry entry).
2. Vytvoriť databázu najemcu a používateľa databázy.
3. Bootstrapovať schému najemcu (tenant schema).
4. Nasadiť používateľov najemcu.
5. Konfigurovať cestné cesty na dosť najemcu (tenant filesystem paths).
6. Vykonať overenie migrácii (migration verification).
7. Prejsť na správu smerovania alebo DNS po úspešnom prevare.

Toto poriadok zabraňuje tomu, aby sa nájomci v čaťovom izolácii dostali trafikou pred tým, ako budú pripravené databáza, používatelia a dosť najemcu.

## Postupy správy suverénnych klientov {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 udržuje akcie správy klientov na hlavnej sieti, keď je suverénny režim (sovereign mode) zapnutý. Najemca môže stále fungovať ako izolovaná inštancia WordPressu, ale akcie smerujúce ku klientovi, ktoré sa spoliehajú na sieťové fakturácie, členstvo alebo údaje z príspevku (shared account data), by mali klienta vrátiť na hlavnú sieti namiesto toho, aby sa pokúsli dokončiť akciu v runtime najemcu.

Postup hlavnej siete platí pre:

- Dokončenie objednávky a zmeny plánov.
- Prehľad účtu a akcie profilu klienta.
- Aktualizácie fakturačných adres, obrazovky správy faktúr a správu platieb.
- Zobrazenia faktúry a histórie platení.
- Akcie správy siete, ako je pridávanie alebo odstránenie sit.
- Premienenie šablón (template switching).
- Mapovanie domén a zmeny primárnej domény.

Keď zákazník začne jednu z týchto akcí z suverénneho tenantu buduje Ultimate Multisite príslušnú URL adresu hlavného siete a zachová zdrojový tenant ako cieľový cieľ (return target), ak je to bezpečné. To umožňuje zákazníkom dokončiť správanie v rámci siameho siete, potom sa vrátiť do kontextu tenantu bez duplikovania fakturačného alebo členstva stavu v suverénnej databáze.

Pre operátorov je praxový pravidlo: udržujte stránky fakturácie, účtu, pokladne, faktúry, šablóny a správu domény prístupné na hlavnom siete pre suverénne siete. Dashboardy tenantov môžu byť linkované na tieto stránky, ale hlavné siete zostáva zdrojom pravdy pre akciu.
