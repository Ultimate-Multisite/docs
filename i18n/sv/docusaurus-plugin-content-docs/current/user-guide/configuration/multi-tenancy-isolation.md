---
title: Multi-tenancy isolering
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Isolering mellan olika hyresgäster (Multi-Tenancy Isolation)

Ultimate Multisite: Multi-Tenancy 1.2.0 stöder per-subsite databas- och filsystemisolering för suveräna hyresgäster. Detta håller kunddata separerad samtidigt som det bevarar nätverksnivåprovisionering, fakturering och administration.

## Isoleringstrategi

Använd suverän isolering för kunder som behöver starkare dat separators, dedikerad filsystemlagring eller en separat hostgräns.

Varje suverän hyresgäst ska ha:

- En dedikerad hyresgästdatabas eller en strategi med databasprefix godkänd för värden (host).
- Roten för hyresgästens filsystem.
- En post i hyresgästregistret som kopplar ihop sajten med dess databas, rotväg, värdnamn och isoleringsmodell.
- Ett migrationsverifieringsresultat innan hyresgästen anses vara live.

## Bindning till databasvärden (Database host binding)

Version 1.2.0 ändrar det standardbeteendet för bindning till samma maskinshost vid suveräna installationer. Samma maskinens värden som `localhost` normaliseras så att Bedrock, FrankenPHP och containeriserade WordPress-installationer kan ge och verifiera behörigheter mot den hoststräng MySQL faktiskt ser.

När du konfigurerar en suverän hyresgäst:

1. Ställ in databasvärden (database host) till värdet som krävs av hyresgästens runtime.
2. Använd `localhost` för lokala socket-installationer när värden förväntar sig lokala anslutningar.
3. Använd `127.0.0.1` eller ett tjänstnamn (service hostname) endast om databasservern ger behörigheter till den hosten.
4. Kör migrationsverifiering efter att du har ändrat bindningen till värden.

Om verifieringen rapporterar fel vid behörighetsgivning, jämför hyresgästens DB-användarbehörigheter med den konfigurerade bindningen till värden. En användare som ges behörighet för `user@localhost` är annorlunda än `user@127.0.0.1` eller `user@%`.

## Rot för filsystemet (Filesystem root)

Huvudrotet för hyresgästen ska vara stabilt vid omstart och driftsättning. Undvik tillfälliga monteringsvägar (mount paths). För installationer i Bedrock-stil, bekräfta att huvudroten pekar på WordPress webroot som den tenant bootstrap förväntar sig, inte bara projektets rot.

## Provisioneringsordning

För nya suveräna hyresgäster använd denna ordning:

1. Skapa listverket (registry entry) för hyresgästen.
2. Skapa databasen och databasanvändaren för hyresgästen.
3. Bootstrapa schemat för hyresgästen.
4. Provisionera hyresgästanvändare.
5. Konfigurera filsystemsvägar för hyresgästen.
6. Kör migrationsverifiering.
7. Växla rutt eller DNS efter att verifieringen har godkänts.

Denna ordning förhindrar att delvis isolerade hyresgäster får trafik innan databasförfattare, användare och filsystem är redo.

## Flöden för hantering av suveräna kunder

Ultimate Multisite v2.13.0 håller kundhanteringsåtgärder på huvudwebbplatsen när suverän läge är aktiverat. En hyresgäst kan fortfarande köras som en isolerad WordPress-installation, men kundvända åtgärder som beror på nätverksfakturering, medlemskap eller delade kontodata bör skicka tillbaka kunden till huvudwebbplatsen istället för att försöka slutföra åtgärden inuti hyresgästens runtime.

Huvudwebbplatsflödet gäller:

- Kassa och planerändringar.
- Översikt över konto och åtgärder för kundprofiler.
- Uppdateringar av faktureringsadress och betalhanteringsskärmar.
- Vy för fakturor och betalhistorik.
- Webbplatsadministration åtgärder som att lägga till eller ta bort webbplatser.
- Mallbyten (Template switching).
- Domänmappning och ändringar av primärdomänen.

När en kund startar någon av dessa åtgärder från en suverän tenant bygger Ultimate Multisite den motsvarande huvudwebbplatsens URL och behåller den ursprungliga tenanten som ett återvändande mål när det är säkert att göra det. Detta låter kunder slutföra den hanterade åtgärden mot nätverksregistren, och sedan återvända till tenantkontexten utan att dubblera fakturerings- eller medlemskapstillstånd i den suveräna databasen.

För operatörer är den praktiska regeln: håll fakturerings-, kontoinformations-, kassa- och fakturapålsidor samt mallar och domänhanteringssidor tillgängliga på huvudwebbplatsen för de suveräna nätverken. Tenant dashboards kan länka till dessa sidor, men huvudwebbplatsen förblir den primära källan till sanningen för åtgärden.
