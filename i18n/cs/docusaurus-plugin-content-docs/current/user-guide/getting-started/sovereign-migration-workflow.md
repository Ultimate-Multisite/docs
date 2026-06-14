---
title: Workflow migrace suverénní
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Workflow migrace do suverénního prostředí

Ultimate Multisite: Multi-Tenancy 1.2.0 přidává brány pro ověření migrace při přesunu standardního subsite do infrastruktury suverénního nájemce (tenant).

## Před zahájením

Potvrďte, že máte připraveno:

- Aktuální zálohu zdroje.
- Připnutý addon Multi-Tenancy.
- Cílovou databázi nájemce, kořenový soubor disku a doménu.
- Převedení databáze (database host binding), které odpovídá cílovému prostředí.
- Přístup k spouštění příkazů WP-CLI pro síť.

## Doporučený postup

1. Přípravte cílovou databázi nájemce a souborový systém.
2. Registrujte nebo aktualizujte nastavení izolace nájemců (tenant isolation settings).
3. Spusťte migrací nájemce.
4. Vytvořte nebo ověřte uživatele nájemce.
5. Oprázdněte asynchronní úlohy migrace (drain async migration jobs).
6. Spusťte ověření suverénní migrace.
7. Navštivte nájemce pomocí SSO.
8. Přepněte DNS nebo směrování pouze po úspěšném dokončení ověření.

## Brány pro ověření (Verification gates)

Postup ověření kontroluje migaci z několika úhlopérstých stran:

- Existuje schéma nájemce a může být napsána databází nájemce.
- Konfigurovaný databázový host má platné oprávnění.
- Uživatelé nájemce jsou přítomni a odpovídají očekávanému počtu uživatelů pro suverénní instalaci.
- Asynchronní fronta (async push queue) se úspěšně opráždí.
- Staré cesty dat na straně sítě nejsou pro suverénního nájemce již nutné.

V případě selhání ověření považujte to za blokující překážku před nasazením. Opravte zjištěnou chybu v databázi, uživateli, frontě nebo směrování a poté znovu spusťte ověření, než nájemce vystavíte zákazníkům.

## První návštěva v produkčním prostředí

Po úspěšném dokončení ověření použijte funkci **Visit (SSO)** z obrazovky správy webu pro první administraci. To potvrzuje směrování nájemce, zpracování tokenů SSO, origin pinning a přidělování uživatelů na straně nájemce v jednom kontrolovaném kroku.
