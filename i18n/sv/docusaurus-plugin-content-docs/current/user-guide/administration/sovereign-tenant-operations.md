---
title: Suverän hyresgästdrift
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Hantering av suveräna hyresgäster (Sovereign Tenant Operations)

Ultimate Multisite: Multi-Tenancy 1.2.0 lägger till verktyg för hantering av suveräna hyresgäster: undersidor som körs med sin egen databas, filsystemrot och routningskontext samtidigt som de är synliga för nätverksadministratören.

Använd den här sidan när du hanterar isolerade kundplatser, fjärrplatsövergångar eller migreringar som flyttar en standardundersida till suverän infrastruktur.

## Vad ändras för administratörer

- **Stateless tenant autologin** — Nätverksadministratörer kan besöka en suverän hyresgäst utan att behöva förlita sig på långlivat delat sessionstillstånd. SSO-token är syftesbegränsad, ursprungspåverkad (origin-pinned), replay-skyddad och begränsad till ett kort utgångstid.
- **Sovereign-aware routing** — Äldre isolerade nätverk och suveräna hyresgäster löser sig genom samma routningsväg på webbplatsen, vilket minskar skillnader vid uppstart mellan gamla och nya isolerade installationer.
- **Verifierad migrationsstatus** — Migrationsverifiering kontrollerar användarprovisionering, skrivrättigheter för databasadministratörer (database writer permissions), status för köhantering (queue drain status) och frånvaron av äldre tabeller innan en hyresgäst betraktas som komplett.
- **Säkrare nedstängning** — Nedstängning av suveräna hyresgäster tar nu bort användaruppgifter på ett rent sätt så att raderade hyresgäster inte lämnar kvar gammal databasåtkomst.

## Besökande av en suverän hyresgäst

1. Öppna **Network Admin > Ultimate Multisite > Sites**.
2. Välj den suveräna hyresgästen.
3. Använd **Visit (SSO)** när det finns tillgängligt istället för att kopiera lösenord eller skapa temporära administratörskonton.

Besöksflödet skapar en kortlivad inloggningstoken för den specifika hyresgästen och registrerar SSO-händelsen i hyresgästens revisionsspår (audit trail). Om knappen misslyckas, kontrollera att domänen för hyresgästen löser sig till den förväntade installationen och att hyresgästen kan nå nätverksbaserade SSO-slutpunkt.

## Kontrolllista för fjärrplatsoperationer

Innan du ändrar en suverän eller fjärrplatshyresgäst, bekräfta:

## Radera suveräna tenants

Att radera en suverän tenant är destruktivt. Bekräfta först backup- och exportstatus, och radera sedan från skärmen för sidhantering. Flödet 1.2.0 för nedmontering tar bort tenantens databasslösenheter som en del av rensningen, men administratörer bör fortfarande kontrollera att hostnivådatabassamt och mappar är borta när man använder externa hostingpaneler.

:::warning
Radera inte en suverän tenant medan migrationsverifieringen fortfarande körs eller medan asynkrona push-jobb står i kö. Vänta tills verifieringen är klar så att nedmonteringen inte tar bort lösenord som behövs för väntande jobb.
:::
