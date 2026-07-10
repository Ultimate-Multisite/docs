---
title: Izvoz i uvoz
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Eksportiranje i Uvoz {#export--import}

Ultimate Multisite 2.9.0 dodaje jedan alat za **Eksportiranje i Uvoz** pod menijem **Alati > Eksportiranje i Uvoz**. Koristite ga kada vam je potrebno pakirati jednu WordPress stranicu kao ZIP datoteku, vratiti taj ZIP ili premjestiti stranicu između kompatibilnih Ultimate Multisite i single-site instalacija WordPressa.

## Potrebna dozvolama {#required-permissions}

Morate se prijaviti kao administrator koji ima pristup meniju **Alati** na stranici koju eksportirate ili uvozite. Na multisite mreži, koristite administratorsku račun mreže kada eksportirate ili uvozite subsitove iz alata Ultimate Multisite na nivou mreže.

Preuzimanja ZIP datoteka za eksportiranje se obavljaju putem autentifikovanog endpointa za preuzimanje, tako da zadržite aktivnu sesiju administratora dok preuzimanje ne završi i nemojte javno dijeliti generirane URL-ove za preuzimanje.

## Eksportiranje stranice u ZIP {#exporting-a-site-to-a-zip}

1. U WordPress adminu za stranicu koju želite kopirati, idite na **Alati > Eksportiranje i Uvoz**.
2. Otvorite područje za eksportiranje i odaberite stranicu koju želite pakirati.
3. Odaberite opcionalni sadržaj koji želite uključiti, kao što su uploadovi, pluginovi i teme, kada su ti opcije dostupne.
4. Pokrenite eksportiranje i sačekajte da se proces završi. Velike stranice možda će morati završiti u pozadini prije nego što je ZIP spreman.
5. Preuzmite gotov ZIP iz liste eksporta.

Držite ZIP na sigurnom mjestu. Može sadržavati sadržaj stranice, postavke, medijske datoteke i odabrane kod resurse.

## Šta uključuje eksport {#what-the-export-includes}

ZIP za eksportiranje može uključivati:

- Bazu podataka i konfiguraciju odabrane stranice.
- Uploadirane medijske datoteke ako su uploadovi uključeni.
- Pluginove i teme ako su ti opcije označene.
- Metapodatke za uvoz koje koristi alat Eksportiranje i Uvoz kako bi se stranica ponovo izgradila na ciljnoj instalaciji.

Točna veličina ZIP datoteke ovisi o količini medija, odabranih pluginova i tema te veličini tablica baze podataka sajta.

## Uvoz sajta iz ZIP datoteke {#importing-a-site-from-a-zip}

1. Idite na **Alat > Izvoz i uvoz** na odredištu WordPress sajta.
2. Otvorite područje za uvoz i priložite ZIP datoteku koju je kreirao alat Izvoz i uvoz.
3. Unesite zamjensku URL adresu ako se sajt treba koristiti s novom adresom, ili ostavite polje prazno da zadržite originalnu URL adresu.
4. Odaberite hoćete li obrisati priloženu ZIP datoteku nakon što uvoz završi.
5. Kliknite na **Počni uvoz**.
6. Pratite status čekanja za uvoz dok se ne završi. Koristite **Otkaži uvoz** samo ako trebate zaustaviti proces prije završetka.
7. Pregledajte uvezani sajt prije nego što dozvolite normalni promet ili pristup korisnicima.

Na instalaciji WordPressa s jednim sajtom, uvoz ZIP datoteke zamjenjuje trenutni sajt uvezanim sajtom. Napravite puni backup ciljnog sajta prije početka i izbjegavajte pokretanje više uvaza za isti sajt istovremeno.

## Ograničenja i napomene o kompatibilnosti {#limitations-and-compatibility-notes}

Direktorijumi za vrlo velike poruke ili medijske biblioteke mogu generirati velike ZIP datoteke. Provjerite PHP limite za uploadove, limite izvršavanja, prostor na disku, memoriju i postavke servera za timeout prije izvoza ili uvoza velikih web stranica.
Vrlo velike medijske biblioteke možda će zahtijevati premještanje tijekom maintenance prozora s niskim prometom.
Ciljna WordPress instalacija bi trebala koristiti kompatibilne verzije WordPress-a, PHP-a, Ultimate Multisite, pluginova i tema.
Uvoz jedne stranice zamjenjuje ciljnu stranicu. To nije alat za spajanje (merge tool).
Premještanja s multisite na jednu stranicu i s jedne stranice na multisite podržavaju se samo ako je ciljno okruženje u koje se premještaju podržana verzija pluginova, tema, URL-ovi i potrebni Ultimate Multisite komponenti.
Održavajte ZIP privatnim. Može sadržavati podatke iz baze podataka, uploadane datoteke i konfiguracijske detalje s izvozne stranice.

Za starije radne tokove za izvoz na nivou mreže, pogledajte [Site Export](/user-guide/administration/site-export).
