---
title: Ověření suverénní migrace
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Ověření migrace suverénního prostředí

Ultimate Multisite: Multi-Tenancy 1.2.0 obsahuje příkazy pro ověření WP-CLI pro migrace suverénních tenantů. Používejte je, pokud se migrace tenantu, návštěva SSO nebo izolovaná instalace neověří tak, jak by se očekávalo.

## Příkazy k provedení {#commands-to-run}

Spusťte ověření z nainstalované WordPress instance v síti:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

Použijte ID webové stránky (site ID) pro tenantu, který migrujete. První příkaz ověří, že tenent již nezávisí na starých datech z síťové strany. Druhý příkaz ověří, že úkoly suverénního pushu lze zpracovat a vyprázdnit (drain).

## Obecné chyby {#common-failures}

### Granty v databázi se neodpovídají s hostem {#database-grants-do-not-match-the-host}

Pokud ověření ukazuje chyby při grantách nebo uživateli scrittora (writer-user), zkontrolujte nastavený databázový host. `localhost`, `127.0.0.1` a jméno služby v kontejneru jsou různé hosty pro MySQL granty. Aktualizujte přiřazení hosta tenantu nebo granty v databázi, poté spusťte ověření znovu.

### Bedrock nebo lokální instalace se nemohou připojit {#bedrock-or-local-installs-cannot-connect}

Bedrock a lokální socket instalace mohou databázi uvádět jako `localhost`, zatímco runtime se připojuje pomocí normalizované adresy. Verze 1.2.0 normalizuje hostové řetězce na stejné stroji, ale vlastní přepis hostů může stále kolidovat s granty v databázi.

### Asynchronní fronta pushu se nezprázdní (drain) {#async-push-queue-does-not-drain}

Pokud `verify-sovereign-push` nekončí, zkontrolujte Action Scheduler nebo nastavený asynchronní runner. Vyčistěte chybná úkoly pouze po potvrzení, že jsou bezpečné k opakování nebo zanesení do koše.

### Počet uživatelů tenantu je špatný {#tenant-user-count-is-wrong}

Migrace by měla vytvořit uživatele pro suverénního tenantu. Pokud chybí očekávaný instalovaný uživatel, spusťte krok přidělování uživatelů znovu předtím, než zkusíte SSO znovu spustit.

### Návštěva SSO je zamítnuta {#sso-visit-is-rejected}

Autologin pro bezstavcového (stateless) nájemce vyžaduje, aby se doména nájemce, origin pin, účel tokenu, nonce a datum platnosti shodovaly. Potvrďte, že je URL nájemce správný a pokus o přihlášení provedete krátce po generování SSO návštěvy (visit).

## Když zopakovat {#when-to-retry}
Zkuste ověření po každé změně infrastruktury. Neměňte provoz na produkčním serveru, nezadejte původní data ani nezrušte migrační учетné údaje, dokud všechny ověřovací kontroly neprojdou úspěšně.
