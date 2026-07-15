---
title: Isolatio Multi-Tenant
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Isolația Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 susține izolarea de bază de date și a sistemului de fișiere pentru subsitele suverâne, asigurând o separare completă a datelor în timp ce se păstrează configurarea rețelei, facturarea și administrarea la nivel de rețea.

## Strategia de izolare {#isolation-strategy}

Folosiți izolarea suverană pentru clienții care au nevoie de o separare mai puternică a datelor, stocare dedicată a sistemului de fișiere sau o delimitare separată a gazdei (host).

Fiecare tenant suveran trebuie să aibă:

- O bază de date dedicată pentru tenant sau o strategie de prefix de bază de date aprobată pentru gazdă.
- Un rădăcin local al sistemului de fișiere dedicat pentru tenant.
- O intrare în registru al tenantului care mapează site-ul la baza de date sa, calea rădăcină, numele de gazdă și modelul de izolare.
- Un rezultat de verificare a migrației înainte ca tenantul să fie considerat activ.

## Legarea gazdei bazei de date (Database host binding) {#database-host-binding}

Versiunea 1.2.0 modifică comportamentul implicit al legării gazdei pe aceeași mașină pentru instalanțiile suverâne. Valorile precum `localhost` sunt normalizate astfel încât Bedrock, FrankenPHP și instalanțiile WordPress containerizate să poată acorda și verifica permisiunile împotriva șirului de gazdă MySQL pe care îl vede cu adevărat.

Când configurați un tenant suveran:

1. Setiați gazda bazei de date la valoarea necesară runtime-ului tenantului.
2. Folosiți `localhost` pentru instalanțiile socket locale atunci când gazda așteaptă conexiuni locale.
3. Folosiți `127.0.0.1` sau un nume de serviciu doar atunci când serverul de bază de date acordă privilegiile acelei gazde.
4. Rulați verificarea migrației după ce ați schimbat legarea gazdei.

Dacă rapoartele de verificare indică eșecuri în acordarea permisiunilor, comparați acordarea utilizatorului bazei de date a tenantului cu legarea gazdei configurată. Un utilizator acordat pentru `user@localhost` este diferit de `user@127.0.0.1` sau `user@%`.

## Rădăcina sistemului de fișiere (Filesystem root) {#filesystem-root}

Radix root tenant stabilis est inter redemitiis et deploys. Evadeți itineria montium temporalia. Ad installationes in modo Bedrock, confirmate quod radix tenant adhibet ad radice web WordPress quam tenant bootstrap expectat, non solum radicem projecti.

## Ordo provisio {#provisioning-order}

Ad novos tenentes souverainos, hoc ordine utite:

1. Crea entry registri tenant.
2. Crea database et user database.
3. Bootstrap schema tenant.
4. Provisona utentium tenant.
5. Configura itineria filesystem tenant.
6. Executa verification migrationis.
7. Mutare routing vel DNS postquam verificatio transire potest.

Hoc ordine impedit tenentibus partialiter isolatis recipere trafficon antequam scriptor database, utentia et filesystem parviant.

## Fluxus gestionis clientium souveraniorum {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 conservat actiones gestionis clientium in situm principalem cum modo souveraneo activato. Tenant potuerit tamen operari ut installatio WordPress isolata, sed actiones ad clientem dependentes a facturatione rete, membrinibus vel data account partibus debent clientem redi ut situm principalum in lugar, sicut tentare completum actionem intra runtime tenant.

Fluxus siti principalis applicatur ad:

- Cambia planum et checkout.
- Versio overview account et actiones profilis clientium.
- Actualisationes adressae facturationis et schaedula gestionis payment.
- Vistas facturarum et historiae payment.
- Actiones managementi siti ut additionem situm vel deletionem situm.
- Mutatio template.
- Mappatura domini et mutatio dominio primarius.

Cumulcum client începe una dintre aceste acțiuni din un tenant sovereign, Ultimate Multisite construiește URL-ul principal al site-ului și păstrează tenantul sursă ca țintă de returnare atunci când este în siguranță să o facă. Acest lucru permite clienților să finalizeze acțiunea gestionată împotriva registrelor rețelei, apoi să revină la contextul tenantului fără a duplica starea facturării sau a membrii în baza de date sovereignă.

Pentru operatori, regula practică este: mențineți paginile facturare, cont, checkout, factură, șablon și gestionarea domeniului disponibile pe site-ul principal pentru rețelele sovereign. Dashboard-urile tenantului pot linka către acele pagini, dar site-ul principal rămâne sursa adevărului pentru acțiune.
