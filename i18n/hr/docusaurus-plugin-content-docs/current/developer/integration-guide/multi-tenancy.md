---
title: Integracija višezakupništva
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Integracija više zakupaca

Ultimate Multisite: Multi-Tenancy 1.2.0 mijenja nekoliko integracijskih dodirnih točaka za suverene zakupce, provjeru migracije i automatizaciju životnog ciklusa zakupca.

## Tijek početnog postavljanja zakupca {#tenant-bootstrap-flow}

Integracije koje stvaraju ili mijenjaju zakupce trebaju slijediti ovaj redoslijed:

1. Razriješite zapis registra zakupca i model izolacije.
2. Stvorite ili provjerite pisač baze podataka zakupca.
3. Pokrenite početno postavljanje sheme zakupca.
4. Omogućite korisnike zakupca.
5. Registrirajte usmjeravanje zakupca i putanje datotečnog sustava.
6. Pokrenite provjeru migracije prije izlaganja zakupca.

Nemojte pretpostaviti da suvereni zakupac može ponovno upotrijebiti vezu s mrežnom bazom podataka. Upotrijebite registar zakupaca i apstrakcije pisača koje pruža dodatak.

## SSO i REST hookovi {#sso-and-rest-hooks}

Autologin zakupca bez stanja koristi kratkotrajne tokene s tvrdnjom o svrsi, JTI zaštitom od ponovne reprodukcije, ograničenjem isteka i vezanjem na izvor. Integracije koje dodaju gumbe za prijavu ili poveznice za udaljeno upravljanje trebaju generirati posjete zakupcu putem podržanog SSO tijeka umjesto izravne izrade URL-ova za prijavu zakupca.

API događaji revizije na mrežnoj strani i dnevni sažeci dostupni su za pristupnike suverenih zakupaca. Upotrijebite te zapisnike pri otklanjanju pogrešaka u vanjskim sustavima koji pozivaju endpointove životnog ciklusa zakupca.

## URL-ovi radnji suverenih korisnika {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 usmjerava radnje korisnika suverenih zakupaca natrag na glavni site za tijekove računa, naplate, obračuna, računa, sitea, promjene predloška i mapiranja domena. Integracije koje prikazuju poveznice za upravljanje na strani zakupca trebaju usmjeriti te radnje na korisničku ploču glavnog sitea i uključiti provjerenu povratnu metu kada bi korisnik trebao moći navigirati natrag do zakupca nakon dovršetka radnje.

Upotrijebite osnovni SSO omotač za poveznice za upravljanje između domena:

```php
$url = wu_with_sso($main_site_customer_url);
```

Generirani URL ostaje moguće filtrirati putem `wu_sso_url`, koji prima SSO URL, trenutačnog korisnika, ID ciljnog sitea i kontekst preusmjeravanja. Dodaci mogu upotrijebiti taj filtar za dodavanje konteksta specifičnog za pružatelja ili za zamjenu URL-a brokera uz očuvanje provjere tokena Ultimate Multisitea.

Nemojte duplicirati stanje članstva, računa, adrese za naplatu, predloška ili upravljanja domenom unutar suverenog zakupca. Tretirajte nadzornu ploču zakupca kao pokretač, a korisničku ploču glavnog sitea kao sustav zapisa za upravljane radnje.

## Provjera migracije {#migration-verification}

Nakon što migracija ili integracija životnog ciklusa promijeni podatke zakupca, pokrenite provjerne prolaze:

- `wp tenant verify-no-legacy --site=<site-id>` potvrđuje da zakupac više ne ovisi o naslijeđenim putanjama na mrežnoj strani.
- `wp tenant verify-sovereign-push --site=<site-id>` potvrđuje da se suvereni push poslovi mogu obraditi i isprazniti.

Integracije trebaju tretirati neuspjelu provjeru kao blokator implementacije i izbjegavati označavanje zakupca aktivnim dok se neuspjeh ne riješi.

## Brisanje zakupca {#tenant-deletion}

Tijekovi brisanja trebaju pozvati putanju rastavljanja dodatka kako bi se vjerodajnice baze podataka zakupca očistile. Vanjske integracije mogu ukloniti resurse pružatelja nakon uspješnog rastavljanja, ali ne bi smjele brisati baze podataka ili mape domaćina dok se provjera ili asinkroni push poslovi još izvode.

## Zastarjeli usmjerivač baze podataka {#deprecated-database-router}

Naslijeđeni `Database_Router` zamijenjen je zastarjelim stubom. Nove integracije trebaju razrješavati zakupce putem trenutačnog usmjerivača sitea i API-ja registra zakupaca umjesto da ovise o staroj klasi usmjerivača.
