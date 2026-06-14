---
title: Fluxu migrazioa soberanoa
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Sovereign Migrazio Fluxuua

Ultimate Multisite: Multi-Tenancy 1.2.0 has añade gate-akizketa migrazioa egindura standard subsite bat sozin txartzeen tenent infrastrukturako.

## Aurrera egin baino lehen

Ezin daite ziurtatu que has:

- Source site-aren backup aktual bat du.
- Multi-Tenancy addon aktibo dago.
- Destino tenant databasea, filesystem root-ea eta domainak gehiago dago.
- Database host binding bat duan destino erabilera aurkitzen duena.
- Network-eratik WP-CLI komandak jarri dezake.

## Fluxuua hautatutakoa

1. Destino tenant databasea eta filesystem-ea aurretik tratatu.
2. Tenant isolation heniaren emate edo aktualizatu.
3. Tenant migrazioa jarri.
4. Tenant user-ek emate edo gehiago bat zehaztu.
5. Async migrazio job-ak drainatu.
6. Sovereign migrazio bidezko zehaztza jarri.
7. SSO-rekin tenantra bisitu.
8. Zein DNS edo routing aldatu, zehaztza pasatu ondoren.

## Zehaztzeko gate-ak

Zehaztzeko fluxuua migrazioa luetan ikusten du:

- Tenant schema-ren dauden eta tenant database writer-rek ezagutze gabe emate dezake.
- Konfiguratu database host-ek grant bat duena.
- Tenant user-ek dauden eta esperatutako sovereign install user-aren kopurua aurkitzen duena.
- Async push queuea drainatu ondo egiten duena.
- Legacy network-side data pathsak sovereign tenant-erik ez behar dira.

Zehaztzeko erantzunak pre-launch blokioak (aurrera egin baino lehen ezarritzeak) tratatu. Database, user, queue edo routing problemaa jasoa, eta ondoren zehaztza berri bizitzaren aurretik tenantra iragatu.

## Lehen produktion bisita

Zehaztza pasatuta, site management screen-etik **Visit (SSO)** erabili lehen admin bisitua. Horrek tenant routing-a, SSO token-ek tratatzea, origin pinning-a eta tenant-side user provisioning-ak kontrolatu baten urtsu egiten du.
