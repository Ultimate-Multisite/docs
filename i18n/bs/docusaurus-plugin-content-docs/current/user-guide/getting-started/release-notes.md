---
title: Napomene o izdanju
sidebar_position: 9
_i18n_hash: e9f9d20e55608b81945ab7dfcf495fcb
---
# Napredne napomene (Release Notes)

## Verzija 2.12.0 — Obraćeno 2026-05-15

- Novo: Dodali smo Hostinger (hPanel) kao podržan provajder hostinga sa integracijom mapiranja domena.
- Novo: Site Exporter sada rukuje paketima za uvoz na nivou mreže, što pojednostavljuje obnavljanje sajtova na cijeloj mreži.
- Popravak: Email-i za BCC broadcast sada koriste zaglavlje `undisclosed-recipients` kako bi spriječili otkrivanje adresa primaoca.
- Popravak: Datum isteka članstva više nije oštećen prilikom spremanja sa ne-datum vrijednošću.
- Popravak: Ažuriranja članstva za Stripe sada ispravno brišu popuste bez pozivanja zastarjelog `deleteDiscount` API-ja.
- Popravak: SSO preusmjeravanja na sajtovima mapiranih domena sada su ograničena kako bi spriječili beskonačne petlje preusmjeravanja.
- Popravak: Odabir slike u setup wizardu sada ispravno ažurira osnovni model podataka.
- Popravak: Site Exporter CLI sada zadržava ispravan podrazumevani izbor sajta na nivou mreže.
- Poboljšano: Uklonjen je pakovani `wp-cli` iz paketa plugin-a, smanjivanjem veličine plugin-a.

## Verzija 2.11.0 — Obraćeno 2026-05-11

- Novo: Izvoz sajtova sada pakuje samostalno pokretni `index.php`, tako da se ZIP može instalirati na novom hostu bez zasebnog instaliranja plugin-a.
- Novo: Izvoz na nivou mreže omogućava administratorima da izvezu sve podsajtove u jednom arhivu sa stranice za administraciju Site Export-a.
- Novo: Omogućavanje prekida (toggle) Site Templates plan sada je primijenjeno putem lanca fallback-a, pravilno ograničavajući dostupnost šablona za ograničenja plana.
- Novo: Uređivač formulara za checkout upozorava kada se dodaje proizvod bez konfigurisanog obaveznog polja.
- Novo: Tab za postavke Uvoz/Izvoz sada jasno opisuje svoj opseg i direktno vodi do alata Site Export.

## Verzija 2.10.0 — Obraćeno 2026-05-05

- Novo: Vođeni setup wizard za PayPal omogućava ručni unos vjerodajnica, sa OAuth flag gate-om za neprekidnu konfiguraciju gateway-a.
- Novo: Panel za klijente za prebacivanje šablona (Template switch) revidiran je sa karticom trenutnog šablona, trajnim gridom i dugmetom **Reset current template** (Resetovanje trenutnog šablona).
- Popravak: Prebacivanje šablona više ne dovodi do zamrzavanja korisničkog interfejsa (UI) u slučaju AJAX neuspjeha.
- Popravak: Statusi dozvole za prebacivanje šablona osigurani su protiv neovlaštenog pristupa.
- Popravak: Unosi nadjačavanja sajta (Site override inputs) validirani su prije spremanja.
- Popravak: Prompt za adresi za naplatu sada se prikazuje kada je adresa prazna.
- Popravak: Riješeni su upozorenja o deprecaciji (PHP 8.1 null-to-string).
- Popravak: Currents učitava se putem lazy-loaded before init hook-a kako bi spriječio vremenske probleme.
- Popravak: Filtrirani SSO put (path) poštuje se kroz sve tokove prijave.
- Popravak: Opcije za prazan identitet sajta (Blank site identity) zadržane su prilikom spremanja.

## Verzija 2.9.0 — Obraćeno 2026-04-30

- Novo: Dodali smo izvoz i uvoz pojedinačnog sajta pod **Tools > Export & Import**.
- Popravak: ZIP fajlovi za izvoz sada se serviraju putem autentificiranog endpoint-a za preuzimanje.
- Popravak: Ispravljen rizik od SQL injekcije i problemi sa upitima u pending izvoz/uvoz upitima.
- Popravak: Pending sajt se ne objavljuje kada administrator ručno provjeri email klijenta.
- Popravak: Čisteći su se "sirovi" (orphan) zapisi `pending_site` kada nedostaje članstvo.
- Popravak: Ispravljen padding navigacije postavki i navigacija sidrom za pretragu.
- Popravak: Pending sajtovi sada se prikazuju prvi u prikazu "All Sites" (Svi sajtovi).
- Popravak: Dodat User-Agent zaglavlje za provajdera snimaka ekrana (mShots) kako bi se spriječili 403 errori.
- Popravak: Riješena je kružna zavisnost (circular dependency) za cron raspored uvoza.
- Popravak: ID-ovi za ture (Tour IDs) normalizovani su na podvučnike u ključevima postavki korisnika.
- Poboljšano: Umjesto Alchemy/Zippy, sada se koristi ZipArchive za bolju kompatibilnost.

## Verzija 2.8.0 — Obraćeno 2026-04-29

- Novo: Dodali smo preklopnik (toggle) 'Enable Jumper' u UI za opcije 'Other Options' (Ostale opcije).
- Novo: Dodana je kolona statusa u tabelu sa listom formulara za checkout.
- Novo: Dodat addon sunrise file loader za prilagođene MU-plugin sunrise ekstenzije.
- Poboljšano: Uklonjena je opcija za uključivanje izvještavanja o greškama sa stranice postavki.
- Popravak: Kartica sajta na stranici "Hvala" — slika sada je ograničena i linkovi pravilno stilizovani.
- Popravak: Provajder snimaka ekrana prebačen je sa thum.io na WordPress.com mShots.
- Popravak: Enable Registration i Default Role sada postavljaju ispravne podrazumevane vrijednosti na novoj instalaciji.
- Popravak: `get_site_url()` više ne vraća prazno kada domen uključuje port.
- Popravak: Kopiranje media fajlova sada se ispravno kopira kada je postavka `copy_media` bila prazna.
- Popravak: Object cache se sada ispravno poništava nakon pisanja sitemeta putem `network-activate`.
- Popravak: Custom domen automatski se unapređuje u primarni na DNS provjeri za domene sa 3 dijela.
- Popravak: Pending članstvo otkazano je kada se čisti istekao plaćanje.
- Popravak: Provera snage lozinke ponovno se vezuje nakon što se zatvori inline login prompt.
- Popravak: Zaustavljeno je beskonačno ponovno učitavanje stranice na stranici "Hvala" kada je sajt već kreiran.
- Popravak: Opcija registracije WP core sinkronizovana je prilikom aktivacije plugin-a i spremanja postavki.
- Popravak: Dodata je zaštita od null vrijednosti u `calculate_expiration` za kompatibilnost sa PHP 8.4.
- Popravak: Dupli registracije blokirani su kada klijent već ima aktivno članstvo.
- Popravak: Dodata je provjera null za `date_expiration` u checkout-u.
- Popravak: Hardened je provizija sajta — ograničenja, inferencija članstva, promocija domena.
- Popravak: Status oznake pre-instalacije ispravljen je na NOT Activated kada provera ne uspije.
- Popravak: Domen checkout-a korišten za URL-ove za provjeru emaila.
- Popravak: Auto-login nakon checkout-a kada nema polja za lozinku.
- Popravak: Besplatno članstvo više ne ističe — tretira se kao doživotno.
- Popravak: Email verifikacioni gate zadržava objavljivanje sajta dok klijent ne provjeri email.
- Popravak: Ispravljen je bazni put i ruta identiteta za SES v2 API endpoint.
- Popravak: Hook `wu_inline_login_error` emitovan je u pre-submit catch bloku.
