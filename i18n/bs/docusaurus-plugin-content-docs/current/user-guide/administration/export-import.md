---
title: Izvoz i uvoz
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Izvoz i Uvoz

Ultimate Multisite 2.9.0 dodaje alat za **Izvoz i Uvoz** za samostalnu stranicu, koji se nalazi pod **Alati > Izvoz i Uvoz**. Koristite ga kada trebate spakovati jednu WordPress stranicu u ZIP datoteku, vratiti tu ZIP datoteku, ili premjestiti stranicu između kompatibilnih instalacija WordPress-a za samostalnu stranicu i Ultimate Multisite.

## Zahtjevane dozvole

Morate se prijaviti kao administrator koji ima pristup meniju **Alati** u WordPressu na stranici koju izvozite ili uvozite. Na Multisite mreži, koristite račun administratora mreže prilikom izvoza ili uvoza podstranica iz alata Ultimate Multisite na nivou mreže.

Preuzimanje ZIP datoteka za izvoz obavlja se putem autentificiranog endpointa za preuzimanje, pa zadržite aktivnu administratorsku sesiju sve dok preuzimanje ne završi i ne dijelite generisane URL adrese za preuzimanje javno.

## Izvoz stranice u ZIP

1. Na WordPress administraciji stranice koju želite kopirati, idite na **Alati > Izvoz i Uvoz**.
2. Otvorite područje za izvoz i odaberite stranicu koju želite spakovati.
3. Odaberite opcionalni sadržaj koji želite uključiti, kao što su uploadovi, pluginovi i teme, kada su te opcije dostupne.
4. Pokrenite izvoz i sačekajte da proces završi. Velike stranice mogu zahtijevati da proces završi u pozadini prije nego što je ZIP datoteka spremna.
5. Preuzmite gotov ZIP iz liste izvoza.

Sačuvajte ZIP na sigurnom mjestu. Može sadržavati sadržaj stranice, postavke, medijske fajlove i odabrane kodne resurse.

## Šta izvoz uključuje

ZIP izvoz može uključivati:

- Sadržaj baze podataka i konfiguraciju odabrane stranice.
- Uploadovane medijske fajlove kada su uploadovi uključeni.
- Pluginove i teme kada su te opcije odabrane.
- Metadata za uvoz koje alat Izvoz i Uvoz koristi za rekonstrukciju stranice na ciljnoj instalaciji.

Točan veličina ZIP datoteke zavisi od količine medija, odabranih pluginova i tema, te veličine tabela baze podataka stranice.

## Uvoz stranice iz ZIP

1. Idite na **Alati > Izvoz i Uvoz** na ciljnoj WordPress stranici.
2. Otvorite područje za uvoz i uploadujte ZIP datoteku koju je kreirao alat Izvoz i Uvoz.
3. Unesite zamjenski URL ako stranica treba da koristi novu adresu, ili ostavite polje prazno da zadržite originalni URL.
4. Odaberite da li želite da obrišete uploadovani ZIP nakon završetka uvoza.
5. Kliknite na **Počni uvoz**.
6. Pratite uvoz koji je u toku sve dok ne završi. Koristite **Otkaže uvoz** samo ako morate zaustaviti proces prije završetka.
7. Pregledajte uvoznu stranicu prije nego što dozvolite normalan promet ili pristup klijentima.

Na instalaciji WordPress-a za samostalnu stranicu, uvoz ZIP datoteke zamjenjuje trenutnu stranicu uvoznom stranicom. Napravite kompletnu rezervnu kopiju ciljne stranice prije nego što počnete, i izbjegavajte pokretanje više uvoza za istu stranicu istovremeno.

## Ograničenja i napomene o kompatibilnosti

- Vrlo veliki direktorijumi za upload ili medijske biblioteke mogu stvoriti velike ZIP datoteke. Potvrdite PHP limite za upload, limite za izvršavanje, disk prostor, memoriju i postavke timeouta servera prije izvoza ili uvoza velikih stranica.
- Vrlo velike medijske biblioteke možda će morati biti premeštene tokom perioda održavanja sa niskim prometom.
- Ciljna WordPress instalacija treba da pokreće kompatibilne verzije WordPress-a, PHP-a, Ultimate Multisite-a, pluginova i tema.
- Uvoz za samostalnu stranicu zamjenjuje ciljnu stranicu. Nije alat za spajanje (merge tool).
- Premještanje sa Multisite na samostalnu stranicu i sa samostalne stranice na Multisite podržano je samo kada okruženje primača može pokrenuti pluginove, teme, URL adrese i potrebne komponente Ultimate Multisite izvešćene stranice.
- Držite ZIP privatnim. Može sadržavati sadržaj baze podataka, uploadovane fajlove i detalje konfiguracije izvešćene stranice.

Za starije radove toka izvoza na nivou mreže, pogledajte [Site Export](/user-guide/administration/site-export).
