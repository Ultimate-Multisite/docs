---
title: Izolace v rámci více nájemníků
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Izolace mezi tenancymi

Ultimate Multisite: Multi-Tenancy 1.2.0 podporuje izolaci databáze a souborového systému pro suverénní tenancy (tenants). To zajišťuje, že data jednotlivých klientů zůstávají oddělená, zatímco se zachovají síťové konfigurace, fakturace a správa.

## Strategie izolace {#isolation-strategy}

Používejte suverénní izolaci pro zákazníky, kteří vyžadují silější oddělení dat, dedikovanou ukládací místa pro soubory nebo samostatnou hranici hostitele.

Každá suverénní tenancy by měla mít:

- Dedikovanou databázi tenancy nebo strategii předpony databáze schválenou pro hostitele.
- Dedikované kořenové místo (root) souborového systému tenancy.
- Zapis do rejstří tenancy, který mapuje situs na jeho databázi, kořenovou cestu, jméno hostitela a model izolace.
- Výsledek ověření migrace předtím, než se tenancy považuje za aktivní (live).

## Připojení k databázové hostitelské straně (Database host binding) {#database-host-binding}

Verze 1.2.0 mění výchozí chování připojení na stejné stroji pro suverénní instalace. Hodnotky jako `localhost` jsou normalizovány tak, aby Bedrock, FrankenPHP a kontejnerové instalace WordPress mohly udělovat a ověřovat oprávnění proti tomuto hostitelské řetězi MySQL skutečně vidí.

Při konfiguraci suverénní tenancy:

1. Nastavte databázovou hostitelské adresu na hodnotu požadovanou runtime tenancy.
2. Používejte `localhost` pro lokální socket instalace, pokud očekáváte lokální připojení.
3. Používejte `127.0.0.1` nebo jméno služby (service hostname) pouze tehdy, když databázový server uděluje oprávnění tomuto hostiteli.
4. Spusťte ověření migrace po změně připojení k hostitelské straně.

Pokud zjištění ověření ukazuje chyby při udělování oprávnění, porovnejte oprávnění uživatele v DB tenancy s nastaveným připojením k hostitelské straně. Uživatel udělený pro `user@localhost` je jiný než `user@127.0.0.1` nebo `user@%`.

## Kořen souborového systému (Filesystem root) {#filesystem-root}

Koreňový adresář (root) nájmenu by měl být stabilní při restartu a nasazení. Vyhněte se dočasným cestám pro mountování. U instalací v stylu Bedrock potvrďte, že koreňový adresář směřuje na webový kořen WordPressu, který očekává tenant bootstrap, nikoli pouze na projektový kořen.

## Pořadí nasazení (Provisioning order) {#provisioning-order}

Pro nové suverénní tenancy použijte toto pořadí:

1. Vytvořit záznam v registru tenancy.
2. Vytvořit databázi a uživatele databáze pro tenancy.
3. Bootstrapovat schématický (schema) tenantu.
4. Nasadit uživatele tenancy.
5. Konfigurovat cestování souborových systémů tenancy.
6. Spustit ověření migrace.
7. Přepnout směrování nebo DNS po úspěšném ověření.

Toto pořadí zabraňuje tomu, aby částečně izolované tenancy začaly přijímat provoz předtím, než bude datový spisovatel (writer), uživatelé a souborový systém připraveny.

## Točivé procesy pro správu suverénních zákazníků {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 zachovává akce správy zákazníků na hlavním sítí, když je suverénní režim (sovereign mode) zapojen. Tenent může stále běžet jako izolovaná instalace WordPressu, ale akce zaměřené na zákazníka, které závisí na síťovém fakturaci, členství nebo sdílených údajích účtu, by měly zákazníka vrací zpět na hlavní stránku místo pokusu o dokončení akce uvnitř runtime tenancy.

Protokol pro hlavní stránku se vztahuje na:

- Pokladny a změny plánů.
- Přehled účtu a akce profilu zákazníka.
- Aktualizace fakturačních adres a obrazovky pro správu platby.
- Zobrazení faktur a historie platby.
- Akce správy sítí jako přidávání nebo smazání sítí.
- Přepínání šablon (Template switching).
- Mapování domén a změny primární domény.

Když zákazník z jednoho ze těchto akcí spustí akci v suverénním tenantovi, Ultimate Multisite vytvoří odpovídající URL pro hlavní síť a zachová původní tenant jako cílovou destinaci, pokud je to bezpečné. To umožňuje zákazníkům dokončit spravovaný proces na základě záznamů sítě a poté se vrátit do kontextu tenantu bez duplikování fakturace nebo stavu členství v suverénním databázi.

Pro operátory je praktická pravidlo: u suverénních sítí by měly být stránky pro fakturaci, účetní údaje, pokladnu, faktura, šablony a správu domény na hlavní síti dostupné. Dashboardy tenantů mohou tyto stránky propojit, ale hlavní síť zůstává zdrojem pravdy pro danou akci.
