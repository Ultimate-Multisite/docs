---
title: Integracija večnajemništva
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Integracija večnajemništva

Ultimate Multisite: večnajemništvo 1.2.0 spreminja več integracijskih stičnih točk za suverene najemnike, preverjanje migracij in avtomatizacijo življenjskega cikla najemnika.

## Zagonski potek najemnika {#tenant-bootstrap-flow}

Integracije, ki ustvarjajo ali spreminjajo najemnike, naj sledijo temu vrstnemu redu:

1. Razrešite zapis registra najemnika in izolacijski model.
2. Ustvarite ali preverite zapisovalnik podatkovne zbirke najemnika.
3. Zaženite shemo najemnika.
4. Zagotovite uporabnike najemnika.
5. Registrirajte usmerjanje najemnika in poti datotečnega sistema.
6. Pred izpostavitvijo najemnika zaženite preverjanje migracije.

Ne predpostavljajte, da lahko suvereni najemnik ponovno uporabi omrežno povezavo s podatkovno zbirko. Uporabite register najemnikov in abstrakcije zapisovalnika, ki jih zagotavlja dodatek.

## SSO in REST hooki {#sso-and-rest-hooks}

Brezstanjna samodejna prijava najemnika uporablja kratkotrajne žetone z zahtevkom namena, zaščito pred ponovitvijo JTI, omejitvijo poteka veljavnosti in pripenjanjem izvora. Integracije, ki dodajajo gumbe za prijavo ali povezave za oddaljeno upravljanje, naj obiske najemnika ustvarijo prek podprtega SSO poteka, namesto da neposredno sestavljajo URL-je za prijavo najemnika.

Revizijski dogodki API-ja na omrežni strani in dnevni povzetki so na voljo za prehode suverenih najemnikov. Te dnevnike uporabite pri odpravljanju napak v zunanjih sistemih, ki kličejo endpoint-e življenjskega cikla najemnika.

## URL-ji dejanj suverenih strank {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 usmerja dejanja strank suverenih najemnikov nazaj na glavno spletišče za poteke računa, zaključka nakupa, obračunavanja, računov, spletišča, preklapljanja predlog in preslikave domen. Integracije, ki prikazujejo povezave za upravljanje na strani najemnika, naj ta dejanja usmerijo na panel strank glavnega spletišča in vključijo preverjen cilj za vrnitev, ko naj bi se uporabnik po dokončanju dejanja lahko vrnil k najemniku.

Uporabite jedrni SSO ovoj za meddomenske povezave za upravljanje:

```php
$url = wu_with_sso($main_site_customer_url);
```

Ustvarjeni URL ostane filtrirljiv prek `wu_sso_url`, ki prejme SSO URL, trenutnega uporabnika, ID ciljnega spletišča in kontekst preusmeritve. Dodatki lahko ta filter uporabijo za dodajanje konteksta, specifičnega za ponudnika, ali za zamenjavo URL-ja posrednika, pri čemer ohranijo preverjanje žetonov Ultimate Multisite.

Ne podvajajte stanja članstva, računov, naslova za obračun, predlog ali upravljanja domen znotraj suverenega najemnika. Tenant Dashboard obravnavajte kot zaganjalnik, panel strank glavnega spletišča pa kot sistem zapisa za upravljana dejanja.

## Preverjanje migracije {#migration-verification}

Ko migracija ali integracija življenjskega cikla spremeni podatke najemnika, zaženite preverjevalna vrata:

- `wp tenant verify-no-legacy --site=<site-id>` potrdi, da najemnik ni več odvisen od starih poti na omrežni strani.
- `wp tenant verify-sovereign-push --site=<site-id>` potrdi, da se opravila suverenega potiska lahko obdelajo in izpraznijo.

Integracije naj neuspešno preverjanje obravnavajo kot blokado uvedbe in naj najemnika ne označijo kot aktivnega, dokler napaka ni odpravljena.

## Brisanje najemnika {#tenant-deletion}

Poteki brisanja naj pokličejo pot razgradnje dodatka, da se poverilnice podatkovne zbirke najemnika počistijo. Zunanje integracije lahko odstranijo vire ponudnika po uspešni razgradnji, vendar ne smejo brisati gostiteljskih podatkovnih zbirk ali map, dokler preverjanje ali asinhrona opravila potiska še vedno tečejo.

## Zastarel usmerjevalnik podatkovne zbirke {#deprecated-database-router}

Stari `Database_Router` je bil zamenjan z opuščenim ogrodjem. Nove integracije naj najemnike razrešujejo prek trenutnega usmerjevalnika spletišč in API-jev registra najemnikov, namesto da bi bile odvisne od starega razreda usmerjevalnika.
