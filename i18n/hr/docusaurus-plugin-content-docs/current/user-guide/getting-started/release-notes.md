---
title: Napomene o izdanju
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Napomene o verzijama

## Verzija 2.13.0 — Izlazak 5. lipnja 2026. {#version-2130--released-on-2026-06-05}

- Novo: Dodana podrška za suverene tenanate (sovereign-tenant) za tokove korisničkog računa, plaćanja, obračuna, sajta, faktura, promjene šablona i mapiranje domena kako bi tenantske mreže mogle usmjeravati korisnike nazad na glavni sajt za upravljane radnje.
- Novo: Dodana provjera kredencijala za obnavljanje pretplate (renewal-credential checks) tako da gateway može onemogućiti automatsko obnavljanje kada nedostaje spremljeni poslovni ugovor, pretplata ili vault token.
- Novo: Dodana HMAC-verifikovana loopback objavljivanja za predviđanje novog sajta kako bi proces provizije sa obračuna do sajta bio pouzdaniji na hostovima gdje su pozivi u pozadini odloženi.
- Novo: Dodani developer extension points za SSO URL-ove, osnovne domene obrasca obračuna (checkout-form base domains) i automatsko kreiranje registra domena.
- Popravljeno: SSO je sada pouzdaniji na mapiranim domenima, anonimnim posjetima brokera, logovanju i konfliktima međusobnih pluginova.
- Popravljeno: Predviđanje novog sajta sada se oporavlja od zastarelih flag za objavljivanje (publish flags) i izbjegava ostavljanje korisnika na ekranu kreiranja sajta.
- Popravljeno: Registri domena više se ne kreiraju za zajedničke osnovne domene obrasca obračuna, a nekorisni pozivi u pozadini provajdera hostova se preskaču kada nema aktivirane integracije.
- Popravljeno: Predviđanje novog sajta, adrese obračuna, resetiranje lozinke, potvrda e-maila, promjena šablona, ture i situacije na korisničkom dashboardu više ne blokiraju normalne tokove korisnika.
- Popravljeno: E-mailovi za obavijesti sada zadržavaju privatnost primaoca dok se izbjegavaju fatalne greške SMTP/pluginova kada propadaju liste primaoca ili transport e-maila.
- Popravljeno: Situacije pri obnavljanju pretplate, prikazivanje isteka i prikupljanja plaćanja sada izbjegavaju trenutno istek, padove sistema ili propuštene potrebne uplate.
- Poboljšano: WordPress kompatibilnost testirana do verzije 7.0, produkcijski Vue asets se ponovo grade iz npm izvora, a Cypress end-to-end pokrivenost sada provjerava više tokova obračuna, postavljanja, SSO i gateway-a.

## Verzija 2.12.0 — Izdana 15.05.2026 {#version-2120--released-on-2026-05-15}

- Novo: Dodat Hostinger (hPanel) kao podržan provajder hosta s integracijom mapiranja domena.
- Novo: Site Exporter sada obrađuje pakete uvoza mreže za pojednostavljenu oporavak sajta na cijelu mrežu.
- Popravak: E-mailovi BCC obavijesti sada koriste zaglavlje koje ne otkriva primatelje kako bi se spriječilo otkrivanje adresa primaoca.
- Popravak: Datum isteka članstva više nije oštećen prilikom spremanja vrijednosti bez datuma.
- Popravak: Ažuriranja članstva na Stripe sada ispravno uklanjaju popuste bez pozivanja zastarjelog API-ja `deleteDiscount`.
- Popravak: Preusmjeravanja SSO na sajtom mapiranom po domeni sada su ograničena kako bi se spriječili beskonačni petlje preusmjeravanja.
- Popravak: Odabir slike u asistentu za postavljanje ispravno ažurira podgrađeni model podataka.
- Popravak: CLI Site Exporter sada zadržava ispravan podrazmjeni odabir sajta na mreži.
- Poboljšano: Uklonjen je paket `wp-cli` koji je bio u paketu dodatka, što je smanjilo veličinu dodatka.

## Verzija 2.11.0 — Izdana 11.05.2026 {#version-2110--released-on-2026-05-11}

- Novo: Site exportovi sada uključuju samostalno pokrećući `index.php`, tako da ZIP može biti instaliran na novom hostingu bez zasebne instalacije dodatka.
- Novo: Mrežni export omogućuje administratorima da eksportiraju sve podsajte u jedan arhivski datoteka s stranice za Site Export admina.
- Novo: Omogućena je opcija `Site Templates plan toggle` koja se sada primjenjuje putem fallback lanca, ispravno ograničavajući dostupnost šablona prema limitima plana.
- Novo: Editor obrasca za checkout upozorava kada se dodaje proizvod bez konfiguriranog obveznog polja.
- Novo: Kartica postavki Uvoza/Izvoza sada jasno opisuje svoj opseg i direktno vodi do alata Site Export.

## Verzija 2.10.0 — Izdana 05.05.2026 {#version-2100--released-on-2026-05-05}

Novo: Wizard za postavljanje PayPal-a usmjeren za ručno unos kredencijala s OAuth flagom za bezprekidno konfiguriranje gatewaya.
Novo: Prebacivanje šablona korisničkog panela redizajnirano s karticom current-template, trajnom mrežom (persistent grid) i gumbom **Reset current template**.
Popravljeno: Prebacivanje šablona više ne blokira UI zbog neuspjeha AJAX poziva.
Popravljeno: Statusi dozvole za prebacivanje šablona osigurani protiv neovlaštenog pristupa.
Popravljeno: Unosi za nadjačavanje stranice (Site override) validirani prije spremanja.
Popravljeno: Prompt za adresu za fakturiranje sada se prikazuje kada je adresa prazna.
Popravljeno: Rješenje upozorenja o deprecaciji null-to-string u PHP 8.1 verziji.
Popravljeno: Trenutni lazy-loaded elementi učitavaju se prije init hooka kako bi se spriječile problemi s vremenskim odnosima (timing issues).
Popravljeno: Filtriirani SSO put poštuje se kroz sve tokove prijave.
Popravljeno: Opcije za praznu identitet stranice su ovisne na spremanju zadržane.

## Verzija 2.9.0 — Izlazak 30.04.2026. {#version-290--released-on-2026-04-30}

- Novo: Dodat je export i import jedne stranice pod **Tools > Export & Import**.
- Popravljeno: ZIP datoteke za export se sada služe putem endpointa za autentifikovan preuzimanje.
- Popravljeno: Rješena je rizik od SQL injekcije i problema s upitima u čekajućim upitima za export/import.
- Popravljeno: Stranica koja čeka objavu se ne objavljuje kada admin ručno provjeri e-mail korisnika.
- Popravljeno: Čiste se sirovci (orphan) pending_site zapisi kada nedostaje članstvo.
- Popravljeno: Ispravljeni padding navigacije postavki i anker navigacije za pretraživanje.
- Popravljeno: Stranice koje čekaju objavu sada se prikazuju na vrhu u prikazu All Sites.
- Popravljeno: Dodat je User-Agent header provajdera snimaka zaslonima (mShots) kako bi se spriječile greške 403.
- Popravljeno: Rješena je cirkularna ovisnost rasporeda crona za import.
- Popravljeno: Tour ID-ovi su normalizirani na podvlačne crte u ključevima postavki korisnika.
- Poboljšano: Sada se koristi ZipArchive umjesto Alchemy/Zippy za bolju kompatibilnost.

## Verzija 2.8.0 — Izlazak 29.04.2026. {#version-280--released-on-2026-04-29}

- Novo: Omogućena prebacivanje Jumper u UI postavki Ostalih opcija.
- Novo: Dodana kolona Status u tablici formulara pri kolačiću (checkout forms list table).
- Novo: Loader za fajlove sunrise add-on za prilagođene ekstenzije MU-plugin sunrise.
- Poboljšano: Uklonjena postavka uključivanja izvještavanja o greškama s stranice postavki.
- Popravljeno: Kartica stranice zahvalnosti — slika je sada ograničena i linkovi stilizirani ispravno.
- Popravljeno: Proizvođač snimaka (screenshot provider) prebačen s thum.io na WordPress.com mShots.
- Popravljeno: Omogućavanje Registracije i podrazumne uloge sada postavlja ispravne podrazume na novoj instalaciji.
- Popravljeno: `get_site_url()` više ne vraća prazan rezultat kada domen uključuje port.
- Popravljeno: Fajlovi medija se sada ispravno kopiraju kada je postavka `copy_media` bila prazna.
- Popravljeno: Object cache se ispravno poništava nakon pisanja sitemeta nakon `network-activate`.
- Popravljeno: Domen auto-promoviran na primarni prilikom DNS verifikacije za domene s tri dijela.
- Popravljeno: Očekivana članarina se otkazuje kada se obriše istekle plaćene informacije.
- Popravljeno: Provjerilac snaga lozinke se vraća nakon što se odbije prompt za prijavu putem linka (inline login prompt).
- Popravljeno: Neograničena ponovna učitavanje stranice na stranici zahvalnosti zaustavljena kada je stranica već kreirana.
- Popravljeno: Opcija registracije WP core sinkronizirana pri aktivaciji dodatka i spremanju postavki.
- Popravljeno: Dodatna zaštita od nule (Null expiration guard) dodana u `calculate_expiration` za kompatibilnost s PHP 8.4.
- Popravljeno: Duplikat registracija blokiran kada korisnik već ima aktivnu članarinu.
- Popravljeno: Dodana provjera na null vrijednosti za `date_expiration` u kolačiću (checkout).
- Popravljeno: Proviđanje stranice je ojačano — ograničenja, inferencija članstva, promocija domena.
- Popravljeno: Oznaka statusa prije instalacije ispravljena na NE Aktivirano kada provjera ne uspije.
- Popravljeno: Domen kolačića korišten za URL-ove za verifikaciju e-maila.
- Popravljeno: Automatska prijava nakon kolačića (auto-login) kada nema polja za lozinku.
- Popravljeno: Besplatne članarine više ne isteku — tretira se kao doživotna.

Popravak: Email verifikacijski portal zadržava objavu stranice dok korisnik ne prođe provjeru e-pošća.
Popravak: Osnovni put (base path) i identitetni put (identity route) za SES v2 API endpointa ispravljeni.
Popravak: Hook `wu_inline_login_error` emitira se u bloku hvatanja prije slanja.
