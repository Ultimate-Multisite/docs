---
title: Multi-tenancy isolasjon
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Multi-leieksisolerte {#multi-tenancy-isolation}

Ultimate Multisite: Multi-Tenancy 1.2.0 støtter per-subsite database- og filsystemisolering for suverene leietakere. Dette holder kundedata adskilt samtidig som nettverksnivå-provisionering, fakturering og administrasjon opprettholdes.

## Isoleringsstrategi {#isolation-strategy}

Bruk suveren isolering for kunder som krever sterkere dataseparasjon, dedikert filsystemlagring eller en separat hostgrense.

Hver suveren leietaker skal ha:

- En dedikert leietaker database eller en strategi med database-prefiks godkjent for hosten.
- Et dedikert leietaker filsystemrot.
- En leietakerregistreringsinnføring som kartlegger nettstedet til databasen, rotstien, vertsnavnet og isolasjonsmodellen.
- Et migrasjonsverifiseringsresultat før leietaker anses som aktiv.

## Databasehostbinding {#database-host-binding}

Versjon 1.2.0 endrer standard oppførselen for hostbinding på samme maskin for suverene installasjoner. Samme-maskinverdier som `localhost` normaliseres slik at Bedrock, FrankenPHP og containeriserte WordPress-installasjoner kan gi og verifisere tillatelser mot den MySQL-strengen som faktisk sees av hosten.

Når du konfigurerer en suveren leietaker:

1. Sett databasehost til verdien som kreves av leietakers runtime.
2. Bruk `localhost` for lokale socket-installasjoner når hosten forventer lokale tilkoblinger.
3. Bruk `127.0.0.1` eller et tjenestenavn kun hvis databasen serveren gir privilegier til den hosten.
4. Kjør migrasjonsverifisering etter å ha endret hostbindingen.

Hvis verifiseringen rapporterer tillatelsesfeil, sammenlign leietakers DB-brukerrettigheter med den konfigurerte hostbindingen. En bruker gitt for `user@localhost` er annerledes enn `user@127.0.0.1` eller `user@%`.

## Filsystemrot {#filesystem-root}

Tenant rooten skal være stabile på tvers av oppstart og utrulling. Unngå midlertidige monteringsstier. For Bedrock-stil installasjoner, bekreft at tenant root peker på WordPress webroten som tenant bootstrap forventer, ikke bare prosjektroten.

## Opprettingsrekkefølge {#provisioning-order}

For nye suverene tenants bruk denne rekkefølgen:

1. Lag innføring i tenant registry.
2. Lagert tenant database og databasebruker.
3. Bootstrap tenant schema.
4. Opprett tenant brukere.
5. Konfigurer tenant filsystemstier.
6. Kjør migrasjonsverifisering.
7. Bytt ruting eller DNS etter at verifiseringen er bestått.

Denne rekkefølgen forhindrer delvis isolerte tenants i å motta trafikk før databaseforfatteren, brukerne og filsystemet er klare.

## Flyt for håndtering av suverene kunder {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 holder kundehandlingsfunksjoner på hovedsiden når suveren modus er aktivert. En tenant kan fortsatt kjøre som en isolert WordPress-installasjon, men kundevendte handlinger som avhenger av nettbasert fakturering, medlemskap eller delt kontodata bør sende kunden tilbake til hovedsiden i stedet for å prøve å fullføre handlingen inne i tenant runtime.

Hovedsidens flyt gjelder:

- Kasseprosess og planendringer.
- Kontooversikt og kundeinformasjonsfunksjoner.
- Oppdatering av faktureringsadresse og betalingshåndteringsskjemaer.
- Visninger for fakturaer og betalingshistorikk.
- Administrasjonsfunksjoner som å legge til eller slette sider.
- Skifte av maler (template switching).
- Domene-mapping og endringer i primærdomen.

Når en kunde starter en av disse handlingene fra et suverent leietilbud (tenant), bygger Ultimate Multisite den tilsvarende hovednettstedets URL og bevarer kildetilbudet som returmål så det er trygt å gjøre dette. Dette lar kundene fullføre den administrerte handlingen mot nettverkets oppføringer, og deretter gå tilbake til konteksten for leietilbudet uten å duplisere fakturerings- eller medlemsstatsinformasjon i det suverene databasen.

For operatører er den praktiske regelen: hold fakturerings-, kontoopprettelses-, kasse-, faktura-, mal- og domenenavn-administrasjonssidene tilgjengelige på hovednettstedet for de suverene nettverkene. Tenant-dashbord kan lenke til disse sidene, men hovednettstedet forblir den primære kilden til sannheten for handlingen.
