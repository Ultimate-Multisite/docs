---
title: Integracija višezakupništva
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Multi-Tenancy integracija {#multi-tenancy-integration}

Ultimate Multisite: Multi-Tenancy 1.2.0 mijenja nekoliko integracijskih dodirnih tačaka za suverene stanare, verifikaciju migracije i automatizaciju životnog ciklusa stanara.

## Tok početnog postavljanja stanara {#tenant-bootstrap-flow}

Integracije koje kreiraju ili mijenjaju stanare trebaju slijediti ovaj redoslijed:

1. Razriješite zapis registra stanara i model izolacije.
2. Kreirajte ili verificirajte pisca baze podataka stanara.
3. Pokrenite početno postavljanje sheme stanara.
4. Omogućite korisnike stanara.
5. Registrujte rutiranje stanara i putanje datotečnog sistema.
6. Pokrenite verifikaciju migracije prije izlaganja stanara.

Nemojte pretpostavljati da suvereni stanar može ponovo koristiti mrežnu konekciju baze podataka. Koristite registar stanara i apstrakcije pisca koje pruža addon.

## SSO i REST hookovi {#sso-and-rest-hooks}

Bezstanje autologin stanara koristi kratkotrajne tokene sa zahtjevom svrhe, JTI zaštitom od ponovne upotrebe, ograničenjem isteka i vezivanjem za izvor. Integracije koje dodaju dugmad za prijavu ili linkove za udaljeno upravljanje trebaju generisati posjete stanara kroz podržani SSO tok umjesto direktnog konstruisanja URL-ova za prijavu stanara.

API audit događaji na mrežnoj strani i dnevni sažeci dostupni su za gatewaye suverenih stanara. Koristite te zapise kada otklanjate greške u vanjskim sistemima koji pozivaju endpointe životnog ciklusa stanara.

## URL-ovi radnji suverenih korisnika {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 usmjerava radnje korisnika suverenih stanara nazad na glavnu stranicu za tokove računa, plaćanja, naplate, fakture, stranice, promjene šablona i mapiranja domena. Integracije koje prikazuju linkove za upravljanje na strani stanara trebaju usmjeriti te radnje na korisnički panel glavne stranice i uključiti validirani povratni cilj kada korisnik treba moći navigirati nazad do stanara nakon dovršetka radnje.

Koristite osnovni SSO wrapper za linkove upravljanja preko domena:

```php
$url = wu_with_sso($main_site_customer_url);
```

Generisani URL ostaje filtrabilan kroz `wu_sso_url`, koji prima SSO URL, trenutnog korisnika, ID ciljne stranice i kontekst preusmjeravanja. Add-onovi mogu koristiti taj filter za dodavanje konteksta specifičnog za pružatelja ili za zamjenu broker URL-a uz očuvanje validacije tokena Ultimate Multisite-a.

Nemojte duplicirati stanje članstva, fakture, adrese za naplatu, šablona ili upravljanja domenom unutar suverenog stanara. Tretirajte dashboard stanara kao pokretač, a korisnički panel glavne stranice kao sistem evidencije za upravljane radnje.

## Verifikacija migracije {#migration-verification}

Nakon što migracija ili integracija životnog ciklusa promijeni podatke stanara, pokrenite verifikacijske kapije:

- `wp tenant verify-no-legacy --site=<site-id>` potvrđuje da stanar više ne zavisi od naslijeđenih putanja na mrežnoj strani.
- `wp tenant verify-sovereign-push --site=<site-id>` potvrđuje da se suvereni push poslovi mogu obraditi i isprazniti.

Integracije trebaju tretirati neuspjelu verifikaciju kao blokadu implementacije i izbjegavati označavanje stanara kao aktivnog dok se neuspjeh ne riješi.

## Brisanje stanara {#tenant-deletion}

Tokovi brisanja trebaju pozvati putanju uklanjanja addona kako bi se očistile vjerodajnice baze podataka stanara. Vanjske integracije mogu ukloniti resurse pružatelja nakon uspješnog uklanjanja, ali ne bi trebale brisati host baze podataka ili foldere dok verifikacija ili asinhroni push poslovi još traju.

## Zastarjeli ruter baze podataka {#deprecated-database-router}

Naslijeđeni `Database_Router` zamijenjen je stubom za zastarjelost. Nove integracije trebaju razriješiti stanare kroz trenutni ruter stranice i API-je registra stanara umjesto da zavise od stare klase rutera.
