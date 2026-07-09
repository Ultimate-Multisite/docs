---
title: Integration av flerklientsarkitektur
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Integration för flerklientdrift {#multi-tenancy-integration}

Ultimate Multisite: Flerklientdrift 1.2.0 ändrar flera integrationspunkter för suveräna klienter, migreringsverifiering och automatisering av klientlivscykeln.

## Flöde för klientinitiering {#tenant-bootstrap-flow}

Integrationer som skapar eller ändrar klienter bör följa denna ordning:

1. Slå upp klientregistrets post och isoleringsmodell.
2. Skapa eller verifiera klientdatabasens skrivare.
3. Initiera klientens schema.
4. Tillhandahåll klientanvändare.
5. Registrera klientroutning och filsystemssökvägar.
6. Kör migreringsverifiering innan klienten exponeras.

Utgå inte från att en suverän klient kan återanvända nätverkets databasanslutning. Använd klientregistret och skrivarabstraktionerna som tillhandahålls av tillägget.

## SSO- och REST-hooks {#sso-and-rest-hooks}

Tillståndslös automatisk klientinloggning använder kortlivade tokens med ett syftesanspråk, JTI-skydd mot återuppspelning, en utgångstidsgräns och ursprungsbindning. Integrationer som lägger till inloggningsknappar eller länkar för fjärrhantering bör generera klientbesök via det stödda SSO-flödet i stället för att konstruera klientinloggnings-URL:er direkt.

API-granskningshändelser på nätverkssidan och dagliga sammanfattningar är tillgängliga för suveräna klientgateways. Använd dessa loggar vid felsökning av externa system som anropar endpoints för klientlivscykeln.

## Åtgärds-URL:er för suveräna kunder {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 routar kundåtgärder för suveräna klienter tillbaka till huvudwebbplatsen för flöden för konto, checkout, fakturering, faktura, webbplats, mallbyte och domänmappning. Integrationer som renderar hanteringslänkar på klientsidan bör rikta dessa åtgärder till huvudwebbplatsens kundpanel och inkludera ett validerat returmål när användaren ska kunna navigera tillbaka till klienten efter att åtgärden har slutförts.

Använd den centrala SSO-wrappern för hanteringslänkar över domäner:

```php
$url = wu_with_sso($main_site_customer_url);
```

Den genererade URL:en förblir filtrerbar via `wu_sso_url`, som tar emot SSO-URL:en, aktuell användare, målwebbplatsens ID och omdirigeringskontext. Tillägg kan använda det filtret för att lägga till leverantörsspecifik kontext eller ersätta broker-URL:en samtidigt som Ultimate Multisite:s tokenvalidering bevaras.

Duplicera inte tillstånd för medlemskap, faktura, faktureringsadress, mall eller domänhantering inne i den suveräna klienten. Behandla klientens Dashboard som startpunkt och huvudwebbplatsens kundpanel som systemet med sanningskällan för hanterade åtgärder.

## Migreringsverifiering {#migration-verification}

Efter att en migration eller livscykelintegration ändrar klientdata, kör verifieringsgrindarna:

- `wp tenant verify-no-legacy --site=<site-id>` bekräftar att klienten inte längre är beroende av äldre nätverkssidesökvägar.
- `wp tenant verify-sovereign-push --site=<site-id>` bekräftar att suveräna push-jobb kan bearbeta och tömmas.

Integrationer bör behandla misslyckad verifiering som ett driftsättningshinder och undvika att markera en klient som live tills felet är löst.

## Borttagning av klient {#tenant-deletion}

Borttagningsflöden bör anropa tilläggets nedmonteringsväg så att klientdatabasens autentiseringsuppgifter rensas upp. Externa integrationer kan ta bort leverantörsresurser efter att nedmonteringen har lyckats, men bör inte ta bort värddatabaser eller mappar medan verifiering eller asynkrona push-jobb fortfarande körs.

## Föråldrad databasrouter {#deprecated-database-router}

Den äldre `Database_Router` har ersatts av en föråldringsstubbe. Nya integrationer bör slå upp klienter via den aktuella webbplatsroutern och API:erna för klientregistret i stället för att vara beroende av den gamla routerklassen.
