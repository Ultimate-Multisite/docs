---
title: Hostinger Meertalige Huur
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy {#hostinger-multi-tenancy}

Ultimate Multisite: Multi-Tenancy 1.2.0 voeg 'n Hostinger multi-tenancy vermoë te by wat gehoste domeine kan deelne aan soewereine huurderprovisioning saam met die bestaande Hostinger domain-mapping integrasie.

Gebruik hierdie vermoë wanneer huurderdomeine en geïsoleerde huurderinfrastruktuur deur Hostinger hPanel bestuur word.

## Opstelnotas {#setup-notes}

1. Konfigureer die kern Hostinger integrasie onder **Ultimate Multisite > Settings > Host Integrations**.
2. Bevestig dat die Hostinger API token die doel-domein of subdomain kan bestuur.
3. Skakel die Multi-Tenancy addon aan.
4. Konfigureer die huurder-isoleringstrategie voordat jy die huurder publiseer.
5. Voer die migrasieverifikasie-workflow uit voordat jy produksie-verkeer na die huurder stuur.

Die Hostinger vermoë gebruik die gedeelde Hostinger verbinding vir host-syd operasies. DNS moet steeds na die korrekte Hostinger rekening wys, en hPanel rekeningbeperkings geld steeds.

## Vermoë-spesifieke veranderinge {#capability-specific-changes}

- Soewereine huurders kan geskep word met hoesbewuste domeinoperasies.
- Database-hoestrings op dieselfde masjien word genormaliseer voordat verifikasie gegee word.
- Hostinger-bestuurde huurders moet die database-hoestring waarde gebruik wat in hPanel getoon word, tensy die WordPress runtime 'n plaaslike oortryd vereis.
- SSO besoeke is afhanklik dat die huurderdomein oplos na die Hostinger-gehoste huurder.

## Probleemoplossing vir Hostinger huurders {#troubleshooting-hostinger-tenants}

- Indien 'n huurderinstallasie misluk, verifieer of die domein reeds aan die Hostinger rekening gekoppel is.
- Indien databaseverifikasie misluk, vergelyk die huurder DB gebruikersnaam, databasenaam en hoestringbinding met hPanel.
- Indien **Besök (SSO)** misluk, bevestig dat DNS en SSL vir die huurderdomein aktief is.
- Indien afskeid agtergeblew hostresouce laat, verwyder enige oorblywende databasetjies, gebruikers of voldiers vanaf hPanel nadat jy die bladsybeveiliging bevestig het.
